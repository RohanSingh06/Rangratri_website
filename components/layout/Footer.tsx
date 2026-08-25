import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { brand } from "@/data/brand";
import { event } from "@/data/event";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(214,165,45,0.18)] bg-[#050209]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(109,27,104,0.2),transparent_70%)]" />

      <div className="rr-container relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex">
              <img
                src="/assets/brand/Rangratri_Events_logo.png"
                alt="Rangratri Events"
                className="w-[150px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md font-editorial text-xl leading-relaxed text-[rgba(255,245,221,0.78)] md:text-2xl">
              Where celebration becomes a memory.
            </p>

            <p className="mt-8
 max-w-md font-sans text-sm leading-7 text-[rgba(234,223,202,0.55)]">
              A celebration of culture, music, dance and unforgettable moments
              in Katihar.
            </p>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#f4d47a] transition-colors hover:text-[#fff5dd]"
            >
              <svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect width="20" height="20" x="2" y="2" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
</svg>
              {brand.instagramHandle}
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="rr-label mb-6">Explore</p>

            <nav className="flex flex-col items-start gap-4">
              {site.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-[rgba(234,223,202,0.62)] transition-colors hover:text-[#f4d47a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Event */}
          <div>
            <p className="rr-label mb-6">The Event</p>

            <h3 className="font-display text-xl text-[#f4d47a]">
              {event.name}
            </h3>

            <div className="mt-8
 space-y-4">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[rgba(234,223,202,0.45)]">
                  Date
                </p>

                <p className="mt-1 font-sans text-sm text-[rgba(255,245,221,0.8)]">
                  {event.date.full}
                </p>
              </div>

              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[rgba(234,223,202,0.45)]">
                  Venue
                </p>

                <p className="mt-1 flex items-start gap-2 font-sans text-sm leading-6 text-[rgba(255,245,221,0.8)]">
                  <MapPin
                    size={15}
                    className="mt-1 shrink-0 text-[#d6a52d]"
                  />
                  {event.venue.full}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rr-gold-line mt-14 opacity-40" />

        <div className="flex flex-col gap-3 pt-6 font-sans text-xs text-[rgba(234,223,202,0.38)] md:flex-row md:items-center md:justify-between">
          <p>
            © {event.year} {brand.name}. All rights reserved.
          </p>

          <p>
            {event.venue.city}, {event.venue.state}
          </p>
        </div>
      </div>
    </footer>
  );
}