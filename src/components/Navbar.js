"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // 1. SAFE HYDRATION CHECK: Runs strictly AFTER the client DOM has mounted safely
  useEffect(() => {
    setMounted(true);
    
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentIsDark = root.classList.contains("dark");

    if (currentIsDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-main/50 px-6 py-4 md:px-8 md:py-2 flex items-center justify-between md:justify-center transition-colors duration-300">
      
      {/* BRAND / LOGO INDICATOR FOR MOBILE */}
      <div className="md:hidden text-text-main font-display font-bold tracking-wider text-sm">
        MENU
      </div>

      {/* RIGHT SIDE ALIGNMENT BLOCK FOR ACTIONS */}
      <div className="flex items-center gap-4 md:absolute md:right-8">
        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-text-muted/20 text-gold hover:text-gold-light hover:bg-bg-card/40 cursor-pointer transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {/* Prevent icon rendering until mounted to bypass SSR mismatch completely */}
          {!mounted ? (
            /* Default fallback icon during loading state */
            <div className="w-5 h-5 bg-transparent" />
          ) : isDark ? (
            /* Sun Icon */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" />
            </svg>
          ) : (
            /* Moon Icon */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* TOMBOL HAMBURGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer z-50 text-text-main"
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* MENU NAVIGASI */}
      <div className={`
        absolute md:static top-full left-0 w-full md:w-auto h-[100vh] md:h-auto
        bg-bg-main/98 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
        flex flex-col md:flex-row gap-1 md:gap-4 p-8 md:p-0
        transition-all duration-300 ease-in-out border-b border-text-muted/10 md:border-none
        ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 md:opacity-100 invisible md:visible -translate-y-4 md:translate-y-0"}
      `}>
        
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
            onClick={() => setIsOpen(false)}
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