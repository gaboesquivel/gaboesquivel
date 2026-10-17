# gaboesquivel package product

## Purpose

The `gaboesquivel` package is the fact source for Gabo Esquivel's projects, technologies, employment history, and CV variants. It answers what shipped, with what stack, and in what role. Narrative and positioning live on gaboesquivel.com.

## Consumers (implemented)

- **gaboesquivel.com** installs the published package from npm and builds project cards, `/work`, `/project/[slug]`, `/tech`, `/cv`, and its llms.txt corpus from it. It needs verified facts it can render without rewriting.
- **`npx gaboesquivel`** runs `dist/cli.js`, an interactive terminal view of the same projects and technologies. The profile README advertises it.
- **`readme.md`** is Gabo's GitHub profile README (this repo is `gaboesquivel/gaboesquivel`) and the npm package page. It is profile copy, not developer documentation, and must agree with these facts.

## Scope

- `content/projects/`: what each project is, its stack (`tech` tags), role, achievements, and story
- `content/tech/`: what each technology does in this stack and which shipped projects used it
- `content/experience/`: the employment record (title, type, location, duration)
- `content/cv/`: CV variants (`full`, `ai`, `web3`, `fullstack`) that select roles, override bullets, and set each CV page's metadata
- Build output: `src/generated/` (typed modules) and `dist/` (the bundle, JSON exports such as `projects.json` and `cv.json`, and copies of the markdown)

## When facts conflict

- Employment facts: `content/experience` wins over project copy.
- Technology, architecture, and achievements: project markdown wins over experience summaries.

## Non-goals

- Career narrative, page positioning, capability theses, CV landing-page prose, and the `/bio` worldview. gaboesquivel.com owns those.
- Site routes, SEO keyword owners, and visual design.

## Open questions

- Booking link: the CLI prints `https://cal.com/gaboesquivel`, while gaboesquivel.com's `/cal` redirects to `https://calendly.com/gaboesquivel/30min`. One of them is out of date.
