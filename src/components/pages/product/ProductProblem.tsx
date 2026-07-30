'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { productProblem } from './product.data';

/**
 * "Why this exists" section — sits right after the hero, before Platform.
 * Frames the problem (blind spots, slow response, no evidence) before the
 * feature sections below start answering it. Right side reuses the same
 * click-to-play video facade as Dashboard, falling back to a poster photo
 * until `productProblem.videoId` is set.
 */
export function ProductProblem() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = productProblem.videoId.length > 0;

  return (
    <section className='bg-panel py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <div className='flex items-center gap-16 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-10'>
          <Reveal className='max-w-[480px] flex-none max-[1100px]:max-w-none'>
            <Eyebrow variant='blue' className='mb-6 w-fit'>
              {productProblem.eyebrow}
            </Eyebrow>
            <h2 className='mb-5 font-satoshi text-[36px] font-medium leading-[1.25] tracking-[-.5px] text-t-primary max-[860px]:text-[26px]'>
              {productProblem.title}
            </h2>
            <p className='mb-8 font-geist text-base leading-[1.6] text-t-dim'>
              {productProblem.body}
            </p>

            <ul className='mb-8 flex flex-col gap-5'>
              {productProblem.points.map((point) => (
                <li key={point.title} className='flex gap-3.5'>
                  <span className='mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-amber' />
                  <div>
                    <p className='font-geist text-[15px] font-medium text-t-bright'>
                      {point.title}
                    </p>
                    <p className='font-inter text-sm leading-[1.5] text-t-muted'>
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className='border-l-2 border-blue pl-4 font-geist text-[15px] leading-[1.6] text-t-primary'>
              {productProblem.closing}
            </p>
          </Reveal>

          <Reveal className='w-full flex-1'>
            <div className='relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-btn'>
              {hasVideo && playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${productProblem.videoId}?autoplay=1`}
                  title={productProblem.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='absolute inset-0 h-full w-full'
                />
              ) : (
                <>
                  <Image
                    src={productProblem.poster.src}
                    alt={productProblem.poster.alt}
                    fill
                    sizes='(max-width: 1100px) 100vw, 55vw'
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent' />

                  <button
                    type='button'
                    onClick={() => hasVideo && setPlaying(true)}
                    aria-label={hasVideo ? 'Play video' : 'Video coming soon'}
                    disabled={!hasVideo}
                    className={cn(
                      'absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-btn transition-transform',
                      hasVideo
                        ? 'cursor-pointer hover:scale-105'
                        : 'cursor-default opacity-90',
                    )}
                  >
                    <svg
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-6 w-6 translate-x-0.5'
                    >
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </button>

                  {!hasVideo && (
                    <span className='absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-xs text-white'>
                      Video coming soon
                    </span>
                  )}
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
