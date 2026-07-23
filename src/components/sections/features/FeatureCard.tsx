import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import type { FeatureCardItem } from './features.data';

/**
 * Single feature entry — plain image + text pair, no card border/background,
 * matching a simple editorial layout (image left, title/body/link right, a
 * link instead of a button). Stacks vertically below 500px. Wrapped in
 * Reveal for the same scroll fade-up used everywhere else on the site.
 */
export function FeatureCard({ image, title, body, cta }: FeatureCardItem) {
  return (
    <Reveal as='article' className='flex gap-6 max-[500px]:flex-col rounded-lg'>
      <div className='relative aspect-[4/3] w-2/5 flex-none overflow-hidden max-[500px]:w-full'>
        <Image
          src={image.src}
          alt=''
          fill
          sizes='(max-width: 500px) 100vw, (max-width: 1100px) 45vw, 22vw'
          className='object-cover'
        />
      </div>

      <div className='flex min-w-0 flex-1 flex-col justify-center'>
        <h3 className='mb-2 font-geist text-base font-medium text-t-bright'>
          {title}
        </h3>
        <p className='mb-3 font-inter text-[13px] leading-[1.55] text-t-faint'>
          {body}
        </p>
        <a
          href='#'
          className="inline-flex w-fit items-center gap-2 font-inter text-[14px] font-medium text-t-bright after:text-blue-light after:content-['→']"
        >
          {cta}
        </a>
      </div>
    </Reveal>
  );
}
