// components/pages/pricing/CallToAction.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/config/site';

/**
 * Closing CTA banner for the pricing page. No client-side state, so this
 * stays a server component. Uses the site's own design tokens (`panel`,
 * `t-bright`, `blue`) rather than raw Tailwind palette colors, so it stays
 * in step with the rest of the site's calibrated light theme.
 */
export function CallToAction() {
  return (
    <section className='py-40 max-[860px]:py-20 bg-red-50/30'>
      <Reveal
        as='div'
        className='relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-panel px-8 py-20 text-center max-[860px]:px-4 max-[860px]:py-12'
      >
        {/* Subtle radial glow overlay for added depth */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue/10 blur-3xl'
        />

        <div className='relative z-10 mx-auto max-w-3xl'>
          <h2 className='font-satoshi text-4xl font-medium tracking-tight text-t-bright sm:text-5xl max-[860px]:text-3xl'>
            Get started with Loctiva.
          </h2>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5'>
            <a href={`${siteConfig.commandAppUrl}/sign-in`}>
              <Button variant='solid' className='px-7 py-3 text-sm'>
                Get Started
              </Button>
            </a>

            <Link href='/contact'>
              <Button variant='ghost' className='px-7 py-3 text-sm'>
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
