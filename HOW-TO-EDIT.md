# Editing your portfolio

You edit **one file: `config.js`**. Open it, change the values, save, refresh. You almost never need to touch `index.html`.

> **Golden rules:** keep the `"` quotes around text, keep the trailing commas, and don't delete the `{ }` brackets. If something breaks, it's almost always a missing quote or comma.

> **Preview locally:** from this folder run `python -m http.server 8123`, then open <http://127.0.0.1:8123/>

---

## Publish your changes (go live)
This repo auto-deploys from GitHub. After editing `config.js`:
```bash
git add -A
git commit -m "update portfolio"
git push
```
Wait ~30–60 seconds, then refresh your Vercel URL.

---

## What you can change in `config.js`

| Section | What it controls |
|---|---|
| `email`, `socials` | Contact email + Instagram / LinkedIn / YouTube links |
| `bio`, `bioMeta` | Your About paragraphs (use `<b>…</b>` and `<span class='hl'>…</span>`) |
| `tools` | The skill chips, grouped (first chip in **CODE** is highlighted) |
| `works` | Every video card (see below) |
| `blob` | The 3D object (see below) |

### Add or publish a video (`works`)
- **Publish a video:** set that item's `video:` to a YouTube / Vimeo / `.mp4` URL. Empty `""` = "preview coming soon".
- **Add a new piece:** copy a `{ … }` line and edit:
  - `category`: `ai` | `shorts` | `motion` | `narrative`
  - `orientation`: `landscape` (16:9) or `portrait` (9:16)
  - `poster`: image filename in `assets/posters/` **without** `.jpg`
  - `title`, `foot`, `alt`
- **Make a thumbnail** from a video:
  ```bash
  ffmpeg -ss 5 -i "clip.mp4" -frames:v 1 -vf "scale='min(1280,iw)':-2" -q:v 3 assets/posters/my-clip.jpg
  ```
- Filter counts and the "showing X of N" line update automatically.

### The 3D blob (`blob`)
- `colors.cyan / magenta / purple` — hex colors (e.g. `"#22d3ee"`)
- `size` — overall scale (`1` = default, `1.3` bigger, `0.8` smaller)
- `stretch` — vertical stretch (`1` round, `>1` taller)
- `position: { x, y }` — nudge: x = right(+)/left(−), y = up(+)/down(−). Try `±0.5`.
- `density` — grain (20–56; higher = denser, heavier) · `lumpiness` (0.2–0.7) · `brightness` (0.4–1.0) · `rimGlow` (0.2–0.8)
- `autoRotate` — `true`/`false`
- **`mobile: { size, position }`** — separate size & position **for phones (≤640px)**. Delete the whole `mobile` block to reuse the desktop values on phones too.

---

## Good to know
- **Big videos:** your `.mp4` files and private notes stay out of GitHub (via `.gitignore`). Host finished videos on **YouTube/Vimeo (unlisted)** and paste the links into `works`. Your 2.1 GB long-form *must* live there.
- **Cursors:** the terminal carets stay solid and only start blinking after the first click on the page.
- **Safety net:** if `config.js` has a typo, the site falls back to its built-in content instead of breaking — just fix the typo (check quotes/commas) and refresh.
- **Two design drafts** still live in the repo: `index.html` (your live Style 4 site) and `draft-style5-editorial.html` (the editorial alternative).
