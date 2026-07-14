const STORE_KEY = "smultronstigen-dinner-state-v1";
const OWNER_KEY = "smultronstigen-dinner-owner-id-v1";
const SUPABASE_TABLE = "dinner_app_state";

let db = null;
let remoteReady = false;
let applyingRemoteState = false;
let pendingRemoteSave = null;

const starterFoods = [
  {
    id: "poke",
    name: "Poke bowl",
    color: "#2f6d58",
    options: ["rice", "salmon", "tofu", "avocado", "sesame", "mango", "chili mayo"],
  },
  {
    id: "tacos",
    name: "Tacos",
    color: "#b9812a",
    options: ["beef", "beans", "salsa", "guacamole", "cheese", "jalapeno", "corn"],
  },
  {
    id: "pasta",
    name: "Fresh pasta",
    color: "#b23a2f",
    options: ["tomato", "cream sauce", "parmesan", "mushroom", "basil", "gluten-free"],
  },
  {
    id: "soup",
    name: "Soup night",
    color: "#315f8f",
    options: ["bread", "butter", "lentils", "chicken", "vegan", "extra herbs"],
  },
  {
    id: "grill",
    name: "Garden grill",
    color: "#8a5138",
    options: ["halloumi", "sausage", "vegetables", "potatoes", "salad", "mustard"],
  },
  {
    id: "pizza",
    name: "Pizza",
    color: "#6b5a9b",
    options: ["mozzarella", "pepperoni", "mushroom", "olives", "arugula", "vegan cheese"],
  },
];

const demoHosts = [
  {
    id: "demo-lina",
    hostName: "Lina",
    date: nextDate(2),
    time: "18:30",
    location: "Our place",
    seats: 5,
    notes: "Kids welcome. Bring drinks if you want something specific.",
    menu: [
      {
        foodId: "poke",
        name: "Poke bowl",
        color: "#2f6d58",
        included: ["rice", "salmon", "avocado", "mango"],
        excluded: ["sesame"],
      },
    ],
    guests: [
      {
        id: "guest-demo",
        name: "Maja",
        size: 2,
        notes: "No sesame, please.",
        members: [
          { id: "member-demo-1", name: "Maja", isChild: false },
          { id: "member-demo-2", name: "Leo", isChild: true },
        ],
      },
    ],
    createdAt: Date.now() - 100000,
  },
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function seedState() {
  return {
    foods: clone(starterFoods),
    hosts: clone(demoHosts).map((host) => ({ ...host, ownerId })),
  };
}

const els = {
  resetDemoButton: document.querySelector("#resetDemoButton"),
  openHostButton: document.querySelector("#openHostButton"),
  openJoinButton: document.querySelector("#openJoinButton"),
  hostDialog: document.querySelector("#hostDialog"),
  joinDialog: document.querySelector("#joinDialog"),
  joinPickerDialog: document.querySelector("#joinPickerDialog"),
  customFoodDialog: document.querySelector("#customFoodDialog"),
  sheetBackdrop: document.querySelector("#sheetBackdrop"),
  hostForm: document.querySelector("#hostForm"),
  hostSubmitButton: document.querySelector("#hostSubmitButton"),
  joinForm: document.querySelector("#joinForm"),
  customFoodForm: document.querySelector("#customFoodForm"),
  hostList: document.querySelector("#hostList"),
  liveCount: document.querySelector("#liveCount"),
  seatCount: document.querySelector("#seatCount"),
  guestCount: document.querySelector("#guestCount"),
  sortSelect: document.querySelector("#sortSelect"),
  foodSearch: document.querySelector("#foodSearch"),
  foodChips: document.querySelector("#foodChips"),
  selectedMenu: document.querySelector("#selectedMenu"),
  addCustomFoodButton: document.querySelector("#addCustomFoodButton"),
  joinHostId: document.querySelector("#joinHostId"),
  joinTarget: document.querySelector("#joinTarget"),
  joinPickerList: document.querySelector("#joinPickerList"),
  partyMemberList: document.querySelector("#partyMemberList"),
  addPartyMemberButton: document.querySelector("#addPartyMemberButton"),
  hostDate: document.querySelector("#hostDate"),
  syncBadge: document.querySelector("#syncBadge"),
};

const ownerId = getOwnerId();
let state = loadState();
let draftMenu = [];
let draftPartyMembers = [];
let editingHostId = null;

function nextDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function loadState() {
  const saved = localStorage.getItem(STORE_KEY);
  if (!saved) {
    return seedState();
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      foods: parsed.foods?.length ? parsed.foods : clone(starterFoods),
      hosts: Array.isArray(parsed.hosts) ? parsed.hosts : [],
    };
  } catch {
    return seedState();
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  saveRemoteState();
}

function hasSupabaseConfig() {
  const config = window.SMULTRONSTIGEN_SUPABASE;
  const key = config?.publishableKey || config?.anonKey;
  return Boolean(
    window.supabase &&
      config?.url &&
      key &&
      !config.url.includes("YOUR_PROJECT_REF") &&
      !key.includes("YOUR_SUPABASE_ANON_KEY") &&
      !key.includes("YOUR_SUPABASE_PUBLISHABLE_KEY"),
  );
}

function normaliseState(nextState) {
  return {
    foods: nextState?.foods?.length ? nextState.foods : clone(starterFoods),
    hosts: Array.isArray(nextState?.hosts)
      ? nextState.hosts.map((host) => ({
          ...host,
          guests: Array.isArray(host.guests) ? host.guests : [],
          menu: Array.isArray(host.menu) ? host.menu : [],
        }))
      : [],
  };
}

async function initRemoteState() {
  if (!hasSupabaseConfig()) {
    els.syncBadge.textContent = "Local only";
    els.syncBadge.classList.remove("live");
    return;
  }

  const config = window.SMULTRONSTIGEN_SUPABASE;
  db = window.supabase.createClient(config.url, config.publishableKey || config.anonKey);

  const { data, error } = await db.from(SUPABASE_TABLE).select("state").eq("id", "global").maybeSingle();
  if (error) {
    console.warn("Supabase is configured but could not load state. Using local fallback.", error);
    els.syncBadge.textContent = "Local fallback";
    els.syncBadge.classList.remove("live");
    return;
  }

  remoteReady = true;
  els.syncBadge.textContent = "Live sync";
  els.syncBadge.classList.add("live");
  if (data?.state) {
    applyingRemoteState = true;
    state = normaliseState(data.state);
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    render();
    applyingRemoteState = false;
  } else {
    await saveRemoteState();
  }

  db.channel("smultronstigen-dinner-state")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: SUPABASE_TABLE, filter: "id=eq.global" },
      (payload) => {
        if (!payload.new?.state) return;
        applyingRemoteState = true;
        state = normaliseState(payload.new.state);
        localStorage.setItem(STORE_KEY, JSON.stringify(state));
        render();
        applyingRemoteState = false;
      },
    )
    .subscribe();
}

async function saveRemoteState() {
  if (!remoteReady || applyingRemoteState || !db) return;

  clearTimeout(pendingRemoteSave);
  pendingRemoteSave = setTimeout(async () => {
    const { error } = await db.from(SUPABASE_TABLE).upsert({
      id: "global",
      state,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.warn("Could not save to Supabase. Local changes remain in this browser.", error);
      els.syncBadge.textContent = "Local fallback";
      els.syncBadge.classList.remove("live");
    }
  }, 120);
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function getOwnerId() {
  const saved = localStorage.getItem(OWNER_KEY);
  if (saved) return saved;
  const next = uid("owner");
  localStorage.setItem(OWNER_KEY, next);
  return next;
}

function isOwnedHost(host) {
  return host.ownerId === ownerId;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString, timeString) {
  const date = new Date(`${dateString}T${timeString || "18:00"}`);
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function seatsTaken(host) {
  return host.guests.reduce((total, guest) => total + guestSize(guest), 0);
}

function guestSize(guest) {
  return Array.isArray(guest.members) && guest.members.length ? guest.members.length : Number(guest.size || 0);
}

function seatsLeft(host) {
  return Math.max(0, Number(host.seats) - seatsTaken(host));
}

function sortedHosts() {
  const hosts = [...state.hosts].filter((host) => seatsLeft(host) > 0 || host.guests.length);
  const sortBy = els.sortSelect.value;
  if (sortBy === "seats") {
    hosts.sort((a, b) => seatsLeft(b) - seatsLeft(a));
  } else if (sortBy === "recent") {
    hosts.sort((a, b) => b.createdAt - a.createdAt);
  } else {
    hosts.sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  }
  return hosts;
}

function render() {
  renderStats();
  renderFoods();
  renderSelectedMenu();
  renderHosts();
}

function renderStats() {
  const hosts = state.hosts;
  els.liveCount.textContent = hosts.length;
  els.seatCount.textContent = hosts.reduce((total, host) => total + seatsLeft(host), 0);
  els.guestCount.textContent = hosts.reduce((total, host) => total + seatsTaken(host), 0);
}

function renderHosts() {
  const hosts = sortedHosts();
  els.hostList.innerHTML = "";

  if (!hosts.length) {
    const empty = document.querySelector("#emptyTemplate").content.cloneNode(true);
    els.hostList.append(empty);
    return;
  }

  hosts.forEach((host) => {
    const left = seatsLeft(host);
    const owned = isOwnedHost(host);
    const card = document.createElement("article");
    card.className = "host-card";
    card.innerHTML = `
      <div class="host-card-header">
        <div>
          <h3 class="host-title">${escapeHtml(host.hostName)} is hosting</h3>
          <p class="host-meta">${formatDate(host.date, host.time)} · ${escapeHtml(host.location)}</p>
        </div>
        <div class="seat-pill ${left === 0 ? "full" : ""}">
          ${left}<br><small>seats</small>
        </div>
      </div>
      ${host.notes ? `<p class="host-notes">${escapeHtml(host.notes)}</p>` : ""}
      <div class="menu-tags">
        ${host.menu.map(renderMenuTag).join("")}
      </div>
      ${host.guests.length ? `<div class="guest-list">${host.guests.map(renderGuest).join("")}</div>` : ""}
      <div class="card-actions ${owned ? "owned" : ""}">
        <button class="secondary-button" type="button" data-join="${host.id}" ${left === 0 ? "disabled" : ""}>Join</button>
        ${
          owned
            ? `
              <button class="secondary-button" type="button" data-edit-host="${host.id}">Edit</button>
              <button class="danger-button" type="button" data-remove="${host.id}">Remove</button>
            `
            : ""
        }
      </div>
    `;
    els.hostList.append(card);
  });
}

function renderMenuTag(item) {
  const included = item.included.length ? `With ${item.included.join(", ")}` : "Custom menu";
  const excluded = item.excluded.length ? ` · Without ${item.excluded.join(", ")}` : "";
  return `
    <div class="menu-tag">
      <strong>${escapeHtml(item.name)}</strong>
      <span>${escapeHtml(included + excluded)}</span>
    </div>
  `;
}

function renderGuest(guest) {
  const members = Array.isArray(guest.members) ? guest.members : [];
  const memberSummary = members.length
    ? members
        .map((member) => `${member.name || "Guest"}${member.isChild ? " (child)" : ""}`)
        .join(", ")
    : `${guestSize(guest)} joining`;
  return `
    <div class="guest-row">
      <div>
        <strong>${escapeHtml(guest.name)}</strong>
        <div class="guest-members">${escapeHtml(memberSummary)}</div>
        ${guest.notes ? `<div class="guest-notes">${escapeHtml(guest.notes)}</div>` : ""}
      </div>
      <strong>${guestSize(guest)}x</strong>
    </div>
  `;
}

function renderFoods() {
  const query = els.foodSearch.value.trim().toLowerCase();
  const foods = state.foods.filter((food) => food.name.toLowerCase().includes(query));
  els.foodChips.innerHTML = "";

  foods.forEach((food) => {
    const button = document.createElement("button");
    button.className = "food-chip";
    button.type = "button";
    button.innerHTML = `<span class="food-dot" style="background:${food.color}"></span>${escapeHtml(food.name)}`;
    button.addEventListener("click", () => addFoodToDraft(food));
    els.foodChips.append(button);
  });
}

function addFoodToDraft(food) {
  if (draftMenu.some((item) => item.foodId === food.id)) return;
  draftMenu.push({
    foodId: food.id,
    name: food.name,
    color: food.color,
    included: [...food.options],
    excluded: [],
  });
  renderSelectedMenu();
}

function renderSelectedMenu() {
  els.selectedMenu.innerHTML = "";
  if (!draftMenu.length) {
    els.selectedMenu.innerHTML = `<p class="host-meta">Choose at least one food. Tap each option to include or remove ingredients.</p>`;
    return;
  }

  draftMenu.forEach((item, itemIndex) => {
    const food = state.foods.find((entry) => entry.id === item.foodId);
    const wrapper = document.createElement("div");
    wrapper.className = "menu-item";
    wrapper.innerHTML = `
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <div class="option-grid">
          ${(food?.options || [])
            .map(
              (option) => `
                <label>
                  <input type="checkbox" data-menu-option="${itemIndex}" value="${escapeHtml(option)}" ${
                    item.included.includes(option) ? "checked" : ""
                  }>
                  ${escapeHtml(option)}
                </label>
              `,
            )
            .join("")}
        </div>
      </div>
      <button class="icon-button" type="button" data-remove-menu="${itemIndex}" aria-label="Remove ${escapeHtml(item.name)}">
        <span aria-hidden="true">×</span>
      </button>
    `;
    els.selectedMenu.append(wrapper);
  });
}

function openDialog(dialog) {
  els.sheetBackdrop.hidden = false;
  dialog.showModal();
}

function closeDialogs() {
  [els.hostDialog, els.joinPickerDialog, els.joinDialog, els.customFoodDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  els.sheetBackdrop.hidden = true;
}

function openHostDialog() {
  editingHostId = null;
  draftMenu = [];
  els.hostForm.reset();
  document.querySelector("#hostDialogTitle").textContent = "Host dinner";
  els.hostSubmitButton.textContent = "Publish host";
  els.hostDate.value = nextDate(1);
  document.querySelector("#hostTime").value = "18:30";
  document.querySelector("#hostSeats").value = 4;
  renderSelectedMenu();
  openDialog(els.hostDialog);
}

function openEditHostDialog(hostId) {
  const host = state.hosts.find((entry) => entry.id === hostId);
  if (!host || !isOwnedHost(host)) return;

  editingHostId = host.id;
  draftMenu = clone(host.menu || []);
  els.hostForm.reset();
  document.querySelector("#hostDialogTitle").textContent = "Edit dinner";
  els.hostSubmitButton.textContent = "Save changes";
  document.querySelector("#hostName").value = host.hostName || "";
  document.querySelector("#hostDate").value = host.date || nextDate(1);
  document.querySelector("#hostTime").value = host.time || "18:30";
  document.querySelector("#hostSeats").value = host.seats || 4;
  document.querySelector("#hostNotes").value = host.notes || "";
  const locationInput = document.querySelector(`[name="hostLocation"][value="${CSS.escape(host.location || "Our place")}"]`);
  if (locationInput) locationInput.checked = true;
  renderSelectedMenu();
  openDialog(els.hostDialog);
}

function openJoinDialog(hostId) {
  const host = state.hosts.find((entry) => entry.id === hostId);
  if (!host) return;
  closeDialogs();
  els.joinForm.reset();
  els.joinHostId.value = host.id;
  draftPartyMembers = [{ id: uid("member"), name: "", isChild: false }];
  els.joinTarget.innerHTML = `
    <strong>${escapeHtml(host.hostName)} · ${formatDate(host.date, host.time)}</strong>
    <div class="host-meta">${escapeHtml(host.location)} · ${seatsLeft(host)} seats open</div>
  `;
  renderPartyMembers();
  openDialog(els.joinDialog);
}

function openJoinPicker() {
  const hosts = sortedHosts().filter((host) => seatsLeft(host) > 0);
  els.joinPickerList.innerHTML = "";

  if (!hosts.length) {
    els.joinPickerList.innerHTML = `
      <div class="empty-picker">
        <p>No open dinner invites yet.</p>
        <button class="primary-button" type="button" data-open-host>Host instead</button>
      </div>
    `;
    openDialog(els.joinPickerDialog);
    return;
  }

  hosts.forEach((host) => {
    const button = document.createElement("button");
    button.className = "picker-host";
    button.type = "button";
    button.dataset.pickJoin = host.id;
    button.innerHTML = `
      <span>
        <strong>${escapeHtml(host.hostName)}</strong>
        <small>${formatDate(host.date, host.time)} · ${escapeHtml(host.location)}</small>
      </span>
      <b>${seatsLeft(host)} seats</b>
    `;
    els.joinPickerList.append(button);
  });

  openDialog(els.joinPickerDialog);
}

function renderPartyMembers() {
  els.partyMemberList.innerHTML = "";
  const host = state.hosts.find((entry) => entry.id === els.joinHostId.value);
  const openSeats = host ? seatsLeft(host) : 24;

  draftPartyMembers.forEach((member, index) => {
    const row = document.createElement("div");
    row.className = "party-member-row";
    row.innerHTML = `
      <label>
        Member name
        <input data-party-name="${index}" value="${escapeHtml(member.name)}" required placeholder="Name" />
      </label>
      <label class="child-toggle">
        <input type="checkbox" data-party-child="${index}" ${member.isChild ? "checked" : ""} />
        <span>Child</span>
      </label>
      <button class="icon-button" type="button" data-remove-party-member="${index}" ${
        draftPartyMembers.length === 1 ? "disabled" : ""
      } aria-label="Remove member">
        <span aria-hidden="true">x</span>
      </button>
    `;
    els.partyMemberList.append(row);
  });

  els.addPartyMemberButton.disabled = draftPartyMembers.length >= openSeats;
  els.addPartyMemberButton.textContent = draftPartyMembers.length >= openSeats ? "No seats left" : "Add member";
}

function addCustomFood(name, options) {
  const colorChoices = ["#2f6d58", "#b9812a", "#b23a2f", "#315f8f", "#6b5a9b"];
  const food = {
    id: uid("food"),
    name,
    color: colorChoices[state.foods.length % colorChoices.length],
    options,
  };
  state.foods.push(food);
  saveState();
  renderFoods();
  addFoodToDraft(food);
}

els.openHostButton.addEventListener("click", openHostDialog);
els.openJoinButton.addEventListener("click", openJoinPicker);

els.resetDemoButton.addEventListener("click", () => {
  state = seedState();
  saveState();
  render();
});

els.sortSelect.addEventListener("change", renderHosts);
els.foodSearch.addEventListener("input", renderFoods);
els.addCustomFoodButton.addEventListener("click", () => openDialog(els.customFoodDialog));
els.addPartyMemberButton.addEventListener("click", () => {
  const host = state.hosts.find((entry) => entry.id === els.joinHostId.value);
  if (host && draftPartyMembers.length >= seatsLeft(host)) return;
  draftPartyMembers.push({ id: uid("member"), name: "", isChild: false });
  renderPartyMembers();
});
els.sheetBackdrop.addEventListener("click", closeDialogs);

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-dialog]");
  if (closeButton) closeDialogs();

  const openHostButton = event.target.closest("[data-open-host]");
  if (openHostButton) {
    closeDialogs();
    openHostDialog();
  }

  const pickJoinButton = event.target.closest("[data-pick-join]");
  if (pickJoinButton) openJoinDialog(pickJoinButton.dataset.pickJoin);

  const joinButton = event.target.closest("[data-join]");
  if (joinButton) openJoinDialog(joinButton.dataset.join);

  const editHostButton = event.target.closest("[data-edit-host]");
  if (editHostButton) openEditHostDialog(editHostButton.dataset.editHost);

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    state.hosts = state.hosts.filter((host) => host.id !== removeButton.dataset.remove || !isOwnedHost(host));
    saveState();
    render();
  }

  const removeMenuButton = event.target.closest("[data-remove-menu]");
  if (removeMenuButton) {
    draftMenu.splice(Number(removeMenuButton.dataset.removeMenu), 1);
    renderSelectedMenu();
  }

  const removePartyButton = event.target.closest("[data-remove-party-member]");
  if (removePartyButton && draftPartyMembers.length > 1) {
    draftPartyMembers.splice(Number(removePartyButton.dataset.removePartyMember), 1);
    renderPartyMembers();
  }
});

els.partyMemberList.addEventListener("input", (event) => {
  const nameInput = event.target.closest("[data-party-name]");
  if (!nameInput) return;
  draftPartyMembers[Number(nameInput.dataset.partyName)].name = nameInput.value;
});

els.partyMemberList.addEventListener("change", (event) => {
  const childInput = event.target.closest("[data-party-child]");
  if (!childInput) return;
  draftPartyMembers[Number(childInput.dataset.partyChild)].isChild = childInput.checked;
});

els.selectedMenu.addEventListener("change", (event) => {
  const input = event.target.closest("[data-menu-option]");
  if (!input) return;
  const item = draftMenu[Number(input.dataset.menuOption)];
  if (input.checked) {
    item.excluded = item.excluded.filter((option) => option !== input.value);
    if (!item.included.includes(input.value)) item.included.push(input.value);
  } else {
    item.included = item.included.filter((option) => option !== input.value);
    if (!item.excluded.includes(input.value)) item.excluded.push(input.value);
  }
});

els.hostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!draftMenu.length) {
    els.selectedMenu.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const form = new FormData(els.hostForm);
  const nextHost = {
    hostName: form.get("hostName").trim(),
    date: form.get("hostDate"),
    time: form.get("hostTime"),
    location: form.get("hostLocation"),
    seats: Number(form.get("hostSeats")),
    notes: document.querySelector("#hostNotes").value.trim(),
    menu: draftMenu,
  };

  if (editingHostId) {
    const hostIndex = state.hosts.findIndex((host) => host.id === editingHostId && isOwnedHost(host));
    if (hostIndex === -1) return;
    state.hosts[hostIndex] = {
      ...state.hosts[hostIndex],
      ...nextHost,
      updatedAt: Date.now(),
    };
  } else {
    state.hosts.push({
      id: uid("host"),
      ...nextHost,
      ownerId,
      guests: [],
      createdAt: Date.now(),
    });
  }

  editingHostId = null;
  saveState();
  closeDialogs();
  render();
});

els.joinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const host = state.hosts.find((entry) => entry.id === els.joinHostId.value);
  if (!host) return;

  const members = draftPartyMembers
    .map((member) => ({
      id: member.id || uid("member"),
      name: member.name.trim(),
      isChild: Boolean(member.isChild),
    }))
    .filter((member) => member.name);

  if (!members.length) {
    els.partyMemberList.querySelector("input")?.focus();
    return;
  }

  if (members.length > seatsLeft(host)) {
    const firstMemberInput = els.partyMemberList.querySelector("[data-party-name]");
    firstMemberInput?.setCustomValidity(`Only ${seatsLeft(host)} seats are open.`);
    els.joinForm.reportValidity();
    firstMemberInput?.setCustomValidity("");
    return;
  }

  host.guests.push({
    id: uid("guest"),
    name: document.querySelector("#guestName").value.trim(),
    size: members.length,
    members,
    notes: document.querySelector("#guestNotes").value.trim(),
  });
  saveState();
  closeDialogs();
  render();
});

els.customFoodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#customFoodName").value.trim();
  const options = document
    .querySelector("#customFoodOptions")
    .value.split(",")
    .map((option) => option.trim())
    .filter(Boolean);

  if (!name) return;
  addCustomFood(name, options);
  els.customFoodForm.reset();
  closeDialogs();
  openDialog(els.hostDialog);
});

els.hostDate.value = nextDate(1);
render();
initRemoteState();
