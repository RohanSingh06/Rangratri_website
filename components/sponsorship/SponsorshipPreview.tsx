/*
===========================================================
RANGRATRI SPONSORSHIP PREVIEW
Step 14 — SEO + Performance
Iteration: 14.7 — Sponsorship preview performance

Purpose:
- Use the centralized sponsor registry.
- Load optimized WebP sponsor assets.
- Keep sponsor images lazy-loaded.
- Provide accurate responsive image sizes.
- Preserve the existing Rangratri visual design.
===========================================================
*/

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { sponsors } from "@/data/sponsors";

export default function SponsorshipPreview() {
  return (
    <section className="rr-section relative overflow-hidden bg-[#10061c]">
      <div className="rr-atmosphere absolute inset-0 -z-0 opacity-60" />

      <div className="rr-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* =================================================
              MAIN MESSAGE
              ================================================= */}
          <div>
            <p className="rr-label">Partner With Rangratri</p>

            <h2 className="rr-display rr-gold-gradient mt-8
 max-w-2xl text-4xl md:text-5xl lg:text-6xl">
              Put your brand where celebration happens.
            </h2>

            <div className="rr-divider mt-8 justify-start">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mt-8 max-w-xl text-xl leading-relaxed text-[#eadfca]/75 md:text-2xl">
              Join Rangratri in creating a memorable celebration for Katihar
              while connecting your brand with the people who make the night
              matter.
            </p>

            <Link
              href="/sponsorship"
              className="rr-button rr-button-primary mt-9"
            >
              Explore Sponsorship
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* =================================================
              PREVIOUS PARTNERS
              ================================================= */}
          <div className="rr-card rr-frame rr-surface-glow">
            <div className="rr-corner rr-corner-top-left" />
            <div className="rr-corner rr-corner-bottom-right" />

            <p className="rr-label">Previous Partners</p>

            <p className="rr-editorial mt-8
 text-2xl text-[#fff5dd]">
              Brands that have been part of the celebration.
            </p>

            {/* =================================================
                SPONSOR LOGOS

                The paths come from data/sponsors.ts.
                No hard-coded asset references are used here.
                ================================================= */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="flex min-h-[96px] items-center justify-center border border-[rgba(214,165,45,0.14)] bg-[#12081d] px-6 py-5"
                >
                  <div className="flex h-[56px] w-full items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={180}
                      height={80}
                      sizes="(max-width: 640px) 38vw, (max-width: 1024px) 160px, 180px"
                      className="h-auto max-h-[50px] w-auto max-w-[160px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-sans text-xs leading-6 text-[#eadfca]/45">
              Interested in partnering with Rangratri Events? Explore the
              available sponsorship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}