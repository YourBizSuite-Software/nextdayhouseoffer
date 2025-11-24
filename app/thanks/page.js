export const metadata = { title: "Thanks — Request Received" };

export default function Thanks() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-teal-600/10 flex items-center justify-center">
          <svg
            className="h-10 w-10 text-teal-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900">
          Thank you — your request was received!
        </h1>

        <p className="mt-4 text-lg text-slate-700">
          We’re reviewing your property details and will contact you shortly
          with your fair cash offer. If you need immediate help, call us anytime.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-teal-600 hover:bg-teal-700 transition px-6 py-3 text-white font-semibold shadow"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}