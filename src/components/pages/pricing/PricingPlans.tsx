import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { pricingHeading, pricingTiers } from './pricing.data';

function CheckIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2.5}
      className='h-3 w-3'
    >
      <path d='M5 13l4 4L19 7' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

/**
 * Pricing page body — header + a 4-up tier grid. No prices anywhere by
 * design: every tier ends in "Contact Sales" since deployments are scoped
 * and quoted per site/sensor count rather than sold self-serve.
 */
export function PricingPlans() {
  return (
    <section className='pb-24 pt-40 max-[1100px]:pt-28 max-[860px]:pt-24'>
      <div className='wrap'>
        <Reveal className='mx-auto mb-16 max-w-[680px] text-center'>
          <Eyebrow variant='blue' className='mx-auto mb-6 w-fit'>
            {pricingHeading.eyebrow}
          </Eyebrow>
          <h1 className='mb-5 font-satoshi text-[40px] font-medium leading-[1.25] tracking-[-.5px] text-t-primary max-[860px]:text-[28px]'>
            {pricingHeading.title}
          </h1>
          <p className='font-geist text-lg leading-[1.5] text-t-dim max-[860px]:text-base'>
            {pricingHeading.subtitle}
          </p>
        </Reveal>

        <div className='grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1'>
          {pricingTiers.map((tier) => (
            <Reveal
              key={tier.id}
              as='article'
              className={
                tier.recommended
                  ? 'relative flex flex-col rounded-[18px] border-2 border-blue bg-panel p-7'
                  : 'relative flex flex-col rounded-[18px] border border-border bg-panel p-7'
              }
            >
              {tier.recommended && (
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue px-3 py-1 font-mono text-[11px] font-medium text-white'>
                  Recommended
                </span>
              )}

              <h3 className='mb-1.5 font-geist text-xl font-semibold text-t-bright'>
                {tier.name}
              </h3>
              <p className='mb-5 font-inter text-[13.5px] leading-[1.5] text-t-muted'>
                {tier.tagline}
              </p>

              <p className='mb-6 font-mono text-sm uppercase tracking-[.05em] text-blue'>
                {tier.priceLabel}
              </p>

              <ul className='mb-7 flex flex-1 flex-col gap-3'>
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-2.5 font-inter text-[13.5px] leading-[1.4] text-t-primary'
                  >
                    <span className='mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-blue/10 text-blue'>
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.recommended ? 'solid' : 'ghost'}
                className='w-full justify-center'
              >
                {tier.cta}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
