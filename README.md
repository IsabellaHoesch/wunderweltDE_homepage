# Static Website Template

This repository is a reusable Astro template for building fast, static, multilingual websites that can be hosted on GitHub Pages or any other static hosting provider.

The project is set up around Astro pages, shared Astro components, React support for interactive islands, Tailwind CSS for styling, and a simple content data layer for localized copy. The intended use is to clone or copy this project for a new static website, replace the sample brand/content, add pages and components, then build the site into static files in `dist/`.

## Stack

- Astro 6 for static site generation and file-based routing.
- React 19 through `@astrojs/react` for interactive components when needed.
- Tailwind CSS 4 through the Vite plugin for utility-first styling.
- TypeScript with Astro's strict configuration.
- Astro i18n routing with German as the default locale and English under `/en/`.
- MDX support through `@astrojs/mdx` for future content-heavy pages.

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── HomePage.astro
│   │   └── NavBar.astro
│   ├── data/
│   │   └── homeContent.ts
│   ├── layouts/
│   │   └── main.astro
│   ├── pages/
│   │   ├── en/
│   │   │   └── index.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### `src/pages`

Astro uses file-based routing. Every file in `src/pages` becomes a route in the generated static site.

- `src/pages/index.astro` is the default German home page at `/`.
- `src/pages/en/index.astro` is the English home page at `/en/`.

Page files should stay thin. Their main job is to choose the locale, load the right content, and compose layouts and page-level components.

### `src/layouts`

`src/layouts/main.astro` defines the shared HTML document shell:

- global CSS import
- `<html lang>`
- meta tags
- favicon
- page title
- shared body slot

Use layouts for document-level structure and metadata. Keep page-specific sections in components.

### `src/components`

Components hold reusable UI and page sections.

- `HomePage.astro` renders the localized home page content and language switch link.
- `NavBar.astro` renders navigation links passed in from the page component.
- `Footer.astro` is available as a shared footer component.

Astro components should be the default choice for static UI. Use React components only when a feature needs client-side state or interaction.

### `src/data`

`src/data/homeContent.ts` contains localized strings for the current home page.

The current content model supports:

- hero headline, subheadline, and CTA text
- navigation labels
- typed locale keys for `en` and `de`

For small static websites, keeping structured copy in TypeScript files is simple and type-safe. As the site grows, this folder can be expanded by page or domain, for example `aboutContent.ts`, `servicesContent.ts`, or `navigationContent.ts`.

### `src/styles`

`src/styles/global.css` imports Tailwind CSS and defines shared project utilities:

- `section-spacing` for consistent vertical spacing
- `container-responsive` for centered responsive content width
- base body typography and colors

Add global primitives here when they are reused across the site. Prefer component-local class composition for one-off styling.

### `src/assets` and `public`

Use `src/assets` for source-controlled assets imported by components or pages. Astro can process and optimize these assets when imported.

Use `public` for files that must be copied directly to the final site root without processing, such as `favicon.svg`, robots files, or static downloads.

## Configuration

The main project configuration lives in `astro.config.mjs`.

```js
export default defineConfig({
  site: 'https://www.example.com',
  integrations: [react()],
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
```

Important settings:

- `site` should be changed to the final production URL before deployment.
- `integrations: [react()]` enables React islands inside Astro pages.
- `i18n.defaultLocale` makes German the default language.
- `routing.prefixDefaultLocale: false` keeps German at `/` instead of `/de/`.
- English content is served from `/en/`.
- Tailwind CSS is loaded through Vite instead of a separate Tailwind config file.

For GitHub Pages project sites, where the site is hosted below a repository path such as `https://username.github.io/repository-name/`, set both `site` and `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name',
  // existing integrations, i18n, and vite settings
});
```

For a custom domain or a GitHub Pages user/organization site, `base` is usually not needed.

## Development Workflow

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Build the static production site:

```sh
npm run build
```

Preview the generated production build locally:

```sh
npm run preview
```

Run Astro and TypeScript checks:

```sh
npm run check
```

The production build is written to `dist/`. That folder is generated output and should not be edited directly.

## How To Use This Template

1. Update project metadata in `package.json`.
2. Update `site` in `astro.config.mjs` for the final deployment URL.
3. If deploying to a GitHub Pages project URL, add the correct `base` value.
4. Replace the sample brand text in `src/data/homeContent.ts`.
5. Replace the favicon and any starter assets in `public` and `src/assets`.
6. Build new pages in `src/pages`.
7. Extract reusable sections into `src/components`.
8. Keep translated strings together in `src/data` so each locale stays complete.
9. Run `npm run check` and `npm run build` before deploying.

## Working With Multiple Languages

The template currently supports:

- German: `/`
- English: `/en/`

When adding a new translated page, create a page for each locale and pass the matching content into shared components.

Example pattern:

```text
src/pages/services.astro       -> German services page at /services/
src/pages/en/services.astro    -> English services page at /en/services/
```

Then keep the page copy in a typed data file:

```text
src/data/servicesContent.ts
```

This keeps routing, layout, and content responsibilities separate:

- routes decide which locale is active
- data files provide translated content
- components render the UI
- layouts manage document structure and metadata

If another language is added, update `locales` in `astro.config.mjs` and extend the content records in `src/data`.

## Working With React

Astro renders static HTML by default. This is ideal for marketing pages, landing pages, documentation pages, and lightweight business websites.

Use React only for interactive parts that need browser-side state, for example:

- calculators
- filters
- interactive forms
- dashboards
- animated widgets

React components can be imported into Astro files and hydrated with Astro client directives such as `client:load`, `client:idle`, or `client:visible`. Keep static sections as Astro components so the site remains fast and simple.

## Styling Conventions

Tailwind CSS is available globally through `src/styles/global.css`.

Recommended conventions:

- Use `container-responsive` for main content width.
- Use `section-spacing` for consistent vertical rhythm.
- Keep reusable visual patterns in components.
- Add global utilities only when they are used in multiple places.
- Avoid editing generated files in `dist/` or `.astro/`.

## GitHub Pages Deployment

This template builds to static files, which is the format GitHub Pages expects.

Before deploying:

1. Confirm `astro.config.mjs` has the correct `site`.
2. Add `base` if the site is served from a repository subpath.
3. Run `npm run build`.
4. Deploy the generated `dist/` directory through GitHub Pages or a GitHub Actions workflow.

The repository does not currently include a GitHub Actions workflow. If automated deployment is needed, add a workflow that installs dependencies, runs `npm run build`, and publishes `dist/` to GitHub Pages.

## Generated And Ignored Files

The following folders are generated and ignored by git:

- `node_modules/` from dependency installation
- `.astro/` from Astro type generation
- `dist/` from production builds

Do not make source changes in these folders. Change files in `src`, `public`, or the project configuration instead, then rebuild.

## Useful Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the local Astro development server. |
| `npm run build` | Generate the static production site in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run check` | Run Astro and TypeScript validation. |
| `npm run astro -- --help` | Show Astro CLI help. |
