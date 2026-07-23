'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { dashboardContent } from './dashboard.data';

/**
 * "See It In Action" section — header + description on the left, a
 * click-to-play YouTube video card on the right. Sits right after Features.
 *
 * Uses the standard "facade" pattern for YouTube embeds: a static poster
 * image + play button render until clicked, and only then does the actual
 * `<iframe>` mount — avoids loading YouTube's player JS on every page view.
 * If `dashboardContent.videoId` is empty, the button is disabled and a
 * "coming soon" badge shows instead of wiring up a wrong/placeholder video.
 */
export function Dashboard() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = dashboardContent.videoId.length > 0;

  return (
    <section className='pt-[110px] pb-60 max-[1100px]:pb-40 max-[1100px]:pt-20 max-[860px]:pb-24 max-[860px]:pt-14 max-[500px]:pb-16 bg-panel'>
      <div className='wrap'>
        <div className='flex items-center gap-16 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-10'>
          <Reveal className='max-w-[420px] flex-none max-[1100px]:max-w-none'>
            <Eyebrow variant='blue' className='mb-[26px]'>
              {dashboardContent.eyebrow}
            </Eyebrow>
            <h2 className='mb-5 font-satoshi text-[36px] font-medium leading-[1.25] tracking-[-.5px] text-t-primary max-[860px]:text-[26px]'>
              {dashboardContent.title}
            </h2>
            <p className='font-geist text-base leading-[1.55] text-t-dim'>
              {dashboardContent.body}
            </p>
          </Reveal>

          <Reveal className='w-full flex-1'>
            <div className='relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-btn'>
              {hasVideo && playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${dashboardContent.videoId}?autoplay=1`}
                  title={dashboardContent.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='absolute inset-0 h-full w-full'
                />
              ) : (
                <>
                  <Image
                    src={dashboardContent.poster.src}
                    alt=''
                    fill
                    sizes='(max-width: 1100px) 100vw, 55vw'
                    className='object-cover opacity-60'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

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
