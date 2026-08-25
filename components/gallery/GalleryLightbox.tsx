"use client";

/*
===========================================================
RANGRATRI GALLERY LIGHTBOX
Phase A — Code Correctness
Iteration: A1
Purpose:
- Display a selected gallery image in an overlay
- Previous / Next navigation
- Close button
- Keyboard navigation
- Mobile-friendly controls
- No external lightbox dependency
===========================================================
*/

import Image from "next/image";
import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import type { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  image: GalleryItem;
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function GalleryLightbox({
  image,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: GalleryLightboxProps) {
  /*
  ---------------------------------------------------------
  Keyboard controls
  ---------------------------------------------------------
  Escape      → Close
  ArrowLeft   → Previous
  ArrowRight  → Next
  ---------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  /*
  ---------------------------------------------------------
  Prevent page scrolling while lightbox is open
  ---------------------------------------------------------
  */

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  /*
  ---------------------------------------------------------
  Close when clicking the dark background
  ---------------------------------------------------------
  */

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const hasPrevious = images.length > 1;
  const hasNext = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Rangratri 2025 gallery viewer"
      onMouseDown={handleBackdropClick}
    >
      {/* =================================================
          CLOSE BUTTON
          ================================================= */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center border border-[rgba(244,212,122,0.32)] bg-[#10061c]/90 text-[#f4d47a] transition-colors duration-200 hover:border-[#f4d47a] hover:bg-[#190822] sm:right-6 sm:top-6"
      >
        <X size={20} strokeWidth={1.8} />
      </button>

      {/* =================================================
          IMAGE VIEWER
          ================================================= */}

      <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
        {/* Previous */}
        {hasPrevious && (
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous image"
            className="absolute left-1 z-20 flex h-11 w-11 items-center justify-center border border-[rgba(244,212,122,0.32)] bg-[#10061c]/90 text-[#f4d47a] transition-colors duration-200 hover:border-[#f4d47a] hover:bg-[#190822] sm:left-3 md:left-6"
          >
            <ChevronLeft size={22} strokeWidth={1.7} />
          </button>
        )}

        {/* Image */}
        <div className="relative flex h-full max-h-[88vh] w-full max-w-[92vw] items-center justify-center sm:max-w-[88vw]">
          <Image
            src={image.src}
            alt={`${image.category} — Rangratri 2025`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />

          {/* Bottom information */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-16 pb-5 pt-16 sm:px-20 sm:pb-7">
            <div className="mx-auto max-w-4xl text-center">
              <p className="rr-label text-[9px]">
                {image.category}
              </p>

              <p className="mt-2 font-editorial text-xl text-[#fff5dd] sm:text-2xl">
                Rangratri 2025
              </p>

              <p className="mt-2 font-sans text-[10px] tracking-[0.12em] text-[#eadfca]/45">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>

        {/* Next */}
        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-1 z-20 flex h-11 w-11 items-center justify-center border border-[rgba(244,212,122,0.32)] bg-[#10061c]/90 text-[#f4d47a] transition-colors duration-200 hover:border-[#f4d47a] hover:bg-[#190822] sm:right-3 md:right-6"
          >
            <ChevronRight size={22} strokeWidth={1.7} />
          </button>
        )}
      </div>
    </div>
  );
}