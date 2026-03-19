// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }

// ← important if this is a Next.js App Router page
// app/list/page.tsx  (or wherever your Gallery component lives)

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\list\page.tsx

'use client'; 

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);




const images = [
  { src: '/images/travel-visited-1.jpg' },
  { src: '/images/travel-visited-2.jpg' },
  { src: '/images/travel-visited-3.jpg' },
  { src: '/images/travel-visited-4.jpg' },
  { src: '/images/travel-visited-5.jpg' },
  { src: '/images/travel-visited-6.jpg' },
  { src: '/images/travel-visited-7.jpg' },
  { src: '/images/travel-visited-8.jpg' },
  { src: '/images/travel-visited-9.jpg' },
  { src: '/images/travel-visited-10.jpg' },
  { src: '/images/travel-visited-11.jpg' },
  { src: '/images/travel-visited-12.webp' },
  { src: '/images/travel-visited-13.jpg' },
  { src: '/images/travel-visited-14.jpg' },
  { src: '/images/travel-visited-15.jpg' },
  { src: '/images/travel-visited-16.jpg' },
  { src: '/images/travel-visited-17.jpg' },
  { src: '/images/travel-visited-18.jpg' },
];
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div
          className="h-20 sm:h-20 md:h-20 lg:h-48 flex items-center justify-center bg-cover bg-center mt-4 md:mt-6 rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: "url('https://i.imghippo.com/files/lnsg5986qY.jpg')" }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Gallery visited Natural Location Image
          </h1>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={currentImageIndex}
          plugins={[Thumbnails]}
          // ── Make thumbnails more visible ────────────────
          thumbnails={{
            position: 'bottom',        // "top" | "bottom" | "start" | "end"
            width: 140,                // bigger thumbs
            height: 100,
            gap: 12,
            padding: 8,
            border: 2,
            borderRadius: 8,
            imageFit: 'cover',         // or "contain"
            vignette: false,           // remove dark edges if you don't like them
            // showToggle: true,       // ← optional: adds toggle button in toolbar
          }}
          // Optional: useful when testing on mobile
          // carousel={{ finite: true, imageFit: 'contain' }}
        />

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={`Travel & food photo ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy" // good for many images
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;