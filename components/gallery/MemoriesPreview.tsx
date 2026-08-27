/*
===========================================================
RANGRATRI MEMORIES PREVIEW
Step 14 — SEO + Performance
Iteration: 14.7 — Memories preview performance

Purpose:
- Show a curated preview of Rangratri 2025 memories.
- Keep gallery images lazy-loaded below the hero.
- Give Next/Image accurate responsive size hints.
- Keep the existing visual layout unchanged.
===========================================================
*/

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { gallery, type GalleryCategory } from "@/data/gallery";

/*
-----------------------------------------------------------
CURATED PREVIEW ORDER
-----------------------------------------------------------
Only one image from each selected category is shown on the
homepage. The full gallery remains available at /memories.
-----------------------------------------------------------
*/

const categoryPriority: GalleryCategory[] = [
  "Crowd",
  "Garba",
  "Dandiya",
  "DJ / Music",
  "People",
  "Stage",
];

const featuredMemories = categoryPriority
  .map((category) =>
    gallery.find((item) => item.category === category),
  )
  .filter(
    (item): item is (typeof gallery)[number] =>
      Boolean(item),
  );

export default function MemoriesPreview() {
  return (
    <section className="rr-section relative overflow-hidden bg-[#10061c]">
      <div className="rr-mandala -right-[18%] top-[8%] opacity-25" />

      <div className="rr-container relative">
        {/* =================================================
            SECTION HEADING
            ================================================= */}
        <div className="max-w-3xl">
          <p className="rr-label">2025 Memories</p>

          <h2 className="rr-display rr-gold-gradient mt-8
 text-4xl md:text-5xl lg:text-6xl">
            The night that started it all.
          </h2>

          <div className="rr-divider mt-8 justify-start">
            <span className="rr-divider-dot" />
          </div>

          <p className="rr-editorial mt-8 max-w-2xl text-xl leading-relaxed text-[#eadfca]/75 md:text-2xl">
            A glimpse into the music, movement, people and moments that made
            Rangratri 2025 unforgettable.
          </p>
        </div>

        {/* =================================================
            GALLERY PREVIEW

            These images are intentionally NOT priority-loaded.
            They appear below the hero and should be requested
            as the visitor approaches this section.
            ================================================= */}
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {featuredMemories.map((item, index) => {
            const featuredLarge =
              index === 0 || index === 3;

            return (
              <Link
                key={item.id}
                href="/memories"
                className={`group relative overflow-hidden border border-[rgba(214,165,45,0.18)] bg-[#0d0518] ${
                  featuredLarge
                    ? "md:col-span-7 md:row-span-2"
                    : "md:col-span-5"
                }`}
              >
                <div
                  className={`relative ${
                    featuredLarge
                      ? "aspect-[4/5] md:aspect-auto md:h-full"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={`${item.category} — Rangratri 2025`}
                    fill
                    sizes={
                      featuredLarge
                        ? "(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 680px"
                        : "(max-width: 767px) 100vw, (max-width: 1279px) 42vw, 500px"
                    }
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08030f]/75 via-transparent to-transparent" />

                  {/* Gold hover edge */}
                  <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[rgba(228,184,74,0.5)]" />

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="rr-label text-[9px]">
                      {item.category}
                    </p>

                    <p className="mt-2 font-editorial text-xl text-[#fff5dd] md:text-2xl">
                      Rangratri 2025
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =================================================
            CTA
            ================================================= */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/memories"
            className="rr-button rr-button-secondary"
          >
            Explore All Memories
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}