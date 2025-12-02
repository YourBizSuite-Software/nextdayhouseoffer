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
    logo: 'https://nextdayhouseoffer.net/nextday-logo3.png',
    description:
      'Next Day House Offer buys houses as-is for cash in markets across the United States. Sell your house fast with no repairs, no commissions, and flexible closing dates.',
    areaServed: [{ '@type': 'Country', name: 'United States' }],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
  };

  return (
    <>
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR – dark, simple, centered */}
      <header className="bg-[#182e4e] text-white shadow-md">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <img
              src="/nextday-logo3.png"
              alt="Next Day House Offer"
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

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-wide">
                We buy houses fast, in any condition
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

          </div>
        </div>
      </section>

      {/* SECTION: HOW DO I SELL MY HOUSE FAST? – 3 big step cards */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
            How Do I Sell My House Fast?
          </h2>
          <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
            At Next Day House Offer, we buy houses for cash and connect you with a local home
            buyer in your area. Our simple 3-step process makes it easy to sell your house fast
            without repairs, showings, or agent commissions.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <div className="bg-[#f05a28] text-white text-center py-3 font-semibold uppercase tracking-wide">
                Step 1
              </div>
              <div className="p-6 flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-sky-100 text-sky-600 text-4xl">
                  📋
                </div>
                <h3 className="text-lg font-bold text-slate-900">Fill Out the Form</h3>
                <p className="text-sm text-slate-700">
                  Tell us about your property and situation. It only takes a couple of minutes and
                  there’s no obligation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <div className="bg-[#f05a28] text-white text-center py-3 font-semibold uppercase tracking-wide">
                Step 2
              </div>
              <div className="p-6 flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-emerald-100 text-emerald-600 text-4xl">
                  📞
                </div>
                <h3 className="text-lg font-bold text-slate-900">Receive Your Cash Offer</h3>
                <p className="text-sm text-slate-700">
                  A local home buyer reviews your property and sends a fair cash offer. No
                  hassles, no pressure, and zero fees.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden">
              <div className="bg-[#f05a28] text-white text-center py-3 font-semibold uppercase tracking-wide">
                Step 3
              </div>
              <div className="p-6 flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-amber-100 text-amber-500 text-4xl">
                  💰
                </div>
                <h3 className="text-lg font-bold text-slate-900">Get Paid</h3>
                <p className="text-sm text-slate-700">
                  Choose the closing date that works for you and get paid in cash. No cleaning, no
                  repairs, no open houses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUE BAND: I Want To Sell My House Fast, But… */}
      <section className="bg-[#1f609b] py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            I Want To Sell My House Fast, But…
          </h2>
          <p className="max-w-3xl mx-auto text-center text-sm md:text-base mb-10 text-sky-100">
            No matter what challenge you’re facing, we work with homeowners in tough situations
            every day. Whether you’re behind on payments, have a problem property, or just want a
            quicker, more certain sale — we can help.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🏡
              </div>
              <h3 className="font-semibold text-white">Inherited House</h3>
              <p className="text-sm text-sky-100">
                Inherited a property you don’t want to keep or manage? We can buy it as-is and
                help you move on.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                💔
              </div>
              <h3 className="font-semibold text-white">Divorce</h3>
              <p className="text-sm text-sky-100">
                Need a clean, fast sale as part of a separation or divorce? We’ll work on your
                timeline.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                ⚠️
              </div>
              <h3 className="font-semibold text-white">Avoid Foreclosure</h3>
              <p className="text-sm text-sky-100">
                Behind on payments or at risk of foreclosure? A cash offer may help you protect
                your equity.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🛠️
              </div>
              <h3 className="font-semibold text-white">Damaged Property</h3>
              <p className="text-sm text-sky-100">
                Fire damage, water damage, foundation issues, or major repairs needed? We still
                buy it.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🔑
              </div>
              <h3 className="font-semibold text-white">Relocation</h3>
              <p className="text-sm text-sky-100">
                Moving for work or family and need to sell quickly? We make flexible cash offers.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                📉
              </div>
              <h3 className="font-semibold text-white">Bad Real Estate Experience</h3>
              <p className="text-sm text-sky-100">
                Tried listing with an agent and it didn’t work out? Skip the showings and get a
                direct cash offer.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm md:text-base text-sky-100 max-w-3xl mx-auto">
            We buy real estate of all types — single-family homes, townhomes, condos, duplexes,
            and small multi-family properties. If you need to sell your house fast, we can make
            you a free, no-obligation cash offer and set a closing date that works for you.
          </p>
        </div>
      </section>

      {/* BENEFITS: Sell My Home Fast – icon grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
            Sell My Home Fast
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl text-emerald-600">
                💵
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Fair Cash Offer</h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Sell your house fast for a fair cash offer from a local buyer who understands your
                market and neighborhood.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl text-sky-600">
                ⏱️
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Fast Closing</h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Need to move quickly? We can often close in as little as a couple of weeks — or
                later if you need more time.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center text-3xl text-rose-600">
                🚫
              </div>
              <h3 className="text-xl font-semibold text-slate-900">No Fees or Commissions</h3>
              <p className="text-sm text-slate-700 max-w-xs">
                There are no agent commissions, no hidden junk fees, and we typically cover the
                standard closing costs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center text-3xl text-amber-500">
                🧰
              </div>
              <h3 className="text-xl font-semibold text-slate-900">No Home Repairs</h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Sell your home without fixing anything. We buy houses as-is and handle the
                updates, repairs, and clean-out after closing.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-3xl text-indigo-600">
                📅
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Flexible Closing Time</h3>
              <p className="text-sm text-slate-700 max-w-xs">
                You set the schedule. Whether you need to close quickly or prefer a later date,
                we work around your timeline.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center text-3xl text-teal-600">
                ✅
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Simple Sale Process</h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Our streamlined process removes the stress of listings, showings, and
                negotiations so you can move on with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL SEO SECTION WITH KEYWORDS (keep this, good for search) */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Looking for the best way to sell your house fast?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Homeowners search every day for phrases like{' '}
            <strong>“sell my house fast”</strong>,{' '}
            <strong>“sell your house fast for cash”</strong>,{' '}
            <strong>“best house cash offers”</strong>,{' '}
            <strong>“we buy houses for cash”</strong>,{' '}
            <strong>“cash home buyers near me”</strong>, and{' '}
            <strong>“sell my home as-is”</strong>. Next Day House Offer focuses on helping
            sellers who need a quick, hassle-free sale. Whether you want to avoid repairs, sell a
            rental property, stop a foreclosure, or simply get a fast cash offer, our team works
            with homeowners who search for terms like{' '}
            <strong>“sell my house quickly”</strong>,{' '}
            <strong>“fast cash offer on my house”</strong>,{' '}
            <strong>“investor who buys houses”</strong>,{' '}
            <strong>“no-agent home sale”</strong>, and{' '}
            <strong>“companies that buy houses for cash”</strong> in cities all across the United
            States.
          </p>
        </div>
      </section>

      {/* ---- from here down, keep your existing SEO cities, states, form, FAQ, footer ---- */}

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

          {/* (keeping your long SEO paragraphs exactly as before) */}
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

      {/* FAQ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Selling Your House Fast
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-semibold">
                How does your “sell my house fast for cash” process work?
              </h3>
              <p>
                We review your property, make a fair cash offer, and if you accept we close on
                your schedule with no repairs or agent commissions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Do you buy houses in any condition, even if I need to sell my house as-is?
              </h3>
              <p>
                Yes. We make house cash offers on properties that are outdated, damaged,
                inherited, or have problem tenants.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I get a fast house cash offer if I’m behind on payments?
              </h3>
              <p>
                Many sellers come to us when they’re behind on payments or facing foreclosure.
                We work quickly to present options and a cash offer.
              </p>
            </div>
          </div>
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