const STORE_KEY = "smultronstigen-dinner-state-v1";
const OWNER_KEY = "smultronstigen-dinner-owner-id-v1";
const ADMIN_SESSION_KEY = "smultronstigen-dinner-admin-v1";
const LANG_KEY = "smultronstigen-dinner-language-v1";
const SUPABASE_TABLE = "dinner_app_state";

const translations = {
  sv: {
    localOnly: "Endast lokalt",
    localFallback: "Lokal reserv",
    liveSync: "Live-synk",
    admin: "Admin",
    languageToggle: "English",
    appTitle: "Middagsklubben",
    slideOneStep: "Steg 1",
    slideOneTitle: "Bjud in när det finns plats vid bordet.",
    slideOneText: "Välj datum, antal platser, plats och en meny som grannarna snabbt förstår.",
    slideTwoStep: "Steg 2",
    slideTwoTitle: "Gå med med hela sällskapet.",
    slideTwoText: "Lägg till vuxna och barn med namn så värden vet vilka som kommer.",
    slideThreeStep: "Steg 3",
    slideThreeTitle: "Håll maten enkel och flexibel.",
    slideThreeText: "Välj vanliga rätter, justera tillbehör och lägg till allergier i god tid.",
    welcomeEyebrow: "Familjemiddagar",
    welcomeTitle: "Smultronstigens middagsplaner, utan gruppchatt-kaos.",
    welcomeText: "Levande inbjudningar, barnvänliga sällskapslistor och menyer alla kan kolla innan de går över.",
    host: "Bjud in",
    join: "Gå med",
    facesEyebrow: "Bekanta ansikten",
    facesTitle: "Varma kök, barn välkomna, tydliga planer.",
    liveHosts: "aktiva värdar",
    openSeats: "lediga platser",
    joining: "kommer",
    upcoming: "Kommande",
    liveInvites: "Aktiva middagsinbjudningar",
    soonest: "Snarast",
    mostRoom: "Mest plats",
    newest: "Nyast",
    ownerTools: "Ägarverktyg",
    adminTitle: "Middagsklubben admin",
    back: "Tillbaka",
    signIn: "Logga in",
    username: "Användarnamn",
    password: "Lösenord",
    openAdmin: "Öppna admin",
    foodDatabase: "Matdatabas",
    addCommonFood: "Lägg till vanlig rätt",
    foodName: "Rättens namn",
    customOptions: "Valbara tillbehör",
    addFood: "Lägg till rätt",
    invites: "Inbjudningar",
    removeInvite: "Ta bort middagsinbjudan",
    demo: "Demo",
    shareInvite: "Dela",
    inviteCopied: "Inbjudningslanken ar kopierad.",
    copyFailed: "Kopiera den har lanken:",
    resetSite: "Nollställ sidan",
    resetDemo: "Nollställ demo",
    newInvite: "Ny inbjudan",
    hostDinner: "Bjud in till middag",
    editDinner: "Redigera middag",
    publishHost: "Publicera",
    saveChanges: "Spara",
    yourName: "Ditt namn",
    date: "Datum",
    time: "Tid",
    seatsAvailable: "Lediga platser",
    location: "Plats",
    ourPlace: "Hos oss",
    yourPlace: "Hos er",
    garden: "Trädgården",
    details: "Detaljer",
    byob: "BYOB",
    byobInfo: "Bring your own bottle: ta med egen dryck.",
    potluck: "Knytkalas",
    potluckInfo: "Knytkalas: gäster kan lägga till mat de tar med.",
    petFriendly: "Djurvänligt",
    food: "Mat",
    menuOptions: "Menyalternativ",
    custom: "Egen",
    notes: "Anteckningar",
    cancel: "Avbryt",
    chooseHost: "Välj värd",
    addParty: "Lägg till ditt sällskap",
    contactName: "Kontaktperson",
    party: "Sällskap",
    membersJoining: "Personer som kommer",
    addMember: "Lägg till person",
    noSeatsLeft: "Inga platser kvar",
    memberName: "Namn",
    mealChoice: "Maträtt",
    chooseMeal: "Välj maträtt",
    toppings: "Tillbehör",
    contactPerson: "Kontaktperson",
    leaveDinner: "Ta bort mitt sällskap",
    removeAttendee: "Ta bort person",
    child: "Barn",
    preferences: "Önskemål eller allergier",
    potluckContribution: "Mat ni tar med",
    addCustomFood: "Lägg till egen rätt",
    addTopping: "Lägg till topping",
    toppingPlaceholder: "t.ex. koriander",
    removeOption: "Ta bort",
    noInvites: "Inga middagsinbjudningar än",
    emptyText: "Bli första värden på Smultronstigen. Grannar ser din inbjudan här och kan lägga till sitt sällskap.",
    hostADinner: "Bjud in till middag",
    noOpenInvites: "Inga öppna middagsinbjudningar än.",
    hostInstead: "Bjud in istället",
    isHosting: "bjuder in",
    seats: "platser",
    seat: "plats",
    full: "fullt",
    edit: "Redigera",
    remove: "Ta bort",
    with: "Med",
    without: "Utan",
    customMenu: "Egen meny",
    chooseFood: "Välj minst en rätt. Tryck på varje tillbehör för att ta med eller välja bort.",
    guest: "Gäst",
    childSuffix: "barn",
    xJoining: "kommer",
    brings: "Tar med",
    noLiveInvites: "Inga middagsinbjudningar är aktiva.",
    wrongLogin: "Fel användarnamn eller lösenord.",
    onlySeatsOpen: "Bara {count} platser är lediga.",
    adminJoining: "kommer",
  },
  en: {
    localOnly: "Local only",
    localFallback: "Local fallback",
    liveSync: "Live sync",
    admin: "Admin",
    languageToggle: "Svenska",
    appTitle: "Supper Club",
    slideOneStep: "Step 1",
    slideOneTitle: "Host when your table has room.",
    slideOneText: "Pick a date, seats, place, and a menu that neighbors can actually understand.",
    slideTwoStep: "Step 2",
    slideTwoTitle: "Join with your whole party.",
    slideTwoText: "Add adults and kids by name so the host knows who is coming.",
    slideThreeStep: "Step 3",
    slideThreeTitle: "Keep food simple and flexible.",
    slideThreeText: "Choose common meals, tweak toppings, and add allergies before dinner day.",
    welcomeEyebrow: "Family dinner planning",
    welcomeTitle: "Smultronstigen Dinner Plans, minus the group-chat chaos.",
    welcomeText: "Live invites, kid-friendly party lists, and menus everyone can check before walking over.",
    host: "Host",
    join: "Join",
    facesEyebrow: "Familiar faces",
    facesTitle: "Warm kitchens, kids welcome, clear plans.",
    liveHosts: "live hosts",
    openSeats: "open seats",
    joining: "joining",
    upcoming: "Upcoming",
    liveInvites: "Live dinner invites",
    soonest: "Soonest",
    mostRoom: "Most room",
    newest: "Newest",
    ownerTools: "Owner tools",
    adminTitle: "Supper Club admin",
    back: "Back",
    signIn: "Sign in",
    username: "Username",
    password: "Password",
    openAdmin: "Open admin",
    foodDatabase: "Food database",
    addCommonFood: "Add common food",
    foodName: "Food name",
    customOptions: "Customisable options",
    addFood: "Add food",
    invites: "Invites",
    removeInvite: "Remove dinner invite",
    demo: "Demo",
    shareInvite: "Share",
    inviteCopied: "Invite link copied.",
    copyFailed: "Copy this link:",
    resetSite: "Reset site",
    resetDemo: "Reset demo",
    newInvite: "New invite",
    hostDinner: "Host dinner",
    editDinner: "Edit dinner",
    publishHost: "Publish host",
    saveChanges: "Save changes",
    yourName: "Your name",
    date: "Date",
    time: "Time",
    seatsAvailable: "Seats available",
    location: "Location",
    ourPlace: "Our place",
    yourPlace: "Your place",
    garden: "Garden",
    details: "Details",
    byob: "BYOB",
    byobInfo: "Bring your own bottle: bring your own drinks.",
    potluck: "Potluck",
    potluckInfo: "Potluck: guests can add foods they will bring.",
    petFriendly: "Pet friendly",
    food: "Food",
    menuOptions: "Menu options",
    custom: "Custom",
    notes: "Notes",
    cancel: "Cancel",
    chooseHost: "Choose a host",
    addParty: "Add your party",
    contactName: "Contact name",
    party: "Party",
    membersJoining: "Members joining",
    addMember: "Add member",
    noSeatsLeft: "No seats left",
    memberName: "Name",
    mealChoice: "Meal",
    chooseMeal: "Choose a meal",
    toppings: "Toppings",
    contactPerson: "Contact person",
    leaveDinner: "Remove my party",
    removeAttendee: "Remove person",
    child: "Child",
    preferences: "Preferences or allergies",
    potluckContribution: "Food you can bring",
    addCustomFood: "Add custom food",
    addTopping: "Add topping",
    toppingPlaceholder: "e.g. cilantro",
    removeOption: "Remove",
    noInvites: "No dinner invites yet",
    emptyText: "Be the first Smultronstigen host. Neighbors will see your listing here and can add their party.",
    hostADinner: "Host a dinner",
    noOpenInvites: "No open dinner invites yet.",
    hostInstead: "Host instead",
    isHosting: "is hosting",
    seats: "seats",
    seat: "seat",
    full: "full",
    edit: "Edit",
    remove: "Remove",
    with: "With",
    without: "Without",
    customMenu: "Custom menu",
    chooseFood: "Choose at least one food. Tap each option to include or remove ingredients.",
    guest: "Guest",
    childSuffix: "child",
    xJoining: "joining",
    brings: "Brings",
    noLiveInvites: "No dinner invites are live.",
    wrongLogin: "Wrong username or password.",
    onlySeatsOpen: "Only {count} seats are open.",
    adminJoining: "joining",
  },
};

const foodLabels = {
  sv: {
    poke: "Poké bowl",
    tacos: "Tacos",
    pasta: "Färsk pasta",
    soup: "Soppkväll",
    grill: "Trädgårdsgrill",
    pizza: "Pizza",
    rice: "ris",
    salmon: "lax",
    tofu: "tofu",
    avocado: "avokado",
    sesame: "sesam",
    mango: "mango",
    "chili mayo": "chilmajonnäs",
    beef: "nötfärs",
    beans: "bönor",
    salsa: "salsa",
    guacamole: "guacamole",
    cheese: "ost",
    jalapeno: "jalapeno",
    corn: "majs",
    tomato: "tomat",
    "cream sauce": "gräddsås",
    parmesan: "parmesan",
    mushroom: "svamp",
    basil: "basilika",
    "gluten-free": "glutenfritt",
    bread: "bröd",
    butter: "smör",
    lentils: "linser",
    chicken: "kyckling",
    vegan: "veganskt",
    "extra herbs": "extra örter",
    halloumi: "halloumi",
    sausage: "korv",
    vegetables: "grönsaker",
    potatoes: "potatis",
    salad: "sallad",
    mustard: "senap",
    mozzarella: "mozzarella",
    pepperoni: "pepperoni",
    olives: "oliver",
    arugula: "ruccola",
    "vegan cheese": "vegansk ost",
  },
  en: {},
};

let db = null;
let remoteReady = false;
let applyingRemoteState = false;
let pendingRemoteSave = null;
let syncStatus = "localOnly";
let inviteHandled = false;

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
          { id: "member-demo-1", name: "Maja", isChild: false, mealId: "poke", included: ["rice", "salmon", "avocado", "mango"] },
          { id: "member-demo-2", name: "Leo", isChild: true, mealId: "poke", included: ["rice", "salmon", "avocado", "mango"] },
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
  languageToggle: document.querySelector("#languageToggle"),
  mainView: document.querySelector("#mainView"),
  adminView: document.querySelector("#adminView"),
  adminLoginForm: document.querySelector("#adminLoginForm"),
  adminPanel: document.querySelector("#adminPanel"),
  adminHostList: document.querySelector("#adminHostList"),
  adminFoodForm: document.querySelector("#adminFoodForm"),
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
  potluckContributionField: document.querySelector("#potluckContributionField"),
  guestContributions: document.querySelector("#guestContributions"),
  joinPickerList: document.querySelector("#joinPickerList"),
  partyMemberList: document.querySelector("#partyMemberList"),
  addPartyMemberButton: document.querySelector("#addPartyMemberButton"),
  hostDate: document.querySelector("#hostDate"),
  syncBadge: document.querySelector("#syncBadge"),
};

const ownerId = getOwnerId();
let currentLang = localStorage.getItem(LANG_KEY) || "sv";
let state = loadState();
let draftMenu = [];
let draftPartyMembers = [];
let editingHostId = null;
let activeSlideIndex = 0;

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
          byob: Boolean(host.byob),
          potluck: Boolean(host.potluck),
          petFriendly: Boolean(host.petFriendly),
          guests: Array.isArray(host.guests)
            ? host.guests.map((guest) => ({
                ...guest,
                contributions: Array.isArray(guest.contributions) ? guest.contributions : [],
              }))
            : [],
          menu: Array.isArray(host.menu) ? host.menu : [],
        }))
      : [],
  };
}

async function initRemoteState() {
  if (!hasSupabaseConfig()) {
    setSyncStatus("localOnly");
    els.syncBadge.classList.remove("live");
    return;
  }

  const config = window.SMULTRONSTIGEN_SUPABASE;
  db = window.supabase.createClient(config.url, config.publishableKey || config.anonKey);

  const { data, error } = await db.from(SUPABASE_TABLE).select("state").eq("id", "global").maybeSingle();
  if (error) {
    console.warn("Supabase is configured but could not load state. Using local fallback.", error);
    setSyncStatus("localFallback");
    els.syncBadge.classList.remove("live");
    return;
  }

  remoteReady = true;
  setSyncStatus("liveSync");
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
      setSyncStatus("localFallback");
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

function setSyncStatus(status) {
  syncStatus = status;
  els.syncBadge.textContent = t(status);
}

function t(key, replacements = {}) {
  let value = translations[currentLang]?.[key] || translations.en[key] || key;
  Object.entries(replacements).forEach(([name, replacement]) => {
    value = value.replace(`{${name}}`, replacement);
  });
  return value;
}

function setText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key);
}

function setPlaceholder(selector, sv, en) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = currentLang === "sv" ? sv : en;
}

function translateFoodName(food) {
  return foodLabels[currentLang]?.[food.id] || foodLabels[currentLang]?.[food.name] || food.name;
}

function translateOption(option) {
  return foodLabels[currentLang]?.[option] || option;
}

function translateLocation(location) {
  const map = {
    "Our place": t("ourPlace"),
    "Your place": t("yourPlace"),
    Garden: t("garden"),
  };
  return map[location] || location;
}

function bookingOptionTags(host) {
  return [
    host.byob ? { key: "byob", title: t("byobInfo") } : null,
    host.potluck ? { key: "potluck", title: t("potluckInfo") } : null,
    host.petFriendly ? { key: "petFriendly", title: "" } : null,
  ].filter(Boolean);
}

function inviteUrl(hostId) {
  const url = new URL(window.location.href);
  url.hash = "";
  url.searchParams.set("invite", hostId);
  return url.toString();
}

async function shareHostInvite(hostId) {
  const link = inviteUrl(hostId);
  try {
    await navigator.clipboard.writeText(link);
    window.alert(t("inviteCopied"));
  } catch {
    window.prompt(t("copyFailed"), link);
  }
}

function openInviteFromUrl() {
  if (inviteHandled) return;
  const hostId = new URLSearchParams(window.location.search).get("invite");
  if (!hostId) return;
  const host = state.hosts.find((entry) => entry.id === hostId);
  if (!host) return;
  inviteHandled = true;
  window.setTimeout(() => openJoinDialog(hostId), 80);
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
  return new Intl.DateTimeFormat(currentLang === "sv" ? "sv-SE" : undefined, {
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
  renderAdminHosts();
  openInviteFromUrl();
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
    const optionTags = bookingOptionTags(host);
    const card = document.createElement("article");
    card.className = "host-card";
    card.innerHTML = `
      <div class="host-card-header">
        <div>
          <h3 class="host-title">${escapeHtml(host.hostName)} ${t("isHosting")}</h3>
          <p class="host-meta">${formatDate(host.date, host.time)} &middot; ${escapeHtml(translateLocation(host.location))}</p>
        </div>
        <div class="seat-pill ${left === 0 ? "full" : ""}">
          ${left}<br><small>${escapeHtml(left === 1 ? t("seat") : t("seats"))}</small>
        </div>
      </div>
      ${
        optionTags.length
          ? `<div class="booking-tags">${optionTags
              .map((tag) => `<span title="${escapeHtml(tag.title)}">${escapeHtml(t(tag.key))}</span>`)
              .join("")}</div>`
          : ""
      }
      ${host.notes ? `<p class="host-notes">${escapeHtml(host.notes)}</p>` : ""}
      <div class="menu-tags">
        ${host.menu.map(renderMenuTag).join("")}
      </div>
      ${host.guests.length ? `<div class="guest-list">${host.guests.map((guest) => renderGuest(guest, host)).join("")}</div>` : ""}
      <div class="card-actions ${owned ? "owned" : ""}">
        <button class="secondary-button" type="button" data-join="${host.id}" ${left === 0 ? "disabled" : ""}>${t("join")}</button>
        ${
          owned
            ? `
              <button class="secondary-button" type="button" data-share-host="${host.id}">${t("shareInvite")}</button>
              <button class="secondary-button" type="button" data-edit-host="${host.id}">${t("edit")}</button>
              <button class="danger-button" type="button" data-remove="${host.id}">${t("remove")}</button>
            `
            : ""
        }
      </div>
    `;
    els.hostList.append(card);
  });
}

function renderAdminHosts() {
  if (!els.adminHostList) return;
  els.adminHostList.innerHTML = "";

  if (!state.hosts.length) {
    els.adminHostList.innerHTML = `<p class="host-meta">${t("noLiveInvites")}</p>`;
    return;
  }

  state.hosts
    .slice()
    .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))
    .forEach((host) => {
      const row = document.createElement("article");
      row.className = "admin-host-row";
      row.innerHTML = `
        <div>
          <strong>${escapeHtml(host.hostName)} ${t("isHosting")}</strong>
          <span>${formatDate(host.date, host.time)} &middot; ${escapeHtml(translateLocation(host.location))} &middot; ${seatsTaken(host)}/${host.seats} ${t("adminJoining")}</span>
        </div>
        <button class="danger-button" type="button" data-admin-remove-host="${host.id}">${t("remove")}</button>
      `;
      els.adminHostList.append(row);
    });
}

function renderMenuTag(item) {
  const included = item.included.length ? `${t("with")} ${item.included.map(translateOption).join(", ")}` : t("customMenu");
  const excluded = item.excluded.length ? ` - ${t("without")} ${item.excluded.map(translateOption).join(", ")}` : "";
  return `
    <div class="menu-tag">
      <strong>${escapeHtml(translateFoodName({ id: item.foodId, name: item.name }))}</strong>
      <span>${escapeHtml(included + excluded)}</span>
    </div>
  `;
}

function renderGuest(guest, host) {
  const members = Array.isArray(guest.members) ? guest.members : [];
  const canLeave = guest.ownerId === ownerId;
  const canManageMembers = isOwnedHost(host) || canLeave;
  const memberSummary = members.length
    ? members
        .map((member) => {
          const meal = member.mealId ? (host.menu || []).find((item) => item.foodId === member.mealId) : null;
          const mealText = meal
            ? ` — ${translateFoodName({ id: meal.foodId, name: meal.name })}${member.included?.length ? ` (${member.included.map(translateOption).join(", ")})` : ""}`
            : "";
          const label = `${member.name || t("guest")}${member.isChild ? ` (${t("childSuffix")})` : ""}${mealText}`;
          return `<div class="guest-member-line"><span>${escapeHtml(label)}</span>${canManageMembers ? `<button class="danger-link" type="button" data-remove-guest-member="${escapeHtml(host.id)}" data-guest-id="${escapeHtml(guest.id)}" data-member-id="${escapeHtml(member.id)}">${t("removeAttendee")}</button>` : ""}</div>`;
        })
        .join("")
    : `<div class="guest-member-line"><span>${guestSize(guest)} ${t("xJoining")}</span></div>`;
  const contributions = Array.isArray(guest.contributions) ? guest.contributions : [];
  return `
    <div class="guest-row">
      <div>
        <strong>${escapeHtml(guest.name)}</strong>
        <div class="guest-members">${memberSummary}</div>
        ${contributions.length ? `<div class="guest-notes">${escapeHtml(`${t("brings")}: ${contributions.join(", ")}`)}</div>` : ""}
        ${guest.notes ? `<div class="guest-notes">${escapeHtml(guest.notes)}</div>` : ""}
        ${canLeave ? `<button class="danger-link leave-party-button" type="button" data-leave-party="${escapeHtml(host.id)}" data-guest-id="${escapeHtml(guest.id)}">${t("leaveDinner")}</button>` : ""}
      </div>
      <strong>${guestSize(guest)}x</strong>
    </div>
  `;
}

function renderFoods() {
  const query = els.foodSearch.value.trim().toLowerCase();
  const foods = state.foods.filter((food) => `${food.name} ${translateFoodName(food)}`.toLowerCase().includes(query));
  els.foodChips.innerHTML = "";

  foods.forEach((food) => {
    const button = document.createElement("button");
    button.className = "food-chip";
    button.type = "button";
    button.innerHTML = `<span class="food-dot" style="background:${food.color}"></span>${escapeHtml(translateFoodName(food))}`;
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
    options: [...food.options],
    included: [...food.options],
    excluded: [],
  });
  renderSelectedMenu();
}

function menuItemOptions(item) {
  const food = state.foods.find((entry) => entry.id === item.foodId);
  const options = Array.isArray(item.options) && item.options.length ? item.options : food?.options || [];
  return [...new Set(options)];
}

function renderSelectedMenu() {
  els.selectedMenu.innerHTML = "";
  if (!draftMenu.length) {
    els.selectedMenu.innerHTML = `<p class="host-meta">${t("chooseFood")}</p>`;
    return;
  }

  draftMenu.forEach((item, itemIndex) => {
    const options = menuItemOptions(item);
    const wrapper = document.createElement("div");
    wrapper.className = "menu-item";
    wrapper.innerHTML = `
      <div>
        <strong>${escapeHtml(translateFoodName({ id: item.foodId, name: item.name }))}</strong>
        <div class="option-grid">
          ${options
            .map(
              (option) => `
                <label>
                  <input type="checkbox" data-menu-option="${itemIndex}" value="${escapeHtml(option)}" ${
                    item.included.includes(option) ? "checked" : ""
                  }>
                  ${escapeHtml(translateOption(option))}
                  <button class="option-remove" type="button" data-remove-menu-option="${itemIndex}" data-option="${escapeHtml(option)}" aria-label="${t("removeOption")} ${escapeHtml(translateOption(option))}">x</button>
                </label>
              `,
            )
            .join("")}
        </div>
        <form class="inline-option-form" data-add-menu-option="${itemIndex}">
          <input name="menuOptionName" placeholder="${t("toppingPlaceholder")}" />
          <button class="text-button" type="submit">${t("addTopping")}</button>
        </form>
      </div>
      <button class="icon-button" type="button" data-remove-menu="${itemIndex}" aria-label="Remove ${escapeHtml(item.name)}">
        <span aria-hidden="true">x</span>
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
  document.querySelector("#hostDialogTitle").textContent = t("hostDinner");
  els.hostSubmitButton.textContent = t("publishHost");
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
  document.querySelector("#hostDialogTitle").textContent = t("editDinner");
  els.hostSubmitButton.textContent = t("saveChanges");
  document.querySelector("#hostName").value = host.hostName || "";
  document.querySelector("#hostDate").value = host.date || nextDate(1);
  document.querySelector("#hostTime").value = host.time || "18:30";
  document.querySelector("#hostSeats").value = host.seats || 4;
  document.querySelector("#hostNotes").value = host.notes || "";
  document.querySelector("#hostByob").checked = Boolean(host.byob);
  document.querySelector("#hostPotluck").checked = Boolean(host.potluck);
  document.querySelector("#hostPetFriendly").checked = Boolean(host.petFriendly);
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
  els.potluckContributionField.hidden = !host.potluck;
  draftPartyMembers = [newDraftPartyMember(host, true)];
  renderJoinTarget(host);
  renderPartyMembers();
  openDialog(els.joinDialog);
}

function newDraftPartyMember(host, isContact = false) {
  const meal = host?.menu?.[0];
  return {
    id: uid("member"),
    name: "",
    isChild: false,
    isContact,
    mealId: meal?.foodId || "",
    included: meal ? [...(meal.included || [])] : [],
  };
}

function renderJoinTarget(host) {
  els.joinTarget.innerHTML = `
    <strong>${escapeHtml(host.hostName)} &middot; ${formatDate(host.date, host.time)}</strong>
    <div class="host-meta">${escapeHtml(translateLocation(host.location))} &middot; ${seatsLeft(host)} ${t("openSeats")}</div>
  `;
}

function openJoinPicker() {
  const hosts = sortedHosts().filter((host) => seatsLeft(host) > 0);
  els.joinPickerList.innerHTML = "";

  if (!hosts.length) {
    els.joinPickerList.innerHTML = `
      <div class="empty-picker">
        <p>${t("noOpenInvites")}</p>
        <button class="primary-button" type="button" data-open-host>${t("hostInstead")}</button>
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
        <small>${formatDate(host.date, host.time)} &middot; ${escapeHtml(translateLocation(host.location))}</small>
      </span>
      <b>${seatsLeft(host)} ${t("seats")}</b>
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
    const selectedMeal = host?.menu?.find((item) => item.foodId === member.mealId);
    const availableOptions = selectedMeal ? menuItemOptions(selectedMeal).filter((option) => !selectedMeal.excluded?.includes(option)) : [];
    const row = document.createElement("div");
    row.className = "party-member-row";
    row.innerHTML = `
      <label class="member-name-field">
        ${t("memberName")}
        <input data-party-name="${index}" value="${escapeHtml(member.name)}" required placeholder="${t("memberName")}" />
      </label>
      <label class="child-toggle">
        <input type="checkbox" data-party-child="${index}" ${member.isChild ? "checked" : ""} />
        <span>${t("child")}</span>
      </label>
      <button class="icon-button" type="button" data-remove-party-member="${index}" ${member.isContact ? "disabled" : ""} aria-label="${t("remove")}">
        <span aria-hidden="true">x</span>
      </button>
      ${member.isContact ? `<span class="contact-person-label">${t("contactPerson")}</span>` : ""}
      ${host?.menu?.length ? `
        <label class="member-meal-field">
          ${t("mealChoice")}
          <select data-party-meal="${index}" required>
            <option value="">${t("chooseMeal")}</option>
            ${host.menu.map((meal) => `<option value="${escapeHtml(meal.foodId)}" ${meal.foodId === member.mealId ? "selected" : ""}>${escapeHtml(translateFoodName({ id: meal.foodId, name: meal.name }))}</option>`).join("")}
          </select>
        </label>
        <fieldset class="member-toppings">
          <legend>${t("toppings")}</legend>
          <div class="member-topping-options">
            ${availableOptions.map((option) => `<label><input type="checkbox" data-party-topping="${index}" value="${escapeHtml(option)}" ${member.included?.includes(option) ? "checked" : ""}> ${escapeHtml(translateOption(option))}</label>`).join("")}
          </div>
        </fieldset>` : ""}
    `;
    els.partyMemberList.append(row);
  });

  els.addPartyMemberButton.disabled = draftPartyMembers.length >= openSeats;
  els.addPartyMemberButton.textContent = draftPartyMembers.length >= openSeats ? t("noSeatsLeft") : t("addMember");
}

function addCustomFood(name, options, addToCurrentDraft = true) {
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
  renderAdminHosts();
  if (addToCurrentDraft) addFoodToDraft(food);
}

function isAdminUnlocked() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function setAdminUnlocked(value) {
  if (value) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  } else {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

function renderRoute() {
  const showingAdmin = window.location.hash === "#admin";
  els.mainView.hidden = showingAdmin;
  els.adminView.hidden = !showingAdmin;

  if (!showingAdmin) return;
  const unlocked = isAdminUnlocked();
  els.adminLoginForm.hidden = unlocked;
  els.adminPanel.hidden = !unlocked;
  if (unlocked) renderAdminHosts();
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "sv" ? "sv" : "en";
  document.title = currentLang === "sv" ? "Smultronstigens Middagsklubb" : "Smultronstigen Supper Club";
  els.languageToggle.textContent = t("languageToggle");
  els.syncBadge.textContent = t(syncStatus);

  const textMap = {
    "#adminLink": "admin",
    ".topbar h1": "appTitle",
    "#slideOneStep": "slideOneStep",
    "#slideOneTitle": "slideOneTitle",
    "#slideOneText": "slideOneText",
    "#slideTwoStep": "slideTwoStep",
    "#slideTwoTitle": "slideTwoTitle",
    "#slideTwoText": "slideTwoText",
    "#slideThreeStep": "slideThreeStep",
    "#slideThreeTitle": "slideThreeTitle",
    "#slideThreeText": "slideThreeText",
    "#welcomeEyebrow": "welcomeEyebrow",
    "#welcomeTitle": "welcomeTitle",
    "#welcomeText": "welcomeText",
    "#hostButtonText": "host",
    "#joinButtonText": "join",
    "#facesEyebrow": "facesEyebrow",
    "#facesTitle": "facesTitle",
    "#liveLabel": "liveHosts",
    "#seatLabel": "openSeats",
    "#guestLabel": "joining",
    "#upcomingEyebrow": "upcoming",
    "#upcomingTitle": "liveInvites",
    "#sortSoonest": "soonest",
    "#sortSeats": "mostRoom",
    "#sortRecent": "newest",
    "#adminEyebrow": "ownerTools",
    "#adminTitle": "adminTitle",
    "#adminBack": "back",
    "#adminSignInTitle": "signIn",
    "#adminUsernameLabel": "username",
    "#adminPasswordLabel": "password",
    "#adminOpenButton": "openAdmin",
    "#adminFoodEyebrow": "foodDatabase",
    "#adminFoodTitle": "addCommonFood",
    "#adminFoodNameLabel": "foodName",
    "#adminFoodOptionsLabel": "customOptions",
    "#adminAddFoodButton": "addFood",
    "#adminInvitesEyebrow": "invites",
    "#adminInvitesTitle": "removeInvite",
    "#adminResetEyebrow": "demo",
    "#adminResetTitle": "resetSite",
    "#adminResetButton": "resetDemo",
    "#hostDialogEyebrow": "newInvite",
    "#hostDialogTitle": editingHostId ? "editDinner" : "hostDinner",
    "#hostNameLabel": "yourName",
    "#hostDateLabel": "date",
    "#hostTimeLabel": "time",
    "#hostSeatsLabel": "seatsAvailable",
    "#locationLegend": "location",
    "#locationOurLabel": "ourPlace",
    "#locationYourLabel": "yourPlace",
    "#locationGardenLabel": "garden",
    "#bookingOptionsLegend": "details",
    "#byobLabel": "byob",
    "#potluckLabel": "potluck",
    "#petFriendlyLabel": "petFriendly",
    "#foodEyebrow": "food",
    "#menuBuilderTitle": "menuOptions",
    "#addCustomFoodButton": "custom",
    "#hostNotesLabel": "notes",
    "#hostCancelButton": "cancel",
    "#hostSubmitButton": editingHostId ? "saveChanges" : "publishHost",
    "#joinPickerEyebrow": "join",
    "#joinPickerTitle": "chooseHost",
    "#joinDialogEyebrow": "join",
    "#joinDialogTitle": "addParty",
    "#guestNameLabel": "contactName",
    "#partyEyebrow": "party",
    "#partyBuilderTitle": "membersJoining",
    "#addPartyMemberButton": "addMember",
    "#potluckContributionLabel": "potluckContribution",
    "#guestNotesLabel": "preferences",
    "#joinCancelButton": "cancel",
    "#joinSubmitButton": "join",
    "#customFoodEyebrow": "foodDatabase",
    "#customFoodTitle": "addCustomFood",
    "#customFoodNameLabel": "foodName",
    "#customFoodOptionsLabel": "customOptions",
    "#customFoodCancelButton": "cancel",
    "#customFoodSubmitButton": "addFood",
  };

  Object.entries(textMap).forEach(([selector, key]) => setText(selector, key));
  document.querySelector("[data-empty-title]")?.replaceChildren(document.createTextNode(t("noInvites")));
  document.querySelector("[data-empty-text]")?.replaceChildren(document.createTextNode(t("emptyText")));
  document.querySelector("[data-empty-button]")?.replaceChildren(document.createTextNode(t("hostADinner")));

  document.querySelector("#hostByob")?.nextElementSibling?.setAttribute("title", t("byobInfo"));
  document.querySelector("#hostPotluck")?.nextElementSibling?.setAttribute("title", t("potluckInfo"));
  document.querySelector("#hostByob")?.parentElement?.querySelector(".info-button")?.setAttribute("title", t("byobInfo"));
  document.querySelector("#hostPotluck")?.parentElement?.querySelector(".info-button")?.setAttribute("title", t("potluckInfo"));
  document.querySelector("#foodSearch")?.setAttribute("aria-label", currentLang === "sv" ? "Sök vanliga rätter" : "Search common foods");

  setPlaceholder("#foodSearch", "Sök vanliga rätter", "Search common foods");
  setPlaceholder("#hostNotes", "Allergier, barnvänliga detaljer, vad man kan ta med...", "Allergies, kid-friendly details, what to bring...");
  setPlaceholder("#guestNotes", "Vegetariskt, ingen sesam, tar med efterrätt...", "Vegetarian, no sesame, bringing dessert...");
  setPlaceholder("#guestContributions", "sallad, bröd, efterrätt", "salad, bread, dessert");
  setPlaceholder("#customFoodName", "Tacobricka", "Taco tray");
  setPlaceholder("#customFoodOptions", "kyckling, salsa, jalapeno, ost", "chicken, salsa, jalapeno, cheese");
  setPlaceholder("#adminFoodName", "Lasagne", "Lasagna");
  setPlaceholder("#adminFoodOptions", "köttfärs, vegetarisk, sallad, vitlöksbröd", "beef, vegetarian, salad, garlic bread");
  render();
  const selectedJoinHost = state.hosts.find((host) => host.id === els.joinHostId.value);
  if (selectedJoinHost) {
    renderJoinTarget(selectedJoinHost);
    renderPartyMembers();
  }
}

function advanceHeroSlide() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (slides.length < 2) return;
  slides[activeSlideIndex]?.classList.remove("is-active");
  activeSlideIndex = (activeSlideIndex + 1) % slides.length;
  slides[activeSlideIndex].classList.add("is-active");
}

els.openHostButton.addEventListener("click", openHostDialog);
els.openJoinButton.addEventListener("click", openJoinPicker);
els.languageToggle.addEventListener("click", () => {
  currentLang = currentLang === "sv" ? "en" : "sv";
  localStorage.setItem(LANG_KEY, currentLang);
  applyTranslations();
});

els.resetDemoButton.addEventListener("click", () => {
  state = seedState();
  saveState();
  render();
});

els.adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#adminUsername").value.trim();
  const password = document.querySelector("#adminPassword").value;
  if (username !== "weaver" || password !== "failsafe") {
    document.querySelector("#adminPassword").setCustomValidity(t("wrongLogin"));
    els.adminLoginForm.reportValidity();
    document.querySelector("#adminPassword").setCustomValidity("");
    return;
  }

  setAdminUnlocked(true);
  els.adminLoginForm.reset();
  renderRoute();
});

els.adminFoodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#adminFoodName").value.trim();
  const options = document
    .querySelector("#adminFoodOptions")
    .value.split(",")
    .map((option) => option.trim())
    .filter(Boolean);

  if (!name) return;
  addCustomFood(name, options, false);
  els.adminFoodForm.reset();
  render();
});

els.sortSelect.addEventListener("change", renderHosts);
els.foodSearch.addEventListener("input", renderFoods);
els.addCustomFoodButton.addEventListener("click", () => openDialog(els.customFoodDialog));
els.addPartyMemberButton.addEventListener("click", () => {
  const host = state.hosts.find((entry) => entry.id === els.joinHostId.value);
  if (host && draftPartyMembers.length >= seatsLeft(host)) return;
  draftPartyMembers.push(newDraftPartyMember(host));
  renderPartyMembers();
});
els.sheetBackdrop.addEventListener("click", closeDialogs);

document.addEventListener("click", (event) => {
  const infoButton = event.target.closest("[data-info]");
  if (infoButton) {
    event.preventDefault();
    event.stopPropagation();
    window.alert(t(infoButton.dataset.info));
    return;
  }

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

  const shareHostButton = event.target.closest("[data-share-host]");
  if (shareHostButton) shareHostInvite(shareHostButton.dataset.shareHost);

  const editHostButton = event.target.closest("[data-edit-host]");
  if (editHostButton) openEditHostDialog(editHostButton.dataset.editHost);

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    state.hosts = state.hosts.filter((host) => host.id !== removeButton.dataset.remove || !isOwnedHost(host));
    saveState();
    render();
  }

  const adminRemoveButton = event.target.closest("[data-admin-remove-host]");
  if (adminRemoveButton && isAdminUnlocked()) {
    state.hosts = state.hosts.filter((host) => host.id !== adminRemoveButton.dataset.adminRemoveHost);
    saveState();
    render();
  }

  const leavePartyButton = event.target.closest("[data-leave-party]");
  if (leavePartyButton) {
    const host = state.hosts.find((entry) => entry.id === leavePartyButton.dataset.leaveParty);
    const guest = host?.guests.find((entry) => entry.id === leavePartyButton.dataset.guestId);
    if (host && guest?.ownerId === ownerId) {
      host.guests = host.guests.filter((entry) => entry.id !== guest.id);
      saveState();
      render();
    }
  }

  const removeGuestMemberButton = event.target.closest("[data-remove-guest-member]");
  if (removeGuestMemberButton) {
    const host = state.hosts.find((entry) => entry.id === removeGuestMemberButton.dataset.removeGuestMember);
    const guest = host?.guests.find((entry) => entry.id === removeGuestMemberButton.dataset.guestId);
    if (host && guest && (isOwnedHost(host) || guest.ownerId === ownerId)) {
      const removedMember = (guest.members || []).find((member) => member.id === removeGuestMemberButton.dataset.memberId);
      guest.members = (guest.members || []).filter((member) => member.id !== removeGuestMemberButton.dataset.memberId);
      guest.size = guest.members.length;
      if (!guest.members.length) host.guests = host.guests.filter((entry) => entry.id !== guest.id);
      else if (removedMember?.name === guest.name) guest.name = guest.members[0].name;
      saveState();
      render();
    }
  }

  const removeMenuButton = event.target.closest("[data-remove-menu]");
  if (removeMenuButton) {
    draftMenu.splice(Number(removeMenuButton.dataset.removeMenu), 1);
    renderSelectedMenu();
  }

  const removeMenuOptionButton = event.target.closest("[data-remove-menu-option]");
  if (removeMenuOptionButton) {
    const item = draftMenu[Number(removeMenuOptionButton.dataset.removeMenuOption)];
    const option = removeMenuOptionButton.dataset.option;
    if (item && option) {
      item.options = menuItemOptions(item).filter((entry) => entry !== option);
      item.included = item.included.filter((entry) => entry !== option);
      item.excluded = item.excluded.filter((entry) => entry !== option);
      renderSelectedMenu();
    }
  }

  const removePartyButton = event.target.closest("[data-remove-party-member]");
  if (removePartyButton) {
    const index = Number(removePartyButton.dataset.removePartyMember);
    if (draftPartyMembers[index]?.isContact) return;
    draftPartyMembers.splice(index, 1);
    renderPartyMembers();
  }
});

els.partyMemberList.addEventListener("input", (event) => {
  const nameInput = event.target.closest("[data-party-name]");
  if (!nameInput) return;
  const member = draftPartyMembers[Number(nameInput.dataset.partyName)];
  member.name = nameInput.value;
  if (member.isContact) document.querySelector("#guestName").value = nameInput.value;
});

els.partyMemberList.addEventListener("change", (event) => {
  const childInput = event.target.closest("[data-party-child]");
  if (childInput) {
    draftPartyMembers[Number(childInput.dataset.partyChild)].isChild = childInput.checked;
    return;
  }
  const mealInput = event.target.closest("[data-party-meal]");
  if (mealInput) {
    const index = Number(mealInput.dataset.partyMeal);
    const host = state.hosts.find((entry) => entry.id === els.joinHostId.value);
    const meal = host?.menu?.find((item) => item.foodId === mealInput.value);
    draftPartyMembers[index].mealId = mealInput.value;
    draftPartyMembers[index].included = meal ? menuItemOptions(meal).filter((option) => !meal.excluded?.includes(option) && meal.included?.includes(option)) : [];
    renderPartyMembers();
    return;
  }
  const toppingInput = event.target.closest("[data-party-topping]");
  if (toppingInput) {
    const member = draftPartyMembers[Number(toppingInput.dataset.partyTopping)];
    member.included = toppingInput.checked
      ? [...new Set([...(member.included || []), toppingInput.value])]
      : (member.included || []).filter((option) => option !== toppingInput.value);
  }
});

document.querySelector("#guestName").addEventListener("input", (event) => {
  const contact = draftPartyMembers.find((member) => member.isContact);
  if (!contact) return;
  contact.name = event.target.value;
  const input = els.partyMemberList.querySelector(`[data-party-name="${draftPartyMembers.indexOf(contact)}"]`);
  if (input) input.value = event.target.value;
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

els.selectedMenu.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-add-menu-option]");
  if (!form) return;
  event.preventDefault();

  const item = draftMenu[Number(form.dataset.addMenuOption)];
  const input = form.elements.menuOptionName;
  const option = input.value.trim();
  if (!item || !option) return;

  const existing = menuItemOptions(item);
  if (!existing.some((entry) => entry.toLowerCase() === option.toLowerCase())) {
    item.options = [...existing, option];
    item.included.push(option);
    item.excluded = item.excluded.filter((entry) => entry !== option);
  }

  input.value = "";
  renderSelectedMenu();
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
    byob: form.get("hostByob") === "on",
    potluck: form.get("hostPotluck") === "on",
    petFriendly: form.get("hostPetFriendly") === "on",
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
      mealId: member.mealId || "",
      included: [...(member.included || [])],
    }))
    .filter((member) => member.name);

  if (!members.length) {
    els.partyMemberList.querySelector("input")?.focus();
    return;
  }

  if (members.length > seatsLeft(host)) {
    const firstMemberInput = els.partyMemberList.querySelector("[data-party-name]");
    firstMemberInput?.setCustomValidity(t("onlySeatsOpen", { count: seatsLeft(host) }));
    els.joinForm.reportValidity();
    firstMemberInput?.setCustomValidity("");
    return;
  }

  host.guests.push({
    id: uid("guest"),
    ownerId,
    name: document.querySelector("#guestName").value.trim(),
    size: members.length,
    members,
    contributions: host.potluck
      ? els.guestContributions.value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
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
applyTranslations();
renderRoute();
window.addEventListener("hashchange", renderRoute);
setInterval(advanceHeroSlide, 5200);
initRemoteState();
