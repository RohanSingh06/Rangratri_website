/*
===========================================================
RANGRATRI SPONSORSHIP PAGE
Phase B — Asset Optimization
Iteration: B2.4 — Sponsorship page asset presentation

Purpose:
- Use the centralized sponsor registry.
- Present sponsor logos on the Rangratri dark theme.
- Remove white sponsor cards.
- Keep logo sizing visually consistent.
- Avoid duplicating sponsor asset paths in the page.
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

import { sponsors } from "@/data/sponsors";
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
          HERO
          ================================================= */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="rr-container relative py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="rr-label">Partner With Rangratri</p>

            <h1 className="rr-display rr-gold-gradient mt-8
 text-5xl md:text-6xl lg:text-8xl">
              Put your brand
              <br />
              where celebration happens.
            </h1>

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

            <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl lg:text-6xl">
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

                  <p className="rr-label mt-7">{pillar.title}</p>

                  <h3 className="rr-editorial mt-8
 text-2xl text-[#fff5dd]">
                    {pillar.title}
                  </h3>

                  <p className="rr-body mt-8
 text-sm leading-7 text-[#eadfca]/60">
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
                <p className="rr-label">Sponsorship Opportunities</p>

                <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl">
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
            <p className="rr-label">Previous Partners</p>

            <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl">
              Brands that joined the celebration.
            </h2>
          </div>

          {/* =================================================
              NORMALIZED WEB LOGOS

              The actual asset paths come from data/sponsors.ts.
              This keeps the page independent from filenames.
              ================================================= */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex min-h-[120px] items-center justify-center border border-[rgba(214,165,45,0.15)] bg-[#12081d] px-6 py-6"
              >
                <div className="flex h-[64px] w-full items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={220}
                    height={100}
                    sizes="(max-width: 640px) 40vw, 180px"
                    className="h-auto max-h-[56px] w-auto max-w-[160px] object-contain"
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
          <p className="rr-label">Start the Conversation</p>

          <h2 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-8
 max-w-4xl text-4xl md:text-5xl lg:text-6xl">
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