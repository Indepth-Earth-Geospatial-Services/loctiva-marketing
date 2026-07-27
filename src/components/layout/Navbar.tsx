// components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { navLinks, siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/cn';

interface NavbarProps {
  /**
   * 'dark' (default) sits over a dark hero section, white text.
   * 'light' is for white-background pages (Pricing, Product) — dark text.
   */
  variant?: 'dark' | 'light';
}

/**
 * Site header — now sticky on scroll.
 */
export function Navbar({ variant = 'dark' }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isDark = variant === 'dark';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        isDark
          ? 'bg-black/80 backdrop-blur-md text-white'
          : 'border-b border-border bg-white/90 backdrop-blur-md text-t-primary',
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
