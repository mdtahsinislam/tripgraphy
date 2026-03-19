

// // // // // //C:\Web-Development\MyNextjs Journey\Copy Tipo graphy\tripgraphy\components\navbar.tsx
// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import Link from "next/link";
// // // // // import Image from "next/image";

// // // // // const Navbar = () => {
// // // // //   const [open, setOpen] = useState(false);

// // // // //   return (
// // // // //     <nav className="backdrop-blur bg-white/30 border-b border-white/20 shadow-lg sticky top-0 z-50">
// // // // //       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

// // // // //         {/* Left - Logo */}
// // // // //    <div className="flex mb-3">
// // // // //          <Image
// // // // //   src="/images/tr-removebg-preview.png"
// // // // //   alt="TripGraphy Logo"
// // // // //   width={100}
// // // // //   height={100}
// // // // //   className="rounded-lg"
// // // // // />
        

// // // // //         <h1 className="text-3xl font-bold text-cyan-600 tracking-wide -ml-5 mt-10">
// // // // //           TripGraphy
// // // // //         </h1>

// // // // //    </div>
// // // // //         {/* Center - Desktop Menu */}
// // // // //         <div className="hidden md:flex items-center gap-8 text-lg font-medium">
// // // // //            <Link href="/" className="hover:text-cyan-600 transition">
// // // // //             Home
// // // // //           </Link>
// // // // //           <Link href="/page"    className="hover:text-cyan-600 transition">
// // // // //             Pages
// // // // //           </Link>
// // // // //           <Link href="/blogs" className="hover:text-cyan-600 transition">
// // // // //             Blogs
// // // // //           </Link>
           

// // // // //             <Link href="/travels" className="hover:text-cyan-600 transition">
// // // // //             Travels
// // // // //           </Link>


// // // // //             <Link href="/shop" className="hover:text-cyan-600 transition">
// // // // //             Shops
// // // // //           </Link>



         
// // // // //         </div>

// // // // //         {/* Right - Login */}
// // // // //         <div className="hidden md:block">
// // // // //           <Link
// // // // //             href="/login"
// // // // //             className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
// // // // //           >
// // // // //             Login
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Mobile Menu Button */}
// // // // //         <button
// // // // //           className="md:hidden btn btn-ghost"
// // // // //           onClick={() => setOpen(!open)}
// // // // //         >
// // // // //           <svg
// // // // //             xmlns="http://www.w3.org/2000/svg"
// // // // //             fill="none"
// // // // //             viewBox="0 0 24 24"
// // // // //             strokeWidth={1.5}
// // // // //             stroke="currentColor"
// // // // //             className="w-7 h-7"
// // // // //           >
// // // // //             <path
// // // // //               strokeLinecap="round"
// // // // //               strokeLinejoin="round"
// // // // //               d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
// // // // //             />
// // // // //           </svg>
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Mobile Menu Items */}
// // // // //       {open && (
// // // // //         <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
// // // // //           <Link href="/about" className="hover:text-blue-600 transition">
// // // // //             About
// // // // //           </Link>
// // // // //           <Link href="/blogs" className="hover:text-blue-600 transition">
// // // // //             Blogs
// // // // //           </Link>
// // // // //           <Link href="/blogs/id" className="hover:text-blue-600 transition">
// // // // //             Blog ID
// // // // //           </Link>
// // // // //           <Link
// // // // //             href="/login"
// // // // //             className="mt-2 px-5 py-2 bg-blue-600 text-white text-center rounded-lg shadow hover:bg-blue-700 transition"
// // // // //           >
// // // // //             Login
// // // // //           </Link>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx

// // // // "use client";
// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import Image from "next/image";

// // // // const Navbar = () => {
// // // //   const [open, setOpen] = useState(false);
// // // //   const [pagesOpen, setPagesOpen] = useState(false);

// // // //   // Submenu items based on your image
// // // //   const pageLinks = [
// // // //     { name: "Who We Are", href: "/who-we-are" },
// // // //     { name: "About Me", href: "/about-me" },
// // // //     { name: "Destination Map", href: "/destination-map" },
// // // //     { name: "Get In Touch", href: "/contact" },
// // // //     { name: "FAQ Page", href: "/faq" },
// // // //   ];

// // // //   const travelsLinks = [
// // // //     { name: "List", href: "/list" },
// // // //     { name: "Map", href: "/map" },
    
// // // //   ];

// // // // const shopLinks = [
// // // //     { name: "Shop List", href: "/" },
// // // //     { name: "Your own Products", href: "/" },
    
// // // //   ];

// // // //   return (
// // // //     <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-50">
// // // //       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
// // // //         {/* Left - Logo */}
// // // //         <div className="flex items-center gap-2">
// // // //           <Image
// // // //             src="/images/tr-removebg-preview.png"
// // // //             alt="TripGraphy Logo"
// // // //             width={50} 
// // // //             height={50}
// // // //             className="rounded-lg"
// // // //           />
// // // //           <h1 className="text-2xl font-bold text-cyan-600 tracking-widest uppercase">
// // // //             TripGraphy
// // // //           </h1>
// // // //         </div>

// // // //         {/* Center - Desktop Menu */}
// // // //         <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-gray-700">
// // // //           <Link href="/" className="hover:text-cyan-600 transition">
// // // //             Home
// // // //           </Link>

// // // //           {/* Dropdown Logic for 'Pages' */}
// // // //           <div 
// // // //             className="relative group"
// // // //             onMouseEnter={() => setPagesOpen(true)}
// // // //             onMouseLeave={() => setPagesOpen(false)}
// // // //           >
// // // //             <button className="hover:text-cyan-600 transition flex items-center gap-1 uppercase">
// // // //               Pages
// // // //               {/* <span className="text-[10px]">▼</span> */}
// // // //             </button>

// // // //             {/* The Dropdown Menu */}
// // // //             {pagesOpen && (
// // // //               <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl border border-gray-100 py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
// // // //                 {pageLinks.map((link) => (
// // // //                   <Link
// // // //                     key={link.name}
// // // //                     href={link.href}
// // // //                     className="block px-6 py-2 text-gray-600 hover:text-red-400 hover:bg-gray-50 transition-colors lowercase first-letter:uppercase font-normal"
// // // //                   >
// // // //                     {link.name}
// // // //                   </Link>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           <Link href="/travels" className="hover:text-cyan-600 transition">
// // // //             Travel <span className="text-red-500 text-xs">★</span>
// // // //           </Link>
// // // //           <Link href="/blogs" className="hover:text-cyan-600 transition">
// // // //             Blog
// // // //           </Link>
// // // //           <Link href="/shop" className="hover:text-cyan-600 transition">
// // // //             Shop
// // // //           </Link>
// // // //           {/* <Link href="/elements" className="hover:text-cyan-600 transition">
// // // //             Elements
// // // //           </Link> */}
// // // //         </div>

// // // //         {/* Right - Login */}
// // // //         <div className="hidden md:block">
// // // //           <Link
// // // //             href="/login"
// // // //             className="px-6 py-2 border-2 border-cyan-600 text-cyan-600 font-bold rounded-full hover:bg-cyan-600 hover:text-white transition"
// // // //           >
// // // //             LOGIN
// // // //           </Link>
// // // //         </div>

// // // //         {/* Mobile Menu Button */}
// // // //         <button
// // // //           className="md:hidden p-2 text-gray-600"
// // // //           onClick={() => setOpen(!open)}
// // // //         >
// // // //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// // // //           </svg>
// // // //         </button>
// // // //       </div>

// // // //       {/* Mobile Menu Items */}
// // // //       {open && (
// // // //         <div className="md:hidden bg-white border-t flex flex-col p-6 gap-4 font-bold uppercase text-sm">
// // // //           <Link href="/" onClick={() => setOpen(false)}>Home</Link>
// // // //           <div className="flex flex-col gap-2 pl-4 border-l-2 border-cyan-100">
// // // //              <p className="text-gray-400 text-xs">PAGES</p>
// // // //              {pageLinks.map(link => (
// // // //                <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="font-normal lowercase first-letter:uppercase">
// // // //                  {link.name}
// // // //                </Link>
// // // //              ))}
// // // //           </div>
// // // //           <Link href="/travels" onClick={() => setOpen(false)}>Travel</Link>
// // // //           <Link href="/blogs" onClick={() => setOpen(false)}>Blog</Link>
// // // //           <Link href="/login" className="text-cyan-600">Login</Link>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;






// // // // components/navbar.tsx

// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx please add Travels and blogs both 
// // // "use client";

// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";

// // // const Navbar = () => {
// // //   const [open, setOpen] = useState(false);
// // //   const [pagesOpen, setPagesOpen] = useState(false);
// // //   const [shopOpen, setShopOpen] = useState(false);
// // // // const [travelsOpen, setShopOpen] = useState(false);
// // //   const pageLinks = [
// // //     { name: "Who We Are", href: "/who-we-are" },
// // //     { name: "About Me", href: "/about-me" },
// // //     { name: "Destination Map", href: "/destination-map" },
// // //     { name: "Get In Touch", href: "/contact" },
// // //     { name: "FAQ Page", href: "/faq" },
// // //   ];

// // //   const travelsLinks = [
// // //     { name: "List", href: "/" },
// // //     { name: "Map", href: "/" },
// // //   ];

// // //   const blogLinks = [
// // //     { name: "Add you vist blog post", href: "/" },
// // //     { name: "Show your Post", href: "/" },
// // //   ];
// // //   const shopLinks = [
// // //     { name: "Shop List", href: "/shop" },
// // //     { name: "Your own Products", href: "/my-products" }, // ← changed placeholder
// // //   ];

// // //   return (
// // //     <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
// // //         {/* Logo */}
// // //         <div className="flex items-center gap-2.5">
// // //           <Image
// // //             src="/images/tr-removebg-preview.png"
// // //             alt="TripGraphy Logo"
// // //             width={48}
// // //             height={48}
// // //             className="rounded-lg object-contain"
// // //             priority
// // //           />
// // //           <h1 className="text-2xl sm:text-3xl font-bold text-cyan-600 tracking-widest uppercase">
// // //             TripGraphy
// // //           </h1>
// // //         </div>

// // //         {/* Desktop Menu */}
// // //         <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold tracking-wider uppercase text-gray-700">
// // //           <Link href="/" className="hover:text-cyan-600 transition-colors">
// // //             Home
// // //           </Link>

// // //           {/* Pages Dropdown */}
// // //           <div
// // //             className="relative group"
// // //             onMouseEnter={() => setPagesOpen(true)}
// // //             onMouseLeave={() => setPagesOpen(false)}
// // //           >
// // //             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// // //               Pages
// // //             </button>

// // //             {pagesOpen && (
// // //               <div className="absolute left-0 top-full mt-1 w-60 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
// // //                 {pageLinks.map((link) => (
// // //                   <Link
// // //                     key={link.name}
// // //                     href={link.href}
// // //                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
// // //                   >
// // //                     {link.name}
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Travels (you can also make it dropdown later if needed) */}
// // //           <Link href="/travels" className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// // //             Travel <span className="text-red-500 text-xs">★</span>
// // //           </Link>

// // //           <Link href="/blogs" className="hover:text-cyan-600 transition-colors">
// // //             Blog
// // //           </Link>

// // //           {/* Shop Dropdown */}
// // //           <div
// // //             className="relative group"
// // //             onMouseEnter={() => setShopOpen(true)}
// // //             onMouseLeave={() => setShopOpen(false)}
// // //           >
// // //             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// // //               Shop
// // //             </button>

// // //             {shopOpen && (
// // //               <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
// // //                 {shopLinks.map((link) => (
// // //                   <Link
// // //                     key={link.name}
// // //                     href={link.href}
// // //                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
// // //                   >
// // //                     {link.name}
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {/* Desktop Login Button */}
// // //         <div className="hidden md:block">
// // //           <Link
// // //             href="/login"
// // //             className="px-6 py-2.5 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
// // //           >
// // //             LOGIN
// // //           </Link>
// // //         </div>

// // //         {/* Mobile Hamburger */}
// // //         <button
// // //           className="md:hidden text-gray-700 p-1.5"
// // //           onClick={() => setOpen(!open)}
// // //           aria-label="Toggle menu"
// // //         >
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             strokeWidth={1.8}
// // //             stroke="currentColor"
// // //             className="w-8 h-8"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
// // //             />
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {open && (
// // //         <div className="md:hidden bg-white border-t px-5 py-6 flex flex-col gap-5 text-base font-medium text-gray-800">
// // //           <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-600">
// // //             Home
// // //           </Link>

// // //           <div className="flex flex-col gap-2.5">
// // //             <p className="text-gray-500 text-sm font-semibold tracking-wide">PAGES</p>
// // //             {pageLinks.map((link) => (
// // //               <Link
// // //                 key={link.name}
// // //                 href={link.href}
// // //                 onClick={() => setOpen(false)}
// // //                 className="pl-3 hover:text-cyan-600 transition-colors"
// // //               >
// // //                 {link.name}
// // //               </Link>
// // //             ))}
// // //           </div>

// // //           <Link href="/travels" onClick={() => setOpen(false)} className="hover:text-cyan-600">
// // //             Travel
// // //           </Link>

// // //           <Link href="/blogs" onClick={() => setOpen(false)} className="hover:text-cyan-600">
// // //             Blog
// // //           </Link>

// // //           <div className="flex flex-col gap-2.5">
// // //             <p className="text-gray-500 text-sm font-semibold tracking-wide">SHOP</p>
// // //             {shopLinks.map((link) => (
// // //               <Link
// // //                 key={link.name}
// // //                 href={link.href}
// // //                 onClick={() => setOpen(false)}
// // //                 className="pl-3 hover:text-cyan-600 transition-colors"
// // //               >
// // //                 {link.name}
// // //               </Link>
// // //             ))}
// // //           </div>

// // //           <Link
// // //             href="/login"
// // //             onClick={() => setOpen(false)}
// // //             className="mt-2 inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full text-center hover:bg-cyan-700 transition-colors"
// // //           >
// // //             Login
// // //           </Link>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // // components/navbar.tsx

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx  all dropdown open but it vanish quickly not touch able

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx
// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useSession, signOut } from "next-auth/react";
// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [pagesOpen, setPagesOpen] = useState(false);
// //   const [travelsOpen, setTravelsOpen] = useState(false);
// //   const [blogsOpen, setBlogsOpen] = useState(false);
// //   const [shopOpen, setShopOpen] = useState(false);

// //   const pageLinks = [
// //     { name: "Who We Are", href: "/who-we-are" },
// //     { name: "About Me", href: "/about-me" },
// //     { name: "Destination Map", href: "/destination-map" },
// //     { name: "Get In Touch", href: "/get-in-touch" },
// //     { name: "FAQ Page", href: "/faq" },
// //   ];

// //   const travelsLinks = [
// //     { name: "List View", href: "/list" },
// //     { name: "Map View", href: "/map" },
// //     // { name: "Featured Trips", href: "/travels/featured" },
// //     // { name: "Upcoming Tours", href: "/travels/upcoming" },
// //   ];

// //   const blogLinks = [
// //     { name: "All Blog Posts", href: "/blogs" },
// //     { name: "Add  Visited Blog post", href: "/blogs-post" },
// //     { name: "My Blog Posts", href: "/blogs/my-posts" },
// //     // { name: "Popular Stories", href: "/blogs/popular" },
// //   ];

// //   const shopLinks = [
// //     { name: "Shop List", href: "/shop" },
// //     { name: "Your own Products", href: "/my-products" },
// //     // { name: "Cart", href: "/shop/cart" },
// //   ];

// //   return (
// //     <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="flex  ">
// //           <Image
// //             src="/images/tr-removebg-preview.png"
// //             alt="TripGraphy Logo"
// //             width={150}
// //             height={150}
// //             className="rounded-lg object-contain -mt-5"
// //             priority
// //           />
// //           <h1 className="text-1xl sm:text-2xl font-bold text-cyan-600 tracking-widest uppercase mt-5 -ml-7">
// //             TripGraphy
// //           </h1>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold tracking-wider uppercase text-gray-700">
// //           <Link href="/" className="hover:text-cyan-600 transition-colors">
// //             Home
// //           </Link>

// //           {/* Pages Dropdown */}
// //           <div
// //             className="relative group"
// //             onMouseEnter={() => setPagesOpen(true)}
// //             onMouseLeave={() => setPagesOpen(false)}
// //           >
// //             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// //               PAGES
// //             </button>
// //             {pagesOpen && (
// //               <div className="absolute left-0 top-full  w-64 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50 min-w-[220px]">
// //                 {pageLinks.map((link) => (
// //                   <Link
// //                     key={link.name}
// //                     href={link.href}
// //                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Travels Dropdown */}
// //           <div
// //             className="relative group"
// //             onMouseEnter={() => setTravelsOpen(true)}
// //             onMouseLeave={() => setTravelsOpen(false)}
// //           >
// //             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// //               TRAVELS <span className="text-red-500 text-xs">★</span>
// //             </button>
// //             {travelsOpen && (
// //               <div className="absolute left-0 top-full  w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
// //                 {travelsLinks.map((link) => (
// //                   <Link
// //                     key={link.name}
// //                     href={link.href}
// //                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Blogs Dropdown */}
// //           <div
// //             className="relative group"
// //             onMouseEnter={() => setBlogsOpen(true)}
// //             onMouseLeave={() => setBlogsOpen(false)}
// //           >
// //             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// //               BLOG
// //             </button>
// //             {blogsOpen && (
// //               <div className="absolute left-0 top-full  w-60 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
// //                 {blogLinks.map((link) => (
// //                   <Link
// //                     key={link.name}
// //                     href={link.href}
// //                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Shop Dropdown */}
// //           <div
// //             className="relative group"
// //             onMouseEnter={() => setShopOpen(true)}
// //             onMouseLeave={() => setShopOpen(false)}
// //           >
// //             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
// //               SHOP
// //             </button>
// //             {shopOpen && (
// //               <div className="absolute left-0 top-full  w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
// //                 {shopLinks.map((link) => (
// //                   <Link
// //                     key={link.name}
// //                     href={link.href}
// //                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Desktop Login */}
// //         <div className="hidden md:block">
// //           <Link
// //             href="/login"
// //             className="px-6 py-2.5 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
// //           >
// //             LOGIN
// //           </Link>
// //         </div>



        
          
           
      


        

// //         {/* Mobile Hamburger */}
// //         <button
// //           className="md:hidden text-gray-700 p-1.5"
// //           onClick={() => setOpen(!open)}
// //           aria-label="Toggle menu"
// //         >
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             strokeWidth={1.8}
// //             stroke="currentColor"
// //             className="w-8 h-8"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
// //             />
// //           </svg>
// //         </button>
// //       </div>

     
// //       {open && (
// //         <div className="md:hidden bg-white border-t px-5 py-6 flex flex-col gap-5 text-base font-medium text-gray-800">
// //           <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-600">
// //             Home
// //           </Link>

// //           {/* Pages */}
// //           <div className="flex flex-col gap-2.5">
// //             <p className="text-gray-500 text-sm font-semibold tracking-wide">PAGES</p>
// //             {pageLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 onClick={() => setOpen(false)}
// //                 className="pl-4 hover:text-cyan-600 transition-colors"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Travels */}
// //           <div className="flex flex-col gap-2.5">
// //             <p className="text-gray-500 text-sm font-semibold tracking-wide">TRAVELS</p>
// //             {travelsLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 onClick={() => setOpen(false)}
// //                 className="pl-4 hover:text-cyan-600 transition-colors"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Blogs */}
// //           <div className="flex flex-col gap-2.5">
// //             <p className="text-gray-500 text-sm font-semibold tracking-wide">BLOG</p>
// //             {blogLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 onClick={() => setOpen(false)}
// //                 className="pl-4 hover:text-cyan-600 transition-colors"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Shop */}
// //           <div className="flex flex-col gap-2.5">
// //             <p className="text-gray-500 text-sm font-semibold tracking-wide">SHOP</p>
// //             {shopLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 onClick={() => setOpen(false)}
// //                 className="pl-4 hover:text-cyan-600 transition-colors"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           <Link
// //             href="/login"
// //             onClick={() => setOpen(false)}
// //             className="mt-3 inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full text-center hover:bg-cyan-700 transition-colors"
// //           >
// //             Login
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;




// // C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useSession, signOut } from "next-auth/react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [pagesOpen, setPagesOpen] = useState(false);
//   const [travelsOpen, setTravelsOpen] = useState(false);
//   const [blogsOpen, setBlogsOpen] = useState(false);
//   const [shopOpen, setShopOpen] = useState(false);

//   const { data: session, status } = useSession();
//   const isAuthenticated = status === "authenticated";
//   const userImage = session?.user?.image;
//   const userName = session?.user?.name || "User";

//   const pageLinks = [
//     { name: "Who We Are", href: "/who-we-are" },
//     { name: "About Me", href: "/about-me" },
//     { name: "Destination Map", href: "/destination-map" },
//     { name: "Get In Touch", href: "/get-in-touch" },
//     { name: "FAQ Page", href: "/faq" },
//   ];

//   const travelsLinks = [
//     { name: "List View", href: "/list" },
//     { name: "Map View", href: "/map" },
//     // { name: "Featured Trips", href: "/travels/featured" },
//     // { name: "Upcoming Tours", href: "/travels/upcoming" },
//   ];

//   const blogLinks = [
//     { name: "All Blog Posts", href: "/blogs" },
//     { name: "Add  Visited Blog post", href: "/blogs-post" },
//     { name: "My Blog Posts", href: "/blogs/my-posts" },
//     // { name: "Popular Stories", href: "/blogs/popular" },
//   ];

//   const shopLinks = [
//     { name: "Shop List", href: "/shop" },
//     { name: "Your own Products", href: "/my-products" },
//     // { name: "Cart", href: "/shop/cart" },
//   ];

//   return (
//     <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex  ">
//           <Image
//             src="/images/tr-removebg-preview.png"
//             alt="TripGraphy Logo"
//             width={150}
//             height={150}
//             className="rounded-lg object-contain -mt-5"
//             priority
//           />
//           <h1 className="text-1xl sm:text-2xl font-bold text-cyan-600 tracking-widest uppercase mt-5 -ml-7">
//             TripGraphy
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold tracking-wider uppercase text-gray-700">
//           <Link href="/" className="hover:text-cyan-600 transition-colors">
//             Home
//           </Link>

//           {/* Pages Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setPagesOpen(true)}
//             onMouseLeave={() => setPagesOpen(false)}
//           >
//             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
//               PAGES
//             </button>
//             {pagesOpen && (
//               <div className="absolute left-0 top-full  w-64 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50 min-w-[220px]">
//                 {pageLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Travels Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setTravelsOpen(true)}
//             onMouseLeave={() => setTravelsOpen(false)}
//           >
//             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
//               TRAVELS <span className="text-red-500 text-xs">★</span>
//             </button>
//             {travelsOpen && (
//               <div className="absolute left-0 top-full  w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
//                 {travelsLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Blogs Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setBlogsOpen(true)}
//             onMouseLeave={() => setBlogsOpen(false)}
//           >
//             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
//               BLOG
//             </button>
//             {blogsOpen && (
//               <div className="absolute left-0 top-full  w-60 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
//                 {blogLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Shop Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setShopOpen(true)}
//             onMouseLeave={() => setShopOpen(false)}
//           >
//             <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
//               SHOP
//             </button>
//             {shopOpen && (
//               <div className="absolute left-0 top-full  w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
//                 {shopLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Desktop Auth Section */}
//         <div className="hidden md:flex items-center gap-4">
//           {isAuthenticated ? (
//             <div className="flex items-center gap-3">
//               {userImage ? (
//                 <Image
//                   src={userImage}
//                   alt={`${userName} profile`}
//                   width={38}
//                   height={38}
//                   className="rounded-full object-cover border-2 border-cyan-100 shadow-sm"
//                 />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-semibold">
//                   {userName?.[0]?.toUpperCase() || "?"}
//                 </div>
//               )}
//               <button
//                 onClick={() => signOut({ callbackUrl: "/" })}
//                 className="px-5 py-2 border border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-colors text-sm"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               href="/login"
//               className="px-6 py-2.5 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
//             >
//               LOGIN
//             </Link>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-gray-700 p-1.5"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.8}
//             stroke="currentColor"
//             className="w-8 h-8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white border-t px-5 py-6 flex flex-col gap-5 text-base font-medium text-gray-800">
//           <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-600">
//             Home
//           </Link>

//           {/* Pages */}
//           <div className="flex flex-col gap-2.5">
//             <p className="text-gray-500 text-sm font-semibold tracking-wide">PAGES</p>
//             {pageLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="pl-4 hover:text-cyan-600 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Travels */}
//           <div className="flex flex-col gap-2.5">
//             <p className="text-gray-500 text-sm font-semibold tracking-wide">TRAVELS</p>
//             {travelsLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="pl-4 hover:text-cyan-600 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Blogs */}
//           <div className="flex flex-col gap-2.5">
//             <p className="text-gray-500 text-sm font-semibold tracking-wide">BLOG</p>
//             {blogLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="pl-4 hover:text-cyan-600 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Shop */}
//           <div className="flex flex-col gap-2.5">
//             <p className="text-gray-500 text-sm font-semibold tracking-wide">SHOP</p>
//             {shopLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="pl-4 hover:text-cyan-600 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Auth */}
//           <div className="mt-4">
//             {isAuthenticated ? (
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-center gap-3">
//                   {userImage ? (
//                     <Image
//                       src={userImage}
//                       alt={`${userName} profile`}
//                       width={48}
//                       height={48}
//                       className="rounded-full object-cover border-2 border-cyan-100"
//                     />
//                   ) : (
//                     <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-xl">
//                       {userName?.[0]?.toUpperCase() || "?"}
//                     </div>
//                   )}
//                   <span className="font-semibold">{userName}</span>
//                 </div>
//                 <button
//                   onClick={() => {
//                     signOut({ callbackUrl: "/" });
//                     setOpen(false);
//                   }}
//                   className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors text-center"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link
//                 href="/login"
//                 onClick={() => setOpen(false)}
//                 className="mt-3 inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full text-center hover:bg-cyan-700 transition-colors w-full"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [travelsOpen, setTravelsOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const userImage = session?.user?.image;
  const userName = session?.user?.name || "User";

  const pageLinks = [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "About Me", href: "/about-me" },
    { name: "Destination Map", href: "/destination-map" },
    { name: "Get In Touch", href: "/get-in-touch" },
    { name: "FAQ Page", href: "/faq" },
  ];

  const travelsLinks = [
    { name: "List View", href: "/list" },
    { name: "Map View", href: "/map" },
    // { name: "Featured Trips", href: "/travels/featured" },
    // { name: "Upcoming Tours", href: "/travels/upcoming" },
  ];

  // const blogLinks = [
  //   { name: "All Blog Posts", href: "/blogs" },
  //   { name: "Add  Visited Blog post", href: "/blogs-post" },// i want only logined user can see and add blog in this page
  //   { name: "My Blog Posts", href: "/my-posts" },
  //   // { name: "Popular Stories", href: "/blogs/popular" },
  // ];

//   const blogLinks = [
//   { name: "All Blog Posts", href: "/blogs" },
//   ...(isAuthenticated
//     ? [
//         { name: "Add Visited Blog Post", href: "/blogs-post" },
//         { name: "My Blog Posts", href: "/my-posts" },
//       ]
//     : []),
// ];

const blogLinks = [
  { name: "All Travel Journey Posts", href: "/blogs" },

  {
    name: "Add UR Travel Journey Post",
    href: isAuthenticated ? "/blogs-post" : "/login",
  },

  {
    name: "My Journey  Posts",
    href: isAuthenticated ? "/my-posts" : "/login",
  },
];

  const shopLinks = [
    { name: "Travel products List", href: "/shop" },
    { name: "Your own Purchase Products", href: "/my-products" },
    // { name: "Cart", href: "/shop/cart" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex  ">
          <Image
            src="/images/tr-removebg-preview.png"
            alt="TripGraphy Logo"
            width={150}
            height={150}
            className="rounded-lg object-contain -mt-5"
            priority
          />
          <h1 className="text-1xl sm:text-2xl font-bold text-cyan-600 tracking-widest uppercase mt-5 -ml-7">
            TripGraphy
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold tracking-wider uppercase text-gray-700">
          <Link href="/" className="hover:text-cyan-600 transition-colors">
            Home
          </Link>

          {/* Pages Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
              PAGES
            </button>
            {pagesOpen && (
              <div className="absolute left-0 top-full  w-64 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50 min-w-[220px]">
                {pageLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Travels Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setTravelsOpen(true)}
            onMouseLeave={() => setTravelsOpen(false)}
          >
            <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
              TRAVELS <span className="text-red-500 text-xs">★</span>
            </button>
            {travelsOpen && (
              <div className="absolute left-0 top-full  w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
                {travelsLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blogs Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setBlogsOpen(true)}
            onMouseLeave={() => setBlogsOpen(false)}
          >
            <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
              TRAVEL DIARIES
            </button>
            {blogsOpen && (
              <div className="absolute left-0 top-full  w-60 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
                {blogLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Shop Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="hover:text-cyan-600 transition-colors flex items-center gap-1">
              SHOP
            </button>
            {shopOpen && (
              <div className="absolute left-0 top-full  w-56 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-50">
                {shopLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-2.5 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {userImage ? (
                <Image
                  src={userImage}
                  alt={`${userName} profile`}
                  width={38}
                  height={38}
                  className="rounded-full object-cover border-2 border-cyan-100 shadow-sm"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-semibold">
                  {userName?.[0]?.toUpperCase() || "?"}
                </div>
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-5 py-2 border border-red-500 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2.5 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
            >
              LOGIN
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-5 py-6 flex flex-col gap-5 text-base font-medium text-gray-800">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-600">
            Home
          </Link>

          {/* Pages */}
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-sm font-semibold tracking-wide">PAGES</p>
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="pl-4 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Travels */}
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-sm font-semibold tracking-wide">TRAVELS</p>
            {travelsLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="pl-4 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Blogs */}
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-sm font-semibold tracking-wide">TRAVEL DIARIES</p>
            {blogLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="pl-4 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-2.5">
            <p className="text-gray-500 text-sm font-semibold tracking-wide">SHOP</p>
            {shopLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="pl-4 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth */}
          <div className="mt-4">
            {isAuthenticated ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {userImage ? (
                    <Image
                      src={userImage}
                      alt={`${userName} profile`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-cyan-100"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-xl">
                      {userName?.[0]?.toUpperCase() || "?"}
                    </div>
                  )}
                  <span className="font-semibold">{userName}</span>
                </div>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setOpen(false);
                  }}
                  className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors text-center"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-3 inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full text-center hover:bg-cyan-700 transition-colors w-full"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;