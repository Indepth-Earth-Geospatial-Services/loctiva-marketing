// components/pricing/PricingFAQ.tsx
'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { pricingFaqs } from './pricing.data';

/**
 * Sticky left label + scrolling right-column accordion. The heading pins
 * beneath the (also sticky) Navbar while the taller accordion column
 * scrolls past it, then releases once this section ends. Left/right split
 * is narrow/wide (not 50/50) so the accordion column has room to breathe
 * and question text doesn't wrap awkwardly.
 */
export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='bg-bg py-24 max-[860px]:py-16'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-10'>
        <Reveal>
          <div className='flex flex-col justify-between gap-12 lg:flex-row lg:gap-16'>
            {/* Left — sticky heading, pins below the sticky Navbar as the accordion scrolls past */}
            <div className='w-full lg:w-[45%]'>
              <div className='sticky top-28 self-start'>
                <h2 className='font-satoshi text-4xl font-medium tracking-tight text-t-bright max-[860px]:text-3xl'>
                  Questions &amp; Answers
                </h2>
              </div>
            </div>

            {/* Right — accordion */}
            <div className='w-full lg:w-[55%]'>
              <div className='divide-y divide-border border-y border-border'>
                {pricingFaqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={faq.question} className='py-4'>
                      <button
                        type='button'
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className='flex w-full items-center justify-between gap-6 text-left font-geist text-base font-normal text-t-bright transition-colors hover:text-t-muted'
                      >
                        <span>{faq.question}</span>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={1.75}
                          className={cn(
                            'h-5 w-5 flex-none text-t-muted transition-transform duration-300',
                            isOpen && 'rotate-180',
                          )}
                        >
                          <path
                            d='M19 9l-7 7-7-7'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>

                      <div
                        className={cn(
                          'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        <div className='overflow-hidden'>
                          <p className='pb-2 pt-3 font-inter text-[15px] leading-relaxed text-t-muted'>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
