import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Creator Competition 2026",
  description:
    "Terms and conditions for the Rangratri Creator Competition 2026.",
};

export default function CreatorTermsPage() {
  return (
    <main className="min-h-screen bg-[#08030f] pt-[76px] text-[#f7f0df]">
      <section className="rr-atmosphere relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(109,27,104,0.18),transparent_45%)]" />

        <div className="rr-container mx-auto py-16 md:py-24">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="rr-label">Rangratri Events</p>

            <h1 className="rr-display rr-gold-gradient mt-6 text-4xl md:text-5xl lg:text-6xl">
              Creator Competition 2026
            </h1>

            <p className="rr-editorial mt-5 text-lg text-[#eadfca]/70 md:text-xl">
              Terms &amp; Conditions
            </p>

            <div className="rr-divider mx-auto mt-8">
              <span className="rr-divider-dot" />
            </div>
          </div>

          {/* Terms */}
          <div className="mx-auto mt-12 max-w-4xl space-y-8">
            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">1. Eligibility</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                The Creator Competition 2026 is open to creators participating
                through the official Rangratri Events registration process.
                Participants must provide accurate information during
                registration.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">2. Original Content</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                Content submitted for the competition should be created by the
                participant. Participants must have the necessary rights and
                permissions to use any music, footage, images, or other
                materials included in their content.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">3. Posting Instructions</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                Registered participants will be informed by Rangratri Events
                about when to post their competition video. Participants must
                follow the posting instructions and timeline communicated by
                the organizers.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">4. Caption &amp; Hashtags</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                The competition video caption must include the official
                hashtags provided by Rangratri Events. Participants may also
                add their own relevant caption content, provided it follows the
                competition guidelines.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">5. Content Guidelines</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                Content must be respectful, appropriate, and suitable for
                public viewing. Content that is offensive, misleading,
                unlawful, hateful, or otherwise inappropriate may be removed
                from consideration.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">6. Judging</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                Entries will be evaluated according to the official judging
                criteria communicated by Rangratri Events. The organizers'
                decision regarding eligibility, scoring, and winners will be
                final.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">7. Disqualification</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                Rangratri Events reserves the right to disqualify an entry or
                participant if the competition guidelines are not followed,
                false information is provided, or the submitted content is
                found to violate these terms.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">8. Changes &amp; Updates</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                Rangratri Events may update competition instructions, timelines,
                or other participation details when required. Participants
                will be informed of important changes through the official
                communication channels.
              </p>
            </article>

            <article className="rr-card rr-frame p-6 md:p-8">
              <p className="rr-label">9. Acceptance</p>
              <p className="rr-body mt-4 text-sm leading-7 text-[#eadfca]/75 md:text-base">
                By registering for the Creator Competition 2026, participants
                confirm that they have read and agree to these Terms &amp;
                Conditions and any additional instructions communicated by
                Rangratri Events.
              </p>
            </article>
          </div>

          {/* Back / CTA */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/creators"
              className="rr-button rr-button-secondary px-6"
            >
              <ArrowLeft size={15} />
              Back to Creator Competition
            </Link>

            <Link
              href="/creators/register"
              className="rr-button rr-button-primary px-6"
            >
              Register Now
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
