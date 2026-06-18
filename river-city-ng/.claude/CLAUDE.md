# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from `river-city-ng/` (the directory containing `package.json`):

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/river-city-ng/
npm run watch      # dev build with file watching
npm test           # Karma/Jasmine unit tests
ng test --include src/app/pages/shows/shows.component.spec.ts  # single test file
```

## Architecture

Angular 19 standalone-component app with no NgModules. Entry point is `main.ts` → `bootstrapApplication(AppComponent, appConfig)`.

**Key files:**
- `src/app/app.routes.ts` — all route definitions; most feature pages are lazy-loaded
- `src/app/app.config.ts` — global providers (router, HttpClient, zone change detection)
- `src/app/app.component.ts` — shell with `<app-header>`, `<router-outlet>`, `<app-footer>`

**Directory layout:**
- `src/app/pages/` — one folder per route; each folder typically has a parent page component plus child sub-components (e.g. `shows.component.ts`, `shows.list.component.ts`, `shows.title.component.ts`)
- `src/app/partials/` — `header/` and `footer/` layout components
- `src/app/services/` — singleton services (`providedIn: 'root'`) that fetch data via `HttpClient` from the Azure API backend; return RxJS Observables
- `src/app/models/` — plain TypeScript interfaces (`Show`, `Photo`, `Video`)
- `src/styles/scss/` — global SCSS partials (`_variables.scss`, `_mixins.scss`, etc.) imported through `src/styles.scss`; Bootstrap 5 is the base

**Backend:** Azure App Service REST API at `river-city-syndicate-web-api-h9ayercgergqc3d4.eastus-01.azurewebsites.net`. All data access goes through the service layer — components never call `HttpClient` directly.

**Static hosting:** Azure Static Web Apps; routing fallback configured in `public/staticwebapp.config.json`.

## Component conventions

- Every component uses `standalone: true` and explicitly lists its `imports` array.
- Sub-component files follow the `<page>.<role>.component.ts` naming pattern.
- Data is fetched in `ngOnInit` via `.subscribe({ next: ..., error: ... })`.
- SCSS is scoped per component via a matching `.scss` file; global variables and mixins live in `src/styles/scss/`.

## TypeScript

Strict mode is fully enabled (`strict`, `noImplicitAny`, `noImplicitReturns`, `strictTemplates`, etc.). All new code must compile without errors under these settings.
