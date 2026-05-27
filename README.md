# Blessing & Dennis — Wedding Website

A complete, fully responsive Next.js wedding website with:
- 🏠 **Arch / home motif** design throughout
- ⏳ **Live countdown** to August 1, 2026
- 🖼️ **Hero slider** with 5 rotating images
- 📖 **Our Story** — timeline + couple bios
- 🖼️ **Gallery** — masonry grid with lightbox
- 🏨 **Hotels** — nearby accommodation guide
- 🎁 **Gift Registry** — wishlist + bank transfer details
- 📅 **Details** — schedule, venue, dress code, FAQ
- 📬 **RSVP** — form connected to Google Sheets + personalised confirmation emails
- White & wine color palette, Pinyon Script + EB Garamond typography

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.local.example .env.local

# 3. Run in development
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm start
```

---

## Configuration

### 1. Personalise the Wedding Details
Edit **`config/wedding.js`** to update:
- Bride & groom names, bios, photos
- Wedding date, venue, address
- Love story timeline
- Schedule / programme

### 2. Add Your Photos (Cloudinary)
Edit **`config/images.js`**:
- Replace `YOUR_CLOUD` with your Cloudinary cloud name
- Upload photos to Cloudinary and update each image public ID
- The file includes demo Unsplash images so the site works immediately

### 3. Google Apps Script (RSVP → Google Sheets)

**Step 1 — Create the Sheet**
1. Go to [sheets.google.com](https://sheets.google.com) → create a new spreadsheet
2. Name it "Wedding RSVPs"
3. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/`**`SHEET_ID`**`/edit`

**Step 2 — Deploy the Script**
1. Go to [script.google.com](https://script.google.com) → New Project
2. Paste the contents of `google-apps-script/Code.gs`
3. Update these values inside the script:
   ```javascript
   SHEET_ID:      'your-google-sheet-id',
   COUPLE_EMAIL:  'your@email.com',
   ```
4. Click **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorise the app when prompted
6. Copy the **Web App URL**

**Step 3 — Add to Environment**
```bash
# .env.local
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

> **Note:** The RSVP form uses `fetch` with `mode: 'no-cors'` (required for Apps Script).
> This means the browser cannot read the response body, but the POST is delivered.
> Test by filling the form and checking your Google Sheet.

---

## Project Structure

```
wedding-site/
├── components/
│   ├── ArchDecor.js        — SVG house logo, arch ornaments, dividers
│   ├── CountdownTimer.js   — Live countdown to Aug 1, 2026
│   ├── Footer.js
│   ├── HeroSlider.js       — Auto-advancing hero with 5 slides
│   ├── Layout.js           — Navbar + Footer wrapper
│   ├── Navbar.js           — Transparent/opaque nav + mobile drawer
│   └── PageHeader.js       — Inner page hero header
├── config/
│   ├── wedding.js          — All wedding data (names, story, schedule)
│   └── images.js           — All Cloudinary image URLs
├── google-apps-script/
│   └── Code.gs             — Google Apps Script (copy to script.google.com)
├── pages/
│   ├── _app.js
│   ├── _document.js        — Google Fonts loaded here
│   ├── index.js            — Homepage
│   ├── our-story.js        — Couple bios + love story timeline
│   ├── gallery.js          — Masonry photo gallery + lightbox
│   ├── hotels.js           — Nearby accommodation guide
│   ├── registry.js         — Gift wishlist + bank details
│   ├── details.js          — Schedule, venue, FAQ
│   ├── rsvp.js             — RSVP form → Google Sheets
│   └── 404.js              — Custom not-found page
├── styles/
│   └── globals.css         — Tailwind base + custom utilities
├── public/
│   └── favicon.svg         — House/arch logo favicon
├── .env.local.example      — Environment variable template
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Deployment

### Vercel (Recommended — free)
```bash
npm i -g vercel
vercel
# Add NEXT_PUBLIC_APPS_SCRIPT_URL in Vercel dashboard → Settings → Environment Variables
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder, or connect your GitHub repo
```

### Custom Domain
1. Buy a domain (e.g. `BlessingandDennis.com`)
2. Add to Vercel: Settings → Domains
3. Update DNS at your registrar

---

## Fonts

| Font | Use |
|------|-----|
| Pinyon Script | Couple names, section titles, romantic display text |
| EB Garamond | Body copy, labels, navigation, all supporting text |

Both loaded via Google Fonts in `_document.js`.

---

## Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Wine | `#722F37` | Primary accent — all key elements |
| Wine Hover | `#5a1f27` | Button hover states |
| Wine Pale | `#F5E8EA` | Subtle selected state backgrounds |
| Cream | `#FAF7F4` | Primary background |
| Parchment | `#F5EFE6` | Quote / callout sections |
| Ink | `#2C1810` | Body text |
| Muted | `#8B7355` | Secondary text, captions |

---

## Tips

- **All images** use Unsplash as demo placeholders. Replace with Cloudinary links in `config/images.js` for the real site.
- **RSVP deadline** is set to June 15, 2026 in the UI. Update in `pages/rsvp.js` if needed.
- **Bank details** in `pages/registry.js` are placeholders — replace with real account numbers.
- The **Google Apps Script** email templates include `https://YOUR_WEDDING_WEBSITE_URL.com` — replace with your real domain.

---

Made with love for the wedding of **Blessing & Dennis** 🤍 August 1, 2026
