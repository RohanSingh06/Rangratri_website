/*
===========================================================
RANGRATRI SITE CONFIGURATION
Phase A — Code Correctness
Iteration: A3

Purpose:
- Centralize website-level metadata.
- Define the single source for primary navigation.
- Keep route paths consistent with the actual Next.js
  app/ directory structure.
- Avoid invisible characters and stale route references.
===========================================================
*/

export const site = {
  /*
  ---------------------------------------------------------
  SEO / SITE METADATA
  ---------------------------------------------------------
  Used as the central site-level title and description.
  Page-specific metadata can be added later where needed.
  ---------------------------------------------------------
  */

  title: "Rangratri Events | Navratri Mahautsav 2026",

  description:
    "Rangratri Events presents Navratri Mahautsav 2026 in Katihar — a celebration of culture, music, Garba, Dandiya and unforgettable moments.",

  /*
  ---------------------------------------------------------
  PRIMARY LOCATION
  ---------------------------------------------------------
  ---------------------------------------------------------
  */

  location: "Katihar, Bihar",

  /*
  ---------------------------------------------------------
  PRIMARY NAVIGATION
  ---------------------------------------------------------
  IMPORTANT:
  Every href below must exactly match a real public route
  inside the Next.js app/ directory.

  Event route intentionally uses plain ASCII characters:
  /navratri-mahautsav-2026

  Do NOT insert invisible Unicode characters into URLs.
  ---------------------------------------------------------
  */

  navigation: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },

    {
      label: "Event",
      href: "/navratri-mahautsav-2026",
    },

    {
      label: "Memories",
      href: "/memories",
    },

    {
      label: "Sponsorship",
      href: "/sponsorship",
    },

    {
      label: "FAQ",
      href: "/faq",
    },

    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;