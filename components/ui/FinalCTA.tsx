import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { event } from "@/data/event";

export default function FinalCTA() {
  return (
    <section className="rr-section relative overflow-hidden bg-[#10061c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(109,27,104,0.22),transparent_48%)]" />

      <div className="rr-mandala left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="rr-container relative text-center">
        <p className="rr-label">Navratri Mahautsav 2026</p>

        <h2 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-6 max-w-4xl text-5xl md:text-6xl lg:text-7xl">
          The next memory
          <br />
          starts here.
        </h2>

        <div className="rr-divider mx-auto mt-9">
          <span className="rr-divider-dot" />
        </div>

        <p className="rr-editorial rr-display-center mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#eadfca]/70 md:text-2xl">
          {event.tagline}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/navratri-mahautsav-2026"
            className="rr-button rr-button-primary"
          >
            Discover the Event
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
  );
}