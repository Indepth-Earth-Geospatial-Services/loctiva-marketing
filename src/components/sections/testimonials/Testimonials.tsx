'use client';

import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials, testimonialsEyebrow, testimonialsHeading } from './testimonials.data';

const AUTOPLAY_MS = 6000;
const TILE_WINDOW = 3;

/**
 * Testimonials section — a colored card, width-matched to the rest of the
 * page's `wrap` content column, with a sidebar of industry tiles + arrow nav
 * on the left and a large quote with bottom-right attribution on the right.
 * Company logos in the reference design become industry tiles here since
 * we're intentionally not using invented company names.
 *
 * The tile row shows a fixed group of 3 testimonials at a time (testimonials
 * 0-2, then 3-4-0, etc. — `windowStart` only advances once `active` crosses
 * a group boundary). Within a group the tiles never move or resize; only
 * the highlighted (active) tile's color changes via `transition-colors`, so
 * the highlight visibly steps 1 → 2 → 3 before the next group swaps in.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = testimonials.length;

  const go = useCallback(
    (i: number) => setActive(((i % length) + length) % length),
    [length],
  );

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduce) return;

    const id = setInterval(() => go(active + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, go]);

  const item = testimonials[active];
  const visibleCount = Math.min(TILE_WINDOW, length);
  const windowStart = Math.floor(active / visibleCount) * visibleCount;
  const tileWindow = Array.from(
    { length: visibleCount },
    (_, i) => (windowStart + i) % length,
  );

  return (
    <section className='flex min-h-dvh flex-col justify-center pt-[120px] pb-[120px] max-[1100px]:pt-20 max-[1100px]:pb-20 max-[860px]:pt-14 max-[860px]:pb-14'>
      <SectionHeading
        title={testimonialsHeading.title}
        subtitle={testimonialsHeading.subtitle}
      />

      <div className='wrap mt-14 max-[860px]:mt-10'>
        <div
          className='relative rounded-[28px] bg-slate-500/50 px-8 py-12 md:px-14 md:py-16'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div className='grid gap-10 md:grid-cols-[220px_1fr] md:gap-16'>
            {/* Sidebar — label, tile row, arrow nav. Below md, shown after the quote. */}
            <div className='order-2 flex flex-col md:order-none'>
              <p className='font-mono text-xs uppercase leading-[1.4] tracking-[.07em] text-t-primary/70'>
                {testimonialsEyebrow}
              </p>

              <div className='mt-6 flex gap-3 md:flex-col'>
                {tileWindow.map((tileIndex) => {
                  const tile = testimonials[tileIndex];
                  const isActive = tileIndex === active;
                  return (
                    <button
                      key={tile.id}
                      type='button'
                      onClick={() => go(tileIndex)}
                      aria-current={isActive}
                      aria-label={`Show testimonial for ${tile.industry}`}
                      className={cn(
                        'flex h-20 flex-1 items-center justify-center rounded-xl px-2 text-center font-geist text-[11px] font-semibold leading-tight transition-colors duration-300 md:h-24 md:w-full md:flex-none',
                        isActive
                          ? 'bg-btn text-btn-fg'
                          : 'border border-t-primary/25 bg-transparent text-t-primary/80 hover:border-t-primary/50',
                      )}
                    >
                      {tile.tileLabel}
                    </button>
                  );
                })}
              </div>

              <div className='mt-6 hidden gap-3 md:flex'>
                <button
                  type='button'
                  aria-label='Previous testimonial'
                  onClick={() => go(active - 1)}
                  className='flex h-11 w-11 items-center justify-center rounded-xl border border-t-primary/25 text-t-primary transition-colors hover:border-t-primary/50 hover:bg-t-primary/5'
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    className='h-4 w-4'
                  >
                    <path
                      d='M15 5l-7 7 7 7'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
                <button
                  type='button'
                  aria-label='Next testimonial'
                  onClick={() => go(active + 1)}
                  className='flex h-11 w-11 items-center justify-center rounded-xl border border-t-primary/25 text-t-primary transition-colors hover:border-t-primary/50 hover:bg-t-primary/5'
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    className='h-4 w-4'
                  >
                    <path
                      d='M9 5l7 7-7 7'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quote + attribution — shown first on mobile, ahead of the sidebar. */}
            <div className='order-1 flex min-h-[260px] flex-col justify-between max-[860px]:min-h-0 md:order-none'>
              <div key={item.id} className='reveal in'>
                <blockquote className='font-satoshi text-[28px] font-medium leading-[1.35] tracking-[-.3px] text-t-primary max-[860px]:text-2xl'>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className='mt-10 self-end text-right'>
                <p className='font-geist text-base font-semibold text-t-primary'>
                  {item.role}
                </p>
                <span className='mt-2 inline-flex items-center rounded-full bg-btn px-3 py-1 font-mono text-[11px] text-btn-fg'>
                  {item.industry}
                </span>
              </div>
            </div>
          </div>

          <p aria-live='polite' className='sr-only'>
            Testimonial {active + 1} of {length}: {item.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
