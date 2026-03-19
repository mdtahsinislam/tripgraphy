

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\faq\page.tsx
import React from 'react'

export default function page() {
  return (
    // <div>page</div>
      <main>
    <section
  className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] 
  flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('/images/Contact-img-1.jpg')`
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Title */}
  <h1 className="relative z-10 text-white 
  text-2xl sm:text-3xl md:text-5xl lg:text-7xl 
  font-light tracking-[0.15em] sm:tracking-[0.2em] 
  uppercase text-center px-4">
    Get in Touch
  </h1>

</section>
      {/* Content Section (Bio) */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hi there! I'm a passionate creator based in [Your Location]. 
          I believe in capturing the beauty of everyday moments and 
          turning ideas into digital reality. With a background in [Your Field], 
          I focus on minimalist design and authentic storytelling.
        </p>
      </section>
      {/* <section>
        please do this image section for me which i provide you in screenshot
      </section> */}


      {/* New Biography Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Collage */}
        <div className="relative flex justify-center items-center">
          {/* Main Large Circular Image with Dashed Border */}
          <div className="relative p-4 border-2 border-dashed border-gray-300 rounded-full">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img 
                src="/images/c11.png" 
                alt="Main profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Left Small Circle */}
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white shadow-lg overflow-hidden">
              <img src="/images/c12.webp" alt="Pet" className="w-full h-full object-cover" />
            </div>

            {/* Right Side Small Circle */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white shadow-lg overflow-hidden">
              <img src="/images/bannerparoate.jpg" alt="Portrait" className="w-full h-full object-cover" />
            </div>

            {/* Handwritten Text Overlay */}
            {/* <div className="absolute -top-12 right-0 transform rotate-[-10deg]">
              <p className="font-serif italic text-sm md:text-base text-gray-700">
                This is Foxy... my traveling companion 😊🐶
              </p>
            </div> */}
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-gray-900 uppercase">
              Hi! I'm Melissa :
            </h2>
            <h3 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-800 uppercase">
              Let's Go Travel
            </h3>
          </div>

          <div className="text-gray-500 leading-relaxed space-y-4 max-w-lg">
            <p>
              In id cursus diam, vel faucibus metus. Mauris felis erat, rhoncus a sem id, 
              consequat consequat tellus. <span className="text-orange-400">Nam vitae euismod orci</span>, ac vehicula quam. 
              Vestibulum quis dui et turpis scelerisque lacinia et.
            </p>
            <p>
              Vestibulum quis dui et turpis scelerisque lacinia et. Et nunc aecenas semper 
              au auris felis erat, rhoncus a sem id, consequat consequat tellus.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4">
            <p className="text-4xl font-serif italic text-gray-800">
              Melissa Johanson
            </p>
          </div>
        </div>

      </section>

      {/* <section>
        i want screen shot section image here separate book image i add download and set 
      </section> */}

      {/* --- Travel Guides Section --- */}
<section className="bg-[#f9f7f4] py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">
    {/* Header */}
    <h2 className="text-3xl md:text-4xl font-light tracking-[0.3em] text-gray-800 uppercase mb-2">
      Our Travel Guides
    </h2>
    <p className="font-serif italic text-gray-500 mb-12">
      Read about your favorite travel destinations & our adventures
    </p>

    {/* Books Container */}
    <div className="flex flex-wrap justify-center items-end gap-4 md:gap-8">
      
      {/* Book 1 - Almost Fearless */}
      <div className="relative group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book1.jpg" alt="Almost Fearless" className="shadow-xl" />
        {/* Sale Tag */}
        <span className="absolute -top-6 -right-4 font-serif italic text-2xl text-gray-800 transform rotate-[-15-deg] pointer-events-none">
          Sale
        </span>
      </div>

      {/* Book 2 - 501 Places */}
      <div className="relative group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book2.jpg" alt="501 Places" className="shadow-xl" />
        {/* New Tag */}
        <span className="absolute -top-6 -right-4 font-serif italic text-2xl text-gray-800 transform rotate-[10deg] pointer-events-none">
          New
        </span>
      </div>

      {/* Book 3 - New York */}
      <div className="group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book3.jpg" alt="New York" className="shadow-xl" />
      </div>

      {/* Book 4 - Life Cruiser */}
      <div className="group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book4.jpg" alt="Life Cruiser" className="shadow-xl" />
      </div>

      {/* Book 5 - Wandering Educators */}
      <div className="group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book5.jpg" alt="Wandering Educators" className="shadow-xl" />
      </div>

      {/* Book 6 - France */}
      <div className="group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book6.jpg" alt="France in Six Days" className="shadow-xl" />
      </div>

 <div className="group w-40 md:w-48 transition-transform duration-300 hover:-translate-y-2">
        <img src="/images/book7.jpg" alt="France in Six Days" className="shadow-xl" />
      </div>
    </div>
  </div>
</section>

{/* <section>
    give me the screen shot section here
</section> */}

{/* --- FAQ and Location Section --- */}
<section className="max-w-7xl mx-auto py-20 px-6">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
    
    {/* Left Side: FAQ (8 columns wide on large screens) */}
    <div className="lg:col-span-8 space-y-12">
      <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 uppercase mb-8">
        Most Asked Questions
      </h2>

      {/* Question 1 */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase flex items-center gap-2">
          How do you manage to travel the world? 🌏
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, 
          nisi elit con sagittis <span className="underline decoration-gray-400 underline-offset-4 cursor-pointer">Duis sed odio sit amet nibh vulputate cursus</span> a sit amet mauris. 
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
        </p>
      </div>

      {/* Question 2 */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase flex items-center gap-2">
          How did you build and market your blog? 🧐
        </h3>
        <div className="text-gray-500 leading-relaxed text-sm space-y-6">
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. 
            Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
          </p>
          <p>
            Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. 
            <span className="text-red-400">Etiam pharetra, erat sed fermentum feugiat</span>, 
            velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
          </p>
        </div>
      </div>
    </div>

    {/* Right Side: Sidebar (4 columns wide on large screens) */}
    <div className="lg:col-span-4 flex flex-col items-center space-y-12">
      
      {/* Circular Profile Image */}
      <div className="w-64 h-64 rounded-full overflow-hidden border-[12px] border-gray-50 shadow-sm">
        <img 
          src="/images/pexels-pixabay-417173.jpg" 
          alt="Profile with camera" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Map Section */}
      <div className="w-full text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gray-300"></div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-800 uppercase">
                Where we are now
            </h4>
            <div className="h-[1px] w-12 bg-gray-300"></div>
        </div>
        
        <div className="relative inline-block">
          <img 
            src="/images/earth.jpg" 
            alt="World Map" 
            className="opacity-40 w-full max-w-[300px] mx-auto"
          />
          {/* Map Pin (Positioned over Brazil as per screenshot) */}
          <div className="absolute top-[65%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
             <div className="text-red-500 text-2xl">📍</div>
          </div>
        </div>
        
        <p className="text-xs tracking-widest text-gray-400 italic">
          Rio de Janeiro, Brazil
        </p>
      </div>

    </div>
  </div>
</section>

{/* --- FAQ Part 2 and Book Promo Section --- */}
<section className="max-w-7xl mx-auto py-20 px-6">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
    
    {/* Left Side: More FAQs (8 columns) */}
    <div className="lg:col-span-8 space-y-12">
      
      {/* Question 3 */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase flex items-center gap-2">
          What restaurants do you recommend? 🍕
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, 
          nisi elit con sagittis <span className="underline decoration-gray-400 underline-offset-4 cursor-pointer">Duis sed odio sit amet nibh vulputate cursus</span> a sit amet mauris. 
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
        </p>
      </div>

      {/* Question 4 */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase flex items-center gap-2">
          What gear & software do you use? 📷
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, 
          nisi elit con sagittis <span className="underline decoration-gray-400 underline-offset-4 cursor-pointer">Duis sed odio sit amet nibh vulputate cursus</span> a sit amet mauris. 
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
        </p>
      </div>

      {/* Question 5 */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase flex items-center gap-2">
          How to travel with your dog? 🐶
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, 
          nisi elit con sagittis <span className="underline decoration-gray-400 underline-offset-4 cursor-pointer">Duis sed odio sit amet nibh vulputate cursus</span> a sit amet mauris. 
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
        </p>
      </div>
    </div>

    {/* Right Side: Sidebar Promo (4 columns) */}
    <div className="lg:col-span-4 bg-[#f8f8f8] p-10 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
      
      {/* Subtle background sketch/watermark (Optional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="/images/bridge-sketch.png" alt="" className="w-full h-full object-contain" />
      </div>

      <h2 className="text-4xl font-serif italic text-gray-800 relative z-10">
        Our Books
      </h2>

      <p className="text-gray-500 text-sm leading-relaxed relative z-10">
        We are That Backpacker, Melissa and Johnatan (that's us!) traveling the world as a couple.
      </p>

      <button className="bg-black text-white px-10 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-gray-800 transition-colors relative z-10">
        Book Now
      </button>

      {/* Overlapping Book Images */}
      <div className="relative mt-8 w-full flex justify-center items-center h-64">
        <img 
          src="/images/book1.jpg" 
          alt="Almost Fearless" 
          className="w-36 shadow-2xl absolute left-4 z-20 transform -rotate-6"
        />
        <img 
          src="/images/book2.jpg" 
          alt="501 Places" 
          className="w-36 shadow-2xl absolute right-4 z-10 transform rotate-6"
        />
      </div>

    </div>
  </div>
</section>
    </main>
  )
}
