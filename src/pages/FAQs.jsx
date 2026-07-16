import { useState } from "react";
import { Search, Briefcase, CreditCard, ShieldCheck, User, ChevronDown, MessageCircle, Mail } from "lucide-react";

const categories = [
  { key: "services", label: "Services", icon: Briefcase },
  { key: "booking", label: "Booking & Payments", icon: CreditCard },
  { key: "safety", label: "Safety & Trust", icon: ShieldCheck },
  { key: "account", label: "Account Support", icon: User },
];

const content = {
  services: {
    title: "Services",
    icon: Briefcase,
    items: [
      { q: "What kind of home services do you offer?", a: "Servease provides a comprehensive range of professional home services including verified Cooks, experienced Maids, certified Nannies, and general home maintenance professionals. All our service partners go through a rigorous 5-step background verification process." },
      { q: "Can I request a trial before booking long-term?", a: "Yes, we offer a 'First-Day Trial' package for most recurring services. You can book a professional for a single session to evaluate their work before committing to a monthly or annual subscription." },
    ],
  },
  booking: {
    title: "Booking & Payments",
    icon: CreditCard,
    items: [
      { q: "What are your payment methods?", a: "We accept all major credit/debit cards, UPI, and digital wallets. For monthly subscriptions, you can also set up automated bank transfers (eNACH) for hassle-free billing." },
      { q: "How does the refund policy work?", a: "If a service session is cancelled 24 hours in advance, a full refund is processed to your original payment method. For sudden cancellations by the service provider, we offer an immediate replacement or a pro-rated refund." },
    ],
  },
  safety: {
    title: "Safety & Trust",
    icon: ShieldCheck,
    items: [
      { q: "How do you verify your professionals?", a: "Every professional undergoes government ID verification, address proof validation, and criminal record background checks via third-party agencies, plus in-person interviews and skill assessments." },
      { q: "Is my home insured during the service?", a: "Yes, Servease provides 'CareGuard' insurance for all active bookings. This covers accidental property damage up to $5,000. For more details, review our Insurance Policy in the Account settings." },
    ],
  },
  account: {
    title: "Account Support",
    icon: User,
    items: [
      { q: "How do I update my account details?", a: "Go to Settings within the app to update your name, phone number, address, and payment preferences at any time." },
      { q: "I forgot my password. What do I do?", a: "Tap 'Forgot Password' on the login screen and follow the steps to reset it via your registered email or phone number." },
    ],
  },
};

export default function FAQs() {
  const [active, setActive] = useState("services");
  const [openIdx, setOpenIdx] = useState(0);
  const [query, setQuery] = useState("");

  const section = content[active];

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">How can we help you today?</h1>
        <p className="text-on-surface-variant mb-8">
          Everything you need to know about Servease services, payments, and
          our commitment to your safety.
        </p>
        <div className="relative max-w-lg mx-auto">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for questions (e.g. 'refund', 'verification')"
            className="w-full border border-outline-variant/30 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="space-y-1">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => { setActive(c.key); setOpenIdx(0); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                active === c.key ? "bg-surface-container-low text-primary" : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
            >
              <c.icon size={16} /> {c.label}
            </button>
          ))}
        </div>

        <div className="md:col-span-3">
          <h2 className="flex items-center gap-2 text-lg font-bold text-on-surface mb-4">
            <section.icon size={18} className="text-primary" /> {section.title}
          </h2>
          <div className="space-y-3 mb-10">
            {section.items
              .filter((i) => i.q.toLowerCase().includes(query.toLowerCase()))
              .map((f, i) => (
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

          <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-on-surface mb-1">Still have questions?</h3>
              <p className="text-sm text-on-surface-variant">
                Can't find the answer you're looking for? Our support team is
                available 24/7 to assist you with any inquiries.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg">
                <MessageCircle size={16} /> Chat with Us
              </button>
              <button className="flex items-center gap-2 border border-outline-variant text-on-surface-variant text-sm font-semibold px-4 py-2.5 rounded-lg">
                <Mail size={16} /> Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
