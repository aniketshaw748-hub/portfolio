# Editing your portfolio

Your live site is a single file: **`index.html`**. Everything (styles, scripts, the 3D blob) lives inside it. The only external pieces are the thumbnail images in **`assets/posters/`**.

> Tip: preview changes locally before pushing. From this folder run
> `python -m http.server 8123` then open <http://127.0.0.1:8123/>

---

## 1. Publish a video on a card  (most common task)

Open `index.html`, find the **`VIDEO_LINKS`** block near the top of the `<script>` and paste the URL next to the matching key. Works with YouTube, Vimeo, or a direct `.mp4` URL.

```js
var VIDEO_LINKS = {
  'ai-cinematic-01': 'https://youtu.be/XXXXXXXXXXX',   // ← paste here
  'client-short-01': 'https://vimeo.com/123456789',
  ...
};
```

The **key is the thumbnail's filename** (without `.jpg`). Leave it `''` to keep the tasteful "preview coming soon" state. That's it — the card now opens the real video in the lightbox.

**Recommended hosting:** upload each video to YouTube or Vimeo as *Unlisted* (free, handles your big files, streams instantly), then paste the link. Your 2.1 GB long-form especially must live on YouTube/Vimeo — it can't be hosted on the site directly.

---

## 2. Add a brand-new piece of work

1. **Make a thumbnail** and drop it in `assets/posters/`. To grab a frame from a video with ffmpeg:
   ```bash
   ffmpeg -ss 5 -i "my-new-video.mp4" -frames:v 1 -vf "scale='min(1280,iw)':-2" -q:v 3 assets/posters/my-new-clip.jpg
   ```
2. In `index.html`, find the **Work grid** (`<div class="work-grid" id="workGrid">`) and **copy one `<article>…</article>` block**. Paste it where you want the card to appear, then change:
   - `data-category` → `ai` | `shorts` | `motion` | `narrative`
   - `data-poster` **and** the `<img src>` → your new image path
   - `data-title`, the visible `<div class="ctitle">`, and the `<img alt>`
   - the class **and** `data-orientation` → `landscape` (16:9) or `portrait` (9:16)
3. (Optional) add a `VIDEO_LINKS` entry for it (step 1).

The filter counts and the "showing X of N" line update **automatically** — no need to touch them.

---

## 3. Edit your bio, tools, or contact details

All in `index.html`:
- **Bio + tool chips** → the `<section id="about">` block. Tools are grouped under `// AI STACK`, `// EDIT / MOTION`, `// CODE`.
- **Email** → search for `aniketshaw748@gmail.com` (appears in the contact button).
- **Social links** → the `contact-socials` block (Instagram / LinkedIn / YouTube) and the `<footer>`.

---

## 4. Tweak the 3D blob (optional)

In the WebGL `<script>` near the bottom, the `initBlob()` function has tunables at the top:
- `DETAIL` — dot density (higher = grainier, costs performance)
- `POINT_SIZE` — dot size · `AMP` — how lumpy it morphs
- `uExposure` / `uGlowStrength` — brightness/glow · `uCyan` / `uMagenta` / `uPurple` — colors

If WebGL ever fails to load, the site automatically falls back to a CSS blob — nothing breaks.

---

## 5. Publish your changes (push → auto-deploy)

This repo is connected to Vercel, so **every push to `main` redeploys the live site automatically**:

```bash
git add -A
git commit -m "Update portfolio"
git push
```

Give it ~30–60 seconds, then refresh your Vercel URL. Done.

> `.gitignore` keeps your big `.mp4` files and private notes out of GitHub — don't remove those rules.
