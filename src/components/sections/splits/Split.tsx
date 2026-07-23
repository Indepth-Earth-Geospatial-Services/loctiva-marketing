import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import type { SplitItem } from './splits.data';

interface SplitProps extends SplitItem {
  /** Media on the left, text on the right (port of `.split.rev`). */
  reversed?: boolean;
  /** Position in the stack — controls the sticky offset and stacking order. */
  index: number;
}

/** Vertical sliver (px) of each card left peeking above the next one that pins over it. */
const STACK_PEEK = 24;

/** Background per card — stays white for the first, then eases into soft neutrals so each card reads as a distinct layer without breaking from the page's white base. */
const CARD_BG = ['bg-bg', 'bg-panel', 'bg-panel-2'];

/**
 * Reusable text + image section — port of `.split`. Two flex columns on
 * desktop (391px text / media capped at 480px), stacked on tablet and below.
 * The `lead` flag adds the extra top padding of the first split; `reversed`
 * swaps sides via the `order` utility on each child.
 *
 * Cards pin via `position: sticky` with an increasing `top` offset per
 * `index`, so each later card slides up and covers the one before it,
 * leaving a `STACK_PEEK`-tall strip visible — then releases to normal
 * scroll once its own flow height runs out. Disabled below 860px, where
 * the sections just stack normally.
 */
export function Split({
  eyebrow,
  title,
  body,
  image,
  lead,
  reversed,
  index,
}: SplitProps) {
  return (
    <section
      className={cn(
        'sticky min-h-screen flex items-center',
        CARD_BG[index] ?? 'bg-bg',
        (index === 1 || index === 2) &&
          'rounded-t-3xl max-[860px]:rounded-t-none',
        'max-[860px]:static max-[860px]:min-h-0',
        'pt-[85px] max-[1100px]:pt-[90px] max-[860px]:pt-[72px]',
        lead && 'pt-[145px] max-[1100px]:pt-[110px] max-[860px]:pt-20',
      )}
      style={{ top: index * STACK_PEEK, zIndex: index + 1 }}
    >
      <div className='wrap w-full'>
        <div
          className={cn(
            'flex justify-between items-center gap-20',
            'max-[1100px]:flex-col max-[1100px]:justify-start max-[1100px]:gap-10',
            'max-[860px]:gap-7',
          )}
        >
          <Reveal
            className={cn(
              'w-[391px] flex-none',
              'max-[1100px]:w-full',
              reversed && 'order-2 max-[1100px]:order-none',
            )}
          >
            <Eyebrow variant='blue' className='mb-[26px]'>
              {eyebrow}
            </Eyebrow>
            <h2 className='mb-6 font-geist text-[32px] font-semibold leading-[1.25] text-t-primary max-[860px]:text-[28px] max-[430px]:text-2xl'>
              {title.map((line, i) => (
                <span key={i}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
            <p className='font-geist text-base leading-[1.5] text-t-dim max-[860px]:text-[15px]'>
              {body}
            </p>
          </Reveal>

          <Reveal
            className={cn(
              'min-w-0 max-w-[480px] flex-1',
              'min-[1440px]:max-w-[640px]',
              'max-[1100px]:w-full max-[1100px]:max-w-none',
              reversed && 'order-1 max-[1100px]:order-none',
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes='(max-width: 1100px) 100vw, (min-width: 1440px) 700px, 580px'
              className='h-auto w-full'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
