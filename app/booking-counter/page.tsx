import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Counters | Rangratri Events",
  description:
    "Find the official booking counters for Navratri Mahautsav 2026 by Rangratri Events in Katihar.",
};

const bookingCounters = [
  {
    name: "Vardhan Banquet",
    personName: "Ayush Gupta",
    contact: "+91-7004421110",
    image: "/images/booking-counters/vardhan-banquet.jpg",
    address: "Gami Tola, Katihar, Bihar 854105",
    gmapLink: "https://maps.app.goo.gl/NxC3QqrpyypFnBZTA",
  },
  {
    name: "Star Cafe",
    personName: "Mukul Keshri",
    contact: "+91-8789732015",
    image: "/images/booking-counters/star-cafe.jpg",
    address: "The Star Cafe, Durgasthan Chowk, Katihar",
    gmapLink: "https://maps.app.goo.gl/fLVj2oXBHwFUEdj28",
  },
  {
    name: "Shyaam Makhana Traders",
    personName: "Sunny Mahto",
    contact: "+91-6202542692",
    image: "/images/booking-counters/shyaam-makhana-traders.jpg",
    address: "Shyam Makhana Traders, Krishi Vigyan Kendra, Tingachaiya",
    gmapLink: "https://maps.app.goo.gl/NVYUuoQfjmc9GdhC9",
  },
  {
    name: "Priyanshu Textile",
    personName: "Priyanshu Aggarwal",
    contact: "+91-6205956920",
    image: "/images/booking-counters/priyanshu-textile.jpg",
    address: "Priyanshu Textile, AVM Public School Gali, Amla Tola",
    gmapLink: "https://maps.app.goo.gl/8u3stS7H4PC5xXXn9",
  },
];

export default function BookingCounterPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08030f] text-[#fff5dd]">
      {/* HERO */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_25%,rgba(109,27,104,0.28),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#d6a52d]/70 to-transparent" />

        <div className="rr-container flex min-h-[48vh] items-center justify-center py-20 text-center">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <p className="rr-label">Official Booking Counters</p>

            <h1 className="rr-display rr-gold-gradient mt-8 text-5xl md:text-7xl">
              Get Your Pass.
            </h1>

            <h2 className="rr-display mt-2 text-4xl text-[#fff5dd]/90 md:text-6xl">
              Meet Us at the Counter.
            </h2>

            <div className="rr-divider mx-auto mt-9">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-editorial mx-auto mt-8 w-full max-w-3xl !text-center text-xl leading-relaxed text-[#eadfca]/70 md:text-2xl">
              Find the official Rangratri booking counters near you and
              enquire about your pass for Navratri Mahautsav 2026.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 font-sans text-sm text-[#eadfca]/75 sm:flex-row sm:gap-8">
              <span>20 October 2026</span>
              <span className="hidden text-[#d6a52d]/50 sm:inline">•</span>
              <span>6 PM onwards</span>
              <span className="hidden text-[#d6a52d]/50 sm:inline">•</span>
              <span>Vardhan Banquet, Katihar</span>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <p className="rr-label">Pass Collection</p>

            <h2 className="rr-display rr-gold-gradient mt-7 text-4xl md:text-5xl">
              Booking Counters
            </h2>

            <div className="rr-divider mx-auto mt-7">
              <span className="rr-divider-dot" />
            </div>

            <p className="rr-body mx-auto mt-6 w-full max-w-2xl !text-center text-base leading-7 text-[#eadfca]/60">
              Visit an official counter to enquire about passes and collect
              your booking information.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bookingCounters.map((counter, index) => (
              <article
                key={`${counter.name}-${index}`}
                className="rr-frame rr-card group flex min-h-[420px] flex-col overflow-hidden"
              >
                <div className="rr-corner rr-corner-top-left" />
                <div className="rr-corner rr-corner-bottom-right" />

                {/* Counter image */}
                <div className="relative mx-5 mt-5 h-[170px] overflow-hidden border border-[rgba(214,165,45,0.18)] bg-[#08030f]">
                  <Image
                    src={counter.image}
                    alt={counter.name}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 330px"
                    quality={100}
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08030f]/45 via-transparent to-transparent" />

                  <span className="absolute bottom-3 left-3 bg-[#08030f]/80 px-3 py-1.5 font-sans text-[10px] font-bold tracking-[0.22em] text-[#f4d47a] backdrop-blur-sm">
                    COUNTER {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
                  <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#d6a52d]/60">
                    OFFICIAL BOOKING POINT
                  </p>

                  <h3 className="rr-editorial mt-3 text-3xl leading-tight text-[#fff5dd]">
                    {counter.name}
                  </h3>

                  {counter.personName && (
                    <p className="mt-2 font-sans text-sm text-[#d6a52d]">
                      {counter.personName}
                    </p>
                  )}

                  <div className="mt-5 space-y-4 border-t border-[rgba(214,165,45,0.14)] pt-5 font-sans text-sm leading-6 text-[#eadfca]/65">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-[#f4d47a]"
                      />
                      <span>{counter.address}</span>
                    </div>

                    {counter.contact && (
                      <a
                        href={`tel:${counter.contact.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-3 transition-colors hover:text-[#fff5dd]"
                      >
                        <Phone
                          size={18}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#f4d47a]"
                        />
                        <span>{counter.contact}</span>
                      </a>
                    )}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                    <a
                      href={counter.gmapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rr-button rr-button-secondary flex-1 justify-center"
                    >
                      Get Directions
                      <ArrowUpRight size={15} />
                    </a>

                    {counter.contact && (
                      <a
                        href={`tel:${counter.contact.replace(/[^\d+]/g, "")}`}
                        className="rr-button rr-button-primary flex-1 justify-center"
                      >
                        Call Counter
                        <Phone size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE ENQUIRY */}
      <section className="rr-section bg-[#08030f]">
        <div className="rr-container">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <p className="rr-label">Need Help?</p>

            <h2 className="rr-display rr-gold-gradient mt-7 text-4xl md:text-5xl">
              Enquire About Your Pass
            </h2>

            <p className="rr-editorial mx-auto mt-6 w-full max-w-2xl !text-center text-lg leading-relaxed text-[#eadfca]/65">
              Prefer to enquire online? Connect with Rangratri Events directly
              on WhatsApp.
            </p>

            <a
              href="https://wa.me/919334661691?text=Hello%20Rangratri%20Events!%20I%20would%20like%20to%20enquire%20about%20the%20Navratri%20Mahautsav%202026%20passes."
              target="_blank"
              rel="noopener noreferrer"
              className="rr-button rr-button-primary mt-9"
            >
              Enquire on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="rr-section bg-[#10061c]">
        <div className="rr-container flex flex-col items-center justify-center text-center">
          <p className="rr-label">Rangratri 2026</p>

          <h2 className="rr-display rr-gold-gradient mt-7 text-4xl md:text-6xl">
            See You on the Dance Floor.
          </h2>

          <Link href="/" className="rr-button rr-button-secondary mt-9">
            Back to Rangratri
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
