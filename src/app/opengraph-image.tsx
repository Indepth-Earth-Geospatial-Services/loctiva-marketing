import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config/site';

export const runtime = 'edge';
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#05070d',
          backgroundImage:
            'radial-gradient(circle at 78% 30%, rgba(0,125,252,0.35), transparent 55%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              background: '#007dfc',
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: '#ffffff' }}>
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#ffffff',
            maxWidth: 920,
          }}
        >
          Real-time drone feeds. AI threat detection. Geospatial intelligence.
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 820,
          }}
        >
          {siteConfig.socialDescription}
        </div>
      </div>
    ),
    { ...size },
  );
}
