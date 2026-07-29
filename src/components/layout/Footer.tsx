import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { SocialIcons } from './SocialIcons';
import { copyright, footerBrand, footerColumns } from './footer.data';

/**
 * Site footer — brand block (logo, tagline, amber divider, socials) plus three
 * link-list columns, then the copyright bar. Port of `.footer`.
 */
export function Footer() {
  return (
    <footer className='border-t border-border pb-10 pt-[60px] max-[1100px]:mt-[120px] max-[860px]:mt-20'>
      <div className='wrap'>
        <div className='grid grid-cols-[1.5fr_1.4fr_1fr_1fr] gap-10 max-[1100px]:grid-cols-2 max-[860px]:grid-cols-1 max-[860px]:gap-9'>
          {/* Brand */}
          <div className='flex flex-col'>
            <div className='mb-4 flex items-center gap-2.5'>
              <Image
                src='/android-chrome-192x192.png'
                alt='Loctiva logo'
                width={36}
                height={36}
                priority
                className='h-9 w-9'
              />
              <b className='font-geist text-lg font-semibold text-t-bright'>
                {siteConfig.name}
              </b>
            </div>
            <p className='mb-auto max-w-[280px] font-inter text-[13px] leading-[1.7] text-t-muted max-[860px]:max-w-none'>
              {footerBrand.tagline.map((line, i) => (
                <span key={i}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
            {/* amber gradient divider (margin: 30px 0 24px in the original) */}
            <div className='mb-6 mt-[30px] h-16 w-px bg-[linear-gradient(var(--color-amber),transparent)]' />
            <SocialIcons />
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className='mb-[18px] font-inter text-[10px] font-medium tracking-[.4px] text-t-bright'>
                {col.heading}
              </h4>
              <ul className='flex list-none flex-col gap-[11px]'>
                {col.links.map((link) => (
                  <li
                    key={link.label}
                    className='font-inter text-[13px] text-t-muted'
                  >
                    <Link href={link.href} className='hover:text-t-bright'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto mt-[60px] max-w-wrap px-6 text-right font-inter text-xs text-t-bright opacity-80 max-[1100px]:text-left max-[860px]:px-5'>
        {copyright}
      </div>
    </footer>
  );
}
