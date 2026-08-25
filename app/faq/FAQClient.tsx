"use client";

/*
===========================================================
RANGRATRI FAQ CLIENT
Step 14 — SEO + Performance
Iteration: 14.2 — Client component

Purpose:
- Handle interactive FAQ accordion behavior.
- Keep client-side state separate from page metadata.
===========================================================
*/

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/data/faq";

export default function FAQClient() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="overflow-hidden bg-[#08030f]">
      {/* =================================================
          HERO
          ================================================= */}
      <section className="rr-atmosphere relative overflow-hidden pt-[76px]">
        <div className="rr-container rr-display-center relative py-24 text-center md:py-32">
          <p className="rr-label">
            Frequently Asked Questions
          </p>

          <h1 className="rr-display rr-display-center rr-gold-gradient mx-auto mt-8
 max-w-4xl text-5xl md:text-6xl lg:text-8xl">
            Everything you
            <br />
            need to know.
          </h1>

          <div className="rr-divider rr-display-center mx-auto mt-9">
            <span className="rr-divider-dot" />
          </div>

          <p className="rr-editorial rr-display-center mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#eadfca]/70 md:text-2xl">
            Find the essential details about Navratri Mahautsav 2026.
          </p>
        </div>
      </section>

      {/* =================================================
          FAQ
          ================================================= */}
      <section className="bg-[#10061c] py-16 md:py-24">
        <div className="rr-container">
          <div className="mx-auto max-w-4xl">
            <div className="divide-y divide-[rgba(214,165,45,0.16)] border-y border-[rgba(214,165,45,0.16)]">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenId(isOpen ? null : faq.id)
                      }
                      className="flex min-h-[72px] w-full items-center justify-between gap-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <p className="rr-label text-[9px]">
                          {faq.category}
                        </p>

                        <h2 className="mt-2 font-editorial text-xl text-[#fff5dd] md:text-2xl">
                          {faq.question}
                        </h2>
                      </div>

                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-[#f4d47a] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] pb-6 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="rr-body max-w-3xl pr-10 text-sm leading-7 text-[#eadfca]/60 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}