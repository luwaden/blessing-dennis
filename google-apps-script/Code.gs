/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  WEDDING RSVP — Google Apps Script
 *  File: Code.gs
 *
 *  SETUP INSTRUCTIONS:
 *  1. Go to script.google.com → New Project → paste this code
 *  2. Replace SHEET_ID with your Google Sheet ID (from its URL)
 *  3. Replace the email addresses below with the couple's real emails
 *  4. Save the project, then:
 *     Deploy → New Deployment → Web App
 *       Execute as: Me
 *       Who has access: Anyone
 *  5. Copy the Web App URL and add it to your .env.local as:
 *     NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Configuration ──────────────────────────────────────────────────────────
const CONFIG = {
  SHEET_ID:          'YOUR_GOOGLE_SHEET_ID_HERE',         // ← replace
  SHEET_NAME:        'RSVPs',
  COUPLE_EMAIL:      'wedding@BlessingandDennis.com',       // ← replace
  BRIDE_NAME:        'Blessing',
  GROOM_NAME:        'Dennis',
  WEDDING_DATE:      'Saturday, August 1, 2026',
  WEDDING_VENUE:     'St.Matthias Hall, Ajayi Crowther Seminary
, Abeokuta, Ogun
',
  CEREMONY_TIME:     '10:00 AM (doors open at 9:30 AM)',
  HASHTAG:           '#BlessingAndDennis2026',
};

// ── Main handler ───────────────────────────────────────────────────────────
function doPost(e) {
  try {
    const params = e.parameter;

    // 1. Write to Google Sheet
    writeToSheet(params);

    // 2. Send personalised email to guest
    sendGuestEmail(params);

    // 3. Notify the couple
    notifyCouple(params);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Error: ' + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Write row to Google Sheet ──────────────────────────────────────────────
function writeToSheet(p) {
  const ss    = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sheet   = ss.getSheetByName(CONFIG.SHEET_NAME);

  // Create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet.appendRow([
      'Timestamp', 'First Name', 'Last Name', 'Email', 'Phone',
      'Attending', 'No. of Guests', 'Meal Preference', 'Dietary Notes',
      'Song Request', 'Message',
    ]);
    // Style the header row
    const header = sheet.getRange(1, 1, 1, 11);
    header.setFontWeight('bold');
    header.setBackground('#722F37');
    header.setFontColor('#ffffff');
  }

  sheet.appendRow([
    p.timestamp || new Date().toISOString(),
    p.firstName  || '',
    p.lastName   || '',
    p.email      || '',
    p.phone      || '',
    p.attending  === 'yes' ? 'YES ✓' : 'NO ✗',
    p.guests     || '0',
    p.meal       || '',
    p.dietaryNotes || '',
    p.song       || '',
    p.message    || '',
  ]);
}

// ── Email: YES response ────────────────────────────────────────────────────
function buildYesEmail(p) {
  const name = p.firstName + ' ' + p.lastName;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We Cannot Wait to See You!</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
    body { margin:0; padding:0; background:#FAF7F4; font-family:'EB Garamond',Georgia,serif; color:#2C1810; }
    .wrap { max-width:600px; margin:0 auto; background:#ffffff; }
    .hero { background:#722F37; padding:48px 40px; text-align:center; }
    .hero h1 { margin:0; color:#ffffff; font-size:42px; font-weight:400; font-family:'EB Garamond',Georgia,serif; line-height:1.1; }
    .hero p  { color:rgba(255,255,255,0.75); font-size:13px; letter-spacing:0.3em; text-transform:uppercase; margin:8px 0 0; }
    .body  { padding:48px 40px; }
    .body h2 { font-size:28px; color:#722F37; font-weight:400; margin:0 0 16px; }
    .body p  { font-size:17px; line-height:1.8; color:#2C1810; margin:0 0 16px; }
    .detail-box { border:1px solid rgba(114,47,55,0.2); padding:24px; margin:28px 0; }
    .detail-box p { margin:4px 0; font-size:15px; }
    .detail-box .label { font-size:11px; letter-spacing:0.3em; text-transform:uppercase; color:#722F37; opacity:0.7; }
    .cta { text-align:center; margin:32px 0; }
    .cta a { background:#722F37; color:#ffffff; text-decoration:none; font-size:13px; letter-spacing:0.2em; text-transform:uppercase; padding:14px 32px; display:inline-block; }
    .footer { background:#FAF7F4; padding:28px 40px; text-align:center; }
    .footer p { font-size:13px; color:#8B7355; margin:4px 0; font-style:italic; }
    .rule { border:none; border-top:1px solid rgba(114,47,55,0.15); margin:24px 0; }
  </style>
</head>
<body>
  <div class="wrap">
    <!-- Hero -->
    <div class="hero">
      <p>Blessing & Dennis</p>
      <h1>We Cannot Wait to See You!</h1>
      <p style="margin-top:12px;">August 1, 2026</p>
    </div>

    <!-- Body -->
    <div class="body">
      <p>Dear ${name},</p>
      <p>
        What wonderful news — we are absolutely thrilled you will be celebrating with us!
        Your RSVP has been received and we have saved your seat for what promises to be the most beautiful day.
      </p>

      <hr class="rule"/>

      <!-- Event details -->
      <div class="detail-box">
        <p class="label">Date</p>
        <p><strong>${CONFIG.WEDDING_DATE}</strong></p>
        <br/>
        <p class="label">Ceremony Begins</p>
        <p><strong>${CONFIG.CEREMONY_TIME}</strong></p>
        <br/>
        <p class="label">Venue</p>
        <p><strong>${CONFIG.WEDDING_VENUE}</strong></p>
        ${p.meal ? `<br/><p class="label">Your Meal Choice</p><p><strong>${p.meal}</strong></p>` : ''}
      </div>

      <hr class="rule"/>

      <p>
        In the meantime, please visit our wedding website for full details on dress code,
        schedule, nearby hotels and everything else you need to know for the day.
      </p>

      <div class="cta">
        <a href="https://YOUR_WEDDING_WEBSITE_URL.com/details">View Full Details</a>
      </div>

      <hr class="rule"/>

      <p>
        If your plans change or you have any questions, please do not hesitate to email us at
        <a href="mailto:${CONFIG.COUPLE_EMAIL}" style="color:#722F37;">${CONFIG.COUPLE_EMAIL}</a>.
      </p>

      <p>With so much love,</p>
      <p style="font-size:28px; color:#722F37; margin:8px 0;">
        ${CONFIG.BRIDE_NAME} &amp; ${CONFIG.GROOM_NAME}
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>${CONFIG.HASHTAG}</p>
      <p>August 1, 2026 · Abeokuta, Ogun
</p>
    </div>
  </div>
</body>
</html>
  `;
}

// ── Email: NO response ─────────────────────────────────────────────────────
function buildNoEmail(p) {
  const name = p.firstName + ' ' + p.lastName;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We Will Miss You Dearly</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
    body { margin:0; padding:0; background:#FAF7F4; font-family:'EB Garamond',Georgia,serif; color:#2C1810; }
    .wrap { max-width:600px; margin:0 auto; background:#ffffff; }
    .hero { background:#FAF7F4; border-bottom:2px solid rgba(114,47,55,0.15); padding:48px 40px; text-align:center; }
    .hero h1 { margin:0; color:#722F37; font-size:38px; font-weight:400; line-height:1.1; }
    .hero p  { color:#8B7355; font-size:13px; letter-spacing:0.3em; text-transform:uppercase; margin:8px 0 0; }
    .body  { padding:48px 40px; }
    .body p  { font-size:17px; line-height:1.85; color:#2C1810; margin:0 0 18px; }
    .quote { border-left:2px solid rgba(114,47,55,0.4); padding-left:20px; margin:28px 0; font-style:italic; color:#8B7355; }
    .footer { background:#FAF7F4; padding:28px 40px; text-align:center; }
    .footer p { font-size:13px; color:#8B7355; margin:4px 0; font-style:italic; }
    .rule { border:none; border-top:1px solid rgba(114,47,55,0.12); margin:24px 0; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="hero">
      <p>Blessing & Dennis · August 1, 2026</p>
      <h1>We Will Miss You Dearly</h1>
    </div>
    <div class="body">
      <p>Dear ${name},</p>
      <p>
        We completely understand that life does not always make it easy to be there,
        and we are so grateful you took the time to let us know.
      </p>

      <div class="quote">
        "Though you won't be with us in person on the day, you will be very much
        present in our hearts and in the joy we carry into that room."
      </div>

      <hr class="rule"/>

      <p>
        We look forward to celebrating with you another time very soon —
        perhaps over jollof rice and too much laughter, as it should be.
      </p>

      <p>
        If there is anything at all that changes between now and August 1st, please do not hesitate
        to reach out at <a href="mailto:${CONFIG.COUPLE_EMAIL}" style="color:#722F37;">${CONFIG.COUPLE_EMAIL}</a>.
        We would love nothing more than a last-minute yes!
      </p>

      <hr class="rule"/>

      <p>
        With all our love and warmth,
      </p>
      <p style="font-size:28px; color:#722F37; margin:8px 0;">
        ${CONFIG.BRIDE_NAME} &amp; ${CONFIG.GROOM_NAME}
      </p>
    </div>
    <div class="footer">
      <p>${CONFIG.HASHTAG}</p>
      <p>August 1, 2026 · Abeokuta, Ogun
</p>
    </div>
  </div>
</body>
</html>
  `;
}

// ── Send guest confirmation email ─────────────────────────────────────────
function sendGuestEmail(p) {
  if (!p.email) return;

  const isAttending = p.attending === 'yes';
  const subject     = isAttending
    ? `We cannot wait to see you! — ${CONFIG.BRIDE_NAME} & ${CONFIG.GROOM_NAME}'s Wedding`
    : `Thank you for letting us know — ${CONFIG.BRIDE_NAME} & ${CONFIG.GROOM_NAME}`;

  const html = isAttending ? buildYesEmail(p) : buildNoEmail(p);

  MailApp.sendEmail({
    to:       p.email,
    subject:  subject,
    htmlBody: html,
    name:     `${CONFIG.BRIDE_NAME} & ${CONFIG.GROOM_NAME}`,
    replyTo:  CONFIG.COUPLE_EMAIL,
  });
}

// ── Notify the couple ─────────────────────────────────────────────────────
function notifyCouple(p) {
  const isAttending = p.attending === 'yes';
  const name        = `${p.firstName} ${p.lastName}`;
  const subject     = isAttending
    ? `🎉 New RSVP: ${name} is coming!`
    : `RSVP: ${name} cannot make it`;

  const body = `
    New RSVP received!\n
    Name:      ${name}
    Email:     ${p.email}
    Phone:     ${p.phone || 'Not provided'}
    Attending: ${isAttending ? 'YES ✓' : 'NO ✗'}
    Guests:    ${isAttending ? p.guests : '0'}
    Meal:      ${p.meal || 'Not specified'}
    Dietary:   ${p.dietaryNotes || 'None'}
    Song:      ${p.song || 'No request'}
    Message:   ${p.message || 'None'}
    Submitted: ${p.timestamp || new Date().toISOString()}
  `;

  MailApp.sendEmail({
    to:       CONFIG.COUPLE_EMAIL,
    subject:  subject,
    body:     body,
    name:     'Wedding RSVP System',
  });
}

// ── GET handler (for testing the deployed URL in a browser) ───────────────
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Wedding RSVP endpoint is live ✓', couple: `${CONFIG.BRIDE_NAME} & ${CONFIG.GROOM_NAME}`, date: CONFIG.WEDDING_DATE }))
    .setMimeType(ContentService.MimeType.JSON);
}
