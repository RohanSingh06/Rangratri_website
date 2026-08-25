/*
===========================================================
RANGRATRI EVENT PREVIEW
Step 14 — SEO + Performance
Iteration: 14.7 — Event preview performance

Purpose:
- Present the 2026 event preview on the homepage.
- Preserve the full A4 poster composition.
- Allow the browser to lazy-load this below-the-fold image.
- Keep all event information sourced from central data files.
===========================================================
*/

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { event } from "@/data/event";
import { passes } from "@/data/passes";
import { media } from "@/data/media";

export default function EventPreview() {
  return (
    <section className="rr-section relative overflow-hidden bg-[#08030f]">
      <div className="rr-mandala left-[22%] top-[12%] opacity-20" />

      <div className="rr-container relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* =================================================
              A4 EVENT POSTER
              Exact A4 portrait ratio: 210 × 297.

              This section is below the hero, so the poster
              does not need priority loading.
              ================================================= */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="rr-frame overflow-hidden bg-[#0d0518]">
              <div className="rr-corner rr-corner-top-left" />
              <div className="rr-corner rr-corner-bottom-right" />

              <div className="relative aspect-[210/297] w-full">
                <Image
                  src={media.event.launchingSoon}
                  alt="Navratri Mahautsav 2026 — Launching Soon"
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-contain"
                />

                {/* Subtle cinematic bottom treatment */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08030f]/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* =================================================
              EVENT INFORMATION
              ================================================= */}
          <div>
            <p className="rr-label">Navratri Mahautsav 2026</p>

            <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl lg:text-6xl">
              One night.
              <br />
              One celebration.
            </h2>

            <div className="rr-divider mt-8 justify-start">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mt-8 max-w-xl text-xl leading-relaxed text-[#eadfca]/75 md:text-2xl">
              A celebration built around Garba, Dandiya, music, food and the
              people who make the night unforgettable.
            </p>

            {/* =================================================
                EVENT DETAILS
                ================================================= */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {/* Date */}
              <div className="rr-card rr-frame">
                <div className="rr-corner rr-corner-top-left" />

                <CalendarDays
                  size={20}
                  strokeWidth={1.6}
                  className="text-[#f4d47a]"
                />

                <p className="rr-label mt-6">Date</p>

                <p className="mt-3 font-editorial text-xl text-[#fff5dd]">
                  {event.date.full}
                </p>
              </div>

              {/* Venue */}
              <div className="rr-card rr-frame">
                <div className="rr-corner rr-corner-top-left" />

                <MapPin
                  size={20}
                  strokeWidth={1.6}
                  className="text-[#f4d47a]"
                />

                <p className="rr-label mt-6">Venue</p>

                <p className="mt-3 font-editorial text-xl leading-snug text-[#fff5dd]">
                  {event.venue.full}
                </p>
              </div>
            </div>

            {/* =================================================
                ENTRY PASSES
                ================================================= */}
            <div className="mt-8">
              <p className="rr-label">Entry Passes</p>

              <div className="mt-8
 flex flex-wrap gap-3">
                {passes.map((pass) => (
                  <span
                    key={pass.id}
                    className="border border-[rgba(214,165,45,0.28)] bg-[#190822]/55 px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#eadfca]/75"
                  >
                    {pass.name}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                CTA
                ================================================= */}
            <div className="mt-9">
              <Link
                href="/navratri-mahautsav-2026"
                className="rr-button rr-button-primary"
              >
                Explore the Event
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}