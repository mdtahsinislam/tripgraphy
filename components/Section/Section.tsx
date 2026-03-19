// components/Section/Section.tsx


"use client";
import React from 'react'

const essentials = [
  { id: 1, img: '/images/c1.jpg', alt: 'Travel Bag' },
  { id: 2, img: '/images/travellllll1.webp', alt: 'Sandals' },
  { id: 3, img: '/images/tr2.png', alt: 'Instax Camera' },
  { id: 4, img: '/images/lagage.avif', alt: 'Pink Suitcase' },
  { id: 5, img: '/images/c5.jpg', alt: 'Sunglasses' },
];

export default function Section() {
  return (
    <section className="essentials-section">
      <div className="container">
        {/* Header Text */}
        <div className="header-content">
          <h2 className="title">MY TRAVEL ESSENTIALS</h2>
          <p className="subtitle">We are the Backpack Traveler, your favorite travel assistants!</p>
        </div>

        {/* Items Grid */}
        <div className="items-grid">
          {essentials.map((item) => (
            <div key={item.id} className="essential-item">
              <img src={item.img} alt={item.alt} className="item-image" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .essentials-section {
          padding: 80px 20px;
          background-color: #f9f6f3; /* Matching the light cream background */
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-content {
          margin-bottom: 60px;
        }

        .title {
          font-size: 1.8rem;
          letter-spacing: 5px;
          color: #1a1a1a;
          font-weight: 400;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .subtitle {
          font-family: 'Georgia', serif;
          font-style: italic;
          color: #888;
          font-size: 1.1rem;
        }

        .items-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .essential-item {
          flex: 1;
          min-width: 150px;
          display: flex;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .essential-item:hover {
          transform: translateY(-10px);
        }

        .item-image {
          max-width: 100%;
          height: auto;
          max-height: 180px; /* Keeps all icons consistent in size */
          object-fit: contain;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .items-grid {
            justify-content: center;
          }
          .essential-item {
            flex: 0 0 45%;
            margin-bottom: 30px;
          }
          .title {
            font-size: 1.4rem;
            letter-spacing: 3px;
          }
        }
      `}</style>
    </section>
  )
}