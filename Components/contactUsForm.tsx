"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactUsForm = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      {/* Background Decorative Shape (Bottom light green wave) */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[40%] bg-[#eaf7f0] -z-0 rounded-tl-[100px] md:rounded-tl-[200px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Contact Us Form</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <form className="space-y-6">
              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#4ade80]/20 transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Mobile Number" 
                  className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#4ade80]/20 transition-all"
                />
              </div>

              {/* Row 2: Email */}
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#4ade80]/20 transition-all"
              />

              {/* Row 3: Message */}
              <textarea 
                rows="8" 
                placeholder="Write your message here.." 
                className="w-full p-4 bg-[#eaf7f0] border border-[#4ade80] rounded-xl outline-none text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#4ade80]/20 transition-all resize-none"
              ></textarea>

              {/* Send Button */}
              <button 
                type="submit" 
                className="px-10 py-3 bg-[#50c878] hover:bg-[#45b36a] text-slate-800 font-bold rounded-lg shadow-md transition-all duration-300"
              >
                Send
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Working on laptop" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              {/* Optional overlay to match the slight green tint in screenshot */}
              <div className="absolute inset-0 bg-[#4ade80]/10 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;