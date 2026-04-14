"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const feedbackData = [
  { 
    id: 1, 
    text: "I attended the 7-day Python bootcamp by Kodyfier, and it was a great learning experience. The bootcamp covered essential topics and we even got to work on two exciting projects. The instructors were very helpful and provided a comprehensive understanding of these concepts and practical hands-on experience. I'm really looking forward to applying these newfound skills in future projects and real-world applications.", 
    name: "Abhishek", role: "Student" 
  },
  { 
    id: 2, 
    text: "I have enrolled in this 7 days bootcamp. Rather than theoretical they are focused on real life based problems. Integrated the lecture with real time scenario. The tutor was peaceful and best. Every concept was explained with live examples which made it very easy to grasp. The curriculum is perfectly structured for beginners as well as intermediate learners. Highly recommended for everyone!", 
    name: "@Mdaquil2771", role: "Student" 
  },
  { 
    id: 3, 
    text: "The way of teaching is very practical and easy to understand. I highly recommend Kodyfier for anyone looking to start their coding journey with solid foundations. They leave no stone unturned in equipping their students with a strong programming foundation. The environment was very interactive and the support staff was always available to clear any doubts instantly.", 
    name: "Sneha", role: "Student" 
  },
  { 
    id: 4, 
    text: "Amazing experience! The projects were challenging but very rewarding. The instructors are always there to help you out if you get stuck anywhere. Practical learning at its best. I have learned more in these 7 days than I did in months of self-study. The community is great and you get to interact with like-minded individuals.", 
    name: "Rahul", role: "Student" 
  },
  { 
    id: 5, 
    text: "This bootcamp changed my perspective on programming. I feel much more confident in my Python skills now. Thank you Kodyfier team for such a structured course! The resources provided were top-notch and the project-based approach is what sets this bootcamp apart from others. I would definitely join their future advanced courses.", 
    name: "Priya", role: "Student" 
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = feedbackData.length - 2; 

  const next = () => { if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1); };
  const prev = () => { if (currentIndex > 0) setCurrentIndex(currentIndex - 1); };

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      
      {/* --- LEFT MASKING DIV (Cards iske peeche jayenge) --- */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] md:w-[280px] bg-[#eaf7f0] z-30"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="relative z-40 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:ml-64">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
              Students Feedback <br /> & Perspectives
            </h2>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={prev} className={`transition-all ${currentIndex === 0 ? 'text-slate-300' : 'text-[#4ade80] hover:scale-110'}`}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
            </button>
            <button onClick={next} className={`transition-all ${currentIndex === maxIndex ? 'text-slate-300' : 'text-[#4ade80] hover:scale-110'}`}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12H19M19 12L12 5M19 12L12 19"/></svg>
            </button>
          </div>
        </div>

        {/* --- SLIDER CONTAINER --- */}
        <div className="relative z-10 lg:ml-40">
          <div className="overflow-visible">
            <motion.div 
              animate={{ x: `-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2))}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="flex gap-8 items-center" 
            >
              {feedbackData.map((item, index) => {
                const isBig = index % 2 !== 0;

                return (
                  <div key={item.id} className="min-w-full md:min-w-[calc(50%-16px)] z-10">
                    <div 
                      className={`bg-[#eaf7f0] rounded-[2.5rem] p-6 md:p-8 relative shadow-sm flex flex-col transition-all duration-500
                        ${isBig ? 'h-[480px]' : 'h-[380px]'}
                      `}
                    >
                      {/* 1. Quotes Icon - Text ke bilkul upar */}
                      <div className="text-[#4ade80] mb-2">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12M5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12"/>
                        </svg>
                      </div>

                      {/* 2. Feedback Text - Top se start aur Card ko bharne ke liye grow karega */}
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow overflow-hidden line-clamp-[10] md:line-clamp-[12]">
                        {item.text}
                      </p>

                      {/* Spacer taaki text niche wale profile box se na takraye */}
                      <div className="h-16"></div>

                      {/* 3. White Profile Cutout (Bottom Left) */}
                      <div className="absolute bottom-0 left-0 bg-white rounded-tr-[50px] p-4 pr-10 flex items-center gap-3 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/150?u=${item.id}`} alt="" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-[13px]">{item.name}</h4>
                          <p className="text-slate-500 text-[11px] uppercase">{item.role}</p>
                        </div>
                      </div>

                      {/* Stars (Bottom Right) */}
                      <div className="absolute bottom-6 right-8 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12 md:ml-40">
          {feedbackData.map((_, i) => (
            <div key={i} className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-[#4ade80]' : 'w-2.5 bg-slate-300'}`}></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;