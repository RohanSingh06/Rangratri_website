import TeamMemberCard from "./TeamMemberCard";
import { foundingPartners, leadership } from "@/data/team";
import type { TeamMember } from "@/data/team";

interface TeamGroupProps {
  title: string;
  members: TeamMember[];
}

function TeamGroup({ title, members }: TeamGroupProps) {
  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-[#D9A62E]/40" />

        <h3 className="font-serif text-base uppercase tracking-[0.25em] text-[#D9A62E]">
          {title}
        </h3>

        <span className="h-px w-10 bg-[#D9A62E]/40" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-4 sm:gap-x-8">
        {members.map((member) => (
          <TeamMemberCard
            key={member.name}
            {...member}
          />
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#08020F] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7A174D]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#D9A62E]">
            The People Behind Rangratri
          </p>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#F5D77A] sm:text-5xl">
            Our Team
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D9A62E]/40" />
            <span className="text-[#D9A62E]">◆</span>
            <span className="h-px w-8 bg-[#D9A62E]/40" />
          </div>

          <p className="mt-10 text-base leading-7 text-white/55">
            The people shaping the experience behind Rangratri Events.
          </p>
        </header>

        <TeamGroup
          title="Founding Partners"
          members={foundingPartners}
        />

        <div className="mx-auto my-20 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#D9A62E]/25 to-transparent" />

        <TeamGroup
          title="Leadership"
          members={leadership}
        />
      </div>
    </section>
  );
}