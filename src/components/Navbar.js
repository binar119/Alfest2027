"use client"; // Pastikan ada ini di paling atas jika menggunakan Next.js App Router

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-main/70 px-6 py-3 md:px-8 md:py-2 flex items-center justify-between md:justify-center">
      
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
      {/* - Di Mobile: Menjadi overlay menu dari atas (flex-col, absolute, full-width)
        - Di Desktop (md:): Kembali horizontal dan sejajar di tengah (md:flex-row, md:static, md:bg-transparent)
      */}
      <div className={`
        absolute md:static top-full left-0 w-full md:w-auto 
        bg-bg-main/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
        flex flex-col md:flex-row gap-2 md:gap-4 p-6 md:p-0
        transition-all duration-300 ease-in-out border-b border-text-muted/10 md:border-none
        ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 md:opacity-100 invisible md:visible -translate-y-4 md:translate-y-0"}
      `}>
        {["Home", "Competition", "Philanthropy", "Sponsorship"].map((item, i) => (
          <Link
            key={i}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)} // Tutup menu setelah link di-klik
            className="px-5 py-3 md:py-2 rounded-full text-text-main text-sm font-display font-medium uppercase tracking-widest text-center transition-all duration-300 ease-out hover:bg-bg-card/60 hover:text-gold-light hover:scale-105"
          >
            {item}
          </Link>
        ))}
      </div>

    </nav>
  );
}