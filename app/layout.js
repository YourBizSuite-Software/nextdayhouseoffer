// app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://nextdayhouseoffer.net"),
  title: "Next Day House Offer | Sell Your House Fast for Cash",
  description:
    "We buy houses for cash in 45 U.S. states — Sell your house fast in any condition with no repairs, no agents, and no commissions.",
  keywords: [
    // Core phrases
    "sell my house fast",
    "sell your house fast",
    "sell my home quickly",
    "cash home buyers",
    "house buyers for cash",
    "we buy houses",
    "we buy houses for cash",
    "sell house as-is",
    "sell house for cash",
    "fast cash offer for house",
    "companies that buy houses",
    "no agent fees house sale",
    "no repairs home sale",
    "sell home in any condition",
    "close on your timeline",

    // Generic descriptive phrases
    "we buy ugly houses",
    "we buy houses any condition",
    "we buy damaged houses",
    "we buy inherited houses",
    "we buy rental properties",
    "we buy houses quick",
    "best cash home buyers",
    "fastest way to sell your house",
    "sell house with tenants",
    "avoid foreclosure sell house",
    "sell house behind on payments",
    "sell house that needs repairs",
    "sell house for cash no closing costs",

    // Intent capture
    "home investors that buy houses",
    "cash investors buying homes",

    // GEO targeting nationwide
    "sell my house fast Texas",
    "sell my house fast Florida",
    "sell my house fast Ohio",
    "sell my house fast Georgia",
    "sell my house fast Colorado",
    "sell my house fast North Carolina",
    "sell my house fast South Carolina",
    "sell my house fast Michigan",
    "sell my house fast Pennsylvania",
    "sell my house fast Tennessee",
    "sell my house fast Virginia",
    "sell my house fast Maryland",
    "sell my house fast Washington",
    "sell my house fast Oregon",
    "sell my house fast Nevada",
    "sell my house fast Utah",
    "sell my house fast Idaho",
    "sell my house fast Minnesota",
    "sell my house fast Wisconsin",
    "sell my house fast Missouri",
    "sell my house fast Indiana",
    "sell my house fast Kansas",
    "sell my house fast Oklahoma",
    "sell my house fast Alabama",
    "sell my house fast Mississippi",
    "sell my house fast Arkansas",
    "sell my house fast Kentucky",
    "sell my house fast Louisiana",
    "sell my house fast New Mexico",
    "sell my house fast Montana",
    "sell my house fast Wyoming",
    "sell my house fast Nebraska",
    "sell my house fast Iowa",
    "sell my house fast South Dakota",
    "sell my house fast North Dakota",
    "sell my house fast West Virginia",
    "sell my house fast Maine",
    "sell my house fast Vermont",
    "sell my house fast Connecticut",
    "sell my house fast Rhode Island",
    "sell my house fast Delaware",
    "sell my house fast Arizona",

    // Misspelling
    "homebrokrage",
  ],
  authors: [{ name: "Next Day House Offer", url: "https://nextdayhouseoffer.net" }],
  alternates: { canonical: "https://nextdayhouseoffer.net" },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  openGraph: {
    title: "Next Day House Offer | Sell Your House Fast for Cash",
    description:
      "Sell your house fast for cash in 45 U.S. states. No repairs, no commissions, no stress. Get a next-day cash offer.",
    url: "https://nextdayhouseoffer.net",
    siteName: "Next Day House Offer",
    images: [{ url: "/logo3.png", width: 1200, height: 630, alt: "Next Day House Offer" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next Day House Offer | Sell Your House Fast for Cash",
    description:
      "We make fair cash offers within 24 hours — no repairs or commissions required.",
    images: ["/logo3.png"],
  },

  icons: {
    icon: "/logo3.png",
    apple: "/logo3.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* ✅ Google tag (gtag.js) – converted to Next.js Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17755449518"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17755449518');
          `}
        </Script>

        {/* ⭐ Google Maps Places API ⭐ */}
        <Script
          src={
            "https://maps.googleapis.com/maps/api/js?key=" +
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY +
            "&libraries=places&v=weekly"
          }
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}