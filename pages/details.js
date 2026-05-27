import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel, FleuronDivider, ArchOrnament } from '../components/ArchDecor';
import { schedule, wedding,contacts,venues } from '../config/wedding';
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
{/* ── Venues ─────────────────────────────────────────────── */}
<section className="bg-white py-16 md:py-24 px-5">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-14">
      <SectionLabel label="The Venues" />
      <h2 className="font-script text-wine mt-4 text-4xl md:text-5xl">Where & When</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Church */}
      <div className="border border-wine border-opacity-15 p-8">
        <span className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 block mb-3">
          Ceremony
        </span>
        <h3 className="font-script text-wine text-3xl mb-4 leading-tight">
          {venues.church.name}
        </h3>
        <div className="space-y-3 mb-6">
          <p className="font-garamond text-ink text-base">{venues.church.address}</p>
          <p className="font-garamond text-ink text-base">{venues.church.city}</p>
          <p className="font-garamond text-wine font-medium">⏱ {venues.church.time}</p>
        </div>
        <a href={venues.church.mapLink} target="_blank" rel="noopener noreferrer" className="btn-wine inline-block">
          View on Map
        </a>
      </div>

      {/* Reception */}
      <div className="border border-wine border-opacity-40 p-8 bg-wine-pale">
        <span className="font-garamond text-xs tracking-[0.3em] uppercase text-wine opacity-70 block mb-3">
          Reception
        </span>
        <h3 className="font-script text-wine text-3xl mb-4 leading-tight">
          {venues.reception.name}
        </h3>
        <div className="space-y-3 mb-6">
          <p className="font-garamond text-ink text-base">{venues.reception.address}</p>
          <p className="font-garamond text-ink text-base">{venues.reception.city}</p>
          <p className="font-garamond text-wine font-medium">⏱ {venues.reception.time}</p>
        </div>
        <a href={venues.reception.mapLink} target="_blank" rel="noopener noreferrer" className="btn-wine inline-block">
          View on Map
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

            {/* ── Contacts ──────────────────────────────────────────── */}
<section className="bg-cream py-16 md:py-20 px-5">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-12">
      <SectionLabel label="Need Help?" />
      <h2 className="font-script text-wine mt-4 text-4xl md:text-5xl">
        Contact the Team
      </h2>

      <p className="font-garamond italic text-muted text-base mt-3 max-w-md mx-auto">
        Have a question before or on the day? Reach out to any of our coordinators below.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {contacts.map((person) => (
        <a
          key={person.name}
          href={`tel:${person.phone}`}
          className="flex items-center gap-5 bg-white border border-wine border-opacity-15 p-6 hover:border-opacity-40 transition-all duration-300 group"
        >
          {/* Arch avatar placeholder */}
          <div
            className="w-12 h-14 flex-shrink-0 bg-wine-pale flex items-end justify-center overflow-hidden"
            style={{ borderRadius: '50% 50% 0 0 / 40% 40% 0 0' }}
          >
            <span className="font-script text-wine text-2xl leading-none pb-1">
              {person.name[0]}
            </span>
          </div>

          <div className="min-w-0">
            <p className="font-garamond font-semibold text-ink text-lg leading-tight group-hover:text-wine transition-colors">
              {person.name}
            </p>

            <p className="font-garamond italic text-muted text-sm">
              {person.role}
            </p>

            <p className="font-garamond text-wine text-sm mt-1 tracking-wide">
              {person.phone}
            </p>
          </div>

          {/* Call icon */}
          <svg
            className="ml-auto flex-shrink-0 opacity-30 group-hover:opacity-70 transition-opacity"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#722F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
        </a>
      ))}
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
