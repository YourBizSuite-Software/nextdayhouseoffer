'use client';

import { useEffect, useRef } from 'react';

export default function HeroAddressCard() {
  const inputRef = useRef(null);
  const acRef = useRef(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const init = () => {
      if (!window.google?.maps?.places) return false;

      acRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: ['us'] },
      });

      acRef.current.addListener('place_changed', () => {
        // const place = acRef.current.getPlace();
      });

      return true;
    };

    if (!init()) {
      const timer = setInterval(() => {
        if (init()) clearInterval(timer);
      }, 400);
      return () => clearInterval(timer);
    }
  }, []);

  const handleCTA = () => {
    const heroVal = inputRef.current?.value?.trim();
    const formAddress = document.getElementById('address');
    if (heroVal && formAddress) {
      formAddress.value = heroVal;
      formAddress.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <label htmlFor="hero-address" className="sr-only">
        Enter your street address
      </label>
      <input
        id="hero-address"
        ref={inputRef}
        placeholder="Enter your street address"
        autoComplete="street-address"
        className="
          w-full rounded-lg border border-slate-300 
          p-3 text-slate-900 placeholder-slate-500
          focus:outline-none focus:ring-2 focus:ring-teal-600
        "
      />
      <a
        href="#offer-form"
        onClick={handleCTA}
        className="mt-3 block w-full rounded-lg bg-red-600 px-5 py-3 text-center font-bold text-white shadow hover:bg-red-700"
      >
        GET A FAST OFFER
      </a>
      <p className="mt-2 text-xs text-slate-500">
        Toll-Free: 888-64-NEXTDAY (888-646-3983)
      </p>
    </div>
  );
}