"use client";

import React, { useState } from "react";

// ================= COMPONENT: CARD ALIMPIAD FULL PHOTO =================
function AlimpiadCard({ cabang, description, link_foto, delay, onClick }) {
  // Menggunakan state untuk menangani error gambar agar tidak merusak Virtual DOM React
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative w-full h-full overflow-hidden rounded-2xl cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(201,168,76,0.25)] transition-all duration-700 ease-out"
      // Menggunakan animasi idle bob yang didefinisikan di CSS/Theme, 
      // ditambah delay dinamis agar Futsal dan Basket geraknya tidak kaku/bersamaan
      style={{ animation: `var(--animation-idle-bob)`, animationDelay: delay }}
    >
      {/* Gambar Cover Full */}
      {!imageError ? (
        <img
          src={link_foto}
          alt={`Cover ${cabang}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[#111c36] flex items-center justify-center text-text-muted/30 font-mono z-0">
          Image {cabang}
        </div>
      )}

      {/* Gradasi Overlay (Transparan di atas, pekat di bawah untuk teks) */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Konten Teks */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 transform transition-transform duration-500 ease-out group-hover:-translate-y-3">
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
  // Ganti tautan di bawah ini dengan URL pendaftaran Tally Anda yang valid
  const REGISTRATION_URL = "https://tally.so/r/YOUR_ID_HERE";

  const alimpiadData = [
    {
      cabang: "Futsal",
      description: "Tunjukkan kelincahan, kerja sama tim, dan sportivitas tinggi di lapangan hijau. Ajang bergengsi untuk membuktikan siapa penguasa arena sesungguhnya dan membawa pulang trofi kebanggaan Al Binaa.",
      link_foto: "/cover_futsal.jpg", // Pastikan file gambar memiliki resolusi tinggi
      delay: "0s", // Mulai animasi langsung
    },
    {
      cabang: "Basketball",
      description: "Kompetisi adu taktik, kecepatan, dan ketepatan. Tembus pertahanan lawan, cetak poin terbaikmu melalui slam dunk memukau, dan jadilah raja lapangan di panggung megah Alfest 2027.",
      link_foto: "/cover_basket.jpg",
      delay: "2s", // Animasi terlambat 2 detik agar gerakannya berirama silang dengan Futsal
    },
  ];

  return (
    <section className="w-full bg-bg-main px-4 py-10 md:px-6 md:py-16 flex flex-col items-center">
      {/* Judul Section (Opsional, bisa dihapus jika tidak perlu) */}
      <div className="mb-10 text-center z-10 relative">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
          Alimpiad <span className="text-gold">SPORT</span>
        </h2>
        <p className="text-text-muted mt-2 font-sans tracking-wide">
          Pertarungan Fisik, Taktik, dan Sportivitas
        </p>
      </div>

      {/* Container Kartu: Flex dengan tinggi dominan dan jarak (gap) yang rapat */}
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] h-[60vh] md:h-[75vh] gap-3 md:gap-4">
        {alimpiadData.map((lomba, index) => (
          <div key={index} className="w-full md:w-1/2 h-full">
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