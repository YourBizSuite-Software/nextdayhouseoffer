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



      <section class="bg-white py-16">
        <div class="max-w-5xl mx-auto px-6 text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Skip the Stress — Sell Your Home As-Is, Fast & Hassle-Free
          </h1>
          <p class="text-lg text-gray-600">
            We pay cash for homes in any condition — no repairs, no cleaning, no waiting.
          </p>
        </div>
      </section>


      <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-10">
            Why Do Homeowners Choose NextDayHouseOffer®?
          </h2>

          <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            We make selling your home simple and stress-free — no matter the condition.
            Whether your property is brand new or needs major repairs, we’ll make you a
            fair, fast all-cash offer that fits your needs.
          </p>
        </div>
      </section>


      <section class="py-16">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            NextDayHouseOffer® was created to make selling a home simple, fast, and stress-free.
            We understand that every homeowner’s situation is unique, and sometimes the traditional
            selling process isn’t the right fit.
            <br /><br />
            We’ve grown into a trusted network of cash home buyers across the United States,
            helping thousands of homeowners sell their properties “as is.” Our recognizable yellow
            signs and helpful team have become a symbol of reliability and ease in real estate.
            <br /><br />
            Today, with hundreds of franchises nationwide, we continue to provide a judgment-free,
            hassle-free way to sell your home — no repairs, cleaning, or waiting required.
          </p>
        </div>
      </section>


      <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Why We Do What We Do</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Selling a home doesn’t have to be stressful. Our mission is simple: offer homeowners
            relief and flexibility through direct, all-cash offers. No matter your situation, we give
            you the freedom to move forward on your terms.
          </p>
        </div>
      </section>


      <section class="py-16">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">How We Do It Differently</h2>

          <ul class="space-y-3 text-lg text-gray-700 leading-relaxed">
            <li>• We buy houses in any condition — cluttered, damaged, or outdated.</li>
            <li>• We handle unwanted items after the sale.</li>
            <li>• No cleaning, repairs, or staging required.</li>
            <li>• We work face-to-face with homeowners for clarity and comfort.</li>
          </ul>

          <h3 class="text-2xl font-semibold mt-8 mb-4">Our Process</h3>
          <ol class="space-y-3 text-lg text-gray-700 leading-relaxed">
            <li>1. Schedule a visit at your convenience.</li>
            <li>2. We assess your home and discuss your situation.</li>
            <li>3. Receive a fair, no-obligation cash offer.</li>
            <li>4. Take your time to review and decide.</li>
            <li>5. Close quickly — often in as little as three weeks.</li>
          </ol>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Who Is NextDayHouseOffer®?</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            We’re not your typical home-buying company. With decades of real estate experience,
            our nationwide network of independently owned franchises helps homeowners sell their
            homes quickly and confidently.
            <br /><br />
            We purchase houses “as is,” freeing you from the time, cost, and uncertainty of the
            traditional selling process.
          </p>
        </div>
      </section>


      <section class="py-16">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">What Kind of Houses Do We Buy?</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            We buy houses “as is,” with any level of damage or needed repairs, including:
          </p>
          <ul class="list-disc pl-6 text-gray-700 text-lg space-y-2">
            <li>Costly or unfinished repairs</li>
            <li>Foundation or structural issues</li>
            <li>Fire, water, or storm damage</li>
            <li>General wear and tear or neglect</li>
          </ul>
        </div>
      </section>


      <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Simple 3-Step Process</h2>
          <ol class="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li><strong>1. Free Consultation:</strong> Quick in-person home evaluation.</li>
            <li><strong>2. Fast Cash Offer:</strong> Fair, no-obligation offer on the spot.</li>
            <li><strong>3. Easy Closing:</strong> Close in as little as three weeks.</li>
          </ol>
        </div>
      </section>


      <section class="py-16">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">
            We Buy Homes Across the United States
          </h2>
          <p class="text-center text-gray-700 mb-6">
            We serve every U.S. state except Alaska, California, and Hawaii.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 text-lg">
            <div>Alabama</div><div>Arizona</div><div>Arkansas</div><div>Colorado</div>
            <div>Connecticut</div><div>Delaware</div><div>Florida</div><div>Georgia</div>
            <div>Idaho</div><div>Illinois</div><div>Indiana</div><div>Iowa</div>
            <div>Kansas</div><div>Kentucky</div><div>Louisiana</div><div>Maine</div>
            <div>Maryland</div><div>Massachusetts</div><div>Michigan</div><div>Minnesota</div>
            <div>Mississippi</div><div>Missouri</div><div>Montana</div><div>Nebraska</div>
            <div>Nevada</div><div>New Hampshire</div><div>New Jersey</div><div>New Mexico</div>
            <div>New York</div><div>North Carolina</div><div>North Dakota</div><div>Ohio</div>
            <div>Oklahoma</div><div>Oregon</div><div>Pennsylvania</div><div>Rhode Island</div>
            <div>South Carolina</div><div>South Dakota</div><div>Tennessee</div><div>Texas</div>
            <div>Utah</div><div>Vermont</div><div>Virginia</div><div>Washington</div>
            <div>West Virginia</div><div>Wisconsin</div><div>Wyoming</div>
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