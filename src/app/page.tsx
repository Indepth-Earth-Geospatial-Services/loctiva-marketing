import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Delivers } from '@/components/sections/delivers';
import { Dashboard } from '@/components/pages/dashboard';
import { Platform } from '@/components/sections/platform';
import { Industries } from '@/components/sections/industries';
import { Splits } from '@/components/sections/splits';
import { Impact } from '@/components/sections/impact';
import { Trust } from '@/components/sections/trust';
import { Testimonials } from '@/components/sections/testimonials';
import { Footer } from '@/components/layout/Footer';

/**
 * Landing page — full conversion of the original static site into
 * component-based sections: navbar, hero, features, dashboard, industries,
 * splits, testimonials, delivers, platform, impact, trust, and footer.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Industries />
        <Splits />
        <Testimonials />
        {/* <Delivers /> */}
        {/* <Platform /> */}
        <Impact />
        {/* <Trust /> */}
      </main>
      <Footer />
    </>
  );
}
