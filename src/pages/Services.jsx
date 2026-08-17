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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: "cooks",
    title: "Professional Cooks",
    icon: ChefHat,
    subtitle: "Culinary excellence",
    description:
      "Gourmet meals prepared in your own kitchen. Our chefs specialize in multiple cuisines and dietary requirements.",
    features: [
      "North & South Indian, Continental",
      "Daily meal prep or special occasions",
      "Grocery management included",
    ],
    price: "₹99 / visit",
    color: "text-[#38bdf8]",
    bg: "bg-[#38bdf8]/20",
    glow: "bg-[#38bdf8]",
    border: "border-[#38bdf8]",
    buttonBg: "bg-[#38bdf8] text-black",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    icon: Sparkles,
    subtitle: "Hospital-grade cleanliness",
    description:
      "Reliable and verified professionals for daily home cleaning. From dusting and mopping to deep cleaning.",
    features: [
      "Deep Clean & Mopping",
      "Bathroom & Kitchen Sanitization",
      "Ironing & Organization",
    ],
    price: "₹99 / visit",
    color: "text-emerald-400",
    bg: "bg-emerald-400/20",
    glow: "bg-emerald-400",
    border: "border-emerald-400",
    buttonBg: "bg-emerald-400 text-black",
  },
  {
    id: "nannies",
    title: "Trusted Nannies",
    icon: Baby,
    subtitle: "Childcare experts",
    description:
      "Certified caregivers who prioritize your child's safety and development. Includes infant care and educational play.",
    features: [
      "Infant & Toddler Care",
      "Educational & Interactive Play",
      "Certified First-Aid Trained",
    ],
    price: "₹99 / visit",
    color: "text-purple-400",
    bg: "bg-purple-400/20",
    glow: "bg-purple-400",
    border: "border-purple-400",
    buttonBg: "bg-purple-400 text-black",
  },
];

const comingSoonCities = ["Mumbai", "Pune", "Hyderabad", "Delhi NCR", "Chennai"];

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  // Auto-cycle through services every 30 seconds.
  // The dependency array ensures the timer resets if the user manually hovers over a tab.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div>
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-5 pt-16 pb-8 text-center border-b border-white/5 mb-10">
        <div className="flex items-center justify-center gap-2 mb-5">
          <p className="text-xs font-semibold text-[#38bdf8] bg-white/5 inline-flex items-center gap-1 px-3 py-1 rounded-full">
            Our expertise
          </p>
          <p className="text-xs font-semibold text-emerald-400 bg-emerald-500/20 inline-flex items-center gap-1 px-3 py-1 rounded-full">
            <MapPin size={12} /> Live in Bangalore
          </p>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Elite home services tailored to your lifestyle
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Experience the peak of professional home care. From culinary masters to
          certified caregivers, we bring reliability directly to your doorstep.
        </p>
      </section>

      {/* Hover Showcase Section */}
      <section className="max-w-7xl mx-auto px-5 py-6 mb-20">
        
        {/* Mobile Navigation (Horizontal Swipe Pills) */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-3 pb-6 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {servicesData.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`snap-center shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all border ${
                activeIndex === index
                  ? `${service.bg} ${service.border} ${service.color} shadow-lg scale-105`
                  : 'bg-white/5 border-white/10 text-gray-400 opacity-70'
              }`}
            >
              <service.icon size={18} />
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Hover Navigation (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 relative">
             <div className="sticky top-24 flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {servicesData.map((service, index) => (
                   <div 
                      key={service.id}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`cursor-pointer px-6 py-8 rounded-3xl transition-all duration-300 border backdrop-blur-md ${
                          activeIndex === index 
                             ? `bg-white/10 ${service.border} scale-105 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] z-10`
                             : 'border-white/5 bg-white/5 opacity-50 hover:opacity-100 hover:bg-white/10'
                      }`}
                   >
                       <div className="flex items-center gap-4">
                         <div className={`p-3 rounded-xl ${activeIndex === index ? service.bg : 'bg-white/5'}`}>
                           <service.icon size={28} className={activeIndex === index ? service.color : 'text-gray-400'} />
                         </div>
                         <h3 className={`text-2xl font-bold transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-400'}`}>
                             {service.title}
                         </h3>
                       </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:col-span-8 min-h-[500px] relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#04152c] shadow-2xl p-8 md:p-16">
             {/* Dynamic Glow Background */}
             <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 -mr-40 -mt-40 pointer-events-none transition-colors duration-700 ${activeService.glow}`} />
             <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-5 -ml-20 -mb-20 pointer-events-none transition-colors duration-700 ${activeService.glow}`} />
             
             <AnimatePresence mode="wait">
                <motion.div
                   key={activeService.id}
                   initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                   exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="flex flex-col h-full relative z-10"
                >
                    <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${activeService.color}`}>
                      {activeService.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                      {activeService.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                      {activeService.description}
                    </p>
                    
                    <ul className="flex flex-col gap-6 text-gray-200 mb-16">
                      {activeService.features.map((f) => (
                        <li key={f} className="flex items-center gap-4">
                          <div className={`p-1.5 rounded-full ${activeService.bg}`}>
                            <Check size={18} className={activeService.color} />
                          </div>
                          <span className="text-lg md:text-xl font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 mt-auto w-full border-t border-white/10">
                      <div className="text-center sm:text-left">
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Starting from</p>
                        <p className="text-3xl font-extrabold text-white">{activeService.price}</p>
                      </div>
                      <a href="/book" className={`inline-block px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-lg w-full sm:w-auto text-center ${activeService.buttonBg}`}>
                        Book Service Now
                      </a>
                    </div>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Additional Sections remain identical to keep the page complete */}
      <section className="max-w-6xl mx-auto px-5 pt-12 pb-16">
        <div className="bg-white/5 rounded-3xl p-10 flex flex-col items-center justify-center text-center border border-white/10">
          <ShieldCheck size={56} className="text-[#38bdf8] mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">100% Verified Professionals</h3>
          <p className="text-gray-400 max-w-2xl text-lg">
            Every service partner undergoes a rigorous 5-step background
            verification and skill assessment before joining ServEaso. We guarantee complete peace of mind.
          </p>
        </div>
      </section>

      {/* Service area strip */}
      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="bg-white/5 rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-white/10">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <MapPin size={28} className="text-emerald-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Currently serving</p>
              <p className="text-2xl font-bold text-white">Bangalore</p>
            </div>
          </div>
          <div className="hidden md:block w-px self-stretch bg-white/10" />
          <div className="text-left">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-3">Coming soon to</p>
            <div className="flex flex-wrap gap-3">
              {comingSoonCities.map((city) => (
                <span
                  key={city}
                  className="text-sm font-medium text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white/5 py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Why families are choosing ServEaso first
          </h2>
          <p className="text-lg text-gray-400 mb-14">
            No fluff, just what we actually do differently.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-[#04152c] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-colors">
                <d.icon size={36} className="text-[#38bdf8] mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="bg-gradient-to-br from-[#004c69] to-[#171c20] rounded-[3rem] px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to simplify your home life?</h2>
            <p className="text-xl text-gray-300 max-w-lg">
              Download the ServEaso app today and book your first visit from
              ₹99. Currently available across Bangalore.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10">
            <button className="bg-[#38bdf8] text-black font-bold px-8 py-5 rounded-2xl hover:bg-white transition-colors shadow-lg">Get App</button>
            <button className="border border-white/20 bg-white/5 text-gray-200 font-semibold px-8 py-5 rounded-2xl hover:bg-white/10 transition-colors">Talk to an Expert</button>
          </div>
        </div>
      </section>
    </div>
  );
}