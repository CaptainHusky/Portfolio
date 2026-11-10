import { defineConfig } from 'vite';

// Vite is used only as a dev server (`npm run dev`).
// The site itself is plain HTML/CSS/JS: there is no build step,
// GitHub Pages serves the files from the repository root as they are.
export default defineConfig({
  // Multi-page mode: a missing file (photo, CV, screenshot…) returns a real 404,
  // exactly like GitHub Pages, instead of silently serving index.html.
  appType: 'mpa',
  server: {
    port: 5173,
    open: true, // open the browser automatically
  },
});
