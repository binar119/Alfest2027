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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(TARGET_DATE).getTime();

    // ========================================================
    // AMAN: Taruh kode document & observer DI DALAM useEffect
    // ========================================================
    const elementsToAnimate = document.querySelectorAll('.fade-up-element');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          entry.target.classList.remove('appear');
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });


    // ========================================================
    // KODE COUNTDOWN TIMER (Biarkan tetap di bawahnya)
    // ========================================================
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        Hari: d < 10 ? `0${d}` : `${d}`,
        Jam: h < 10 ? `0${h}` : `${h}`,
        Menit: m < 10 ? `0${m}` : `${m}`,
        Detik: s < 10 ? `0${s}` : `${s}`,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      elementsToAnimate.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-bg-main text-white relative">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden z-10">
        {/* Latar Belakang Hero Utama */}
        <img
          src="/hero_anjay.webp" 
          alt="Alfest 2027 Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg-main/80 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 w-full max-w-4xl">
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-display font-medium">
            WELCOME TO
          </p>

          {/* PERBAIKAN ANIMASI IDLE: Dibungkus container div agar drop-shadow tidak merusak jalannya clip-text animate-gold-shine */}
          <div className="filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)] select-none">
            <h1
              className="font-display text-3xl md:text-8xl font-semibold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-gold via-yellow/70 to-gold animate-gold-shine md:whitespace-nowrap"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              ALBINAA FESTIVAL
            </h1>
          </div>

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
            href="https://maps.app.goo.gl/cr8cgRvFsaWW2uZP9"
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

          {/* COUNTDOWN TIMER */}
          <div className="flex gap-4 md:gap-8 border border-text-muted/10 bg-bg-main/40 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-10 mt-4 shadow-inner">
            {[
              [isMounted ? timeLeft.Hari : "00", "Hari"],
              [isMounted ? timeLeft.Jam : "00", "Jam"],
              [isMounted ? timeLeft.Menit : "00", "Menit"],
              [isMounted ? timeLeft.Detik : "00", "Detik"],
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
      
        {/* 2. ABOUT SECTION */}
        <section id="tentang-kami" className="relative pt-24 pb-12 px-8 md:fade-up-element">
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

            {/* INTEGRASI SCROLL GALERI FOTO: Sekarang membaca file gambar asli dari folder /public */}
            <div className="overflow-hidden rounded-2xl border border-gold/20 h-120 md:h-130 relative w-full group bg-bg-main/20 backdrop-blur-md">
              <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-main/40 to-transparent rounded-l-2xl" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-main/40 to-transparent rounded-r-2xl" />
              </div>

              <div className="animate-scroll flex items-center gap-6 absolute top-0 bottom-0 whitespace-nowrap" style={{ animationDuration: "40s" }}>
                {/* Kamu tinggal siapkan file galeri_1.webp sampai galeri_6.webp di folder public/ */}
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, index) => (
                  <div key={index} className="min-w-90 h-115 md:min-w-100 md:h-125 bg-bg-card/40 overflow-hidden rounded-xl border border-gold/10 shrink-0 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-gold/30 shadow-md relative">
                    <img 
                      src={`/galeri_${i}.webp`} 
                      alt={`Dokumentasi Alfest ${i}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback jika file gambar belum kamu masukkan ke folder public
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-text-muted text-sm">Taruh berkas 'public/galeri_${i}.webp'</div>`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2B. YOUTUBE TRAILER SECTION */}
        <section className="relative py-12 px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Official Media</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main" style={{ fontFamily: "var(--font-cinzel)" }}>
                Alfest Trailer
              </h2>
            </div>
            
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-2xl bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-gold/40">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/t_D1HQrHCFg"
                title="Alfest Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 2C. OUR SPONSORS SECTION */}
        <section className="relative py-12 pb-24 px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text-main tracking-widest uppercase" style={{ fontFamily: "var(--font-cinzel)" }}>
                Our Sponsors
              </h2>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 opacity-60" />
            </div>

            <div className="w-full bg-white/5 backdrop-blur-xs rounded-2xl border border-white/10 p-6 md:p-10 shadow-lg flex justify-center items-center overflow-hidden transition-all duration-300 hover:border-gold/20">
              <img
                src="/sponsors_compiled.webp"
                alt="Alfest Event Sponsors"
                className="w-full h-auto object-contain max-h-60 md:max-h-80 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </section>

        {/* 3. OUR EVENTS SECTION */}
        <section className="relative py-24 px-8">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
            <h2 className="text-5xl font-bold text-text-main" style={{ fontFamily: "var(--font-cinzel)" }}>
              Our Events
            </h2>

            {/* INTEGRASI GAMBAR 1 & 2 (Olimpiade) */}
           <div className="flex flex-col md:flex-row gap-8 justify-center w-full items-center">
              {[
                { nama: "Alimpiad (SD)", desc: "Kompetisi akademik untuk siswa SD ", imgKey: "olimpiade_sd" },
                { nama: "Alympic (SMA)", desc: "Kompetisi akademik dan sport untuk siswa SMA ", imgKey: "olimpiade_sma" },
              ].map((event) => (
                <div key={event.nama} className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer bg-bg-card/40 transition-all duration-300 hover:border-gold/50 shadow-lg">
                  
                  {/* Wrapped the card contents inside Next.js Link */}
                  <Link href="/competition" className="block w-full h-full relative z-0">
                    
                    {/* Gambar Latar Belakang Event */}
                    <img 
                      src={`/${event.imgKey}.webp`}
                      alt={event.nama}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/50 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 z-10">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center overflow-hidden">
                        {/* Logo Mini Kompetisi */}
                        <img 
                          src={`/logo_${event.imgKey}.png`} 
                          alt="Icon" 
                          className="w-10 h-10 object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                      <h3 className="text-text-main font-bold text-xl text-center tracking-wide" style={{ fontFamily: "var(--font-cinzel)" }}>
                        {event.nama}
                      </h3>
                      <p className="text-text-muted text-xs text-center max-w-xs">{event.desc}</p>
                    </div>

                  </Link>

                </div>
              ))}
            </div>
            {/* INTEGRASI GAMBAR 3, 4, 5 (Talkshow, Bazaar, Philanthropy) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { nama: "Talkshow", desc: "Sesi inspiratif bersama pembicara tamu", imgKey: "talkshow" },
                { nama: "Bazaar", desc: "Pameran dan bazar produk kreatif siswa", imgKey: "bazaar" },
                { nama: "Philanthropy", desc: "Kegiatan sosial untuk komunitas sekitar", imgKey: "philanthropy" },
              ].map((event) => (
                <div key={event.nama} className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer transition-all duration-300 hover:border-gold shadow-2xl bg-bg-card/40">
                  {/* Gambar Latar Belakang Event Card */}
                  <img 
                    src={`/${event.imgKey}.webp`}
                    alt={event.nama}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2 z-10">
                    <h3 className="text-gold font-bold text-2xl tracking-wide" style={{ fontFamily: "var(--font-cinzel)" }}>
                      {event.nama}
                    </h3>
                    <p className="text-text-main/90 text-sm font-medium leading-relaxed max-w-xs">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <ContactWidget />
    </main>
  );
}