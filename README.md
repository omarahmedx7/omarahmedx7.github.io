# Omar Ahmed — Portfolio

A single-page personal portfolio for **Omar Ahmed**, Software Engineer & Flutter Developer.
Plain HTML/CSS/JS — no build step, no framework, works offline.

## Features
- **Dark / light theme** toggle (remembers your choice, respects system preference)
- **English / Arabic** toggle with full **RTL** layout for Arabic
- Responsive (mobile-first), accessible, smooth scroll + scroll-reveal
- Sections: About · Experience · Projects · Skills · Contact + résumé download
- "O" monogram favicon (inline SVG)

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
cd /Users/omarahmed/portfolio
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page markup + content |
| `styles.css` | Themes, layout, responsive + RTL rules |
| `i18n.js` | English + Arabic translation strings |
| `script.js` | Toggles, nav, reveal, scroll-spy |
| `assets/OmarAhmed-SoftwareEngineer.pdf` | Downloadable résumé |

## Customize
- **Accent color / fonts:** edit the CSS variables at the top of `styles.css` (`--accent`, `--accent-2`, `--font-*`). Currently set to the **Flutter brand blue** (`#0175C2` / `#13B9FD`).
- **Copy / translations:** edit `i18n.js` (both `en` and `ar`) and the matching inline English in `index.html`.
- **Profile photo:** drop an image in `assets/` and ask to wire it into the hero.

## Deploy
Any static host works — the folder is fully self-contained (only Google Fonts is external).

- **GitHub Pages:** push the folder to a repo, enable Pages on the default branch.
- **Netlify / Vercel:** drag-and-drop the folder, or connect the repo (no build command, publish directory = project root).

> Tip: to publish under a custom domain, add it in your host's dashboard after the first deploy.
