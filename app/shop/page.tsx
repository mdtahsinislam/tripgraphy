

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\shop\page.tsx
// // const Shop=()=>{
// //     return(
// //         // <div>Shop</div>
// //         <div>
// //             <section>
// //                <div className="brand-header items-center text-center">
// //         {/* <h4 className="badge-logo">Backpack Traveler</h4> */}
// //         <h4 
// //   style={{ 
// //     fontFamily: "Brush Script MT, cursive",
// //     fontSize: "2.5rem",
// //     margin: 0,
// //     color: "#000"
// //   }}
// // >
// //   Backpack Traveler Shop Travel Gide Book & Other Instrument.
// // </h4>
// //         <p className="badge-tagline">NEVER ENDING FOOTSTEPS</p>
// //       </div> 
// //             </section>

// //             <section>

// //                 Generate  a glouries secton for me 
// //             </section>
// //         </div>
// //     )
// // }
// // export default Shop



// // app/shop/page.tsx

// // app/shop/page.tsx

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\shop\page.tsx

// const featuredItems = [
//   {
//     id: 1,
//     title: "Explorer Backpack 40L",
//     price: "$89",
//     image: "/images/explore.jpg",
//     alt: "40L adventure backpack in forest setting",
//   },
//   {
//     id: 2,
//     title: "Waterproof Travel Journal",
//     price: "$29",
//     image: "/images/water.jpeg",
//     alt: "Premium waterproof travel notebook",
//   },
//   {
//     id: 3,
//     title: "Solar Power Bank 20000mAh",
//     price: "$49",
//     image: "/images/powerBank.webp",
//     alt: "Rugged solar charger on hiking trail",
//   },
//   {
//     id: 4,
//     title: "Compact Hiking Compass",
//     price: "$19",
//     image: "/images/compas1.jpg",
//     alt: "Classic brass hiking compass",
//   },
//   {
//     id: 5,
//     title: "All most fearless",
//     price: "$19",
//     image: "/images/book1.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 6,
//     title: "Distination",
//     price: "$19",
//     image: "/images/book2.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 7,
//     title: "Piramid",
//     price: "$19",
//     image: "/images/book3.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 8,
//     title: "Distination",
//     price: "$19",
//     image: "/images/book4.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 9,
//     title: "The Unusual knowledge",
//     price: "$19",
//     image: "/images/book5.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 10,
//     title: "Distination",
//     price: "$19",
//     image: "/images/book6.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 11,
//     title: "Distination",
//     price: "$19",
//     image: "/images/book7.jpg",
//     alt: "Travel guide book",
//   },
//   {
//     id: 12,
//     title: "Distination",
//     price: "$19",
//     image: "/images/sunGlass.jpg",
//     alt: "Sun glass for travel",
//   },
//   {
//     id: 13,
//     title: "Camera",
//     price: "$19",
//     image: "/images/tr2.png",
//     alt: "Travel camera",
//   },
//   {
//     id: 14,
//     title: "Airpot",
//     price: "$19",
//     image: "/images/airpot.jpg",
//     alt: "Wireless airpods",
//   },
// ];

// export default function Shop() {
//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       {/* Brand Header */}
//       <section>
//         <div className="brand-header items-center text-center py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
//           <h4
//             style={{
//               fontFamily: "'Brush Script MT', cursive",
//               fontSize: "2.5rem",
//               margin: 0,
//               color: "#000",
//             }}
//             className="mb-2"
//           >
//             Backpack Traveler Shop
//             <br />
//             Travel Guide Book & Other Instruments
//           </h4>

//           <p className="text-lg md:text-xl text-gray-700 tracking-wide font-light">
//             NEVER ENDING FOOTSTEPS
//           </p>
//         </div>
//       </section>

//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        
//         <div className="absolute inset-0">
//           <div
//             className="w-full h-full bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url('/images/shop-main.avif')`,
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
//           </div>
//         </div>

//         <div className="relative z-10 text-center px-5 sm:px-8 md:px-12 max-w-5xl mx-auto text-white">

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
//             Gear Up For Your Next Adventure
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto drop-shadow-lg">
//             Premium travel journals, durable backpacks, compasses, portable solar chargers
//             <br className="hidden sm:block" />
//             — everything a true explorer needs.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">

//             <a
//               href="#featured-products"
//               className="px-8 sm:px-10 py-4 sm:py-5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
//             >
//               Explore Collection
//             </a>

//             <a
//               href="#guides"
//               className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/80 hover:bg-white/10 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300"
//             >
//               Best Travel Guides
//             </a>

//           </div>

//           <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base opacity-90">
//             <div>🌍 Free Shipping over $50</div>
//             <div>🛡️ 2-Year Gear Warranty</div>
//             <div>⭐ 4.8+ From 1.2k Travelers</div>
//           </div>

//         </div>
//       </section>

//       {/* Featured Products */}
//       <section id="featured-products" className="py-16 md:py-24 bg-white">

//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">
//             Featured Adventure Essentials
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

//             {featuredItems.map((item) => (

//               <div
//                 key={item.id}
//                 className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//               >

//                 <div className="aspect-[4/3] relative bg-gray-200 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="p-5 sm:p-6">

//                   <h3 className="font-semibold text-lg mb-1.5 text-gray-800">
//                     {item.title}
//                   </h3>

//                   <p className="text-amber-600 font-bold text-xl mb-4">
//                     {item.price}
//                   </p>

//                   <button
//                     className="
//                     w-full py-3 px-6
//                     bg-gradient-to-r from-amber-600 to-amber-500
//                     hover:from-amber-700 hover:to-amber-600
//                     text-white font-semibold
//                     rounded-full shadow-lg hover:shadow-xl
//                     transition-all duration-300
//                     flex items-center justify-center gap-2
//                     "
//                   >
//                     Purchase
//                   </button>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }

 ///C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\shop\page.tsx

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const featuredItems = [
  { id: 1, title: "Explorer Backpack 40L", price: "$89", image: "/images/explore.jpg", alt: "40L adventure backpack in forest setting" },
  { id: 2, title: "Waterproof Travel Journal", price: "$29", image: "/images/water.jpeg", alt: "Premium waterproof travel notebook" },
  { id: 3, title: "Solar Power Bank 20000mAh", price: "$49", image: "/images/powerBank.webp", alt: "Rugged solar charger on hiking trail" },
  { id: 4, title: "Compact Hiking Compass", price: "$19", image: "/images/compas1.jpg", alt: "Classic brass hiking compass" },
  { id: 5, title: "All most fearless", price: "$19", image: "/images/book1.jpg", alt: "Travel guide book" },
  { id: 6, title: "Distination", price: "$19", image: "/images/book2.jpg", alt: "Travel guide book" },
  { id: 7, title: "Piramid", price: "$19", image: "/images/book3.jpg", alt: "Travel guide book" },
  { id: 8, title: "Distination", price: "$19", image: "/images/book4.jpg", alt: "Travel guide book" },
  { id: 9, title: "The Unusual knowledge", price: "$19", image: "/images/book5.jpg", alt: "Travel guide book" },
  { id: 10, title: "Distination", price: "$19", image: "/images/book6.jpg", alt: "Travel guide book" },
  { id: 11, title: "Distination", price: "$19", image: "/images/book7.jpg", alt: "Travel guide book" },
  { id: 12, title: "Distination", price: "$19", image: "/images/sunGlass.jpg", alt: "Sun glass for travel" },
  { id: 13, title: "Camera", price: "$19", image: "/images/tr2.png", alt: "Travel camera" },
  { id: 14, title: "Airpot", price: "$19", image: "/images/airpot.jpg", alt: "Wireless airpods" },
  { id: 15, title: "Travel Neck Pillow", price: "$25", image: "/images/neckpillow.jpg", alt: "Comfortable memory foam travel neck pillow" },
{ id: 16, title: "Portable Camping Tent", price: "$120", image: "/images/tent.jpg", alt: "Lightweight camping tent for travelers" },
{ id: 17, title: "Action Camera 4K", price: "$199", image: "/images/actioncam.jpg", alt: "Waterproof 4K action camera for adventure" },
{ id: 18, title: "Travel Organizer Bag", price: "$35", image: "/images/organizer.jpg", alt: "Travel organizer bag for cables and gadgets" },
{ id: 19, title: "Foldable Travel Backpack", price: "$39", image: "/images/foldbag.jpg", alt: "Foldable lightweight travel backpack" },
{ id: 20, title: "Camping Cooking Set", price: "$55", image: "/images/cooking.jpg", alt: "Portable camping cooking kit" },
{ id: 21, title: "Portable Water Filter", price: "$45", image: "/images/filter.jpg", alt: "Portable water filter for hiking trips" },
{ id: 22, title: "Adventure Travel Map", price: "$22", image: "/images/map.jpg", alt: "Scratch off world travel map" },
{ id: 23, title: "Travel First Aid Kit", price: "$30", image: "/images/firstaid.jpg", alt: "Compact travel first aid medical kit" },
{ id: 24, title: "Bluetooth Travel Speaker", price: "$60", image: "/images/speaker.jpg", alt: "Portable bluetooth speaker for travel" },
{ id: 25, title: "Lightweight Sleeping Bag", price: "$85", image: "/images/sleepbag.jpg", alt: "Compact sleeping bag for camping trips" },
{ id: 26, title: "Drone Mini Camera", price: "$350", image: "/images/drone.jpg", alt: "Mini drone camera for travel photography" },
{ id: 27, title: "Travel Laptop Sleeve", price: "$28", image: "/images/laptopbag.jpg", alt: "Protective laptop sleeve for travel" },
{ id: 28, title: "Foldable Water Bottle", price: "$18", image: "/images/waterbottle.jpg", alt: "Foldable silicone water bottle for hiking" },
{ id: 29, title: "Travel Tripod Stand", price: "$48", image: "/images/tripod.jpg", alt: "Portable tripod for cameras and phones" },
{ id: 30, title: "Adventure Hiking Shoes", price: "$140", image: "/images/hikingshoes.jpg", alt: "Durable hiking shoes for mountain travel" },
];

export default function Shop() {
  const { data: session } = useSession();
  const router = useRouter();

  // Checkout function
  const handleCheckout = async (item: any) => {
    if (!session) {
      router.push("/login"); // redirect if not logged in
      return;
    }

    const price = parseInt(item.price.replace("$", "")); // convert $ to number

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: item.title,
        price: price,
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirect to Stripe Checkout
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Brand Header */}
      <section>
        <div className="brand-header items-center text-center py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
          <h4 style={{ fontFamily: "'Brush Script MT', cursive", fontSize: "2.5rem", margin: 0, color: "#000" }} className="mb-2">
            Backpack Traveler Shop
            <br />
            Travel Guide Book & Other Instruments
          </h4>
          <p className="text-lg md:text-xl text-gray-700 tracking-wide font-light">NEVER ENDING FOOTSTEPS</p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/shop-main.avif')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>
        </div>
        <div className="relative z-10 text-center px-5 sm:px-8 md:px-12 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
            Gear Up For Your Next Adventure
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Premium travel journals, durable backpacks, compasses, portable solar chargers
            <br className="hidden sm:block" />
            — everything a true explorer needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#featured-products"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Explore Collection
            </a>
            <a
              href="#guides"
              className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/80 hover:bg-white/10 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300"
            >
              Best Travel Guides
            </a>
          </div>
          <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base opacity-90">
            <div>🌍 Free Shipping over $50</div>
            <div>🛡️ 2-Year Gear Warranty</div>
            <div>⭐ 4.8+ From 1.2k Travelers</div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">Featured Adventure Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] relative bg-gray-200 overflow-hidden">
                  <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-semibold text-lg mb-1.5 text-gray-800">{item.title}</h3>
                  <p className="text-amber-600 font-bold text-xl mb-4">{item.price}</p>
                  <button
                    onClick={() => handleCheckout(item)}
                    className="
                      w-full py-3 px-6
                      bg-gradient-to-r from-amber-600 to-amber-500
                      hover:from-amber-700 hover:to-amber-600
                      text-white font-semibold
                      rounded-full shadow-lg hover:shadow-xl
                      transition-all duration-300
                      flex items-center justify-center gap-2
                    "
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}