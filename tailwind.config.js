/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        panel: 'var(--color-panel)',
        'panel-2': 'var(--color-panel-2)',
        testimonial: 'var(--color-testimonial)',
        border: 'var(--color-border)',
        blue: {
          DEFAULT: 'var(--color-blue)',
          light: 'var(--color-blue-light)',
        },
        amber: 'var(--color-amber)',
        btn: 'var(--color-btn)',
        'btn-hover': 'var(--color-btn-hover)',
        'btn-fg': 'var(--color-btn-fg)',
        't-primary': 'var(--color-t-primary)',
        't-bright': 'var(--color-t-bright)',
        't-muted': 'var(--color-t-muted)',
        't-dim': 'var(--color-t-dim)',
        't-faint': 'var(--color-t-faint)',
        'grid-dot': 'var(--color-grid-dot)',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        geist: ['var(--font-geist)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        wrap: 'var(--maxw, 80vw)',
      },
    },
  },
  plugins: [],
};
