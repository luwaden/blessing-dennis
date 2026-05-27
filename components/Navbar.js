import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HouseLogo } from './ArchDecor';
import { wedding } from '../config/wedding';

const navLinks = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/gallery',   label: 'Gallery' },
  { href: '/hotels',    label: 'Hotels' },
  { href: '/registry',  label: 'Registry' },
  { href: '/details',   label: 'Details' },
  { href: '/rsvp',      label: 'RSVP', cta: true },
];

export default function Navbar() {
  const router   = useRouter();
  const isHome   = router.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [router.pathname]);

  const transparent = isHome && !scrolled && !menuOpen;
  const navColor    = transparent ? 'text-white' : 'text-ink';
  const logoColor   = transparent ? '#ffffff' : '#722F37';
  const bg          = transparent ? 'bg-transparent' : 'bg-white shadow-sm';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bg}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
            <HouseLogo size={36} color={logoColor} className="transition-colors duration-400" />
            <span
              className="font-script text-2xl md:text-3xl leading-none transition-colors duration-400"
              style={{ color: transparent ? '#ffffff' : '#722F37' }}
            >
              {wedding.coupleInitials}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label, cta }) =>
              cta ? (
                <Link
                  key={href}
                  href={href}
                  className={`font-garamond text-sm tracking-[0.18em] border px-5 py-2 transition-all duration-300 ${
                    transparent
                      ? 'border-white text-white hover:bg-white hover:text-wine'
                      : 'border-wine text-wine hover:bg-wine hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`font-garamond text-sm tracking-[0.18em] transition-colors duration-300 relative group ${navColor}`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                      transparent ? 'bg-white' : 'bg-wine'
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 flex flex-col gap-[5px] justify-center"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-px w-6 transition-all duration-300 origin-center ${navColor === 'text-white' ? 'bg-white' : 'bg-ink'} ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${navColor === 'text-white' ? 'bg-white' : 'bg-ink'} ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 origin-center ${navColor === 'text-white' ? 'bg-white' : 'bg-ink'} ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink transition-opacity duration-400 ${menuOpen ? 'opacity-40' : 'opacity-0'}`}
        />

        {/* Drawer panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white flex flex-col transition-transform duration-400 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-cream-dark">
            <span className="font-script text-wine text-2xl">{wedding.couple}</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-wine transition-colors text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col py-6 px-6 gap-1 flex-1">
            <Link href="/" className="font-garamond text-base tracking-wider text-ink hover:text-wine transition-colors py-3 border-b border-cream-dark">
              Home
            </Link>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-garamond text-base tracking-wider text-ink hover:text-wine transition-colors py-3 border-b border-cream-dark"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="px-6 py-6 text-center border-t border-cream-dark">
            <p className="font-garamond text-sm text-muted italic">{wedding.hashtag}</p>
            <p className="font-garamond text-xs text-muted mt-1">August 1, 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
