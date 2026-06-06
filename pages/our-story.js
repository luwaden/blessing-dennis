import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { FleuronDivider, SectionLabel } from '../components/ArchDecor';
import { loveStory, wedding } from '../config/wedding';

function TimelineEvent({ item, index }) {
  const isLeft = item.side === 'left';
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-16 md:mb-20 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Year badge */}
      <div className="flex-shrink-0 md:w-1/5 flex md:justify-center">
        <div className="inline-flex flex-col items-center">
          <span className="font-script text-wine text-2xl md:text-3xl leading-none">{item.year}</span>
          <span className="h-px w-10 bg-wine opacity-30 mt-2" />
        </div>
      </div>

      {/* Center dot on desktop */}
      <div className="hidden md:flex flex-shrink-0 flex-col items-center absolute left-1/2 -translate-x-1/2">
        <div className="w-3 h-3 rounded-full border-2 border-wine bg-cream" />
      </div>

      {/* Content */}
      <div className={`md:w-2/5 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <h3 className="font-script text-wine text-3xl md:text-4xl mb-3 leading-tight">{item.title}</h3>
        <p className="font-garamond text-ink text-base md:text-lg leading-relaxed">{item.text}</p>
      </div>

      {/* Spacer for opposing side */}
      <div className="hidden md:block md:w-2/5" />
    </div>
  );
}

export default function OurStory() {
  return (
    <Layout>
      <Head>
        <title>Our Story — Blessing & Dennis</title>
      </Head>

      <PageHeader
        title="Our Story"
        label="The Journey"
        subtitle="Two people. One extraordinary love story."
      />

      {/* ── Couple portraits ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel label="The Couple" />
            <h2 className="font-script text-wine mt-4 text-4xl md:text-5xl">The Two of Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Bride */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-52 md:w-64 overflow-hidden mb-6 shadow-md"
                style={{ borderRadius: '50% 50% 0 0 / 30% 30% 0 0' }}
              >
                <div className="aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                    alt={wedding.bride.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-1">The Bride</span>
              <h3 className="font-script text-wine text-4xl mb-4">{wedding.bride.firstName}</h3>
              <p className="font-garamond text-muted text-base leading-relaxed max-w-xs">{wedding.bride.bio}</p>
            </div>

            {/* Groom */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-52 md:w-64 overflow-hidden mb-6 shadow-md"
                style={{ borderRadius: '50% 50% 0 0 / 30% 30% 0 0' }}
              >
                <div className="aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://res.cloudinary.com/dergk96ic/image/upload/v1761650699/Gemini_Generated_Image_8go2748go2748go2_iel77r.png"
                    alt={wedding.groom.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-1">The Groom</span>
              <h3 className="font-script text-wine text-4xl mb-4">{wedding.groom.firstName}</h3>
              <p className="font-garamond text-muted text-base leading-relaxed max-w-xs">{wedding.groom.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <FleuronDivider className="py-4 bg-cream" />

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-32 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Our Timeline" />
            <h2 className="font-script text-wine mt-4 text-4xl md:text-5xl">The Story So Far</h2>
          </div>

          {/* Vertical rule (desktop) */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wine opacity-15 -translate-x-1/2" />
            {loveStory.map((item, i) => (
              <TimelineEvent key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width engagement image ───────────────────────── */}
      <section className="relative py-0">
        <div className="aspect-[21/9] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
            alt="Blessing and Dennis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wine bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white px-5">
              <p className="font-garamond text-sm tracking-[0.35em] uppercase opacity-80 mb-2">Forever Begins</p>
              <h2 className="font-script text-5xl md:text-7xl">August 1, 2026</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
