'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { heroCtas, heroSlides } from './hero.data';

const AUTOPLAY_MS = 6500;

/**
 * Full-bleed hero carousel — each slide pairs a backdrop photo with the
 * capability it evokes (port of the dji.enterprise.com hero pattern: dark
 * gradient over a photo, pill CTAs, arrow + dot nav). Renders as its own
 * dark cinematic band — a deliberate contrast against the light body below,
 * not a site-wide dark mode.
 */
export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => {
    setActive((i + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduce) return;

    const id = setInterval(() => go(active + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, go]);

  return (
    <section
      className='relative min-h-dvh overflow-hidden bg-[#05070d]'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        // Only resume autoplay once focus actually leaves the whole carousel
        // (not just moving between two of its own buttons).
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {/* Slide backgrounds — crossfaded photos under a dark legibility gradient */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image.src}
          aria-hidden={i !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            i === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            fill
            priority={i === 0}
            sizes='100vw'
            style={{ objectPosition: slide.imagePosition }}
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#05070d] via-[#05070d]/70 to-[#05070d]/10' />
          <div className='absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-[#05070d]/30' />
        </div>
      ))}

      {/* Top scrim — keeps the navbar legible over any slide, even a bright sky */}
      <div className='absolute inset-x-0 top-0 z-[1] h-44 bg-gradient-to-b from-[#05070d]/80 to-transparent' />

      {/* Announces slide changes to screen readers without visually duplicating the heading */}
      <p aria-live='polite' className='sr-only'>
        Slide {active + 1} of {heroSlides.length}: {heroSlides[active].headline.join(' ')}
      </p>

      {/* Content */}
      <div className='relative z-10 mx-auto flex min-h-dvh max-w-wrap items-center px-6 max-[860px]:px-5'>
        <div key={active} className='reveal in max-w-[620px]'>
          <span className='mb-4 block font-mono text-sm uppercase tracking-[.07em] text-blue-light'>
            {heroSlides[active].eyebrow}
          </span>

          <h1 className='mb-[18px] text-[clamp(38px,3.4vw,54px)] font-bold leading-[1.18] tracking-[-.5px] text-white max-[860px]:text-[32px]'>
            {heroSlides[active].headline[0]}
            <br />
            {heroSlides[active].headline[1]}
          </h1>

          <p className='mb-9 max-w-[540px] font-inter text-lg leading-[1.5] text-white/80 max-[860px]:text-base'>
            {heroSlides[active].subhead}
          </p>

          <div className='flex flex-wrap gap-4 max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-3.5'>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-mono text-base font-medium text-[#05070d] transition-transform active:scale-[0.98]'
            >
              {heroCtas.primaryCta}
            </a>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 font-mono text-base font-medium text-white transition-colors hover:bg-white/10 active:scale-[0.98]'
            >
              {heroCtas.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Arrow nav */}
      <button
        type='button'
        aria-label='Previous slide'
        onClick={() => go(active - 1)}
        className='absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white max-[860px]:hidden'
      >
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          className='h-5 w-5'
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
        aria-label='Next slide'
        onClick={() => go(active + 1)}
        className='absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white max-[860px]:hidden'
      >
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          className='h-5 w-5'
        >
          <path d='M9 5l7 7-7 7' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </button>

      {/* Dot nav */}
      <div className='absolute inset-x-0 bottom-7 z-10 flex justify-center gap-2'>
        {heroSlides.map((slide, i) => (
          <button
            key={slide.image.src}
            type='button'
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => go(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === active
                ? 'w-7 bg-white'
                : 'w-1.5 bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  );
}
