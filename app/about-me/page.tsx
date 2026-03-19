// import React from 'react'

// export default function page() {
//   return (
//     <div>
        
        
//        <section>
//         i provide a image which background have About Me compleate this section please 
//        </section>
        
//         </div>
//   )
// }


import React from 'react'

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] w-full flex items-center justify-center bg-cover bg-center"
        style={{ 
          // Replace with your actual image path or URL
          backgroundImage: `url('/images/c10.avif')` 
        }}
      >
        {/* Optional: Dark overlay to make text pop if the image is too bright */}
        <div className="absolute inset-0 bg-black/20"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-7xl font-light tracking-[0.2em] uppercase">
          About Me
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
              Hi! I'm Melissa :)
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
    </main>
  )
}