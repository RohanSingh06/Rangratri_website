import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rangratri Events | Navratri Mahautsav 2026",
  description:
    "Rangratri Events presents Navratri Mahautsav 2026 in Katihar — a celebration of culture, music, Garba, Dandiya and unforgettable moments.",
};

import HeroSection from "@/components/hero/HeroSection";
import MemoriesPreview from "@/components/gallery/MemoriesPreview";
import EventPreview from "@/components/event/EventPreview";
import EventHighlights from "@/components/event/EventHighlights";
import SponsorshipPreview from "@/components/sponsorship/SponsorshipPreview";
import InstagramGateway from "@/components/social/InstagramGateway";
import FinalCTA from "@/components/ui/FinalCTA";

import { event } from "@/data/event";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =================================================
          HERO
          ================================================= */}
      <HeroSection />

      {/* =================================================
          EXPERIENCE
          ================================================= */}
      <section
        id="experience"
        className="rr-section rr-atmosphere bg-[#08030f]"
      >
        <div className="rr-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* =================================================
                INTRODUCTION

                Centered intentionally to establish a stronger
                visual axis for the section.
                ================================================= */}
            <div className="mx-auto w-full max-w-2xl text-center lg:col-span-2">
              <p className="rr-label">The Experience</p>

              <h2 className="rr-display rr-display-center rr-gold-gradient mt-8 text-4xl md:text-5xl lg:text-6xl">
                {event.experience.title}
              </h2>

              <div className="rr-divider mx-auto mt-8">
                <span className="rr-divider-dot" />
              </div>

              <p className="rr-editorial mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#eadfca]/75 md:text-2xl">
                A night built around movement, music, light and the people who
                make the celebration unforgettable.
              </p>
            </div>

            {/* =================================================
                EXPERIENCE FEATURES
                ================================================= */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {event.experience.features.map((feature) => (
                <article
                  key={feature.title}
                  className="rr-card rr-frame min-h-[180px]"
                >
                  <div className="rr-corner rr-corner-top-left" />
                  <div className="rr-corner rr-corner-bottom-right" />

                  <p className="rr-label">{feature.title}</p>

                  <p className="rr-body mt-8 max-w-sm text-sm leading-7 text-[#eadfca]/75 sm:text-base">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          2025 MEMORIES
          ================================================= */}
      <MemoriesPreview />

      {/* =================================================
          2026 EVENT
          ================================================= */}
      <EventPreview />

      {/* =================================================
          EVENT HIGHLIGHTS
          ================================================= */}
      <EventHighlights />

      {/* =================================================
          SPONSORSHIP
          ================================================= */}
      <SponsorshipPreview />

      {/* =================================================
          INSTAGRAM
          ================================================= */}
      <InstagramGateway />

      {/* =================================================
          FINAL CTA
          ================================================= */}
      <FinalCTA />
    </main>
  );
}