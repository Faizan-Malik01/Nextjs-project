"use client";
import React from "react";
import { motion } from "framer-motion";

const PracticalTrainingSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Wrapper - No padding, spans full width */}
      <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
        
        {/* LEFT SIDE: Image and Left Background Bar */}
        <div className="relative w-full lg:w-[45%] flex justify-center items-center py-12 lg:py-0">
          
          {/* STATIC BACKGROUND: Left Green Bar (Screen ke left edge se mila hua) */}
          <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[150px] bg-[#eaf7f0]"></div>

          {/* ANIMATED IMAGE - Niche se slide hoga aur wapas jayega */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[85%] max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="/writing.webp" 
              alt="Practical Training"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Content with Right Background Block */}
        {/* bg-[#eaf7f0] screen ke right edge tak jayega */}
        <div className="w-full lg:w-[55%] bg-[#eaf7f0] flex items-center px-6 md:px-16 lg:px-24 py-16 lg:py-0">
          
          {/* ANIMATED TEXT - Niche se slide hoga aur wapas jayega */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="max-w-2xl"
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-[45px] font-bold text-slate-800 leading-[1.1]">
                <span className="text-[#4ade80]">Practical</span> Oriented Software <br className="hidden md:block" />
                Training Institute In Pune
              </h2>
              {/* Short Thick Green Underline */}
              <div className="w-44 h-2 bg-[#4ade80] mt-4 rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-8 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                A practical oriented software institute in Pune immerses hands on dynamic learning with live sessions, 
                Webinars and structured guidance to make your career bright in software industry.
              </p>
              <p>
                Are your Seeking a <span className="font-bold text-slate-800 underline decoration-[#4ade80] underline-offset-4">software training institute in Pune with Guaranteed placement?</span> 
                If you search software classes near me in Pune on search we will be there. 
                To join Kodyfier for comprehensive learning and expert guidance is your best bet for IT courses In Pune.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PracticalTrainingSection;