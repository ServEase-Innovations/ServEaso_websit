import {
  ChefHat,
  Sparkles,
  Baby,
  ShieldCheck,
  Check,
  MapPin,
  IndianRupee,
  Navigation,
} from "lucide-react";
import { useState } from "react";

const tabs = [
  { key: "cooks", label: "Professional Cooks", icon: ChefHat },
  { key: "housekeeping", label: "Housekeeping", icon: Sparkles },
  { key: "nannies", label: "Trusted Nannies", icon: Baby },
];

// Edit this list as your rollout plan changes — it drives the "coming soon" strip below.
const comingSoonCities = ["Mumbai", "Pune", "Hyderabad", "Delhi NCR", "Chennai"];

// Real, structural claims only — no user counts or star ratings until you actually have them.
const differentiators = [
  {
    icon: ShieldCheck,
    title: "Verified, not just listed",
    body: "ID check, background check and an in-person skills interview for every helper before they join.",
  },
  {
    icon: IndianRupee,
    title: "Transparent pricing",
    body: "Visits start at ₹99, shown upfront with no hidden fees at checkout.",
  },
  {
    icon: Navigation,
    title: "Live tracking",
    body: "See your helper's arrival on the map and chat directly if plans change.",
  },
];

export default function Services() {
  const [active, setActive] = useState("cooks");

  return (
    <div>
      <section className="max-w-4xl mx-auto px-5 pt-16 pb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-5">
          <p className="text-xs font-semibold text-primary bg-surface-container-low inline-flex items-center gap-1 px-3 py-1 rounded-full">
            Our expertise
          </p>
          <p className="text-xs font-semibold text-emerald-600 bg-emerald-50 inline-flex items-center gap-1 px-3 py-1 rounded-full">
            <MapPin size={12} /> Live in Bangalore
          </p>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
          Elite home services tailored to your lifestyle
        </h1>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
          Experience the peak of professional home care. From culinary
          masters to certified caregivers, we bring reliability directly to
          your doorstep — currently serving Bangalore, with more cities on
          the way.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                active === t.key
                  ? "border-primary text-primary bg-surface-container-low"
                  : "border-outline-variant/30 text-on-surface-variant hover:border-outline-variant"
              }`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-6">
        <div className="group md:col-span-2 grid sm:grid-cols-2 rounded-2xl overflow-hidden border border-outline-variant/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="aspect-square sm:aspect-auto bg-surface-container">
            <img
              src="/COOK.png"
              alt="Professional cook"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <p className="text-xs font-semibold text-primary uppercase mb-2">Culinary excellence</p>
            <h3 className="text-xl font-bold text-on-surface mb-2">Professional Cooks</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Gourmet meals prepared in your own kitchen. Our chefs specialize
              in multiple cuisines and dietary requirements.
            </p>
            <ul className="space-y-2 text-sm text-on-surface-variant mb-5">
              {["North & South Indian, Continental", "Daily meal prep or special occasions", "Grocery management included"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-outline">Starting from</p>
                <p className="font-bold text-on-surface">₹99 / visit</p>
              </div>
              <button className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg">Book Now</button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <ShieldCheck size={40} className="text-primary mb-4" />
          <h3 className="font-bold text-on-surface mb-2">100% Verified Professionals</h3>
          <p className="text-sm text-on-surface-variant">
            Every service partner undergoes a rigorous 5-step background
            verification and skill assessment before joining Servease.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16 grid md:grid-cols-2 gap-6">
       <div className="group rounded-2xl overflow-hidden border border-outline-variant/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="aspect-[16/9] relative">
            <img
              src="/maid.png"
              alt="Housekeeping"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-black/50 text-white text-sm font-semibold px-3 py-1 rounded">
              Housekeeping & Maids
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-on-surface-variant mb-4">
              Hospital-grade cleanliness for your home. From dusting and
              mopping to deep cleaning of bathrooms and kitchens.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Deep Clean</span>
              <span className="text-xs bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Ironing</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-outline">Starting from</p>
                <p className="font-bold text-on-surface">₹99 / visit</p>
              </div>
              <button className="border border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg">Select Plan</button>
            </div>
          </div>
        </div>

        <div className="group rounded-2xl overflow-hidden border border-outline-variant/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="aspect-[16/9] relative">
            <img
              src="/nanny.png"
              alt="Nanny with child"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-black/50 text-white text-sm font-semibold px-3 py-1 rounded">
              Trusted Nannies
            </span>
          </div>
          <div className="p-6">
            <p className="text-sm text-on-surface-variant mb-4">
              Certified caregivers who prioritize your child's safety and
              development. Includes infant care and educational play.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Infant Care</span>
              <span className="text-xs bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Educational</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-outline">Starting from</p>
                <p className="font-bold text-on-surface">₹99 / visit</p>
              </div>
              <button className="border border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service area strip — Bangalore live, rest coming soon */}
      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="bg-surface-container-low rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <MapPin size={22} className="text-emerald-600" />
            </div>
            <div className="text-left">
              <p className="text-xs text-outline">Currently serving</p>
              <p className="font-bold text-on-surface">Bangalore</p>
            </div>
          </div>
          <div className="hidden md:block w-px self-stretch bg-outline-variant/30" />
          <div className="text-left">
            <p className="text-xs text-outline mb-2">Coming soon to</p>
            <div className="flex flex-wrap gap-2">
              {comingSoonCities.map((city) => (
                <span
                  key={city}
                  className="text-xs font-medium text-on-surface-variant bg-white border border-outline-variant/30 px-3 py-1 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why families are choosing Servease — structural claims only, no ratings or user counts */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">
            Why families are choosing Servease first
          </h2>
          <p className="text-on-surface-variant mb-10">
            No fluff, just what we actually do differently.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-6 border border-outline-variant/30">
                <d.icon size={28} className="text-primary mb-4" />
                <h3 className="font-bold text-on-surface mb-2">{d.title}</h3>
                <p className="text-sm text-on-surface-variant">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="bg-surface-container rounded-3xl px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">Ready to simplify your home life?</h2>
            <p className="text-on-surface-variant max-w-md">
              Download the Servease app today and book your first visit from
              ₹99. Currently available across Bangalore — your city is next.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="bg-primary text-white text-sm font-semibold px-5 py-3 rounded-lg">Get App</button>
            <button className="border border-outline-variant text-on-surface-variant text-sm font-semibold px-5 py-3 rounded-lg">Talk to an Expert</button>
          </div>
        </div>
      </section>
    </div>
  );
}