export default function sitemap() {
  const base = 'https://nextdayhouseoffer.net';
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/columbus-ohio`, lastModified },
    { url: `${base}/houston-texas`, lastModified },
    { url: `${base}/thanks`, lastModified },
  ];
}