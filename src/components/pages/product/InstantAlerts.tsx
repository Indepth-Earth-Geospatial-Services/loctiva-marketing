import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { instantAlerts } from './product.data';

type Severity = (typeof instantAlerts.notifications)[number]['severity'];

const SEVERITY_DOT: Record<Severity, string> = {
  critical: 'bg-red-500',
  warning: 'bg-amber',
  info: 'bg-blue',
};

/**
 * Lock-screen mockup showing live push notifications — makes "you'll know
 * instantly" concrete and personal instead of describing it in prose, and
 * doubles as the section's direct appeal to the "feel safe" brief (an alert
 * reaching an actual phone, not just a dashboard).
 */
export function InstantAlerts() {
  return (
    <section className='bg-[#0a0e16] py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <div className='grid grid-cols-[1.05fr_1fr] items-center gap-16 max-[1100px]:grid-cols-1 max-[1100px]:gap-14'>
          <Reveal>
            <Eyebrow variant='blue' className='mb-6 w-fit'>
              {instantAlerts.eyebrow}
            </Eyebrow>
            <h2 className='mb-5 text-[clamp(28px,3.2vw,36px)] font-bold leading-[1.25] tracking-[-.5px] text-white'>
              {instantAlerts.title}
            </h2>
            <p className='mb-9 font-inter text-base leading-[1.6] text-white/70'>
              {instantAlerts.body}
            </p>

            <ul className='flex flex-col gap-5'>
              {instantAlerts.points.map((point) => (
                <li key={point.title} className='flex gap-3.5'>
                  <span className='mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-cta' />
                  <div>
                    <p className='font-geist text-[15px] font-medium text-white'>{point.title}</p>
                    <p className='font-inter text-sm leading-[1.5] text-white/60'>{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className='flex justify-center'>
            <div className='relative w-[280px] rounded-[44px] border-[10px] border-black bg-black shadow-2xl'>
              <span className='absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black' />
              <div className='relative aspect-[9/19.5] overflow-hidden rounded-[34px] bg-gradient-to-b from-[#1a2236] to-[#05070d]'>
                <div className='pt-14 text-center'>
                  <p className='font-mono text-[40px] font-medium leading-none text-white'>
                    9:41
                  </p>
                  <p className='mt-2 font-mono text-xs text-white/50'>Tuesday, July 30</p>
                </div>

                <div className='mt-8 flex flex-col gap-2.5 px-3'>
                  {instantAlerts.notifications.map((n) => (
                    <div
                      key={n.id}
                      className='rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md'
                    >
                      <div className='flex items-center gap-2'>
                        <span
                          className={cn('h-1.5 w-1.5 rounded-full', SEVERITY_DOT[n.severity])}
                        />
                        <span className='font-mono text-[10px] uppercase tracking-[.06em] text-white/50'>
                          Loctiva · now
                        </span>
                      </div>
                      <p className='mt-1 font-geist text-[13px] font-semibold text-white'>
                        {n.title}
                      </p>
                      <p className='font-inter text-[12px] leading-[1.4] text-white/70'>
                        {n.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
