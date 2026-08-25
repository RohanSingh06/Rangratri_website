/*
===========================================================
RANGRATRI ROOT LAYOUT
Step 14 — SEO + Performance
Iteration: 14.3 — Open Graph / Social Metadata

Purpose:
- Provide the global site shell.
- Load the approved typography system.
- Centralize global metadata through data/site.ts.
- Configure social sharing metadata.
- Keep Navbar and Footer consistent across all routes.

Note:
The current Launching Soon poster is portrait-oriented.
It is used provisionally for social metadata. A dedicated
1200 × 630 landscape social-preview asset can be added
later for optimal link previews.
===========================================================
*/

import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

import { site } from "@/data/site";

import "./globals.css";

/*
-----------------------------------------------------------
TYPOGRAPHY
-----------------------------------------------------------
These fonts are loaded once at the root level so every page
can use the shared Rangratri typography system.
-----------------------------------------------------------
*/

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/*
-----------------------------------------------------------
GLOBAL SEO + SOCIAL METADATA
-----------------------------------------------------------
Site title and description come from data/site.ts.

Open Graph and Twitter metadata are defined globally.
Individual pages can override title/description later.
-----------------------------------------------------------
*/

export const metadata: Metadata = {
  title: site.title,

  description: site.description,

  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: "Rangratri Events",

    images: [
      {
        url: "/assets/event/launchingsoon_poster.jpeg",
        alt: "Navratri Mahautsav 2026 — Rangratri Events",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [
      "/assets/event/launchingsoon_poster.jpeg",
    ],
  },
};

/*
-----------------------------------------------------------
ROOT LAYOUT
-----------------------------------------------------------
-----------------------------------------------------------
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          cinzel.variable,
          cinzelDecorative.variable,
          cormorant.variable,
          manrope.variable,
        ].join(" ")}
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
