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
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR */}
      <header className="bg-white border-b border-teal-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/next-logo.png" alt="Next Day House Offer" className="h-20 w-auto" />
            <span className="sr-only">Next Day House Offer</span>
          </div>
          <a
            href="tel:8886463983"
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-white font-semibold shadow shadow-rose-200/70 hover:bg-rose-700 transition"
            aria-label="Call 888-646-3983"
          >
            <span>Call</span>
            <span className="hidden sm:inline">888-646-3983</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-rose-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-teal-700 font-semibold uppercase tracking-wide">
                We will buy your house fast, at any condition!
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                We buy houses quick, no repairs, best offers.
              </h1>
              <p className="mt-3 text-slate-700">
                Get a fair cash offer in <strong>24 hours</strong>. No repairs, no showings, and you
                pick the closing date.
              </p>

              {/* Address card (CTA) – client component */}
              <HeroAddressCard />
            </div>

            {/* Video / visual */}
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-teal-100">
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

      {/* SKIP THE STRESS */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">
            Skip the Stress — Sell Your Home As-Is, Fast & Hassle-Free
          </h1>
          <p className="text-lg text-slate-700">
            We pay cash for homes in any condition — no repairs, no cleaning, no waiting.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-teal-50/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
            Why Do Homeowners Choose NextDayHouseOffer®?
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            We make selling your home simple and stress-free — no matter the condition.
            Whether your property is brand new or needs major repairs, we’ll make you a fair,
            fast all-cash offer that fits your needs.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-rose-700 mb-6">Our Story</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            NextDayHouseOffer® was created to make selling a home simple, fast, and stress-free.
            We understand that every homeowner’s situation is unique, and sometimes the
            traditional selling process isn’t the right fit.
            <br />
            <br />
            We’ve grown into a trusted network of cash home buyers across the United States,
            helping thousands of homeowners sell their properties “as is.” Our recognizable
            yellow signs and helpful team have become a symbol of reliability and ease in real
            estate.
            <br />
            <br />
            Today, with hundreds of franchises nationwide, we continue to provide a
            judgment-free, hassle-free way to sell your home — no repairs, cleaning, or waiting
            required.
          </p>
        </div>
      </section>

      {/* WHY WE DO IT */}
      <section className="py-16 bg-rose-50/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-rose-700 mb-6">Why We Do What We Do</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Selling a home doesn’t have to be stressful. Our mission is simple: offer homeowners
            relief and flexibility through direct, all-cash offers. No matter your situation, we
            give you the freedom to move forward on your terms.
          </p>
        </div>
      </section>

      {/* HOW WE DO IT DIFFERENTLY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">How We Do It Differently</h2>

          <ul className="space-y-3 text-lg text-slate-700 leading-relaxed">
            <li>• We buy houses in any condition — cluttered, damaged, or outdated.</li>
            <li>• We handle unwanted items after the sale.</li>
            <li>• No cleaning, repairs, or staging required.</li>
            <li>• We work face-to-face with homeowners for clarity and comfort.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Our Process</h3>
          <ol className="space-y-3 text-lg text-slate-700 leading-relaxed">
            <li>1. Schedule a visit at your convenience.</li>
            <li>2. We assess your home and discuss your situation.</li>
            <li>3. Receive a fair, no-obligation cash offer.</li>
            <li>4. Take your time to review and decide.</li>
            <li>5. Close quickly — often in as little as three weeks.</li>
          </ol>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 bg-teal-50/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Who Is NextDayHouseOffer®?</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            We’re not your typical home-buying company. With decades of real estate experience,
            our nationwide network of independently owned franchises helps homeowners sell their
            homes quickly and confidently.
            <br />
            <br />
            We purchase houses “as is,” freeing you from the time, cost, and uncertainty of the
            traditional selling process.
          </p>
        </div>
      </section>

      {/* WHAT HOUSES WE BUY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-rose-700 mb-6">What Kind of Houses Do We Buy?</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            We buy houses “as is,” with any level of damage or needed repairs, including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 text-lg space-y-2">
            <li>Costly or unfinished repairs</li>
            <li>Foundation or structural issues</li>
            <li>Fire, water, or storm damage</li>
            <li>General wear and tear or neglect</li>
          </ul>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Our Simple 3-Step Process</h2>
          <ol className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <li>
              <strong className="text-rose-700">1. Free Consultation:</strong> Quick in-person home
              evaluation.
            </li>
            <li>
              <strong className="text-rose-700">2. Fast Cash Offer:</strong> Fair, no-obligation
              offer on the spot.
            </li>
            <li>
              <strong className="text-rose-700">3. Easy Closing:</strong> Close in as little as
              three weeks.
            </li>
          </ol>
        </div>
      </section>

      {/* STATES WE SERVE */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 mb-6 text-center">
            We Buy Homes Across the United States
          </h2>
          <p className="text-center text-slate-700 mb-6">
            We serve every U.S. state except Alaska, California, and Hawaii.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-slate-700 text-lg">
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Alabama
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Arizona
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Arkansas
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Colorado
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Connecticut
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Delaware
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Florida</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Georgia</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Idaho</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Illinois</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Indiana</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Iowa</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Kansas</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Kentucky</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Louisiana
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Maine</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Maryland
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Massachusetts
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Michigan
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Minnesota
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Mississippi
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Missouri
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Montana
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Nebraska
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Nevada</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              New Hampshire
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              New Jersey
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              New Mexico
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">New York</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              North Carolina
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              North Dakota
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Ohio</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Oklahoma
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Oregon</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Pennsylvania
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Rhode Island
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              South Carolina
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              South Dakota
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Tennessee
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Texas</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">Utah</div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Vermont
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Virginia
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Washington
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              West Virginia
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Wisconsin
            </div>
            <div className="rounded-lg border border-teal-100 bg-white/60 px-3 py-2">
              Wyoming
            </div>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="offer-form" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-900">
              Get Your Free Cash Offer
            </h2>
            <p className="mt-2 text-slate-600">
              Fill out this quick form and we’ll send a fair offer as soon as{' '}
              <strong>next day</strong>. No obligation.
            </p>
            <OfferForm />
          </div>
          <aside className="rounded-xl border border-teal-100 bg-teal-50/70 p-5">
            <h3 className="font-extrabold text-teal-900">Where we buy</h3>
            <p className="mt-1 text-slate-700">
              Ohio: Columbus, Cleveland, Cincinnati, Dayton, Toledo &amp; more.
            </p>
            <p className="mt-1 text-slate-700">
              Texas: Houston, Dallas, Austin, San Antonio &amp; surrounding areas.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li>No repairs</li>
              <li>No commissions</li>
              <li>We cover typical closing costs</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-teal-800 to-rose-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {year} Next Day House Offer</div>
          <a className="underline decoration-white/70 hover:decoration-white" href="tel:8886463983">
            888-646-3983
          </a>
        </div>
      </footer>
    </>
  );
}