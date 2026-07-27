// components/sections/CallToAction.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config/site';

export function CallToAction() {
  return (
    <section className='bg-white py-40 max-[860px]:py-20 bg-red-50/30'>
      {/*
        Container with a soft, approachable off-white backdrop & subtle border
        that looks stunning on light pages.
      */}
      <div className='relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-slate-50/70 px-8 py-20 text-center shadow-sm max-[860px]:py-12 max-[860px]:px-4'>
        {/* Subtle radial glow overlay for added depth */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-blue-500/10 blur-3xl'
        />

        <div className='relative z-10 mx-auto max-w-3xl'>
          {/* Main Heading */}
          <h2 className='font-satoshi text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl max-[860px]:text-3xl'>
            Get started with Loctiva.
          </h2>

          {/* Action Buttons */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5'>
            {/* Download / Get Started CTA */}
            <a href={`${siteConfig.commandAppUrl}/sign-in`}>
              <Button
                variant='solid'
                className='px-7 py-3 text-sm transition-all hover:shadow-md'
              >
                <span>Get Started</span>
                <span className='ml-1 text-xs'>↓</span>
              </Button>
            </a>

            {/* Contact Sales CTA */}
            <Link href='/contact'>
              <Button
                variant='ghost'
                className='border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 hover:border-neutral-400 px-7 py-3 text-sm'
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
