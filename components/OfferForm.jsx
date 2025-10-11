'use client';
import { useEffect, useRef, useState } from 'react';

export default function OfferForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '#';
  const addressRef = useRef(null);
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Google Places Autocomplete (unchanged, but kept solid)
  useEffect(() => {
    if (!addressRef.current) return;

    function initAutocomplete() {
      if (!window.google?.maps?.places) return;
      const ac = new window.google.maps.places.Autocomplete(addressRef.current, {
        types: ['address'],
        componentRestrictions: { country: ['us'] },
      });
      ac.addListener('place_changed', () => {
        const place = ac.getPlace();
        // if you want city/state/zip later, parse place.address_components here
      });
    }

    const interval = setInterval(() => {
      if (window.google?.maps?.places) {
        initAutocomplete();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Submit with fetch so we can control the redirect
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const formData = new FormData(formRef.current);

      // helpful headers for Formspree spam scoring
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        window.location.href = '/thanks'; // force our own thank-you page
      } else {
        // try to parse error to show something useful
        const data = await res.json().catch(() => ({}));
        setError(data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-4 rounded-xl border border-slate-200 bg-white p-5 text-slate-800"
    >
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold" htmlFor="name">Full Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-slate-300 p-3" autoComplete="name" />
        </div>

        <div>
          <label className="block text-sm font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 p-3" autoComplete="email" />
        </div>

        <div>
          <label className="block text-sm font-semibold" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required className="mt-1 w-full rounded-lg border border-slate-300 p-3" autoComplete="tel" />
        </div>

        {/* Address: take the whole row */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold" htmlFor="address">Property Address</label>
          <input
            id="address"
            name="address"
            required
            ref={addressRef}
            className="mt-1 w-full rounded-lg border border-slate-300 p-3"
            placeholder="123 Main St, City, ST"
            autoComplete="street-address"
          />
        </div>

        {/* How soon do you want to sell? */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold" htmlFor="timeline">How soon do you want to sell your property?</label>
          <select
            id="timeline"
            name="timeline"
            className="mt-1 w-full rounded-lg border border-slate-300 p-3 bg-white"
            defaultValue="ASAP"
            required
          >
            <option>ASAP</option>
            <option>In 2 weeks</option>
            <option>In 1 month</option>
            <option>In 2 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold" htmlFor="message">Anything we should know? (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 p-3"
          placeholder="Tenants? Repairs? Timing?"
        />
      </div>

      {/* Email subject + reply-to (helps deliverability) */}
      <input type="hidden" name="_subject" value="New Seller Lead - Next Day House Offer" />
      <input type="hidden" name="_replyto" value="" />

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 rounded-lg bg-amber-400 px-5 py-3 font-semibold text-slate-900 disabled:opacity-70"
      >
        {submitting ? 'Sending…' : 'Request My Offer'}
      </button>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <p className="mt-2 text-xs text-slate-500">
        By submitting, you consent to contact by phone/text/email. We never sell your info.
      </p>
    </form>
  );
}