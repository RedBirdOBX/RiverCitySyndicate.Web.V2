# Move tasks.md into .claude folder

## Context
`tasks.md` (the SCSS variable centralization task list) currently sits at the project root, untracked by git. The user wants it relocated into the `.claude` folder to keep it alongside other Claude-specific project files rather than cluttering the repo root.

## Approach
Simple file relocation, no content changes:

1. Move `river-city-ng/tasks.md` → `river-city-ng/.claude/tasks.md`
2. Confirm `.claude/` directory exists at that path (it does — contains `CLAUDE.md`)

## Verification
- `git status` shows `tasks.md` no longer untracked at root, and the new path present under `.claude/` instead.
