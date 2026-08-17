import { motion } from "framer-motion";
import { Utensils, Sparkles, Baby, ShieldCheck, MapPin, Clock, Heart, TrendingUp, ArrowRight } from "lucide-react";
import CookAnimation from "../components/animations/CookAnimation";
import MaidAnimation from "../components/animations/MaidAnimation";
import NannyAnimation from "../components/animations/NannyAnimation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="bg-[#04152c] min-h-screen text-gray-200 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gradient-start/20 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-sm font-medium tracking-wide text-gray-300">Trusted • Reliable • Location-Based</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
            Premium home care <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#00668a]">in minutes.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your home, professionally cleaned and managed - exactly when you need it. Cooks, Maids, and Nannies at your fingertips.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center">
              Book a Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => window.location.href = '/book'}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Download App
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
          <p className="text-gray-300 text-lg max-w-xl">From hourly bookings to daily upkeep, ServEaso provides verified professionals for every need.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Service Card */}
          <motion.a href="/book" variants={fadeIn} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="relative z-10">
              <CookAnimation />
              <h3 className="text-2xl font-bold text-white mb-3">Expert Cooks</h3>
              <p className="text-gray-300">Skilled cooks to prepare delicious, home-style meals tailored to you.</p>
            </div>
            <div className="mt-8 inline-flex items-center text-[#38bdf8] font-semibold group-hover:translate-x-2 transition-transform relative z-10">
              Explore Cooks <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.a>

          {/* Maids Card */}
          <motion.a href="/book" variants={fadeIn} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="relative z-10">
              <MaidAnimation />
              <h3 className="text-2xl font-bold text-white mb-3">Housekeeping</h3>
              <p className="text-gray-300">Reliable and verified professionals for daily home cleaning.</p>
            </div>
            <div className="mt-8 inline-flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform relative z-10">
              Book Maid <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.a>

          {/* Nannies Card */}
          <motion.a href="/book" variants={fadeIn} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="relative z-10">
              <NannyAnimation />
              <h3 className="text-2xl font-bold text-white mb-3">Trusted Nannies</h3>
              <p className="text-gray-300">Caring professionals dedicated to your child's comfort and growth.</p>
            </div>
            <div className="mt-8 inline-flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform relative z-10">
              Find Nanny <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.a>
        </motion.div>
      </section>

      {/* Why Choose Us Bento */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built Around Your Needs</h2>
          <p className="text-gray-300 text-lg">We connect families with verified and trained professionals, ensuring dependable support for everyday household needs.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeIn} className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
              <ShieldCheck className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Verified Professionals</h3>
            <p className="text-gray-300">Every service provider goes through a strict background verification process.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-6">
              <MapPin className="text-rose-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Location-Based</h3>
            <p className="text-gray-300">Find nearby home care professionals quickly for faster and convenient service.</p>
          </motion.div>

          <motion.div variants={fadeIn} className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
              <Clock className="text-amber-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Save Valuable Time</h3>
            <p className="text-gray-300">Spend less time searching for help and more time focusing on what matters.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#004c69] to-[#0a0a0a] border border-white/10 p-12 md:p-24 text-center"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">Ready for a cleaner home?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">Download the ServEaso app and book your first service today. Safe, secure, and reliable professionals at your doorstep.</p>
          <button 
            onClick={() => window.location.href = '/book'}
            className="relative z-10 px-8 py-4 rounded-xl bg-[#38bdf8] text-black font-bold hover:bg-white transition-colors text-lg"
          >
            Get Started Now
          </button>
        </motion.div>
      </section>

    </div>
  );
}
