import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PricingFaq, PricingPlans } from '@/components/pages/pricing';
import { CallToAction } from '@/components/sections/cta';

export default function PricingPage() {
  return (
    <>
      <Navbar variant='light' />
      <main>
        <PricingPlans />
        <PricingFaq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
