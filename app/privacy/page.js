// app/privacy/page.js

export const metadata = {
  title: "Privacy Policy | Next Day House Offer",
  description:
    "Privacy Policy describing how Next Day House Offer collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          This Privacy Policy explains how Next Day House Offer
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) collects, uses, and protects information when you
          visit <strong>nextdayhouseoffer.net</strong> (the &quot;Site&quot;)
          or communicate with us. By using the Site, you agree to this Privacy
          Policy.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          1. Information We Collect
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1.5">
          <li>
            <strong>Contact information:</strong> Name, phone number, email
            address, and mailing address that you provide through our contact or
            offer request forms.
          </li>
          <li>
            <strong>Property details:</strong> Property address, type of
            property, condition, occupancy status, and other information you
            share about your home.
          </li>
          <li>
            <strong>Communication content:</strong> Messages, comments, and
            other information you send to us.
          </li>
          <li>
            <strong>Usage data:</strong> IP address, browser type, device
            information, pages visited, time spent on the Site, and referring
            URLs, collected via cookies and similar technologies.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900">
          2. How We Use Your Information
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1.5">
          <li>Review your property and determine whether we can make an offer.</li>
          <li>Contact you with questions, updates, or offers regarding your property.</li>
          <li>
            Improve our services, website content, and user experience through
            analytics.
          </li>
          <li>
            Send you informational or marketing communications, subject to your
            preferences and applicable laws.
          </li>
          <li>
            Comply with legal obligations and protect our rights, property, and
            safety.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900">
          3. Cookies &amp; Tracking Technologies
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We may use cookies, pixels, and similar technologies to understand how
          visitors use the Site, to remember your preferences, and to improve
          performance. You can adjust your browser settings to block or delete
          cookies, but some features of the Site may not work properly if you
          do.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          4. How We Share Information
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We do not sell your personal information. We may share your
          information with:
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1.5">
          <li>
            <strong>Service providers:</strong> Companies that help us operate
            the Site, manage forms and email, provide customer relationship
            management tools, or perform analytics and advertising services.
          </li>
          <li>
            <strong>Affiliated investors or partners:</strong> In some cases, we
            may share your property information with trusted local investors or
            franchise partners in order to evaluate and present offers.
          </li>
          <li>
            <strong>Legal and safety purposes:</strong> When required by law, or
            when we believe it is necessary to protect our rights, your safety,
            or the safety of others.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900">
          5. Data Security
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We take reasonable administrative, technical, and physical measures to
          protect the information we collect. However, no method of
          transmission or storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          6. Data Retention
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We retain information for as long as necessary to fulfill the purposes
          described in this Privacy Policy, comply with legal obligations,
          resolve disputes, and enforce our agreements. We may retain certain
          information in anonymized or aggregated form for analytics or
          reporting.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          7. Your Choices
        </h2>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1.5">
          <li>
            <strong>Update your information:</strong> You may contact us to
            update or correct your contact details.
          </li>
          <li>
            <strong>Opt out of marketing:</strong> You can unsubscribe from
            marketing emails by using the link provided in those emails or
            contacting us directly.
          </li>
          <li>
            <strong>Cookies:</strong> You may block or delete cookies through
            your browser settings.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-900">
          8. State-Specific Privacy Rights
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Depending on where you live, you may have additional privacy rights
          under state law (for example, in California, Colorado, Virginia, or
          other states with consumer privacy laws). These rights may include the
          ability to request access to or deletion of certain personal
          information, or to limit certain types of data processing. To make a
          request regarding your information, please contact us using the
          details below. We will respond in accordance with applicable law.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          9. Third-Party Links
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          The Site may contain links to third-party websites or services that we
          do not control. We are not responsible for the privacy practices or
          content of those third parties. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          10. Children&apos;s Privacy
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          The Site is intended for use by adults and is not directed to children
          under the age of 13. We do not knowingly collect personal information
          from children under 13. If we learn that we have collected such
          information, we will delete it.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">
          11. Changes to This Privacy Policy
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We may update this Privacy Policy from time to time. When we do, we
          will post the updated version on this page with a revised &quot;Last
          updated&quot; date. Your continued use of the Site after changes are
          posted constitutes your acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">12. Contact Us</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          If you have any questions about this Privacy Policy or how we handle
          your information, please contact us at:
          <br />
          <strong>Email:</strong> team@nextdayhouseoffer.net
          <br />
          <strong>Phone:</strong> 888-646-3983
        </p>

        <p className="text-xs text-slate-500 mt-6">
          This sample Privacy Policy is provided for general informational
          purposes only and does not constitute legal advice. You should have a
          licensed attorney review and customize this policy for your business
          and applicable state and local privacy laws.
        </p>
      </div>
    </main>
  );
}