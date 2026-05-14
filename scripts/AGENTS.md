# scripts/AGENTS.md

Instructions for changes under `scripts/`.

- Scripts support build/prerender workflows; keep behavior deterministic and local by default.
- Do not add deploy, deletion, external mutation, or secret-reading behavior without explicit approval.
- Avoid hard-coded environment-specific values; use documented env vars or parameters.
- Prefer small, readable scripts over broad automation.
- Verify with the smallest root command that exercises the script, usually `npm run build` for prerender changes.
