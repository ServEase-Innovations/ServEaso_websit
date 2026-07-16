import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Cities from "./pages/Cities.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import FAQs from "./pages/FAQs.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-body-md">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
