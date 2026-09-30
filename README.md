# Career website

A personal portfolio and résumé site for roles in email marketing, CRM /
lifecycle marketing, marketing automation, WordPress / web and junior
front-end development.

Built with **Next.js (App Router)**, **React**, **TypeScript** and
**Tailwind CSS**. Every page is statically generated.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (also type-checks)
npm run lint
npm run check:placeholders   # lists content you still need to fill in
```

## Updating your content

All text lives in `src/content/`. You shouldn't need to touch components.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, headline, intro, location, email, LinkedIn, GitHub, résumé path |
| `experience.ts` | Work history timeline (Experience page, home page, résumé) |
| `skills.ts` | Skill categories and your top skills |
| `projects.ts` | Project cards and case-study pages (`/projects/<slug>`) |
| `resume.ts` | Résumé summary, education, certifications |
| `about.ts` | About page story, marketing/technical overlap and working principles |

**Placeholders:** any value written as `"[Like this]"` is a placeholder. It
shows with a striped yellow highlight on the site and is left out of SEO
metadata. Run `npm run check:placeholders` to list what's left.

### Résumé PDF

Replace `public/resume.pdf` with your own PDF (keep the same file name, or
change `resumePdf` in `site.ts`). The résumé page also has a print-friendly
layout.

### Project screenshots

1. Put images in `public/projects/<slug>/` (PNG, JPG or WebP; ~2000px wide is plenty).
2. Add them to the project's `screenshots` array with `src`, `alt`, `width`
   and `height`. The first screenshot is used on the project card and as the
   case study's hero image.
3. Blur or remove any confidential client/customer data first.

Images are served through `next/image`, so they're resized, converted to
modern formats and lazy-loaded automatically.

## Contact form

Set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` to a [Formspree](https://formspree.io)
(or compatible) endpoint to receive messages. Without it, the form opens the
visitor's email app with the message pre-filled, using the email in `site.ts`.

## Deploying

The easiest option is [Vercel](https://vercel.com): import the repository and
set `NEXT_PUBLIC_SITE_URL` (and optionally the form endpoint) as environment
variables. See `.env.example`.

SEO: per-page titles/descriptions, canonical URLs, Open Graph/Twitter tags, a
generated share image (`src/app/opengraph-image.tsx`), `sitemap.xml`,
`robots.txt` and Person structured data are all set up.

## Project structure

```
src/
  app/            routes (home, experience, projects, skills, resume, about, contact)
  components/     reusable UI (cards, timeline, header, footer, form…)
  content/        ← your editable content
  lib/            metadata + placeholder helpers
public/           résumé PDF and project images
archive/          the previous Acorn micro-site files, kept for reference
```
