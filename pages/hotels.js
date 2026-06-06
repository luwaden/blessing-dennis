import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel, FleuronDivider } from '../components/ArchDecor';

const hotels = [
  {
    name: 'The Oriental Hotel',
    stars: 5,
    category: 'Luxury',
    address: '3 Lekki-Epe Expressway, Victoria Island, Lagos',
    phone: '+234 1 279 5000',
    website: 'https://www.orientalhotels.com.ng',
    priceFrom: '₦45,000',
    priceTo: '₦120,000',
    distance: '2 min',
    note: 'The Wedding Venue — ask for the special wedding guest rate.',
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    highlight: true,
  },
  {
    name: 'Eko Hotels & Suites',
    stars: 5,
    category: 'Luxury',
    address: 'Plot 1415, Adetokunbo Ademola Street, Victoria Island, Lagos',
    phone: '+234 1 460 0000',
    website: 'https://www.ekohotels.com',
    priceFrom: '₦55,000',
    priceTo: '₦150,000',
    distance: '5 min',
    note: 'A Lagos landmark with multiple restaurants and a stunning pool.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    name: 'Radisson Blu Anchorage',
    stars: 5,
    category: 'Luxury',
    address: '1A Ozumba Mbadiwe Street, Victoria Island, Lagos',
    phone: '+234 1 277 0800',
    website: 'https://www.radissonhotels.com',
    priceFrom: '₦65,000',
    priceTo: '₦200,000',
    distance: '8 min',
    note: 'Stunning waterfront views of the Lagos lagoon.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
  },
  {
    name: 'Lagos Continental Hotel',
    stars: 5,
    category: 'Luxury',
    address: 'Plot 52A, Kofo Abayomi Street, Victoria Island, Lagos',
    phone: '+234 1 236 7000',
    website: 'https://www.lagoscontinentalhotel.com',
    priceFrom: '₦50,000',
    priceTo: '₦180,000',
    distance: '5 min',
    note: 'Elegant rooms with excellent service and superb dining.',
    img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80',
  },
  {
    name: 'Protea Hotel by Marriott',
    stars: 4,
    category: 'Premium',
    address: 'Plot 2, Ligali Ayorinde Street, Victoria Island, Lagos',
    phone: '+234 1 227 8000',
    website: 'https://www.marriott.com',
    priceFrom: '₦40,000',
    priceTo: '₦100,000',
    distance: '7 min',
    note: 'Comfortable, well-located and great value for money.',
    img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80',
  },
  {
    name: 'Southern Sun Ikoyi',
    stars: 4,
    category: 'Premium',
    address: '11A Kingsway Road, Ikoyi, Lagos',
    phone: '+234 1 280 5200',
    website: 'https://www.tsogosun.com',
    priceFrom: '₦35,000',
    priceTo: '₦90,000',
    distance: '15 min',
    note: 'A tranquil retreat in the leafy Ikoyi neighbourhood.',
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
        subtitle="A selection of hotels near The Oriental Hotel for your comfort."
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
          <h3 className="font-script text-wine text-3xl md:text-4xl mb-4">Getting Around Lagos</h3>
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
