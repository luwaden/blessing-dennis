import { HouseLogo, ArchOrnament } from './ArchDecor';

export default function PageHeader({ title, subtitle, label, bgImage }) {
  return (
    <header
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 text-center overflow-hidden"
      style={{ background: bgImage ? undefined : '#FAF7F4' }}
    >
      {/* Background image */}
      {bgImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-white bg-opacity-80" />
        </>
      )}

      <div className="relative max-w-2xl mx-auto">
        {/* House logo */}
        <div className="flex justify-center mb-4">
          <HouseLogo size={32} color="#722F37" />
        </div>

        {/* Label above title */}
        {label && (
          <p className="font-garamond text-xs tracking-[0.35em] uppercase text-wine opacity-70 mb-3">
            {label}
          </p>
        )}

        {/* Arch ornament */}
        <div className="flex justify-center mb-2">
          <ArchOrnament width={100} color="#722F37" />
        </div>

        {/* Title */}
        <h1 className="font-script text-wine" style={{ fontSize: 'clamp(2.8rem, 8vw, 5rem)', lineHeight: 1.1 }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-garamond italic text-muted text-lg md:text-xl mt-4 max-w-md mx-auto">
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-px w-12 bg-wine opacity-25" />
          <span className="w-1 h-1 rounded-full bg-wine opacity-30" />
          <span className="h-px w-12 bg-wine opacity-25" />
        </div>
      </div>
    </header>
  );
}
