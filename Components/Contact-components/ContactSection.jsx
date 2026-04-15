"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className=" relative w-full bg-white pt-20 pb-0 overflow-hidden min-h-[800px] flex flex-col justify-center">
      
      {/* --- 1. THE GREEN WAVE (Top Layer relative to image) --- */}
      {/* Iska z-index 'z-20' hai taaki ye image ke UPAR rahe */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto translate-y-[1px]" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="#eaf7f0" 
            fillOpacity="1" 
            // Exact Wave Path: Left up -> Middle dip -> Right very high
            d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-10 md:gap-20">
        
        {/* --- 2. LEFT SIDE: Contact Form --- */}
        {/* z-30 taaki ye wave ke bhi upar rahe aur click ho sake */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative z-30 mb-20 lg:mb-0"
        >
          <h2 className="text-4xl md:text-[52px] font-bold text-slate-900 mb-10 md:mb-16">Contact Us</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="John Doe" className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none placeholder:text-slate-500 text-slate-800 focus:bg-white transition-all" />
              <input type="text" placeholder="Mobile Number" className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none placeholder:text-slate-500 text-slate-800 focus:bg-white transition-all" />
            </div>
            <input type="email" placeholder="name@example.com" className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none placeholder:text-slate-500 text-slate-800 focus:bg-white transition-all" />
            <textarea rows="6" placeholder="Write your message here.." className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none placeholder:text-slate-500 text-slate-800 focus:bg-white transition-all resize-none"></textarea>
            <button type="submit" className="px-12 py-3 bg-[#50c878] hover:bg-[#45b36a] text-slate-800 font-bold rounded-xl shadow-md transition-all">Send</button>
          </form>
        </motion.div>

        {/* --- 3. RIGHT SIDE: Image Area (BEHIND THE WAVE) --- */}
        {/* Iska z-index 'z-10' hai taaki ye wave ke peeche chhup jaye */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 flex justify-center items-end min-h-[500px] z-10"
        >

          {/* Main Character Image (Iska niche ka hissa wave ke piche jayega) */}
          <div className="relative w-full max-w-[450px] mt-auto">
            <img 
              src="/contactman.webp" 
              alt="Support" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;