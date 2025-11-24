// app/terms/page.js

export const metadata = {
  title: "Terms & Conditions | Next Day House Offer",
  description:
    "Terms and conditions for using the Next Day House Offer website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="text-slate-700 text-sm leading-relaxed">
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the
          website <strong>nextdayhouseoffer.net</strong> (the &quot;Site&quot;)
          and any services provided by Next Day House Offer
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By accessing or using this Site, you agree to be
          bound by these Terms. If you do not agree, please do not use the
          Site.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          1. No Legal, Tax, or Financial Advice
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Information on this Site is for general informational purposes only
          and does not constitute legal, tax, financial, or real estate advice.
          You should consult with an attorney, tax professional, financial
          advisor, or licensed real estate professional regarding your specific
          situation before making any decisions.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          2. Nature of Our Service
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Next Day House Offer is a real estate investment company that
          purchases residential properties directly from homeowners. We are not
          acting as your real estate agent or broker, and we do not represent
          you in a fiduciary capacity. Any cash offer we make is for our own
          potential purchase of your property or that of our partners or
          affiliates.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          3. No Guarantee of Offer or Closing
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Submitting your information through the Site does not obligate you to
          sell your property and does not obligate us to make an offer or
          purchase your property. Any offer is subject to our review, due
          diligence, inspection, title search, and approval. We reserve the
          right to withdraw or modify an offer at any time prior to the
          execution of final written agreements.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          4. User Representations
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          By submitting information through the Site, you represent and warrant
          that:
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1.5">
          <li>You are at least 18 years old or the age of majority in your state.</li>
          <li>
            You are the owner of the property you are inquiring about, or you
            have full authority to act on behalf of the owner.
          </li>
          <li>
            All information you provide is accurate, current, and complete to
            the best of your knowledge.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900">
          5. Communications &amp; Consent
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          By submitting a form on this Site, you consent to be contacted by us
          and our representatives by phone, text message (SMS/MMS), email, or
          mail using the contact information you provide, even if your number is
          on a state or federal &quot;Do Not Call&quot; list. You may opt out
          of marketing communications at any time by following the instructions
          in our messages.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          6. Third-Party Services
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We may use third-party service providers for form handling, email
          delivery, analytics, customer relationship management, and other
          functions. These providers may have access to your information solely
          for the purpose of performing services on our behalf, subject to their
          own privacy and security practices.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">7. Website Use</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          You agree not to use the Site for any unlawful purpose or in any way
          that could damage, disable, overburden, or impair the Site. You may
          not attempt to gain unauthorized access to any portion of the Site, or
          to any systems or networks connected to the Site, by hacking, password
          &quot;mining,&quot; or any other illegitimate means.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          8. Intellectual Property
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          All content on the Site, including text, graphics, logos, images,
          videos, and design, is owned by or licensed to Next Day House Offer
          and is protected by copyright, trademark, and other intellectual
          property laws. You may not copy, reproduce, distribute, or create
          derivative works from any content on the Site without our prior
          written consent.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          9. Disclaimer of Warranties
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          THE SITE AND ALL INFORMATION PROVIDED ON IT ARE PROVIDED &quot;AS
          IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING ANY
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          10. Limitation of Liability
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          To the fullest extent permitted by law, Next Day House Offer and its
          owners, employees, agents, and affiliates shall not be liable for any
          indirect, incidental, consequential, special, or punitive damages
          arising out of or related to your use of the Site or our services,
          even if we have been advised of the possibility of such damages.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          11. State &amp; Local Laws
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Real estate laws vary by state and locality. You are responsible for
          understanding how local laws may apply to the sale of your property.
          Any actual transaction will be governed by the specific written
          contracts you sign, which may vary by state.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          12. Changes to These Terms
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We may update these Terms from time to time by posting a new version
          on this page. Your continued use of the Site after any changes
          constitutes your acceptance of the revised Terms.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">13. Contact Us</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          If you have any questions about these Terms, you can contact us at:
          <br />
          <strong>Email:</strong> team@nextdayhouseoffer.net
          <br />
          <strong>Phone:</strong> 888-646-3983
        </p>

        <p className="text-xs text-slate-500 mt-6">
          This sample Terms &amp; Conditions is provided for general informational purposes
          only and does not constitute legal advice. You should have a licensed
          attorney review and customize these Terms for your business and
          applicable state and local laws.
        </p>
      </div>
    </main>
  );
}