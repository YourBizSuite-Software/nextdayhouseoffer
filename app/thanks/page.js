export const metadata = { title: 'Thanks — Request Received' };

export default function Thanks() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Thanks — we got your request!</h1>
      <p className="mt-3 text-slate-600">We’ll contact you shortly with your cash offer.</p>
      <a href="/" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold">Back to Home</a>
    </div>
  );
}