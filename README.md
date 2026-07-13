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
3. In Supabase, copy your project URL and publishable key from `Project Settings > API`.
4. In GitHub, open the repo and go to `Settings > Secrets and variables > Actions`.
5. Add these repository secrets:
   - `SUPABASE_URL`: your Supabase project URL.
   - `SUPABASE_PUBLISHABLE_KEY`: your Supabase publishable key.
6. Push to `main` or run the `Deploy GitHub Pages` workflow manually.
7. Open the GitHub Pages site. The header badge should show `Live sync`.

The publishable key is expected to be public in a browser app. Do not use a Supabase secret key in
this frontend app. The included SQL only exposes one shared state row for this app.

For local development, either edit `config.js` directly or copy `config.example.js` to `config.js`
and fill in the same values. The GitHub Pages workflow overwrites `config.js` during deployment
using the repository secrets above.

In Supabase, add your GitHub Pages URL to any relevant allowed origins if you enable features that
require origin checks.

## Features

- Post a host listing with date, time, location, seats, notes, and menu options.
- Pick common foods and customise included or excluded ingredients.
- Add reusable custom foods to the local food database.
- Join an existing host with a whole party and preference notes.
- Remove a host listing when plans change.
- Sort live dinners and see current host, seat, and guest totals.
