import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel } from '../components/ArchDecor';
import { demoGalleryImages } from '../config/images';

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
        <title>Gallery — Chioma & Tobenna</title>
      </Head>

      <PageHeader
        title="Our Gallery"
        label="Photographs"
        subtitle="Every picture, a chapter of us."
      />

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
