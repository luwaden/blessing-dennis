import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel, FleuronDivider } from '../components/ArchDecor';

const registryItems = [
  {
    category: 'Kitchen & Dining',
    items: [
      { name: 'Gas Cooker', note: '4 or 5 Burner Standing Cooker', price: '₦250,000', qty: 1, claimed: 0 },
      { name: 'Blender', note: 'Heavy Duty Kitchen Blender', price: '₦80,000', qty: 1, claimed: 0 },
      { name: 'Microwave Oven', note: 'Digital with Grill Function', price: '₦120,000', qty: 1, claimed: 0 },
      { name: 'Electric Kettle', note: 'Fast Boil Stainless Steel', price: '₦25,000', qty: 1, claimed: 0 },
      { name: 'Dinner Set', note: 'Complete Set for 12 People', price: '₦80,000', qty: 1, claimed: 0 },
      { name: 'Cookware Set', note: 'Non-stick Pots and Pans', price: '₦100,000', qty: 1, claimed: 0 },
      { name: 'Cutlery Set', note: '24-Piece Stainless Steel Set', price: '₦35,000', qty: 1, claimed: 0 },
    ],
  },

  {
    category: 'Bedroom & Linen',
    items: [
      { name: 'Bed Frame', note: 'Queen Size Wooden Frame', price: '₦180,000', qty: 1, claimed: 0 },
      { name: 'Orthopedic Mattress', note: '6x6 Premium Mattress', price: '₦250,000', qty: 1, claimed: 0 },
      { name: 'Bedsheet Set', note: 'Cotton, Queen Size', price: '₦30,000', qty: 2, claimed: 0 },
      { name: 'Duvet & Pillow Set', note: 'Complete Bedding Package', price: '₦60,000', qty: 1, claimed: 0 },
      { name: 'Bath Towel Set', note: '6-Piece Family Set', price: '₦35,000', qty: 1, claimed: 0 },
    ],
  },

  {
    category: 'Living Room',
    items: [
      { name: 'Smart TV', note: '43-inch Android TV', price: '₦300,000', qty: 1, claimed: 0 },
      { name: 'Center Table', note: 'Modern Wooden Design', price: '₦120,000', qty: 1, claimed: 0 },
      { name: 'Standing Fan', note: 'Rechargeable Fan', price: '₦85,000', qty: 2, claimed: 0 },
      { name: 'Curtains', note: 'Living Room Window Set', price: '₦50,000', qty: 1, claimed: 0 },
      { name: 'Rug', note: 'Living Room Area Rug', price: '₦70,000', qty: 1, claimed: 0 },
    ],
  },

  {
    category: 'Household Essentials',
    items: [
      { name: 'Washing Machine', note: 'Automatic Front Load', price: '₦350,000', qty: 1, claimed: 0 },
      { name: 'Refrigerator', note: 'Double Door Fridge', price: '₦450,000', qty: 1, claimed: 0 },
      { name: 'Generator Contribution', note: 'Support our home power setup', price: 'Any Amount', qty: null, claimed: 0, open: true },
      { name: 'Water Dispenser', note: 'Hot and Cold', price: '₦80,000', qty: 1, claimed: 0 },
      { name: 'Household Shopping Fund', note: 'Help us purchase daily essentials', price: 'Any Amount', qty: null, claimed: 0, open: true },
    ],
  },

  {
    category: 'Home Setup',
    items: [
      { name: 'Inverter System Contribution', note: 'Support our backup power solution', price: 'Any Amount', qty: null, claimed: 0, open: true },
      { name: 'Air Conditioner', note: '1.5HP Split Unit', price: '₦400,000', qty: 1, claimed: 0 },
      { name: 'Pressing Iron', note: 'Steam Iron', price: '₦25,000', qty: 1, claimed: 0 },
      { name: 'Home Furnishing Fund', note: 'Support our home setup journey', price: 'Any Amount', qty: null, claimed: 0, open: true },
    ],
  },
];

export const bankDetails = [
  { bank: 'UBA', accountName: 'Ayodeji Dennis Oluwatunla', accountNumber: '2074017708' },
  { bank: 'Sterling Bank', accountName: 'Blessing Oluwaseun Obafemi', accountNumber: '0067961114' },
];

function RegistryItem({ item }) {
  const isClaimed = item.claimed >= (item.qty || 1);
  return (
    <div
      className={`flex items-start justify-between gap-4 py-4 border-b border-wine border-opacity-10 last:border-0 ${isClaimed ? 'opacity-40' : ''}`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-garamond font-medium text-ink text-base">{item.name}</h4>
          {isClaimed && (
            <span className="font-garamond text-xs tracking-widest text-white bg-wine px-2 py-0.5">
              Claimed
            </span>
          )}
          {item.open && (
            <span className="font-garamond text-xs tracking-widest text-wine border border-wine border-opacity-40 px-2 py-0.5">
              Open
            </span>
          )}
        </div>
        {item.note && (
          <p className="font-garamond italic text-muted text-sm mt-0.5">{item.note}</p>
        )}
        {item.qty && item.qty > 1 && (
          <p className="font-garamond text-muted text-xs mt-1">Qty needed: {item.qty}</p>
        )}
      </div>
      <div className="text-right flex-shrink-0">
        <span className="font-garamond text-wine font-medium text-sm">{item.price}</span>
      </div>
    </div>
  );
}

export default function Registry() {
  return (
    <Layout>
      <Head>
        <title>Gift Registry — Blessing & Dennis</title>
      </Head>

      <PageHeader
        title="Gift Registry"
        label="Our Wishes"
        subtitle="Your presence is our greatest gift. But if you wish to give more, here is our list."
      />

      {/* ── Intro note ───────────────────────────────────────── */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <FleuronDivider className="mb-10" />
          <p className="font-garamond text-ink text-lg leading-relaxed mb-4">
            We are so grateful you are celebrating with us. Our greatest wish is simply to have you there.
            If you would like to give a gift, we have put together a list of things that will help us build
            our first home together.
          </p>
          <p className="font-garamond italic text-muted text-base">
            Monetary contributions toward our honeymoon or home are also deeply cherished.
          </p>
          <FleuronDivider className="mt-10" />
        </div>
      </section>

      {/* ── Registry list ─────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Our Wishlist" />
            <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">Things We Would Love</h2>
          </div>

          <div className="space-y-10">
            {registryItems.map((cat) => (
              <div key={cat.category} className="bg-white p-6 md:p-8 border border-wine border-opacity-10">
                {/* Category header with arch motif */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-8 h-8 flex-shrink-0 border border-wine border-opacity-40"
                    style={{ borderRadius: '50% 50% 0 0 / 40% 40% 0 0' }}
                  />
                  <h3 className="font-garamond font-semibold text-ink text-xl tracking-wide">
                    {cat.category}
                  </h3>
                  <span className="flex-1 h-px bg-wine opacity-10" />
                </div>
                <div>
                  {cat.items.map((item) => (
                    <RegistryItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bank transfer ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel label="Bank Transfer" />
            <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">Cash Contributions</h2>
            <p className="font-garamond text-muted italic text-base mt-3 max-w-md mx-auto">
              If you prefer to send a cash gift directly, please use the account details below.
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
    </Layout>
  );
}
