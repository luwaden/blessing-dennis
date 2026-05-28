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
  ourStory:  square('https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884530/IMG_20251124_165649_xklkar.jpg'),
  gallery:   square('https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884516/IMG_20260321_164124_900_dwce0o.jpg'),
  hotels:    square('wedding/section-hotels'),
  registry:  square('wedding/section-registry'),
  rsvp:      square('wedding/section-rsvp'),
  details:   square('wedding/section-details'),
};

// ─── Fallback / Demo Images (Unsplash - replace with Cloudinary in production)
// These are provided so the site renders beautifully right away.
export const demoHeroImages = [
  'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884347/IMG_20251124_170028_1_uipywc.jpg',
  'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779974829/PXL_20250815_101649200.PORTRAIT_dftccg.jpg',
  'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886529/IMG_20260214_115400_333_sxxnbn.jpg',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80',
  'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884402/PXL_20250816_130249029_qu17om.jpg',
];

export const demoGalleryImages = [
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884535/PXL_20250815_101935787_a7omcx.jpg', alt: 'Together forever' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884679/IMG_20251124_170522_mezstv.jpg', alt: 'Our day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886529/IMG_20260214_115400_333_sxxnbn.jpg', alt: 'Engagement shoot' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884402/PXL_20250816_130249029_qu17om.jpg', alt: 'Candid joy' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886007/a9e1ab6b834d4dcfbc457a05370dc6b3_whx69f.jpg', alt: 'Florals' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884672/IMG_20251124_170158_nm1r5p.jpg', alt: 'Golden hour' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886332/IMG-20220323-WA0021_m4s2rl.jpg', alt: 'Laughter' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884658/IMG-20230618-WA0021_ewkqj1.jpg', alt: 'Close-up' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886543/IMG_20260321_164256_983_1_ffceor.jpg', alt: 'Groom portrait' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886539/IMG-20211017-WA0032_istowu.jpg', alt: 'Bride portrait' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884537/IMG-20221227-WA0005_xf1d5q.jpg', alt: 'Romantic moment' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886533/IMG_20251119_115805_249_1_fpxz03.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884492/PXL_20250816_130306827_ie4xiy.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884483/PXL_20250816_125756178_vi5etd.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779884481/IMG_20250815_115102_daqv7v.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886013/IMG_20211229_152748_fatcak.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886018/f14ddb478d034fb1b9e96cee81d77ee1_lx50ua.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779885990/IMG_7380_qiiwqx.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886023/IMG-20230618-WA0023_1_sd0hv6.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886536/IMG-20220531-WA0004_pfqp2v.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886548/IMG_20260321_164126_683_xgm8ni.jpg', alt: 'Wedding day' },
  { src: 'https://res.cloudinary.com/dkgr3ff3j/image/upload/v1779886021/IMG_4358_n73kz0.jpg', alt: 'Wedding day' },
];
