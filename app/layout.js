// app/layout.js
import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://nextdayhouseoffer.net'),
  title: 'Next Day House Offer | Sell Your House Fast for Cash',
  description:
    'We buy houses in any condition across Ohio and Texas. Get a fair next-day cash offer — no repairs, no commissions, you pick the closing date.',
  keywords: [
    'sell my house fast',
    'cash home buyers',
    'we buy houses',
    'sell house as-is',
    'Ohio',
    'Texas',
    'Columbus',
    'Houston',
  ],
  authors: [{ name: 'Next Day House Offer', url: 'https://nextdayhouseoffer.net' }],
  alternates: {
    canonical: 'https://nextdayhouseoffer.net',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Next Day House Offer | Sell Your House Fast for Cash',
    description:
      'We buy houses as-is and provide next-day cash offers across Ohio and Texas. No fees, no commissions, no stress.',
    url: 'https://nextdayhouseoffer.net',
    siteName: 'Next Day House Offer',
    images: [
      {
        url: '/next-logo.png', // in /public
        width: 1200,
        height: 630,
        alt: 'Next Day House Offer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Day House Offer | Sell Your House Fast for Cash',
    description:
      'Get a fair cash offer for your home within 24 hours — no repairs or commissions.',
    images: ['/next-logo.png'],
  },
  icons: {
    icon: '/next-logo.png',   // browser favicon
    apple: '/next-logo.png',  // iOS home screen icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* Google Places */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`}
          strategy="afterInteractive"
          onLoad={() => window.dispatchEvent(new Event('google-maps-loaded'))}
        />
        {children}
      </body>
    </html>
  );
}