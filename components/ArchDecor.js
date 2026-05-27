// ─────────────────────────────────────────────────────────────────────
//  Arch & House decorative components
//  The central visual motif: a home with an arch roof
// ─────────────────────────────────────────────────────────────────────

/** Elegant house-with-arch-roof logo used in navbar and footers */
export function HouseLogo({ size = 48, color = '#722F37', className = '' }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.88)}
      viewBox="0 0 60 53"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Arch roof */}
      <path
        d="M 4 26 Q 30 4 56 26"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left wall */}
      <line x1="4" y1="26" x2="4" y2="51" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Right wall */}
      <line x1="56" y1="26" x2="56" y2="51" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Base */}
      <line x1="4" y1="51" x2="56" y2="51" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Arch door */}
      <path
        d="M 22 51 L 22 38 Q 30 30 38 38 L 38 51"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left window */}
      <rect x="9" y="31" width="8" height="8" stroke={color} strokeWidth="1" fill="none" />
      {/* Right window */}
      <rect x="43" y="31" width="8" height="8" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
}

/** Small arch ornament above section titles */
export function ArchOrnament({ color = '#722F37', width = 90, className = '' }) {
  return (
    <svg
      width={width}
      height={Math.round(width * 0.28)}
      viewBox="0 0 90 25"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 2 23 Q 45 2 88 23"
        stroke={color}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="2" cy="23" r="1.5" fill={color} opacity="0.7" />
      <circle cx="88" cy="23" r="1.5" fill={color} opacity="0.7" />
      <circle cx="45" cy="5" r="1.5" fill={color} opacity="0.5" />
    </svg>
  );
}

/** Wide arch SVG divider between sections */
export function ArchDivider({ color = '#722F37', inverted = false, className = '' }) {
  const path = inverted
    ? 'M 0 0 Q 50% 40px 100% 0 L 100% 100% L 0 100% Z'
    : 'M 0 100% Q 50% calc(100% - 40px) 100% 100% L 100% 0 L 0 0 Z';

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: 40 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        {inverted ? (
          <path d="M 0 40 Q 720 0 1440 40" stroke={color} strokeWidth="1" fill="none" opacity="0.35" />
        ) : (
          <path d="M 0 0 Q 720 40 1440 0" stroke={color} strokeWidth="1" fill="none" opacity="0.35" />
        )}
      </svg>
    </div>
  );
}

/** Delicate floral divider line */
export function FleuronDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="flex-1 border-t border-wine opacity-25" style={{ maxWidth: 120 }} />
      <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
        <path d="M14 1 Q18 9 14 17 Q10 9 14 1Z" stroke="#722F37" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M1 9 Q9 5 14 9 Q9 13 1 9Z" stroke="#722F37" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M27 9 Q19 5 14 9 Q19 13 27 9Z" stroke="#722F37" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <circle cx="14" cy="9" r="1.5" fill="#722F37" opacity="0.5"/>
      </svg>
      <span className="flex-1 border-t border-wine opacity-25" style={{ maxWidth: 120 }} />
    </div>
  );
}

/** Section label: arch ornament + title */
export function SectionLabel({ label, className = '' }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <ArchOrnament width={80} className="mb-2" />
      <span className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-80">
        {label}
      </span>
    </div>
  );
}
