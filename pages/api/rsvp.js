export const config = {
  api: { bodyParser: true },
};
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const SCRIPT_URL = process.env.APPS_SCRIPT_URL;

  if (!SCRIPT_URL) {
    return res.status(500).json({ success: false, error: 'Apps Script URL not configured' });
  }

  try {
    // Forward the body to Apps Script server-side (no CORS issue)
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(req.body).toString(),
      redirect: 'follow',
    });

    const text = await response.text();

    // Apps Script sometimes returns HTML on error — guard the parse
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error('Apps Script non-JSON response:', text.slice(0, 300));
      return res.status(500).json({ success: false, error: 'Invalid response from Apps Script' });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}