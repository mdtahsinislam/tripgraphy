// import React from 'react'

// export default function Footstap() {
//   return (
//     <div>Footstap</div>
//   )
// }


import React from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function Footsteps() {
  const journey = [
    {
      countryCode: 'ES',     // Spain
      countryName: 'SPAIN',
      month: 'AUGUST',
      year: '2018',
    },
    {
      countryCode: 'AU',     // Australia
      countryName: 'AUSTRALIA',
      month: 'JUNE',
      year: '2018',
    },
    {
      countryCode: 'IN',     // India
      countryName: 'INDIA',
      month: 'JUNE',
      year: '2018',
    },
    {
      countryCode: 'PE',     // Peru
      countryName: 'PERU',
      month: 'JANUARY',
      year: '2019',          // guessed year — adjust as needed
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
          NEVER ENDING FOOTSTEPS
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, pri in persius oporteat, usu ex erat aperiam
          nusquam. His liber verear ornatus eu. Nobis regione patrioque pri te.
        </p>
      </div>

      {/* Main Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Wavy Path – using SVG for smooth curve */}
        <svg
          className="absolute top-1/2 left-0 right-0 h-32 -translate-y-1/2 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
        >
          <path
            d="M 0,70 Q 150,20 300,70 T 600,70 T 900,70 T 1200,70"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="6"
            strokeDasharray="12 8"
            strokeLinecap="round"
          />
        </svg>

        {/* Points & Content */}
        <div className="relative grid grid-cols-4 gap-4 md:gap-8 pt-20">
          {journey.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Flag – larger size */}
              <div className="text-6xl md:text-8xl mb-3 shadow-lg rounded-full">
                <ReactCountryFlag
                  countryCode={item.countryCode}
                  svg
                  style={{
                    width: '1.2em',
                    height: '1.2em',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Pin / Location marker */}
              <div className="text-4xl mb-2">📍</div>

              {/* Country name */}
              <h3 className="font-bold text-lg md:text-xl text-gray-800">
                {item.countryName}
              </h3>

              {/* Date */}
              <p className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
                {item.month} {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional background image hint – mountains */}
      <div className="mt-16 text-center text-gray-500 italic">
        Discover
      </div>
    </div>
  );
}