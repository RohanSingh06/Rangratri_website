/*
===========================================================
RANGRATRI SPONSORSHIP PAGE
Phase B — Asset Optimization
Iteration: B2.6 — 2026 Sponsor Showcase First

Purpose:
- Show current 2026 sponsors first.
- Present 2026 sponsors by partnership category.
- Keep Title Sponsor visually prominent.
- Follow with partnership information.
- Keep current 2026 sponsors separate from Previous Partners.
- Use the Rangratri dark premium theme.
- Keep sponsor asset paths centralized in data/sponsors.ts.
===========================================================
*/

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship | Rangratri Events",
  description:
    "Partner with Rangratri Events and connect your brand with the celebration, culture and community of Katihar.",
};

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  Users,
  Sparkles,
} from "lucide-react";

import { sponsors, sponsors2026 } from "@/data/sponsors";
import { event } from "@/data/event";

const partnershipPillars = [
  {
    icon: Users,
    title: "Audience",
    description:
      "Connect your brand with people coming together for one of Katihar's festive celebrations.",
  },
  {
    icon: Sparkles,
    title: "Visibility",
    description:
      "Create meaningful brand presence across the celebration and its surrounding communication.",
  },
  {
    icon: Handshake,
    title: "Association",
    description:
      "Partner with an event built around culture, community and shared experiences.",
  },
];

export default function SponsorshipPage() {
  return (
    <main className="overflow-hidden bg-[#08030f]">

      {/* =================================================
          2026 SPONSORS & PARTNERS
          ================================================= */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">

          {/* Section Header */}
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <p className="rr-label">2026 Sponsors & Partners</p>

            <h1
              className="rr-display rr-gold-gradient mt-8 w-full text-center
              text-4xl md:text-5xl lg:text-6xl"
            >
              The brands behind the celebration.
            </h1>

            <div className="rr-divider mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p
              className="rr-editorial mx-auto mt-8 w-full max-w-4xl !text-center
              text-lg leading-relaxed text-[#eadfca]/70"
            >
              Meet the brands joining Rangratri Mahautsav 2026 and supporting
              the celebration of culture, community and unforgettable
              experiences.
            </p>
          </div>

          {/* =================================================
              TITLE SPONSOR
              ================================================= */}
          <div className="mt-16">
            <div className="text-center">
              <p className="rr-label">Title Sponsor</p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              {sponsors2026.titleSponsor.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="rr-frame relative flex min-h-[250px]
                  items-center justify-center bg-[#12081d]
                  px-8 py-8 md:px-12 md:py-10"
                >
                  <div className="rr-corner rr-corner-top-left" />
                  <div className="rr-corner rr-corner-bottom-right" />

                  <div className="relative h-[250px] w-full max-w-[560px]">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 560px"
                      quality={100}
                      unoptimized
                      className="object-contain p-3 md:p-5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              POWERED BY
              ================================================= */}
          <div className="mt-16">
            <div className="text-center">
              <p className="rr-label">Powered By</p>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              {sponsors2026.poweredBy.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="rr-frame relative flex min-h-[215px]
                  items-center justify-center bg-[#12081d]
                  px-8 py-8 md:px-12"
                >
                  <div className="rr-corner rr-corner-top-left" />
                  <div className="rr-corner rr-corner-bottom-right" />

                  <div className="relative h-[175px] w-full max-w-[520px]">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 520px"
                      quality={100}
                      unoptimized
                      className="object-contain p-3 md:p-5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              SILVER SPONSORS
              ================================================= */}
          <div className="mt-16">
            <div className="text-center">
              <p className="rr-label">Silver Sponsors</p>
            </div>

            <div
              className="mx-auto mt-8 grid max-w-5xl
              grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {sponsors2026.silverSponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="rr-frame relative flex min-h-[175px]
                  items-center justify-center bg-[#12081d]
                  px-5 py-6"
                >
                  <div className="rr-corner rr-corner-top-left" />
                  <div className="rr-corner rr-corner-bottom-right" />

                  <div className="relative h-[150px] w-full">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 300px"
                      quality={100}
                      unoptimized
                      className="object-contain p-3 md:p-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              PARTNERS
              ================================================= */}
          <div className="mt-16">
            <div className="text-center">
              <p className="rr-label">Our Partners</p>
            </div>

            <div
              className="mx-auto mt-8 grid max-w-6xl
              grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
            >
              {sponsors2026.partners.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="rr-frame relative flex min-h-[165px]
                  items-center justify-center bg-[#12081d]
                  px-4 py-6"
                >
                  <div className="rr-corner rr-corner-top-left" />
                  <div className="rr-corner rr-corner-bottom-right" />

                  <div className="relative h-[150px] w-full">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 210px"
                      quality={100}
                      unoptimized
                      className="object-contain p-2 md:p-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =================================================
          HERO / PARTNER WITH RANGRATRI
          ================================================= */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="rr-container relative py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="rr-label">Partner With Rangratri</p>

            <h2
              className="rr-display rr-gold-gradient mt-8
              text-5xl md:text-6xl lg:text-8xl"
            >
              Put your brand
              <br />
              where celebration happens.
            </h2>

            <div className="rr-divider mt-9 justify-start">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mt-8 max-w-3xl text-xl leading-relaxed text-[#eadfca]/75 md:text-3xl">
              Join {event.name} as a partner and become part of a celebration
              built around culture, music, movement and community.
            </p>

            <Link
              href="/contact"
              className="rr-button rr-button-primary mt-9"
            >
              Become a Partner
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
          WHY PARTNER
          ================================================= */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">

          <div className="mx-auto max-w-3xl text-center">
            <p className="rr-label">Why Rangratri</p>

            <h2
              className="rr-display rr-gold-gradient mt-8
              text-4xl md:text-5xl lg:text-6xl"
            >
              More than visibility.
            </h2>

            <div className="rr-divider mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mt-8 text-xl leading-relaxed text-[#eadfca]/70 md:text-2xl">
              A strong partnership is about being part of an experience people
              remember.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {partnershipPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rr-card rr-frame min-h-[240px]"
                >
                  <div className="rr-corner rr-corner-top-left" />
                  <div className="rr-corner rr-corner-bottom-right" />

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#f4d47a]"
                  />

                  <p className="rr-label mt-7">
                    {pillar.title}
                  </p>

                  <h3
                    className="rr-editorial mt-8
                    text-2xl text-[#fff5dd]"
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="rr-body mt-8
                    text-sm leading-7 text-[#eadfca]/60"
                  >
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =================================================
          SPONSORSHIP OPPORTUNITIES
          ================================================= */}
      <section className="rr-section bg-[#08030f]">
        <div className="rr-container">

          <div className="rr-surface rr-frame mx-auto max-w-5xl p-8 md:p-12">
            <div className="rr-corner rr-corner-top-left" />
            <div className="rr-corner rr-corner-bottom-right" />

            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">

              <div>
                <p className="rr-label">
                  Sponsorship Opportunities
                </p>

                <h2
                  className="rr-display rr-gold-gradient mt-8
                  text-4xl md:text-5xl"
                >
                  Let's build the partnership around your brand.
                </h2>

                <p className="rr-body mt-6 max-w-2xl text-sm leading-7 text-[#eadfca]/60 md:text-base">
                  Sponsorship opportunities are available across different
                  partnership needs and brand objectives. Reach out to the
                  Rangratri team to discuss the right opportunity for your
                  brand.
                </p>
              </div>

              <Link
                href="/contact"
                className="rr-button rr-button-primary w-full md:w-auto"
              >
                Talk to Us
                <ArrowUpRight size={15} />
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* =================================================
          PREVIOUS PARTNERS
          ================================================= */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">

          <div className="mx-auto max-w-4xl text-center">
            <p className="rr-label">
              Previous Partners
            </p>

            <h2
              className="rr-display rr-gold-gradient mt-8
              text-4xl md:text-5xl"
            >
              Brands that joined the celebration.
            </h2>
          </div>

          {/* =================================================
              NORMALIZED WEB LOGOS

              Existing historical sponsor registry.
              Kept completely separate from 2026 sponsors.
              ================================================= */}
          <div
            className="mx-auto mt-12 grid max-w-5xl
            grid-cols-2 gap-4 md:grid-cols-4"
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex min-h-[125px] items-center
                justify-center border border-[rgba(214,165,45,0.15)]
                bg-[#12081d] px-5 py-5"
              >
                <div className="relative h-[78px] w-full">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    sizes="(max-width: 640px) 42vw, 210px"
                    quality={100}
                    unoptimized
                    className="object-contain p-2 md:p-3"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================================
          FINAL CTA
          ================================================= */}
      <section className="rr-section bg-[#08030f]">
        <div className="rr-container rr-display-center text-center">

          <p className="rr-label">
            Start the Conversation
          </p>

          <h2
            className="rr-display rr-display-center rr-gold-gradient
            mx-auto mt-8 max-w-4xl text-4xl md:text-5xl lg:text-6xl"
          >
            Let's make your brand
            <br />
            part of the night.
          </h2>

          <Link
            href="/contact"
            className="rr-button rr-button-primary mt-9"
          >
            Contact Rangratri
            <ArrowUpRight size={15} />
          </Link>

        </div>
      </section>

    </main>
  );
}