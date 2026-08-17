import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Cities = lazy(() => import("./pages/Cities.jsx"));
const HowItWorks = lazy(() => import("./pages/HowItWorks.jsx"));
const FAQs = lazy(() => import("./pages/FAQs.jsx"));
const BookingApp = lazy(() => import("./pages/BookingApp.jsx"));

export default function App() {
  const location = useLocation();
  const isBookingPage = location.pathname === '/book';

  return (
    <div className="min-h-screen flex flex-col bg-[#04152c] text-gray-100 font-body-md selection:bg-brand-gradient-start selection:text-white">
      {!isBookingPage && <Navbar />}
      <main className={`flex-1 ${!isBookingPage ? 'pt-16' : ''}`}>
        <Suspense fallback={
          <div className="h-[70vh] w-full flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#38bdf8] animate-spin" />
            <p className="text-gray-500 font-semibold tracking-widest uppercase text-xs">Loading</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-us" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/book" element={<BookingApp />} />
          </Routes>
        </Suspense>
      </main>
      {!isBookingPage && <Footer />}
    </div>
  );
}
