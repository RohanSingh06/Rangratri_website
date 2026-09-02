import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Competition 2026 | Rangratri Events",
  description:
    "Rangratri Creator Competition 2026 — for Katihar's creators.",
};

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-[#24052F] text-[#F7F0DF]">
      <section className="relative isolate overflow-hidden">
        {/* Hero */}
        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* Full background image */}
          <div className="relative aspect-[16/9] min-h-[680px] w-full overflow-hidden">
            <Image
              src="/assets/creators/creator.webp"
              alt="Creator filming a Rangratri Navratri celebration"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Purple integration overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#24052F]/20 via-transparent to-transparent"
            />

            {/* Bottom fade */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#24052F] to-transparent"
            />

            {/* Subtle overall purple tint */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#24052F]/10"
            />

            {/* Gold frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#D9A21B]/20 sm:inset-6 lg:inset-8"
            />

            {/* Hero content */}
            <div className="absolute inset-0 z-10">
              <div className="flex h-full items-center">
                <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
                  <div className="max-w-[44%] lg:max-w-[46%]">
                    {/* Eyebrow */}
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F4C64A] sm:text-xs">
                      Rangratri Events
                    </p>

                    {/* Main title */}
                    <h1 className="font-serif text-5xl leading-[0.75] tracking-[-0.02em] sm:text-6xl lg:text-7xl xl:text-[6.7rem]">
                      <span className="block text-[#F7F0DF]">
                        Creator
                      </span>

                      <span className="block text-[#F4C64A]">
                        Competition
                      </span>

                      <span className="block text-[#F7F0DF]">
                        2026
                      </span>
                    </h1>

                    {/* Divider */}
                    <div className="mt-5 h-px w-16 bg-[#D9A21B] sm:mt-2 sm:w-20" />

                    {/* Supporting message */}
                    <p className="mt-8 text-lg font-medium leading-tight sm:text-xl lg:text-[1.35rem]">
                      For Katihar&apos;s Creators.
                    </p>

                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#D8CDBB] sm:text-base">
                      Create. Compete. Get Recognized.
                    </p>

                    {/* Registration CTA */}
                    <div className="mt-7 flex flex-col items-start sm:mt-8">
                      <a
                        href="/creators/register"
                        className="inline-flex items-center justify-center rounded-full border border-[#D9A21B]/60 bg-[#D9A21B] px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#24052F] transition-all duration-300 hover:bg-[#F4C64A] hover:shadow-[0_0_30px_rgba(217,162,27,0.25)] focus:outline-none focus:ring-2 focus:ring-[#F4C64A]/70 focus:ring-offset-2 focus:ring-offset-[#24052F] sm:px-7 sm:text-sm"
                      >
                        Register Now
                        <span
                          aria-hidden="true"
                          className="ml-2 text-base leading-none"
                        >
                          ↗
                        </span>
                      </a>

                      <Link
                        href="/creators/tnc"
                        className="mt-2 text-[10px] font-medium uppercase tracking-[0.100em] text-[#D8CDBB]/65 underline underline-offset-6 transition-colors duration-200 hover:text-[#F4C64A] sm:text-[11px]"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 sm:mt-9">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#A99BAF] sm:text-xs">
                        Navratri Mahautsav 2026
                      </p>

                      <div className="mt-2 flex items-center gap-3">
                        <span className="h-px w-9 bg-[#9E7116]" />

                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#F4C64A] sm:text-xs">
                          Rangratri Events
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}