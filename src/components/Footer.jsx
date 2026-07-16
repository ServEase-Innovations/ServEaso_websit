export default function Footer() {
  return (
    <footer className="bg-surface-bright text-on-surface py-section-gap border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-gutter">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img
              alt="ServEaso Logo"
              className="h-8 w-8 object-contain"
              src="/image.png"
            />
            <span className="text-headline-md font-display-lg-mobile font-extrabold text-on-surface">ServEaso</span>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xs mb-8">
            © 2024 ServEaso. All rights reserved. Professional home services you can trust.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm text-primary">face_nod</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm text-primary">share</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm text-primary">play_arrow</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-on-surface font-bold mb-6">Services</h5>
          <ul className="space-y-4">
            {["Cooks", "Maids", "Nannies", "Deep Cleaning"].map((s) => (
              <li key={s}>
                <a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-on-surface font-bold mb-6">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">About Us</a></li>
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">Careers</a></li>
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">Partner Program</a></li>
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="/how-it-works">How it Works</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-on-surface font-bold mb-6">Support</h5>
          <ul className="space-y-4">
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">Contact Support</a></li>
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">Privacy Policy</a></li>
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">Terms of Service</a></li>
            <li><a className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block" href="/faqs">FAQs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
