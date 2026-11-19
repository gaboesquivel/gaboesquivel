# gaboesquivel package product

## Purpose

This repository is the single source for Gabo Esquivel's professional identity. The `gaboesquivel` npm package holds the facts for his projects, technologies, employment history, and CV variants: what shipped, with what stack, and in what role. The `gabo` Agent Skill in `skills/gabo/` holds shared identity, approved positioning, voice, and writing method. Website narrative, page content, design, and publishing live on gaboesquivel.com.

## Consumers (implemented)

- **gaboesquivel.com** installs the published package from npm and builds project cards, `/work`, `/project/[slug]`, `/tech`, `/cv`, and its llms.txt corpus from it. It needs verified facts it can render without rewriting.
- **`npx gaboesquivel`** runs `dist/cli.js`, an interactive terminal view of the same projects and technologies. The profile README advertises it.
- **`readme.md`** is Gabo's GitHub profile README (this repo is `gaboesquivel/gaboesquivel`) and the npm package page. It is profile copy, not developer documentation, and must agree with these facts.
- **`gabo` skill**: agents install it from GitHub (`npx skills@latest add gaboesquivel/gaboesquivel --skill gabo`). gaboesquivel.com records it in its `skills-lock.json` and commits a runtime copy for its site agent in `agent/skills/gabo/`. The skill is not part of the npm tarball (`files` ships `dist` only); a skill change needs no package release.

## Primary metric

Accuracy: every consumer shows the same facts as `content/` and `skills/gabo/`, with no contradictions. It matters because the package is information only; being correct is its whole job. Checked by reading the consumers when facts change. No baseline or tracking.

## Scope

- `content/projects/`: what each project is, its stack (`tech` tags), role, achievements, and story. `role` is the verified title when `content/experience` supports one; otherwise it is the generic default "Software Engineer", which is a label for display and not an employment claim. The generated `markdown` field is the source front matter and omits a defaulted role.
- `content/tech/`: what each technology does in this stack and which shipped projects used it
- `content/experience/`: the employment record (title, type, location, duration)
- `content/cv/`: CV variants (`full`, `ai`, `web3`, `fullstack`) that select roles, override bullets, and set each CV page's metadata
- Build output: `src/generated/` (typed modules) and `dist/` (the bundle, JSON exports such as `projects.json` and `cv.json`, and copies of the markdown)
- `skills/gabo/`: the `gabo` skill. `SKILL.md` holds voice and method, `references/identity.md` holds approved positioning, product philosophy, and standing background (engagement terms, location, languages), `references/channels.md` holds format defaults, and `evals/` holds its evaluation cases

## When facts conflict

- Employment facts: `content/experience` wins over project copy.
- Technology, architecture, and achievements: project markdown wins over experience summaries.
- Title, positioning, and approved copy: `skills/gabo/references/identity.md` wins; `readme.md`, CV metadata, and the website follow it.
- The skill's background summary never overrides `content/`; it names `content/experience` as authoritative for employment facts.

## Non-goals

- Website narrative: page positioning, capability theses, CV landing-page prose, and the `/bio` career story. gaboesquivel.com owns those, in the voice and positioning the `gabo` skill sets.
- Site routes, SEO keyword owners, and visual design.

## Open questions

- None. Public booking uses `https://gaboesquivel.com/cal`; the site redirect target is the live calendar provider.
