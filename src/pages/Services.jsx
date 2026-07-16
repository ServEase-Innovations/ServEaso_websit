import { ChefHat, Sparkles, Baby, ShieldCheck, Check } from "lucide-react";
import { useState } from "react";

const tabs = [
  { key: "cooks", label: "Professional Cooks", icon: ChefHat },
  { key: "housekeeping", label: "Housekeeping", icon: Sparkles },
  { key: "nannies", label: "Trusted Nannies", icon: Baby },
];

const testimonials = [
  { name: "Ananya R.", text: "The professional cook we hired through Servease has completely transformed our evenings. Delicious, healthy food exactly how we like it!" },
  { name: "Vikram S.", text: "Reliable and punctual housekeeping. The deep cleaning service was impressive. Highly recommend for working professionals." },
  { name: "Sneha K.", text: "Our nanny is wonderful. Finding someone trustworthy was our biggest worry, but Servease's vetting process put us at ease." },
];

export default function Services() {
  const [active, setActive] = useState("cooks");

  return (
    <div>
      <section className="max-w-4xl mx-auto px-5 pt-16 pb-10 text-center">
        <p className="text-xs font-semibold text-primary bg-surface-container-low inline-block px-3 py-1 rounded-full mb-5">
          Our expertise
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
          Elite home services tailored to your lifestyle
        </h1>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
          Experience the peak of professional home care. From culinary
          masters to certified caregivers, we bring reliability directly to
          your doorstep.
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
        <div className="md:col-span-2 grid sm:grid-cols-2 rounded-2xl overflow-hidden border border-outline-variant/30">
          <div className="aspect-square sm:aspect-auto bg-surface-container">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
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
                <p className="font-bold text-on-surface">₹8,000/mo</p>
              </div>
              <button className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg">Book Now</button>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <ShieldCheck size={40} className="text-primary mb-4" />
          <h3 className="font-bold text-on-surface mb-2">100% Verified Professionals</h3>
          <p className="text-sm text-on-surface-variant mb-4">
            Every service partner undergoes a rigorous 5-step background
            verification and skill assessment.
          </p>
          <div className="w-full bg-white rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full" style={{ width: "98%" }} />
          </div>
          <p className="text-xs text-outline mt-2">Trust Score: 98%</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border border-outline-variant/30">
          <div className="aspect-[16/9] relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
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
                <p className="text-xs text-outline">Full time</p>
                <p className="font-bold text-on-surface">₹12,000/mo</p>
              </div>
              <button className="border border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg">Select Plan</button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-outline-variant/30">
          <div className="aspect-[16/9] relative">
            <img
              src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=800&auto=format&fit=crop"
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
                <p className="text-xs text-outline">Monthly plan</p>
                <p className="font-bold text-on-surface">₹15,000/mo</p>
              </div>
              <button className="border border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">Trusted by 50,000+ Families</h2>
          <p className="text-on-surface-variant mb-10">Join the community of satisfied homeowners who choose Servease for peace of mind.</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-outline-variant/30">
                <div className="flex gap-1 text-emerald-500 mb-3 text-sm">★★★★★</div>
                <p className="text-sm text-on-surface-variant mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                    <p className="text-xs text-outline">Verified User</p>
                  </div>
                </div>
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
              Download the Servease app today and book your first session in
              under 2 minutes. Your home deserves the best care.
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
