"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ClipboardList, UserCheck } from "lucide-react";

const Hero = () => {
  return (
    // Background: Niche se halka green gradient (Screenshot jaisa)
    <section className="relative h-[960px] pt-20 pb-10 overflow-hidden bg-gradient-to-b from-white via-white to-[#83daaf]/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading Section */}
        <div className="text-center mt-10 mb-16">
          <h1 className="text-[42px] md:text-[80px] font-extrabold tracking-tight leading-tight">
            <span className="text-[#3ed494] block">IT TRAINING INSTITUTE</span>
            <span className="text-[#1a1d2e]">IN PUNE</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 z-10 pt-10">
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Kodyfier – Top IT Training Institute in Pune is an ideal place for individuals 
              looking to upgrade their skills and advance their careers in the fast-growing 
              tech industry. Offering a plethora of IT courses, including popular courses 
              such as Web Development courses and Software classes in Pune, the Institute 
              provides hands-on training and practical experience to help students stay 
              ahead of the curve.
            </p>

            {/* Enroll Button and Arrow */}
            <div className="relative inline-block">
              <button className="bg-[#3ed494] hover:bg-[#34b37d] text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-emerald-100 transition-all">
                Enroll Now
              </button>
              
              {/* Screenshot Jaisa Curved Arrow */}
              <div className="absolute -right-12 top-6 hidden md:block">
                <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5C45 5 45 70 45 85" stroke="#1a1d2e" strokeWidth="2" strokeLinecap="round" />
                  <path d="M38 75L45 85L52 75" stroke="#1a1d2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Features List (Green Icons) */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4 text-[#1a7a54] font-bold">
                <div className="p-2 bg-[#e8fbf3] rounded-lg border border-[#cff6e5]">
                  <Play size={24} className="fill-[#3ed494] text-[#3ed494]" />
                </div>
                <span className="text-lg">Live Classes</span>
              </div>

              <div className="flex items-center gap-4 text-[#1a7a54] font-bold">
                <div className="p-2 bg-[#e8fbf3] rounded-lg border border-[#cff6e5]">
                  <ClipboardList size={24} className="text-[#3ed494]" />
                </div>
                <span className="text-lg">Modern Projects</span>
              </div>

              <div className="flex items-center gap-4 text-[#1a7a54] font-bold">
                <div className="p-2 bg-[#e8fbf3] rounded-lg border border-[#cff6e5]">
                  <UserCheck size={24} className="text-[#3ed494]" />
                </div>
                <span className="text-lg">Industry Level</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ANIMATED IMAGE AND CIRCLES */}
          <motion.div 
            initial={{ opacity: 0, y: 200 }} 
            animate={{ opacity: 1, y: 0 }}    
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center items-center min-h-[500px]"
          >
            {/* Student Image */}
            <div className="relative w-full max-w-[500px] h-[450px] md:h-[650px] z-20">
              <Image
                src="/hero.webp" // Apni image check kar lena
                alt="Student holding book"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Top Leaves (Decorative)
      <div className="absolute top-4 left-1/4 opacity-40">
        <svg width="80" height="40" viewBox="0 0 80 40" className="text-[#3ed494] fill-current">
          <path d="M0 40C20 0 40 0 40 0C40 0 60 0 80 40H0Z" />
        </svg>
      </div>
      <div className="absolute top-4 right-1/4 opacity-40 scale-x-[-1]">
        <svg width="80" height="40" viewBox="0 0 80 40" className="text-[#3ed494] fill-current">
          <path d="M0 40C20 0 40 0 40 0C40 0 60 0 80 40H0Z" />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;