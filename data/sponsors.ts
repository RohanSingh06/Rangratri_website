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


export const sponsors2026 = {
  titleSponsor: [
    {
      id: "sponsor-2026-jain-saree-house",
      name: "Jain Saree House",
      type: "Title Sponsor",
      logo: "/assets/sponsors-2026/jain-saree-house.png",
    },
  ],

  poweredBy: [
    {
      id: "sponsor-2026-avm-public-school",
      name: "AVM Public School",
      type: "Powered By Sponsor",
      logo: "/assets/sponsors-2026/avm-public-school.png",
    },
  ],

  silverSponsors: [
    {
      id: "sponsor-2026-gaadi-wala",
      name: "Gaadi Wala",
      type: "Silver Sponsor",
      logo: "/assets/sponsors-2026/gaadi-wala.png",
    },
    {
      id: "sponsor-2026-namaste-bharat",
      name: "Namaste Bharat Hotels & Banquet",
      type: "Silver Sponsor",
      logo: "/assets/sponsors-2026/namaste-bharat.png",
    },
    {
      id: "sponsor-2026-ganesh-trading",
      name: "Ganesh Trading & Co.",
      type: "Silver Sponsor",
      logo: "/assets/sponsors-2026/ganesh-trading.png",
    },
  ],

  partners: [
    {
      id: "sponsor-2026-vardhan-banquet",
      name: "Vardhan Banquet",
      type: "Venue Partner",
      logo: "/assets/sponsors-2026/vardhan-banquet.png",
    },
    {
      id: "sponsor-2026-smt-foods",
      name: "SMT Foods",
      type: "Snacks Partner",
      logo: "/assets/sponsors-2026/smt-foods.png",
    },
    {
      id: "sponsor-2026-pixus-films",
      name: "Pixus Films",
      type: "Media Partner",
      logo: "\assets\sponsors-2026\pixus-films.png",
    },
    {
      id: "sponsor-2026-diginesta",
      name: "DigiNesta",
      type: "Tech & Digital Solution Partner",
      logo: "/assets/sponsors-2026/diginesta.png",
    },
    {
      id: "sponsor-2026-benzene-classes",
      name: "Benzene Classes",
      type: "Education Partner",
      logo: "/assets/sponsors-2026/benzene-classes.png",
    },
  ],
};