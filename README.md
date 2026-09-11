# Digital Task Force - ISMS (Website Recreation)

A modern, responsive single-page marketing website for **Digital Task Force - ISMS**,
a regulatory-aligned cyber security firm. Built with **React + Vite + React-Bootstrap**
and custom CSS (no Tailwind).

## Tech stack

- React 18
- Vite 5
- React-Bootstrap 2 + Bootstrap 5 CSS
- Bootstrap Icons
- Custom CSS (design tokens in `src/styles/global.css`)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
veenit_project
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── pages/
    │   └── Home.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── CyberBackground.jsx      # animated canvas hero background
    │   ├── FeatureCards.jsx
    │   ├── ComplianceFramework.jsx
    │   ├── ServicesSection.jsx
    │   ├── ServiceCard.jsx
    │   ├── ISMSSection.jsx
    │   ├── ContactSection.jsx
    │   ├── ContactForm.jsx
    │   ├── ClientLogos.jsx
    │   ├── Footer.jsx
    │   └── BackToTop.jsx
    ├── hooks/
    │   └── useScrollReveal.js
    ├── assets/
    │   └── images/
    │       ├── logo.svg
    │       └── isms-visual.svg
    └── styles/
        ├── global.css
        └── home.css
```

## Notes

- The hero layers a small (~110 KB) **seamless-loop cyber-network video**
  (`src/assets/videos/cyber-hero.mp4`, autoplay/muted/loop/playsInline, with a JPG poster
  fallback) beneath a live **animated canvas** plexus and a dark overlay so the text stays
  readable. The video is an original, generated animation — no third-party stock footage.
  The canvas respects `prefers-reduced-motion`.
- The logo and the ISMS section illustration are **original SVGs**, not reproductions of
  any third-party trademark or stock photo.
- The contact form is **front-end only** (client-side validation, no backend/email wired up).
- Navigation uses smooth-scroll anchors to sections on the single page.
