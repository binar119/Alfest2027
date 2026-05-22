"use client";

import React from "react";
import Link from "next/link";
import ContactWidget from "../../components/ContactWidget";


export default function CompetitionsPage() {
  // CONFIG PENDAFTARAN & GUIDEBOOK
  const REGISTRATION_URL = "https://tally.so/r/YOUR_ID_HERE"; 
  // Menggunakan file lokal di folder public/ agar langsung terbuka di PDF viewer browser secara instan
  const GUIDEBOOK_URL = "/guidebook.pdf"; 

  return (
    <main className="min-h-screen w-full bg-bg-main text-white relative overflow-x-hidden">
      
      {/* ================= 1. HERO CTA SECTION ================= */}
      {/* Ditambahkan pt-24 agar konten tidak menabrak navbar desktop yang sticky */}
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-6 pt-32 pb-12 overflow-hidden">
      
        
        {/* GAMBAR BACKGROUND HERO BARU (Membaca public/competition_hero.jpg) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/competition_hero.jpg"
            alt="Alfest Competitions Hero"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Overlay gelap agar teks emas di atasnya kontras dan menyala */}
          <div className="absolute inset-0 bg-bg-main/85 backdrop-blur-xs" />
        </div>

        {/* Dekorasi Pendaran Cahaya Emas Lembut */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0" />

        {/* Konten Utama Container */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-4 md:gap-6 transform-gpu">
          
          {/* Subtitle Kecil (Diberi margin top sedikit agar makin renggang dari navbar) */}
          <p className="text-gold text-xs md:text-sm font-display font-medium tracking-[0.4em] uppercase mt-4">
            Alfest 2027 Arena
          </p>

          {/* Judul Besar Halaman */}
          <div className="filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] select-none">
            <h1 
              className="font-display text-4xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-gold-shine py-1"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              COMPETITIONS
            </h1>
          </div>

          {/* Deskripsi */}
          <p className="text-text-muted text-sm md:text-base font-sans max-w-xl leading-relaxed tracking-wide opacity-90">
            Tunjukkan bakat terbaikmu, taklukkan setiap tantangan, dan rebut tahta juara. Pendaftaran telah resmi dibuka untuk seluruh sekolah di tanah air.
          </p>

          {/* ====== GRUP TOMBOL CTA ACTION ====== */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center transform-gpu">
            
            {/* TOMBOL 1: REGISTER NOW */}
            <div className="relative group transform-gpu w-full sm:w-auto">
              {/* Glow Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-light rounded-full blur-md opacity-30 group-hover:opacity-80 group-hover:blur-xl transition duration-500 transform-gpu pointer-events-none" />
              
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                /* Perbaikan Utama: Ditambahkan overflow-hidden agar kilatan cahaya putih tidak offset bocor keluar bodi tombol */
                className="relative flex items-center justify-center bg-gradient-to-r from-gold via-gold-light to-gold text-bg-main font-display font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-10 py-4 md:px-12 md:py-4.5 rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.2)] hover:shadow-[0_15px_40px_rgba(240,201,107,0.4)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 active:translate-y-0 select-none cursor-pointer overflow-hidden w-full sm:w-auto"
              >
                Register Now
                {/* Efek Kilatan Cahaya Putih (Sekarang terkurung aman) */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_0.8s_ease-in-out] transform-gpu" />
              </a>
            </div>

            {/* TOMBOL 2: DOWNLOAD GUIDEBOOK (BARU & OPTIMAL) */}
            <a
              href={GUIDEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-gold/40 text-gold hover:text-bg-main bg-transparent hover:bg-gold px-10 py-4 md:px-12 md:py-4.5 rounded-full font-display font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-[0_10px_25px_rgba(201,168,76,0.2)] w-full sm:w-auto cursor-pointer"
            >
              Guidebook
            </a>

          </div>

          {/* Catatan Kaki Kecil di bawah Tombol */}
          <p className="text-[10px] text-text-muted/60 tracking-widest uppercase mt-4">
            * Silakan unduh atau baca buku panduan sebelum mengisi formulir
          </p>

        </div>

        {/* Indikator Panah Scroll ke Bawah */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-10">
          <span className="text-[9px] tracking-[0.3em] uppercase text-text-muted font-sans font-medium">
            Explore Categories
          </span>
          <span className="text-xs text-gold animate-[bounce_2s_infinite]">
            ↓
          </span>
        </div>

      </section>

      {/* ================= 2. SECTION KATEGORI (PLACEHOLDER) ================= */}
      <section id="next-section" className="w-full bg-bg-card/20 min-h-[50vh] relative z-10 border-t border-white/5 flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-text-muted text-xs tracking-widest uppercase italic">
            
          </p>
        </div>
      </section>
      <ContactWidget />

    </main>

  );
  
}