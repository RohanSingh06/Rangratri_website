/*
===========================================================
RANGRATRI SPONSOR REGISTRY
Phase B — Asset Optimization
Iteration: B2.6 — Final normalized web assets

Purpose:
- Centralize sponsor metadata.
- Use the final optimized WebP assets.
- Keep the original master PNGs untouched.
- Ensure homepage and sponsorship page use the
  exact same sponsor assets.
===========================================================
*/

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  year: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "deluxe-bakery",
    name: "Deluxe Bakery",
    logo: "/assets/sponsors/Deluxe_Bakery_logo.webp",
    year: "2025",
  },

  {
    id: "pixus-films",
    name: "Pixus Films",

    // White version prepared for the dark Rangratri theme.
    logo: "/assets/sponsors/Pixus_Films_logo_white.webp",

    year: "2025",
  },

  {
    id: "smt",
    name: "SMT",
    logo: "/assets/sponsors/SMT_logo.webp",
    year: "2025",
  },

  {
    id: "vardhan-banquet",
    name: "Vardhan Banquet",

    // Gold version prepared for the dark Rangratri theme.
    logo: "/assets/sponsors/Vardhan_Banquet_logo.webp",

    year: "2025",
  },
];