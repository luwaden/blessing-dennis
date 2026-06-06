// ─────────────────────────────────────────────────────────────────────
// WEDDING CONFIGURATION  — update this file with your actual details
// ─────────────────────────────────────────────────────────────────────

export const wedding = {
  bride: {
    firstName: 'Blessing',
    lastName: 'Obafemi',
    bio: `Blessing Oluwaseun Obafemi is a Lagos-born architect whose creative eye shapes everything she touches — from the buildings she designs to the way she arranges wildflowers on a Sunday morning. She finds joy in long walks, the smell of old books, and conversations that stretch past midnight. Her laugh is the kind that fills a room.`,
    photo: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_600,h_800,c_fill/bride-portrait.jpg',
  },
  groom: {
    firstName: 'Dennis',
    lastName: 'Oluwatunla',
    bio: `Ayodeji Dennis Oluwatunla grew up in Enugu with a deep love for music, football, and the unhurried pace of family Sunday lunches. Now a Lagos-based financial consultant, he has never lost that warmth. He is the man who remembers your order, notices when you are quiet, and always shows up — for everyone he loves.`,
    photo: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_600,h_800,c_fill/groom-portrait.jpg',
  },
  weddingDate: new Date('2026-08-01T10:00:00'),


  hashtag: '#BlessingAndDennis2026',
  couple: 'Blessing & Dennis',
  coupleInitials: 'B & D',
};

// Replace the single venue object with two:
export const venues = {
  
  reception: {
    name: 'St.Matthias Hall',
    address: 'Ajayi Crowther seminary, Grammar School Bus Stop, Igbein ',
    city: 'Abeokuta, Nigeria',
    mapLink: 'https://maps.app.goo.gl/rskwchj2KY7m55eo7',
  },
  church: {
    name: 'Chapel hall, Goverment house',
    address: 'oke Igbein, Abeokuta, ',
    city: 'Ogun, Nigeria',
    time: '3:00 PM',
    mapLink: 'https://maps.google.com/?q=The+Oriental+Hotel+Lagos',
  },
};

export const contacts = [
  { name: 'Abayomi',   role: 'Head of Planning',      phone: '+234 801 000 0001' },
  { name: 'Florence',  role: 'Bride\'s Coordinator',   phone: '+234 801 000 0002' },
  { name: 'Tolulope',  role: 'Groom\'s Coordinator',   phone: '+234 801 000 0003' },
  { name: 'Ifeoluwa',  role: 'Logistics & Transport',  phone: '+234 801 000 0004' },
];


export const schedule = [
  // CHURCH SERVICE (10AM - 1PM)
  { time: '9:30 AM', event: 'Guests Arrive', note: 'Please be seated by 9:50 AM' },
  { time: '10:00 AM', event: 'Church Service Begins', note: 'Opening prayer & worship session' },
  { time: '10:30 AM', event: 'Word & Ministration', note: 'Sermon and marriage teachings' },
  { time: '11:15 AM', event: 'Exchange of Vows', note: 'The sacred covenant moment' },
  { time: '11:45 AM', event: 'Ring Exchange', note: 'Blessing of the rings' },
  { time: '12:15 PM', event: 'Signing of Marriage Register', note: 'Witnessed by family and church officials' },
  { time: '12:30 PM', event: 'Closing Prayer & Photo Session', note: 'Group photos with family & bridal party' },
  { time: '1:00 PM', event: 'End of Church Ceremony', note: 'Guests proceed to reception venue' },

  // RECEPTION (1PM - 6PM)
  { time: '1:00 PM', event: 'Cocktail & Guest Arrival', note: 'Music, refreshments & seating' },
  { time: '2:00 PM', event: 'Grand Entrance', note: 'Couple enters reception hall' },
  { time: '2:15 PM', event: 'Welcome Speech & Toasts', note: 'Family and friends speak' },
  { time: '3:00 PM', event: 'First Dance', note: 'Couple’s special moment' },
  { time: '3:30 PM', event: 'Entertainment / Cultural Display', note: 'Dance, music & performances' },
  { time: '4:30 PM', event: 'Dinner is Served', note: 'Buffet or plated service' },
  { time: '5:15 PM', event: 'Cake Cutting', note: 'Celebration moment' },
  { time: '5:30 PM', event: 'Open Dance Floor', note: 'Guests celebrate with music' },
  { time: '6:00 PM', event: 'Closing Prayer & Departure', note: 'End of celebration' },
];

export const loveStory = [
  {
    year: 'March 2020',
    title: 'The First Hello',
    text: `It was an ordinary Tuesday afternoon at a mutual friend's birthday gathering in Lekki. Blessing was laughing at something across the room when Dennis first saw her. He spent the next hour working up the courage to say hello. The conversation that followed lasted until the venue lights came on.`,
    side: 'right',
  },
  {
    year: 'April 2020',
    title: 'First Date',
    text: `Over jollof rice and conversation that stretched from afternoon into evening at their favourite Ikoyi spot, they discovered they shared the same love for old Fela Kuti records, terrible Nigerian films, and the dream of one day building a home that felt like a warm embrace.`,
    side: 'left',
  },
  {
    year: '2021',
    title: 'Falling Deeper',
    text: `Through long phone calls and quiet Sunday mornings, through family celebrations and the beautiful ordinary of everyday life, their love grew into something neither had quite imagined possible. They became each other's calm in every storm.`,
    side: 'right',
  },
  {
    year: '2022 – 2024',
    title: 'Building Together',
    text: `Two careers, two families, and one shared vision of the future. They traveled across three continents, built deep friendships together, and quietly — joyfully — began planning a life that felt entirely like home.`,
    side: 'left',
  },
  {
    year: 'December 2025',
    title: 'The Proposal',
    text: `On a quiet December evening at their favourite corner of Bar Beach, with the Lagos skyline glittering in the distance and Blessing completely convinced they were just "going for a walk," Dennis got down on one knee. She said yes before he could finish the question.`,
    side: 'right',
  },
  {
    year: 'August 1, 2026',
    title: 'Forever Begins',
    text: `And now, surrounded by every person who has loved, prayed for, and cheered them on, they take this sacred, long-awaited step into forever.`,
    side: 'left',
  },
];
