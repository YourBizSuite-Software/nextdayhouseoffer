import Script from 'next/script';
import OfferForm from '../components/OfferForm';
import HeroAddressCard from '../components/HeroAddressCard'; // <-- add this

export default function Home() {
  const year = new Date().getFullYear();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Next Day House Offer',
    url: 'https://nextdayhouseoffer.net',
    telephone: '+1-888-646-3983',
    email: 'team@nextdayhouseoffer.net',
    logo: 'https://nextdayhouseoffer.net/next-logo.png',
    description:
      'We buy houses as-is and give next-day cash offers in all major cities across Ohio and Texas. No repairs, no commissions, and flexible closing dates.',
    areaServed: [
      { '@type': 'City', name: 'Columbus' },
      { '@type': 'City', name: 'Dayton' },
      { '@type': 'City', name: 'Toledo' },
      { '@type': 'City', name: 'Cleveland' },
      { '@type': 'City', name: 'Cincinnati' },
      { '@type': 'City', name: 'Houston' },
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Austin' },
      { '@type': 'City', name: 'San Antonio' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
  };

  return (
    <>
      <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TOP BAR */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/next-logo.png" alt="Next Day House Offer" className="h-20 w-auto" />
            <span className="sr-only">Next Day House Offer</span>
          </div>
          <a
            href="tel:8886463983"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-white font-semibold shadow hover:bg-red-700"
            aria-label="Call 888-646-3983"
          >
            <span>Call</span>
            <span className="hidden sm:inline">888-646-3983</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-teal-700 font-semibold uppercase tracking-wide">We will buy your house fast, at any condition!</p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                We buy houses quick, no repairs, best offers.
              </h1>
              <p className="mt-3 text-slate-700">
                Get a fair cash offer in <strong>24 hours</strong>. No repairs, no showings, and you pick the closing date.
              </p>

              {/* Address card (CTA) – now a client component */}
              <HeroAddressCard />
            </div>

            {/* Video / visual */}
            <div className="rounded-2xl overflow-hidden shadow">
              <video
                src="/NextDayHouseOffer.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/thumbnail.jpg"
                className="w-full h-64 md:h-[360px] object-cover"
                aria-label="How selling to us works"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Our 3-step selling process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-3xl font-black text-teal-700">1.</div>
              <h3 className="mt-1 font-semibold text-slate-900">Free Consultation</h3>
              <p className="mt-1 text-slate-600">
                Fill the form with your <strong>property address</strong> and contact info. We’ll reach out ASAP to confirm details.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-3xl font-black text-teal-700">2.</div>
              <h3 className="mt-1 font-semibold text-slate-900">Fast Offer</h3>
              <p className="mt-1 text-slate-600">
                We’ll do a quick visit, review the property condition, and send a fair cash offer—often by the <em>next day</em>.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-3xl font-black text-teal-700">3.</div>
              <h3 className="mt-1 font-semibold text-slate-900">Easy Closing</h3>
              <p className="mt-1 text-slate-600">Choose your closing date. <strong>No fees</strong>, we cover typical closing costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-teal-700">
        <div className="mx-auto max-w-6xl px-4 py-10 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">Why sell to us?</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            <li className="rounded-lg bg-white/10 p-3">No repairs needed</li>
            <li className="rounded-lg bg-white/10 p-3">No showings or open houses</li>
            <li className="rounded-lg bg-white/10 p-3">We pay typical closing costs</li>
            <li className="rounded-lg bg-white/10 p-3">Cash offers — no banks</li>
          </ul>
          <a href="#offer-form" className="mt-6 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-extrabold text-slate-900 shadow hover:bg-yellow-300">
            GET OFFER NOW
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Recent Purchases</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <img className="h-56 w-full rounded-lg object-cover" src="/recent1.JPG" alt="Recently purchased property 1" />
            <img className="h-56 w-full rounded-lg object-cover" src="/recent2.JPG" alt="Recently purchased property 2" />
            <img className="h-56 w-full rounded-lg object-cover" src="/recent3.JPG" alt="Recently purchased property 3" />
            <img className="h-56 w-full rounded-lg object-cover md:col-span-3" src="/recent4.JPG" alt="Recently purchased property 4" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Verified Seller Testimonials</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-5 border border-slate-200">
              <p className="text-yellow-400" aria-label="5 stars">★★★★★</p>
              <p className="mt-2 text-slate-700">“Got a fair offer the next day and closed in under two weeks. Super easy.”</p>
              <p className="mt-3 text-sm text-slate-500">— Michelle R., Columbus, OH</p>
            </div>
            <div className="rounded-xl bg-white p-5 border border-slate-200">
              <p className="text-yellow-400" aria-label="5 stars">★★★★★</p>
              <p className="mt-2 text-slate-700">“Sold as-is with tenants in place. Communication was great throughout.”</p>
              <p className="mt-3 text-sm text-slate-500">— Carlos M., Houston, TX</p>
            </div>
            <div className="rounded-xl bg-white p-5 border border-slate-200">
              <p className="text-yellow-400" aria-label="5 stars">★★★★★</p>
              <p className="mt-2 text-slate-700">“No fees and they covered closing costs. Highly recommend.”</p>
              <p className="mt-3 text-sm text-slate-500">— Emily T., Dayton, OH</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="offer-form" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Get Your Free Cash Offer</h2>
            <p className="mt-2 text-slate-600">
              Fill out this quick form and we’ll send a fair offer as soon as <strong>next day</strong>. No obligation.
            </p>
            <OfferForm />
          </div>
          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-extrabold text-slate-900">Where we buy</h3>
            <p className="mt-1 text-slate-700">Ohio: Columbus, Cleveland, Cincinnati, Dayton, Toledo & more.</p>
            <p className="mt-1 text-slate-700">Texas: Houston, Dallas, Austin, San Antonio & surrounding areas.</p>
            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li>No repairs</li>
              <li>No commissions</li>
              <li>We cover typical closing costs</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex items-center justify-between">
          <div>© {year} Next Day House Offer</div>
          <a className="underline" href="tel:8886463983">888-646-3983</a>
        </div>
      </footer>
    </>
  );
}