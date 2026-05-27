// ─────────────────────────────────────────────────────────────────────
//  IMAGES CONFIGURATION
//  Replace YOUR_CLOUD with your Cloudinary cloud name, and update
//  each path to match your uploaded images.
// ─────────────────────────────────────────────────────────────────────

const CLD = 'https://res.cloudinary.com/YOUR_CLOUD/image/upload';

// Transformation helpers
const hero    = (id) => `${CLD}/w_1920,h_1080,c_fill,q_auto,f_auto/${id}`;
const gallery = (id) => `${CLD}/w_800,h_1000,c_fill,q_auto,f_auto/${id}`;
const portrait= (id) => `${CLD}/w_600,h_800,c_fill,q_auto,f_auto/${id}`;
const wide    = (id) => `${CLD}/w_1200,h_800,c_fill,q_auto,f_auto/${id}`;
const square  = (id) => `${CLD}/w_600,h_600,c_fill,q_auto,f_auto/${id}`;

export const heroImages = [
  hero('wedding/hero-1'),   // Replace with your image public IDs
  hero('wedding/hero-2'),
  hero('wedding/hero-3'),
  hero('wedding/hero-4'),
  hero('wedding/hero-5'),
];

export const galleryImages = [
  { src: gallery('wedding/gallery-01'), alt: 'A quiet afternoon together', span: 'tall' },
  { src: gallery('wedding/gallery-02'), alt: 'Laughing on the beach',       span: 'wide' },
  { src: gallery('wedding/gallery-03'), alt: 'Garden engagement shoot',     span: 'normal' },
  { src: gallery('wedding/gallery-04'), alt: 'Golden hour portraits',       span: 'normal' },
  { src: gallery('wedding/gallery-05'), alt: 'Our engagement day',          span: 'tall' },
  { src: gallery('wedding/gallery-06'), alt: 'Candid moments',             span: 'normal' },
  { src: gallery('wedding/gallery-07'), alt: 'Family celebration',          span: 'wide' },
  { src: gallery('wedding/gallery-08'), alt: 'Sunset together',             span: 'normal' },
  { src: gallery('wedding/gallery-09'), alt: 'First look',                  span: 'tall' },
  { src: gallery('wedding/gallery-10'), alt: 'Dancing in the rain',         span: 'normal' },
  { src: gallery('wedding/gallery-11'), alt: 'Lagos rooftop',               span: 'normal' },
  { src: gallery('wedding/gallery-12'), alt: 'The proposal day',            span: 'wide' },
];

export const storyImages = {
  hero:        wide('wedding/story-hero'),
  bride:       portrait('wedding/bride-portrait'),
  groom:       portrait('wedding/groom-portrait'),
  together:    wide('wedding/together'),
  proposal:    portrait('wedding/proposal'),
};

export const sectionPreviews = {
  ourStory:  square('wedding/section-story'),
  gallery:   square('wedding/section-gallery'),
  hotels:    square('wedding/section-hotels'),
  registry:  square('wedding/section-registry'),
  rsvp:      square('wedding/section-rsvp'),
  details:   square('wedding/section-details'),
};

// ─── Fallback / Demo Images (Unsplash - replace with Cloudinary in production)
// These are provided so the site renders beautifully right away.
export const demoHeroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80',
  'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1920&q=80',
];

export const demoGalleryImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Together forever' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Our day' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80', alt: 'Engagement shoot' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', alt: 'Candid joy' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Florals' },
  { src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80', alt: 'Golden hour' },
  { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80', alt: 'Laughter' },
  { src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80', alt: 'Close-up' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Groom portrait' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', alt: 'Bride portrait' },
  { src: 'https://images.unsplash.com/photo-1487530811015-780aefcf7aef?w=800&q=80', alt: 'Romantic moment' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Wedding day' },
];
