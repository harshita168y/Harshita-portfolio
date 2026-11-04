# Harshita Ramesh — Next.js Portfolio

A responsive software-engineering portfolio built with Next.js App Router, React, and TypeScript. It carries over the approved colourful keyboard design, sapphire text highlights, off-white page, and the public content from [harshitaportfolio.online](https://www.harshitaportfolio.online/).

The **Let’s Connect** section uses a neutral grey background (`#ECEEEE`).

## Run locally

Use Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm start
```

To check TypeScript separately:

```bash
npm run typecheck
```

## What is included

- Colourful CSS keycaps that lift on hover and depress when pressed.
- Keyboard-accessible navigation, mobile navigation, and a skip link.
- Clickable topic keys and expandable project descriptions.
- All five selected projects, six engineering outcomes, professional experience, technical expertise, education, and contact links.
- System reduced-motion support.
- Local fonts and their open-source licences, with no font-service request at runtime.
- Page metadata and a custom favicon.

The page content is rendered through Server Components. The keyboard, mobile menu, and project expanders are small Client Components. The application uses normal React components and state; it does not embed the earlier mockup in an iframe or use HTML injection.

## Edit the site

| File | Purpose |
| --- | --- |
| `content/portfolio.ts` | Profile, contact information, project descriptions, outcomes, roles, skills, and education. |
| `components/keyboard-hero.tsx` | Keyboard labels, hover descriptions, topic details, and interactions. |
| `components/site-header.tsx` | Desktop and mobile navigation. |
| `components/project-card.tsx` | Expandable project cards. |
| `components/project-visual.tsx` | Original project sketches made with CSS and Lucide icons. |
| `app/page.tsx` | Page structure, headings, and sections. |
| `app/globals.css` | Layout, responsive styles, keycap colours, sapphire highlights, and motion. |
| `app/layout.tsx` | Local fonts, metadata, and document structure. |

Look for `.hr-contact` in `app/globals.css` to change the contact background. The main colour tokens are in the `#portfolio` rule near the start of that file. Each key has its own `--hr-cap` and `--hr-side` colours.

## Content and links

Content was seeded from the current public portfolio on 4 November 2026. Edit it in `content/portfolio.ts` as your work and availability change. Update `profile.siteUrl` if you deploy on a different domain; it supplies canonical and Open Graph URLs.

Project illustrations are system or concept sketches, as labelled. The email and telephone links open the visitor’s usual apps. No API keys, environment variables, database, or form service are needed to run the portfolio.

## Deploy

This is a standard Next.js application. Use a host with Next.js support, or build it with `npm run build` and run `npm start` on a Node.js server. Set the `PORT` environment variable when the host needs a different port.

## Third-party assets

DM Sans and Instrument Serif are distributed under the SIL Open Font License. Their licence files are included in `public/fonts/`. Icons are supplied by the `lucide-react` npm dependency under its package licence.

The download includes source code, bundled fonts, and the npm lockfile. Install dependencies with `npm ci`; generated build output and `node_modules` are excluded.

## Validation

The production build and TypeScript checks passed. The generated production HTML was checked for all five projects, seven keyboard controls, and valid section and disclosure targets. Browser smoke testing was unavailable in the creation environment.
