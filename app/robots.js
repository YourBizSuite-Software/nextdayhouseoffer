// app/robots.js
export default function robots() {
  const base = 'https://nextdayhouseoffer.net';
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}