import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel, FleuronDivider, ArchOrnament } from '../components/ArchDecor';
import { schedule, wedding } from '../config/wedding';
import Link from 'next/link';

const faqs = [
  {
    q: 'What is the dress code?',
    a: 'Cocktail attire or traditional Nigerian formal wear. The colour palette is whites, creams, ivory and champagne — please avoid wearing white as that is reserved for the bride. Men may wear agbada, kaftan or a smart suit.',
  },
  {
    q: 'Is the venue child-friendly?',
    a: 'We love your little ones! Children are warmly welcome at the ceremony. Please note the evening reception will extend late and may not be suitable for very young children.',
  },
  {
    q: 'Will there be transportation to the venue?',
    a: 'We will be organising shuttle buses from Eko Hotel to the venue. Details will be sent via email closer to the date. Alternatively, Bolt and Uber are available across Lagos.',
  },
  {
    q: 'Can I take photos during the ceremony?',
    a: 'We kindly ask that during the ceremony you put your devices away and be fully present with us. Our photographers will capture every moment beautifully. The reception is fully open for personal photos!',
  },
  {
    q: 'Is there parking at the venue?',
    a: 'Yes, The Oriental Hotel has ample parking for guests. Valet parking will also be available on the day.',
  },
  {
    q: 'What if I have dietary restrictions?',
    a: 'Please note any dietary requirements on your RSVP form and we will do our very best to accommodate you. We will have vegetarian and halal options available.',
  },
  {
    q: 'When is the RSVP deadline?',
    a: 'Please RSVP by June 15, 2026 so we can finalise seating and catering numbers. We would hate to miss you!',
  },
];

function ScheduleItem({ item, index }) {
  return (
    <div className={`flex gap-6 md:gap-10 items-start group ${index < schedule.length - 1 ? 'pb-8 relative' : ''}`}>
      {/* Time + vertical line */}
      <div className="flex flex-col items-center flex-shrink-0 w-20 md:w-28">
        <span className="font-garamond text-wine font-medium text-base md:text-lg tabular-nums">
          {item.time}
        </span>
        {index < schedule.length - 1 && (
          <div className="flex-1 w-px bg-wine opacity-15 mt-2 min-h-[2rem]" />
        )}
      </div>

      {/* Dot */}
      <div className="flex-shrink-0 mt-1.5">
        <div className="w-2 h-2 rounded-full border border-wine bg-cream group-hover:bg-wine transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="pb-2">
        <h4 className="font-garamond font-semibold text-ink text-lg md:text-xl leading-tight">{item.event}</h4>
        <p className="font-garamond italic text-muted text-sm mt-1">{item.note}</p>
      </div>
    </div>
  );
}

function FaqItem({ faq }) {
  return (
    <details className="group border-b border-wine border-opacity-10 last:border-0 py-1">
      <summary className="font-garamond font-medium text-ink text-base md:text-lg py-4 cursor-pointer flex items-center justify-between gap-4 list-none select-none hover:text-wine transition-colors">
        {faq.q}
        <span className="flex-shrink-0 text-wine text-xl font-light transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="font-garamond text-muted text-base leading-relaxed pb-5 pr-8">
        {faq.a}
      </p>
    </details>
  );
}

export default function Details() {
  return (
    <Layout>
      <Head>
        <title>Wedding Details — Blessing & Dennis</title>
      </Head>

      <PageHeader
        title="The Details"
        label="All You Need to Know"
        subtitle="Everything about our ceremony and reception, gathered in one place for you."
      />

      {/* ── Venue ────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Venue image */}
            <div
              className="overflow-hidden shadow-md"
              style={{ borderRadius: '50% 50% 0 0 / 20% 20% 0 0' }}
            >
              <div className="aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                  alt="Wedding venue"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Venue info */}
            <div>
              <SectionLabel label="The Venue" className="items-start" />
              <h2 className="font-script text-wine mt-4 mb-6 text-4xl md:text-5xl leading-tight">
                {wedding.venue.name}
              </h2>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-1">Address</p>
                  <p className="font-garamond text-ink text-base">{wedding.venue.address}</p>
                  <p className="font-garamond text-ink text-base">{wedding.venue.city}</p>
                </div>
                <div>
                  <p className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-1">Date</p>
                  <p className="font-garamond text-ink text-base">Saturday, August 1, 2026</p>
                </div>
                <div>
                  <p className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 mb-1">Ceremony Begins</p>
                  <p className="font-garamond text-ink text-base">10:00 AM (doors open 9:30 AM)</p>
                </div>
              </div>

              <a
                href={wedding.venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wine inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <FleuronDivider className="bg-cream py-4" />

      {/* ── Programme / Schedule ─────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel label="The Programme" />
            <h2 className="font-script text-wine mt-4 text-4xl md:text-5xl">Order of the Day</h2>
            <p className="font-garamond italic text-muted text-base mt-3">
              Saturday, August 1, 2026
            </p>
          </div>

          <div>
            {schedule.map((item, i) => (
              <ScheduleItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Dress code callout ───────────────────────────────── */}
      <section className="bg-wine text-white py-14 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <ArchOrnament color="white" width={80} className="mx-auto mb-4 opacity-60" />
          <h3 className="font-script text-4xl md:text-5xl mb-4">Dress Code</h3>
          <p className="font-garamond text-sm tracking-[0.3em] uppercase opacity-80 mb-4">
            Cocktail Attire &nbsp;·&nbsp; Nigerian Formal
          </p>
          <p className="font-garamond italic text-base opacity-80 max-w-md mx-auto">
            Colour palette: whites, creams, ivory, champagne &amp; earth tones.
            Please reserve white for the bride. Agbada, kaftans, and suits all warmly welcomed.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Frequently Asked" />
            <h2 className="font-script text-wine mt-4 text-4xl md:text-5xl">Your Questions, Answered</h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-garamond text-muted text-base mb-4">Still have questions?</p>
            <a
              href="mailto:wedding@BlessingandDennis.com"
              className="btn-wine inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── RSVP CTA ─────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-5 text-center">
        <div className="max-w-lg mx-auto">
          <FleuronDivider className="mb-10" />
          <p className="font-garamond text-muted text-base mb-6">
            Have you let us know you are coming?
          </p>
          <Link href="/rsvp" className="btn-wine-filled">
            RSVP Now
          </Link>
          <FleuronDivider className="mt-10" />
        </div>
      </section>
    </Layout>
  );
}
