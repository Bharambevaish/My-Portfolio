# Vaishnavi Bharambe · Portfolio

Personal portfolio of **Vaishnavi Bharambe**, a B.Tech Information Technology student at Walchand College of Engineering, Sangli, building data analysis and AI projects.

🔗 **Live:** https://bharambevaish.github.io/My-Portfolio/

## Tech stack

| Layer | Tool |
|---|---|
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) (Lucide + Simple Icons) |
| Fonts | Geist, Geist Mono, Instrument Serif (Google Fonts) |
| Hosting | GitHub Pages via GitHub Actions |

## Features

- Intro loader, staggered hero text and a typewriter that cycles through roles
- Scroll-reveal animations, a scroll progress bar and a cursor-following glow
- 3D tilt cards with a spotlight hover effect
- Project filter tabs with animated layout changes
- Pop-up project case studies with animated charts and pipelines (Esc or click outside to close)
- A timeline that draws itself as you scroll
- An infinite skills marquee and counters that animate up
- Magnetic buttons, toast notifications and copy-to-clipboard email
- Light and dark mode that remembers your choice
- Fully responsive, keyboard accessible and respects "reduce motion"

## Project structure

```
My-Portfolio/
├── .github/workflows/deploy.yml   # builds & deploys to GitHub Pages on every push to main
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── portfolio.js           # ← ALL content lives here (edit this to update the site)
│   ├── hooks/
│   │   ├── useTheme.js            # light/dark mode
│   │   └── useActiveSection.js    # highlights the current nav link
│   ├── components/
│   │   ├── Loader.jsx             # intro screen
│   │   ├── Navbar.jsx             # sticky glass nav, theme toggle, mobile menu
│   │   ├── Hero.jsx               # headline, typewriter, notebook card
│   │   ├── About.jsx              # bio + animated counters
│   │   ├── Projects.jsx           # filterable project cards
│   │   ├── ProjectModal.jsx       # project case-study pop-up
│   │   ├── Experience.jsx         # scroll-drawn timeline
│   │   ├── Skills.jsx             # marquee + skill groups
│   │   ├── Education.jsx          # education & certifications
│   │   ├── Contact.jsx            # contact cards + message form
│   │   ├── Footer.jsx, BackToTop.jsx
│   │   └── (shared) Reveal, SectionHeading, TiltCard, Magnetic, Counter,
│   │       Typewriter, Toast, Icon, ScrollProgress, CursorGlow
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Tailwind theme, keyframes, utilities
├── index.html
├── vite.config.js
└── package.json
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

## Deploy

1. Push to `main`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** (one-time setup).
3. The workflow builds and publishes the site automatically on every push.

## Updating content

Edit `src/data/portfolio.js`. To add a resume button, paste a public PDF link into `profile.resume`.
