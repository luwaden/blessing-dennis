import Link from 'next/link';
import Layout from '../components/Layout';
import { HouseLogo, FleuronDivider } from '../components/ArchDecor';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-screen bg-cream flex items-center justify-center px-5 py-32">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <HouseLogo size={48} color="#722F37" />
          </div>

          <p className="font-garamond text-xs tracking-[0.4em] uppercase text-wine opacity-70 mb-4">
            Page Not Found
          </p>

          <h1
            className="font-script text-wine leading-none mb-4"
            style={{ fontSize: 'clamp(4rem, 15vw, 7rem)' }}
          >
            404
          </h1>

          <FleuronDivider className="my-6" />

          <p className="font-garamond italic text-muted text-lg mb-8">
            Hmm, this page seems to have wandered off before the big day.
            Let us find our way back home.
          </p>

          <Link href="/" className="btn-wine-filled">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
