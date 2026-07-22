import { Split } from './Split';
import { splits } from './splits.data';

/**
 * Renders the three text-and-image split sections (Multi-layer map,
 * AI Incidents, AI Analysis) from data. All use the default orientation,
 * matching the original markup.
 *
 * Wrapped in `isolate` so the sticky cards' incrementing z-index only
 * competes within this group — without it, that z-index would also stack
 * against later normal-flow siblings (e.g. Impact's absolutely-positioned
 * planet image), letting them bleed through during the release transition.
 */
export function Splits() {
  return (
    <div className='isolate'>
      {splits.map((item, index) => (
        <Split key={item.eyebrow} {...item} index={index} />
      ))}
    </div>
  );
}
