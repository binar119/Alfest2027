"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image Component

// ================= COMPONENT: CARD ALIMPIAD FULL PHOTO =================
function AlimpiadCard({ cabang, description, link_foto, delay, onClick }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative w-full h-full overflow-hidden rounded-2xl cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(201,168,76,0.25)] transition-all duration-700 ease-out"
      style={{ animation: `var(--animation-idle-bob)`, animationDelay: delay }}
    >
      {/* Background Image Container */}
      {!imageError ? (
        <Image
          src={link_foto}
          alt={`Cover ${cabang}`}
          fill // Replaces absolute layout styles
          sizes="(max-width: 768px) 100vw, 50vw" // Tells the browser the image spans full width on mobile, half width on desktop
          priority // Forces optimization engine to load this early for better LCP scores
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[#111c36] flex items-center justify-center text-text-muted/30 font-mono z-0">
          Image {cabang}
        </div>
      )}

      {/* Gradasi Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Konten Teks */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 transform transition-transform duration-500 ease-out group-hover:-translate-y-3 z-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-1 bg-gold rounded-full transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
          <h3 className="font-display text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
            {cabang}
          </h3>
        </div>
        
        <p className="text-text-main font-sans text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-xl">
          {description}
        </p>

        {/* Indikator Aksi */}
        <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300">
          <span>Daftar Sekarang</span>
          <span className="transform group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </div>
      </div>
    </div>
  );
}

// ================= SECTION UTAMA ALIMPIAD =================
export default function AlimpiadSection() {
  const REGISTRATION_URL = "https://tally.so/r/YOUR_ID_HERE";

  const alimpiadData = [
    {
      cabang: "Futsal",
      description: "Tunjukkan kelincahan, kerja sama tim, dan sportivitas tinggi di lapangan hijau. Ajang bergengsi untuk membuktikan siapa penguasa arena sesungguhnya dan membawa pulang trofi kebanggaan Al Binaa.",
      link_foto: "/cover_futsal.webp", 
      delay: "0s", 
    },
    {
      cabang: "Basketball",
      description: "Kompetisi adu taktik, kecepatan, dan ketepatan. Tembus pertahanan lawan, cetak poin terbaikmu melalui slam dunk memukau, dan jadilah raja lapangan di panggung megah Alfest 2027.",
      link_foto: "/cover_basket.webp",
      delay: "2s", 
    },
  ];

  return (
    <section className="w-full bg-bg-main px-4 py-10 md:px-6 md:py-16 flex flex-col items-center">
      <div className="mb-10 text-center z-10 relative">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
          Alimpiad <span className="text-gold">SPORT</span>
        </h2>
        <p className="text-text-muted mt-2 font-sans tracking-wide">
          Pertarungan Fisik, Taktik, dan Sportivitas
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1400px] h-auto md:h-[75vh] gap-6 md:gap-4">
        {alimpiadData.map((lomba, index) => (
          <div key={index} className="w-full h-[450px] md:h-full">
            <AlimpiadCard
              cabang={lomba.cabang}
              description={lomba.description}
              link_foto={lomba.link_foto}
              delay={lomba.delay}
              onClick={() => window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}