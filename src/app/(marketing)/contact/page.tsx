import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/pages/contact';

export default function ContactPage() {
  return (
    <>
      <Navbar variant='light' />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
