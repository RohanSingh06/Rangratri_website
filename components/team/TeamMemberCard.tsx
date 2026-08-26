import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps extends TeamMember {}

export default function TeamMemberCard({
  name,
  role,
  image,
}: TeamMemberCardProps) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto mb-5 aspect-square w-full max-w-[220px] overflow-hidden rounded-full border border-[#D9A62E]/30 bg-[#120820]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            aria-label={`${name} photo placeholder`}
          >
            <span className="font-serif text-3xl text-[#D9A62E]/40">
              {name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[#F5D77A]/10" />
      </div>

      <h3 className="font-serif text-xl font-medium tracking-wide text-[#F5D77A]">
        {name}
      </h3>

      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
        {role}
      </p>
    </article>
  );
}