// app/layout.js
import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://nextdayhouseoffer.net'),
  title: 'Next Day House Offer | Sell Your House Fast for Cash',
  description:
    'We buy houses in any condition across Ohio and Texas. Get a fair next-day cash offer — no repairs, no commissions, you pick the closing date.',
  keywords: [
    // core
    'sell my house fast',
    'cash home buyers',
    'we buy houses',
    'sell house as-is',
    'sell house for cash',
    'no agent fees house sale',
    'no repairs home sale',
    'close on your timeline',

    // your requested phrases & close variants
    'we buy ugly houses',            // ® HomeVestors—use only as descriptive keyword
    'we buy any house',
    'we buy any house in any condition',
    'we buy houses any condition',
    'we buy trash houses',
    'we buy damaged houses',
    'we buy inherited houses',
    'we buy rental properties',
    'we buy houses quick',
    'we buy any house quick',
    'fast cash offer for house',
    'fastest way to sell your house',
    'number 1 in America to buy houses',
    'sell house any time of year',
    'sell house with tenants',
    'home brokerage',
    'homebrokrage',                  // common misspelling you asked to include

    // brand & intent captures (don’t imply affiliation)
    'HomeVestors',
    'home investors that buy houses',
    'cash investors buying homes',

    // geo long-tails (Ohio)
    'sell my house fast Columbus OH',
    'cash home buyers Columbus Ohio',
    'sell house as-is Columbus',
    'sell my house fast Cleveland OH',
    'cash home buyers Cleveland Ohio',
    'sell my house fast Cincinnati OH',
    'sell my house fast Dayton OH',
    'sell my house fast Toledo OH',

    // geo long-tails (Texas)
    'sell my house fast Houston TX',
    'cash home buyers Houston Texas',
    'sell house as-is Houston',
    'sell my house fast Dallas TX',
    'cash home buyers Dallas Texas',
    'sell my house fast Austin TX',
    'sell my house fast San Antonio TX',

    // supporting pain points
    'avoid foreclosure sell house',
    'sell house behind on payments',
    'sell house that needs repairs',
    'sell house for cash no closing costs',
  ],
  authors: [{ name: 'Next Day House Offer', url: 'https://nextdayhouseoffer.net' }],
  alternates: { canonical: 'https://nextdayhouseoffer.net' },
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
    images: [{ url: '/next-logo.png', width: 1200, height: 630, alt: 'Next Day House Offer' }],
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
    icon: '/next-logo.png',
    apple: '/next-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* Google Places (no event handlers in Server Components) */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}