"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContactWidget from "../components/ContactWidget";

export default function Home() {
  const TARGET_DATE = "2027-10-25T00:00:00";

  const [timeLeft, setTimeLeft] = useState({
    Hari: "00",
    Jam: "00",
    Menit: "00",
    Detik: "00",
  });

  useEffect(() => {
    const target = new Date(TARGET_DATE).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        Hari: d < 10 ? `0${d}` : `${d}`,
        Jam: h < 10 ? `0${h}` : `${h}`,
        Menit: m < 10 ? `0${m}` : `${m}`,
        Detik: s < 10 ? `0${s}` : `${s}`,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-bg-main text-white relative">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden z-10">
        <img
          src="/hero_anjay.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg-main/80 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 w-full max-w-4xl">
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-display font-medium">
            WELCOME TO
          </p>

          <h1
            className="font-display text-4xl md:text-8xl font-bold tracking-wider select-none flex flex-nowrap justify-center items-center whitespace-nowrap overflow-visible"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {"ALBINAA FESTIVAL".split("").map((letter, index) => {
              const idleDelay = `${index * 0.1}s`;
              if (letter === " ") {
                return <span key={index} className="w-4 md:w-8 shrink-0" />;
              }
              return (
                <span
                  key={index}
                  className="inline-block animate-idle-bob"
                  style={{ animationDelay: idleDelay }}
                >
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-gold-shine cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-5 hover:scale-125 hover:from-white hover:to-gold-light hover:drop-shadow-[0_0_20px_rgba(240,201,107,0.9)] relative z-10">
                    {letter}
                  </span>
                </span>
              );
            })}
          </h1>

          <h1
            className="text-xl md:text-2xl font-bold text-text-muted leading-tight font-display tracking-wide max-w-7xl mt-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            -2027-
          </h1>

          <p className="text-gold text-base md:text-xl max-w-md font-sans italic tracking-wider">
            "Chase The Gold, Shine The World"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/competition"
              className="bg-gold text-bg-main px-8 py-3 rounded-full font-semibold tracking-wider uppercase text-sm cursor-pointer transition-all duration-300 transform hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] inline-block text-center"
            >
              Daftar Sekarang
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById("tentang-kami");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="border-2 border-gold text-gold bg-transparent px-8 py-3 rounded-full font-semibold tracking-wider uppercase text-sm cursor-pointer transition-all duration-300 transform hover:bg-gold hover:text-bg-main hover:scale-105 hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] inline-block text-center"
            >
              Tentang Kami
            </button>
          </div>

          <a
            href="https://www.google.com/maps/place/Al-Binaa+Islamic+Boarding+School/@-6.2125412,107.277854,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69820f88da5f89:0x8712b03af3ca3f17!8m2!3d-6.2125412!4d107.2804289!16s%2Fg%2F11cs4ck83c?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-gold-light transition-all duration-300 group mt-2"
          >
            <span className="transition-transform duration-300 group-hover:scale-125">
              📍
            </span>
            <span className="text-sm font-sans tracking-wide underline underline-offset-4 decoration-text-muted/30 group-hover:decoration-gold-light">
              Albinaa IBS, Bekasi
            </span>
          </a>

          <div className="flex gap-4 md:gap-8 border border-text-muted/10 bg-bg-main/40 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-10 mt-4 shadow-inner">
            {[
              [timeLeft.Hari, "Hari"],
              [timeLeft.Jam, "Jam"],
              [timeLeft.Menit, "Menit"],
              [timeLeft.Detik, "Detik"],
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center min-w-15">
                <span className="text-3xl md:text-4xl font-bold text-gold font-display tracking-normal">
                  {val}
                </span>
                <span className="text-[10px] text-text-muted uppercase tracking-widest mt-1 font-sans font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JEMBATAN TRANSISI */}
      <div className="absolute h-40 w-full z-20 pointer-events-none bg-gradient-to-b from-bg-main to-transparent" />

      {/* ========================================================================= */}
      {/* WADAH MESH GRADIENT RAKSASA */}
      {/* ========================================================================= */}
      <div className="bg-idle-mesh w-full relative z-10 shadow-[inner_0_30px_60px_rgba(0,0,0,0.7)]">
        
        {/* 2. ABOUT SECTION */}
        <section id="tentang-kami" className="relative pt-24 pb-12 px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-gold text-sm tracking-[0.3em] uppercase">
                Tentang Kami
              </p>
              <h2 className="text-5xl font-bold text-text-main" style={{ fontFamily: "var(--font-cinzel)" }}>
                What's Alfest?
              </h2>
              <p className="text-text-muted leading-relaxed">
                Alfest adalah festival tahunan yang memadukan kompetisi, seni, dan
                kepedulian sosial dalam satu malam penuh cahaya. Diselenggarakan
                oleh siswa-siswi Albinaa IBS, festival ini hadir untuk menginspirasi
                generasi muda.
              </p>
              <p className="text-gold-light text-3xl font-bold italic" style={{ fontFamily: "var(--font-cinzel)" }}>
                "Satu Malam, Seribu Cerita"
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gold/20 h-120 md:h-130 relative w-full group bg-bg-main/20 backdrop-blur-md">
              <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-main/40 to-transparent rounded-l-2xl" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-main/40 to-transparent rounded-r-2xl" />
              </div>

              <div className="animate-scroll flex items-center gap-6 absolute top-0 bottom-0 whitespace-nowrap" style={{ animationDuration: "50s" }}>
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, index) => (
                  <div key={index} className="min-w-90 h-115 md:min-w-100 md:h-125 bg-bg-card/40 backdrop-blur-xs rounded-xl border border-gold/10 flex items-center justify-center text-text-muted shrink-0 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-gold/30 shadow-md">
                    Foto {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2B. NEW SECTION: YOUTUBE TRAILER */}
        <section className="relative py-12 px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Official Media</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main" style={{ fontFamily: "var(--font-cinzel)" }}>
                Alfest Trailer
              </h2>
            </div>
            
            {/* Embed Video Container dengan Aspek Rasio 16:9 yang Responsif */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-2xl bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-gold/40">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_LU_DI_SINI" // <-- GANTI DENGAN ID VIDEO TRAILER LU
                title="Alfest Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 2C. NEW SECTION: OUR SPONSORS */}
        <section className="relative py-12 pb-24 px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text-main tracking-widest uppercase" style={{ fontFamily: "var(--font-cinzel)" }}>
                Our Sponsors
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 opacity-60" />
            </div>

            {/* Wadah Banner Kompilasi Sponsor (1 Gambar Panjang) */}
            <div className="w-full bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 p-6 md:p-10 shadow-lg flex justify-center items-center overflow-hidden transition-all duration-300 hover:border-gold/20">
              <img
                src="/sponsors_compiled.jpg" // <-- SIMPAN GAMBAR BANNER LU DI FOLDER public/ DENGAN NAMA INI
                alt="Alfest Event Sponsors"
                className="w-full h-auto object-contain max-h-60 md:max-h-80 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </section>

        {/* SPACER HALUS */}
        <div className="h-16 w-full opacity-20 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

        {/* 3. OUR EVENTS SECTION */}
        <section className="relative py-24 px-8">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
            <h2 className="text-5xl font-bold text-text-main" style={{ fontFamily: "var(--font-cinzel)" }}>
              Our Events
            </h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {[
                { nama: "Olimpiad SD", desc: "Kompetisi akademik untuk siswa SD se-kota" },
                { nama: "Olimpiad SMA", desc: "Kompetisi akademik untuk siswa SMA se-kota" },
              ].map((event) => (
                <div key={event.nama} className="relative w-64 h-80 rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer bg-bg-main/20 backdrop-blur-md transition-all duration-300 hover:border-gold/50 shadow-lg">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                    <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-text-muted text-sm">
                      Logo
                    </div>
                    <h3 className="text-text-main font-bold text-lg text-center" style={{ fontFamily: "var(--font-cinzel)" }}>
                      {event.nama}
                    </h3>
                    <p className="text-text-muted text-sm text-center">{event.desc}</p>
                  </div>
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { nama: "Talkshow", desc: "Sesi inspiratif bersama pembicara tamu" },
                { nama: "Bazaar", desc: "Pameran dan bazar produk kreatif siswa" },
                { nama: "Philanthropy", desc: "Kegiatan sosial untuk komunitas sekitar" },
              ].map((event) => (
                <div key={event.nama} className="relative h-175 md:h-162.5 rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer transition-all duration-300 hover:border-gold shadow-2xl bg-bg-main/20 backdrop-blur-md">
                  <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
                    <h3 className="text-gold font-bold text-xl" style={{ fontFamily: "var(--font-cinzel)" }}>
                      {event.nama}
                    </h3>
                    <p className="text-text-muted text-sm">{event.desc}</p>
                  </div>
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div> {/* Akhir Wadah Mesh Raksasa */}

      <ContactWidget />
    </main>
  );
}