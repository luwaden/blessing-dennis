import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import HeroSlider from '../components/HeroSlider';
import { SectionLabel, FleuronDivider, ArchDivider } from '../components/ArchDecor';
import { wedding,venues } from '../config/wedding';
import { bankDetails } from './registry';

// Section cards data
const sections = [
  {
    href:    '/our-story',
    label:   'Our Story',
    title:   'A Love Story',
    desc:    'From a chance meeting in University of Ibadan to a lifetime together — follow the journey that led us here.',
    img:     'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884530/IMG_20251124_165649_xklkar.jpg',
    alt:     'The couple together',
  },
  {
    href:    '/gallery',
    label:   'Gallery',
    title:   'Our Moments',
    desc:    'A collection of photographs capturing the everyday magic of us. Every picture tells a chapter.',
    img:     'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884501/IMG_20251124_170158_romlyz.jpg',
    alt:     'Photography gallery',
  },
  {
    href:    '/hotels',
    label:   'Hotels',
    title:   'Stay With Us',
    desc:    'A curated list of accommodations near the venue so you can celebrate all night long.',
    img:     'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    alt:     'Hotel lobby',
  },
  {
    href:    '/registry',
    label:   'Registry',
    title:   'Gift Registry',
    desc:    'Help us build our first home together. Every gift, big or small, is deeply appreciated.',
    img:     'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80',
    alt:     'Gift registry items',
  },
  {
    href:    '/details',
    label:   'Details',
    title:   'Ceremony & Reception',
    desc:    'Everything you need to know about the day — from the ceremony programme to the last dance.',
    img:     'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    alt:     'Wedding ceremony',
  },
  {
    href:    '/rsvp',
    label:   'RSVP',
    title:   'Will You Join Us?',
    desc:    'We hope you can make it. Let us know you are coming so we can save your seat.',
    img:     'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1780760187/ChatGPT_Image_May_16_2026_04_34_26_PM_jsltqi.png',
    alt:     'RSVP invitation',
  },
];

function SectionCard({ href, label, title, desc, img, alt }) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-wine border-opacity-10 hover:border-opacity-30 transition-all duration-500 overflow-hidden"
    >
      {/* Arch-framed image */}
      <div className="relative overflow-hidden" style={{ borderRadius: '50% 50% 0 0 / 18% 18% 0 0' }}>
        <div className="aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-wine bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
        </div>
      </div>

      {/* Card body */}
      <div className="p-7 flex-1 flex flex-col">
        <span className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-2">
          {label}
        </span>
        <h3 className="font-script text-wine text-3xl mb-3 leading-tight">
          {title}
        </h3>
        <p className="font-garamond text-muted text-base leading-relaxed mb-5 flex-1">
          {desc}
        </p>
        <span className="font-garamond text-sm tracking-widest text-wine group-hover:tracking-[0.22em] transition-all duration-300">
          Explore →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blessing & Dennis — August 1, 2026</title>
      </Head>

      {/* ── Hero Slider ────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── Save the Date banner ──────────────────────────────── */}
      <section className="bg-wine text-white py-14 px-5 text-center">
        <SectionLabel label="Save the Date" className="[&_span]:text-white [&_path]:stroke-white [&_circle]:fill-white" />
        <h2 className="font-script text-5xl md:text-7xl mt-4 mb-2 leading-none">
          August 1, 2026
        </h2>
        <p className="font-garamond tracking-[0.2em] text-sm opacity-80 mt-3">
        {venues.church.name} · {venues.church.city}
        <br />
        Reception: {venues.reception.name}
      </p>
        <p className="font-garamond italic text-sm opacity-60 mt-2">{wedding.hashtag}</p>
      </section>

      {/* ── Section Cards ──────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Explore Our Wedding" />
            <h2 className="font-script text-wine mt-4" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)' }}>
              Everything You Need to Know
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((s) => (
              <SectionCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Brief Love Story teaser ──────────────────────────── */}
      <section className="bg-white py-24 md:py-32 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Arch-framed image */}
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-xs overflow-hidden shadow-lg"
              style={{ borderRadius: '50% 50% 0 0 / 30% 30% 0 0' }}
            >
              <div className="aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80"
                  alt="Blessing and Dennis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Wine arch border overlay */}
              <div
                className="absolute inset-0 border border-wine border-opacity-20 pointer-events-none"
                style={{ borderRadius: 'inherit' }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionLabel label="Our Beginning" className="items-start text-left" />
            <h2 className="font-script text-wine mt-4 mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', lineHeight: 1.1 }}>
              How It All Began
            </h2>
            <p className="font-garamond text-ink text-lg leading-relaxed mb-4">
              It was a blessed Sunday evening at a mutual RFC weekly prayer meeting friend's  in behind chapel of resurrection hall at University in Ibadan.
              Blessing was laughing at something across the room when Dennis first noticed her.
            
            </p>
            
            <Link href="/our-story" className="btn-wine">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

         <section className="bg-white py-16 md:py-20 px-5">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <SectionLabel label="Bank Transfer" />
                  <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">Cash Contributions</h2>
                  <p className="font-garamond text-muted italic text-base mt-3 max-w-md mx-auto">
                    If you prefer to gift us directly, kindly check our{" "}
                    <Link href="/registry" className="text-wine underline">
                      registry page
                    </Link>.
                  </p>
                </div>
      
                <div className="space-y-4">
                  {bankDetails.map((b) => (
                    <div
                      key={b.bank}
                      className="border border-wine border-opacity-20 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                    >
                      <div>
                        <p className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-1">{b.bank}</p>
                        <p className="font-garamond font-medium text-ink text-lg">{b.accountName}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-garamond text-xs text-muted tracking-wider mb-1">Account Number</p>
                        <p className="font-garamond text-wine font-medium text-xl tracking-widest">{b.accountNumber}</p>
                      </div>
                    </div>
                  ))}
                </div>
      
                <p className="font-garamond text-center italic text-muted text-sm mt-8">
                  Please use your name as payment reference so we know to thank you!
                </p>
              </div>
            </section>

      {/* ── Quote strip ───────────────────────────────────────── */}
      <section className="bg-parchment py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <FleuronDivider className="mb-10" />
          <blockquote className="font-garamond italic text-ink text-xl md:text-2xl leading-relaxed mb-2">
            &ldquo;You are my today and all of my tomorrows.&rdquo;
          </blockquote>
          <cite className="font-garamond text-sm tracking-widest text-muted not-italic">— Leo Christopher</cite>
          <FleuronDivider className="mt-10" />
        </div>
      </section>
    </Layout>
  );
}
