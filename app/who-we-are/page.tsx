import React from 'react';
//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\who-we-are\page.tsx
export default function HeroSection() {
  return (
    <div>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Brand Header */}
          <div className="brand-header text-center mb-10 md:mb-16">
            <h4
              className="text-3xl md:text-5xl tracking-wider text-black"
              style={{ fontFamily: "'Brush Script MT', cursive", margin: 0 }}
            >
              Backpack Traveler
            </h4>
            <p className="badge-tagline mt-3 text-lg md:text-2xl italic text-gray-600 tracking-wide">
              NEVER ENDING FOOTSTEPS
            </p>
          </div>

          {/* Previous Hero Image + Three Columns (kept as-is) C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\who-we-are\page.tsx about-me*/}
          <div className="mb-12 md:mb-16">
            <img
              src="/images/c10.avif"
              alt="Girl sitting with cute Shiba Inu dog on gravel"
              className="w-full h-auto max-h-[700px] object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-center md:text-left">
            {/* WHO'S HANNAH? */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-800 mb-6">
                WHO'S HANNAH?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, 
                nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate 
                cursus a sit amet mauris.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
            </div>

            {/* WHERE TO TRAVEL? */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-800 mb-6">
                WHERE TO TRAVEL?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, 
                nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate 
                cursus a sit amet mauris.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu.
              </p>
            </div>

            {/* POPULAR TOURS */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-800 mb-6">
                POPULAR TOURS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat 
                consequat auctor eu in elit.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Image Section – Around the World Style */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    {/* Title */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-gray-900 uppercase">
        AROUND THE WORLD
      </h2>
      <p className="mt-4 text-xl md:text-2xl italic text-gray-700">
        IN 10 DAYS
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      
      {/* Left: Text + Large Image (spans more columns) */}
      <div className="lg:col-span-3 space-y-8">
        {/* Large Hero Image with overlay text feel */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/images/c2.jpg"           // ← Your large scenic/beach/mountain image
            alt="Tropical beach with mountains and ocean"
            className="w-full h-auto object-cover aspect-[4/3] md:aspect-[16/9] lg:aspect-auto"
          />
          {/* Optional subtle overlay for text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Descriptive Text */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget diam non velit 
            aliquam fringilla. Praesent et mi turpis. Proin in felis nec dui efficitur aliquam 
            vitae sed urna. Aliquam scelerisque cursus est eu porta. Sed euismod lacus nec 
            ultricies tincidunt.
          </p>
          <p className="mt-6">
            Vestibulum eget diam non velit aliquam fringilla. Praesent et mi turpis. Proin in 
            felis nec dui efficitur aliquam vitae sed urna.
          </p>
        </div>

        {/* Small social icons at bottom left (like in screenshot) */}
        <div className="flex space-x-6 text-2xl text-gray-600 mt-6">
          <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-red-600 transition-colors"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" className="hover:text-sky-500 transition-colors"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      {/* Right: Two Stacked Smaller Images */}
      <div className="lg:col-span-2 space-y-6 lg:space-y-8">
        {/* Top Right Image – Beach scene */}
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/c3.jpg"           // ← Your woman on path / jungle road image
            alt="Woman walking on tropical path surrounded by palm trees"
            className="w-full h-auto object-cover aspect-[4/5] md:aspect-square"
          />
          {/* Optional handwritten-style quote overlay (like in your design) */}
          <div className="absolute bottom-6 left-6 right-6 text-white text-lg italic font-handwriting drop-shadow-lg">
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt...
          </div>
        </div>

        {/* Bottom Right Image – Another scenic beach */}
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/c2.jpg"           // Or use a third image if you have one; duplicated here for demo
            alt="Tropical beach paradise with palm trees and clear water"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}