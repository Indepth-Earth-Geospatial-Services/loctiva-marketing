import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Delivers } from '@/components/sections/delivers';
import { Dashboard } from '@/components/pages/dashboard';
import { Platform } from '@/components/sections/platform';
import { Splits } from '@/components/sections/splits';
import { Impact } from '@/components/sections/impact';
import { Trust } from '@/components/sections/trust';
import { Footer } from '@/components/layout/Footer';

/**
 * Landing page — full conversion of the original static site into
 * component-based sections: navbar, hero, features, delivers, dashboard,
 * platform, splits, impact, trust, and footer.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Delivers />
        <Dashboard />
        <Platform />
        <Splits />
        <Impact />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
