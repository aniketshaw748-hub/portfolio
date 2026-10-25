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
    "I'm Aniket, an AI filmmaker who builds films in code. I direct AI coding agents through every frame: hand-lettered type on springs, low-poly 3D and motion design, rendered straight from code.",
    "I still cut by hand too: music films, short-form edits and narrative work for creators and brands. That work starts with performance, pacing and rhythm.",
    "I also build small tools and automations for my own production workflow."
  ],
  bioMeta: "Based in Kolkata, IST / working in English and Hindi",
  experience: "3+ yrs editing · 2.6M+ peak views",  // credibility line + the About stats
  tagline: "Pick your poison.",                     // the hand-lettered greeting; its last word is red

  /* ── PICK YOUR POISON ─────────────────────────────────────────────────────
     The opening offers one door per style (the "category" of each film below):
     big doors for the films written in code, a smaller row for the work cut by
     hand. One line of description per style. Styles with no films are hidden. */
  poisons: {
    type:      "Hand-lettered words on springs that act out what they say.",
    animation: "Low-poly 3D films and previs, staged, lit and cut in code.",
    studies:   "Frame-by-frame studies of reels I admire, rebuilt in code and credited.",
    ai:        "Music videos and shorts where every frame is generated and every cut is human.",
    shorts:    "Fast-cut news shorts with animated captions, built for the scroll.",
    motion:    "After Effects motion-graphics loops.",
    narrative: "Story-led edits, long and short, mixing real footage, motion and AI b-roll."
  },

  /* ── TOOLS (grouped) ──────────────────────────────────────────────────────
     Each "GROUP NAME": [ list of tools ]. Add/remove groups or tools freely. */
  tools: {
    "AI STACK":      ["Seedance", "Kling", "Veo", "Higgsfield", "Google Flow", "Nano Banana", "GPT Image", "ElevenLabs", "Suno", "Topaz"],
    "EDIT / MOTION": ["Premiere Pro", "After Effects"],
    "CODE":          ["Claude Code", "HyperFrames", "Canvas 2D", "three.js", "Blender by script"]
  },

  /* ── WORK / VIDEOS ────────────────────────────────────────────────────────
     One { ... } per film. Each film appears behind its style's door, in array
     order; the first film of a style is that door's poster.
     To ADD a film: copy a line, change the values.
        category    : written in code: "type" | "animation" | "studies"
                      cut by hand:     "ai" | "shorts" | "motion" | "narrative"
        orientation : "landscape" (16:9), "portrait" (9:16) or "square" (1:1)
        poster      : image filename inside assets/posters/  (without ".webp")
        title       : shown with the film
        foot        : short descriptor shown under the title
        video       : a YouTube / Vimeo URL, or an .mp4 in assets/films/ ("" = "coming soon")
        alt         : description for accessibility
        process     : optional note about how the work was made
        audio       : false for a film with no sound (hides "Play with sound")
        credit      : the artist whose style a film follows; shown as "Inspired by <credit>'s style"
        creditUrl   : a link to that artist
     Door counts update automatically.                                          */
  works: [
    { category:"type", orientation:"landscape", poster:"sit-still", credit:"Rossigan", creditUrl:"https://www.instagram.com/rossigan_art/", title:"Sit Still", foot:"kinetic type · two voices · 0:40", video:"assets/films/sit-still.mp4", alt:"Hand-lettered red and blue words bouncing on a black ground", process:"A writer tells the words to sit still and do their one job. The words won't, and each one acts out its meaning. Every letter is a hand-drawn stroke on its own spring, written in code, with two AI voices." },
    { category:"type", orientation:"landscape", poster:"second-brain", title:"Second Brain", foot:"motion design · voiceover · 0:31", video:"assets/films/second-brain.mp4", alt:"Ink type on warm paper reading: I don't take notes. My laptop does.", process:"I don't take notes. My laptop does. A 31-second spot about the system that files my whole day into a wiki every night, built as one continuous world where every beat is a match cut, written in code." },
    { category:"type", orientation:"landscape", poster:"dessa-03", credit:"Rossigan", creditUrl:"https://www.instagram.com/rossigan_art/", title:"Dessa 03", foot:"kinetic type · voice call · 1:55", video:"assets/films/dessa-03.mp4", alt:"Hand-lettered words of a call between a couple, in red and blue on black", process:"A recorded call between a couple, set word by word in hand-drawn type. The words act like characters: each speaker's last word stays on as their body, jumps back at big news and ducks a pointed “you”, timed to the voice." },
    { category:"type", orientation:"landscape", poster:"dessa-01", credit:"Rossigan", creditUrl:"https://www.instagram.com/rossigan_art/", title:"Dessa 01", foot:"kinetic type · voice call · 2:56", video:"assets/films/dessa-01.mp4", alt:"Hand-lettered red and blue words of a phone call trading places on black", process:"A three-minute call set word by word in hand-drawn type. Lines grow out of the speaker's last word, flinch when they're interrupted, lean in on every “you” and get knocked back by a hard word, all timed to the voice." },
    { category:"type", orientation:"landscape", poster:"two-voices", credit:"Rossigan", creditUrl:"https://www.instagram.com/rossigan_art/", audio:false, title:"Two Voices", foot:"kinetic type · silent · 0:22", video:"assets/films/two-voices.mp4", alt:"Two hand-lettered voices in red and blue trading words on black", process:"A silent conversation between two lettered voices, in my own words." },
    { category:"type", orientation:"landscape", poster:"claude-showreel", title:"Claude Showreel", foot:"code motion design · 0:15", video:"assets/films/claude-showreel.mp4", alt:"A motion-design showreel card titled Claude, Motion Designer", process:"Fifteen seconds of kinetic type, shape morphs, 3D depth and data in motion, every frame written in code." },

    { category:"animation", orientation:"landscape", poster:"halfway-to-paris", title:"Halfway to Paris", foot:"low-poly 3D · 2:00", video:"assets/films/halfway-to-paris.mp4", alt:"A low-poly 3D bedroom at night, lit by fairy lights", process:"A long-distance couple on a call, and a Paris trip she doesn't see coming. Low-poly 3D, staged, lit and cut in code." },
    { category:"animation", orientation:"landscape", poster:"crossing", audio:false, title:"Crossing", foot:"Blender previs · 0:26", video:"assets/films/crossing.mp4", alt:"A low-poly 3D city crossing", process:"A 3D previs, staged, lit and animated in Blender by script." },

    { category:"studies", orientation:"square", poster:"study-one-circle", credit:"oxime.fx", creditUrl:"https://www.instagram.com/oxime.fx/", audio:false, title:"One Circle", foot:"original film · silent · 0:42", video:"assets/films/study-one-circle.mp4", alt:"A red circle on paper, handed from shot to shot", process:"An original film built on the cut points of an oxime.fx reel: one circle handed on through match cuts, a pictogram per line, drawn on twos with print grain. Shown silent." },
    { category:"studies", orientation:"square", poster:"study-yellow-daisy", credit:"oxime.fx", creditUrl:"https://www.instagram.com/oxime.fx/", audio:false, title:"Yellow Paper Daisy", foot:"study after oxime.fx · silent · 0:21", video:"assets/films/study-yellow-daisy.mp4", alt:"Paper-cut letters and a daisy in purple and yellow", process:"A shot-for-shot study of a reel by oxime.fx, every frame rebuilt from scratch in code with SVG, canvas and three.js. The original design is oxime.fx's. Shown silent." },
    { category:"studies", orientation:"landscape", poster:"study-daisy", credit:"oxime.fx", creditUrl:"https://www.instagram.com/oxime.fx/", audio:false, title:"Daisy", foot:"study after oxime.fx · silent · 0:21", video:"assets/films/study-daisy.mp4", alt:"A white daisy on a blue ground", process:"A study of oxime.fx's reel “Daisy”: its timing, framing and match cuts, with every frame and illustration drawn from scratch in code. Shown silent." },
    { category:"studies", orientation:"square", poster:"study-techniques", credit:"oxime.fx", creditUrl:"https://www.instagram.com/oxime.fx/", audio:false, title:"Technique Study", foot:"eight finishes · silent · 0:34", video:"assets/films/study-techniques.mp4", alt:"A paper house and simple shapes under halftone light", process:"Eight of oxime.fx's finishes rebuilt on neutral subjects: print grain, dry-brush edges, mosaic reveal, draining fill, glitch type morph, scribble knot, boiling lines and halftone light." },

    { category:"ai", orientation:"landscape", poster:"anotherone", title:"Cinematic musical montage", foot:"hero film · musical love story · 02:22", video:"https://www.youtube.com/watch?v=3yY6CAn7Qeo", alt:"Cinematic musical montage, a Telugu musical love story", process:"A cinematic musical love story shaped as a complete film, from visual direction through edit and final finish." },
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
