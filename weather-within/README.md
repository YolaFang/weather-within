# Weather Within · 此间天气

A quiet bilingual PWA prototype for recording the weather outside and within. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Run locally

- Install Node.js 20+.
- Run `npm install` then `npm run dev`.
- Visit http://localhost:3000.
- Use the EN · 中 control to switch language; use the left navigation to explore Record, Reflect, Discover, Connect, and Profile.

## Project structure

- `src/app/page.tsx` — interactive five-section prototype.
- `src/app/globals.css` — responsive visual system and layout.
- `src/app/layout.tsx` — app metadata and manifest registration.
- `public/manifest.json` — installable PWA metadata.

## Product and architecture notes

The prototype keeps entries in browser memory only and does not collect or transmit emotional data. The next production step can add a typed domain layer (`Entry`, `WeatherSnapshot`, `UserPreferences`), accessible server actions/API boundaries, and Supabase Auth/Postgres behind explicit consent and row-level security. Store language and privacy preferences separately from journal content. Add a service worker and offline entry queue only after defining local encryption, sync conflict, and deletion behavior. Do not add payment, AI chat, or real user psychology data in this phase.

## Current scope

Responsive bilingual navigation and page states; mood selection feedback; private-by-default check-in UI; install manifest. Weather data and saving are visual prototype interactions, not persisted.
