# Show Detail Pages: Numeric ID → Friendly Slug URLs — Task List

## Context

Show detail pages move from `/shows/:id` (e.g. `/shows/1`) to `/shows/:slug` (e.g. `/shows/feb-1-2026-kindred-spirit-brewing`). API has been updated to return `slug` on show records and expose `GET /api/shows/slug/{slug}`. Full plan/context: see `C:\Users\shane\.claude\plans\make-a-plan-when-serene-marble.md`.

Decisions:
- No redirect for old numeric `/shows/1` links — they simply error via existing error handling.
- Detail page gets its own `shows.detail.title.component.ts` breadcrumb (Home / Shows / {show title}) instead of reusing the generic "Shows" banner.

## Tasks

- [x] 1. **Model** — `src/app/models/show.ts`: add `slug: string;` to the `Show` interface.
- [x] 2. **Service** — `src/app/services/show.service.ts`: add `getShowBySlug(slug: string): Observable<Show>` calling `GET /api/shows/slug/{slug}`, matching existing `catchError`/`throwError` pattern.
- [x] 3. **Route** — `src/app/app.routes.ts`: change `path: 'shows/:id'` to `path: 'shows/:slug'`.
- [x] 4. **Detail component** — `src/app/pages/shows/shows.detail.component.ts`: read `slug` param as `string | null` with explicit guard clause; call `getShowBySlug` instead of `getShowById`.
- [x] 5. **List links** — `src/app/pages/shows/shows.list.component.html`: replace all three `[routerLink]="['/shows', show.id]"` with `[routerLink]="['/shows', show.slug]"`.
- [x] 6. **Detail title component** — create `shows.detail.title.component.ts/.html/.scss` (Home / Shows / {show title} breadcrumb), wire into `shows.detail.component.ts` in place of `ShowsTitleComponent`.
- [x] 7. **Tests** — add `shows.detail.component.spec.ts`; check/update `shows.component.spec.ts` and `shows.list.component.spec.ts`; add spec for new title component. Also fixed pre-existing provider gaps (`ActivatedRoute`/`HttpClient`) in all `shows/` specs and an unrelated pre-existing copy-paste bug in `songs.title.component.spec.ts`. All 9 `shows/` specs pass.
- [x] 8. (Optional, later) Dynamic page `<title>`/meta description via Angular `Title`/`Meta` services once a show loads.

## Verification

- `npm start`: `/shows` list → click a card → URL is the slug, detail loads.
- Old numeric URL (e.g. `/shows/1`) shows the existing error state cleanly.
- `npm test` passes.
- `npm run build` succeeds under strict TypeScript.
