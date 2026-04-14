"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const courses = [
  { id: 1, title: "MySQL Master Classes", price: "4999₹", oldPrice: "19999₹", discount: "92% off", image: "/mysql.png" },
  { id: 2, title: "Python Online Master Class", price: "4999₹", oldPrice: "19999₹", discount: "75% off", image: "/python.png" },
  { id: 3, title: "Web Development", price: "5999₹", oldPrice: "15999₹", discount: "60% off", image: "/web.png" },
  { id: 4, title: "Full Stack Java", price: "7999₹", oldPrice: "25999₹", discount: "70% off", image: "/java.png" },
  { id: 5, title: "UI/UX Design", price: "3999₹", oldPrice: "12999₹", discount: "80% off", image: "/uiux.png" },
];

const SkillsSection = () => {
  const swiperRef = useRef(null);

  // Animation: Niche se upar slide hona
  const slideUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.8, ease: "easeOut" }
  } as const;

  return (
    <section className="py-24 bg-white overflow-hidden relative min-h-[800px]">
      
      {/* 1. LEFT SIDE BACKGROUND BLOCK (Screenshot jaisa) */}
      <div className="absolute top-0 left-0 w-[30%] h-[500px] bg-[#e8fbf3] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* items-start se left content upar rahega aur right cards niche */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT CONTENT: Isko negative margin se aur upar kiya hai */}
          <motion.div 
            {...slideUp}
            className="lg:w-[35%] pt-10 lg:mt-[-40px] relative z-10"
          >
            <h2 className="text-[42px] md:text-[58px] font-extrabold text-[#1a1d2e] leading-[1.1] tracking-tight">
              What <span className="text-[#3ed494]">Skills</span> Would You Like To <br />
              <span className="relative inline-block mt-3">
                Acquire?
                {/* Underline Patti */}
                <span className="absolute -bottom-4 left-[-15%] w-[130%] h-[7px] bg-[#3ed494] rounded-full" />
              </span>
            </h2>
          </motion.div>

          {/* RIGHT SIDE: SLIDER SECTION */}
          <div className="lg:w-[65%] w-full pt-20"> {/* Cards ko thoda niche push kiya pt-20 se */}
            
            {/* Navigation Arrows (Top Right of slider area) */}
            <div className="flex justify-end gap-6 mb-8 pr-10">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-[#3ed494] opacity-30 hover:opacity-100 transition-all"
              >
                <ArrowLeft size={38} strokeWidth={2.5} />
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="text-[#3ed494] hover:scale-110 transition-transform"
              >
                <ArrowRight size={38} strokeWidth={2.5} />
              </button>
            </div>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              breakpoints={{
                768: { slidesPerView: 2 }, // Hamesha 2 cards show honge
              }}
              className="!overflow-visible"
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id}>
                  <motion.div 
                    {...slideUp}
                    className="bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-50 overflow-hidden"
                  >
                    {/* Course Image */}
                    <div className="relative h-64 w-full bg-gray-50 flex flex-col items-center">
                        <div className="absolute top-4 z-20">
                           <Image src="/logo.png" width={80} height={30} alt="logo" className="object-contain" />
                        </div>
                        <div className="w-full h-full p-4">
                           <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
                             <Image src={course.image} alt={course.title} fill className="object-cover" />
                           </div>
                        </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="px-6 py-10 relative">
                      {/* Ribbon Title */}
                      <div className="absolute -top-7 left-6 bg-[#3ed494] text-white py-2.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-emerald-100 uppercase tracking-wide">
                        {course.title}
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-4">
                            <span className="text-[42px] font-black text-[#1a1d2e] leading-none">
                              {course.price}
                            </span>
                            <span className="bg-[#e8fbf3] text-[#3ed494] text-[11px] font-bold px-2 py-1.5 rounded-md border border-emerald-50">
                              {course.discount}
                            </span>
                          </div>
                          <span className="text-[#3ed494]/60 line-through text-2xl font-bold">
                            {course.oldPrice}
                          </span>
                        </div>

                        {/* Arrow Icon Box */}
                        <div className="bg-[#e8fbf3] p-3.5 rounded-xl text-[#3ed494] hover:bg-[#3ed494] hover:text-white transition-all">
                           <MoveRight size={28} strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots at Bottom */}
            <div className="custom-pagination flex justify-center gap-3 mt-14" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e2e8f0;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #3ed494 !important;
          width: 15px;
          height: 15px;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;