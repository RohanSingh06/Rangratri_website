/*
===========================================================
RANGRATRI EVENT PAGE
Step 14 — SEO + Performance
Iteration: 14.6 — Event structured data

Purpose:
- Detailed Navratri Mahautsav 2026 event page.
- All event facts come from centralized data.
- Final CTA uses a true centered flex composition.
- Adds basic Schema.org Event structured data.
===========================================================
*/

import type { Metadata } from "next";
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

/*
-----------------------------------------------------------
PAGE SEO METADATA
-----------------------------------------------------------
*/

export const metadata: Metadata = {
  title: "Navratri Mahautsav 2026 | Rangratri Events",
  description:
    "Discover Navratri Mahautsav 2026 by Rangratri Events — Garba, Dandiya, music, food and celebration at Vardhan Banquet Hall, Gami Tola, Katihar.",
};

/*
-----------------------------------------------------------
EVENT STRUCTURED DATA
-----------------------------------------------------------

This schema only uses information already present in
data/event.ts.

We intentionally do NOT add:
- ticket prices
- exact event times
- street address
- ticket URLs
- performer names

because those details are not currently defined in the
event data.
-----------------------------------------------------------
*/

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",

  name: event.name,

  description: event.tagline,

  startDate: "2026-10-20",

  eventStatus: "https://schema.org/EventScheduled",

  eventAttendanceMode:
    "https://schema.org/OfflineEventAttendanceMode",

  location: {
    "@type": "Place",

    name: event.venue.name,

    address: {
      "@type": "PostalAddress",
      addressLocality: event.venue.city,
      addressRegion: event.venue.state,
      addressCountry: "IN",
    },
  },

  organizer: {
    "@type": "Organization",
    name: "Rangratri Events",
  },
};

/*
-----------------------------------------------------------
EVENT PAGE
-----------------------------------------------------------
*/

export default function EventPage() {
  return (
    <main className="overflow-hidden bg-[#08030f]">
      {/* =================================================
          EVENT STRUCTURED DATA
          ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />

      {/* =================================================
          HERO
          ================================================= */}

      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="absolute inset-0 -z-20">
          <Image
            src={media.event.background}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#08030f]/55" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(109,27,104,0.2),transparent_45%)]" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08030f]/40 to-[#08030f]" />
        </div>

        <div className="rr-container relative flex min-h-[58vh] items-center justify-center py-20 text-center sm:min-h-[65vh] lg:min-h-[70vh]">
          <div className="w-full max-w-5xl">
            <p className="rr-label">Navratri Mahautsav 2026</p>

            <div className="relative mx-auto mt-8 max-w-4xl">
              <Image
                src={media.brand.eventWordArt}
                alt={event.name}
                width={1200}
                height={500}
                priority
                className="mx-auto w-full object-contain"
              />
            </div>

            <p className="rr-editorial rr-display-center mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#fff5dd]/80 md:text-3xl">
              {event.tagline}
            </p>

            <div className="rr-divider mx-auto mt-9">
              <span className="rr-divider-dot" />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 font-sans text-sm text-[#eadfca]/75 sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-[#f4d47a]"
                />

                {event.date.full}
              </span>

              <span className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-[#f4d47a]"
                />

                {event.venue.full}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          INTRODUCTION
          ================================================= */}

      <section className="rr-section bg-[#08030f]">
        <div className="rr-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="rr-label">The Celebration</p>

            <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl lg:text-6xl">
              A night made for movement.
            </h2>

            <div className="rr-divider mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mt-8 text-xl leading-relaxed text-[#eadfca]/75 md:text-2xl">
              Garba, Dandiya, music, food, light and shared moments come
              together for one unforgettable Navratri celebration.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          EXPERIENCE FEATURES
          ================================================= */}

      <section className="rr-section rr-atmosphere bg-[#10061c]">
        <div className="rr-container">
          <div className="mb-12 max-w-3xl">
            <p className="rr-label">The Experience</p>

            <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl lg:text-6xl">
              Designed for the night.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {event.experience.features.map((feature, index) => (
              <article
                key={feature.title}
                className={`rr-card rr-frame ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="rr-corner rr-corner-top-left" />
                <div className="rr-corner rr-corner-bottom-right" />

                <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#d6a52d]/60">
                  0{index + 1}
                </p>

                <p className="rr-label mt-6">
                  {feature.title}
                </p>

                <p className="rr-editorial mt-6 max-w-xl text-2xl leading-relaxed text-[#fff5dd]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          DATE + VENUE
          ================================================= */}

      <section className="rr-section bg-[#08030f]">
        <div className="rr-container">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Date */}
            <div className="rr-card rr-frame">
              <div className="rr-corner rr-corner-top-left" />

              <CalendarDays
                size={24}
                strokeWidth={1.5}
                className="text-[#f4d47a]"
              />

              <p className="rr-label mt-7">Date</p>

              <h3 className="rr-editorial mt-3 text-3xl text-[#fff5dd]">
                {event.date.full}
              </h3>
            </div>

            {/* Venue */}
            <div className="rr-card rr-frame">
              <div className="rr-corner rr-corner-top-left" />

              <MapPin
                size={24}
                strokeWidth={1.5}
                className="text-[#f4d47a]"
              />

              <p className="rr-label mt-7">Venue</p>

              <h3 className="rr-editorial mt-3 text-3xl leading-snug text-[#fff5dd]">
                {event.venue.full}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          ENTRY PASSES
          ================================================= */}

      <section className="rr-section rr-atmosphere bg-[#10061c]">
        <div className="rr-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="rr-label">Entry Passes</p>

            <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl">
              Choose your way in.
            </h2>

            <div className="rr-divider mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-body mt-7 text-sm leading-7 text-[#eadfca]/60">
              Ticket sales will be announced soon.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {passes.map((pass) => (
              <article
                key={pass.id}
                className="rr-card rr-frame flex min-h-[250px] flex-col"
              >
                <div className="rr-corner rr-corner-top-left" />
                <div className="rr-corner rr-corner-bottom-right" />

                <p className="rr-label">
                  {pass.name}
                </p>

                <h3 className="rr-editorial mt-6 text-3xl text-[#fff5dd]">
                  {pass.name} Pass
                </h3>

                <p className="rr-body mt-8
 text-sm leading-7 text-[#eadfca]/65">
                  {pass.description}
                </p>

                <div className="mt-auto pt-8">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#d6a52d]/70">
                    Pricing will be announced soon
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="rr-button rr-button-secondary pointer-events-none opacity-80">
              Ticket Sales Launching Soon
            </span>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
          A3.1 — TRUE CENTER ALIGNMENT
          ================================================= */}

      <section className="rr-section bg-[#08030f]">
        <div className="rr-container">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <p className="rr-label">See You There</p>

            {/*
              Each line is a width-sized flex item.
              The parent centers all three items on the
              exact same vertical axis.
            */}

            <div className="mt-8
 flex w-full flex-col items-center">
              <span className="rr-display rr-gold-gradient w-fit text-center text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
                Come Dance.
              </span>

              <span className="rr-display rr-gold-gradient w-fit text-center text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
                Celebrate.
              </span>

              <span className="rr-display rr-gold-gradient w-fit text-center text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
                Create Memories.
              </span>
            </div>

            <Link
              href="/"
              className="rr-button rr-button-primary mt-10"
            >
              Back to Rangratri
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}