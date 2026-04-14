"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* --- NAVBAR MAIN --- */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300`}
        style={{ 
          zIndex: 9999, // Sabse upar
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)", // PC ke liye
          WebkitBackdropFilter: "blur(10px)", // PHONE (Safari/iOS) ke liye zaruri hai
          padding: scrolled ? "10px 0" : "20px 0",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="relative h-10 w-36 block">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              fill 
              className="object-contain" 
              priority 
            />
          </Link>

          {/* Desktop Links (PC par dikhega) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-800 font-bold hover:text-[#3ed494] transition-colors">
                {link.name}
              </Link>
            ))}
            <button className="bg-[#1a1d2e] text-white px-7 py-2.5 rounded-xl font-bold shadow-lg">
              Get Started
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON (Phone par khulne ke liye) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="p-3 bg-white/50 border border-white/20 rounded-xl text-black shadow-sm active:scale-95 transition-all"
              style={{ pointerEvents: 'auto' }}
            >
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY (Ye hai असली जादू) --- */}
      <div 
        className={`fixed inset-0 w-full h-full transition-all duration-300 ease-in-out`}
        style={{ 
          zIndex: 100000, 
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        {/* Backdrop (Kala dhundhla parda) */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel (Left Side se Slide hokar aayega) */}
        <div 
          className={`absolute inset-y-0 left-0 w-[280px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Sidebar Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-50">
            <div className="relative h-8 w-28">
              <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 bg-gray-100 rounded-full text-gray-500"
            >
              <X size={26} />
            </button>
          </div>

          {/* Nav Links inside Sidebar */}
          <div className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex justify-between items-center p-4 text-gray-800 font-black text-xl active:bg-emerald-50 active:text-[#3ed494] rounded-2xl transition-all"
              >
                {link.name}
                <ChevronRight size={20} className="text-gray-300 opacity-50" />
              </Link>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-50">
            <button className="w-full bg-[#3ed494] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-100">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;