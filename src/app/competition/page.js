"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactWidget from "../../components/ContactWidget";

// ================= COMPONENT: CARD KOMPETISI PREMIUM (MODULAR) =================
function CompetitionCard({ cabang, description, link_logo, link_foto, onOpenModal }) {
  return (
    <div 
      onClick={() => onOpenModal({ cabang, description })}
      className="group relative bg-[#0a0f1e]/80 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(201,168,76,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col h-full bg-gradient-to-b hover:from-bg-card hover:to-[#0f1a35]"
    >
      {/* 1. SLOT FOTO COVER (Seperti Card Talkshow) */}
      <div className="relative h-44 w-full overflow-hidden shrink-0 bg-neutral-900">
        <img 
          src={link_foto} 
          alt={`Cover ${cabang}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback jika file gambar cover belum ditaruh di public/
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-tr from-[#111c36] to-bg-main flex items-center justify-center text-text-muted/40 text-xs font-mono">Image Cover Template</div>`;
          }}
        />
        {/* Overlay gradasi anggun di atas foto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. AREA KONTEN & SLOT LOGO */}
      <div className="p-5 flex flex-col flex-grow relative pt-8">
        
        {/* SLOT LOGO CABANG (Melayang memotong garis antara foto dan teks) */}
        <div className="absolute -top-7 left-5 w-14 h-14 rounded-xl bg-[#0a0f1e] border border-gold/30 p-2 shadow-md flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] transition-all duration-300 transform group-hover:scale-105">
          <img 
            src={link_logo} 
            alt={`Logo ${cabang}`}
            className="w-full h-full object-contain filter drop-shadow-sm"
            onError={(e) => {
              // Fallback jika file logo ikon belum ditaruh di public/
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `<span class="text-lg">🏆</span>`;
            }}
          />
        </div>

        {/* Nama Cabang Lomba */}
        <h3 className="font-display font-bold text-lg text-text-main group-hover:text-gold transition-colors tracking-wide">
          {cabang}
        </h3>

        {/* Cuplikan Deskripsi Pendek */}
        <p className="text-text-muted text-xs font-sans mt-2 leading-relaxed line-clamp-3 flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        {/* Garis aksi petunjuk klik */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-gold/70 group-hover:text-gold transition-colors">
          <span>Lihat Detail Lomba</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}

// ================= PAGE UTAMA KOMPETISI =================
export default function CompetitionsPage() {
  const REGISTRATION_URL = "https://tally.so/r/YOUR_ID_HERE"; 
  const GUIDEBOOK_URL = "/guidebook.pdf"; 

  // State untuk mengontrol data popup modal
  const [activeModal, setActiveModal] = useState(null);

  // ================= TEMPAT NYUNTIKIN / EDIT DATA CABANG LOMBA (11 Cabang) =================
  // Gampang banget, tinggal edit atau tambah isian object di dalam array ini aja!
  const daftarLombaALMPIC = [
    {
      cabang: "Cipta & Baca Puisi (Poetry)",
      description: "Ajang unjuk bakat dalam merangkai kata-kata indah yang orisinil dan bermakna dalam, serta mengekspresikannya melalui pembacaan puisi yang penuh penghayatan di panggung drama.",
      link_logo: "/poetry.png", 
      link_foto: "/cover_poetry.jpg"
    },
    {
      cabang: "Matematika Terintegrasi",
      description: "Kompetisi adu logika angka, geometri, dan pemecahan masalah numerik tingkat lanjut yang menantang kecepatan berpikir kritis dan ketepatan analisis para genius muda.",
      link_logo: "/math.png",
      link_foto: "/cover_math.jpg"
    },
    {
      cabang: "Sains IPA",
      description: "Eksplorasi fenomena alam, biologi dasar, dan hukum fisika dasar sekitar kita. Menantang para peneliti cilik untuk membedah rahasia sains melalui ujian teoretis interaktif.",
      link_logo: "/science.png",
      link_foto: "/cover_science.jpg"
    },
    {
      cabang: "Coding Kids (Scratch)",
      description: "Tantangan logika algoritma menggunakan blok visual programming pemula. Buat game edukasi atau animasi kreatif pertamamu untuk memukau para juri teknologi masa kini.",
      link_logo: "/coding.png",
      link_foto: "/cover_coding.jpg"
    },
    {
      cabang: "Da'i Cilik (Pidato Islami)",
      description: "Wadah syiar dakwah kreatif berdurasi pendek. Menyalurkan bakat retorika publik, meningkatkan kepercayaan diri, serta menanamkan nilai-nilai islami luhur sejak dini.",
      link_logo: "/dai.png",
      link_foto: "/cover_dai.jpg"
    },
    {
      cabang: "Musabaqah Hifzhil Qur'an (MHQ)",
      description: "Uji kelancaran, tajwid, fashahah, serta keindahan lantunan suara dalam menghafal juz-juz Al-Qur'an pilihan di hadapan dewan juri ahli demi meraih mahkota keberkahan.",
      link_logo: "/mhq.png",
      link_foto: "/cover_mhq.jpg"
    },
    {
      cabang: "Cerdas Cermat Nusantara",
      description: "Kompetisi beregu yang menguji wawasan umum seputar kebudayaan, sejarah perjuangan bangsa, geografi dasar, dan pengetahuan kewarganegaraan Indonesia.",
      link_logo: "/ccn.png",
      link_foto: "/cover_ccn.jpg"
    },
    {
      cabang: "Story Telling",
      description: "Lomba bercerita dalam bahasa Inggris menggunakan properti kreatif bawaan. Mengembangkan kemampuan bahasa asing, ekspresi teatrikal, serta gestur tubuh di depan publik.",
      link_logo: "/story.png",
      link_foto: "/cover_story.jpg"
    },
    {
      cabang: "Menggambar & Mewarnai",
      description: "Salurkan imajinasi visual tanpa batas di atas kertas dengan tema festival masa depan. Penilaian berdasarkan orisinalitas ide, komposisi warna, serta kerapian karya.",
      link_logo: "/art.png",
      link_foto: "/cover_art.jpg"
    },
    {
      cabang: "Menulis Cerpen",
      description: "Kompetisi merangkai jalinan kisah fiksi pendek yang kreatif, emosional, dan inspiratif sesuai dengan tema besar yang ditentukan oleh panitia Alfest 2027.",
      link_logo: "/cerpen.png",
      link_foto: "/cover_cerpen.jpg"
    },
    {
      cabang: "Solo Vocal Islami",
      description: "Ajang unjuk keindahan vokal vokal tunggal dalam membawakan lagu-lagu bernuansa islami atau nasyid. Penilaian berfokus pada teknik vokal, ketepatan nada, dan pembawaan.",
      link_logo: "/vocal.png",
      link_foto: "/cover_vocal.jpg"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-bg-main text-white relative overflow-x-hidden">
      
      {/* ================= 1. HERO CTA SECTION ================= */}
      <section className="relative h-[75vh] md:h-[82vh] w-full flex flex-col items-center justify-center text-center px-6 pt-16 pb-6 overflow-hidden">
        
        {/* GAMBAR BACKGROUND HERO BARU */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/competition_hero.jpg"
            alt="Alfest Competitions Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gelap agar teks emas di atasnya kontras dan menyala */}
          <div className="absolute inset-0 bg-bg-main/85 backdrop-blur-xs" />
        </div>

        {/* Dekorasi Pendaran Cahaya Emas Lembut */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0" />

        {/* Konten Utama Container */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto gap-2 md:gap-3 transform-gpu">
          
          <p className="text-gold text-xs md:text-sm font-display font-medium tracking-[0.4em] uppercase">
            Alfest 2027 Arena
          </p>

          <div className="filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] select-none">
            <h1 
              className="font-display text-4xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-gold-shine py-1"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              COMPETITIONS
            </h1>
          </div>

          <p className="text-text-muted text-sm md:text-base font-sans max-w-xl leading-relaxed tracking-wide opacity-90">
            Tunjukkan bakat terbaikmu, taklukkan setiap tantangan, dan rebut tahta juara. Pendaftaran telah resmi dibuka untuk seluruh sekolah di tanah air.
          </p>

          {/* ====== GRUP TOMBOL CTA ACTION ====== */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center transform-gpu">
            <div className="relative group transform-gpu w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-light rounded-full blur-md opacity-30 group-hover:opacity-80 group-hover:blur-xl transition duration-500 transform-gpu pointer-events-none" />
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center bg-gradient-to-r from-gold via-gold-light to-gold text-bg-main font-display font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-10 py-4 md:px-12 md:py-4.5 rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.2)] hover:shadow-[0_15px_40px_rgba(240,201,107,0.4)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 active:translate-y-0 select-none cursor-pointer overflow-hidden w-full sm:w-auto"
              >
                Register Now
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_0.8s_ease-in-out] transform-gpu" />
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
          <span className="text-[9px] tracking-[0.3em] uppercase text-text-muted font-sans font-medium">
            Explore Categories
          </span>
          <span className="text-xs text-gold animate-[bounce_2s_infinite]">
            ↓
          </span>
        </div>
      </section>

      {/* ================= 2. SECTION KATEGORI UTAMA & GRID CARDS ================= */}
      <section id="arena-lomba" className="w-full bg-gradient-to-b from-[#060a14] to-bg-main py-16 px-6 md:px-12 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER SEGMEN: LOGO KATEGORI & JUDUL GEDE */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#0f1a35] border-2 border-gold p-4 shadow-[0_0_30px_rgba(201,168,76,0.2)] mb-4 flex items-center justify-center">
              <img 
                src="/logo_olimpiad_sd.png" 
                alt="Logo ALYMPIC SD" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<span class="text-3xl">🎓</span>`;
                }}
              />
            </div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Tingkat Sekolah Dasar</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mt-1" style={{ fontFamily: "var(--font-cinzel)" }}>
              ALYMPIC ARENA
            </h2>
            <div className="w-16 h-[1px] bg-gold/30 mx-auto mt-4" />
          </div>

          {/* GRID RENDER CARD KOMPETISI (Otomatis Rapih di HP & Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

      {/* ================= LIGHTWEIGHT PREMIUM MODAL POPUP DETAIL LOMBA ================= */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 backdrop-blur-md bg-black/70 ${
          activeModal ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setActiveModal(null)}
      >
        <div
          className={`bg-[#0a0f1e] border border-gold/20 w-full max-w-lg p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 transform ${
            activeModal ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()} // Supaya isi dalam di-klik gak nutup modal
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
              className="bg-gradient-to-r from-gold to-gold-light text-bg-main text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-gold/20 hover:scale-[1.02]"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>

      <ContactWidget />
    </main>
  );
}