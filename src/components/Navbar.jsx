import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Why us" },
  { to: "/services", label: "What We Do" },
  // { to: "/cities", label: "Cities" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-dark bg-[#04152c]/80 backdrop-blur-lg h-16 border-b border-white/10 transition-all duration-300">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-headline-md font-display-lg-mobile font-bold text-white tracking-tight">ServEaso</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-label-sm font-label-sm text-[#38bdf8] font-bold border-b-2 border-[#38bdf8] pb-1 transition-all"
                  : "text-label-sm font-label-sm text-gray-300 hover:text-white hover:border-b-2 hover:border-white/50 pb-1 transition-all"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a 
          href="/book"
          className="hidden md:inline-block bg-[#38bdf8] text-black px-6 py-2.5 rounded-lg font-label-sm text-label-sm hover:opacity-90 hover:bg-white transition-all hover:scale-105 font-bold"
        >
          Download App
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#04152c] border-b border-white/10 px-margin-mobile py-6 flex flex-col gap-5 shadow-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-label-sm font-label-sm text-[#38bdf8] font-bold"
                  : "text-label-sm font-label-sm text-gray-300"
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a 
            href="/book"
            className="bg-[#38bdf8] text-black font-bold px-6 py-2.5 rounded-lg font-label-sm text-label-sm mt-4 inline-block text-center"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
