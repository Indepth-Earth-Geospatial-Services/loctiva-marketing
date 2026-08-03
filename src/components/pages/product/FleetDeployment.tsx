import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { fleetDeployment } from './product.data';

type FleetStatus = (typeof fleetDeployment.fleet)[number]['status'];

/** Presentation-only status styling — not content, so it stays out of product.data.ts. */
const STATUS_META: Record<FleetStatus, { label: string; dot: string; text: string }> = {
  active: { label: 'Active', dot: 'bg-emerald-500', text: 'text-emerald-600' },
  charging: { label: 'Charging', dot: 'bg-amber', text: 'text-amber' },
  standby: { label: 'Standby', dot: 'bg-t-faint', text: 'text-t-muted' },
  deploying: { label: 'Deploying', dot: 'bg-blue animate-pulse', text: 'text-blue' },
};

/**
 * Fleet-roster dashboard card — deliberately UI, not a photo, for visual
 * variety against the photo/map-heavy sections above. Drone IDs and
 * locations reuse the same fleet named in Live Command View so the page
 * reads as one consistent fleet, not disconnected mockups.
 */
export function FleetDeployment() {
  return (
    <section className='py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <div className='grid grid-cols-[1fr_1.15fr] items-center gap-16 max-[1100px]:grid-cols-1 max-[1100px]:gap-10'>
          <Reveal>
            <Eyebrow variant='blue' className='mb-6 w-fit'>
              {fleetDeployment.eyebrow}
            </Eyebrow>
            <h2 className='mb-5 font-satoshi text-[36px] font-medium leading-[1.25] tracking-[-.5px] text-t-primary max-[860px]:text-[26px]'>
              {fleetDeployment.title}
            </h2>
            <p className='mb-9 font-geist text-base leading-[1.6] text-t-dim'>
              {fleetDeployment.body}
            </p>

            <ul className='flex flex-col gap-5'>
              {fleetDeployment.points.map((point) => (
                <li key={point.title} className='flex gap-3.5'>
                  <span className='mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-blue' />
                  <div>
                    <p className='font-geist text-[15px] font-medium text-t-bright'>
                      {point.title}
                    </p>
                    <p className='font-inter text-sm leading-[1.5] text-t-muted'>{point.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className='w-full'>
            <div className='overflow-hidden rounded-2xl border border-border bg-panel'>
              <div className='flex items-center justify-between border-b border-border bg-bg px-6 py-4'>
                <span className='font-mono text-xs uppercase tracking-[.08em] text-t-muted'>
                  Fleet Roster
                </span>
                <span className='rounded-full border border-border px-3 py-1 font-mono text-xs font-medium text-t-bright'>
                  {fleetDeployment.deployTime.value} {fleetDeployment.deployTime.label}
                </span>
              </div>

              <div className='divide-y divide-border'>
                {fleetDeployment.fleet.map((drone) => {
                  const meta = STATUS_META[drone.status];
                  return (
                    <div
                      key={drone.id}
                      className='flex items-center justify-between gap-4 px-6 py-4 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-3'
                    >
                      <div className='flex items-center gap-3'>
                        <span className={cn('h-2 w-2 flex-none rounded-full', meta.dot)} />
                        <div>
                          <p className='font-mono text-sm font-medium text-t-bright'>
                            {drone.id}
                          </p>
                          <p className='font-inter text-xs text-t-muted'>{drone.location}</p>
                        </div>
                      </div>

                      <div className='flex items-center gap-3'>
                        <span className={cn('font-mono text-xs', meta.text)}>{meta.label}</span>
                        <div className='h-1.5 w-16 overflow-hidden rounded-full bg-border'>
                          <div
                            className='h-full rounded-full bg-blue'
                            style={{ width: `${drone.battery}%` }}
                          />
                        </div>
                        <span className='w-9 text-right font-mono text-xs text-t-muted'>
                          {drone.battery}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
