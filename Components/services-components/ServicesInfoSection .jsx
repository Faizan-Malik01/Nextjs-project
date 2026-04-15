"use client";
import React from "react";
import { motion } from "framer-motion";

const ServicesInfoSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* --- Heading Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-slate-900 leading-tight mb-4 px-2">
            Services Kodyfier Future Techno Training <br className="hidden md:block" />
            Private Limited
          </h2>

          {/* Thick Green Underline (Same as Screenshot) */}
          <div className="w-64 md:w-[480px] h-2 md:h-2.5 bg-[#4ade80] mx-auto rounded-full mb-12"></div>
        </motion.div>

        {/* --- Paragraph Text --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-slate-600 text-base md:text-[19px] leading-relaxed font-normal text-justify md:text-center">
            Kodyfier, your premier destination for comprehensive software language training in Pune. 
            At Kodyfier, we are dedicated to empowering individuals with the knowledge and skills 
            needed to excel in the dynamic world of computer programming. Whether you're a beginner 
            looking to embark on a coding journey or a seasoned professional aiming to enhance 
            your skills, we have the right programs to cater to your needs.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesInfoSection;