import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { precisionMapping } from './product.data';

const { waypoints, dronePosition, geofence } = precisionMapping.route;

const routePath = waypoints
  .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`)
  .join(' ');

const geofencePath = `${geofence.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')} Z`;

/**
 * Flight-planning showcase — an abstract wayline map (grid texture + SVG
 * route, not a photo) so it reads as real mission-planning UI rather than a
 * pin dropped on a stock photo. Dark band matching Live Command View's tone,
 * alternating with the light AI Detection section above it.
 */
export function PrecisionMapping() {
  return (
    <section className='bg-[#0a0e16] py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <Reveal className='mx-auto mb-14 max-w-[640px] text-center'>
          <Eyebrow variant='blue' className='mx-auto mb-6 w-fit'>
            {precisionMapping.eyebrow}
          </Eyebrow>
          <h2 className='mb-4 text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.2] tracking-[-.5px] text-white'>
            {precisionMapping.title}
          </h2>
          <p className='font-inter text-lg leading-[1.6] text-white/70 max-[860px]:text-base'>
            {precisionMapping.subtitle}
          </p>
        </Reveal>

        <Reveal>
          <div
            className='relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 max-[640px]:aspect-[4/3]'
            style={{
              backgroundColor: '#0d1220',
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          >
            <svg
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              className='absolute inset-0 h-full w-full'
              aria-hidden
            >
              <path
                d={geofencePath}
                fill='rgba(235,164,20,0.04)'
                stroke='rgba(235,164,20,0.5)'
                strokeWidth={0.3}
                strokeDasharray='1.4 1.2'
                vectorEffect='non-scaling-stroke'
              />
              <path
                d={routePath}
                fill='none'
                stroke='#007dfc'
                strokeWidth={0.5}
                strokeDasharray='2.2 1.6'
                strokeLinecap='round'
                vectorEffect='non-scaling-stroke'
              />
            </svg>

            <span className='absolute left-[8%] top-[2%] rounded-sm bg-amber px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[.04em] text-btn'>
              Geofence
            </span>

            {waypoints.map((wp, i) => (
              <div
                key={`${wp.x}-${wp.y}`}
                className='absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/80 bg-blue font-mono text-[11px] font-bold text-white'
                style={{ left: `${wp.x}%`, top: `${wp.y}%` }}
              >
                {i + 1}
              </div>
            ))}

            <div
              className='absolute -translate-x-1/2 -translate-y-1/2'
              style={{ left: `${dronePosition.x}%`, top: `${dronePosition.y}%` }}
            >
              <span className='absolute inset-0 -m-2 animate-ping rounded-full bg-[#1c93ff]/50' />
              <span className='relative block h-3 w-3 rounded-full border-2 border-white bg-cta' />
              <span className='absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-sm bg-black/70 px-2 py-1 font-mono text-[10px] text-white'>
                En Route · WP 3/6
              </span>
            </div>

            <div className='absolute right-4 top-4 rounded-lg border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-sm max-[640px]:right-3 max-[640px]:top-3 max-[640px]:px-3 max-[640px]:py-2'>
              <p className='mb-2 font-mono text-[10px] uppercase tracking-[.08em] text-white/50'>
                Mission Plan
              </p>
              <div className='flex flex-col gap-1'>
                {precisionMapping.stats.map((stat) => (
                  <div key={stat.label} className='flex items-center justify-between gap-6'>
                    <span className='font-mono text-[11px] text-white/60'>{stat.label}</span>
                    <span className='font-mono text-[11px] font-medium text-white'>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
