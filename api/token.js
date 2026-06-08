export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://instagram-dashboard-drab.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { code, redirect_uri } = req.body;
  const REDIRECT = redirect_uri || 'https://instagram-dashboard-drab.vercel.app';

  const url = 'https://graph.facebook.com/v21.0/oauth/access_token'
    + '?client_id=1495381002138022'
    + '&client_secret=7066ee1731bc964cbfdab7c373ca09e9'
    + '&redirect_uri=' + encodeURIComponent(REDIRECT)
    + '&code=' + code;

  const r = await fetch(url);
  const data = await r.json();
  return res.status(200).json(data);
}
