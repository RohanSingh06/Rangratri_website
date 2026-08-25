/*
===========================================================
RANGRATRI CONTACT PAGE
Step 8 — Homepage / Navigation completion
Iteration: UI + Vercel build compatibility

Purpose:
- Provide contact details for Rangratri Events.
- Keep phone, email and Instagram information centralized.
- Avoid unsupported lucide-react Instagram exports.
- Maintain the refined Rangratri typography system.
===========================================================
*/

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contact } from "@/data/contact";
import { event } from "@/data/event";

export const metadata: Metadata = {
  title: "Contact Rangratri Events | Katihar",
  description:
    "Contact Rangratri Events for event enquiries, partnerships, sponsorships and Navratri Mahautsav 2026 information.",
};

/*
-----------------------------------------------------------
INSTAGRAM ICON
-----------------------------------------------------------
Inline SVG keeps the implementation lightweight and avoids
depending on a lucide-react Instagram export.
-----------------------------------------------------------
*/

function InstagramIcon({ size = 18 }: { size?: number }) {
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

export default function ContactPage() {
  const hasPhone = Boolean(contact.phone);
  const hasEmail = Boolean(contact.email);

  return (
    <main className="overflow-hidden bg-[#08030f]">
      {/* =================================================
          HERO
          ================================================= */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="rr-container relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="rr-label">Get In Touch</p>

            <h1 className="rr-display rr-display-center rr-gold-gradient mt-8 text-5xl md:text-6xl lg:text-8xl">
              Let's talk
              <br />
              Rangratri.
            </h1>

            <div className="rr-divider mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mx-auto mt-12 w-full max-w-[760px] text-center text-xl leading-[1.2] text-[#eadfca]/75 md:mt-16 md:text-3xl">
              For partnerships, sponsorships, event enquiries or anything
              related to Navratri Mahautsav 2026, reach out to the Rangratri
              team.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          CONTACT OPTIONS
          ================================================= */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">
          <div className="grid gap-4 md:grid-cols-2">
            {/* PHONE */}
            {hasPhone && (
              <a
                href={`tel:${contact.phone}`}
                className="rr-card rr-frame group"
              >
                <Phone
                  size={22}
                  strokeWidth={1.6}
                  className="text-[#f4d47a]"
                />

                <p className="rr-label mt-7">Phone</p>

                <p className="rr-editorial mt-3 text-2xl text-[#fff5dd]">
                  {contact.phone}
                </p>
              </a>
            )}

            {/* EMAIL */}
            {hasEmail && (
              <a
                href={`mailto:${contact.email}`}
                className="rr-card rr-frame group"
              >
                <Mail
                  size={22}
                  strokeWidth={1.6}
                  className="text-[#f4d47a]"
                />

                <p className="rr-label mt-7">Email</p>

                <p className="rr-editorial mt-3 break-all text-2xl text-[#fff5dd]">
                  {contact.email}
                </p>
              </a>
            )}

            {/* INSTAGRAM */}
            <Link
              href={contact.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="rr-card rr-frame"
            >
              <InstagramIcon />

              <p className="rr-label mt-7">
                Instagram
              </p>

              <p className="rr-editorial mt-3 text-2xl text-[#fff5dd]">
                {contact.instagram.label}
              </p>
            </Link>

            {/* VENUE */}
            <div className="rr-card rr-frame">
              <MapPin
                size={22}
                strokeWidth={1.6}
                className="text-[#f4d47a]"
              />

              <p className="rr-label mt-7">
                Event Venue
              </p>

              <p className="rr-editorial mt-3 text-2xl leading-snug text-[#fff5dd]">
                {event.venue.full}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          PARTNERSHIP CTA
          ================================================= */}
      <section className="rr-section bg-[#08030f]">
        <div className="rr-container text-center">
          <p className="rr-label">
            Sponsorship & Partnerships
          </p>

          <h2 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-8 max-w-4xl text-4xl md:text-5xl lg:text-6xl">
            Bring your brand
            <br />
            into the celebration.
          </h2>

          <Link
            href="/sponsorship"
            className="rr-button rr-button-primary mt-10"
          >
            Explore Sponsorship
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}