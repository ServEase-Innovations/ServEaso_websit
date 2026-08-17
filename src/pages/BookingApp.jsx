import { useEffect, useState } from 'react';

export default function BookingApp() {
  const [loading, setLoading] = useState(true);
  
  // Get booking URL from environment variable
  const bookingUrl = import.meta.env.VITE_BOOKING_URL || 'http://localhost:3000';
  
  useEffect(() => {
    // Set a timeout to hide loader after iframe starts loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#04152c] z-10">
          <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-[#38bdf8] animate-spin" />
          <p className="text-gray-400 font-semibold tracking-widest uppercase text-sm">
            Loading Booking App
          </p>
        </div>
      )}
      
      <iframe
        src={bookingUrl}
        title="ServEaso Booking Application"
        className="w-full h-full border-0"
        onLoad={() => setLoading(false)}
        allow="geolocation; camera; microphone"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
