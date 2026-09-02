import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Competition Registration | Rangratri Events",
  description:
    "Register for the Rangratri Creator Competition 2026.",
};

export default function CreatorRegistrationPage() {
  return (
    <main className="min-h-screen bg-[#24052F] text-[#F7F0DF]">
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-[#7A155F]/20 blur-[120px]" />
          <div className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-[#D9A21B]/10 blur-[120px]" />
        </div>

        {/* Header */}
        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-20 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C64A] sm:text-sm">
            Rangratri Events
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#F7F0DF] sm:text-5xl lg:text-6xl">
            Creator Competition{" "}
            <span className="text-[#F4C64A]">2026</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#D8CDBB] sm:text-base">
            Register to be a part of the Rangratri Creator Competition 2026.
          </p>
        </div>

        {/* Google Form */}
        <div className="relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-[#D9A21B]/20 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdHjaehvblb9d5AHD6yrCm9B1TRE8QHPcnUe63QNdmxMk8rKw/viewform?embedded=true"
              title="Rangratri Creator Competition 2026 Registration Form"
              className="block h-[2590px] w-full border-0"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}