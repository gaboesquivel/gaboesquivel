# gaboesquivel package

Fact source for projects, technologies, employment, and CV variants. Read [PRODUCT.md](PRODUCT.md) before changing what the package covers, who consumes it, or which repo owns a kind of content. This file covers editing, field rules, and checks.

Voice, identity, and claims: installed `gabo` skill, which outranks any other writing skill on those three.

When facts are not already in open files, spawn read-only agents in parallel for lookups that do not invent copy. One agent writes. Do not spawn to write, rewrite, outline, or find a better voice.

## Editing

- Edit markdown under `content/`. `src/generated/` and `dist/` are build output.
- `src/projects.ts`, `src/tech.ts`, and `src/types.ts` are pre-markdown sources kept for `scripts/migrate-to-markdown.ts`. Nothing exports or bundles them, so editing them changes nothing the site or CLI sees.
- `readme.md` is the public GitHub profile and the npm page. Keep it profile copy; developer notes go in this file.
- gaboesquivel.com installs the published npm package. A change reaches the live site only after a version bump, `npm publish` (`prepublishOnly` runs the build), and an update of the site's `gaboesquivel` dependency. `bun link` only affects local builds.

## Checks

- `bun run build` runs `generate`, then bundles `dist/`. `bun run generate` alone validates content and writes `src/generated/`.
- `generate` fails on: a multi-line project `description`; `featured` outside the allowlist; a `#` or example.com project `link`; an unknown tech tag; an `experienceCompany` or CV variant role whose company is missing from `content/experience`; a duplicate `featuredOrder`; a Wikipedia or MDN Glossary tech `link`; a tech category with no `content/tech` file; and tech `experience` bullets that break the evidence rules below. It only warns on empty tech pages (the site hides them) and on project years before the employment start. Every other rule here is editorial; check it by reading.
- Pre-commit (simple-git-hooks) runs Biome on staged files.

## Keeping docs current

- [PRODUCT.md](PRODUCT.md): consumers, scope, ownership, or conflict rules change.
- This file: fields, allowlists, editorial rules, or commands change.

## Git

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject` (for example `docs: split PRODUCT.md from AGENTS.md`, `content(projects): tighten wink description`). Common types: `docs`, `content`, `feat`, `fix`, `chore`. Do not mix this repo and gaboesquivel.com in one commit.

## Project markdown (`content/projects/**`)

- `description`: what the project is and does, one or two sentences, near 160 characters, usable as metadata and a masonry card. Project-centered, not first-person contribution.
- `role`, `achievements`, `story`: ownership and implementation.
- `role` only when `content/experience` verifies it.
- Do not turn package copy into a career story.
- `featured` only: `legal-agent`, `wink`, `ztx`, `bitlauncher`, `opyn`, `eos-costa-rica`. `FEATURED_PROJECT_SLUGS` in `scripts/generate.ts` enforces this list, and gaboesquivel.com repeats it in `scripts/llms/projects.ts` and `scripts/llms/authority.ts`; change all three together.
- Do not add `tier` or `outcome`.
- Preserve verified tags, achievements, story details, and links when compressing. No pitch-deck, TAM, or fundraising unless essential to the project.

## Tech markdown (`content/tech/**`)

- `description`: what the technology is in this stack, one sentence, near 160 characters, usable as a masonry card and metadata. Technology-centered, not first-person career. Not a glossary or Wikipedia paragraph.
- `experience`: first-person implementation; named shipped projects; this technology's role only. Verify against `content/projects` and `content/experience`. No invented metrics, users, or lessons. If two tech pages name the same project, the sentence must differ.
- Do not use “user experience first” or similar filler framing in new bullets.
- Tool pages (default): every `experience` bullet must name a project whose `tech` array includes this `tag`. `bun run generate` fails otherwise.
- Umbrella pages only (`blockchain`, `artificial-intelligence`, `cms`): bullets may name a project that tags a child in the same area (Ethereum/Solidity/Antelope; AI SDK/OpenAI; WordPress/DatoCMS) or whose story names the domain. Still must name a real project file.
- Evidence rule: a named project must exist under `content/projects`. Prefer that the project tags this `tag`. If the story names the tech but the tag is missing, add the tag on the project in a separate editorial call — do not silently invent tags unless the story already states the tech. If neither tag nor story supports the bullet, delete the bullet.
- Prefer 2–4 bullets on long-tail pages. Featured may go to ~5. Do not list every tagged project as a bullet.
- `featuredOrder`: unique integers; membership in featured is having this field.
- `name`: canonical display (React, Next.js, Node.js, WordPress, Ethers.js, shadcn/ui, Bitlauncher in bullets). Do not change public slugs (`reactjs`, `nextjs`, `nodejs`).
- `link`: official docs or product URL, not Wikipedia or MDN Glossary.
- `since`: optional sort/display year, not employment. Do not show on the site. Do not bulk-recompute from `min(project.year)`.
- No `intro`. No site narrative, capability theses, or `/bio` worldview.
