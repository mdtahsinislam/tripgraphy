// import React from 'react'

// export default function Topcatagory() {
//   return (
//     <div>Topcatagory</div>
//   )
// }



import React from 'react';

// You can host these images yourself or use the URLs directly (for demo purposes).
// In production, download and serve from your /public or CDN.
const icons = {
  beaches: 'https://c8.alamy.com/comp/2R19M12/hand-drawn-surf-paradise-sketch-palm-trees-surfboard-and-tropical-beach-vector-background-illustration-2R19M12.jpg',
  dogFriendly: 'https://thumbs.dreamstime.com/b/funny-cute-dog-doodle-line-art-set-dog-doodle-line-art-set-105608649.jpg',
  restaurants: 'https://thumbs.dreamstime.com/b/hand-drawn-illustration-delicious-slice-cake-cherry-top-served-plate-cake-slice-cherry-dessert-374530636.jpg',
  overnight: 'https://thumbs.dreamstime.com/z/hotel-sign-buib-neon-city-banner-set-vertically-horizontally-text-vector-illustration-91681427.jpg',
  camping: 'https://www.shutterstock.com/shutterstock/photos/2636800131/display_1500/stock-vector-camping-tent-icon-doodle-hand-drawn-outline-line-drawing-clipart-symbol-vector-illustration-2636800131.jpg',
  lowBudget: 'https://cdn.vectorstock.com/i/500p/03/81/money-doodle-wallet-icon-hand-drawn-vector-58890381.jpg',
};

const categories = [
  { name: 'BEACHES', count: 4, icon: icons.beaches },
  { name: 'DOG-FRIENDLY', count: 2, icon: icons.dogFriendly },
  { name: 'RESTAURANTS', count: 3, icon: icons.restaurants },
  { name: 'OVERNIGHT', count: 3, icon: icons.overnight },
  { name: 'CAMPING', count: 3, icon: icons.camping },
  { name: 'LOW BUDGET', count: 2, icon: icons.lowBudget },
];

export default function TopCategories() {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white text-center">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
        TOP CATEGORIES
      </h2>

      <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        We are That Backpacker, Melissa and Johnatan (that’s us!)
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
          >
            {/* Icon container - rounded, slight shadow for doodle feel */}
            <div className="w-28 h-28 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow-md bg-white flex items-center justify-center">
              <img
                src={cat.icon}
                alt={`${cat.name} icon`}
                className="w-5/6 h-5/6 object-contain"
              />
            </div>

            {/* Category name */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-wide mb-1">
              {cat.name}
            </h3>

            {/* Destination count */}
            <p className="text-sm md:text-base text-gray-500">
              {cat.count} DESTINATIONS
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}