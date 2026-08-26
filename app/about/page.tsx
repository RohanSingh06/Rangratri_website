/*
===========================================================
RANGRATRI ABOUT PAGE
Step 8 — Homepage / Navigation completion
Iteration: UI — Center alignment + spacing refinement

Purpose:
- Provide the /about route.
- Keep major display headings on a consistent center axis.
- Improve vertical rhythm between labels, headings,
  dividers and supporting copy.
- Preserve the existing Rangratri visual language.
===========================================================
*/

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TeamSection from "@/components/team/TeamSection";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: `About ${brand.name} | Rangratri`,
  description:
    "Discover Rangratri Events and the celebration experience behind Rangratri.",
};

/*
-----------------------------------------------------------
INSTAGRAM ICON
-----------------------------------------------------------
Inline SVG keeps the implementation lightweight and avoids
depending on an unavailable lucide-react Instagram export.
-----------------------------------------------------------
*/

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#08030f]">
      {/* =================================================
          HERO
          ================================================= */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="rr-container relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="rr-label">About Rangratri</p>

            <h1 className="rr-display rr-display-center rr-gold-gradient mt-8 text-5xl md:text-6xl lg:text-8xl">
              More than
              <br />
              an event.
            </h1>

            <div className="rr-divider rr-display-center mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial rr-display-center mx-auto mt-12 w-full max-w-[760px] text-center text-xl leading-[1.2] text-[#eadfca]/75 md:mt-16 md:text-3xl">
              Rangratri Events is built around celebration, culture, music,
              movement and the moments that stay with us.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          BRAND
          ================================================= */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="rr-label">The Brand</p>

            <h2 className="rr-display rr-display-center rr-gold-gradient mt-8 text-4xl md:text-5xl lg:text-6xl">
              {brand.name}
            </h2>

            <div className="rr-divider rr-display-center mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial rr-display-center mx-auto mt-12 max-w-3xl text-xl leading-relaxed text-[#eadfca]/70 md:text-2xl">
              Rangratri is a celebration-first brand focused on creating
              memorable experiences where people come together.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          WHAT WE CREATE
          ================================================= */}
      <section className="rr-section bg-[#08030f]">
        <div className="rr-container">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rr-card rr-frame">
              <div className="rr-corner rr-corner-top-left" />
              <div className="rr-corner rr-corner-bottom-right" />

              <p className="rr-label">Culture</p>

              <h2 className="rr-editorial mt-8 text-3xl text-[#fff5dd]">
                Celebrate what brings us together.
              </h2>
            </article>

            <article className="rr-card rr-frame">
              <div className="rr-corner rr-corner-top-left" />
              <div className="rr-corner rr-corner-bottom-right" />

              <p className="rr-label">Experience</p>

              <h2 className="rr-editorial mt-8 text-3xl text-[#fff5dd]">
                Create nights people remember.
              </h2>
            </article>

            <article className="rr-card rr-frame">
              <div className="rr-corner rr-corner-top-left" />
              <div className="rr-corner rr-corner-bottom-right" />

              <p className="rr-label">Community</p>

              <h2 className="rr-editorial mt-8 text-3xl text-[#fff5dd]">
                Bring people into the moment.
              </h2>
            </article>
          </div>
        </div>
      </section>

      {/* =================================================
          TEAM
          ================================================= */}
      <TeamSection />

      {/* =================================================
          INSTAGRAM
          ================================================= */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Instagram icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[rgba(214,165,45,0.38)] bg-[#190822] text-[#f4d47a]">
              <InstagramIcon />
            </div>

            {/* Section label */}
            <p className="rr-label mt-14">Follow Rangratri</p>

            {/* Main heading */}
            <h2 className="rr-display rr-display-center rr-gold-gradient mt-7 max-w-3xl text-4xl md:text-5xl">
              Stay close to the celebration.
            </h2>

            {/* Supporting copy */}
            <p className="rr-editorial mx-auto mt-8 max-w-2xl text-center text-xl leading-[1.2] text-[#eadfca]/70 md:text-2xl">
              Follow{" "}
              <span className="text-[#f4d47a]">
                {brand.instagramHandle}
              </span>{" "}
              for the latest Rangratri moments.
            </p>

            {/* CTA */}
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rr-button rr-button-primary mt-10"
            >
              Visit Instagram
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          CTA
          ================================================= */}
      <section className="rr-section bg-[#08030f]">
        <div className="rr-container text-center">
          <p className="rr-label">Explore Rangratri</p>

          <h2 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-8 max-w-4xl text-4xl md:text-5xl lg:text-6xl">
            The next celebration
            <br />
            is waiting.
          </h2>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/navratri-mahautsav-2026"
              className="rr-button rr-button-primary"
            >
              Explore the Event
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/contact"
              className="rr-button rr-button-secondary"
            >
              Contact Rangratri
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}