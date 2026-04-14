"use client";
import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-visible">
      
      {/* --- Main Green Bar Container --- */}
      <div className="relative w-full bg-[#eaf7f0] py-16 md:py-20 flex flex-col items-center justify-center px-6">
        
        {/* 1. TOP LEFT QUOTE ICON (Half Outside) */}
        <div className="absolute top-0 left-[10%] md:left-[15%] transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#2fb383] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* --- QUOTE TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <p className="text-xl md:text-3xl lg:text-4xl text-slate-700 leading-snug font-normal px-4">
            When educating the minds of our youth, we must not <br className="hidden md:block" />
            forget to educate their 💖
          </p>

          {/* AUTHOR NAME */}
          <div className="mt-8 flex flex-col items-center">
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide">
              Dalai Lama
            </h4>
            
            {/* BRUSH STROKE UNDERLINE (Same as Screenshot) */}
            <div className="mt-1 relative">
              <svg width="220" height="15" viewBox="0 0 220 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 13C45.5 5.5 130.5 -2.5 218 10" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                <path d="M15 11C60 6 120 4 180 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 2. BOTTOM RIGHT QUOTE ICON (Half Outside) */}
        <div className="absolute bottom-0 right-[10%] md:right-[15%] transform translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#2fb383] rounded-full flex items-center justify-center shadow-lg border-4 border-white rotate-180">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
             <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </section>
  );
};

export default QuoteSection;