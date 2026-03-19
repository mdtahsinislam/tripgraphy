// import React from 'react'

// export default function Carosol() {
//   return (
//     <div>Carosol</div>
//   )
// }

// components/Carousel/Carousel.tsx


//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\Carosol\Carosol.tsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const carouselData = [
  { id: 1, location: 'Paris', title: 'EATING FOOD TOUR!', category: 'ADVENTURE', img: '/images/c1.jpg' },
  { id: 2, location: 'Venice', title: 'CITY TOUR WITH RIVER CRUISE', category: 'ADVENTURE', img: '/images/c2.jpg' },
  { id: 3, location: 'Dublin', title: 'THE 15 BEST THINGS TO DO', category: 'ADVENTURE', img: '/images/c3.jpg' },
  { id: 4, location: 'Brazil', title: "WORLD'S BEST DRINKING SPOTS", category: 'ADVENTURE', img: '/images/c4.jpg' },
  { id: 5, location: 'Italy', title: 'EXPLORE THE FINEST BEACHES', category: 'ADVENTURE', img: '/images/c5.jpg' },
];

export default function Carousel() {
  return (
    <div className="carousel-wrapper max-w-7xl mx-auto mt-10">
      {/* Brand Header */}
      <div className="brand-header items-center text-center">
        <h4 className="badge-logo">Backpack Traveler</h4>
        <p className="badge-tagline">NEVER ENDING FOOTSTEPS</p>
      </div>

      <div className="carousel-relative-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card-wrapper gap-6">
                <div className="image-container ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="carousel-img"
                  />
                </div>

                <div className="text-content">
                  <h3 className="location-text">{item.location}</h3>
                  <h2 className="title-text">{item.title}</h2>
                  <span className="category-text">{item.category}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows positioned on top of the Swiper  */}
        <div className="custom-swiper-button-prev">←</div>
        {/* <div className="custom-swiper-button-next">→</div> */}
      </div>

      <style jsx>{`
        .carousel-wrapper {
          padding: 60px 0;
          background: #fff;S
          text-align: center;
        }
        
        .brand-header {
          margin-bottom: 40px;
        }

        .carousel-relative-container {
          position: relative;
          width: 100%;
        }

        .card-wrapper {
          border-right: 1px solid #eee;
          background: #fff;
        }

        .image-container {
          position: relative;
          height: 450px;
          overflow: hidden;
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .card-wrapper:hover .carousel-img {
          transform: scale(1.1);
        }

        .badge-logo {
          font-family: 'Brush Script MT', cursive;
          font-size: 2.5rem;
          margin: 0;
          color: #000;
        }

        .badge-tagline {
          font-size: 0.7rem;
          letter-spacing: 3px;
          color: #888;
          text-transform: uppercase;
        }

        .text-content {
          padding: 30px 15px;
        }

        .location-text {
          font-family: 'Brush Script MT', cursive;
          font-size: 2rem;
          color: #333;
          margin-bottom: 5px;
        }

        .title-text {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 10px;
          color: #222;
        }

        .category-text {
          font-size: 0.65rem;
          color: #bbb;
          letter-spacing: 2px;
          font-weight: bold;
        }

        /* Navigation Arrows */
        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          position: absolute;
          top: 35%; /* Centered relative to the images */
          width: 45px;
          height: 55px;
          background: white;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100; /* Ensure arrows stay above images */
          font-size: 20px;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
          transition: 0.3s ease;
        }

        .custom-swiper-button-prev { left: 0; border-radius: 0 2px 2px 0; }
        .custom-swiper-button-next { right: 0; border-radius: 2px 0 0 2px; }
        
        .custom-swiper-button-prev:hover,
        .custom-swiper-button-next:hover {
          background: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

//please worked right left arrow both