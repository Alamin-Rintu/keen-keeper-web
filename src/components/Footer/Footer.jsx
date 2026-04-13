import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="relative bg-[#244D3F] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            KeenKeeper
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Social */}
        <div className="mt-10 text-center space-y-3">
          <p className="text-lg font-semibold">Follow Us</p>

          <div className="flex items-center justify-center gap-5">
            {[
              { icon: <FaFacebook />, color: "hover:text-blue-400" },
              { icon: <GrTwitter />, color: "hover:text-sky-400" },
              { icon: <FiInstagram />, color: "hover:text-pink-400" },
            ].map((item, i) => (
              <span
                key={i}
                className={`text-2xl cursor-pointer transition-transform duration-300 hover:scale-125 ${item.color}`}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms of Service</p>
            <p className="hover:text-white cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
