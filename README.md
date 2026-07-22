# Srinath S — Portfolio

A premium, from-scratch portfolio site for Srinath S, Digital Marketing Specialist.
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis · Lucide + React Icons.
Static-exported, no backend, GitHub Pages compatible.

## Design tokens

- Background `#000000` · Text `#FFFFFF` · Accent `#C6FF05`
- Display: Space Grotesk · Body: Inter · Data/mono: JetBrains Mono
- Signature motif: a faint analytics grid-line background + monospace stat
  numbers throughout, echoing the GA4 / Looker Studio dashboards this work is
  built on, without literally illustrating one.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Replace placeholder content

All copy and links live in `src/lib/data.ts` — update names, socials, case
study numbers, etc. there.

Drop real files into these folders (same filenames the code already expects,
or update the paths in `src/lib/data.ts`):

```
public/images/profile/     hero-portrait.jpg, about-portrait.jpg, og-cover.jpg
public/images/companies/   orange-digital-marketing.png, tick-network.png
public/images/clients/     healthcare.png, hospitality.png, education.png,
                            local-business.png, corporate.png
public/images/projects/    case-study-1.jpg .. case-study-3.jpg,
                            video-1.jpg .. video-4.jpg
public/videos/             sample-1.mp4 .. sample-4.mp4
public/resume.pdf          your real resume
```

## Build a static export

```bash
npm run build
```

Output is written to `out/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In `next.config.mjs`, set `repoName` to your actual repository name
   (only matters if deploying to `https://<user>.github.io/<repo>`; skip
   if using a custom domain or a `<user>.github.io` root repo).
3. In the repo settings, set **Pages → Source → GitHub Actions**.
4. Push to `main` — `.github/workflows/deploy.yml` builds and publishes
   the static export automatically.

## Structure

```
src/app/            layout.tsx (fonts, metadata), page.tsx, globals.css
src/components/      Navbar, Hero, About, Skills, Experience, Clients,
                      CaseStudies, Videos, Contact, Footer, SmoothScroll,
                      AnimatedCounter
src/lib/data.ts       all placeholder content in one place
```
