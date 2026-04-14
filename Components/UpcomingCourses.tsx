"use client";
import React from "react";
import { motion } from "framer-motion";

const UpcomingCourses = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      {/* --- 1. HEADER AREA --- */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mb-20 flex justify-end">
        
        {/* Light Green Background Box (Behind Header) */}
        {/* Yeh box right se start hota hai aur piche background deta hai */}
        <div className="absolute -right-10 top-[-40px] w-[90%] md:w-[600px] h-[250px] bg-[#eaf7f0] -z-10 rounded-l-[100px] hidden md:block"></div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Reversible: Upar jane pe gayab hoga
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-right z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            {/* Highlighter Effect (Brush Stroke Style) */}
            <span className="relative inline-block mr-3">
              <span className="relative z-10 px-1">Upcoming</span>
              <span className="absolute left-0 right-0 bottom-2 h-[55%] bg-[#c1f2d1] -z-10 rounded-[10%_90%_5%_95%/10%_10%_90%_90%] -rotate-1 scale-x-110"></span>
            </span> 
            Skill-Building <br /> Courses
          </h2>
          {/* Thick Green Horizontal Bar Under Header */}
          <div className="flex justify-end mt-6">
            <div className="w-56 h-2 bg-[#4ade80] rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* --- 2. CONTENT SECTION (Card & Description) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT: Course Card */}
        <motion.div 
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-50 relative group"
        >
          {/* Image Container (MySQL Poster) */}
          <div className="relative w-full aspect-[4/3]">
            <img 
              src="/mysql-masterclass-web-banner.webp" 
              alt="MySQL Masterclass"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Info Area */}
          <div className="p-8 pb-14 bg-white">
            <span className="inline-block bg-[#eaf7f0] text-[#2fb383] text-[13px] font-bold px-4 py-2 rounded-lg mb-4">
              Python Online Master Class
            </span>
            <h3 className="text-[44px] font-black text-slate-800 tracking-tight">2999₹</h3>
          </div>

          {/* ARROW BUTTON (Inside Light Green Cutout Box) */}
          {/* Exact same position as screenshot */}
          <div className="absolute right-0 bottom-0 bg-[#eaf7f0] w-16 h-16 flex items-center justify-center rounded-tl-[40px] cursor-pointer hover:bg-[#d5ecd9] transition-all">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#4ade80]">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </motion.div>

        {/* RIGHT: Description Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <p className="text-[#475569] text-base md:text-[19px] leading-relaxed font-normal">
            Join our virtual MySQL classroom and embark on a coding journey like no other. 
            Kodyfier offers online MySQL training in Pune, designed for learners of all levels. 
            Are you ready to dive into the world of MySQL programming? Look no further! 
            Our comprehensive MySQL curriculum covers everything from basics to advanced 
            MySQL concepts, ensuring you build a solid foundation and become a MySQL master.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default UpcomingCourses;