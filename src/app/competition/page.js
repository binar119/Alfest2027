"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactWidget from "../../components/ContactWidget";
import AlimpiadCard from "../../components/AlimpiadCard"
// ============================================================================
// 1A. AREA EDIT DATA LOMBA ALIMPIAD (9 LOMBA - PLACEHOLDER)
// ============================================================================
const daftarLombaALIMPIAD = [
  {
    cabang: "PIDATO",
    description: "Jadilah singa podium!!!.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_pidato.webp"
  },
  {
    cabang: "SPEECH",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 2.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_speech.webp"
  },
  {
    cabang: "MHQ",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 3.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_mhq.jpg"
  },
  {
    cabang: "PUISI",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 4.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_puisi.jpg"
  },
  {
    cabang: "CIPTA CERPEN",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 5.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_cerpen.jpg"
  },
  {
    cabang: "MTQ",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 6.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_mtq.jpg"
  },
  {
    cabang: "ADZAN",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 7.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_adzan.jpg"
  },
  {
    cabang: "ALBINAA CERDAS CERMAT",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 8.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_acc.jpg"
  },
  {
    cabang: "POSTER",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 9.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_poster.jpg",
  },
  {
    cabang: "STORY TELLING",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 9.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_story.jpg"
  },
  {
    cabang: "ALBINAA SCIENCE EXHIBITION",
    description: "Deskripsi placeholder untuk cabang lomba Alimpiad 9.",
    link_logo: "/placeholder.png",
    link_foto: "/cover_ase.webp"
  }
];

// ============================================================================
// 1B. AREA EDIT DATA LOMBA ALYMPIC (EDIT KONTEN DI SINI)
// ============================================================================
const daftarLombaALMPIC = [
  {
    cabang: "Cipta & Baca Puisi",
    description: "Ajang unjuk bakat dalam merangkai kata-kata indah yang orisinil dan bermakna dalam, serta mengekspresikannya melalui pembacaan puisi.",
    link_logo: "/poetry.png", 
    link_foto: "/cover_poetry.jpg"
  },
  {
    cabang: "Matematika",
    description: "Kompetisi adu logika angka, geometri, dan pemecahan masalah numerik tingkat lanjut yang menantang kecepatan berpikir kritis.",
    link_logo: "/math.png",
    link_foto: "/cover_math.jpg"
  },
  {
    cabang: "Sains IPA",
    description: "Eksplorasi fenomena alam, biologi dasar, dan hukum fisika dasar sekitar kita. Menantang para peneliti cilik membedah rahasia sains.",
    link_logo: "/science.png",
    link_foto: "/cover_science.jpg"
  },
  {
    cabang: "Coding Kids",
    description: "Tantangan logika algoritma menggunakan blok visual programming pemula. Buat game edukasi atau animasi kreatif pertamamu.",
    link_logo: "/coding.png",
    link_foto: "/cover_coding.jpg"
  },
  {
    cabang: "Da'i Cilik",
    description: "Wadah syiar dakwah kreatif berdurasi pendek. Menyalurkan bakat retorika publik dan menanamkan nilai-nilai islami luhur.",
    link_logo: "/dai.png",
    link_foto: "/cover_dai.jpg"
  },
  {
    cabang: "MHQ",
    description: "Uji kelancaran, tajwid, fashahah, serta keindahan lantunan suara dalam menghafal juz-juz Al-Qur'an pilihan.",
    link_logo: "/mhq.png",
    link_foto: "/cover_mhq.jpg"
  },
  {
    cabang: "Cerdas Cermat",
    description: "Kompetisi beregu yang menguji wawasan umum seputar kebudayaan, sejarah perjuangan bangsa, geografi dasar.",
    link_logo: "/ccn.png",
    link_foto: "/cover_ccn.jpg"
  },
  {
    cabang: "Story Telling",
    description: "Lomba bercerita dalam bahasa Inggris. Mengembangkan kemampuan bahasa asing, ekspresi teatrikal, serta gestur tubuh.",
    link_logo: "/story.png",
    link_foto: "/cover_story.jpg"
  },
  {
    cabang: "Menggambar",
    description: "Salurkan imajinasi visual tanpa batas di atas kertas. Penilaian berdasarkan orisinalitas ide, komposisi warna, dan kerapian.",
    link_logo: "/art.png",
    link_foto: "/cover_art.jpg"
  },
  {
    cabang: "Menulis Cerpen",
    description: "Kompetisi merangkai jalinan kisah fiksi pendek yang kreatif, emosional, dan inspiratif sesuai dengan tema besar.",
    link_logo: "/cerpen.png",
    link_foto: "/cover_cerpen.jpg"
  },
  {
    cabang: "Solo Vocal",
    description: "Ajang unjuk keindahan vokal tunggal dalam membawakan lagu-lagu bernuansa islami atau nasyid.",
    link_logo: "/vocal.png",
    link_foto: "/cover_vocal.jpg"
  }
];

// ============================================================================
// 2. KOMPONEN CARD LOMBA SD (FULL PHOTO, HOVER ONLY, 2 KOLOM DI HP)
// ============================================================================
function CompetitionCard({ cabang, description, link_logo, link_foto, onOpenModal }) {
  // Hubungkan state untuk memantau status error gambar
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <div 
      onClick={() => onOpenModal({ cabang, description })}
      className="group relative w-full h-48 md:h-72 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(201,168,76,0.25)] transition-all duration-500 ease-out flex flex-col justify-end bg-neutral-900"
    >
      {/* Kondisional Render: Jika Gambar Error, Tampilkan Komponen Cadangan */}
      {imgError ? (
        <div className="absolute inset-0 bg-linear-to-tr from-[#111c36] to-bg-main flex items-center justify-center text-text-muted/40 text-[10px] md:text-xs font-mono">
          Image Cover
        </div>
      ) : (
        <img 
          src={link_foto} 
          alt={`Cover ${cabang}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={() => setImgError(true)}
        />
      )}
      
      {/* Gradasi Gelap Biar Teks Keliatan */}
      <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Logo Kecil Melayang */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 p-1 md:p-1.5 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:border-gold/40">
        {logoError ? (
          <span className="text-xs md:text-lg">🏆</span>
        ) : (
          <img 
            src={link_logo} 
            alt={`Logo ${cabang}`}
            className="w-full h-full object-contain filter drop-shadow-sm"
            onError={() => setLogoError(true)}
          />
        )}
      </div>

      {/* Konten Teks */}
      <div className="relative z-10 p-3 md:p-5 transform transition-transform duration-500 ease-out group-hover:-translate-y-1 md:group-hover:-translate-y-2">
        <h3 className="font-display font-bold text-sm md:text-xl text-text-main group-hover:text-gold transition-colors leading-tight drop-shadow-md">
          {cabang}
        </h3>
        <p className="text-text-muted text-[10px] md:text-xs font-sans mt-1 md:mt-2 line-clamp-2 md:line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// 3. PAGE UTAMA KOMPETISI
// ============================================================================
export default function CompetitionsPage() {
  const REGISTRATION_URL = "https://tally.so/r/YOUR_ID_HERE"; 
  const GUIDEBOOK_URL = "/guidebook.pdf"; 

  // State untuk mengontrol data popup modal lomba (Dipakai bareng Alimpiad & Alympic)
  const [activeModal, setActiveModal] = useState(null);

  return (
    <main className="min-h-screen w-full bg-bg-main text-white relative overflow-x-hidden">
      
      {/* ================= 1. HERO CTA SECTION ================= */}
      <section className="relative h-[75vh] md:h-[82vh] w-full flex flex-col items-center justify-center text-center px-6 pt-16 pb-6 overflow-hidden">
        
        {/* GAMBAR BACKGROUND HERO BARU */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/competition_hero.webp"
            alt="Alfest Competitions Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-bg-main/85 backdrop-blur-xs" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-2 md:gap-3 transform-gpu">
          <p className="text-gold text-xs md:text-sm font-display font-medium tracking-[0.4em] uppercase">
            Alfest 2027 Arena
          </p>

          <div className="filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] select-none">
            <h1 
              className="font-display text-4xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-light to-gold animate-gold-shine py-1"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              COMPETITIONS
            </h1>
          </div>

          <p className="text-text-muted text-sm md:text-base font-sans max-w-xl leading-relaxed tracking-wide opacity-90">
            Tunjukkan bakat terbaikmu, taklukkan setiap tantangan, dan rebut tahta juara. Pendaftaran telah resmi dibuka untuk seluruh sekolah di tanah air.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center transform-gpu">
            <div className="relative group transform-gpu w-full sm:w-auto">
              <div className="absolute -inset-1 bg-linear-to-r from-gold to-gold-light rounded-full blur-md opacity-30 group-hover:opacity-80 group-hover:blur-xl transition duration-500 transform-gpu pointer-events-none" />
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center bg-linear-to-r from-gold via-gold-light to-gold text-bg-main font-display font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-10 py-4 md:px-12 md:py-4.5 rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.2)] hover:shadow-[0_15px_40px_rgba(240,201,107,0.4)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 active:translate-y-0 select-none cursor-pointer overflow-hidden w-full sm:w-auto"
              >
                Register Now
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_0.8s_ease-in-out] transform-gpu" />
              </a>
            </div>

            <a
              href={GUIDEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-gold/40 text-gold hover:text-bg-main bg-transparent hover:bg-gold px-10 py-4 md:px-12 md:py-4.5 rounded-full font-display font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-[0_10px_25px_rgba(201,168,76,0.2)] w-full sm:w-auto cursor-pointer"
            >
              Guidebook
            </a>
          </div>

          <p className="text-[10px] text-text-muted/60 tracking-widest uppercase mt-4">
            * Silakan unduh atau baca buku panduan sebelum mengisi formulir
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-10">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-light font-sans font-medium">
            Explore Categories
          </span>
          <span className="text-md text-gold animate-[bounce_2s_infinite]">
            ↓
          </span>
        </div>
      </section>
      <AlimpiadCard/>
      {/* ================= 2. SECTION ALIMPIAD (GRID LOMBA BARU) ================= */}
      <section id="arena-alimpiad" className="w-full bg-linear-to-b from-bg-main to-[#060a14] py-12 md:py-16 px-4 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Segment ALIMPIAD */}
          <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-[#0f1a35] border-2 border-gold p-3 md:p-4 shadow-[0_0_30px_rgba(201,168,76,0.2)] mb-4 flex items-center justify-center">
              <img 
                src="/logo_olimpiade_smp.png" 
                alt="Logo ALIMPIAD" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<span class="text-2xl md:text-3xl">🏆</span>`;
                }}
              />
            </div>
            <span className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">Tingkat Menengah</span>
            <h2 className="text-2xl md:text-5xl font-bold font-display text-text-main mt-1 tracking-wider" style={{ fontFamily: "var(--font-cinzel)" }}>
              ALIMPIAD Ilmiah
            </h2>
            <div className="w-12 md:w-16 h-[1px] bg-gold/30 mx-auto mt-4" />
          </div>

          {/* GRID RENDER CARD LOMBA ALIMPIAD */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {daftarLombaALIMPIAD.map((lomba, index) => (
              <CompetitionCard 
                key={index}
                cabang={lomba.cabang}
                description={lomba.description}
                link_logo={lomba.link_logo}
                link_foto={lomba.link_foto}
                onOpenModal={(data) => setActiveModal(data)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. SECTION ALYMPIC SD (GRID LOMBA) ================= */}
      <section id="arena-lomba" className="w-full bg-linera-to-b from-[#060a14] to-bg-main py-12 md:py-16 px-4 md:px-12 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Segment ALYMPIC */}
          <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-16">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-[#0f1a35] border-2 border-gold p-3 md:p-4 shadow-[0_0_30px_rgba(201,168,76,0.2)] mb-4 flex items-center justify-center">
              <img 
                src="/logo_olimpiade_sd.png" 
                alt="Logo ALYMPIC SD" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<span class="text-2xl md:text-3xl">🎓</span>`;
                }}
              />
            </div>
            <span className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">Tingkat Sekolah Dasar</span>
            <h2 className="text-2xl md:text-5xl font-bold font-display text-text-main mt-1 tracking-wider" style={{ fontFamily: "var(--font-cinzel)" }}>
              ALYMPIC (SD) Ilmiah
            </h2>
            <div className="w-12 md:w-16 h-[1px] bg-gold/30 mx-auto mt-4" />
          </div>

          {/* GRID RENDER CARD LOMBA SD */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {daftarLombaALMPIC.map((lomba, index) => (
              <CompetitionCard 
                key={index}
                cabang={lomba.cabang}
                description={lomba.description}
                link_logo={lomba.link_logo}
                link_foto={lomba.link_foto}
                onOpenModal={(data) => setActiveModal(data)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. MODAL POPUP DETAIL LOMBA ================= */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 backdrop-blur-md bg-black/70 ${
          activeModal ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setActiveModal(null)}
      >
        <div
          className={`bg-bg-main border border-gold/20 w-full max-w-lg p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 transform ${
            activeModal ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Header Modal */}
          <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-gold text-[10px] tracking-widest uppercase font-bold">Detail Cabang Lomba</span>
              <h3 className="text-text-main font-display font-bold text-xl md:text-2xl tracking-wide mt-0.5">
                {activeModal?.cabang}
              </h3>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="text-text-muted hover:text-white text-lg p-1 bg-white/5 hover:bg-white/10 rounded-lg h-8 w-8 flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Isi Deskripsi Lengkap */}
          <div className="space-y-4">
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans whitespace-pre-line">
              {activeModal?.description}
            </p>
          </div>

          {/* Footer Modal Action */}
          <div className="mt-8 pt-4 border-t border-white/5 flex justify-end gap-3">
            <button
              onClick={() => setActiveModal(null)}
              className="bg-white/5 hover:bg-white/10 text-text-main border border-white/10 text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              Tutup
            </button>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-gold to-gold-light text-bg-main text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-gold/20 hover:scale-[1.02]"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* ================= 5. WIDGET KONTAK ================= */}
      <ContactWidget />

    </main>
  );
}