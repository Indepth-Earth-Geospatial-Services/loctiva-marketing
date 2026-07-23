'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { industries, industriesHeading } from './industries.data';

const AUTOPLAY_MS = 4000;

type Tier = 'desktop' | 'mobile';

interface TierConfig {
  cardW: number;
  cardH: number;
  /** Constant edge-to-edge gap between adjacent cards, regardless of their (different) scaled sizes. */
  gap: number;
  /** How many slides to show on each side of the active (center) one. */
  radius: number;
}

const TIER_CONFIG: Record<Tier, TierConfig> = {
  desktop: { cardW: 340, cardH: 380, gap: 28, radius: 2 },
  mobile: { cardW: 190, cardH: 133, gap: 16, radius: 1 },
};

/**
 * Scale per absolute distance from the active (center) slide — this is what
 * makes card 2/4 smaller than card 3 and card 1/5 smaller still. `0` is the
 * center card's own scale relative to `cardW`/`cardH` above (1 = full
 * size); `1` and `2` are its immediate and outer neighbors. To make the
 * neighbors closer in size to the center, raise these toward 1; to make
 * them shrink more dramatically, lower them.
 */
const SCALE_BY_ABS_OFFSET: Record<number, number> = { 0: 1, 1: 0.72, 2: 0.5 };
const OPACITY_BY_ABS_OFFSET: Record<number, number> = {
  0: 1,
  1: 0.85,
  2: 0.45,
};

/** Distance (px) from center to a card at `offset`, keeping edge-to-edge gaps constant. */
function slideOffsetX(offset: number, cardW: number, gap: number): number {
  const sign = Math.sign(offset);
  const dist = Math.abs(offset);
  let x = 0;
  let prevHalf = (cardW * (SCALE_BY_ABS_OFFSET[0] ?? 1)) / 2;
  for (let d = 1; d <= dist; d++) {
    const half = (cardW * (SCALE_BY_ABS_OFFSET[d] ?? 0.4)) / 2;
    x += prevHalf + gap + half;
    prevHalf = half;
  }
  return x * sign;
}

function useTier(): Tier {
  const [tier, setTier] = useState<Tier>('desktop');
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const update = () => setTier(mq.matches ? 'mobile' : 'desktop');
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return tier;
}

/**
 * "Built for Every Critical Environment" — a coverflow-style carousel: the
 * active industry renders large and centered, its neighbors shrink and dim
 * going outward, all sharing one vertical/horizontal center point, with
 * equal edge-to-edge gaps between every card (computed from each card's
 * actual scaled width, not a constant center-to-center spacing).
 *
 * All slides stay mounted at all times, absolutely positioned on a
 * fixed-size stage and animated purely via `transform`/`opacity` — no
 * mount/unmount churn, so nothing around the carousel reflows as the active
 * slide changes. Prev/next arrows sit at the stage's left/right edge,
 * vertically centered on the same point the cards are, matching the Hero
 * carousel's arrow placement. Reuses existing platform screenshots/photos
 * rather than stock imagery. Autoplay pauses on hover/focus.
 *
 * Sits on `bg-panel` (the site's soft off-white token, also used for the
 * Trust cards) with generous vertical padding — both the section above and
 * below are plain white, so a same-white band here would read as no
 * section break at all.
 */
export function Industries() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = industries.length;
  const tier = useTier();
  const cfg = TIER_CONFIG[tier];

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

  const edgeHalf = (cfg.cardW * (SCALE_BY_ABS_OFFSET[cfg.radius] ?? 0.4)) / 2;
  const edgeX = slideOffsetX(cfg.radius, cfg.cardW, cfg.gap);
  const stageWidth = 2 * (edgeX + edgeHalf) + 96;
  const stageHeight = cfg.cardH + 44;

  return (
    <section className='bg-panel py-24 max-[1100px]:py-20 max-[860px]:py-14'>
      <div className='wrap'>
        <div className='mx-auto max-w-[720px] text-center'>
          <h2 className='mb-7 max-w-[963px] font-satoshi text-[44px] font-medium leading-[1.34] tracking-[-.5px] text-t-primary max-[860px]:text-[30px] max-[430px]:text-[26px]'>
            {industriesHeading.title.map((line, i) => (
              <span key={i}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h2>
          <p className='mx-auto max-w-[622px] font-geist text-lg leading-[1.22] text-t-primary max-[860px]:text-base'>
            {industriesHeading.subtitle}
          </p>
        </div>

        <div
          className='relative mt-16 max-[640px]:mt-12'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          {/* Fixed-size stage — size never changes as `active` changes, so nothing around it reflows. */}
          <div
            className='relative mx-auto'
            style={{ width: stageWidth, height: stageHeight, maxWidth: '100%' }}
          >
            {industries.map((industry, i) => {
              let offset = i - active;
              if (offset > length / 2) offset -= length;
              if (offset < -length / 2) offset += length;
              const absOffset = Math.abs(offset);
              const inRange = absOffset <= cfg.radius;
              const scale = SCALE_BY_ABS_OFFSET[absOffset] ?? 0.4;
              const opacity = inRange ? OPACITY_BY_ABS_OFFSET[absOffset] : 0;
              const x = slideOffsetX(offset, cfg.cardW, cfg.gap);

              return (
                <button
                  key={industry.id}
                  type='button'
                  onClick={() => go(i)}
                  aria-current={absOffset === 0}
                  aria-label={`Show ${industry.title}`}
                  tabIndex={inRange ? 0 : -1}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), -50%) scale(${scale})`,
                    opacity,
                    zIndex: 10 - absOffset,
                    pointerEvents: inRange ? 'auto' : 'none',
                  }}
                  className='absolute left-1/2 top-1/2 flex flex-col items-center gap-3 transition-[transform,opacity] duration-500 ease-out'
                >
                  <span
                    className='relative overflow-hidden rounded-2xl'
                    style={{ width: cfg.cardW, height: cfg.cardH }}
                  >
                    <Image
                      src={industry.image.src}
                      alt=''
                      fill
                      sizes='280px'
                      className='object-cover'
                    />
                  </span>
                  <span className='whitespace-nowrap font-geist text-base font-medium text-t-primary'>
                    {industry.title}
                  </span>
                </button>
              );
            })}

            <button
              type='button'
              aria-label='Previous industry'
              onClick={() => go(active - 1)}
              className='absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-t-muted backdrop-blur-sm transition-colors hover:border-blue/40 hover:text-blue'
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
              aria-label='Next industry'
              onClick={() => go(active + 1)}
              className='absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-t-muted backdrop-blur-sm transition-colors hover:border-blue/40 hover:text-blue'
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

          <p aria-live='polite' className='sr-only'>
            Showing {industries[active].title}
          </p>
        </div>
      </div>
    </section>
  );
}
