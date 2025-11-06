// app/sitemap.js
export default function sitemap() {
  const base = 'https://nextdayhouseoffer.net';

  // List your important routes here (add more as you create them)
  const pages = [
    '/',                // homepage
    '/houston-texas',
    '/columbus-ohio',
    '/thanks',
  ];

  const now = new Date().toISOString().split('T')[0];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1.0 : 0.8,
  }));
}