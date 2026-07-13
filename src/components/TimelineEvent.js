'use client';
import React, { useState, useEffect } from 'react';

// ==================== DATA CONFIGURATION ====================
const timelineData = [
  { 
    name: "Early Bird Regist", 
    label: "20 Nov - 4 Des", 
    pos: "col-start-1 col-end-2", 
    color: "from-amber-500 to-orange-600",
    imgActive: "/images/early-bird.png",
    deskripsi: "Pendaftaran gelombang pertama dengan diskon khusus bagi pendaftar awal Alfest 2027. Jangan lewatkan kesempatan slot terbatas ini!",
    status: "ended" // status event untuk memicu label khusus
  },
  { 
    name: "Batch 1 Regist", 
    label: "4 Des - 27 Des", 
    pos: "col-start-2 col-end-3", 
    color: "from-orange-500 to-red-600",
    imgActive: "/images/batch1.png",
    deskripsi: "Pendaftaran reguler Batch 1 dibuka untuk semua cabang kompetisi Alimpiad Ilmiah, Sports, dan Alimpic.",
    status: "arrow"
  },
  { 
    name: "Batch 2 Regist", 
    label: "28 Des - 27 Jan", 
    pos: "col-start-3 col-end-4", 
    color: "from-red-500 to-pink-600",
    imgActive: "/images/batch2.png",
    deskripsi: "Pendaftaran gelombang terakhir (Batch 2). Pastikan seluruh berkas tim sudah lengkap sebelum penutupan.",
    status: "arrow"
  },
  { 
    name: "Technical Meeting", 
    label: "05 Feb", 
    pos: "col-start-4 col-end-5", 
    color: "from-cyan-500 to-blue-600",
    imgActive: "/images/tm.png",
    deskripsi: "Technical Meeting bersama perwakilan seluruh tim untuk membahas regulasi, jadwal tanding, dan pembagian bagan kompetisi.",
    status: "none"
  },
  { 
    name: "Opening Alfest", 
    label: "15 Feb", 
    pos: "col-start-5 col-end-6", 
    color: "from-emerald-500 to-teal-600",
    imgActive: "/images/opening.png",
    deskripsi: "Upacara pembukaan megah Albinaa Festival 2027. Dimeriahkan oleh penampilan seni, parade kontingen, dan peresmian simbolis.",
    status: "none"
  },
  { 
    name: "Alfest Bazar & Expo", 
    label: "15 - 19 Feb", 
    pos: "col-start-5 col-end-10", 
    color: "from-purple-500 to-indigo-600",
    imgActive: "/images/bazar.png",
    deskripsi: "Festival kuliner, pameran karya, dan stand interaktif yang berjalan selama acara Alfest berlangsung di area utama.",
    status: "arrow"
  },
  { 
    name: "Grand Final Match", 
    label: "17 Feb", 
    pos: "col-start-7 col-end-8", 
    color: "from-red-600 to-red-800",
    imgActive: "/images/final.png",
    deskripsi: "Babak penentuan juara untuk seluruh cabang olahraga dan kompetisi sengit. Datang dan dukung tim jagoanmu!",
    status: "none"
  },
  { 
    name: "Awarding & Closing", 
    label: "19 Feb", 
    pos: "col-start-9 col-end-10", 
    color: "from-yellow-500 to-amber-500",
    imgActive: "/images/closing.png",
    deskripsi: "Penutupan resmi Alfest 2027 sekaligus malam penganugerahan piala juara umum dan konser penghargaan.",
    status: "none"
  }
];

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
  const [todayPosition, setTodayPosition] = useState('48%');

  // Menghitung otomatis perkiraan letak pointer Hari Ini berdasarkan tanggal sistem
  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Jan = 1, Feb = 2, dst.
    const currentDate = today.getDate();

    if (currentMonth === 11) { // November
      setTodayPosition('5%');
    } else if (currentMonth === 12) { // Desember
      setTodayPosition('20%');
    } else if (currentMonth === 1) { // Januari
      setTodayPosition('32%');
    } else if (currentMonth === 2) { // Februari
      if (currentDate <= 5) setTodayPosition('38%');
      else if (currentDate <= 15) setTodayPosition('48%');
      else if (currentDate === 16) setTodayPosition('58%');
      else if (currentDate === 17) setTodayPosition('68%');
      else if (currentDate === 18) setTodayPosition('78%');
      else setTodayPosition('88%');
    } else {
      setTodayPosition('95%'); // Philanthropy
    }
  }, []);

  return (
    <div className="w-full text-white py-6 font-sans relative">
      <div className="w-full bg-[#0d111d]/90 rounded-xl border-2 border-slate-800 p-4 md:p-6 overflow-x-auto backdrop-blur-sm relative shadow-2xl">
        <div className="min-w-[1000px] relative">
          
          {/* ================= 1. BACKGROUND GRID LINES (SEKAT VERTIKAL) ================= */}
          <div className="absolute inset-0 grid grid-cols-10 pointer-events-none z-0 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-r border-dashed border-slate-500 h-full w-full"></div>
            ))}
          </div>

          {/* ================= 2. DINAMIS POINTER HARI INI ================= */}
          <div 
            style={{ left: todayPosition }}
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-amber-400 to-transparent pointer-events-none z-30 shadow-[0_0_15px_rgba(34,211,238,0.8)] flex flex-col items-center transition-all duration-1000"
          >
            <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_10px_white] animate-ping"></div>
            <div className="bg-cyan-500 text-[9px] text-black font-extrabold px-2 py-0.5 rounded shadow-lg mt-1 whitespace-nowrap tracking-wider border border-cyan-300">
              LIVE NOW
            </div>
          </div>

          {/* Header Tanggal */}
          <div className="grid grid-cols-10 gap-2 border-b border-slate-800 pb-4 mb-6 text-center text-xs tracking-wider text-gray-300 relative z-10">
            {timelineColumns.map((col, idx) => (
              <div key={idx} className="bg-[#141b2d]/90 py-3 px-1 rounded-sm border border-slate-700/60 flex items-center justify-center shadow-inner">
                <div className="font-bold text-amber-400 text-xs md:text-sm tracking-wide drop-shadow">{col.label}</div>
              </div>
            ))}
          </div>

          {/* Baris Grid Event */}
          <div className="space-y-5 relative z-10">
            {timelineData.map((event, idx) => {
              const isActive = selectedEvent?.name === event.name;

              return (
                <div key={idx} className="grid grid-cols-10 gap-2 items-center">
                  <div 
                    onClick={() => setSelectedEvent(event)}
                    /* ================= 3. UJUNG KOTAK SLANTED/CUTOUT (CLIP PATH EFFECT) ================= */
                    style={{ clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)' }}
                    className={`p-3 bg-gradient-to-r ${event.color} ${event.pos} shadow-xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between pr-8 relative overflow-hidden group ${
                      isActive ? 'ring-2 ring-amber-400 scale-[1.01] z-20 brightness-125' : 'border-l-4 border-white/40'
                    }`}
                  >
                    {/* Efek Kilau Neon Saat Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></div>

                    <div className="truncate text-left">
                      <div className="font-bold text-sm truncate text-white drop-shadow-md tracking-wide">
                        {event.name}
                      </div>
                      <div className="text-[11px] opacity-90 font-medium tracking-tight mt-0.5">{event.label}</div>
                    </div>

                    {/* ================= 4. STATUS INDICATOR (ENDED / PANAH ORANGE) ================= */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {event.status === "ended" && (
                        <span className="text-[9px] bg-black/60 text-red-400 border border-red-500/50 font-black px-1.5 py-0.5 rounded tracking-widest uppercase shadow-md animate-pulse">
                          ENDED
                        </span>
                      )}
                      {event.status === "arrow" && (
                        <span className="text-amber-400 font-black text-sm drop-shadow-[0_0_5px_rgba(245,158,11,0.8)] animate-bounce">
                          ➔
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ================= MODAL DETAIL POPUP ================= */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#141a29] border-2 border-amber-400 max-w-md w-full rounded-2xl overflow-hidden shadow-[0_0_5px_rgba(245,158,11,0.5)] border-t-[6px] border-t-amber-500 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="w-full h-44 bg-slate-950 relative">
              <img 
                src={selectedEvent.imgActive} 
                alt={selectedEvent.name} 
                className="w-full h-full object-cover opacity-90"
                onError={(e) => { e.target.src = "/favicon.ico" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141a29] via-transparent to-black/20"></div>
              
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-black text-black bg-amber-400 px-2 py-0.5 rounded border border-amber-300 tracking-wider uppercase">
                  {selectedEvent.label}
                </span>
                <h3 className="text-xl font-black mt-1.5 text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {selectedEvent.name}
                </h3>
              </div>
            </div>

            <div className="p-6 text-left bg-gradient-to-b from-[#141a29] to-[#0f131f]">
              <p className="text-sm text-slate-300 leading-relaxed min-h-[70px] border-l-2 border-amber-500/30 pl-3">
                {selectedEvent.deskripsi}
              </p>
              
              <button 
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-sm rounded-xl shadow-lg border-b-4 border-amber-700 active:scale-[0.98] active:border-b-2 transition-all tracking-widest text-center uppercase"
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