import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { evidenceReporting } from './product.data';

const { chart, log } = evidenceReporting;
const maxCount = Math.max(...chart.months.map((m) => m.count));

/**
 * Analytics + evidence showcase — a single-series bar chart (magnitude over
 * time, one brand hue, current period called out rather than labeling every
 * bar) paired with a tamper-evidence log. Two cards side by side for layout
 * variety against the split text/visual sections above it.
 */
export function EvidenceReporting() {
  return (
    <section className='py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <Reveal className='mx-auto mb-14 max-w-[640px] text-center'>
          <Eyebrow variant='blue' className='mx-auto mb-6 w-fit'>
            {evidenceReporting.eyebrow}
          </Eyebrow>
          <h2 className='mb-4 font-satoshi text-[32px] font-medium leading-[1.3] tracking-[-.5px] text-t-primary max-[860px]:text-2xl'>
            {evidenceReporting.title}
          </h2>
          <p className='font-geist text-base leading-[1.5] text-t-dim max-[860px]:text-[15px]'>
            {evidenceReporting.subtitle}
          </p>
        </Reveal>

        <div className='grid grid-cols-2 gap-6 max-[860px]:grid-cols-1'>
          <Reveal className='rounded-[18px] border border-border bg-panel p-6'>
            <div className='mb-6 flex items-start justify-between'>
              <div>
                <p className='font-geist text-[15px] font-medium text-t-bright'>{chart.title}</p>
                <p className='font-mono text-xs text-t-muted'>{chart.period}</p>
              </div>
              <div className='text-right'>
                <p className='font-mono text-lg font-semibold text-blue'>{chart.change.value}</p>
                <p className='font-mono text-[11px] text-t-faint'>{chart.change.label}</p>
              </div>
            </div>

            <div className='flex h-32 items-end gap-2'>
              {chart.months.map((m, i) => {
                const isLast = i === chart.months.length - 1;
                return (
                  <div key={m.label} className='flex flex-1 flex-col items-center gap-2'>
                    <div className='relative flex w-full flex-1 items-end justify-center'>
                      {isLast && (
                        <span className='absolute -top-5 font-mono text-[11px] font-medium text-t-bright'>
                          {m.count}
                        </span>
                      )}
                      <div
                        className={cn(
                          'w-full rounded-t-[4px]',
                          isLast ? 'bg-cta' : 'bg-blue',
                        )}
                        style={{ height: `${(m.count / maxCount) * 100}%` }}
                      />
                    </div>
                    <span className='font-mono text-[10px] text-t-faint'>{m.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className='rounded-[18px] border border-border bg-panel p-6'>
            <p className='mb-5 font-geist text-[15px] font-medium text-t-bright'>{log.title}</p>

            <div className='flex flex-col divide-y divide-border'>
              {log.entries.map((entry) => (
                <div key={entry.id} className='flex items-start gap-3 py-3.5 first:pt-0 last:pb-0'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={1.75}
                    className='mt-0.5 h-4 w-4 flex-none text-blue'
                  >
                    <rect x='5' y='11' width='14' height='9' rx='2' />
                    <path d='M8 11V7a4 4 0 0 1 8 0v4' />
                  </svg>
                  <div className='min-w-0 flex-1'>
                    <p className='truncate font-geist text-[13px] font-medium text-t-bright'>
                      {entry.title}
                    </p>
                    <p className='font-inter text-xs text-t-muted'>{entry.timestamp}</p>
                  </div>
                  <div className='flex flex-none items-center gap-1.5 rounded-full border border-border px-2 py-1'>
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                    <span className='font-mono text-[10px] text-t-faint'>{entry.hash}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
