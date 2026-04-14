"use client";
import React from "react";
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaDiscord 
} from "react-icons/fa"; // npm install react-icons

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#eaf7f0] pt-12 pb-6 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* Left Side: Logo & Slogan */}
          <div className="flex flex-col max-w-sm">
            <div className="flex items-center gap-1 mb-3">
              {/* KodyFier Logo Style */}
              <h2 className="text-3xl font-extrabold text-slate-900 flex items-center">
                Kody<span className="text-[#50c878]">Fier</span>
              </h2>
            </div>
            <p className="text-slate-600 text-base md:text-[17px] font-medium leading-tight">
              Elevate Your Career with KodyFier Tech Skills Training
            </p>

            {/* Social Media Icons (Circular Green) */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <FaDiscord />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-10 h-10 flex items-center justify-center bg-[#50c878] text-white rounded-full hover:bg-[#45b36a] transition-all transform hover:scale-110 shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center-Right Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 lg:gap-16">
            <nav className="flex flex-wrap gap-5 md:gap-8 text-slate-600 font-semibold text-lg">
              <a href="#" className="hover:text-[#50c878] transition-colors">About Us</a>
              <a href="#" className="hover:text-[#50c878] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#50c878] transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-[#50c878] transition-colors">Contact</a>
            </nav>

            {/* Rightmost column (Links/Courses) */}
            <div className="flex flex-col text-left lg:text-right">
              <h4 className="text-slate-900 font-bold text-lg">Links</h4>
              <p className="text-slate-600 font-medium">courses</p>
            </div>
          </div>
        </div>

        {/* --- Divider Line --- */}
        <hr className="border-slate-300 mt-12 mb-8 opacity-50" />

        {/* --- Bottom Section: Copyright --- */}
        <div className="text-center text-slate-600 text-base md:text-[17px] font-medium">
          © 2025 Kodyfier, Inc. All rights reserved.
        </div>
      </div>

      {/* --- Scroll to Top Button (Floating Green) --- */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-6 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-[#86efac] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#4ade80] transition-all group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth="3.5" stroke="white" 
          className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;