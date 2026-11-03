# McNabb Construction LLC website

Rebuild of mcnabbconstructionllc.com in Vite + React + Tailwind, using React Bits components (`src/components/bits/`).

```sh
npm install
npm run dev      # local dev server
npm run build    # static site in dist/
```

- Copy, services, testimonials and the gallery list live in `src/site.js`.
- Photos are in `public/images/` (originals from the 2019 site, resized).
- The contact form has no backend yet: it opens the visitor's email app pre-filled (`src/components/ContactForm.jsx`).
- Hosted on GitHub Pages: every push to `main` builds and deploys via `.github/workflows/pages.yml`. The build copies `index.html` to `404.html` so deep links like `/kitchen-remodel` work. `BASE_PATH` sets the sub-path; drop it when moving to a custom domain.
