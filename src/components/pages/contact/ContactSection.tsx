import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from './ContactForm';
import { contactHeading } from './contact.data';

/**
 * Contact page body — header/context on the left, the form in a card on
 * the right (same left-text/right-card rhythm as Dashboard's video card).
 */
export function ContactSection() {
  return (
    <section className='pb-24 pt-40 max-[1100px]:pt-28 max-[860px]:pt-24'>
      <div className='wrap'>
        <div className='grid grid-cols-[1fr_1.1fr] gap-16 max-[1100px]:grid-cols-1 max-[1100px]:gap-10'>
          {/* Sticky heading — pins below the sticky Navbar as the form column scrolls past */}
          <Reveal className='max-[1100px]:max-w-[600px]'>
            <div className='sticky top-28 self-start'>
              <Eyebrow variant='blue' className='mb-6 w-fit'>
                {contactHeading.eyebrow}
              </Eyebrow>
              <h1 className='mb-5 font-satoshi text-[40px] font-medium leading-[1.25] tracking-[-.5px] text-t-primary max-[860px]:text-[28px]'>
                {contactHeading.title}
              </h1>
              <p className='font-geist text-lg leading-[1.5] text-t-dim max-[860px]:text-base'>
                {contactHeading.subtitle}
              </p>
            </div>
          </Reveal>

          <Reveal className='rounded-[18px] border border-border bg-panel p-8 max-[860px]:p-6'>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
