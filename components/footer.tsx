// import React from 'react'

// export default function footer() {
//   return (
//     <div>footer</div>
//   )
// }




//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\footer.tsx

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube, FaRss } from 'react-icons/fa';
import { IconType } from "react-icons";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] pt-16 pb-8 px-10 font-serif text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b border-gray-200 pb-16">
        
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <h3 className="uppercase tracking-widest text-sm mb-8 relative">
            <span className="bg-[#FAF9F6] px-4">Where we are now</span>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 -z-10"></div>
          </h3>
          
          <p className="italic text-gray-400 text-sm">Md Tahsin Islam, Bangladesh</p>
          <p className="italic text-gray-400 text-sm">mdtahsinislam334@gmail.com</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <h3 className="uppercase tracking-widest text-sm mb-8 relative w-full">
            <span className="bg-[#FAF9F6] px-4">Follow Us</span>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 -z-10"></div>
          </h3>

          <div className="grid grid-cols-3 gap-y-8 gap-x-12">
            <SocialIcon Icon={FaInstagram} label="INSTAGRAM" />
            <SocialIcon Icon={FaFacebookF} label="FACEBOOK" />
            <SocialIcon Icon={FaTwitter} label="TWITTER" />
            <SocialIcon Icon={FaPinterestP} label="PINTEREST" />
            <SocialIcon Icon={FaYoutube} label="YOUTUBE" />
            <SocialIcon Icon={FaRss} label="RSS" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <h3 className="uppercase tracking-widest text-sm mb-8 relative w-full">
            <span className="bg-[#FAF9F6] px-4">Newsletter</span>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 -z-10"></div>
          </h3>

          <div className="w-full max-w-xs">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full border border-gray-300 p-3 mb-4 text-center italic outline-none focus:border-black transition-colors"
            />
            <button className="w-full bg-black text-white py-4 tracking-[0.2em] text-xs font-bold hover:bg-gray-800 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-gray-500">
        <p className="italic normal-case text-sm">
          © {currentYear} Qode Interactive, All Rights Reserved
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">Lifestyle</a>
          <a href="#" className="hover:text-black">Moments</a>
          <a href="#" className="hover:text-black">Adventure</a>
          <a href="#" className="hover:text-black">Explore</a>
          <a href="#" className="hover:text-black">Vacation</a>
        </div>
      </div>
    </footer>
  );
};

// ✅ Typed SocialIcon
type SocialIconProps = {
  Icon: IconType;
  label: string;
};

const SocialIcon = ({ Icon, label }: SocialIconProps) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <Icon className="text-xl mb-2 group-hover:text-gray-500 transition-colors" />
    <span className="text-[9px] tracking-[0.2em] text-gray-400 group-hover:text-black">
      {label}
    </span>
  </div>
);

export default Footer;