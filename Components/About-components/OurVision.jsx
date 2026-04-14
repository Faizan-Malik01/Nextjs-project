"use client";
import React from "react";
import { motion } from "framer-motion";

const OurVisionSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 md:py-20">
      
      {/* 1. LEFT STATIC BACKGROUND BAR (Left edge se chipka hua) */}
      {/* Yeh kabhi gayab nahi hoga aur hamesha dikhega */}
      <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[160px] bg-[#eaf7f0] z-0"></div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px] relative z-10">
        
        {/* LEFT SIDE: Animated Image Area */}
        <div className="relative w-full lg:w-[45%] flex justify-center items-center py-12 lg:py-0">
          
          {/* IMAGE - Niche se slide up aur fade in hoga */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 w-[85%] max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white md:ml-12"
          >
            <img
              src="/writing.webp" 
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Animated Content Area with Background */}
        {/* Yeh background automatic right edge se chipka rahega */}
        <div className="w-full lg:w-[55%] bg-[#eaf7f0] flex items-center px-6 md:px-16 lg:px-24 py-16 lg:py-0">
          
          {/* TEXT - Niche se slide up aur fade in hoga */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-2xl"
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-[48px] font-bold text-slate-800 leading-[1.2]">
                Our <span className="text-[#4ade80]">Vision</span> At Kodyfier
              </h2>
              {/* Short Thick Green Underline */}
              <div className="w-40 h-2 bg-[#4ade80] mt-4 rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-8 text-slate-600 text-base md:text-[19px] leading-relaxed">
              <p>
                At Kodyfier, our vision is to be a leading provider of software language 
                training, both online and offline, recognized for our commitment to 
                excellence and innovation.
              </p>
              <p>
                At Kodyfier, our vision is to be a leading provider of software language 
                training, both online and offline, recognized for our commitment to 
                excellence and innovation.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurVisionSection;