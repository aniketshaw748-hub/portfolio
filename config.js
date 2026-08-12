/* ============================================================================
   ★  PORTFOLIO CONFIG  —  EDIT THIS ONE FILE TO UPDATE YOUR WHOLE SITE  ★
   ----------------------------------------------------------------------------
   You don't need to touch the HTML pages. Change the values below, save, refresh.
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
    youtube:   "https://www.youtube.com/@KavyaanYT",
    github:    "https://github.com/aniketshaw748-hub"
  },

  /* ── ABOUT / BIO ──────────────────────────────────────────────────────────
     Each line is one paragraph in the About section.                         */
  bio: [
    "I'm Aniket, a video editor and AI filmmaker. I make music films, short-form edits and motion work, often building shots with generative tools when the footage does not exist.",
    "My work starts with the cut: performance, pacing and rhythm. Then I shape the motion, sound and finish until the piece feels complete.",
    "I also build small tools and automations for my own production workflow."
  ],
  bioMeta: "Based in Kolkata, IST / working in English and Hindi",
  experience: "3+ yrs editing · 1.5 yrs in GenAI",  // small credibility line under the bio
  tagline: "Let my work do the talking.",           // shown near the contact CTAs

  /* ── TOOLS (grouped) ──────────────────────────────────────────────────────
     Each "GROUP NAME": [ list of tools ]. Add/remove groups or tools freely. */
  tools: {
    "AI STACK":      ["Seedance", "Kling", "Veo", "Higgsfield", "Google Flow", "Nano Banana", "GPT Image", "ElevenLabs", "Suno", "Topaz"],
    "EDIT / MOTION": ["Premiere Pro", "After Effects"],
    "CODE":          ["Claude Code"]
  },

  /* ── WORK / VIDEOS ────────────────────────────────────────────────────────
     One { ... } per film. The first AI item becomes the opening hero.
     Later AI items become cinematic chapters in array order.
     Portrait work becomes the vertical wall; other landscape work becomes
     the wider-cuts section. Every item also appears in the film index.
     To ADD a film: copy a line, change the values.
        category    : "ai" | "shorts" | "motion" | "narrative"  (sets the filter)
        orientation : "landscape" (16:9)  or  "portrait" (9:16)
        poster      : image filename inside assets/posters/  (without ".webp")
        title       : shown with the film and in the film index
        foot        : short descriptor shown beside the play action
        video       : paste a YouTube / Vimeo / .mp4 URL to publish ("" = "coming soon")
        alt         : description for accessibility
        process     : optional note about how the work was made
     The film index and filter counts update automatically.                     */
  works: [
    { category:"ai", orientation:"landscape", poster:"hero-nuvve-kada", title:"Nuvve Kada", foot:"hero film · musical love story · 02:22", video:"https://www.youtube.com/watch?v=3yY6CAn7Qeo", alt:"Nuvve Kada, a cinematic Telugu musical love story", process:"A cinematic musical love story shaped as a complete film, from visual direction through edit and final finish." },
    { category:"ai", orientation:"landscape", poster:"ai-cinematic-01", title:"Cinematic AI Music Video", foot:"reel_001 · text-to-video", video:"https://youtu.be/xtJId7RjkWM", alt:"Cinematic AI music video created with generative video tools", process:"script + shot list → text-to-video generations, style-matched shot by shot → assembled, graded and sound-designed in Premiere Pro. Every frame generated; every cut human." },
    { category:"ai", orientation:"landscape", poster:"ai-cinematic-02", title:"Cinematic Motion Launch Trailer", foot:"reel_002 · text-to-video", video:"https://youtu.be/KSdsuyZ9HKw", alt:"Cinematic AI short — moody office scene rendered entirely with AI tools", process:"script + shot list → text-to-video generations, style-matched shot by shot → assembled, graded and sound-designed in Premiere Pro. Every frame generated; every cut human." },
    { category:"ai", orientation:"landscape", poster:"ai-cinematic-03", title:"Cinematic AI Short — From Scratch", foot:"reel_003 · text-to-video", video:"https://youtu.be/fUZPP5u9S-I", alt:"Cinematic AI short — moody office scene rendered entirely with AI tools", process:"script + shot list → text-to-video generations, style-matched shot by shot → assembled, graded and sound-designed in Premiere Pro. Every frame generated; every cut human." },
    { category:"ai", orientation:"landscape", poster:"ai-cinematic-04", title:"Cinematic AI Short II — Refined", foot:"reel_004 · generative", video:"https://youtu.be/u74Ia_kdyHw", alt:"Refined cinematic AI short, second iteration" },
    { category:"ai", orientation:"portrait",  poster:"ai-cinematic-05", title:"AI Concept Short", foot:"reel_005 · vertical", video:"https://youtube.com/shorts/6mYB7DWObDM?feature=share", alt:"Vertical AI concept short" },

    { category:"shorts", orientation:"portrait", poster:"client-short-01", title:"News Short — Cybersecurity Selloff", foot:"client · caption anim", video:"https://youtube.com/shorts/F94LDrT17s0", alt:"Finance/tech news short about a cybersecurity selloff" },
    { category:"shorts", orientation:"portrait", poster:"client-short-02", title:"News Short — Markets", foot:"client · fast-cut", video:"https://youtube.com/shorts/QngjoQqr5tA?feature=share", alt:"Fast-paced markets news short" },
    { category:"shorts", orientation:"portrait", poster:"client-short-03", title:"News Short — Tech", foot:"client · internet-native", video:"https://youtube.com/shorts/GC6ULTAc5aE", alt:"Tech news short with bold caption animation" },

    { category:"motion", orientation:"portrait", poster:"motion-01", title:"Motion Graphics — 01", foot:"mograph · kinetic", video:"https://youtube.com/shorts/5EVEY_-eApM?feature=share", alt:"Motion-graphics short, design 01" },
    { category:"motion", orientation:"portrait", poster:"motion-02", title:"Motion Graphics — 02", foot:"mograph · type", video:"https://youtube.com/shorts/bp7SR831TSo", alt:"Motion-graphics short, design 02" },
    { category:"motion", orientation:"portrait", poster:"motion-03", title:"Motion Graphics — 03", foot:"mograph · loop", video:"https://youtube.com/shorts/VL11ahtvk3c", alt:"Motion-graphics short, design 03" },

    { category:"narrative", orientation:"landscape", poster:"narrative-longform",  title:"Long-form — Motion + AI B-roll", foot:"long-form · mograph", video:"https://youtu.be/39PXSraWRzg", alt:"Long-form edit combining motion graphics and AI-generated b-roll" },
    { category:"narrative", orientation:"landscape", poster:"narrative-shortform", title:"Short-form — Real B-roll, Text Anim & Color Grade", foot:"edit · grade", video:"https://youtu.be/CE181I6TKbk", alt:"Short-form edit with real b-roll, text animation and color grading" },
    { category:"narrative", orientation:"portrait",  poster:"narrative-gaming",    title:"Gaming News Short", foot:"gaming · vertical", video:"https://youtube.com/shorts/E-VL-QoNDY4?feature=share", alt:"Gaming news short, vertical format" }
  ]

};
