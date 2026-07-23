import { Reveal } from '@/components/ui/Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/**
 * Centered section heading — port of the `.center-head` block. Reusable across
 * sections that lead with a centered title + supporting line. Wrapped in Reveal
 * so it fades up on scroll like the original `.center-head.reveal`.
 */
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className='wrap'>
      <Reveal className='mx-auto max-w-[720px] text-center'>
        <h2 className='mb-7 max-w-[963px] font-satoshi text-[44px] font-medium leading-[1.34] tracking-[-.5px] text-t-primary max-[860px]:text-[30px] max-[430px]:text-[26px]'>
          {title}
        </h2>
        {subtitle ? (
          <p className='mx-auto max-w-[622px] font-geist text-lg leading-[1.22] text-t-primary max-[860px]:text-base'>
            {subtitle}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}
