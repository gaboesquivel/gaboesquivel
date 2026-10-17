# gaboesquivel package

Read [PRODUCT.md](PRODUCT.md) for purpose, consumers, scope, and non-goals. This file is markdown fields, allowlists, and commands.

Voice and identity: installed `gabo` skill. Optional second pass: `human-writing`; `gabo` wins conflicts.

Update `PRODUCT.md` when what the package is for changes. Update this file when fields, allowlists, or editorial rules change.

When facts are not already in open files, spawn read-only agents in parallel for lookups that do not invent copy. One agent writes. Do not spawn to write, rewrite, outline, or find a better voice.

After copy or types change: `bun run generate` and `bun run build`. Do not mix this repo and gaboesquivel.com in one commit.

## Git

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): subject` (for example `docs: split PRODUCT.md from AGENTS.md`, `content(projects): tighten wink description`). Common types: `docs`, `content`, `feat`, `fix`, `chore`. One logical change per commit.

## Project markdown (`content/projects/**`)

- `description`: what the project is and does, one or two sentences, near 160 characters, usable as metadata and a masonry card. Project-centered, not first-person contribution.
- `role`, `achievements`, `story`: ownership and implementation.
- `role` only when `content/experience` verifies it.
- Do not turn package copy into a career story.
- `featured` only: `legal-agent`, `wink`, `ztx`, `bitlauncher`, `opyn`, `eos-costa-rica`.
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
