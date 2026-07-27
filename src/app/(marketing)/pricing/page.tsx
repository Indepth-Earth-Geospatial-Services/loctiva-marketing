import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  PricingFaq,
  PricingPlans,
  CallToAction,
} from '@/components/pages/pricing';

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
