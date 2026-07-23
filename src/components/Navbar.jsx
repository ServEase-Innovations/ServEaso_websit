import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Why us" },
  { to: "/services", label: "Services" },
  // { to: "/cities", label: "Cities" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm h-16 border-b border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            alt="Servease Logo"
            className="h-10 w-10 object-contain"
            src="/logo.jpeg"
          />
          <span className="text-headline-md font-display-lg-mobile font-bold text-on-surface">ServEaso</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-label-sm font-label-sm text-primary font-bold border-b-2 border-primary pb-1 transition-all"
                  : "text-label-sm font-label-sm text-on-surface-variant hover:text-primary hover:border-b-2 hover:border-primary/50 pb-1 transition-all"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity hover:scale-105">
          Download App
        </button>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-outline-variant/20 px-margin-mobile py-6 flex flex-col gap-5 shadow-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-label-sm font-label-sm text-primary font-bold"
                  : "text-label-sm font-label-sm text-on-surface-variant"
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-sm text-label-sm">
            Download App
          </button>
        </div>
      )}
    </header>
  );
}
