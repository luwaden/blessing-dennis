// ─────────────────────────────────────────────────────────────────────
// WEDDING CONFIGURATION  — update this file with your actual details
// ─────────────────────────────────────────────────────────────────────

export const wedding = {
  bride: {
    firstName: 'Blessing',
    lastName: 'Obafemi',
    bio: `Blessing Oluwaseun Obafemi is a Lagos-born banker and senior data analyst whose world is beautifully ruled by numbers, patterns, and the quiet poetry hidden inside data. But beyond the dashboards and precision, she sees life — and love — with rare clarity. Her analytical eyes didn’t just read trends… they made a single undeniable conclusion: Dennis is her one and only.

Beneath her structured brilliance is a deeply soft generous heart , that stole dennis' heart: a woman anchored in faith, overflowing with kindness, and constantly extending grace to everyone around her. She loves God with sincerity, loves people with intention, and somehow manages to balance corporate excellence with a warmth that feels almost uncalculated — almost..
    SHe grew up with, family laughter, and Sunday rhythms that shaped her steady spirit.`,
    photo: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_600,h_800,c_fill/bride-portrait.jpg',
  },
  groom: {
    firstName: 'Dennis',
    lastName: 'Oluwatunla',
    bio: `Ayodeji Dennis Oluwatunla is an Ibadan-born software engineer who understands systems, logic, and elegant architecture — whether in code or in life. Somewhere between backend APIs and problem-solving, he quietly engineered the most unexpected system of all: his way into Blessing Oluwaseun’s heart.

Calm, observant, and effortlessly dependable, Dennis carries the kind of presence that doesn’t need noise to be felt. He notices details others miss, remembers what matters, and shows up with consistency that feels almost like good engineering — reliable, intentional, and hard to break.`
,
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
    year: '2018 – 2019',
    title: 'Two Worlds, One Prayer Room',
    text: `Blessing walked into an RFC Prayer Unit meeting thinking it was just another quiet spiritual gathering… maybe even a short one (God laughs in timelines).

Dennis was already there — calm, focused, and slightly unaware that his life was about to be “recompiled.”

They didn’t talk much. Just polite hellos, spiritual intensity, and zero romantic awareness. In Blessing’s mind: “just fellowship.” In Dennis’ mind: “just another prayer meeting.”

Spoiler: it was not “just.”`,
    side: 'right',
  },

  {
    year: '2019',
    title: 'The Prayer Circle Era',
    text: `Dennis later invited a small group for intercessory prayers — and somehow, Blessing ended up there too (coincidence? we think not).

From Blessing’s POV: “A nice prayer group with disciplined people.”

From Dennis’ POV: “A prayer group… where one particular person keeps laughing at my serious prayer face.”

What started as intercession slowly turned into friendship, inside jokes, shared scriptures, and “see you next prayer meeting” becoming the highlight of the week.`,
    side: 'left',
  },

  {
    year: '2020',
    title: 'Friendship, But Make It Suspicious',
    text: `By 2020, things were no longer normal.

Blessing would pray for Dennis’ future wife with full sincerity… unknowingly submitting her own CV.

Dennis at a 2018 Young Ministers Retreat had once thought, “I hope my future wife is like her…” — then proceeded to never revisit that thought out loud again.

Meanwhile, their friendship grew: long chats, spiritual accountability, laughter that made prayer meetings slightly less “quiet,” and a bond that neither of them had vocabulary for yet.`,
    side: 'right',
  },

  {
    year: '2020 (Lockdown Era)',
    title: 'When Everything Slowed Down… Except Them',
    text: `COVID lockdown came and the world paused — but somehow their connection didn’t.

Between prayers, check-ins, memes disguised as encouragement, and “are you okay?” messages that came at exactly the right time, something shifted.

From Blessing’s POV: “Dennis is becoming… very consistent.”

From Dennis’ POV: “I think I might be in trouble… respectfully.”

Eventually, Dennis did the brave thing: he asked.

Blessing said yes — after pretending she needed time to “pray about it” (God had already answered, she just wanted emotional suspense).`,
    side: 'left',
  },

  {
    year: '2021 – 2022',
    title: 'Soft Love, Strong Foundation',
    text: `They loved intentionally.

Late-night calls that always said “just 10 minutes” (they lasted 2 hours).
Arguments that ended in prayer, laughter, or both.

They learned each other deeply — strengths, quirks, and the fact that Dennis becomes very serious when food is involved.

One unforgettable moment: at a restaurant in UI, Amala and smoked fish soup made a dramatic appearance… directly into Dennis’ eyes.

Blessing’s response? No panic. No drama. Just immediate fish accountability: she ate it.`,
    side: 'right',
  },

  {
    year: 'September 2023 – 2024',
    title: 'The Pause That Hurt… and Healed',
    text: `Not every chapter was soft.

They paused their relationship in September 2023 — 20 months apart, full of silence, reflection, growth, and difficult questions.

From the outside: distance.
From the inside: healing in progress.

But love has a way of not erasing itself — just waiting until people are ready.

And they were.

When they found each other again, it wasn’t rushed. It wasn’t emotional confusion. It was clarity.

This time, they didn’t just return… they chose each other.`,
    side: 'left',
  },

  {
    year: '2025',
    title: 'The Decision Was Already Made',
    text: `By now, nothing needed to be forced.

Dennis had already known — somewhere between consistency, peace, and shared laughter — that this was home.

Blessing had already known too — somewhere between data, prayer, and undeniable peace — that this was the man.

So when forever started to look like a real conversation, it wasn’t surprising anymore.

It was just right.`,
    side: 'right',
  },

  {
    year: '2026',
    title: 'Forever Begins (Officially)',
    text: `From a prayer unit meeting to a lifetime covenant.

From “just friends in ministry” to “this is my person.”

Surrounded by love, faith, laughter, and everyone who watched the story unfold from the beginning, Blessing and Dennis step into forever — not as a surprise, but as a promise that took time to mature.

And this time, there is no pause button.`,
    side: 'left',
  },
];