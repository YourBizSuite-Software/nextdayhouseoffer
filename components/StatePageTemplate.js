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
    logo: "https://nextdayhouseoffer.net/next-logo.png",
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

      {/* TOP BAR */}
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/next-logo.png"
              alt="Next Day House Offer"
              className="h-20 w-auto"
            />
            <span className="sr-only">Next Day House Offer</span>
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


      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">
            Sell Your House Fast in {stateName}
          </h1>
          <p className="text-sm text-slate-700 leading-relaxed">
            If you’re searching for phrases like{" "}
            <strong>“sell my house fast in {stateName}”</strong>,{" "}
            <strong>“cash home buyers in {stateName}”</strong>, or{" "}
            <strong>“we buy houses in {stateName}”</strong>, you’re in the right place.
            We help homeowners get fair cash offers in cities such as{" "}
            {cities.join(", ")} and surrounding areas. Our process is built for sellers
            who need a quick house cash offer without repairs, fees, or long wait times.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="text-teal-700 font-semibold uppercase tracking-wide">
                We will buy your house fast, in any condition
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Sell your house fast for cash in {stateName}.
              </h1>
              <p className="mt-3 text-slate-700">
                Get a fair cash offer in{" "}
                <strong>as little as 24 hours</strong>. No showings, no open
                houses, and you choose the closing date that works for you.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We buy houses in {stateName} in and around{" "}
                <strong>{cityList}</strong> and many surrounding suburbs and
                smaller towns.
              </p>

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

      {/* SHORT CONTENT */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            We Buy Houses for Cash in {stateName}
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            NextDayHouseOffer® helps homeowners in {stateName} sell houses
            quickly without repairs, agents, or months of uncertainty. Whether
            you&apos;re dealing with an inherited property, job relocation,
            divorce, problem tenants, or a house that needs work, we make a
            straightforward cash offer so you can move on with confidence.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            We commonly buy homes in major {stateName} markets such as{" "}
            <strong>{cityList}</strong>, plus many nearby suburbs, small towns,
            and rural areas. If you&apos;ve ever searched for &quot;sell my
            house fast in {stateName}&quot; or &quot;cash home buyer near
            me&quot;, our local buyers are here to help.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="offer-form" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Get Your Free Cash Offer in {stateName}
            </h2>
            <p className="mt-2 text-slate-600">
              Fill out this quick form and we&apos;ll review your property in{" "}
              {stateName} and send you a fair, no-obligation cash offer as soon
              as <strong>next day</strong>.
            </p>
            <OfferForm />
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-extrabold text-slate-900">
              Why homeowners in {stateName} sell to us
            </h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 text-sm space-y-1.5">
              <li>We buy houses as-is in cities and suburbs across {stateName}.</li>
              <li>No repairs, cleaning, or showings needed before closing.</li>
              <li>No real estate agent commissions or hidden fees.</li>
              <li>Fast, flexible closing dates that fit your timeline.</li>
              <li>Local buyers who understand {stateName}&apos;s housing market.</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              From major metro areas to smaller towns, we work with homeowners
              who want a simple way to sell quickly and move on.
            </p>
          </aside>
        </div>
      </section>

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
          We review your property, make a fair cash offer, and if you accept we
          close on your schedule with no repairs or agent commissions.
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
          Many sellers come to us when they’re behind on payments or facing
          foreclosure. We work quickly to present options and a cash offer.
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