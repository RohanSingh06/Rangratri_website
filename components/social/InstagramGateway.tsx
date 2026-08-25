import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { social } from "@/data/social";

function InstagramIcon({ size = 23 }: { size?: number }) {
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

export default function InstagramGateway() {
  return (
    <section className="rr-section relative overflow-hidden bg-[#08030f]">
      <div className="rr-container">
        <div className="rr-surface rr-frame mx-auto max-w-4xl overflow-hidden p-8 text-center sm:p-12 md:p-16">
          <div className="rr-corner rr-corner-top-left" />
          <div className="rr-corner rr-corner-bottom-right" />

          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[rgba(214,165,45,0.38)] bg-[#190822] text-[#f4d47a]">
            <InstagramIcon />
          </div>

          <p className="rr-label mt-25">Follow the Journey</p>

          <h2 className="rr-display rr-display-center rr-gold-gradient mt-8
 text-4xl md:text-5xl">
            See the celebrations.
            <br />
            See the moments.
          </h2>

          <p className="rr-editorial rr-display-center mx-auto mt-7 max-w-xl text-xl leading-relaxed text-[#eadfca]/70 md:text-2xl">
            Discover Rangratri beyond the website and follow{" "}
            <span className="text-[#f4d47a]">
              {social.instagram.handle}
            </span>
            .
          </p>

          <Link
            href={social.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="rr-button rr-button-primary mt-9"
          >
            View Instagram
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}