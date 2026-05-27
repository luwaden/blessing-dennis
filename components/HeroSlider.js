import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { demoHeroImages } from '../config/images';
import { wedding, venues } from '../config/wedding';
import CountdownTimer from './CountdownTimer';

const SLIDE_INTERVAL = 5500;

export default function HeroSlider() {
  const images = demoHeroImages; // swap to heroImages from images.js when using Cloudinary
  const [current, setCurrent]   = useState(0);
  const [visible, setVisible]   = useState(true);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [current, images.length, goTo]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* ── Images ─────────────────────────────────────────────── */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* ── Overlay: top vignette ────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* ── Centered hero copy ─────────────────────────────────── */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center text-white px-5 py-24">

        {/* Top label */}
        <p
          className="font-garamond text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-90 transition-opacity duration-500"
          style={{ opacity: visible ? 0.9 : 0 }}
        >
          We Are Getting Married
        </p>

        {/* Arch ornament */}
        <svg width="140" height="40" viewBox="0 0 140 40" fill="none" className="mb-3 opacity-60" aria-hidden="true">
          <path d="M 5 38 Q 70 4 135 38" stroke="white" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <circle cx="5"   cy="38" r="2" fill="white" opacity="0.6"/>
          <circle cx="135" cy="38" r="2" fill="white" opacity="0.6"/>
          <circle cx="70"  cy="6"  r="2" fill="white" opacity="0.4"/>
        </svg>

        {/* Bride name */}
        <h1
          className="font-script leading-none transition-all duration-700"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {wedding.bride.firstName}
        </h1>

        {/* Ampersand */}
        <p
          className="font-garamond text-xl md:text-2xl tracking-[0.4em] my-2 opacity-80 transition-opacity duration-700"
          style={{ opacity: visible ? 0.8 : 0 }}
        >
          &amp;
        </p>

        {/* Groom name */}
        <h1
          className="font-script leading-none transition-all duration-700"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-12px)',
          }}
        >
          {wedding.groom.firstName}
        </h1>

        {/* Rule */}
        <div className="flex items-center gap-4 mt-6 mb-4 opacity-70">
          <span className="block h-px w-10 bg-white" />
          <span className="font-garamond text-sm tracking-[0.25em]">August 1, 2026</span>
          <span className="block h-px w-10 bg-white" />
        </div>

        <p className="font-garamond italic text-sm md:text-base opacity-80 mb-10">
          {venues.church.name} · {venues.church.city}
          <br />
          Reception: {venues.reception.name}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/rsvp" className="btn-white text-center min-w-[140px]">
            RSVP Now
          </Link>
          <Link href="/our-story" className="font-garamond text-sm tracking-widest text-white underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
            Our Story →
          </Link>
        </div>
      </div>

      {/* ── Countdown strip ────────────────────────────────────── */}
      <div className="relative w-full bg-white bg-opacity-95 px-5 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-script text-wine text-3xl md:text-4xl mb-8">
            Counting Down to Our Day
          </p>
          <CountdownTimer />
        </div>
      </div>

      {/* ── Slide dots ─────────────────────────────────────────── */}
      <div className="absolute bottom-[7.5rem] left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              height: 2,
              width: i === current ? 28 : 8,
              background: 'white',
              opacity: i === current ? 1 : 0.45,
              border: 'none',
              borderRadius: 2,
            }}
          />
        ))}
      </div>

      {/* ── Scroll cue ─────────────────────────────────────────── */}
      <div className="absolute right-6 bottom-[8.5rem] hidden md:flex flex-col items-center gap-2 text-white opacity-50">
        <span className="font-garamond text-xs tracking-[0.3em] rotate-90 whitespace-nowrap mr-2">SCROLL</span>
        <div className="w-px h-10 bg-white" style={{ animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
