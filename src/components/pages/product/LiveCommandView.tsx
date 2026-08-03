import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { liveCommandView } from './product.data';

/** HUD-style corner brackets rendered on top of each feed tile. */
const CORNERS = [
  'left-3 top-3 border-l border-t',
  'right-3 top-3 border-r border-t',
  'left-3 bottom-3 border-l border-b',
  'right-3 bottom-3 border-r border-b',
];

/**
 * Dark showcase band for live multi-drone streaming — a second cinematic
 * band (matching the Hero's dark family, one shade lighter) so the "watch
 * everything at once" pitch gets a real visual instead of another text block.
 * Feed tiles use existing site photos as stand-ins for live video; swap the
 * `image` field per feed in product.data.ts once real captures exist.
 */
export function LiveCommandView() {
  return (
    <section className='bg-[#0a0e16] py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <Reveal className='mx-auto mb-14 max-w-[640px] text-center'>
          <Eyebrow variant='blue' className='mx-auto mb-6 w-fit'>
            {liveCommandView.eyebrow}
          </Eyebrow>
          <h2 className='mb-4 text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.2] tracking-[-.5px] text-white'>
            {liveCommandView.title}
          </h2>
          <p className='font-inter text-lg leading-[1.6] text-white/70 max-[860px]:text-base'>
            {liveCommandView.subtitle}
          </p>
        </Reveal>

        <Reveal>
          <div className='grid grid-cols-2 gap-4 max-[640px]:grid-cols-1'>
            {liveCommandView.feeds.map((feed) => (
              <div
                key={feed.id}
                className='group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black'
              >
                <Image
                  src={feed.image.src}
                  alt={feed.image.alt}
                  fill
                  sizes='(max-width: 640px) 100vw, 50vw'
                  className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30' />

                {CORNERS.map((pos) => (
                  <span
                    key={pos}
                    className={`pointer-events-none absolute h-4 w-4 border-white/40 ${pos}`}
                  />
                ))}

                <div className='absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm'>
                  <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-red-500' />
                  <span className='font-mono text-[11px] font-medium uppercase tracking-[.08em] text-white'>
                    Live
                  </span>
                </div>

                <p className='absolute bottom-4 left-4 font-mono text-xs text-white/85'>
                  {feed.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className='mt-10 flex flex-wrap justify-center gap-3'>
          {liveCommandView.stats.map((stat) => (
            <div
              key={stat.label}
              className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs'
            >
              <span className='text-white'>{stat.value}</span>
              <span className='text-white/50'>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
