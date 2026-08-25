/*
===========================================================
RANGRATRI MEMORIES PAGE
Step 14 — SEO + Performance
Iteration: 14.2 — Server metadata wrapper

Purpose:
- Keep SEO metadata on the server.
- Keep gallery filtering/lightbox interaction in the
  separate client component.
===========================================================
*/

import type { Metadata } from "next";

import MemoriesClient from "./MemoriesClient";

export const metadata: Metadata = {
  title: "Rangratri 2025 Memories | Rangratri Events",
  description:
    "Explore real event photography from Rangratri 2025 — Garba, Dandiya, music, people and unforgettable moments from Katihar.",
};

export default function MemoriesPage() {
  return <MemoriesClient />;
}