// components/layout/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { navLinks, siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/cn';

interface NavbarProps {
  /**
   * 'dark' (default) sits over the Hero's dark photo, white text — starts
   * fully transparent (matching the original hero-overlay look, and Hero's
   * own top scrim gradient which was built assuming a transparent navbar
   * over it) and only fades in a solid blurred background once scrolled
   * past the hero, so it stays legible over the light sections below.
   * 'light' is for pages with no hero (Pricing, Product) — dark text,
   * solid background from the start since the page is white top to bottom.
   */
  variant?: 'dark' | 'light';
}

/** Site header — sticky on every page; the dark variant's background is scroll-aware. */
export function Navbar({ variant = 'dark' }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = variant === 'dark';

  useEffect(() => {
    if (!isDark) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDark]);

  return (
    <header
      className={cn(
        'inset-x-0 top-0 z-50 w-full transition-colors duration-300',
        // `fixed` (not `sticky`) for the dark variant — it must stay out of
        // normal document flow so it overlaps the Hero photo instead of
        // pushing it down and exposing the plain white body background in
        // the space it would otherwise occupy.
        isDark ? 'fixed' : 'sticky',
        isDark
          ? cn('text-white', scrolled && 'bg-black/80 backdrop-blur-md')
          : 'border-b border-border bg-bg/90 backdrop-blur-md text-t-primary',
      )}
    >
      <nav className='mx-auto flex max-w-wrap items-center gap-6 px-6 py-4 max-[860px]:px-5 max-[860px]:pb-[18px] max-[860px]:pt-9'>
        {/* Brand */}
        <Link href='/' className='flex flex-none items-center gap-2.5'>
          <Image
            src='/android-chrome-192x192.png'
            alt='Loctiva logo'
            width={36}
            height={36}
            priority
            className='h-9 w-9'
          />
          <b
            className={cn(
              'font-geist text-lg font-semibold tracking-[-.2px]',
              isDark ? 'text-white' : 'text-t-primary',
            )}
          >
            {siteConfig.name}
          </b>
        </Link>

        {/* Nav links */}
        <div
          className={cn(
            'flex-1 justify-center gap-11 font-geist text-base',
            isDark ? 'text-white' : 'text-t-primary',
            'flex', // desktop
            'max-[860px]:absolute max-[860px]:inset-x-0 max-[860px]:top-full max-[860px]:flex-col max-[860px]:items-center max-[860px]:gap-5 max-[860px]:border-t max-[860px]:border-border max-[860px]:bg-white max-[860px]:p-6 max-[860px]:text-t-primary',
            open ? 'max-[860px]:flex' : 'max-[860px]:hidden',
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='opacity-90 transition-[opacity,color] duration-150 hover:text-blue-light hover:opacity-100'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href={`${siteConfig.commandAppUrl}/sign-in`}>
          <Button className='flex-none max-[860px]:hidden'>Get Started</Button>
        </a>

        {/* Mobile hamburger */}
        <button
          type='button'
          aria-label='Menu'
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'ml-auto hidden cursor-pointer border-0 bg-transparent text-2xl max-[860px]:block',
            isDark ? 'text-white' : 'text-t-primary',
          )}
        >
          &#9776;
        </button>
      </nav>
    </header>
  );
}
