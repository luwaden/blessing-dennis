import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel, FleuronDivider } from '../components/ArchDecor';

const hotels = [
  {
    name: 'St. Matthias Hall, Ajayi Crowther Seminary Lodge',
    stars: 5,
    category: 'Wedding Venue',
    address: 'Ajayi Crowther Seminary, Abeokuta, Ogun State',
    phone: 'N/A',
    website: '',
    priceFrom: '₦10,000',
    priceTo: '₦50,000',
    distance: '0 min',
    note: 'The Wedding Venue — accommodation may be available on request.',
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    highlight: true,
  },

  {
    name: 'Eventos Hotel & Suites',
    stars: 4,
    category: 'Premium',
    address: 'Abeokuta, Ogun State',
    phone: '+234 XXX XXX XXXX',
    website: '',
    priceFrom: '₦35,000',
    priceTo: '₦120,000',
    distance: '10 min',
    note: 'Modern hotel with event facilities and comfortable guest rooms.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },

  {
    name: 'Continental Suites',
    stars: 4,
    category: 'Premium',
    address: 'Presidential Boulevard, Ibara, Abeokuta, Ogun State',
    phone: '+234 803 373 4340',
    website: 'https://continentalsuites.org',
    priceFrom: '₦30,000',
    priceTo: '₦150,000',
    distance: '15 min',
    note: 'One of Abeokuta’s most established hotels with suites, pool and event facilities.',
    img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80',
  },

 {
  name: 'Conference Hotel & Suites',
  stars: 5,
  category: 'Luxury',
  address: '1 Golf Resort Drive, Presidential Boulevard, Oke Mosan, Abeokuta, Ogun State',
  phone: '+234 201 271 8400',
  website: 'https://conferencehotelnigeria.com/abeokuta',
  priceFrom: '₦100,000',
  priceTo: '₦250,000',
  distance: '15 min',
  note: 'One of Abeokuta’s premier luxury hotels, offering spacious rooms, a swimming pool, fitness centre, restaurant, and excellent event facilities.',
  img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
},

  {
    name: 'IBD Hotel',
    stars: 4,
    category: 'Premium',
    address: 'M.K.O. Abiola Way, Abeokuta, Ogun State',
    phone: '+234 905 459 8660',
    website: 'https://www.ibdhotels.com',
    priceFrom: '₦30,000',
    priceTo: '₦90,000',
    distance: '18 min',
    note: 'Comfortable rooms, restaurant, pool and excellent customer service.',
    img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80',
  },

  {
    name: 'De-Prominent Hotel & Suites',
    stars: 4,
    category: 'Premium',
    address: 'Laderin, Abeokuta, Ogun State',
    phone: '+234 902 594 2374',
    website: 'https://www.de-prominenthotelandsuites.com',
    priceFrom: '₦25,000',
    priceTo: '₦60,000',
    distance: '20 min',
    note: 'Affordable luxury with modern rooms, dining and event facilities.',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#722F37" opacity="0.7">
          <polygon points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 1,4.5 4.5,4.5" />
        </svg>
      ))}
    </div>
  );
}

function HotelCard({ hotel }) {
  return (
    <div
      className={`bg-white flex flex-col overflow-hidden border transition-shadow duration-300 hover:shadow-md ${
        hotel.highlight ? 'border-wine border-opacity-50' : 'border-wine border-opacity-10'
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ borderRadius: '50% 50% 0 0 / 14% 14% 0 0' }}>
        <div className="aspect-[16/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hotel.img}
            alt={hotel.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {hotel.highlight && (
            <div className="absolute top-3 left-3 bg-wine text-white font-garamond text-xs tracking-widest px-3 py-1">
              Wedding Venue
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-garamond font-semibold text-ink text-xl leading-tight">{hotel.name}</h3>
          <span className="font-garamond text-xs tracking-widest text-wine border border-wine border-opacity-40 px-2 py-0.5 whitespace-nowrap">
            {hotel.category}
          </span>
        </div>

        <Stars count={hotel.stars} />

        <p className="font-garamond text-muted text-sm mt-3 leading-relaxed">{hotel.address}</p>

        {hotel.note && (
          <p className="font-garamond italic text-wine text-sm mt-2 opacity-80">{hotel.note}</p>
        )}

        <div className="mt-auto pt-5 border-t border-wine border-opacity-10 flex items-center justify-between flex-wrap gap-3">
          <div>
            <span className="font-garamond text-xs text-muted tracking-wider block">Per Night</span>
            <span className="font-garamond text-wine font-medium">
              {hotel.priceFrom} – {hotel.priceTo}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-garamond text-xs text-muted">{hotel.distance} from venue</span>
            <a
              href={hotel.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wine text-xs px-4 py-2"
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hotels() {
  return (
    <Layout>
      <Head>
        <title>Hotels — Blessing & Dennis</title>
      </Head>

      <PageHeader
        title="Where to Stay"
        label="Accommodations"
        subtitle="A selection of hotels near St.Matthias Hall, Ajayi Crowther Seminary
 for your comfort."
      />

      {/* ── Hotel grid ───────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Nearby Hotels" />
            <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">Rest Well, Celebrate Well</h2>
            <p className="font-garamond text-muted italic text-lg mt-3 max-w-xl mx-auto">
              All hotels are within easy reach of the wedding venue at Abeokuta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport tip ─────────────────────────────────────── */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <FleuronDivider className="mb-10" />
          <h3 className="font-script text-wine text-3xl md:text-4xl mb-4">Getting Around Abeokuta</h3>
          <p className="font-garamond text-muted text-base leading-relaxed mb-6">
            We recommend booking a ride via Bolt or Uber for comfortable, air-conditioned to travel or explore around
            Abeokuta. 
          </p>
          <p className="font-garamond italic text-wine text-sm">
            Please book your accommodation early — hotels might fills up fast for long weekends!
          </p>
          <FleuronDivider className="mt-10" />
        </div>
      </section>
    </Layout>
  );
}
