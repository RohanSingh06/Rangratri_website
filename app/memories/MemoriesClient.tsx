"use client";

/*
===========================================================
RANGRATRI MEMORIES CLIENT
Step 14 — SEO + Performance
Iteration: 14.2 — Client component

Purpose:
- Handle interactive gallery filtering.
- Handle gallery lightbox state.
- Keep all client-side logic away from page metadata.
===========================================================
*/

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { gallery, type GalleryCategory } from "@/data/gallery";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

const categories: Array<"All" | GalleryCategory> = [
  "All",
  "Crowd",
  "Dandiya",
  "DJ / Music",
  "Family",
  "Garba",
  "People",
  "Stage",
  "Team",
  "Venue",
];

export default function MemoriesClient() {
  const [activeCategory, setActiveCategory] =
    useState<"All" | GalleryCategory>("All");

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") {
      return gallery;
    }

    return gallery.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory]);

  const selectedImage =
    selectedIndex !== null
      ? filteredGallery[selectedIndex]
      : null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (
      selectedIndex === null ||
      filteredGallery.length === 0
    ) {
      return;
    }

    setSelectedIndex(
      (selectedIndex + 1) % filteredGallery.length,
    );
  };

  const previousImage = () => {
    if (
      selectedIndex === null ||
      filteredGallery.length === 0
    ) {
      return;
    }

    setSelectedIndex(
      (selectedIndex - 1 + filteredGallery.length) %
        filteredGallery.length,
    );
  };

  const handleCategoryChange = (
    category: "All" | GalleryCategory,
  ) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  return (
    <main className="overflow-hidden bg-[#08030f]">
      {/* =================================================
          HERO
          ================================================= */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="rr-container relative py-20 text-center sm:py-24 md:py-32">
          <p className="rr-label">Rangratri 2025</p>

          <h1 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-8
 max-w-5xl text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-8xl">
            The night that
            <br />
            became a memory.
          </h1>

          <div className="rr-divider rr-display-center mx-auto mt-8 sm:mt-9">
            <span className="rr-divider-dot" />
          </div>

          <p className="rr-editorial rr-display-center mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#eadfca]/70 sm:text-xl md:mt-8 md:text-2xl">
            A glimpse into the people, music, movement and moments that made
            Rangratri 2025 unforgettable.
          </p>
        </div>
      </section>

      {/* =================================================
          GALLERY
          ================================================= */}
      <section className="relative bg-[#10061c] py-14 sm:py-16 md:py-24">
        <div className="rr-container">
          {/* FILTERS */}
          <div className="scrollbar-none flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`shrink-0 border px-4 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    active
                      ? "border-[#e4b84a] bg-[#d6a52d]/10 text-[#f4d47a]"
                      : "border-[rgba(214,165,45,0.18)] bg-[#08030f]/30 text-[#eadfca]/55 hover:border-[rgba(228,184,74,0.45)] hover:text-[#f4d47a]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* COUNT */}
          <div className="mt-8
 flex items-center justify-between">
            <p className="rr-meta">
              {filteredGallery.length}{" "}
              {filteredGallery.length === 1
                ? "Memory"
                : "Memories"}
            </p>

            <p className="rr-meta hidden sm:block">
              Rangratri 2025
            </p>
          </div>

          {/* GALLERY */}
          <div className="mt-8 columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
            {filteredGallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden border border-[rgba(214,165,45,0.14)] bg-[#08030f] text-left sm:mb-4"
                aria-label={`Open ${item.category} memory`}
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={`${item.category} — Rangratri 2025`}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08030f]/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[rgba(228,184,74,0.5)]" />

                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                    <p className="rr-label text-[9px]">
                      {item.category}
                    </p>

                    <p className="mt-1 font-editorial text-lg text-[#fff5dd]">
                      Rangratri 2025
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredGallery.length === 0 && (
            <div className="py-20 text-center">
              <p className="rr-editorial rr-display-center text-2xl text-[#eadfca]/60">
                No memories found in this category.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 text-center sm:mt-16">
            <p className="rr-label">The Journey Continues</p>

            <h2 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-8
 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
              Ready for 2026?
            </h2>

            <Link
              href="/navratri-mahautsav-2026"
              className="rr-button rr-button-primary mt-8 w-full sm:w-auto"
            >
              Explore Navratri Mahautsav 2026
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
          LIGHTBOX
          ================================================= */}
      {selectedImage && selectedIndex !== null && (
        <GalleryLightbox
          image={selectedImage}
          images={filteredGallery}
          currentIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </main>
  );
}