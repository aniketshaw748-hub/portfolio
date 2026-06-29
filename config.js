/* ============================================================================
   ★  PORTFOLIO CONFIG  —  EDIT THIS ONE FILE TO UPDATE YOUR WHOLE SITE  ★
   ----------------------------------------------------------------------------
   You don't need to touch index.html. Change the values below, save, refresh.
   Rules of thumb:
     • Keep the quotes "" around text.   • Keep the commas at the end of lines.
     • To publish a video, paste its URL into that work's  video: "..."
   After editing, publish with:  git add -A   →   git commit -m "update"   →   git push
   (The site auto-redeploys from GitHub.)
   ============================================================================ */
window.PORTFOLIO_CONFIG = {

  /* ── CONTACT ──────────────────────────────────────────────────────────── */
  email: "aniketshaw748@gmail.com",
  calendly: "https://calendly.com/aniketshaw748/let-s-meet",  // "Book a call" button — set "" to hide it
  socials: {
    instagram: "https://www.instagram.com/aniikettt_3/",
    linkedin:  "https://www.linkedin.com/in/aniket-shaw-a10478368/",
    youtube:   "https://www.youtube.com/@KavyaanYT"
  },

  /* ── ABOUT / BIO ──────────────────────────────────────────────────────────
     Each line is one paragraph. You can use <b>bold</b> and
     <span class='hl'>cyan highlight</span> inside the text.                    */
  bio: [
    "I'm <b>Aniket</b> — an <span class='hl'>AI-native video editor</span> &amp; AI filmmaker who builds fast, internet-native edits and cinematic shorts end-to-end.",
    "I live inside generative image and video tools and obsess over <b>pacing, rhythm, and storytelling</b> — the stuff that makes a cut actually hit. When the shot doesn't exist, I generate it; when it needs energy, I add motion graphics.",
    "I also <b>love to code</b>. I build my own tools, automations, and sites — this one included — with <span class='hl'>Claude Code</span>. Prompt-first, terminal-native, always experimenting."
  ],
  bioMeta: "Based in Kolkata, IST · works in English &amp; Hindi",
  experience: "3+ yrs editing · 1.5 yrs in GenAI",  // small credibility line under the bio
  tagline: "Let my work do the talking.",           // shown near the contact CTAs

  /* ── TOOLS (chips, grouped) ───────────────────────────────────────────────
     Each "GROUP NAME": [ list of tools ]. The first tool in the "CODE"
     group is highlighted in cyan. Add/remove groups or tools freely.          */
  tools: {
    "AI STACK":      ["Seedance", "Kling", "Veo", "Higgsfield", "Google Flow", "Nano Banana", "GPT Image", "ElevenLabs", "Suno", "Topaz"],
    "EDIT / MOTION": ["Premiere Pro", "After Effects"],
    "CODE":          ["Claude Code"]
  },

  /* ── WORK / VIDEOS ────────────────────────────────────────────────────────
     One { ... } per card. To ADD a card: copy a line, change the values.
        category    : "ai" | "shorts" | "motion" | "narrative"  (sets the filter)
        orientation : "landscape" (16:9)  or  "portrait" (9:16)
        poster      : image filename inside assets/posters/  (without ".jpg")
        title       : shown on the card
        foot        : small text under the title
        video       : paste a YouTube / Vimeo / .mp4 URL to publish ("" = "coming soon")
        alt         : description for accessibility
     Filter counts + the "showing X of N" line update automatically.           */
  works: [
    { category:"ai", orientation:"landscape", poster:"ai-cinematic-01", title:"Cinematic AI Short — From Scratch", foot:"reel_001 · text-to-video", video:"https://youtu.be/fUZPP5u9S-I", alt:"Cinematic AI short — moody office scene rendered entirely with AI tools" },
    { category:"ai", orientation:"landscape", poster:"ai-cinematic-02", title:"Cinematic AI Short II — Refined", foot:"reel_002 · generative", video:"https://youtu.be/u74Ia_kdyHw", alt:"Refined cinematic AI short, second iteration" },
    { category:"ai", orientation:"portrait",  poster:"ai-cinematic-03", title:"AI Concept Short", foot:"concept · vertical", video:"https://youtube.com/shorts/6mYB7DWObDM?feature=share", alt:"Vertical AI concept short" },

    { category:"shorts", orientation:"portrait", poster:"client-short-01", title:"News Short — Cybersecurity Selloff", foot:"client · caption anim", video:"https://youtube.com/shorts/F94LDrT17s0", alt:"Finance/tech news short about a cybersecurity selloff" },
    { category:"shorts", orientation:"portrait", poster:"client-short-02", title:"News Short — Markets", foot:"client · fast-cut", video:"https://youtube.com/shorts/QngjoQqr5tA?feature=share", alt:"Fast-paced markets news short" },
    { category:"shorts", orientation:"portrait", poster:"client-short-03", title:"News Short — Tech", foot:"client · internet-native", video:"https://youtube.com/shorts/GC6ULTAc5aE", alt:"Tech news short with bold caption animation" },

    { category:"motion", orientation:"portrait", poster:"motion-01", title:"Motion Graphics — 01", foot:"mograph · kinetic", video:"https://youtube.com/shorts/5EVEY_-eApM?feature=share", alt:"Motion-graphics short, design 01" },
    { category:"motion", orientation:"portrait", poster:"motion-02", title:"Motion Graphics — 02", foot:"mograph · type", video:"https://youtube.com/shorts/bp7SR831TSo", alt:"Motion-graphics short, design 02" },
    { category:"motion", orientation:"portrait", poster:"motion-03", title:"Motion Graphics — 03", foot:"mograph · loop", video:"https://youtube.com/shorts/VL11ahtvk3c", alt:"Motion-graphics short, design 03" },

    { category:"narrative", orientation:"landscape", poster:"narrative-longform",  title:"Long-form — Motion + AI B-roll", foot:"long-form · mograph", video:"https://youtu.be/39PXSraWRzg", alt:"Long-form edit combining motion graphics and AI-generated b-roll" },
    { category:"narrative", orientation:"landscape", poster:"narrative-shortform", title:"Short-form — Real B-roll, Text Anim & Color Grade", foot:"edit · grade", video:"https://youtu.be/CE181I6TKbk", alt:"Short-form edit with real b-roll, text animation and color grading" },
    { category:"narrative", orientation:"portrait",  poster:"narrative-gaming",    title:"Gaming News Short", foot:"gaming · vertical", video:"https://youtube.com/shorts/E-VL-QoNDY4?feature=share", alt:"Gaming news short, vertical format" }
  ],

  /* ── 3D BLOB (the glowing object in the hero) ──────────────────────────────
     Colors are hex like "#22d3ee". Numbers control look & feel:               */
  blob: {
    colors: {
      cyan:    "#00ddff",   // top / edges
      magenta: "#ff0180",   // core mass
      purple:  "#8400ff"    // mid blend
    },
    size:      2,         // overall scale   (1 = default, 1.3 = bigger, 0.8 = smaller)
    stretch:   1.20,        // vertical stretch (1 = round, >1 = taller)
    position:  { x: 0, y: 1 }, // nudge: x = right(+)/left(-), y = up(+)/down(-)  (try ±0.5)
    density:   40,          // dot count / grain (20–56; higher = denser but heavier)
    lumpiness: 0.42,        // how much it morphs (0.2–0.7)
    brightness:0.4,        // dot glow (0.4–1.0)
    rimGlow:   0.45,        // edge halo (0.2–0.8)
    autoRotate:true,        // slow idle spin (set false to stop)

    /* MOBILE OVERRIDES (phones, screens ≤ 640px wide).
       Set your own size/position just for mobile here. Delete this whole
       "mobile" block to reuse the desktop size/position on phones too.        */
    mobile: {
      size:     2.0,
      position: { x: 0, y: 0 }
    }
  }

};
