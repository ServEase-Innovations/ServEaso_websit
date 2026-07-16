import { useState } from "react";
import { ShieldCheck, Smile, Headphones, ChevronDown } from "lucide-react";

const faqs = [
  { q: "Can I request the same professional again?", a: "Yes — simply select 'Rebook' on a past service in the app and we'll try to assign the same professional based on availability." },
  { q: "How do you vet your professionals?", a: "Every professional goes through identity verification, police clearance checks, in-person interviews, and a skill assessment before joining the platform." },
  { q: "What happens if I need to cancel?", a: "You can cancel up to 24 hours before your scheduled service for a full refund. Later cancellations may include a small fee." },
];

const guarantees = [
  { icon: ShieldCheck, title: "Insured & Protected", desc: "Every service is covered by our comprehensive $1M liability insurance. Your home and belongings are in safe hands, always." },
  { icon: Smile, title: "Happiness Promise", desc: "Not 100% satisfied with the quality of the service? We'll send another professional to make it right, free of charge." },
  { icon: Headphones, title: "24/7 Concierge", desc: "Have a question at midnight? Our dedicated support team is available around the clock to assist with your bookings." },
];

export default function HowItWorks() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div>
      <section className="max-w-4xl mx-auto px-5 pt-16 pb-14 text-center">
        <p className="text-xs font-semibold text-primary uppercase mb-3">The process</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
          Expert help, delivered in just three simple steps.
        </h1>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          We've streamlined professional home services so you can reclaim
          your time without compromising on quality or safety.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border border-outline-variant/30 rounded-2xl p-6">
          <p className="text-4xl font-extrabold text-slate-200 mb-3">01</p>
          <h3 className="text-xl font-bold text-on-surface mb-2">Choose Service</h3>
          <p className="text-sm text-on-surface-variant mb-4">
            Browse our wide range of professional home services. From
            meticulous deep cleaning and expert plumbing to gourmet home
            cooking and verified childcare. Simply select the category that
            fits your needs.
          </p>
          <ul className="text-sm text-on-surface-variant space-y-1 mb-6">
            <li>✓ Instant transparent pricing</li>
            <li>✓ Specialized service checklists</li>
          </ul>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop"
              alt="Browsing services on phone"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>

        <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col justify-center text-center items-center">
          <ShieldCheck size={36} className="text-primary mb-4" />
          <h3 className="font-bold text-on-surface mb-2">Vetted Professionals</h3>
          <p className="text-sm text-on-surface-variant">
            Every service provider undergoes a rigorous 5-step background
            check and skill assessment before joining our elite network.
          </p>
        </div>

        <div className="bg-white border border-outline-variant/30 rounded-2xl p-6">
          <p className="text-4xl font-extrabold text-slate-200 mb-3">02</p>
          <h3 className="text-xl font-bold text-on-surface mb-2">Select Date & Time</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-outline mb-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
            {[12, 13, 14, 15, 16, 17, 18].map((d) => (
              <span
                key={d}
                className={`py-1.5 rounded-lg ${d === 13 ? "bg-primary text-white" : "text-on-surface-variant"}`}
              >
                {d}
              </span>
            ))}
          </div>
          <p className="text-sm text-on-surface-variant">
            Your schedule is our priority. Choose the exact window that works
            for you — from immediate "Express" help within 2 hours to planned
            weekly sessions.
          </p>
        </div>

        <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 flex flex-col">
          <p className="text-4xl font-extrabold text-slate-200 mb-3">03</p>
          <h3 className="text-xl font-bold text-on-surface mb-2">Confirm & Relax</h3>
          <p className="text-sm text-on-surface-variant mb-4">
            Review your booking, apply promotions, and confirm. You'll
            receive real-time tracking of your professional's arrival and a
            detailed service summary upon completion.
          </p>
          <button className="bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg self-start mb-4">
            Get Started Now
          </button>
          <div className="rounded-xl overflow-hidden mt-auto">
            <img
              src="https://images.unsplash.com/photo-1602028082334-a1a17bafe4b5?q=80&w=900&auto=format&fit=crop"
              alt="Family relaxing at home"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">The Servease Quality Guarantee</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
            Beyond just a booking platform, we are your partners in home
            management. Our commitments ensure every visit is exceptional.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {guarantees.map((g) => (
              <div key={g.title}>
                <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center mb-4">
                  <g.icon size={18} />
                </div>
                <h3 className="font-bold text-on-surface mb-2">{g.title}</h3>
                <p className="text-sm text-on-surface-variant">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-16">
        <h2 className="text-2xl font-extrabold text-on-surface text-center mb-8">Common Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="border border-outline-variant/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-on-surface"
              >
                {f.q}
                <ChevronDown
                  size={18}
                  className={`text-outline transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-4 text-sm text-on-surface-variant">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="bg-surface-container-low rounded-3xl px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">Ready to experience professional ease?</h2>
          <p className="text-on-surface-variant mb-8">
            Join over 50,000 households who trust Servease for their daily
            home management needs.
          </p>
          <div className="flex justify-center gap-3">
            <button className="bg-primary text-white text-sm font-semibold px-5 py-3 rounded-lg">Download for iOS</button>
            <button className="border border-outline-variant text-on-surface-variant text-sm font-semibold px-5 py-3 rounded-lg">Download for Android</button>
          </div>
        </div>
      </section>
    </div>
  );
}
