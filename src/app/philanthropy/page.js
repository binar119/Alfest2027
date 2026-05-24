import React from "react";
import Image from "next/image";

export default function PhilanthropyPage() {
  // Array data foto untuk galeri otomatis. 
  const galleryImages = [
    { src: "/baksos1.webp", alt: "Penyaluran Sembako Alfest" },
    { src: "/baksos2.webp", alt: "Interaksi Bersama Anak Yatim" },
    { src: "/baksos3.webp", alt: "Pembagian Alat Tulis Kreatif" },
    { src: "/baksos4.webp", alt: "Foto Bersama Tokoh Masyarakat" },
    { src: "/baksos1.webp", alt: "Penyaluran Sembako Alfest " },
    { src: "/baksos2.webp", alt: "Interaksi Bersama Anak Yatim " },
    { src: "/baksos3.webp", alt: "Pembagian Alat Tulis Kreatif " },
    { src: "/baksos4.webp", alt: "Foto Bersama Tokoh Masyarakat " },
  ];

  return (
    <div className="min-h-screen bg-bg-main text-text-main px-4 sm:px-6 py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* 1. HERO HEADER WITH SHIMMER */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Social & Community Development Alfest 2027
          </span>
          <h1 
            className="text-4xl md:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-light/50 to-gold animate-gold-shine py-1"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            ALFEST PHILANTHROPY
          </h1>
          <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Bentuk kepedulian nyata panitia dan seluruh peserta Alfest untuk berbagi kebahagiaan bersama saudara-saudara kita yang membutuhkan di wilayah lingkar luar masyarakat.
          </p>
        </div>

        {/* 2. AUTOMATICALLY ROLLING GALLERY (INFINITE CAROUSEL) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <h4 className="text-xs font-semibold tracking-wider text-gold-light uppercase">
              Dokumentasi Aksi Nyata
            </h4>
            <span className="text-[10px] text-text-muted">Bergerak Secara Otomatis</span>
          </div>
          
          {/* Container Luar dengan Masking Gradient Blur Kiri & Kanan */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-linear-to-r before:from-bg-main before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-linear-to-l after:from-bg-main after:to-transparent">
            {/* Wrapper class memakai .animate-scroll */}
            <div className="animate-scroll gap-4 py-2">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative w-64 h-40 md:w-80 md:h-48 rounded-2xl overflow-hidden border border-white/10 bg-bg-card/40 shrink-0 shadow-lg group hover:border-gold/30 transition-colors"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-w-768px) 256px, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                    <p className="text-[10px] md:text-xs text-text-main/90 font-medium">
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
          <div className="bg-bg-card/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
            <p className="text-[11px] text-text-muted uppercase tracking-wider">Target Penyaluran</p>
            <p className="text-base font-semibold mt-1 text-text-main">Yatim Piatu & Dhuafa</p>
          </div>
          <div className="bg-bg-card/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
            <p className="text-[11px] text-text-muted uppercase tracking-wider">Fokus Bantuan</p>
            <p className="text-base font-semibold mt-1 text-text-main">Sembako & Alat Tulis</p>
          </div>
          <div className="bg-bg-card/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
            <p className="text-[11px] text-text-muted uppercase tracking-wider">Lokasi Kegiatan</p>
            <p className="text-base font-semibold mt-1 text-text-main">Rengasdengklok, Karawang</p>
          </div>
        </div>

        {/* 4. DETAILS EXPANSION (TRANSPARENCY & ALUR) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-bg-card/20 border border-white/5 rounded-3xl p-6 md:p-8">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gold-light">Misi Kemanusiaan Kami</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Alfest Philanthropy bukan sekadar agenda pelengkap festival, melainkan misi utama untuk menyalurkan energi positif dari pemuda. Seluruh donasi yang terkumpul dari para donatur dan sebagian keuntungan pendaftaran kompetisi akan dialokasikan penuh tanpa potongan operasional.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gold-light">Penyaluran Transparan</h3>
            <ul className="text-xs text-text-muted space-y-2 list-disc pl-4 leading-relaxed">
              <li>Laporan mutasi dana masuk diperbarui berkala via kanal resmi panitia.</li>
              <li>Penyediaan paket sembako dibeli langsung melalui UMKM daerah lokal tujuan guna membantu roda ekonomi warga sekitar.</li>
              <li>Sesi trauma healing dan edukasi interaktif gratis dipandu langsung oleh tim relawan internal Alfest.</li>
            </ul>
          </div>
        </div>

        {/* 5. DONATION METRICS & INTERACTIVE QRIS SECTION */}
        <div className="bg-bg-card border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
          <div className="border-b border-white/5 pb-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-gold">Salurkan Donasi Anda</h3>
            <p className="text-xs text-text-muted mt-1">Setiap kontribusi kecil Anda membawa senyuman dan harapan besar bagi kehidupan mereka.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Bank Details Block */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-gold/20 transition-all">
                <p className="text-[10px] text-text-muted uppercase tracking-wider">Bank Transfer (Bank Syariah Indonesia / BSI)</p>
                <p className="text-xl font-bold text-text-main mt-1 tracking-wide group-hover:text-gold-light transition-colors">7123 4567 89</p>
                <p className="text-xs text-text-muted">a.n. Panitia Alfest Philanthropy</p>
              </div>
              
              <div className="text-xs text-text-muted leading-relaxed bg-gold/10 border border-gold/20 p-4 rounded-xl">
                <span className="font-semibold text-gold-light block mb-1">💡 Catatan Konfirmasi Penting:</span> 
                Mohon tambahkan kode unik <span className="text-text-main font-bold">012</span> di akhir nominal transfer Anda (Contoh: <span className="text-gold-light font-medium">Rp 100.012</span>). Kode ini digunakan untuk memisahkan dana pendaftaran lomba umum dengan saldo kemanusiaan baksos.
              </div>
            </div>

            {/* Optimized Next.js Image QRIS Slot */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="relative p-3 bg-white rounded-2xl w-full max-w-55 aspect-square shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <Image
                  src="/qris-donasi.webp"
                  alt="QRIS Alfest Philanthropy"
                  fill
                  sizes="(max-w-220px) 100vw"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <p className="text-l text-text-muted text-center tracking-wider font-medium">
                ▲ Scan QRIS menggunakan e-wallet & m-banking
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}