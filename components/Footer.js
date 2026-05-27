import Link from 'next/link';
import { HouseLogo, FleuronDivider } from './ArchDecor';
import { wedding } from '../config/wedding';

const links = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/gallery',   label: 'Gallery' },
  { href: '/hotels',    label: 'Hotels' },
  { href: '/registry',  label: 'Registry' },
  { href: '/details',   label: 'Details' },
  { href: '/rsvp',      label: 'RSVP' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-wine border-opacity-10 pt-16 pb-10 px-5">
      <div className="max-w-3xl mx-auto text-center">

        {/* House logo */}
        <div className="flex justify-center mb-4">
          <HouseLogo size={40} color="#722F37" />
        </div>

        {/* Couple names */}
        <h2 className="font-script text-wine text-5xl md:text-6xl leading-none mb-3">
          {wedding.couple}
        </h2>

        <p className="font-garamond text-sm tracking-[0.25em] uppercase text-muted mb-6">
          August 1, 2026 &nbsp;·&nbsp; Victoria Island, Lagos
        </p>

        <FleuronDivider className="mb-8" />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-garamond text-sm tracking-widest text-muted hover:text-wine transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hashtag */}
        <p className="font-garamond italic text-wine text-base mb-8">{wedding.hashtag}</p>

        <FleuronDivider className="mb-8" />

        <p className="font-garamond text-xs text-muted tracking-wider">
          Made with love &hearts; for our special day
        </p>
      </div>
    </footer>
  );
}
