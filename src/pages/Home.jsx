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
            {/* <div className="flex flex-wrap gap-4 mb-12">
              <a className="hover:scale-105 transition-transform" href="#">
                <img
                  className="h-12"
                  alt="Download on the App Store"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABCBfLdzNaCo591Pcbanvd0OUQreiCxoN2WI9vI9Ya9AXuobTPA8MXd2XsZhbJICUc6W013H0nv2c9la_s9rNLosI7wxMSqZlrAnIjmeLwzghN_ejg5NH50NuYwJ7CeLR-XjBUbpv6Mebron7qC1n1LJF6iSPa6Ux332UhHFtMAZRuxaYEg_uiXrXTykZq0Ap50H8QrdEtzNu1HAWiPfkgSmRWyjki6Jih83D7Cyy32rbInN2tkns_TQPW3E6xl-yvNIfKNZ-f5z4"
                />
              </a>
              <a className="hover:scale-105 transition-transform" href="#">
                <img
                  className="h-12"
                  alt="Get it on Google Play"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0IQHqAc992qztnxJSkN3nBmA_SadEDY7cjcgnlPXQTmEAiIzhGbfsxTYNcv6VpGcBcxWU7JVia75YcwWax7qmgC-zDdFWOAABa4Y6XWL_DDZe5jA5MHvIxbps_2lc7xepwLNNheBhwR8m1HjejIJDx4wuCk4uMrt2iQQwDBFzLny_ROvePmu7u0PjolURiaqEHiYOi4SnVVRqJIW_qO2LwJ-D_UUHfQgz9xUl3NpM8ulXj4JyI03pmllFnf3ul6HIOGA4qKsNwyw"
                />
              </a>
            </div> */}
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
          <div className="hidden md:block relative h-full">
            <img
              alt="Servease Professional Uniform"
              className="w-full h-full rounded-3xl shadow-xl bg-white object-cover border border-outline-variant/30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnhJwQWf2OmJsWnakbYP14cgVtA-VQnvE0mf_8vSg-ioOyPb-umCuidKjt8XcELV0p6Vjs5EMajFhBhADx4RFBFzW5j_J006IlB4-FA_Lmx67Wlpk93e1suL5JyS0rhPDwVLr5DdvXHiLwnZ0-S3vrY05ShUv-wIaISCMcYCNipK22rSM-U4nBtdjKKofUDeSU_hjI3P1ZuAUKk1Tzc8z_IrZ26bYwhbWcbooeGts3o--YSyZTm_IqMWE6Ssd52pWKtJwv3VXvAE0"
            />
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      {/* <section className="py-12 bg-surface border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-label-sm font-label-sm text-outline uppercase tracking-[0.2em] mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-headline-md font-display-lg text-on-surface">INC42</span>
            <span className="font-bold text-headline-md font-display-lg text-on-surface">TC</span>
            <span className="font-bold text-headline-md font-display-lg text-on-surface">Bloomberg</span>
            <span className="font-bold text-headline-md font-display-lg text-on-surface">The Economist</span>
          </div>
        </div>
      </section> */}

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
<div className="group relative overflow-hidden rounded-xl bg-surface-bright border border-outline-variant/30 p-6 service-card-hover transition-all hover:shadow-xl">

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
<div className="group relative overflow-hidden rounded-xl bg-surface-bright border border-outline-variant/30 p-6 service-card-hover transition-all hover:shadow-xl">

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
<div className="group relative overflow-hidden rounded-xl bg-surface-bright border border-outline-variant/30 p-6 service-card-hover transition-all hover:shadow-xl">

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
              <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm bg-white">
                <img
                  className="w-full h-[450px] object-cover"
                  alt="Choose a service"
                  src="/services_card.png"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-headline-md font-bold text-primary">2</div>
              <h4 className="text-headline-md font-headline-md text-on-surface">Select date and time</h4>
              <p className="text-on-surface-variant">Pick a slot that works for you. Our platform handles coordination for a single visit or recurring help.</p>
              <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm bg-white">
                <img
                  className="w-full h-[450px] object-cover"
                  alt="Select date and time"
                  src="/date_card.png"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-headline-md font-bold text-primary">3</div>
              <h4 className="text-headline-md font-headline-md text-on-surface">Confirm and relax</h4>
              <p className="text-on-surface-variant">Get a pro in minutes or at your scheduled time. Sit back while we take care of your home.</p>
              <div className="rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm bg-white">
                <img
                  className="w-full h-[450px] object-cover"
                  alt="Confirm and relax"
                  src="/provider_card.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/*
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-label-sm font-label-sm mb-4 uppercase tracking-widest">Our Testimonials</p>
            <h2 className="text-display-lg-mobile md:text-headline-md font-headline-md text-on-surface">Loved by thousands of homes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
      {/*
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm service-card-hover">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
        </div>
        <p className="text-body-md font-body-md text-on-surface mb-6">
          "Great work, my home was left spotless and fresh. The cleaning was thorough, and I appreciated the attention to detail. I'd recommend it. 👍"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">P</div>
          <div>
            <p className="text-label-sm font-bold text-on-surface">Pradynayash</p>
            <p className="text-xs text-outline">Sector 45, Bengaluru</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      {/*}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm service-card-hover">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
        </div>
        <p className="text-body-md font-body-md text-on-surface mb-6">
          "The services have definitely improved from the first time. The cleaning staff are kept as top priority. Thank you for making our lives easier with Servease!"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">R</div>
          <div>
            <p className="text-label-sm font-bold text-on-surface">Ridhi Saluja</p>
            <p className="text-xs text-outline">Sector 56, Delhi</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      {/*}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm service-card-hover">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-success-green" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
        </div>
        <p className="text-body-md font-body-md text-on-surface mb-6">
          "Really liked your service, it was smooth, efficient, and just what I needed. Would definitely recommend to others. ⭐"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-on-tertiary-fixed">S</div>
          <div>
            <p className="text-label-sm font-bold text-on-surface">Sameer</p>
            <p className="text-xs text-outline">Thane, Mumbai</p>
          </div>
        </div>
      </div>
    </div >
        </div >
      </section >
      */}
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
              {/* App Store and Google Play buttons */}
              {/* <div className="flex flex-wrap justify-center gap-4">
                <a className="hover:scale-105 transition-transform bg-white rounded-lg overflow-hidden border border-outline-variant/30 shadow-md" href="#">
                  <img
                    className="h-14"
                    alt="Download on App Store"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApSecy9WzCjpJWa5b9NzTnDnVJFT6HvTLBti89eoZCZkWtQ-5HWQWog-m8-qUv5aGO7yofYCZ2wG2UfuNEp-e0wzqTyS-QUDx1UbIrLhK9_sVyL-ZgLRM3pdoAUt1Gy-ReW_aoFZADkjuQtkw5Safpd5QLzCA7BNxjjNVwJ8slA51dIblirjL7IKtozrXX3B1DCn2EMxh3-sewGP_HDTawhLVmOLB0h6_bF9ZSmsL21hQiiLSYiAXl19TPF7L0Dr2GKCGXk9-5j0o"
                  />
                </a>
                <a className="hover:scale-105 transition-transform bg-white rounded-lg overflow-hidden border border-outline-variant/30 shadow-md" href="#">
                  <img
                    className="h-14"
                    alt="Get it on Google Play"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsE8Z373a9nye17mKDPRNx7mKQaNqyq6_Hzb9magyjrf4yAppTVpmkOb5JBcYB3fBjSARh19D6KnqcAwsvvuzqmvDmOgYRJmLTpdqZl0RvfPDgu0UCp4vXDzt75EzVacAlLxUESnevSjM3MN-R3g6A-U_B0RZVFqZ6IpA6WQMdVX92LFId59BCqYd6n9Yemtduo1RgFyk5xVbdEjoos8ta2KnDhcts8Oz0waB4DJipW4JnWaVpz6rpivG_jcxNhv04g2g8ssMchRY"
                  />
                </a>
              </div> */}
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
