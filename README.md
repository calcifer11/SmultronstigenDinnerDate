# Smultronstigen Dinner

A mobile-first dinner planning board for neighbors on Smultronstigen.

## Run

Open `index.html` in a browser. No build step is required.

## Publish on GitHub Pages

This repo is ready for GitHub Pages as a static site.

1. Push the repo to GitHub.
2. In the repository settings, go to `Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Push to the `main` branch, or run the `Deploy GitHub Pages` workflow manually.
5. GitHub will publish the site at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

The app uses relative paths, so it works under a repository subpath like `/SmultronstigenDinnerDate/`.
The included `.nojekyll` file tells GitHub Pages to serve the files directly without Jekyll processing.

## Data

The app can run in two modes:

- Local fallback: stores dinner invites, guests, and foods in browser `localStorage`.
- Live sync: stores the shared app state in Supabase and updates connected browsers in realtime.

`localStorage` persists in the same browser between sessions, but it does not sync across phones.
Use Supabase mode for a shared neighborhood board.

## Supabase Setup

1. Create a Supabase project.
2. In the Supabase SQL editor, run `supabase-schema.sql`.
3. Copy `config.example.js` to `config.js`.
4. Fill in your Supabase project URL and anon key in `config.js`.
5. Open `index.html`. The header badge should show `Live sync`.

The anon key is expected to be public in a browser app. The included SQL only exposes one shared
state row for this app.

If you publish publicly with GitHub Pages, commit a filled `config.js` so browsers can connect to
Supabase. In Supabase, add your GitHub Pages URL to any relevant allowed origins if you enable
features that require origin checks.

## Features

- Post a host listing with date, time, location, seats, notes, and menu options.
- Pick common foods and customise included or excluded ingredients.
- Add reusable custom foods to the local food database.
- Join an existing host with a whole party and preference notes.
- Remove a host listing when plans change.
- Sort live dinners and see current host, seat, and guest totals.
