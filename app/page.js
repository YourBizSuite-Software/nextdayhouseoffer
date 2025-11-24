import Script from 'next/script';
import OfferForm from '../components/OfferForm';
import HeroAddressCard from '../components/HeroAddressCard';

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
      'Next Day House Offer buys houses as-is for cash in markets across the United States. Sell your house fast with no repairs, no commissions, and flexible closing dates.',
    areaServed: [
      { '@type': 'Country', name: 'United States' }
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
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/next-logo.png" alt="Next Day House Offer" className="h-20 w-auto" />
            <span className="text-xl font-bold text-slate-900">
              Next Day House Offer
            </span>
          </div>
          <a
            href="tel:8886463983"
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-white font-semibold shadow hover:bg-teal-700 transition"
            aria-label="Call 888-646-3983"
          >
            <span>Call</span>
            <span className="hidden sm:inline">888-646-3983</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-teal-700 font-semibold uppercase tracking-wide">
                We will buy your house fast, at any condition
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Sell your house fast for cash — no repairs, no fees, no hassle.
              </h1>
              <p className="mt-3 text-slate-700">
                Get a fair cash offer in <strong>as little as 24 hours</strong>. No showings, no
                open houses, and you choose the closing date that works for you.
              </p>

              {/* Address card (CTA) */}
              <HeroAddressCard />
            </div>

            {/* Video */}
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-slate-200">
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Skip the Stress — Sell Your Home As-Is, Fast & Hassle-Free
          </h1>
          <p className="text-lg text-slate-700">
            We buy houses as-is in any condition. No cleaning, no repairs, no agents, and no
            commissions — just a straightforward cash offer and a closing date that fits your
            schedule.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Why Do Homeowners Choose NextDayHouseOffer®?
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            We make selling your home simple and stress-free — no matter the situation or
            property condition. Whether your house is move-in ready, outdated, or needs major
            repairs, we provide a fast, fair cash offer so you can move on with peace of mind.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">No repairs or cleaning</h3>
              <p className="text-sm text-slate-700">
                Sell your house as-is. Leave unwanted items behind — we handle the cleanout and
                repairs after closing.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Fast, reliable closing</h3>
              <p className="text-sm text-slate-700">
                Close in as little as three weeks, or take more time if you need it. We work
                around your timeline.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">No fees or commissions</h3>
              <p className="text-sm text-slate-700">
                There are no agent commissions and no hidden fees. What we offer is what you put
                in your pocket at closing, minus any mortgages or liens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            NextDayHouseOffer® was created to make selling a home simple, fast, and
            stress-free. We know that not every homeowner has the time, money, or desire to list
            their house with an agent, make repairs, host showings, and wait months for the
            right buyer.
            <br />
            <br />
            Over the years, we’ve grown into a trusted network of cash home buyers across the
            United States, helping thousands of homeowners sell their properties “as is.” Our
            recognizable yellow signs and friendly local teams have become a symbol of
            reliability and ease in real estate for sellers who want a better option.
            <br />
            <br />
            Today, with buyers in markets nationwide, we continue to provide a judgment-free,
            hassle-free way to sell your house quickly — with no repairs, cleaning, or waiting
            required.
          </p>
        </div>
      </section>

      {/* WHY WE DO IT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why We Do What We Do</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Selling a home doesn’t have to be overwhelming. Our mission is to give homeowners a
            simpler, faster alternative to the traditional real estate process. We help people
            facing all kinds of situations — relocation, inheritance, divorce, job changes,
            downsizing, tired landlords with rental properties, and more — by providing
            transparent, all-cash offers and flexible closings.
            <br />
            <br />
            No matter why you’re looking to sell, we’re here to help you move forward on your
            terms with a clear, straightforward solution.
          </p>
        </div>
      </section>

      {/* HOW WE DO IT DIFFERENTLY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How We Do It Differently</h2>

          <ul className="space-y-3 text-lg text-slate-700 leading-relaxed">
            <li>• We buy houses in any condition — cluttered, damaged, outdated, or vacant.</li>
            <li>• We handle unwanted items after the sale, so you don’t have to clean or haul.</li>
            <li>• No cleaning, staging, showings, or open houses are required.</li>
            <li>• We walk you through each step so the process feels clear and comfortable.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Our Simple Process</h3>
          <ol className="space-y-3 text-lg text-slate-700 leading-relaxed">
            <li>1. Schedule a visit or virtual walk-through at your convenience.</li>
            <li>2. We assess your home and listen to your situation and timeline.</li>
            <li>3. You receive a fair, no-obligation cash offer.</li>
            <li>4. Take your time to review the offer and ask questions.</li>
            <li>5. If you accept, we close on the date that works best for you.</li>
          </ol>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Is NextDayHouseOffer®?</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            NextDayHouseOffer® is a nationwide home-buying company with local property buyers in
            markets across the United States. Our teams understand the neighborhoods, price
            ranges, and challenges that local homeowners face, and we bring that knowledge into
            every offer we make.
            <br />
            <br />
            We purchase houses “as is” directly from homeowners, so you can skip the MLS, skip
            the repairs, and skip the months of uncertainty that come with listing traditionally.
          </p>
        </div>
      </section>

      {/* WHAT HOUSES WE BUY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Kind of Houses Do We Buy?
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            We buy single-family homes, townhomes, condos, small multi-family properties, and
            rental houses “as is,” with any level of damage or needed repairs, including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 text-lg space-y-2">
            <li>Costly or unfinished repairs and older homes that need updating</li>
            <li>Foundation or structural issues, roof problems, or major mechanical issues</li>
            <li>Fire, water, or storm damage and properties affected by long-term neglect</li>
            <li>Vacant homes, inherited properties, and rentals with problem tenants</li>
          </ul>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Simple 3-Step Process</h2>
          <ol className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <li>
              <strong>1. Free Consultation:</strong> Tell us about your house and your situation.
            </li>
            <li>
              <strong>2. Fast Cash Offer:</strong> We’ll present a clear, no-obligation cash offer
              based on your home’s condition and local market.
            </li>
            <li>
              <strong>3. Easy Closing:</strong> You choose the closing date. We handle the
              paperwork and typical closing costs.
            </li>
          </ol>
        </div>
      </section>

      {/* STATES WE SERVE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            We Buy Houses Across the United States
          </h2>
          <p className="text-center text-slate-700 mb-6">
            Our home-buying teams serve homeowners in markets throughout the U.S., including the
            states below and surrounding metro areas.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-slate-700 text-sm">
            <div>Alabama</div>
            <div>Arizona</div>
            <div>Arkansas</div>
            <div>Colorado</div>
            <div>Connecticut</div>
            <div>Delaware</div>
            <div>Florida</div>
            <div>Georgia</div>
            <div>Idaho</div>
            <div>Illinois</div>
            <div>Indiana</div>
            <div>Iowa</div>
            <div>Kansas</div>
            <div>Kentucky</div>
            <div>Louisiana</div>
            <div>Maine</div>
            <div>Maryland</div>
            <div>Massachusetts</div>
            <div>Michigan</div>
            <div>Minnesota</div>
            <div>Mississippi</div>
            <div>Missouri</div>
            <div>Montana</div>
            <div>Nebraska</div>
            <div>Nevada</div>
            <div>New Hampshire</div>

            <div>New Mexico</div>

            <div>North Carolina</div>
            <div>North Dakota</div>
            <div>Ohio</div>
            <div>Oklahoma</div>
            <div>Oregon</div>
            <div>Pennsylvania</div>
            <div>Rhode Island</div>
            <div>South Carolina</div>
            <div>South Dakota</div>
            <div>Tennessee</div>
            <div>Texas</div>
            <div>Utah</div>
            <div>Vermont</div>
            <div>Virginia</div>
            <div>Washington</div>
            <div>West Virginia</div>
            <div>Wisconsin</div>
            <div>Wyoming</div>
          </div>
        </div>
      </section>

      {/* SEO-RICH CITIES SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Major Cities & Metro Areas We Serve
          </h2>
          <p className="text-center text-slate-700 mb-4">
            We buy houses fast for cash in hundreds of cities, suburbs, and neighborhoods across
            the country. If you’re asking “Can I sell my house quickly in my area?” — there’s a
            good chance the answer is yes.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Midwest house buyers:</strong> We buy houses in Columbus, Cleveland,
            Cincinnati, Dayton, Toledo, Akron, Youngstown, Springfield, Lima, Detroit, Grand
            Rapids, Warren, Sterling Heights, Chicago, Aurora, Joliet, Rockford, Naperville,
            Peoria, Indianapolis, Fort Wayne, Evansville, South Bend, Gary, Milwaukee, Madison,
            Green Bay, Kansas City, St. Louis, Springfield, Wichita, Omaha, Lincoln, Des Moines,
            Cedar Rapids, Sioux City, Fargo, Bismarck, and surrounding suburbs, neighborhoods,
            and small towns. Homeowners in these markets use us when they need to sell a house
            fast, sell a rental property, or sell a home that needs repairs.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Southern home sellers:</strong> We buy houses for cash in Houston, Dallas,
            Fort Worth, San Antonio, Austin, El Paso, Arlington, Plano, Garland, Irving, Corpus
            Christi, Lubbock, Waco, Tyler, Atlanta, Macon, Savannah, Augusta, Birmingham,
            Montgomery, Mobile, Huntsville, Nashville, Memphis, Knoxville, Chattanooga, Jackson,
            New Orleans, Baton Rouge, Shreveport, Little Rock, Fayetteville, Tulsa, Oklahoma City,
            and many more growing Southern cities and suburbs. If you’re searching for “sell my
            house fast in Texas,” “cash home buyer in Georgia,” or “we buy houses in the South,”
            we’re here to help.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>East Coast & Northeast markets:</strong> We help homeowners sell houses fast
            in Philadelphia, Pittsburgh, Allentown, Scranton, Reading, Baltimore, Annapolis,
            Washington D.C., Boston, Worcester, Springfield, Providence, Hartford, New Haven, and
            many surrounding coastal and inland communities. Whether you need a cash offer for a
            row house, a condo, or a single-family home, our buyers can help.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Mountain, Southwest & Western regions:</strong> We buy homes in Phoenix,
            Mesa, Chandler, Glendale, Scottsdale, Tucson, Albuquerque, Santa Fe, Denver, Aurora,
            Colorado Springs, Fort Collins, Pueblo, Salt Lake City, Provo, Ogden, Boise, Nampa,
            Twin Falls, Las Vegas, Henderson, Reno, Spokane, Tacoma, Vancouver, Boise-area
            suburbs, and many other Western cities and towns. From desert communities and
            mountain properties to suburban neighborhoods, we work with homeowners who want to
            sell quickly without repairs.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Smaller cities, suburbs & rural areas:</strong> Beyond the major metros, we
            also work in small and mid-size markets, commuter suburbs, and rural communities
            across the U.S. If you own a house in a neighborhood that doesn’t show up on a big
            city list, you can still reach out. We routinely buy houses in satellite towns,
            outer-ring suburbs, and “off-the-beaten-path” areas where traditional buyers might be
            harder to find.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed">
            Whether you search for “sell my house fast,” “cash home buyers near me,” “we buy
            houses for cash,” or “sell rental property quickly,” NextDayHouseOffer® is focused on
            helping homeowners in all these markets and more.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="offer-form" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Get Your Free Cash Offer
            </h2>
            <p className="mt-2 text-slate-600">
              Fill out this quick form and we’ll send you a fair, no-obligation cash offer as
              soon as <strong>next day</strong>. There’s no pressure and no commitment.
            </p>
            <OfferForm />
          </div>

          {/* Updated sidebar: national, not just Ohio / Texas */}
          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-extrabold text-slate-900">Why homeowners nationwide sell to us</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1.5">
              <li>We buy houses as-is in markets across the United States.</li>
              <li>No repairs, no cleaning, and no open houses or showings.</li>
              <li>No agent commissions and no hidden fees at closing.</li>
              <li>Fast, straightforward cash offers with flexible closing dates.</li>
              <li>Experienced local buyers who know your neighborhood and market.</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              From major metro areas to smaller cities and suburbs, we work with homeowners who
              want a simple way to sell quickly and move on.
            </p>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
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