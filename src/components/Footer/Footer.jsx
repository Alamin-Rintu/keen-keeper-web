import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white">
      {/* Fixed width container */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            KeenKeeper
          </h1>

          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Social */}
        <div className="mt-10 text-center space-y-3">
          <p className="font-semibold">Social Links</p>

          <div className="flex items-center justify-center gap-5 text-xl">
            <FaFacebook className="hover:text-blue-400 transition" />
            <GrTwitter className="hover:text-sky-400 transition" />
            <FiInstagram className="hover:text-pink-400 transition" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5 flex-wrap justify-center">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms</p>
            <p className="hover:text-white cursor-pointer">Cookies</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;