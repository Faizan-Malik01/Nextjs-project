"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // npm install react-icons

const QuickSupportSection = () => {
  const contactData = [
    {
      title: "VISIT US",
      info: "Pune, Maharashtra",
      icon: <FaMapMarkerAlt size={32} />,
    },
    {
      title: "CALL US",
      info: "+91 9518369954",
      icon: <FaPhoneAlt size={32} />,
    },
    {
      title: "WHATSAPP US",
      info: "+91 9518369954",
      icon: <FaWhatsapp size={32} />,
    },
    {
      title: "MAIL US",
      info: "contact@kodyfier.com",
      icon: <FaEnvelope size={32} />,
    },
  ];

  return (
    // bg-[#eaf7f0] aur pt-0 se ye pichle section se bilkul chipak jayega
    <section className="relative w-full bg-[#eaf7f0] pt-0 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-[44px] font-bold text-slate-900 mb-2">
            Quick Support
          </h2>
          <p className="text-slate-600 text-lg">
            You can get all the contact information
          </p>
        </motion.div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              // Card Design: Border #4ade80 aur Rounded Corners
              className="bg-transparent border border-[#4ade80] rounded-2xl p-10 min-h-[220px] flex flex-col justify-start hover:bg-white/30 transition-all duration-300 group shadow-sm"
            >
              {/* Icon Section */}
              <div className="text-[#4ade80] mb-6 group-hover:scale-110 transition-transform origin-left">
                {card.icon}
              </div>

              {/* Title Section */}
              <h3 className="text-[#4ade80] text-xl font-bold tracking-wider mb-4">
                {card.title}
              </h3>

              {/* Info Section */}
              <p className="text-slate-700 text-lg font-medium">
                {card.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSupportSection;