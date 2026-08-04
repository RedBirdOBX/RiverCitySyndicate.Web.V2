# SCSS Variable Centralization — Task List

## Context

Goal: change a color, font size, or other common UI value in **one file** instead of hunting across the codebase. A `_variables.scss` already exists but does not actually achieve this:

- `src/styles.scss` compiles Bootstrap with **zero variable overrides** — Bootstrap ships 100% stock colors/type.
- `src/styles/scss/custom.scss` is a **second, separate compiled bundle** that never imports Bootstrap. Nothing in it can change how Bootstrap's own `.btn-primary`, `.alert-danger`, headings, or form-validation styles render.
- The existing `_variables.scss` (143 lines) uses Bootstrap's `tint-color()`/`shade-color()` functions but never imports `bootstrap/scss/functions`. Confirmed by compiling it standalone: Dart Sass silently treats the calls as invalid unparsed CSS strings. **Every `$light-color`, `$dark-color`, and `$*-100`...`$*-900` value in this file is broken**, currently masked only because nothing consumes them.
- 9 of 15 SCSS partials (640 of 852 lines) are dead code — never imported anywhere.
- Component `.scss` files have no import path to `_variables.scss` (no `@use`, no Angular `includePaths`), so hardcoded hex/`rgba()` literals are used instead of shared tokens.
- `.text-primary` is hardcoded to **red** in `_typography.scss` — a live visual bug ("primary" means blue everywhere else and in Bootstrap's own defaults).

Fix: replace the custom variable system with **real Bootstrap variable names** (`$primary`, `$danger`, `$h1-font-size`, etc.) in one unified Sass compilation, with a documented path for component styles to reach it.

---

## Phase 1 — Foundational consolidation (blocking; fixes the compile bug)

- [ ] Create `src/styles/scss/_theme.scss` with:
  - Base hues carried forward from current values: blue `#4f96c0`, red `#ff0000`, green `#157347`, orange `#fd7e14`, etc.
  - A real `$theme-colors` map using Bootstrap's own keys (`primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light`, `dark`). `$secondary` uses Bootstrap's own gray default — **not** aliased to red (that aliasing is the root cause of the `.text-primary` bug).
  - Typography scale: `$font-family-base`, `$font-size-base`, `$h1-font-size`...`$h6-font-size`, `$headings-font-weight`.
  - `$grid-breakpoints` override matching current breakpoints (576/768/992/1200/1400).
  - RCS-only tokens with no Bootstrap equivalent: `$footer-font-size`, `$overlay-scrim`, `$overlay-scrim-hover`.
  - All values `!default`.
- [ ] Restructure `src/styles.scss` to the standard Bootstrap import order:
  ```scss
  @import "bootstrap/scss/functions";
  @import "styles/scss/theme";
  @import "bootstrap/scss/variables";
  @import "bootstrap/scss/variables-dark";
  @import "bootstrap/scss/maps";
  @import "bootstrap/scss/mixins";
  @import "bootstrap/scss/root";
  @import "bootstrap/scss/bootstrap";
  ```
- [ ] `angular.json`: remove the `custom` bundle entry from `architect.build.options.styles`; add:
  ```json
  "stylePreprocessorOptions": { "includePaths": ["src/styles/scss"] }
  ```
- [ ] `src/index.html`: remove `<link rel="stylesheet" href="custom.css">` (line 21).
- [ ] Delete `src/styles/scss/custom.scss`.
- [ ] Delete old `src/styles/scss/_variables.scss` (superseded by `_theme.scss`).
- [ ] Run `npm run build` — must succeed with no Sass errors/warnings.

## Phase 2 — Wire live overrides, fix `.text-primary`

- [ ] Migrate `_buttons.scss` into the unified pipeline: `@use` the theme, point `.butn.primary` at `$primary`; verify whether `!important` is still needed to beat legacy template CSS.
- [ ] Migrate `_nav.scss` into the unified pipeline as-is (no variable dependency).
- [ ] `_typography.scss`: **delete** the `.text-primary` / `.text-primary-hover` / red-hover rules entirely — Bootstrap's stock `.text-primary` will render the correct blue once `$primary` is wired in.
- [ ] Migrate `_footer.scss`: replace `$red-color` with `$danger` (or a dedicated token if red-on-hover is an intentional design choice distinct from "danger").
- [ ] Import the migrated partials into `styles.scss` after `bootstrap/scss/bootstrap`.
- [ ] Manually verify in the browser: `.btn-primary`, `.alert-danger`, `.badge.bg-success`, `is-invalid` form states, and `h1`-`h6` reflect the new palette/type-scale.

## Phase 3 — Migrate component-level hardcoded literals

- [ ] `src/app/pages/links/links.list.component.scss`:
  - `#fff` → `$white`, `#666` → `$gray-600`
  - Move Facebook/YouTube/Venmo hex values into a `$social-brand-colors` Sass map (YouTube red reuses `$danger` rather than duplicating the literal)
  - Generate `.link-facebook`/`.link-youtube`/`.link-venmo` blocks via `@each`
  - Add `@use 'theme' as t;` at the top
- [ ] `src/app/pages/videos/videos.list.component.scss`:
  - `#fff` → `$white`
  - `rgba(0,0,0,.25)` / `rgba(0,0,0,.5)` → `$overlay-scrim` / `$overlay-scrim-hover`
  - Add `@use 'theme' as t;` at the top
- [ ] Review `shows.detail.component.scss` and `style-guide.component.scss` — leave as-is unless a value happens to match a new `$h*-font-size` output.

## Phase 4 — Cleanup dead code

- [ ] Delete unreferenced partials: `_about.scss`, `_contact.scss`, `_faq.scss`, `_header.scss`, `_home.scss`, `_media.scss`, `_services.scss`, `_html.scss`.
- [ ] Review `_backgrounds.scss` (440 lines): wire in genuinely unique utility classes not already covered by Bootstrap's regenerated `bg-*` utilities post-Phase-1; discard duplicates.
- [ ] Remove `_mixins.scss` if still empty (currently just a commented-out import to a non-existent file).
- [ ] Grep for old variable names (`$blue-color`, `$red-color`, `$primary-color`, `$secondary-color`, etc.) across `src/` to confirm zero remaining references.

## Phase 5 — Style guide verification section

- [ ] Add a "Design Tokens" section to `src/app/pages/style-guide/style-guide.component.html` (above the existing Typography section):
  - Color swatches looped from the existing `contextualVariants` array (`style-guide.component.ts:15`) showing name + hex
  - A static `h1`-`h6` type-scale sample
  - A spacing-scale row using Bootstrap's `$spacers`
  - No `.ts` changes needed — `contextualVariants` is already public.

---

## Verification checklist

- [ ] `npm run build` succeeds with no Sass errors/warnings.
- [ ] `npm start` — visually check home page, style guide page (new Design Tokens section + existing button/alert/badge/form states), links page (social cards), videos page (hover overlays) for correct colors and no legacy-CSS regressions.
- [ ] `npm test` passes — confirms no component spec breaks from `.scss`/template changes.
- [ ] Grep confirms zero leftover references to old `$*-color` variable names.
