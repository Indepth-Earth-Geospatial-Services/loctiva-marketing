import { SectionHeading } from "@/components/sections/features/SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { featureCards, featuresHeading } from "./features.data";

/**
 * "Live Geospatial" section: a centered heading followed by the 2×2 feature
 * card grid (single column on mobile). Server component — no client JS
 * beyond the Reveal wrappers inside each card.
 */
export function Features() {
  return (
    <section className="flex min-h-dvh flex-col justify-center py-16 max-[860px]:py-10">
      <SectionHeading title={featuresHeading.title} subtitle={featuresHeading.subtitle} />

      <div className="pt-10 max-[1100px]:pt-8 max-[860px]:pt-6">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1 max-[860px]:gap-4">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
