import { useState } from "react";
import { MapPin, Users, Zap } from "lucide-react";

const cities = [
  { name: "Bengaluru", status: "High Availability", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop" },
  { name: "Delhi", status: "High Availability", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600&auto=format&fit=crop" },
  { name: "Mumbai", status: "Limited Slots", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=600&auto=format&fit=crop" },
  { name: "Gurgaon", status: "High Availability", img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=600&auto=format&fit=crop" },
];

const growth = [
  { value: "24/7", label: "Support in every city" },
  { value: "500+", label: "Pincodes covered" },
  { value: "10k+", label: "Monthly bookings" },
  { value: "4.8★", label: "Avg. rating city-wide" },
];

export default function Cities() {
  const [pincode, setPincode] = useState("");

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
            Professional services, <span className="text-primary">in your city.</span>
          </h1>
          <p className="text-on-surface-variant mb-6 max-w-md">
            We're expanding rapidly to bring trusted cooks, maids, and nannies
            to every neighborhood in India. Check availability in your area.
          </p>
          <form
            className="flex gap-2 max-w-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter your pin code (e.g. 560001)"
              className="flex-1 border border-outline-variant/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button className="bg-primary text-white text-sm font-semibold px-5 rounded-lg">Check Now</button>
          </form>
          <p className="text-emerald-600 text-sm font-medium mt-3">✓ Currently active in 8+ Metro Cities</p>
        </div>

        <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=900&auto=format&fit=crop"
            alt="City skyline at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-5 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
            <p className="text-xs uppercase tracking-wide opacity-80">Our presence</p>
            <p className="font-bold">Pan-India Network</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-on-surface">Explore Locations</h2>
            <p className="text-on-surface-variant text-sm">Find a Servease professional near you.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cities.map((c) => (
            <div key={c.name} className="rounded-2xl overflow-hidden relative aspect-[3/4] group cursor-pointer">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs flex items-center gap-1 opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> {c.status}
                </p>
                <p className="font-bold text-lg">{c.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="border border-outline-variant/30 rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-semibold text-primary uppercase mb-2">Real-time status</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-3">
              Can't find your <span className="text-primary">neighborhood?</span>
            </h2>
            <p className="text-on-surface-variant mb-6">
              Our service professionals are constantly onboarding in new
              areas. Vote for your city and get notified as soon as we launch
              there!
            </p>
            <div className="flex gap-4 mb-5">
              <span className="flex items-center gap-2 text-sm bg-surface-container-low px-4 py-2 rounded-xl">
                <Users size={16} className="text-primary" /> 5,000+ Pros near you
              </span>
              <span className="flex items-center gap-2 text-sm bg-surface-container-low px-4 py-2 rounded-xl">
                <Zap size={16} className="text-primary" /> 30 mins avg response
              </span>
            </div>
            <button className="text-primary font-semibold text-sm">Request your city launch →</button>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 text-center">
            <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center mx-auto mb-3">
              <MapPin size={18} />
            </div>
            <h3 className="font-bold text-on-surface mb-1">Pincode Checker</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Enter your 6-digit pincode to see the exact services available
              at your doorstep.
            </p>
            <input
              defaultValue="560103"
              className="w-full border border-outline-variant/30 rounded-lg px-4 py-2.5 text-center text-sm mb-3 outline-none focus:border-primary"
            />
            <button className="w-full bg-primary text-white text-sm font-semibold py-2.5 rounded-lg">Check Availability</button>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-center text-xl font-bold text-on-surface mb-10">Growth by the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {growth.map((g) => (
              <div key={g.label}>
                <p className="text-3xl font-extrabold text-primary">{g.value}</p>
                <p className="text-xs text-on-surface-variant uppercase mt-1">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
