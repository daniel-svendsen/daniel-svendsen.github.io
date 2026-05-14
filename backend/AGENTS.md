# backend/AGENTS.md

Instructions for changes under `backend/`.

- Treat this Spring Boot app as historical but potentially relevant; do not delete or rewrite it only because the frontend currently uses other data paths.
- Do not read or print `env.properties`, `.env*`, DB credentials, API keys, tokens, or generated secrets.
- Ask before DB schema changes, security/auth changes, public API changes, production config, migrations, destructive scripts, or new dependencies.
- Preserve Java 17 and existing Spring Boot/Maven patterns.
- Keep changes focused and add/update tests for behavior changes when practical.
- Relevant checks: `.\mvnw.cmd test` on Windows or `./mvnw test` on Unix from this folder.
