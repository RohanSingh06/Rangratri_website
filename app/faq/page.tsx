/*
===========================================================
RANGRATRI FAQ PAGE
Step 14 — SEO + Performance
Iteration: 14.2 — Server metadata wrapper
===========================================================
*/

import type { Metadata } from "next";

import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Rangratri Events",
  description:
    "Find answers to common questions about Navratri Mahautsav 2026, entry passes, venue, contact and Rangratri Events.",
};

export default function FAQPage() {
  return <FAQClient />;
}