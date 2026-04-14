"use client";
import React from "react";
import { motion } from "framer-motion";

const JobOrientedSection = () => {
  return (
    <section className="relative w-full bg-[#eaf7f0] mt-30 py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT SIDE: Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left"
        >
          {/* Heading Section */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-[44px] font-bold text-slate-900 leading-[1.2]">
              {/* Highlighted "Job" word */}
              <span className="relative inline-block px-3 mr-2">
                <span className="relative z-10 text-white">Job</span>
                <span className="absolute inset-0 bg-[#4ade80] rounded-md -rotate-1"></span>
              </span> 
              Oriented Programming <br className="hidden md:block" />
              Classes In Pune
            </h2>
            {/* Short Green Underline */}
            <div className="w-44 h-1.5 bg-[#4ade80] mt-3 rounded-full"></div>
          </div>

          {/* Paragraphs Area */}
          <div className="space-y-6 text-slate-600 text-[15px] md:text-base leading-relaxed max-w-xl">
            <p>
              A practical oriented software institute in Pune immerses hands on dynamic learning 
              with live sessions, Webinars and structured guidance to make your career bright in software industry.
            </p>
            <p>
              Kodyfier offers the best programming classes in Pune with a strong emphasis on practical 
              learning and IT guidance. Their courses are significantly advanced, to cater to individuals of all levels.
            </p>
            <p>
              If you're seeking to enhance your programming skills, Kodyfier is the ideal choice, 
              providing comprehensive and dynamic education.
            </p>
          </div>

          {/* Explore More Button */}
          <button className="mt-10 px-8 py-3 bg-[#50c878] hover:bg-[#45b36a] text-slate-900 font-semibold rounded-lg shadow-md transition-all duration-300">
            Explore more
          </button>
        </motion.div>

        {/* RIGHT SIDE: Image Area */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl">
            <img
              src="/about.webp" // Apni image path yahan dalein
              alt="Programming Classes"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JobOrientedSection;