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
| `email`, `calendly`, `socials` | Contact email, Book-a-call (Calendly) link, and Instagram / LinkedIn / YouTube |
| `bio`, `bioMeta` | About copy and the small location/language line |
| `tools` | The three craft/tool groups in the About section |
| `works` | The cinematic chapters, vertical wall, wide edits, and film index. The first entry is the opening film |

### Add or publish a video (`works`)
- **Publish a video:** set that item's `video:` to a YouTube / Vimeo / `.mp4` URL. Empty `""` = "preview coming soon".
- **Add a new piece:** copy a `{ … }` line and edit. Its position in the array is its position in the film index:
  - `category`: `ai` | `shorts` | `motion` | `narrative`
  - `orientation`: `landscape` (16:9) or `portrait` (9:16)
  - `poster`: image filename in `assets/posters/` **without** `.webp`
  - `title`, `foot`, `alt`
  - `process` (optional): a note retained with the film entry
- **Make a thumbnail** from a video (straight to WebP):
  ```bash
  ffmpeg -ss 5 -i "clip.mp4" -frames:v 1 -vf "scale='min(1280,iw)':-2" -q:v 80 assets/posters/my-clip.webp
  ```
- The first `ai` entry becomes the opening hero and muted desktop preview. The remaining `ai` entries become full-screen chapters in order.
- Non-AI portrait work appears in the expanding vertical wall. Non-AI landscape work appears under **The wider cuts**.
- Film-index entries and filter counts update automatically. Keep **Nuvve Kada** first and the previous music video second unless you intentionally want to change the feature order.

---

## Good to know
- **Big videos:** your `.mp4` files and private notes stay out of GitHub (via `.gitignore`). Host finished videos on **YouTube/Vimeo (unlisted)** and paste the links into `works`. Your 2.1 GB long-form *must* live there.
- **Safety net:** if `config.js` has a typo, the site falls back to its built-in content instead of breaking — just fix the typo (check quotes/commas) and refresh.
- **The lab page** (`labs.html`) is the coding portfolio, with its own projects, stacks, and links. Edit the `<article class="proj">` blocks directly.
- **Two résumé pages**, both plain HTML and print-ready (they deliberately show email only, no phone number):
  - `resume.html` — **video editing** résumé, linked from the main site's contact section.
  - `resume-coding.html` — **coding** résumé, linked from the lab page. Replace its content freely — it started as a generated draft.
- **Link previews:** `assets/og-image.jpg` is the image shown when the site is shared on LinkedIn/WhatsApp/X. Regenerate it from any 16:9 still if you want a new one (1200×630).
- **Design drafts** (`draft-style5-editorial.html`, `mockups/`) now stay local only — they're gitignored and no longer published.
