"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

const MasterMindsSection = () => {
  const masters = [
    {
      name: "Jay Shinde",
      role: "Founder & Director Kodyfier",
      image: "https://i.pravatar.cc/150?u=jay", // Apni image path yahan dalein
      desc: "Having 13 plus years of collective experience in Digital Marketing, Software and Web Development. Helped 200 plus clients from India and abroad to grow their businesses and trained 1000 plus students.",
    },
    {
      name: "Vinod Bahadur Thapa",
      role: "Founder & Director Kodyfier",
      image: "https://i.pravatar.cc/150?u=vinod", // Apni image path yahan dalein
      desc: "A Software Engineer & Youtuber. Having 7 plus years of collective experience in Software and Web Development.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section 1: MasterMinds --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-2">
            MasterMinds Behind Kodyfier
          </h2>
          <p className="text-slate-500 text-lg">
            You can get all the Member information
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {masters.map((master, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white border border-slate-100 rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                  <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Info Area */}
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-[26px] font-bold text-[#50c878] mb-1">{master.name}</h3>
                <p className="text-slate-600 font-semibold mb-4">{master.role}</p>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  {master.desc}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-4">
                  {[FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaDiscord].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 flex items-center justify-center bg-[#f1f5f9] text-[#334155] rounded-full hover:bg-[#50c878] hover:text-white transition-all transform hover:scale-110">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Section 2: Join With KodyFier --- */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Join With KodyFier
          </h2>
          <p className="text-slate-600 text-[17px] md:text-lg leading-relaxed text-justify md:text-left">
            Join us at Kodyfier and unlock your coding potential. Whether you aspire to develop cutting-edge 
            software applications, pursue a career in web development, or simply want to enhance your 
            problem-solving skills, we have the right program for you. Let us be your trusted partner 
            in your journey towards becoming a proficient programmer.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MasterMindsSection;