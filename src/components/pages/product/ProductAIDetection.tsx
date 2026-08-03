import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { aiDetection } from './product.data';

/**
 * AI capability showcase — a real photo annotated with mock detection boxes
 * and a restricted-zone outline (illustrative UI, not live inference) to make
 * "trained to recognize people, vehicles, and wildlife" concrete instead of
 * describing it in prose alone. Category list on the left carries the classes
 * that don't have a matching stock photo to demo directly (theft, vehicles).
 */
export function ProductAIDetection() {
  return (
    <section className='py-24 max-[1100px]:py-16 max-[860px]:py-12'>
      <div className='wrap'>
        <div className='grid grid-cols-[1fr_1.15fr] items-center gap-16 max-[1100px]:grid-cols-1 max-[1100px]:gap-10'>
          <Reveal>
            <Eyebrow variant='blue' className='mb-6 w-fit'>
              {aiDetection.eyebrow}
            </Eyebrow>
            <h2 className='mb-5 font-satoshi text-[36px] font-medium leading-[1.25] tracking-[-.5px] text-t-primary max-[860px]:text-[26px]'>
              {aiDetection.title}
            </h2>
            <p className='mb-9 font-geist text-base leading-[1.6] text-t-dim'>
              {aiDetection.body}
            </p>

            <div className='grid grid-cols-2 gap-x-6 gap-y-7 max-[500px]:grid-cols-1'>
              {aiDetection.categories.map((cat) => (
                <div key={cat.title}>
                  <p className='mb-1.5 font-geist text-[15px] font-medium text-t-bright'>
                    {cat.title}
                  </p>
                  <p className='font-inter text-sm leading-[1.5] text-t-muted'>{cat.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className='w-full'>
            <div className='relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-btn'>
              <Image
                src={aiDetection.demo.src}
                alt={aiDetection.demo.alt}
                fill
                sizes='(max-width: 1100px) 100vw, 55vw'
                className='object-cover'
              />

              <div
                aria-hidden
                className='scan-line pointer-events-none absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-[#007dfc]/25 to-transparent'
              />

              <div
                aria-hidden
                className='absolute rounded-md border border-dashed border-[#eba414]/80'
                style={{
                  left: `${aiDetection.demo.zone.left}%`,
                  top: `${aiDetection.demo.zone.top}%`,
                  width: `${aiDetection.demo.zone.width}%`,
                  height: `${aiDetection.demo.zone.height}%`,
                }}
              >
                <span className='absolute -top-6 left-0 whitespace-nowrap rounded-sm bg-amber px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[.04em] text-btn'>
                  {aiDetection.demo.zone.label}
                </span>
              </div>

              {aiDetection.demo.boxes.map((box) => (
                <div
                  key={box.label}
                  aria-hidden
                  className='absolute rounded-sm border-2 border-blue'
                  style={{
                    left: `${box.left}%`,
                    top: `${box.top}%`,
                    width: `${box.width}%`,
                    height: `${box.height}%`,
                  }}
                >
                  <span className='absolute -top-5 left-0 hidden whitespace-nowrap rounded-sm bg-blue px-1.5 py-0.5 font-mono text-[10px] font-medium text-white min-[641px]:block'>
                    {box.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
