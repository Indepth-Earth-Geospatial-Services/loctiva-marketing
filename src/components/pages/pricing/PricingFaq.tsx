// components/pricing/PricingFAQ.tsx
'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { pricingFaqs } from './pricing.data';

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='bg-white py-24 text-black max-[860px]:py-16'>
      {/* Maximum width container with minimal padding to spread out across the screen */}
      <div className='mx-auto max-w-[1400px] px-4 sm:px-10'>
        <Reveal>
          {/* Justified-between flex layout to push left and right sections apart evenly */}
          <div className='flex flex-col justify-between gap-12 lg:flex-row lg:gap-12'>
            {/* Left Side: Sticky Heading (Takes ~35% width) */}
            <div className='w-full lg:w-[50%]'>
              <div className='sticky top-28 self-start'>
                <h2 className='font-satoshi text-4xl font-medium tracking-tight text-neutral-900 max-[860px]:text-3xl'>
                  Questions &amp; Answers
                </h2>
              </div>
            </div>

            {/* Right Side: Accordion (Takes ~55% width for a clean proportional split) */}
            <div className='w-full lg:w-[50%]'>
              <div className='divide-y divide-neutral-200 border-b border-t border-neutral-200'>
                {pricingFaqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={faq.question} className='py-4'>
                      <button
                        type='button'
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className='flex w-full items-center justify-between gap-6 text-left font-geist text-base font-normal text-neutral-900 transition-colors hover:text-neutral-600'
                      >
                        <span>{faq.question}</span>
                        {/* Down Chevron Icon */}
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={1.75}
                          className={cn(
                            'h-5 w-5 flex-none text-neutral-500 transition-transform duration-300',
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

                      {/* Expandable Accordion Body */}
                      <div
                        className={cn(
                          'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        <div className='overflow-hidden'>
                          <p className='pt-3 pb-2 font-inter text-[15px] leading-relaxed text-neutral-600'>
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
