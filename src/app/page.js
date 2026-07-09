"use client";

import TimelineEvent from '../components/TimelineEvent';
import Image from "next/image"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContactWidget from "../components/ContactWidget";
import EventGrid from "../components/EventGrid";
import GalleryCarousel from "../components/GalleryCarousel";

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

  const eventsData = [
    { 
      nama: "Alimpiad (SMA)", 
      desc: "Kompetisi akademik untuk siswa SMA ", 
      imgKey: "olimpiade_sma",
      sectionId: "alimpiad-sma"
    },
    { 
      nama: "Alimpiad SPORT", 
      desc: "Kompetisi olahraga untuk siswa SMA ", 
      imgKey: "cover_futsal",
      sectionId: "sport"
    },
    { 
      nama: "Alympic (SD)", 
      desc: "Kompetisi akademik dan sport untuk siswa SD ", 
      imgKey: "olimpiade_sd",
      sectionId: "alympic-sd"
    },
  ];

  return (
    <main className="min-h-screen w-full bg-bg-main text-text-main relative transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden z-10">
        <Image
          src="/hero_anjay.webp" 
          alt="Albinaa Festival 2027 Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-main/60 backdrop-blur-sm transition-colors duration-300" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 w-full max-w-4xl">
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-display font-medium">
            WELCOME TO
          </p>

          <div className="filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)] select-none">
            <h1 className="font-display text-3xl md:text-8xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 dark:from-yellow-400 dark:via-amber-200 dark:to-yellow-500 mb-4 md:whitespace-nowrap">
              ALBINAA FESTIVAL
            </h1>
          </div>

          <h1 className="font-display text-xl md:text-2xl font-bold text-text-muted leading-tight tracking-wide max-w-7xl mt-2">
            -2027-
          </h1>

          <p className="text-gold text-base md:text-xl max-w-md font-sans italic tracking-wider">
            "Chase The Gold, Shine The World"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/competition"
              className="bg-gold text-bg-main dark:text-bg-main px-8 py-3 rounded-full font-display font-bold tracking-wider uppercase text-sm cursor-pointer transition-all duration-300 transform hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] inline-block text-center"
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
          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gold/80">
              COUNTDOWN TO ALBINAA FESTIVAL 2027
            </span>

            <div className="flex gap-4 md:gap-8 border border-text-muted/10 bg-bg-card/40 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-10 shadow-sm transition-colors duration-300">
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
      </div>
      
      {/* 2. ABOUT SECTION */}
      <section id="tentang-kami" className="relative pt-24 pb-12 px-8 md:fade-up-element">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-gold text-sm tracking-[0.3em] uppercase">
              Tentang Kami
            </p>
            <h2 className="font-display text-5xl font-semibold text-text-main">
              What's Albinaa Festival?
            </h2>
            <p className="text-text-muted leading-relaxed">
              Albinaa festival adalah festival tahunan yang memadukan kompetisi, seni, dan
              kepedulian sosial dalam satu malam penuh cahaya. Diselenggarakan
              oleh siswa-siswi Albinaa IBS, festival ini hadir untuk menginspirasi
              generasi muda.
            </p>
            <p className="font-display text-gold-light text-3xl font-bold italic">
              "Satu Malam, Seribu Cerita"
            </p>
          </div>

          <GalleryCarousel/>
        </div>
      </section>

      {/* 2B. YOUTUBE TRAILER SECTION */}
      <section className="relative py-12 px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Official Media</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-main">
              Albinaa festival Trailer
            </h2>
          </div>
          
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-gold/10 dark:border-gold/20 shadow-xl bg-bg-card/20 backdrop-blur-md transition-all duration-500 hover:border-gold/40">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/t_D1HQrHCFg"
              title="Albinaa Festival Official Trailer"
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
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-main tracking-widest uppercase">
              Our Sponsors
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 opacity-60" />
          </div>

          <div className="w-full bg-bg-card/40 dark:bg-white/5 backdrop-blur-xs rounded-2xl border border-text-muted/10 p-6 md:p-10 shadow-md flex justify-center items-center overflow-hidden transition-all duration-300 hover:border-gold/20">
            <img
              src="/sponsors_compiled.webp"
              alt="Albinaa Festival Event Sponsors"
              className="w-full h-auto object-contain max-h-60 md:max-h-80 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] mix-blend-multiply dark:mix-blend-normal opacity-90 dark:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* 3. OUR EVENTS SECTION */}
      <section className="relative py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
          <h2 className="font-display text-5xl font-semibold text-text-main">
            Our Events
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center w-full items-center">
            {eventsData.map((event) => (
              <div 
                key={event.nama} 
                className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer bg-bg-card/40 transition-all duration-300 hover:border-gold/50 shadow-lg"
              >
                <Link href={`/competition#${event.sectionId}`} className="block w-full h-full relative z-0">
                  <img 
                    src={`/${event.imgKey}.webp`}
                    alt={event.nama}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-35 group-hover:opacity-45 dark:group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/50 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 z-10">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`/logo_${event.imgKey}.png`} 
                        alt="Icon" 
                        className="w-10 h-10 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <h3 className="font-display text-text-main font-bold text-xl text-center tracking-wide">
                      {event.nama}
                    </h3>
                    <p className="text-text-muted text-xs text-center max-w-xs">{event.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
         {/* Kode sebelum baris 301 ... */}
      </div>
      <EventGrid />
    </div>

    {/* SEKSI GRAFIK TIMELINE BARU KITA */}
    <div className="w-full mt-10 mb-10">
      {/* Kita panggil komponen grafik timeline Mobile Legends di sini */}
      <TimelineEvent /> 
    </div>

    {/* Judul Event Timeline & Logo Sponsor Bawaan (Bisa ditaruh di bawahnya) */}
    <div className="filter select-none items-center justify-center text-center mt-10 mb-10">
      <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-wider text-text-main">
        EVENT SPONSORS
      </h1>
      <img 
        src="/sponsors_compiled.webp"
        alt="Albinaa Festival Event Sponsors"
        className="w-full h-auto object-contain max-h-60 md:max-h-80 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      />
    </div>
</section> {/* Ini penutup untuk section sponsor */}

      {/* SEKSI BARU: Tempat Grafik Timeline Kita */}
      <section className="filter select-none items-center justify-center text-center mt-16 mb-10 px-4 md:px-8">
        <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-wider text-text-main mb-6">
          EVENT TIMELINE
        </h1>
        <TimelineEvent />
      </section>

      {/* SEKSI BAWAAN: Tulisan Ready For Albinaa Festival */}
      <div className="filter select-none items-center justify-center text-center mt-10 mb-10">
        <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-wider text-text-main">
          READY FOR ALBINAA FESTIVAL?
        </h1>
      </div>

      <ContactWidget />
    </main>
  );
}