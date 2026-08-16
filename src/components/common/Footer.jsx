import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div id="footer" className="w-full pt-20 pb-8 md:pt-32 border-t border-white/5">
      <div className="container flex flex-col justify-between h-full">

        {/* Top Info Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-10 gap-x-4 mb-20 text-base md:text-sm text-neutral-400">
          {/* Column 1: Copyright */}
          <div className="flex flex-col justify-end order-3 md:order-1 col-span-1 text-xs md:text-sm mt-12 md:mt-0">
            <p>© {new Date().getFullYear()} Mridula Devi</p>
          </div>

          {/* Column 2: Email */}
          <div className="flex flex-col gap-1 order-2 md:order-2 col-span-2 md:col-span-1">
            <p className="hidden md:block">Email</p>
            <a href="mailto:ie.mriduladevi@gmail.com" className="hover:text-white transition-colors duration-300">
              ie.mriduladevi@gmail.com
            </a>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col gap-2 md:gap-1 order-1 md:order-3 col-span-2 md:col-span-1">
            <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Behance</a>
          </div>

          {/* Column 4: Status */}
          <div className="flex flex-col gap-1 uppercase items-start md:items-end order-4 md:order-4 col-span-1 text-xs md:text-sm mt-12 md:mt-0">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#799528]"></span>
              <span className="text-[#799528] uppercase ">
                Available to work
              </span>
            </div>
            <p className="pl-3.5 md:pl-0">Freelance / Part-time</p>
          </div>
        </div>

      </div>
      {/* Big Name Section */}
      <div className="w-full flex justify-center px-4 items-center overflow-hidden">
        <img className='w-full' src="../../../public/images/footer_txt.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;