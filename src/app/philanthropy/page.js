"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactWidget from "@/components/ContactWidget";

// A reusable sub-component that displays an elegant placeholder card if the image file throws a 404
function SafeImage({ src, alt, fill, className, sizes, priority, ...props }) {
  const [isBroken, setIsBroken] = useState(false);

  if (isBroken) {
    return (
      <div 
        className={`w-full h-full bg-linear-to-br from-slate-800 via-slate-900 to-black flex flex-col items-center justify-center p-4 text-center border border-white/5 ${className}`}
        style={fill ? { position: 'absolute', inset: 0 } : {}}
      >
        <span className="text-xl opacity-30">🖼️</span>
        <span className="text-[10px] text-text-muted mt-1 truncate max-w-[80%]">
          {alt || "Asset Missing"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setIsBroken(true)}
      {...props}
    />
  );
}

export default function PhilanthropyPage() {
  // Array data foto untuk galeri otomatis. 
  const galleryImages = [
    { src: "/baksos1.webp", alt: "Penyaluran Sembako Albinaa Festival" },
    { src: "/baksos2.webp", alt: "Interaksi Bersama Anak Yatim" },
    { src: "/baksos3.webp", alt: "Pembagian Alat Tulis Kreatif" },
    { src: "/baksos4.webp", alt: "Foto Bersama Tokoh Masyarakat" },
    { src: "/baksos1.webp", alt: "Penyaluran Sembako Albinaa Festival " },
    { src: "/baksos2.webp", alt: "Interaksi Bersama Anak Yatim " },
    { src: "/baksos3.webp", alt: "Pembagian Alat Tulis Kreatif " },
    { src: "/baksos4.webp", alt: "Foto Bersama Tokoh Masyarakat " },
  ];

  return (
    <div className="relative min-h-screen text-text-main px-4 sm:px-6 py-16 md:py-24 font-sans overflow-hidden">
      
      {/* GLOBAL PACKAGED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <SafeImage
          src="/stardust.png"
          alt="Page Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* 2. Tuned Dark Contrast Tint Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Main Container Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        
        {/* 1. HERO HEADER WITH SHIMMER */}
        <div className="text-center space-y-5">
          <span className="text-sm font-semibold tracking-widest text-gold uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Social & Community Development Albinaa Festival 2027
          </span>
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-light/50 to-gold animate-gold-shine py-1"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            BAKTI SOSIAL ALBINAA FESTIVAL 
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Bentuk kepedulian nyata panitia dan seluruh peserta Albinaa Festival untuk berbagi kebahagiaan bersama saudara-saudara kita yang membutuhkan di wilayah lingkar luar masyarakat.
          </p>
        </div>

        {/* 2. AUTOMATICALLY ROLLING GALLERY (INFINITE CAROUSEL) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <h4 className="text-sm font-bold tracking-wider text-gold-light uppercase">
              Dokumentasi Aksi Nyata
            </h4>
            <span className="text-xs text-text-muted">Bergerak Secara Otomatis</span>
          </div>
          
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-linear-to-r before:from-bg-main before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-linear-to-l after:from-bg-main after:to-transparent">
            <div className="animate-scroll gap-4 py-2">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative w-64 h-40 md:w-80 md:h-48 rounded-2xl overflow-hidden border border-white/10 bg-bg-card/40 shrink-0 shadow-lg group hover:border-gold/30 transition-colors"
                >
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-w-768px) 256px, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
                    <p className="text-xs md:text-sm text-text-main/90 font-medium">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. STATS / INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Card 1 */}
          <div className="bg-bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center min-h-[160px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="relative w-7 h-7 mx-auto opacity-80">
                <SafeImage 
                  src="/target.webp"
                  alt="Target Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                Target Penyaluran
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center pt-3">
              <p className="text-lg font-bold text-text-main leading-snug">
                Yatim Piatu & Dhuafa
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center min-h-[160px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="relative w-7 h-7 mx-auto opacity-80">
                <SafeImage 
                  src="/icons/focus.svg"
                  alt="Focus Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                Fokus Bantuan
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center pt-3">
              <p className="text-lg font-bold text-text-main leading-snug">
                Sembako & Alat Tulis
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center min-h-[160px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="relative w-7 h-7 mx-auto opacity-80">
                <SafeImage 
                  src="/icons/location.svg"
                  alt="Location Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                Lokasi Kegiatan
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center pt-3">
              <p className="text-lg font-bold text-text-main leading-snug">
                Rengasdengklok, Karawang
              </p>
            </div>
          </div>

        </div>

        {/* 4. DETAILS EXPANSION */}
        <div className="w-full flex flex-col items-center justify-center text-center py-6 px-4">
          <div className="max-w-2xl w-full flex flex-col items-center justify-center text-center space-y-4">
            
            <h3 
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-wide text-center" 
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Misi Kemanusiaan Kami
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed opacity-95 text-center max-w-xl font-sans">
              Albinaa Festival Philanthropy bukan sekadar agenda pelengkap festival, melainkan misi utama untuk menyalurkan energi positif dari pemuda. Seluruh donasi yang terkumpul dari para donatur dan sebagian keuntungan pendaftaran kompetisi akan dialokasikan penuh tanpa potongan operasional.
            </p>

            <h3 
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-wide text-center mt-6" 
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Penyaluran Transparan
            </h3>

            <ul className="text-sm sm:text-base md:text-lg text-text-muted space-y-4 max-w-xl w-full flex flex-col items-center font-sans">
              <div className="text-left space-y-4 w-full max-w-md sm:max-w-lg">
                <li className="flex items-start gap-3 opacity-95 text-left">
                  <span className="text-white text-lg leading-none mt-1 shrink-0">•</span>
                  <p className="leading-relaxed">
                    Laporan mutasi dana masuk diperbarui berkala via kanal resmi panitia.
                  </p>
                </li>
                <li className="flex items-start gap-3 opacity-95 text-left">
                  <span className="text-white text-lg leading-none mt-1 shrink-0">•</span>
                  <p className="leading-relaxed">
                    Penyediaan paket sembako dibeli langsung melalui UMKM daerah lokal tujuan guna membantu roda ekonomi warga sekitar.
                  </p>
                </li>
                <li className="flex items-start gap-3 opacity-95 text-left">
                  <span className="text-white text-lg leading-none mt-1 shrink-0">•</span>
                  <p className="leading-relaxed">
                    Sesi trauma healing dan edukasi interaktif gratis dipandu langsung oleh tim relawan internal Albinaa Festival.
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* 5. DONATION METRICS & INTERACTIVE QRIS SECTION */}
        <div className="bg-bg-card border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative backdrop-blur-md">
          <div className="border-b border-white/5 pb-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gold">Salurkan Donasi Anda</h3>
            <p className="text-sm text-text-muted mt-1">Setiap kontribusi kecil Anda membawa senyuman dan harapan besar bagi kehidupan mereka.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/5 group hover:border-gold/20 transition-all">
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">Bank Transfer (Bank Syariah Indonesia / BSI)</p>
                <p className="text-2xl font-black text-text-main mt-1.5 tracking-wide group-hover:text-gold-light transition-colors">7123 4567 89</p>
                <p className="text-sm text-text-muted mt-0.5">a.n. Panitia Albinaa Festival Philanthropy</p>
              </div>
              
              <div className="text-sm text-text-muted leading-relaxed bg-gold/10 border border-gold/20 p-4 rounded-xl">
                <span className="font-bold text-gold-light block mb-1">💡 Catatan Konfirmasi Penting:</span> 
                Mohon tambahkan kode unik <span className="text-text-main font-bold">012</span> di akhir nominal transfer Anda (Contoh: <span className="text-gold-light font-bold">Rp 100.012</span>). Kode ini digunakan untuk memisahkan dana pendaftaran lomba umum dengan saldo kemanusiaan baksos.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative p-3 bg-white rounded-2xl w-full max-w-55 aspect-square shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden">
                <SafeImage
                  src="/qris-donasi.webp"
                  alt="QRIS Albinaa Festival Philanthropy"
                  fill
                  sizes="(max-w-220px) 100vw"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <p className="text-xs md:text-sm text-text-muted text-center tracking-wider font-semibold uppercase">
                ▲ Scan QRIS menggunakan e-wallet & m-banking
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactWidget />
    </div>
  );
}