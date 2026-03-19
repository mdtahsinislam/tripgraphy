// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\next.config.ts


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "lh3.googleusercontent.com", // ✅ Google profile images
//       "i.ibb.co", // if you use imgbb
//       "localhost", // optional for local testing
//     ],
//   },
// };

// module.exports = nextConfig;


//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;