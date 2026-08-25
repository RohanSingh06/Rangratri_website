/*
===========================================================
RANGRATRI MEDIA REGISTRY
Phase A — Code Correctness
Iteration: A2

Purpose:
- Keep public asset paths in one central registry.
- Prevent repeated hard-coded paths across components.
- Ensure every registered path matches the actual file name.
===========================================================
*/

export const media = {
  /*
  ---------------------------------------------------------
  BRAND ASSETS
  ---------------------------------------------------------
  These paths point to files inside:
  /public/assets/brand/
  ---------------------------------------------------------
  */

  brand: {
    logo: "/assets/brand/Rangratri_Events_logo.png",

    // NOTE:
    // The actual file is "Ranratri..." (without the second "g").
    hindiMark: "/assets/brand/Ranratri_hindi_seperate.png",

    eventsWordmark: "/assets/brand/events_seperate.png",

    eventWordArt:
      "/assets/brand/Navratri_Mahautsav_2026_word-art.png",
  },

  /*
  ---------------------------------------------------------
  EVENT ASSETS
  ---------------------------------------------------------
  These paths point to files inside:
  /public/assets/event/
  ---------------------------------------------------------
  */

  event: {
    background: "/assets/event/bg.png",

    // Actual file extension: .jpeg
    mainPoster: "/assets/event/green_girl.jpeg",

    // Actual file name + extension: launchingsoon_poster.jpeg
    launchingSoon:
      "/assets/event/launchingsoon_poster.jpeg",
  },
} as const;