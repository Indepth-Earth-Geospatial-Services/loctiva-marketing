import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Platform } from '@/components/sections/platform';
import { CallToAction } from '@/components/sections/cta';
import { CapabilityGrid, ProductHero } from '@/components/pages/product';

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductHero />
        <Platform />
        <CapabilityGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
