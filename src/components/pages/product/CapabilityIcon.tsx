import type { CapabilityIconName } from './product.data';

interface CapabilityIconProps {
  name: CapabilityIconName;
  className?: string;
}

/**
 * Small line-icon set for the capability grid — same hand-drawn,
 * stroke-based style as `IndustryIcon` (Industries section) and the
 * Hero/Testimonials arrows. No icon library dependency.
 */
export function CapabilityIcon({ name, className }: CapabilityIconProps) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (name) {
    case 'row-patrol':
      return (
        <svg {...props}>
          <circle cx='5' cy='6' r='2' />
          <circle cx='19' cy='18' r='2' />
          <path d='M7 6h6a4 4 0 0 1 0 8H9a2 2 0 0 0 0 4h8' />
        </svg>
      );
    case 'threat':
      return (
        <svg {...props}>
          <path d='M12 2.5 4.5 5.5v5.7c0 4.9 3.2 8.9 7.5 10.8 4.3-1.9 7.5-5.9 7.5-10.8V5.5L12 2.5Z' />
          <path d='M12 8v4.5' />
          <path d='M12 15.5h.01' strokeWidth={2.5} />
        </svg>
      );
    case 'gas-leak':
      return (
        <svg {...props}>
          <path d='M9 2.5c.4.5-.4 1 0 1.5M12 2c.4.5-.4 1 0 1.5M15 2.5c.4.5-.4 1 0 1.5' />
          <path d='M12 5.5s5.5 6.3 5.5 9.8a5.5 5.5 0 1 1-11 0c0-3.5 5.5-9.8 5.5-9.8Z' />
        </svg>
      );
    case 'thermal':
      return (
        <svg {...props}>
          <path d='M10.25 12.9V4.75a1.75 1.75 0 1 1 3.5 0v8.15a3.75 3.75 0 1 1-3.5 0Z' />
          <path d='M12 6.5v6' />
        </svg>
      );
    case 'perimeter':
      return (
        <svg {...props}>
          <rect x='3.5' y='3.5' width='17' height='17' rx='2.5' strokeDasharray='3 3.2' />
          <circle cx='12' cy='12' r='2' />
        </svg>
      );
    case 'maritime':
      return (
        <svg {...props}>
          <circle cx='12' cy='5' r='2' />
          <path d='M12 7v13.5' />
          <path d='M6.5 13a5.5 5.5 0 0 0 11 0' />
          <path d='M4 13h2.5' />
          <path d='M17.5 13H20' />
        </svg>
      );
    case 'border':
      return (
        <svg {...props}>
          <path d='M6 21V4' />
          <path d='M6 4h11l-3 4 3 4H6' />
        </svg>
      );
    case 'multi-drone':
      return (
        <svg {...props}>
          <circle cx='12' cy='12' r='2.2' />
          <path d='M12 9.8V6M12 14.2V18M9.8 12H6M14.2 12H18' />
          <circle cx='6' cy='6' r='1.6' />
          <circle cx='18' cy='6' r='1.6' />
          <circle cx='6' cy='18' r='1.6' />
          <circle cx='18' cy='18' r='1.6' />
        </svg>
      );
  }
}
