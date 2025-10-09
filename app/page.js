import Script from 'next/script';
import OfferForm from '../components/OfferForm';

export default function Home() {
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Next Day House Offer",
    url: "https://nextdayhouseoffer.net",
    telephone: "+1-888-646-3983",
    email: "team@nextdayhouseoffer.net",
    logo: "https://nextdayhouseoffer.net/next-logo.png",
    description:
      "We buy houses as-is and give next-day cash offers in all major cities across Ohio and Texas. No repairs, no commissions, and flexible closing dates.",
    areaServed: [
      { "@type": "City", name: "Columbus" },
      { "@type": "City", name: "Dayton" },
      { "@type": "City", name: "Toledo" },
      { "@type": "City", name: "Cleveland" },
      { "@type": "City", name: "Cincinnati" },
      { "@type": "City", name: "Houston" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Austin" },
      { "@type": "City", name: "San Antonio" }
    ],
    address: [
      { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "OH" },
      { "@type": "PostalAddress", addressLocality: "Dayton", addressRegion: "OH" },
      { "@type": "PostalAddress", addressLocality: "Toledo", addressRegion: "OH" },
      { "@type": "PostalAddress", addressLocality: "Cleveland", addressRegion: "OH" },
      { "@type": "PostalAddress", addressLocality: "Cincinnati", addressRegion: "OH" },
      { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX" },
      { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX" },
      { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX" },
      { "@type": "PostalAddress", addressLocality: "San Antonio", addressRegion: "TX" }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Michelle R." },
        reviewBody: "Got a fair offer the next day and closed in under two weeks. Super easy."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Carlos M." },
        reviewBody: "Sold as-is with tenants in place. Communication was great throughout."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Emily T." },
        reviewBody: "No fees and they covered closing costs. Highly recommend."
      }
    ]
  };

  return (
    <>
      <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HEADER */}
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white text-center">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center justify-center">
          <img src="/next-logo2.png" alt="Next Day House Offer" className="h-40 w-auto mb-3" />
          <p className="text-lg font-semibold tracking-wide">
            Toll-Free:{' '}
            <a href="tel:8886463983" className="text-amber-400 hover:underline">
              888-64-NEXTDAY (888-646-3983)
            </a>
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-amber-500/20 text-amber-400 px-3 py-1 text-sm font-bold">
              Cash Offer as Soon as Tomorrow
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold">We Buy Houses in Any Condition</h1>
            <p className="mt-3 text-slate-200">
              Serving <strong>Ohio</strong> and <strong>Texas</strong> major cities — no repairs, no commissions, and your timeline.
            </p>
            <a href="#offer-form" className="inline-block mt-5 rounded-lg bg-amber-400 px-5 py-3 font-semibold text-slate-900">
              Get My Free Cash Offer
            </a>
            <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="rounded-full bg-white/10 px-3 py-1">Columbus, OH</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Dayton, OH</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Cleveland, OH</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Toledo, OH</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Cincinnati, OH</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Houston, TX</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Dallas, TX</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Austin, TX</span>
              <span className="rounded-full bg-white/10 px-3 py-1">San Antonio, TX</span>
            </div>
          </div>

          <div className="rounded-xl bg-white/5 p-5">
            <h2 className="text-xl font-semibold">How It Works</h2>

            <ol className="mt-3 space-y-2 list-decimal list-inside text-slate-200">
              <li>
                <strong>Fill the form</strong> — make sure to include the <strong>property address</strong> and your <strong>contact info</strong>.
              </li>
              <li>
                <strong>We contact you ASAP</strong> — one of our representatives will reach out to confirm details.
              </li>
              <li>
                <strong>Quick visit</strong> — we do a short walkthrough to check the property.
              </li>
              <li>
                <strong>Get your offer</strong> — receive a fair cash offer, often by the <em>next day</em>.
              </li>
            </ol>

            {/* Playable video with controls and sound */}
            <div className="mt-4 rounded-lg overflow-hidden">
              <video
                src="/NextDayHouseOffer.mp4"
                controls
                loop
                playsInline
                className="w-full h-48 object-cover"
                aria-label="Next Day House Offer walkthrough video"
              />
            </div>

            <p className="mt-2 text-sm text-slate-300">
              We handle all paperwork. You pay no agent fees or closing costs.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* VALUE PROPS */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl px-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold">No Repairs Needed</h3>
              <p className="mt-1 text-slate-600">We buy houses <em>as-is</em>. Skip cleaning, repairs, and showings.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold">Fast & Local</h3>
              <p className="mt-1 text-slate-600">Major metros across Ohio & Texas. Offers in 24 hours, close in days.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold">No Fees or Commissions</h3>
              <p className="mt-1 text-slate-600">Keep more cash. We cover closing costs and there are no agent fees.</p>
            </div>
          </div>
        </section>

        {/* GALLERY (renamed) */}
        <section className="py-4">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold">Recent Purchases Gallery</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <img className="h-56 w-full rounded-lg object-cover" src="/recent1.JPG" alt="Recently purchased property 1" />
              <img className="h-56 w-full rounded-lg object-cover" src="/recent2.JPG" alt="Recently purchased property 2" />
              <img className="h-56 w-full rounded-lg object-cover" src="/recent3.JPG" alt="Recently purchased property 3" />
              <img className="h-56 w-full rounded-lg object-cover md:col-span-3" src="/recent4.JPG" alt="Recently purchased property 4" />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-10 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold">Customer Reviews</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white p-5 border border-slate-200">
                <p className="text-amber-500" aria-label="5 stars">★★★★★</p>
                <p className="mt-2 text-slate-700">“Got a fair offer the next day and closed in under two weeks. Super easy.”</p>
                <p className="mt-3 text-sm text-slate-500">— Michelle R., Columbus, OH</p>
              </div>
              <div className="rounded-xl bg-white p-5 border border-slate-200">
                <p className="text-amber-500" aria-label="5 stars">★★★★★</p>
                <p className="mt-2 text-slate-700">“Sold as-is with tenants in place. Communication was great throughout.”</p>
                <p className="mt-3 text-sm text-slate-500">— Carlos M., Houston, TX</p>
              </div>
              <div className="rounded-xl bg-white p-5 border border-slate-200">
                <p className="text-amber-500" aria-label="5 stars">★★★★★</p>
                <p className="mt-2 text-slate-700">“No fees and they covered closing costs. Highly recommend.”</p>
                <p className="mt-3 text-sm text-slate-500">— Emily T., Dayton, OH</p>
              </div>
            </div>
          </div>
        </section>

        {/* FORM + SIDEBAR (updated headings) */}
        <section id="offer-form" className="py-10">
          <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Get Your Free Cash Offer</h2>
              <p className="mt-2 text-slate-600">
                Fill out this quick form and we’ll send a fair offer as soon as <strong>next day</strong>. No obligation.
              </p>
              <OfferForm />
            </div>

            <aside className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold">Ohio Sellers</h3>
              <p className="mt-1 text-slate-600">
                Looking to <strong>sell your house fast in Ohio</strong>? We buy as-is in Columbus, Cleveland, Cincinnati, Dayton, Toledo and more.
              </p>

              <h3 className="mt-4 font-semibold">Texas Sellers</h3>
              <p className="mt-1 text-slate-600">
                Need a <strong>cash home buyer in Texas</strong>? Get a competitive offer in Houston, Dallas, Austin, San Antonio and surrounding areas.
              </p>

              <p className="mt-2 text-xs text-slate-500">We also consider nearby suburbs and surrounding counties.</p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex items-center justify-between">
          <div>© {year} Next Day House Offer</div>
          <a className="underline" href="#offer-form">Get Offer</a>
        </div>
      </footer>
    </>
  );
}