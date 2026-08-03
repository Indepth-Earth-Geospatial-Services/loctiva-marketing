import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Platform } from '@/components/sections/platform';
import { CallToAction } from '@/components/sections/cta';
import {
  CapabilityGrid,
  EvidenceReporting,
  FleetDeployment,
  InstantAlerts,
  LiveCommandView,
  PrecisionMapping,
  ProductAIDetection,
  ProductHero,
  ProductProblem,
} from '@/components/pages/product';

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductHero />
        <ProductProblem />
        <Platform />
        <LiveCommandView />
        <ProductAIDetection />
        <PrecisionMapping />
        <FleetDeployment />
        <InstantAlerts />
        <EvidenceReporting />
        <CapabilityGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
