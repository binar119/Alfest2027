'use client';
import React, { useState } from 'react';

// DATA SETTING TIMELINE
const timelineData = [
  { 
    name: "Early Bird Regist", 
    label: "20 Nov - 4 Des", 
    pos: "col-start-1 col-end-2", 
    color: "from-amber-500 to-orange-600",
    img: "/images/early-bird.jpg", // <-- Taruh gambar di folder public/images/
    deskripsi: "Pendaftaran gelombang pertama dengan diskon khusus bagi pendaftar awal Alfest 2027. Jangan lewatkan kesempatan slot terbatas ini!"
  },
  { 
    name: "Batch 1 Regist", 
    label: "4 Des - 27 Des", 
    pos: "col-start-2 col-end-3", 
    color: "from-orange-500 to-red-600",
    img: "/images/batch1.jpg",
    deskripsi: "Pendaftaran reguler Batch 1 dibuka untuk semua cabang kompetisi Alimpiad Ilmiah, Sports, dan Alimpic."
  },
  { 
    name: "Batch 2 Regist", 
    label: "28 Des - 27 Jan", 
    pos: "col-start-3 col-end-4", 
    color: "from-red-500 to-pink-600",
    img: "/images/batch2.jpg",
    deskripsi: "Pendaftaran gelombang terakhir (Batch 2). Pastikan seluruh berkas tim sudah lengkap sebelum penutupan."
  },
  { 
    name: "Technical Meeting", 
    label: "05 Feb", 
    pos: "col-start-4 col-end-5", 
    color: "from-cyan-500 to-blue-600",
    img: "/images/tm.jpg",
    deskripsi: "Technical Meeting bersama perwakilan seluruh tim untuk membahas regulasi, jadwal tanding, dan pembagian bagan kompetisi."
  },
  { 
    name: "Opening Alfest", 
    label: "15 Feb", 
    pos: "col-start-5 col-end-6", 
    color: "from-emerald-500 to-teal-600",
    img: "/images/opening.jpg",
    deskripsi: "Upacara pembukaan megah Albinaa Festival 2027. Dimeriahkan oleh penampilan seni, parade kontingen, dan peresmian simbolis."
  },
  { 
    name: "Alfest Bazar & Expo", 
    label: "15 - 19 Feb", 
    pos: "col-start-5 col-end-10", 
    color: "from-purple-500 to-indigo-600",
    img: "/images/bazar.svg",
    deskripsi: "Festival kuliner, pameran karya, dan stand interaktif yang berjalan selama acara Alfest berlangsung di area utama."
  },
  { 
    name: "🔥 Grand Final Match", 
    label: "17 Feb", 
    pos: "col-start-7 col-end-8", 
    color: "from-red-600 to-red-800",
    img: "/images/final.jpg",
    deskripsi: "Babak penentuan juara untuk seluruh cabang olahraga dan kompetisi sengit. Datang dan dukung tim jagoanmu!"
  },
  { 
    name: "Awarding & Closing", 
    label: "19 Feb", 
    pos: "col-start-9 col-end-10", 
    color: "from-yellow-500 to-amber-500",
    img: "/images/closing.jpg",
    deskripsi: "Penutupan resmi Alfest 2027 sekaligus malam penganugerahan piala juara umum dan konser penghargaan."
  }
];

const timelineColumns = [
  { label: "20/11 - 4/12", desc: "Early Bird" },
  { label: "4/12 - 27/12", desc: "Batch 1" },
  { label: "28/12 - 27/1", desc: "Batch 2" },
  { label: "5/2", desc: "TM" },
  { label: "15/2", desc: "Opening/D1" },
  { label: "16/2", desc: "Day 2" },
  { label: "17/2", desc: "Day 3" },
  { label: "18/2", desc: "Day 4" },
  { label: "19/2", desc: "Closing/D5" },
  { label: "17/3 - 20/3", desc: "Philanthropy" }
];

export default function TimelineEvent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="w-full text-white py-6 font-sans relative">
      <div className="w-full bg-[#111625]/60 rounded-xl border border-gray-800 p-4 md:p-6 overflow-x-auto backdrop-blur-sm">
        <div className="min-w-[1000px]">
          
          {/* Header Tanggal */}
          <div className="grid grid-cols-10 gap-2 border-b border-gray-800 pb-4 mb-6 text-center text-xs tracking-wider text-gray-300">
            {timelineColumns.map((col, idx) => (
              <div key={idx} className="bg-[#181F33]/80 p-2 rounded border border-gray-700/30">
                <div className="font-bold text-amber-400">{col.label}</div>
                <div className="text-[10px] text-gray-400 truncate mt-0.5">{col.desc}</div>
              </div>
            ))}
          </div>

          {/* Baris Grid Event */}
          <div className="space-y-3">
            {timelineData.map((event, idx) => (
              <div key={idx} className="grid grid-cols-10 gap-2 items-center">
                <div 
                  onClick={() => setSelectedEvent(event)}
                  className={`p-2.5 rounded bg-gradient-to-r ${event.color} ${event.pos} shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer flex items-center gap-3`}
                >
                  {/* Ikon/Gambar Mini ala ML */}
                  <div className="w-8 h-8 rounded bg-black/30 border border-white/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={event.img || "/favicon.ico"} 
                      alt="" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = "/favicon.ico" }} // Fallback jika gambar belum ada
                    />
                  </div>
                  <div className="truncate text-left">
                    <div className="font-bold text-xs truncate">{event.name}</div>
                    <div className="text-[10px] opacity-80">{event.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* POPUP MODAL DETAIL (ALA POPUP EVENT ML) */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1c2438] border-2 border-amber-500/50 max-w-md w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.2)] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Bagian Gambar Besar Card */}
            <div className="w-full h-48 bg-gray-900 relative">
              <img 
                src={selectedEvent.img || "/favicon.ico"} 
                alt={selectedEvent.name} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "/favicon.ico" }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-[#1c2438] via-transparent to-black/40`}></div>
              
              {/* Badge Judul Atas */}
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs font-bold text-amber-400 tracking-widest bg-black/60 px-2 py-1 rounded border border-amber-500/30">
                  {selectedEvent.label}
                </span>
                <h3 className="text-xl font-bold mt-2 text-white drop-shadow-md">
                  {selectedEvent.name}
                </h3>
              </div>
            </div>

            {/* Konten Keterangan */}
            <div className="p-5 text-left">
              <p className="text-sm text-gray-300 leading-relaxed min-h-[80px]">
                {selectedEvent.deskripsi}
              </p>
              
              {/* Tombol Close */}
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