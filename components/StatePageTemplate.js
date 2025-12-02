// components/StatePageTemplate.js
import Script from "next/script";
import OfferForm from "./OfferForm";
import HeroAddressCard from "./HeroAddressCard";

export default function StatePageTemplate({ stateName, stateSlug, cities }) {
  const year = new Date().getFullYear();
  const cityList = cities.join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Next Day House Offer - ${stateName}`,
    url: `https://nextdayhouseoffer.net/states/${stateSlug}`,
    telephone: "+1-888-646-3983",
    email: "team@nextdayhouseoffer.net",
    logo: "https://nextdayhouseoffer.net/nextday-logo3.png",
    description: `Next Day House Offer buys houses as-is for cash in ${stateName}, including cities like ${cityList}. Sell your house fast with no repairs, no commissions, and flexible closing dates.`,
    areaServed: [
      {
        "@type": "State",
        name: stateName,
      },
      ...cities.map((c) => ({ "@type": "City", name: c })),
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
        id={`jsonld-${stateSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR – same as home */}
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

      {/* HERO – localized to state */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-wide">
                We buy houses fast in {stateName}, in any condition
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Sell your house fast for cash in {stateName} — no repairs, no
                fees, no hassle.
              </h1>
              <p className="mt-3 text-slate-700">
                Get a fair cash offer in <strong>as little as 24 hours</strong>.
                No showings, no open houses, and you choose the closing date
                that works for you.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We buy houses in {stateName} in and around{" "}
                <strong>{cityList}</strong> and many surrounding suburbs and
                smaller towns.
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
            How Do I Sell My House Fast in {stateName}?
          </h2>
          <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
            At Next Day House Offer, we buy houses for cash and connect you with
            a local home buyer in your area. Our simple 3-step process makes it
            easy to sell your house fast in {stateName} without repairs,
            showings, or agent commissions.
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
                <h3 className="text-lg font-bold text-slate-900">
                  Fill Out the Form
                </h3>
                <p className="text-sm text-slate-700">
                  Tell us about your property in {stateName} and your
                  situation. It only takes a couple of minutes and there’s no
                  obligation.
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
                <h3 className="text-lg font-bold text-slate-900">
                  Receive Your Cash Offer
                </h3>
                <p className="text-sm text-slate-700">
                  A local home buyer in {stateName} reviews your property and
                  sends a fair cash offer. No hassles, no pressure, and zero
                  fees.
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
                  Choose the closing date that works for you and get paid in
                  cash. No cleaning, no repairs, no open houses.
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
            I Want To Sell My House Fast in {stateName}, But…
          </h2>
          <p className="max-w-3xl mx-auto text-center text-sm md:text-base mb-10 text-sky-100">
            No matter what challenge you’re facing, we work with homeowners in{" "}
            {stateName} every day. Whether you’re behind on payments, have a
            problem property, or just want a quicker, more certain sale — we can
            help.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🏡
              </div>
              <h3 className="font-semibold text-white">Inherited House</h3>
              <p className="text-sm text-sky-100">
                Inherited a property in {stateName} you don’t want to keep or
                manage? We can buy it as-is and help you move on.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                💔
              </div>
              <h3 className="font-semibold text-white">Divorce</h3>
              <p className="text-sm text-sky-100">
                Need a clean, fast sale as part of a separation or divorce? We’ll
                work on your timeline.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                ⚠️
              </div>
              <h3 className="font-semibold text-white">Avoid Foreclosure</h3>
              <p className="text-sm text-sky-100">
                Behind on payments or at risk of foreclosure in {stateName}? A
                cash offer may help you protect your equity.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🛠️
              </div>
              <h3 className="font-semibold text-white">Damaged Property</h3>
              <p className="text-sm text-sky-100">
                Fire damage, water damage, foundation issues, or major repairs
                needed? We still buy it.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🔑
              </div>
              <h3 className="font-semibold text-white">Relocation</h3>
              <p className="text-sm text-sky-100">
                Moving out of or within {stateName} and need to sell quickly? We
                make flexible cash offers.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                📉
              </div>
              <h3 className="font-semibold text-white">
                Bad Real Estate Experience
              </h3>
              <p className="text-sm text-sky-100">
                Tried listing with an agent and it didn’t work out? Skip the
                showings and get a direct cash offer.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm md:text-base text-sky-100 max-w-3xl mx-auto">
            We buy real estate of all types — single-family homes, townhomes,
            condos, duplexes, and small multi-family properties. If you need to
            sell your house fast in {stateName}, we can make you a free,
            no-obligation cash offer and set a closing date that works for you.
          </p>
        </div>
      </section>

      {/* BENEFITS: Sell My Home Fast – icon grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
            Sell My Home Fast in {stateName}
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl text-emerald-600">
                💵
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Fair Cash Offer
              </h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Sell your house fast for a fair cash offer from a local buyer
                who understands your {stateName} market and neighborhood.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl text-sky-600">
                ⏱️
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Fast Closing
              </h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Need to move quickly? We can often close in as little as a
                couple of weeks — or later if you need more time.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center text-3xl text-rose-600">
                🚫
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                No Fees or Commissions
              </h3>
              <p className="text-sm text-slate-700 max-w-xs">
                There are no agent commissions, no hidden junk fees, and we
                typically cover the standard closing costs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center text-3xl text-amber-500">
                🧰
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                No Home Repairs
              </h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Sell your home without fixing anything. We buy houses as-is and
                handle the updates, repairs, and clean-out after closing.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-3xl text-indigo-600">
                📅
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Flexible Closing Time
              </h3>
              <p className="text-sm text-slate-700 max-w-xs">
                You set the schedule. Whether you need to close quickly or
                prefer a later date, we work around your timeline.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center text-3xl text-teal-600">
                ✅
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Simple Sale Process
              </h3>
              <p className="text-sm text-slate-700 max-w-xs">
                Our streamlined process removes the stress of listings,
                showings, and negotiations so you can move on with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL SEO SECTION WITH KEYWORDS – localized */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Looking for the best way to sell your house fast in {stateName}?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Homeowners across {stateName} search every day for phrases like{" "}
            <strong>“sell my house fast in {stateName}”</strong>,{" "}
            <strong>“sell your house fast for cash”</strong>,{" "}
            <strong>“best house cash offers”</strong>,{" "}
            <strong>“we buy houses in {stateName}”</strong>,{" "}
            <strong>“cash home buyers near me”</strong>, and{" "}
            <strong>“sell my home as-is”</strong>. Next Day House Offer focuses
            on helping sellers who need a quick, hassle-free sale in cities such
            as <strong>{cityList}</strong> and many nearby suburbs. Whether you
            want to avoid repairs, sell a rental property, stop a foreclosure,
            or simply get a fast cash offer, our team works with homeowners in{" "}
            {stateName} who search for terms like{" "}
            <strong>“sell my house quickly”</strong>,{" "}
            <strong>“fast cash offer on my house”</strong>,{" "}
            <strong>“investor who buys houses”</strong>,{" "}
            <strong>“no-agent home sale”</strong>, and{" "}
            <strong>“companies that buy houses for cash”</strong>.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR – localized */}
      <section id="offer-form" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Get Your Free Cash Offer in {stateName}
            </h2>
            <p className="mt-2 text-slate-600">
              Fill out this quick form and we&apos;ll review your property in{" "}
              {stateName} and send you a fair, no-obligation cash offer as soon
              as <strong>next day</strong>. There&apos;s no pressure and no
              commitment.
            </p>
            <OfferForm />
          </div>

          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-extrabold text-slate-900">
              Why homeowners in {stateName} sell to us
            </h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1.5">
              <li>
                We buy houses as-is in cities, suburbs, and small towns across{" "}
                {stateName}.
              </li>
              <li>No repairs, cleaning, or showings needed before closing.</li>
              <li>No real estate agent commissions or hidden fees.</li>
              <li>Fast, straightforward cash offers with flexible closing dates.</li>
              <li>
                Local buyers who understand {stateName}&apos;s housing market.
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              From major metro areas to smaller towns, we work with homeowners
              who want a simple way to sell quickly and move on.
            </p>
          </aside>
        </div>
      </section>

      {/* FAQ – same layout as home */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions About Selling Your House Fast in{" "}
            {stateName}
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-semibold">
                How does your “sell my house fast for cash” process work?
              </h3>
              <p>
                We review your property in {stateName}, make a fair cash offer,
                and if you accept we close on your schedule with no repairs or
                agent commissions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Do you buy houses in any condition, even if I need to sell my
                house as-is?
              </h3>
              <p>
                Yes. We make house cash offers on properties in {stateName} that
                are outdated, damaged, inherited, or have problem tenants.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I get a fast house cash offer if I&apos;m behind on
                payments?
              </h3>
              <p>
                Many sellers in {stateName} come to us when they&apos;re behind
                on payments or facing foreclosure. We work quickly to present
                options and a cash offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – same as home */}
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