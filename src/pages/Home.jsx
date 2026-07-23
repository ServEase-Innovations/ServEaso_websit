export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-12 md:pb-0 bg-surface-bright">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgb(0, 102, 138) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="py-12 md:py-24">
           <div className="flex items-center gap-2 mb-6">
          <span
           className="material-symbols-outlined text-success-green"
            style={{ fontVariationSettings: "'FILL' 1" }}
           >
          verified
          </span>
          <p className="text-label-sm font-label-sm text-on-surface-variant">
           Trusted • Reliable • Location-Based Home Care Services
         </p>
         </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-6 text-on-surface">
              Trusted house help in minutes!
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-lg">
              Your home, professionally cleaned - exactly when you need it. Cooks, Maids, and Nannies at your fingertips.
            </p>
         
            
            <div className="space-y-4">
              <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Live in:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm">Bengaluru</span>
                {/* <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm">Delhi</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm">Noida</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm">Gurgaon</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm">Mumbai</span>
                <span className="px-3 py-1 border border-primary text-primary rounded-full text-label-sm font-bold">+ 10 more</span> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block relative h-full group overflow-hidden rounded-3xl">
            <img
              alt="Servease Professional Uniform"
              className="w-full h-full rounded-3xl shadow-xl bg-white object-cover border border-outline-variant/30 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnhJwQWf2OmJsWnakbYP14cgVtA-VQnvE0mf_8vSg-ioOyPb-umCuidKjt8XcELV0p6Vjs5EMajFhBhADx4RFBFzW5j_J006IlB4-FA_Lmx67Wlpk93e1suL5JyS0rhPDwVLr5DdvXHiLwnZ0-S3vrY05ShUv-wIaISCMcYCNipK22rSM-U4nBtdjKKofUDeSU_hjI3P1ZuAUKk1Tzc8z_IrZ26bYwhbWcbooeGts3o--YSyZTm_IqMWE6Ssd52pWKtJwv3VXvAE0"
            />
          </div>
        </div>
      </section>

  

      {/* Stats Section */}
      <section className="py-section-gap bg-surface-subtle">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <p className="text-primary font-bold text-label-sm font-label-sm mb-4 uppercase tracking-widest">
              Why Choose Us?
            </p>

            <h2 className="text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface max-w-xl relative inline-block pb-4">
              Why Choose ServEaso?
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-primary-container rounded-full" />
            </h2>

            <p className="text-body-md font-body-md text-on-surface-variant mt-4 max-w-3xl">
              ServEaso is built to make home care simple, reliable, and stress-free.
              We connect families with verified and trained professionals, ensuring
              dependable support for everyday household needs. Whether you need a
              maid, nanny, cook, elderly caregiver, patient caregiver, driver, or
              other home assistance, our goal is to provide trusted services with
              convenience, transparency, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

            <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-success-green/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-success-green">
                  verified_user
                </span>
              </div>

              <h3 className="text-title-lg font-semibold text-on-surface mb-2">
                Verified Professionals
              </h3>

              <p className="text-body-md text-on-surface-variant">
                Every service provider goes through a verification process, helping
                you hire trusted professionals with confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
              </div>

              <h3 className="text-title-lg font-semibold text-on-surface mb-2">
                Location-Based Matching
              </h3>

              <p className="text-body-md text-on-surface-variant">
                Find nearby home care professionals quickly through our smart
                location-based platform for faster and more convenient service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-tertiary">
                  support_agent
                </span>
              </div>

              <h3 className="text-title-lg font-semibold text-on-surface mb-2">
                Reliable Home Care
              </h3>

              <p className="text-body-md text-on-surface-variant">
                From maids and cooks to nannies, patient care, elderly care,
                and house surveillance, ServEaso offers dependable solutions for all
                your home service needs.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-12">
            <p className="text-primary font-bold text-label-sm font-label-sm mb-4 uppercase tracking-widest">Our Services</p>
            <h2 className="text-display-lg-mobile md:text-headline-md font-headline-md text-on-surface">Book trusted house help.</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">From hourly bookings to daily upkeep, ServEaso's got you covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
           {/* Cooks */}
<div className="group relative overflow-hidden rounded-xl bg-surface-bright border border-outline-variant/30 p-6 service-card-hover transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 cursor-pointer">

  {/* Icon */}
  <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
    <span className="material-symbols-outlined text-orange-600 text-5xl">
      restaurant
    </span>
  </div>

  {/* Heading */}
  <h3 className="text-headline-md font-headline-md mb-3 text-on-surface">
    Expert Home Cooks
  </h3>

  {/* Description */}
  <p className="text-body-md text-on-surface-variant mb-5">
    Skilled and hygienic cooks to prepare delicious, home-style meals tailored to your family's preferences.
  </p>

  {/* Service Highlights */}
  <ul className="space-y-2 text-sm text-on-surface-variant mb-6">
    <li>✓ Daily Meal Preparation</li>
    <li>✓ Vegetarian & Non-Vegetarian Cooking</li>
    <li>✓ Customized Meal Plans</li>
    <li>✓ Hygienic Food Handling</li>
    <li>✓ Verified & Experienced Cooks</li>
  </ul>

  {/* CTA */}
  <div className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
    <span>Book Now</span>
    <span className="material-symbols-outlined ml-2">
      arrow_forward
    </span>
  </div>
</div>
            {/* Maids */}
<div className="group relative overflow-hidden rounded-xl bg-surface-bright border border-outline-variant/30 p-6 service-card-hover transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 cursor-pointer">

  {/* Icon */}
  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
    <span className="material-symbols-outlined text-primary text-5xl">
      cleaning_services
    </span>
  </div>

  {/* Heading */}
  <h3 className="text-headline-md font-headline-md mb-3 text-on-surface">
    Housekeeping & Maids
  </h3>

  {/* Description */}
  <p className="text-body-md text-on-surface-variant mb-5">
    Reliable and verified housekeeping professionals for all your daily home needs.
  </p>

  {/* Service Highlights */}
  <ul className="space-y-2 text-sm text-on-surface-variant mb-6">
    <li>✓ Daily Cleaning</li>
    <li>✓ Kitchen Cleaning</li>
    <li>✓ Bathroom Cleaning</li>
    <li>✓ Dusting & Mopping</li>
    <li>✓ Background Verified Staff</li>
  </ul>

  {/* CTA */}
  <div className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
    <span>Book Now</span>
    <span className="material-symbols-outlined ml-2">
      arrow_forward
    </span>
  </div>
</div>

         {/* Nannies */}
<div className="group relative overflow-hidden rounded-xl bg-surface-bright border border-outline-variant/30 p-6 service-card-hover transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/30 cursor-pointer">

  {/* Icon */}
  <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
    <span className="material-symbols-outlined text-pink-600 text-5xl">
      child_care
    </span>
  </div>

  {/* Heading */}
  <h3 className="text-headline-md font-headline-md mb-3 text-on-surface">
    Trusted Nannies
  </h3>

  {/* Description */}
  <p className="text-body-md text-on-surface-variant mb-5">
    Caring and experienced professionals dedicated to your child's comfort and safety.
  </p>

  {/* Service Highlights */}
  <ul className="space-y-2 text-sm text-on-surface-variant mb-6">
    <li>✓ Baby Care Assistance</li>
    <li>✓ Feeding Support</li>
    <li>✓ Playtime & Engagement</li>
    <li>✓ Experienced Caregivers</li>
    <li>✓ Verified & Trusted Staff</li>
  </ul>

  {/* CTA */}
  <div className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
    <span>Book Now</span>
    <span className="material-symbols-outlined ml-2">
      arrow_forward
    </span>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <p className="text-primary font-bold text-label-sm font-label-sm mb-4 uppercase tracking-widest">How It Works</p>
            <h2 className="text-display-lg-mobile md:text-headline-md font-headline-md text-on-surface">Simple steps to a cleaner home.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-headline-md font-bold text-primary">1</div>
              <h4 className="text-headline-md font-headline-md text-on-surface">Choose a service</h4>
              <p className="text-on-surface-variant">Browse variety of services in the Servease app - from hourly bookings to task-specific professionals.</p>
             <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm bg-white group">
         <img
        className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
        alt="Choose a service"
        src="/services_card.png"
         />
       </div>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-headline-md font-bold text-primary">2</div>
              <h4 className="text-headline-md font-headline-md text-on-surface">Select date and time</h4>
              <p className="text-on-surface-variant">Pick a slot that works for you. Our platform handles coordination for a single visit or recurring help.</p>
              <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm bg-white group">
                <img
                  className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Select date and time"
                  src="/date_card.png"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-headline-md font-bold text-primary">3</div>
              <h4 className="text-headline-md font-headline-md text-on-surface">Confirm and relax</h4>
              <p className="text-on-surface-variant">Get a pro in minutes or at your scheduled time. Sit back while we take care of your home- ServEaso handles every detail with care.</p>
            <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm bg-white group">
    <img
        className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
        alt="Choose a service"
        src="/services_card.png"
    />
</div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Built Around Your Everyday Needs */}
<section className="py-section-gap bg-surface-subtle">
  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <div className="mb-16">
      <p className="text-primary font-bold text-label-sm font-label-sm mb-4 uppercase tracking-widest">
        Our Commitment
      </p>

      <h2 className="text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface max-w-2xl relative inline-block pb-4">
        Built Around Your Everyday Needs
        <span className="absolute bottom-0 left-0 w-32 h-2 bg-primary-container rounded-full" />
      </h2>

      <p className="text-body-md font-body-md text-on-surface-variant mt-4 max-w-3xl">
        At ServEaso, we believe finding reliable home care should be simple,
        stress-free, and dependable. Our mission is to help families save time,
        reduce daily stress, and enjoy greater peace of mind with trusted home
        care services.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm service-card-hover">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">
            schedule
          </span>
        </div>

        <h3 className="text-title-lg font-semibold text-on-surface mb-3">
          Save Valuable Time
        </h3>

        <p className="text-body-md text-on-surface-variant">
          Spend less time searching for dependable household help and more time
          focusing on your work, family, and the moments that matter most.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm service-card-hover">
        <div className="w-14 h-14 rounded-full bg-success-green/10 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-success-green text-3xl">
            family_home
          </span>
        </div>

        <h3 className="text-title-lg font-semibold text-on-surface mb-3">
          Designed for Every Family
        </h3>

        <p className="text-body-md text-on-surface-variant">
          Whether you're a busy professional, a parent, or caring for elderly
          loved ones, ServEaso is built to support your everyday household
          needs with confidence.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm service-card-hover">
        <div className="w-14 h-14 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-tertiary text-3xl">
            trending_up
          </span>
        </div>

        <h3 className="text-title-lg font-semibold text-on-surface mb-3">
          Growing with You
        </h3>

        <p className="text-body-md text-on-surface-variant">
          We're continuously improving our platform, expanding our services,
          and enhancing the customer experience to become India's most trusted
          home care marketplace.
        </p>
      </div>

    </div>
  </div>
</section>
      
      

      {/* Final CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary-container/20 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-primary-container/30">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(rgb(0, 102, 138) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-8 text-primary">
                Get trusted house help in minutes.
              </h2>
              <p className="text-body-lg font-body-lg mb-12 text-on-surface-variant font-medium">
                Download the Servease app and book your first service today. Safe, secure, and reliable professionals at your doorstep.
              </p>
              
            </div>
            <div className="mt-16 flex justify-center gap-4 md:gap-8 overflow-hidden">
              <div className="w-48 h-96 bg-white/40 rounded-3xl border-4 border-white backdrop-blur-sm -rotate-6 transform translate-y-20 shadow-lg" />
              <div className="w-48 h-96 bg-white/60 rounded-3xl border-4 border-white backdrop-blur-sm transform translate-y-12 shadow-xl" />
              <div className="w-48 h-96 bg-white/40 rounded-3xl border-4 border-white backdrop-blur-sm rotate-6 transform translate-y-20 shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
