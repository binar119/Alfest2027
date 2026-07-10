'use client';
import React, { useState } from 'react';

// ==================== DATA CONFIGURATION ====================
const timelineData = [
  { 
    name: "Early Bird Regist", 
    label: "20 Nov - 4 Des", 
    pos: "col-start-1 col-end-2", 
    color: "from-amber-500 to-orange-600",
    imgNormal: "/images/early-bird.svg",       // Ikon kustom pas diam (Bisa .svg / .png)
    imgActive: "/images/early-bird-active.svg", // Ikon kustom pas aktif / diklik
    deskripsi: "Pendaftaran gelombang pertama dengan diskon khusus bagi pendaftar awal Alfest 2027. Jangan lewatkan kesempatan slot terbatas ini!"
  },
  { 
    name: "Batch 1 Regist", 
    label: "4 Des - 27 Des", 
    pos: "col-start-2 col-end-3", 
    color: "from-orange-500 to-red-600",
    imgNormal: "/images/batch1.svg",
    imgActive: "/images/batch1-active.svg",
    deskripsi: "Pendaftaran reguler Batch 1 dibuka untuk semua cabang kompetisi Alimpiad Ilmiah, Sports, dan Alimpic."
  },
  { 
    name: "Batch 2 Regist", 
    label: "28 Des - 27 Jan", 
    pos: "col-start-3 col-end-4", 
    color: "from-red-500 to-pink-600",
    imgNormal: "/images/batch2.svg",
    imgActive: "/images/batch2-active.svg",
    deskripsi: "Pendaftaran gelombang terakhir (Batch 2). Pastikan seluruh berkas tim sudah lengkap sebelum penutupan."
  },
  { 
    name: "Technical Meeting", 
    label: "05 Feb", 
    pos: "col-start-4 col-end-5", 
    color: "from-cyan-500 to-blue-600",
    imgNormal: "/images/tm.svg",
    imgActive: "/images/tm-active.svg",
    deskripsi: "Technical Meeting bersama perwakilan seluruh tim untuk membahas regulasi, jadwal tanding, dan pembagian bagan kompetisi."
  },
  { 
    name: "Opening Alfest", 
    label: "15 Feb", 
    pos: "col-start-5 col-end-6", 
    color: "from-emerald-500 to-teal-600",
    imgNormal: "/images/opening.svg",
    imgActive: "/images/opening-active.svg",
    deskripsi: "Upacara pembukaan megah Albinaa Festival 2027. Dimeriahkan oleh penampilan seni, parade kontingen, dan peresmian simbolis."
  },
  { 
    name: "Alfest Bazar & Expo", 
    label: "15 - 19 Feb", 
    pos: "col-start-5 col-end-10", 
    color: "from-purple-500 to-indigo-600",
    imgNormal: "/images/bazar.svg",
    imgActive: "/images/bazar-active.svg",
    deskripsi: "Festival kuliner, pameran karya, dan stand interaktif yang berjalan selama acara Alfest berlangsung di area utama."
  },
  { 
    name: "Grand Final Match", 
    label: "17 Feb", 
    pos: "col-start-7 col-end-8", 
    color: "from-red-600 to-red-800",
    imgNormal: "/images/final.svg",
    imgActive: "/images/final-active.svg",
    deskripsi: "Babak penentuan juara untuk seluruh cabang olahraga dan kompetisi sengit. Datang dan dukung tim jagoanmu!"
  },
  { 
    name: "Awarding & Closing", 
    label: "19 Feb", 
    pos: "col-start-9 col-end-10", 
    color: "from-yellow-500 to-amber-500",
    imgNormal: "/images/closing.svg",
    imgActive: "/images/closing-active.svg",
    deskripsi: "Penutupan resmi Alfest 2027 sekaligus malam penganugerahan piala juara umum dan konser penghargaan."
  }
];

// 1. PENYEDERHANAAN HEADER: Objek deskripsi kecil di bawah sudah dihapus total, murni tanggal saja
const timelineColumns = [
  { label: "20/11 - 4/12" },
  { label: "4/12 - 27/12" },
  { label: "28/12 - 27/1" },
  { label: "5/2" },
  { label: "15/2" },
  { label: "16/2" },
  { label: "17/2" },
  { label: "18/2" },
  { label: "19/2" },
  { label: "17/3 - 20/3" }
];

export default function TimelineEvent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="w-full text-white py-6 font-sans relative">
      <div className="w-full bg-[#111625]/60 rounded-xl border border-gray-800 p-4 md:p-6 overflow-x-auto backdrop-blur-sm relative">
        <div className="min-w-[1000px] relative">
          
          {/* ================= 2. GARIS PENANDA HARI INI (CURRENT DAY POINTER) ================= */}
          {/* Garis vertikal neon memotong grid secara otomatis */}
          <div className="absolute top-0 bottom-0 left-[48%] w-0.5 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent pointer-events-none z-10 shadow-[0_0_15px_rgba(245,158,11,0.8)] flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-white shadow-md animate-ping"></div>
            <div className="bg-amber-500 text-[9px] text-black font-extrabold px-1.5 py-0.5 rounded shadow mt-1 whitespace-nowrap tracking-tighter">
              HARI INI
            </div>
          </div>

          {/* Header Tanggal Berjejer Rapi */}
          <div className="grid grid-cols-10 gap-2 border-b border-gray-800 pb-4 mb-6 text-center text-xs tracking-wider text-gray-300">
            {timelineColumns.map((col, idx) => (
              <div key={idx} className="bg-[#181F33]/80 py-3 px-1 rounded border border-gray-700/40 flex items-center justify-center">
                <div className="font-bold text-amber-400 text-xs md:text-sm">{col.label}</div>
              </div>
            ))}
          </div>

          {/* Baris Grid Event */}
          <div className="space-y-4">
            {timelineData.map((event, idx) => {
              const isActive = selectedEvent?.name === event.name;

              return (
                <div key={idx} className="grid grid-cols-10 gap-2 items-center">
                  <div 
                    onClick={() => setSelectedEvent(event)}
                    className={`p-2.5 rounded bg-gradient-to-r ${event.color} ${event.pos} shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center gap-3 relative overflow-hidden group ${
                      isActive ? 'ring-2 ring-white scale-[1.02] z-20' : 'border border-white/10'
                    }`}
                  >
                    {/* Efek Kilau Highlight pas Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>

                    {/* ================= 3. IKON BERUBAH SAAT DIKLIK/AKTIF ================= */}
                    <div className="w-8 h-8 rounded bg-black/40 border border-white/20 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                      <img 
                        src={isActive ? event.imgActive : event.imgNormal} 
                        alt="" 
                        className={`w-full h-full object-cover transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}
                        onError={(e) => { e.target.src = "/favicon.ico" }} // Fallback kalau file gambar belum ditaruh
                      />
                    </div>

                    <div className="truncate text-left">
                      <div className="font-bold text-xs truncate text-white">
                        {event.name}
                      </div>
                      <div className="text-[10px] opacity-75 font-medium">{event.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ================= MODAL POPUP DISPLAY EVENT DETAILS ================= */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1c2438] border-2 border-amber-500/60 max-w-md w-full rounded-xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.25)] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Bagian Gambar Atas Card */}
            <div className="w-full h-44 bg-gray-900 relative">
              <img 
                src={selectedEvent.imgActive} 
                alt={selectedEvent.name} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "/favicon.ico" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c2438] via-transparent to-black/30"></div>
              
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-bold text-amber-400 tracking-widest bg-black/70 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                  {selectedEvent.label}
                </span>
                <h3 className="text-lg font-bold mt-1 text-white drop-shadow-md tracking-wide">
                  {selectedEvent.name}
                </h3>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="p-5 text-left">
              <p className="text-sm text-gray-300 leading-relaxed min-h-[70px]">
                {selectedEvent.deskripsi}
              </p>
              
              <button 
                onClick={() => setSelectedEvent(null)}
                className="mt-5 w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm rounded-lg shadow-md border border-amber-400/30 active:scale-[0.98] transition-all tracking-wider text-center"
              >
                KONFIRMASI
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}