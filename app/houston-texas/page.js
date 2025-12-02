// app/houston-texas/page.js
import Script from "next/script";
import OfferForm from "../../components/OfferForm";
import HeroAddressCard from "../../components/HeroAddressCard";

export const metadata = {
  title: "Sell Your House Fast in Houston, Texas | Next Day House Offer",
  description:
    "We buy houses for cash in Houston, Texas and surrounding suburbs. Sell your Houston house fast in any condition with no repairs, no agents, and no commissions.",
  alternates: {
    canonical: "https://nextdayhouseoffer.net/houston-texas",
  },
};

export default function HoustonTexasPage() {
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Next Day House Offer – Houston, Texas",
    url: "https://nextdayhouseoffer.net/houston-texas",
    telephone: "+1-888-646-3983",
    email: "team@nextdayhouseoffer.net",
    logo: "https://nextdayhouseoffer.net/nextday-logo3.png",
    description:
      "Next Day House Offer buys houses as-is for cash in Houston, Texas and nearby areas. Sell your house fast with no repairs, no commissions, and flexible closing dates.",
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "AdministrativeArea", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <>
      <Script
        id="jsonld-houston"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-[#182e4e] text-white shadow-md">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <img
              src="/nextday-logo3.png"
              alt="Next Day House Offer Houston Texas"
              className="h-32 w-auto md:h-32"
            />
            <span className="text-sm tracking-[0.18em] font-semibold uppercase text-slate-100">
              We Buy Hou$e$ Fa$t
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <span className="text-xs uppercase tracking-wide text-slate-200">
              Speak with a home buying specialist
            </span>
            <a
              href="tel:8886463983"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 transition"
              aria-label="Call 888-646-3983"
            >
              <span>Call Now</span>
              <span className="font-bold">888-646-3983</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-wide">
                We buy houses fast in Houston, Texas
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Sell your Houston house fast for cash — no repairs, no fees, no hassle.
              </h1>
              <p className="mt-3 text-slate-700">
                Get a fair cash offer in <strong>as little as 24 hours</strong>. No showings, no
                open houses, and you choose the closing date that works for you.
              </p>

              <HeroAddressCard />
            </div>
          </div>
        </div>
      </section>

      {/* Again, paste ALL the remaining sections exactly as on the main page */}
      {/* ...same sections as Home: steps, blue band, benefits, states, cities, form, FAQ, footer... */}

      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>© {year} Next Day House Offer. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="/terms"
              className="underline decoration-white/60 hover:decoration-white"
            >
              Terms &amp; Conditions
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/privacy"
              className="underline decoration-white/60 hover:decoration-white"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-right">
            <a
              className="underline decoration-white/70 hover:decoration-white"
              href="tel:8886463983"
            >
              888-646-3983
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://yourbizsuite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-emerald-400/70 hover:decoration-emerald-300"
            >
              Developed by YourBizSuite Software
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}