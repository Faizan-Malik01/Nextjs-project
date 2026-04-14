"use client";
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    left: {
      title: "Comprehensive Curriculum",
      desc: "Our curriculum covers a wide range of programming languages, ensuring a holistic learning experience. From foundational concepts to advanced techniques, we leave no stone unturned in equipping our students with a strong programming foundation.",
    },
    right: {
      title: "Experienced Instructors",
      desc: "Our instructors are industry professionals with extensive experience in software development. They bring their real-world expertise into the classroom, delivering practical insights and best practices that go beyond textbooks.",
    },
  },
  {
    left: {
      title: "Flexible Learning Options",
      desc: "We understand the diverse needs of our students, which is why we offer both online and offline classes. Our interactive online platform allows for seamless virtual learning, while our well-equipped physical space provides a focused environment.",
    },
    right: {
      title: "Personalized Approach",
      desc: "We believe in recognizing the unique strengths and learning styles of each student. Our classes are kept small to facilitate individual attention and personalized guidance.",
    },
  },
];

const SetsUsApart = () => {
  return (
    <section className="py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            What<span className="relative inline-block px-2">
              <span className="relative z-10 text-[#2fb383]">Sets Us</span>
              <span className="absolute inset-0 bg-[#dcfce7] rounded-md -rotate-1"></span>
            </span> Apart  <br className="hidden md:block" /> And Project Services?
          </h2>
          <div className="w-64 h-2 bg-[#4ADE80] mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Invest in our coding education and project services and see the difference for yourself, we are committed to providing the best value for your money.
          </p>
        </div>

        {/* --- Timeline Container --- */}
        <div className="relative">
          {/* Central Vertical Line (Faint Green) */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[2px] bg-[#dcfce7] hidden md:block"></div>

          <div className="space-y-20 md:space-y-32">
            {timelineData.map((pair, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start justify-between">
                
                {/* --- LEFT CARD --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[42%] text-center md:text-right relative mb-12 md:mb-0"
                >
                  <div className="inline-block bg-[#82d9a9] px-8 py-3 rounded-lg mb-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800">{pair.left.title}</h3>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{pair.left.desc}</p>
                  
                  {/* Diagonal Connector Line (Left) */}
                  <div className="hidden md:block absolute -right-[15%] top-[55px] w-[15%] h-[2px] bg-[#82d9a9] origin-left rotate-[35deg]"></div>
                </motion.div>

                {/* --- CENTER NODE (CIRCLE) --- */}
                <div className="absolute left-1/2 top-[85px] transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                  <div className="w-8 h-8 bg-[#82d9a9] rounded-full border-4 border-white shadow-sm"></div>
                </div>

                {/* --- RIGHT CARD --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full md:w-[42%] text-center md:text-left relative"
                >
                  <div className="inline-block bg-[#82d9a9] px-8 py-3 rounded-lg mb-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800">{pair.right.title}</h3>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{pair.right.desc}</p>

                  {/* Diagonal Connector Line (Right) */}
                  <div className="hidden md:block absolute -left-[15%] top-[55px] w-[15%] h-[2px] bg-[#82d9a9] origin-right -rotate-[35deg]"></div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetsUsApart;