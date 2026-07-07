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
        bg: '#0a0a0a',
        panel: '#0c0c0c',
        blue: {
          DEFAULT: '#007dfc',
          light: '#60a5fa',
        },
        btn: '#282828',
        'btn-hover': '#343434',
        't-primary': '#f5f5f5',
        't-bright': '#ffffff',
        't-muted': '#9a9a9a',
        't-dim': '#707070',
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
