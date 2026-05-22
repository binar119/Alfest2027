"use client";

import React, { useState, useEffect } from "react";

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isNoticeable, setIsNoticeable] = useState(true);

  // Efek animasi memantul menarik perhatian hanya saat pertama kali masuk website (durasi 4 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNoticeable(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Struktur Data Baru: 1 Kategori memiliki Submenu berisi 2 Contact Person (CP)
  const contactData = [
    {
      id: "pendaftaran",
      title: "Pendaftaran Lomba",
      warna: "from-amber-500 to-gold",
      cpList: [
        {
          nama: "Kak Ahmad (CP 1)",
          nomor: "6281234567890",
          pesan: "Halo Kak Ahmad, saya ingin bertanya mengenai teknis pendaftaran lomba Alfest 2027...",
        },
        {
          nama: "Kak Ihsan (CP 2)",
          nomor: "6282345678901",
          pesan: "Halo Kak Ihsan, saya mau konfirmasi pembayaran pendaftaran kompetisi Alfest 2027...",
        },
      ],
    },
    {
      id: "sponsorship",
      title: "Sponsorship & Kerja Sama",
      warna: "from-blue-600 to-indigo-600",
      cpList: [
        {
          nama: "Kak Sarah (Sponsorship)",
          nomor: "6289876543210",
          pesan: "Halo Panitia Alfest 2027, perusahaan kami tertarik untuk bekerja sama sebagai sponsor...",
        },
        {
          nama: "Kak Syamil (Media Partner)",
          nomor: "6287654321098",
          pesan: "Halo Hubungan Masyarakat Alfest 2027, kami dari media partner ingin mengajukan kerja sama...",
        },
      ],
    },
    {
      id: "umum",
      title: "Informasi Umum / Philanthropy",
      warna: "from-emerald-600 to-teal-600",
      cpList: [
        {
          nama: "Hotline Alfest (Informasi)",
          nomor: "628555111222",
          pesan: "Halo Alfest, saya ingin menanyakan info umum seputar jadwal dan lokasi acara...",
        },
        {
          nama: "Kak Fajar (Philanthropy)",
          nomor: "628444333222",
          pesan: "Halo Kak Fajar, saya ingin tahu lebih lanjut mengenai program donasi sosial Alfest...",
        },
      ],
    },
  ];

  const hubungiWhatsApp = (nomor, pesan) => {
    const url = `https://api.whatsapp.com/send?phone=${nomor}&text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCloseAll = () => {
    setIsOpen(false);
    // Beri sedikit delay agar transisi tutup selesai sebelum submenu direset
    setTimeout(() => setActiveCategory(null), 300);
  };

  return (
    // POSISI SEKARANG DI KANAN BAWAH (right-6)
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* ================= CONTAINER MENU POP-UP ================= */}
      <div
        className={`
          absolute bottom-18 right-0 w-72 md:w-80
          bg-bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4
          shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden
          transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right
          ${isOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-4 scale-75 pointer-events-none"}
        `}
      >
        <div className="relative w-full overflow-hidden min-h-[240px]">
          
          {/* MENU UTAMA (KATEGORI) */}
          <div
            className={`w-full transition-all duration-300 flex flex-col gap-3 ${
              activeCategory ? "-translate-x-full opacity-0 pointer-events-none absolute" : "translate-x-0 opacity-100"
            }`}
          >
            <div className="border-b border-white/5 pb-2 mb-1">
              <h4 className="text-gold font-display text-sm font-semibold tracking-wider uppercase">
                Hubungi Panitia Alfest
              </h4>
              <p className="text-text-muted text-[11px] mt-0.5">
                Silakan pilih kategori keperluan Anda:
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {contactData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 hover:border-gold/30 transition-all duration-300 group cursor-pointer hover:bg-white/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${cat.warna} shadow-[0_0_10px_currentColor]`} />
                    <span className="text-xs font-semibold text-text-main group-hover:text-gold-light transition-colors">
                      {cat.title}
                    </span>
                  </div>
                  <span className="text-text-muted text-xs transition-transform duration-300 group-hover:translate-x-1">
                    ➔
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SUBMENU KATEGORI (PILIHAN 2 CP) */}
          {contactData.map((cat) => (
            <div
              key={cat.id}
              className={`w-full transition-all duration-300 flex flex-col gap-3 ${
                activeCategory?.id === cat.id ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none absolute"
              }`}
            >
              <div className="border-b border-white/5 pb-2 mb-1 flex items-center gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-gold hover:text-gold-light text-xs font-bold cursor-pointer pr-1 transition-transform hover:-translate-x-1"
                >
                  ⬅
                </button>
                <div>
                  <h4 className="text-text-main font-display text-xs font-semibold uppercase tracking-wider">
                    {cat.title}
                  </h4>
                  <p className="text-text-muted text-[10px]">Tersedia 2 Admin Hubungan Person (CP):</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {cat.cpList.map((cp, idx) => (
                  <button
                    key={idx}
                    onClick={() => hubungiWhatsApp(cp.nomor, cp.pesan)}
                    className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-text-main group-hover:text-emerald-400 transition-colors">
                          {cp.nama}
                        </div>
                        <div className="text-[10px] text-text-muted mt-0.5">
                          Aktif (Hubungi via WhatsApp)
                        </div>
                      </div>
                      {/* Vektor Logo WA Kecil di dalam Submenu */}
                      <svg className="w-5 h-5 text-text-muted group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.498 4.49 1.499 5.482 0 9.94-4.414 9.943-9.84.002-2.63-1.018-5.101-2.87-6.956-1.853-1.855-4.324-2.877-6.958-2.878-5.487 0-9.947 4.414-9.95 9.842-.001 1.994.521 3.42 1.5 5.124l-.993 3.63 3.738-.973zm11.196-4.664c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.2-.298.3-.496.099-.198.05-.372-.025-.521-.075-.148-.672-1.62-.922-2.22-.242-.584-.487-.51-.67-.51-.172-.001-.371-.001-.571-.001-.199 0-.523.074-.797.372-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= TOMBOL FLOATING UTAMA ================= */}
      <button
        onClick={isOpen ? handleCloseAll : () => setIsOpen(true)}
        className={`
          flex items-center justify-center w-15 h-15 rounded-full 
          bg-gradient-to-tr from-gold to-gold-light text-bg-main
          shadow-[0_8px_30px_rgba(201,168,76,0.5)] hover:shadow-[0_8px_40px_rgba(240,201,107,0.7)]
          cursor-pointer transition-all duration-300 ease-out transform active:scale-95 group relative
          ${isNoticeable ? "animate-bounce scale-110 ring-4 ring-gold/30" : "hover:scale-110"}
        `}
        aria-label="Contact Service"
      >
        {/* Radar Pulsa Glowing di belakang tombol saat idle */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping opacity-75 pointer-events-none" />
        )}

        {/* VEKTOR LOGO BARU (SVG Chat Premium) & Efek Transisi Flip ke Silang */}
        <div className="relative w-7 h-7 flex items-center justify-center">
          {/* Ikon Vektor Balon Obrolan */}
          <svg
            className={`w-full h-full absolute transition-all duration-300 fill-current ${
              isOpen ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
            }`}
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          
          {/* Ikon Silang (Close) */}
          <span
            className={`absolute font-sans font-bold text-lg transition-all duration-300 ${
              isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
            }`}
          >
            ✕
          </span>
        </div>
      </button>

    </div>
  );
}