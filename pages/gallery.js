import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel } from '../components/ArchDecor';
import { demoGalleryImages } from '../config/images';
import { wedding } from '../config/wedding';

function CoupleVideo() {
  return (
    <section className="bg-white py-16 md:py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel label="Our Video" />
          <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">A Glimpse of Us</h2>
          <p className="font-garamond italic text-muted text-base mt-3">
            A short film of two people falling beautifully in love.
          </p>
        </div>

        {/* Arch-topped video frame */}
        <div className="relative mx-auto max-w-3xl">
          {/* Arch top border */}
          <div
            className="overflow-hidden border border-wine border-opacity-20 shadow-lg"
            style={{ borderRadius: '50% 50% 0 0 / 8% 8% 0 0' }}
          >
            <video
              className="w-full aspect-video object-cover bg-ink"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            >
              {/*
               * Replace src below with your actual video URL.
               * Cloudinary example:
               * <source src="https://res.cloudinary.com/YOUR_CLOUD/video/upload/q_auto/couple-video.mp4" type="video/mp4" />
               *
               * YouTube / Vimeo embed alternative: swap the <video> tag for an <iframe> instead.
               */}
              <source
                src="https://res.cloudinary.com/dkgr3ff3j/video/upload/v1779884433/VID_20260321_161653_1_ejkkep.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Caption */}
          <p className="text-center font-garamond italic text-muted text-sm mt-4">
            {wedding.bride.firstName} &amp; {wedding.groom.firstName} — Our Story in Motion
          </p>
        </div>
      </div>
    </section>
  );
}

function Lightbox({ images, current, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-ink bg-opacity-95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white opacity-60 hover:opacity-100 text-3xl font-light transition-opacity"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white opacity-60 hover:opacity-100 text-4xl font-thin transition-opacity"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Image */}
      <div
        className="max-w-3xl max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
        <p className="text-center font-garamond italic text-white text-sm opacity-60 mt-3">
          {images[current].alt}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white opacity-60 hover:opacity-100 text-4xl font-thin transition-opacity"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-garamond text-xs text-white opacity-50 tracking-widest">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Gallery() {
  const images = demoGalleryImages;
  const [lightbox, setLightbox] = useState(null);

  const open  = (i) => setLightbox(i);
  const close = ()  => setLightbox(null);
  const prev  = ()  => setLightbox((lightbox - 1 + images.length) % images.length);
  const next  = ()  => setLightbox((lightbox + 1) % images.length);

  return (
    <Layout>
      <Head>
        <title>Gallery — Blessing & Dennis</title>
      </Head>

      <PageHeader
        title="Our Gallery"
        label="Photographs"
        subtitle="Every picture, a chapter of us."
      />

      <CoupleVideo />

      {/* ── Gallery Grid ─────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Our Moments" />
            <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">A Thousand Memories</h2>
            <p className="font-garamond text-muted italic text-lg mt-3">
              Click any image to view in full
            </p>
          </div>

          {/* Masonry grid */}
          <div
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-3 md:mb-4 overflow-hidden cursor-pointer group relative"
                style={{ borderRadius: i % 5 === 0 ? '50% 50% 0 0 / 20% 20% 0 0' : '2px' }}
                onClick={() => open(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-wine bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-end p-3">
                  <p className="font-garamond italic text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={images}
          current={lightbox}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </Layout>
  );
}
