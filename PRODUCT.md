# gaboesquivel package — product

## Purpose

Structured fact source for projects, technologies, employment history, and printable CV variants. The site, CLI, and GitHub profile read from this package; they do not duplicate these facts as the source of truth.

## Audience and needs

- **gaboesquivel.com** needs verified project and tech copy for cards, `/tech`, `/work`, and CV data.
- **`npx gaboesquivel`** needs the same facts in an interactive terminal view.
- **GitHub profile** and other consumers need consistent titles, descriptions, and stack evidence without hand-maintaining parallel lists.

Readers evaluating hire or contracting use the website for narrative; this repo answers “what shipped, with what stack, in what role.”

## Consumers (implemented)

| Consumer | How it uses the package |
| --- | --- |
| gaboesquivel.com | npm dependency; generated types and content at build |
| CLI | `npx gaboesquivel` / local `dist/cli.js` |
| GitHub profile | README and profile tooling that reference the package |

## Scope

- `content/projects/**` — project facts, tags, achievements, story
- `content/tech/**` — technology pages and implementation evidence
- `content/experience/**` — employment record (title, type, location, duration)
- `content/cv/**` — printable CV role variants and bullets
- Generated output under `src/generated` (from `bun run generate`)

## Conflict resolution

- Employment facts: `content/experience` wins over project copy.
- Technology, architecture, and achievements: project markdown wins over experience summaries.

## Non-goals

- Career narrative, page positioning, or capability theses (owned by gaboesquivel.com).
- CV landing-page prose or `/bio` worldview.
- Site routes, SEO keyword owners, or design system.

Voice and identity for prose: installed `gabo` skill in consumer repos.

## Known gaps (do not paper over)

- `TechStackItem` in `src/types.ts` still includes an `intro` field in types, while editorial rules forbid new `intro` in tech markdown (`AGENTS.md`). Legacy generated copy may still contain old patterns (for example “user experience first” in some tech experience bullets); new copy must not add those phrases.

## When to update this file

Change `PRODUCT.md` when ownership, consumers, or what belongs in the package shifts. Change field rules, allowlists, and generate workflow in `AGENTS.md`.
