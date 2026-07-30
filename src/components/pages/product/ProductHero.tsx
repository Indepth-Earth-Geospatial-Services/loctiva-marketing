import Image from 'next/image';
import { productHeading } from './product.data';

/**
 * Full-bleed autoplay-video hero (dji.enterprise.com pattern) — dark
 * legibility gradient over a background video, centered text, scroll cue.
 * No `videoSrc` is set yet, so this renders the poster photo as a static
 * background; drop a file path into `productHeading.videoSrc` later and the
 * <video> element below takes over with no other changes.
 */
export function ProductHero() {
  const { videoSrc, poster } = productHeading;

  return (
    <section className='relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#05070d]'>
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster.src}
          className='absolute inset-0 h-full w-full object-cover'
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      ) : (
        <Image
          src={poster.src}
          alt={poster.alt}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
      )}

      <div className='absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/60 to-[#05070d]/30' />
      <div className='absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#05070d]/80 to-transparent' />

      <div className='relative z-10 mx-auto max-w-[720px] px-6 text-center'>
        <span className='mb-4 block font-mono text-sm uppercase tracking-[.07em] text-blue-light'>
          {productHeading.eyebrow}
        </span>
        <h1 className='mb-5 text-[clamp(32px,4.5vw,54px)] font-bold leading-[1.18] tracking-[-.5px] text-white max-[860px]:text-[32px]'>
          {productHeading.title}
        </h1>
        <p className='mx-auto max-w-[560px] font-inter text-lg leading-[1.5] text-white/80 max-[860px]:text-base'>
          {productHeading.subtitle}
        </p>
      </div>

      <a
        href='#platform'
        aria-label='Scroll to platform overview'
        className='absolute bottom-8 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:bg-white/10 hover:text-white'
      >
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          className='h-5 w-5'
        >
          <path d='M12 5v14M5 12l7 7 7-7' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </a>
    </section>
  );
}
