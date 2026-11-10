# Portfolio

Personal portfolio: a synced repository carousel (code excerpt + summary + result), bilingual FR/EN, dark theme inspired by Steam's interface. Plain HTML, CSS and JavaScript: no framework, no build step.

## Run locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

The site opens at <http://localhost:5173>.

## Add or edit a project

Open `script.js`. Section 1 (`repos`) is the only place to touch: copy an object, change its fields. The order of the array is the order of the carousel.

## Assets

| File | Used for |
| --- | --- |
| `assets/photo.jpg` | portrait in the hero section |
| `assets/cv.pdf` | "Download my CV" button |
| `assets/media/*` | one screenshot, GIF or short video per project |

Missing files show a placeholder instead of a broken image.

## Deploy (GitHub Pages)

1. Push the repository to GitHub.
2. Settings → Pages → *Deploy from a branch* → branch `main`, folder `/ (root)`.
3. The site is live at `https://<username>.github.io/<repository>/`.

## Credits

Syntax highlighting by [highlight.js](https://highlightjs.org) (BSD-3-Clause, see `assets/vendor/highlight.LICENSE`).
