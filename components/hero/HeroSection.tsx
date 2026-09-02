/*
===========================================================
RANGRATRI HERO SECTION
Step 14 — SEO + Performance
Iteration: 14.7 — Hero performance optimization

Purpose:
- Keep the hero visually identical.
- Prioritize only the assets critical to the first viewport.
- Use the centralized media registry.
- Avoid unnecessary high-priority image requests.
===========================================================
*/

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { contact } from "@/data/contact";
import { event } from "@/data/event";
import { media } from "@/data/media";

const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(
  contact.whatsapp.message,
)}`;

export default function HeroSection() {
  return (
    <section className="rr-atmosphere relative min-h-screen overflow-hidden pt-[76px]">
      {/* =================================================
          HERO BACKGROUND
          =================================================

          This image forms the main first-viewport background,
          so it remains priority-loaded.
          ================================================= */}

      <div className="absolute inset-0 -z-20">
        <Image
          src={media.event.background}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#08030f]/45" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(109,27,104,0.16),transparent_42%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,3,15,0.12)_0%,rgba(8,3,15,0.35)_58%,#08030f_100%)]" />
      </div>

      {/* =================================================
          DECORATIVE ATMOSPHERE
          ================================================= */}

      <div className="rr-mandala left-1/2 top-[8%] -translate-x-1/2" />

      <div className="rr-particles pointer-events-none absolute inset-0 opacity-30" />

      {/* =================================================
          HERO CONTENT
          ================================================= */}

      <div className="rr-container relative flex min-h-[calc(100vh-76px)] flex-col justify-center py-16 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* =================================================
              BRAND LOGO

              Uses centralized media registry.
              No priority loading needed because the logo is
              secondary to the background and event artwork.
              ================================================= */}

          <div className="rr-reveal">
            <Image
              src={media.brand.logo}
              alt="Rangratri Events"
              width={220}
              height={90}
              sizes="150px"
              className="mx-auto w-[150px] object-contain sm:w-[180px] md:w-[210px]"
            />
          </div>

          {/* Presents */}
          <div className="mt-0
 rr-label rr-reveal">
            Presents
          </div>

          {/* =================================================
              EVENT WORD ART

              This is one of the main first-viewport visual
              elements, so it remains priority-loaded.
              ================================================= */}

          <div className="relative mt-8 w-full max-w-[780px] rr-reveal">
            <Image
              src={media.brand.eventWordArt}
              alt="Navratri Mahautsav 2026"
              width={1200}
              height={500}
              priority
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 88vw, 780px"
              className="mx-auto w-[92%] object-contain drop-shadow-[0_0_28px_rgba(214,165,45,0.12)] sm:w-[88%] md:w-full"
            />
          </div>

          {/* Tagline */}
          <p className="rr-editorial mt-10 max-w-2xl text-lg leading-relaxed text-[#fff5dd]/85 sm:text-2xl md:text-3xl">
            {event.tagline}
          </p>

          {/* Divider */}
          <div className="rr-divider mt-8">
            <span className="rr-divider-dot" />
          </div>

          {/* Event details */}
          <div className="mt-8 flex flex-col items-center gap-3 font-sans text-sm text-[#eadfca]/75 sm:flex-row sm:gap-6">
            <span className="font-semibold tracking-wide">
              {event.date.full}
            </span>

            <span className="hidden h-1 w-1 rotate-45 bg-[#d6a52d] sm:block" />

            <span className="flex items-center gap-2 font-semibold tracking-wide">
              <MapPin
                size={15}
                className="text-[#f4d47a]"
              />
              {event.venue.full}
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/navratri-mahautsav-2026"
              className="rr-button rr-button-primary w-full px-7 sm:w-auto"
            >
              Discover the Event
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/memories"
              className="rr-button rr-button-secondary w-full px-7 sm:w-auto"
            >
              2025 Memories
            </Link>

            <Link
              href="/creators"
              className="rr-button rr-button-secondary w-full px-7 sm:w-auto"
            >
              Creator Competition
              <ArrowUpRight size={15} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rr-button rr-button-secondary w-full px-7 sm:w-auto"
            >
              WhatsApp Us
              <MessageCircle size={15} />
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#experience"
            className="mt-12 flex flex-col items-center gap-2 text-[#eadfca]/40 transition-colors hover:text-[#f4d47a]"
            aria-label="Scroll to event experience"
          >
            <span className="rr-label text-[9px] tracking-[0.25em]">
              Explore
            </span>

            <ArrowDown
              size={15}
              className="animate-bounce"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
