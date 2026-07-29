import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { CapabilityIcon } from './CapabilityIcon';
import { capabilities, capabilitiesHeading } from './product.data';

/**
 * Deeper capability breakdown — expands the footer's "Capabilities" column
 * (previously just 8 undescribed link labels) into a proper grid with
 * icons and descriptions. No top padding of its own: the `Platform`
 * section right above already carries generous bottom padding
 * (`py-[234px]`), so this avoids doubling that gap up.
 */
export function CapabilityGrid() {
  return (
    <section className='pb-24 max-[1100px]:pb-16'>
      <div className='wrap'>
        <Reveal className='mx-auto mb-14 max-w-[620px] text-center'>
          <Eyebrow variant='blue' className='mx-auto mb-[26px] w-fit'>
            {capabilitiesHeading.eyebrow}
          </Eyebrow>
          <h2 className='mb-4 font-satoshi text-[32px] font-medium leading-[1.3] tracking-[-.5px] text-t-primary max-[860px]:text-2xl'>
            {capabilitiesHeading.title}
          </h2>
          <p className='font-geist text-base leading-[1.5] text-t-dim max-[860px]:text-[15px]'>
            {capabilitiesHeading.subtitle}
          </p>
        </Reveal>

        <div className='grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1'>
          {capabilities.map((item) => (
            <Reveal
              key={item.id}
              as='article'
              className='flex flex-col rounded-[18px] border border-border bg-panel p-6'
            >
              <div className='mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue'>
                <CapabilityIcon name={item.icon} className='h-[22px] w-[22px]' />
              </div>
              <h3 className='mb-2 font-geist text-[15px] font-medium leading-[1.3] text-t-bright'>
                {item.title}
              </h3>
              <p className='font-inter text-[13px] leading-[1.5] text-t-muted'>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
