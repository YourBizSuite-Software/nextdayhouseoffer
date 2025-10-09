// app/layout.js
import './globals.css';
import Script from 'next/script';

export const metadata = { /* …keep the metadata you already have… */ };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {/* Load Google Places */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}