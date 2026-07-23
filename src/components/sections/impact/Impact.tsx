import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { impactContent } from './impact.data';

/**
 * "Impact Across Every Layer" section (id="impact" — the "Pricing" nav target).
 * Text block on the left with an absolutely-positioned planet image bleeding
 * off the right on desktop; stacks vertically and centers the planet on mobile.
 * A soft blue glow sits behind the planet for depth, and a short capability
 * checklist (restating what Splits/Platform already cover — no new claims)
 * gives the text column more visual texture between the body copy and CTAs.
 * Port of `.impact`.
 */
export function Impact() {
  return (
    <section
      id='impact'
      className='overflow-hidden bg-panel-2 pt-[30px] pb-16 max-[860px]:pb-12 max-[860px]:pt-12'
    >
      <div className='wrap'>
        <div className='relative flex min-h-[620px] items-center max-[860px]:min-h-0 max-[860px]:flex-col max-[860px]:items-start'>
          <Reveal className='relative z-[2] max-w-[563px]'>
            <Eyebrow className='mb-[26px]'>{impactContent.eyebrow}</Eyebrow>

            <h2 className='mb-6 font-geist text-[44px] font-semibold leading-[1.09] tracking-[-.44px] text-t-bright max-[860px]:text-[30px] max-[430px]:text-[26px]'>
              {impactContent.title.map((line, i) => (
                <span key={i}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>

            <p className='mb-7 font-inter text-xl leading-[1.4] text-t-bright max-[860px]:text-[17px]'>
              {impactContent.body}
            </p>

            <ul className='mb-9 flex flex-col gap-3'>
              {impactContent.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className='flex items-center gap-3 font-inter text-[15px] text-t-primary'
                >
                  <span className='flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue/10 text-blue'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2.5}
                      className='h-3 w-3'
                    >
                      <path
                        d='M5 13l4 4L19 7'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className='flex flex-wrap gap-4 max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-3.5'>
              <Button>{impactContent.primaryCta}</Button>
              <Button variant='ghost'>{impactContent.secondaryCta}</Button>
            </div>
          </Reveal>

          <div className='absolute right-20 top-1/2 z-[1] w-[760px] -translate-y-[58%] max-[860px]:static max-[860px]:mx-auto max-[860px]:mt-7 max-[860px]:w-full max-[860px]:max-w-[380px] max-[860px]:translate-y-0'>
            {/* Soft glow behind the planet — pure decoration, no layout impact */}
            <div className='pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue/20 blur-[100px]' />
            <Reveal>
              <Image
                src='/landing/planet.png'
                alt=''
                width={1351}
                height={1120}
                sizes='(max-width: 860px) 380px, 760px'
                className='h-auto w-full drop-shadow-[0_40px_80px_rgba(0,125,252,0.15)]'
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
