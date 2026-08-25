/*
===========================================================
RANGRATRI EVENT HIGHLIGHTS
Step 14 — SEO + Performance
Iteration: 14.7 — Event highlights performance review

Purpose:
- Present the core 2026 event highlights.
- Keep the component fully server-rendered.
- Avoid unnecessary client-side logic.
- Keep highlight content lightweight and static.
===========================================================
*/

import { event } from "@/data/event";

const highlights = [
  {
    number: "01",
    title: "Garba",
    description:
      "A night built around movement, rhythm and celebration.",
  },
  {
    number: "02",
    title: "Dandiya",
    description:
      "Bring your energy, find your rhythm and celebrate together.",
  },
  {
    number: "03",
    title: "Live Music",
    description:
      "Immersive sound and lighting designed to keep the energy alive.",
  },
  {
    number: "04",
    title: "Food",
    description:
      "Thoughtfully placed food stalls keep flavour part of the experience.",
  },
];

export default function EventHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#0d0518] py-16 md:py-20">
      <div className="rr-container">
        {/* =================================================
            SECTION INTRO
            ================================================= */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="rr-label">What Awaits You</p>

            <h2 className="rr-display rr-gold-gradient mt-8 text-3xl md:text-4xl lg:text-5xl">
              Built for a night to remember.
            </h2>
          </div>

          <p className="rr-body max-w-md text-sm leading-7 text-[#eadfca]/55 md:text-right">
            {event.name} brings culture, music, movement and celebration
            together in one immersive night.
          </p>
        </div>

        {/* =================================================
            HIGHLIGHTS GRID
            ================================================= */}
        <div className="grid border-y border-[rgba(214,165,45,0.18)] md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="group relative border-b border-[rgba(214,165,45,0.14)] px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-10 md:last:border-r-0"
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#d6a52d]/60">
                {item.number}
              </span>

              <h3 className="rr-editorial mt-8
 text-2xl text-[#fff5dd] transition-colors duration-300 group-hover:text-[#f4d47a]">
                {item.title}
              </h3>

              <p className="rr-body mt-3 text-sm leading-7 text-[#eadfca]/55">
                {item.description}
              </p>

              <div className="mt-6 h-px w-8 bg-[#d6a52d]/50 transition-all duration-500 group-hover:w-16 group-hover:bg-[#f4d47a]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}