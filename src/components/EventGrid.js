import { useState } from 'react';
import Image from 'next/image'; // 1. Imported Next.js Image component

export default function EventGrid() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { 
      nama: "Talkshow", 
      desc: "Sesi inspiratif bersama pembicara tamu untuk mengupas tuntas tren industri kreatif saat ini.", 
      imgKey: "talkshow",
      guest: "Maudy Ayunda"
    },
    { 
      nama: "Bazaar", 
      desc: "Pameran dan bazar produk kreatif siswa. Dukung karya lokal buatan teman-teman kita!", 
      imgKey: "bazaar" 
    },
    { 
      nama: "Philanthropy", 
      desc: "Kegiatan sosial untuk komunitas sekitar sebagai wujud kepedulian dan berbagi kebaikan.", 
      imgKey: "philanthropy" 
    },
  ];

  return (
    <div className="w-full">
      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {events.map((event) => (
          <div 
            key={event.nama} 
            onClick={() => setSelectedEvent(event)}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer transition-all duration-300 hover:border-gold shadow-2xl bg-bg-card/40"
          >
            {/* Background Image - Optimized */}
            <Image 
              src={`/${event.imgKey}.webp`}
              alt={event.nama}
              fill // Replaces w-full h-full absolute
              sizes="(max-width: 768px) 100vw, 33vw" // Instructs browser on expected layout size
              className="object-cover opacity-30 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
              // Note: if this component is at the very top of your page viewport, uncomment the line below:
              // priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent z-10" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2 z-20">
              <h3 className="text-gold font-bold text-2xl tracking-wide" style={{ fontFamily: "var(--font-cinzel)" }}>
                {event.nama}
              </h3>
              
              {event.guest && (
                <span className="text-xs font-semibold text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded-full w-max mt-1">
                  Guest: {event.guest}
                </span>
              )}

              <p className="text-text-main/90 text-sm font-medium leading-relaxed max-w-xs mt-1">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Elegant Popup Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gold/40 bg-bg-card shadow-2xl transition-all duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header - Optimized */}
            <div className="relative h-48 sm:h-60 w-full overflow-hidden border-b border-gold/20">
              <Image 
                src={`/${selectedEvent.imgKey}.webp`}
                alt={selectedEvent.nama}
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
                priority // Preloads modal asset immediately when modal component renders
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent z-10" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-black/50 text-gold hover:bg-gold hover:text-black transition-all duration-200 z-20"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-gold font-bold text-3xl tracking-wider" style={{ fontFamily: "var(--font-cinzel)" }}>
                  {selectedEvent.nama}
                </h3>
                <hr className="w-16 border-gold/40 mt-2" />
              </div>

              {selectedEvent.guest && (
                <div className="rounded-xl border border-gold/30 bg-gold/5 p-3 flex flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-widest text-gold/70 font-semibold">Special Guest Star</span>
                  <span className="text-lg font-bold text-text-main tracking-wide" style={{ fontFamily: "var(--font-cinzel)" }}>
                    {selectedEvent.guest}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-gold/50 font-semibold">Description</span>
                <p className="text-text-main/90 text-base leading-relaxed">
                  {selectedEvent.desc}
                </p>
              </div>

              <button 
                onClick={() => setSelectedEvent(null)}
                className="mt-2 w-full py-2.5 rounded-xl border border-gold/50 text-gold font-semibold tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}