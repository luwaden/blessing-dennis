import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { SectionLabel, FleuronDivider, HouseLogo } from '../components/ArchDecor';

const SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

const YES_MESSAGE = {
  heading: 'We Cannot Wait to See You!',
  body: `Your RSVP has been received and we are absolutely delighted you will be joining us on August 1st, 2026.
  
  You will be receiving a confirmation email with all the details you need — venue, schedule, dress code and more.
  
  Please arrive by 9:30 AM so we can begin the ceremony promptly at 10:00 AM. If you have any questions before the big day, do not hesitate to reach out.
  
  See you on the dance floor. 🎉`,
};

const NO_MESSAGE = {
  heading: 'We Will Miss You Dearly',
  body: `We completely understand that life does not always make it possible, and we are grateful you took the time to let us know.
  
  You will be very much in our hearts on the day, and we look forward to celebrating with you another time soon.
  
  With all our love — Blessing & Dennis.`,
};

function FormField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-garamond text-sm tracking-[0.2em] uppercase text-ink opacity-70">
        {label} {required && <span className="text-wine opacity-80">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'font-garamond text-base text-ink bg-transparent border-b border-wine border-opacity-30 focus:border-opacity-80 outline-none py-2 transition-all duration-300 placeholder:text-muted placeholder:opacity-50 w-full';

export default function RSVP() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attending: '',
    guests: '1',
    meal: '',
    dietaryNotes: '',
    song: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | yes | no | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.attending) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      // Build form-encoded payload for Apps Script
      const payload = new URLSearchParams({
        firstName:     form.firstName,
        lastName:      form.lastName,
        email:         form.email,
        phone:         form.phone,
        attending:     form.attending,
        guests:        form.attending === 'yes' ? form.guests : '0',
        meal:          form.meal,
        dietaryNotes:  form.dietaryNotes,
        song:          form.song,
        message:       form.message,
        timestamp:     new Date().toISOString(),
      });

      if (SCRIPT_URL) {
        const res = await fetch(SCRIPT_URL, {
          method:  'POST',
          mode:    'no-cors', // Apps Script requires no-cors
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body:    payload.toString(),
        });
        // no-cors returns opaque response — assume success after fetch
      }

      // Show response based on attending choice
      setStatus(form.attending === 'yes' ? 'yes' : 'no');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  };

  // ── Success / Response state ───────────────────────────────
  if (status === 'yes' || status === 'no') {
    const msg = status === 'yes' ? YES_MESSAGE : NO_MESSAGE;
    return (
      <Layout>
        <Head><title>RSVP — Blessing & Dennis</title></Head>
        <div className="min-h-screen bg-cream flex items-center justify-center px-5 py-32">
          <div className="max-w-lg w-full text-center">
            {/* House icon */}
            <div className="flex justify-center mb-6">
              <HouseLogo size={48} color="#722F37" />
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              {status === 'yes' ? (
                <div className="w-16 h-16 rounded-full bg-wine flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14 L11 20 L23 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full border-2 border-wine flex items-center justify-center">
                  <span className="font-script text-wine text-3xl leading-none">♥</span>
                </div>
              )}
            </div>

            <h2 className="font-script text-wine text-5xl md:text-6xl mb-6 leading-none">
              {msg.heading}
            </h2>

            <FleuronDivider className="mb-6" />

            {msg.body.split('\n\n').map((para, i) => (
              <p key={i} className="font-garamond text-ink text-lg leading-relaxed mb-4 whitespace-pre-line">
                {para}
              </p>
            ))}

            <FleuronDivider className="my-8" />

            <p className="font-garamond italic text-wine text-xl mb-6">
              With all our love, Blessing & Dennis
            </p>
            <p className="font-garamond text-muted text-sm italic mb-8">#BlessingAndDennis2026</p>

            <button
              onClick={() => {
                setStatus('idle');
                setForm({ firstName:'',lastName:'',email:'',phone:'',attending:'',guests:'1',meal:'',dietaryNotes:'',song:'',message:'' });
              }}
              className="btn-wine"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // ── RSVP Form ─────────────────────────────────────────────
  return (
    <Layout>
      <Head>
        <title>RSVP — Blessing & Dennis</title>
      </Head>

      <PageHeader
        title="RSVP"
        label="Kindly Respond"
        subtitle="Please let us know by June 15, 2026 whether you will be joining us."
      />

      <section className="bg-cream py-16 md:py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Your Response" />
            <h2 className="font-script text-wine mt-3 text-4xl md:text-5xl">Will You Be There?</h2>
            <p className="font-garamond italic text-muted text-base mt-3 max-w-md mx-auto">
              Every seat matters, every face we love. We hope to see yours on August 1st.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white border border-wine border-opacity-15 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>

              {/* ── Name row ─────────────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="First Name" required>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Amara"
                    className={inputClass}
                    required
                  />
                </FormField>
                <FormField label="Last Name" required>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Okonkwo"
                    className={inputClass}
                    required
                  />
                </FormField>
              </div>

              {/* ── Contact ──────────────────────────────────── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Email Address" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="amara@email.com"
                    className={inputClass}
                    required
                  />
                </FormField>
                <FormField label="Phone Number">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className={inputClass}
                  />
                </FormField>
              </div>

              {/* ── Attending ────────────────────────────────── */}
              <FormField label="Will You Be Attending?" required>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {[
                    { value: 'yes', label: 'Joyfully Accepts' },
                    { value: 'no',  label: 'Regretfully Declines' },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className={`flex items-center gap-3 cursor-pointer border p-4 flex-1 transition-all duration-300 ${
                        form.attending === value
                          ? 'border-wine bg-wine-pale text-wine'
                          : 'border-wine border-opacity-20 text-muted hover:border-opacity-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={value}
                        checked={form.attending === value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {/* Custom radio */}
                      <span
                        className={`w-4 h-4 flex-shrink-0 rounded-full border-2 transition-all ${
                          form.attending === value ? 'border-wine bg-wine' : 'border-muted bg-transparent'
                        }`}
                      />
                      <span className="font-garamond text-base">{label}</span>
                    </label>
                  ))}
                </div>
              </FormField>

              {/* ── Conditional: attending yes fields ───────── */}
              {form.attending === 'yes' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Number of Guests (including yourself)">
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        {[1,2,3,4,5].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Meal Preference">
                      <select
                        name="meal"
                        value={form.meal}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a preference</option>
                        <option value="Standard">Standard Menu</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Halal">Halal</option>
                        <option value="Gluten-Free">Gluten-Free</option>
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Dietary Restrictions / Allergies">
                    <input
                      type="text"
                      name="dietaryNotes"
                      value={form.dietaryNotes}
                      onChange={handleChange}
                      placeholder="Nut allergy, lactose intolerance, etc."
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Your Song Request 🎵">
                    <input
                      type="text"
                      name="song"
                      value={form.song}
                      onChange={handleChange}
                      placeholder="Tell the DJ what to play for you!"
                      className={inputClass}
                    />
                  </FormField>
                </>
              )}

              {/* ── Message ──────────────────────────────────── */}
              <FormField label="A Note for the Couple">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Words of love, advice, or simply hello…"
                  className={`${inputClass} resize-none`}
                />
              </FormField>

              {/* ── Error message ─────────────────────────── */}
              {errorMsg && (
                <p className="font-garamond text-wine text-sm border border-wine border-opacity-30 p-4">
                  {errorMsg}
                </p>
              )}

              {/* ── Submit ───────────────────────────────────── */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-wine-filled w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending Your Response…' : 'Send My RSVP'}
                </button>
                <p className="font-garamond italic text-muted text-xs mt-4">
                  You will receive a confirmation once submitted.
                </p>
              </div>
            </form>
          </div>

          {/* Deadline note */}
          <div className="text-center mt-8">
            <p className="font-garamond text-muted text-sm">
              RSVP deadline: <span className="text-wine font-medium">June 15, 2026</span>
            </p>
            <p className="font-garamond italic text-muted text-sm mt-1">
              Questions? Email{' '}
              <a href="mailto:wedding@BlessingandDennis.com" className="text-wine underline underline-offset-2">
                wedding@BlessingandDennis.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
