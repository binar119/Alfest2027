"use client"; // Pastikan ada ini di paling atas jika menggunakan Next.js App Router

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-main/50 px-6 py-4 md:px-8 md:py-2 flex items-center justify-between md:justify-center">
      
      {/* BRAND / LOGO INDICATOR FOR MOBILE (Optional, helps balance the bar when menu is on the right/left) */}
      <div className="md:hidden text-text-main font-display font-bold tracking-wider text-sm">
        MENU
      </div>

      {/* 1. TOMBOL HAMBURGER (Hanya muncul di Mobile / Layar Kecil) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer z-50 text-text-main"
        aria-label="Toggle Menu"
      >
        {/* Garis Atas */}
        <span className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        {/* Garis Tengah */}
        <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        {/* Garis Bawah */}
        <span className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* 2. MENU NAVIGASI */}
      <div className={`
        absolute md:static top-full left-0 w-full md:w-auto h-[100vh] md:h-auto
        bg-bg-main/98 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
        flex flex-col md:flex-row gap-1 md:gap-4 p-8 md:p-0
        transition-all duration-300 ease-in-out border-b border-text-muted/10 md:border-none
        ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 md:opacity-100 invisible md:visible -translate-y-4 md:translate-y-0"}
      `}>
        
        {/* MOBILE ONLY NAVIGATION HEADER */}
        <div className="md:hidden block mb-6 non-selectable">
          <p className="text-xs font-display tracking-[0.2em] text-text-muted/60 uppercase font-semibold">
            Page Navigation
          </p>
          <div className="h-[1px] w-full bg-text-muted/20 mt-2" />
        </div>

        {["Home", "Competition", "Philanthropy", "Sponsorship"].map((item, i) => (
          <Link
            key={i}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)} // Tutup menu setelah link di-klik
            className="
              group flex items-center justify-between md:justify-center
              px-5 py-4 md:py-2 rounded-xl md:rounded-full 
              text-text-main text-base md:text-sm font-display font-medium uppercase tracking-widest 
              transition-all duration-300 ease-out 
              border-b border-text-muted/5 md:border-none
              hover:bg-bg-card/60 hover:text-gold-light md:hover:scale-105
            "
          >
            <span>{item}</span>
            
            {/* Mobile Arrow Indicator (Only visible on mobile screens inside the link row) */}
            <svg 
              className="w-4 h-4 md:hidden opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

    </nav>
  );
}