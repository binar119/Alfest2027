import React from 'react';

const timelineData = [
  { name: "Early Bird", label: "20 Nov - 4 Des", pos: "col-start-1 col-end-2", color: "from-amber-500 to-orange-600" },
  { name: "Batch 1", label: "4 Des - 27 Des", pos: "col-start-2 col-end-3", color: "from-orange-500 to-red-600" },
  { name: "Batch 2", label: "28 Des - 27 Jan", pos: "col-start-3 col-end-4", color: "from-red-500 to-pink-600" },
  { name: "Technical Meeting", label: "05 Feb", pos: "col-start-4 col-end-5", color: "from-cyan-500 to-blue-600" },
  { name: "Opening Alfest", label: "15 Feb", pos: "col-start-5 col-end-6", color: "from-emerald-500 to-teal-600" },
  { name: "🚀 Alfest Bazar & Expo", label: "15 - 19 Feb", pos: "col-start-5 col-end-10", color: "from-purple-500 to-indigo-600" },
  { name: "Penyisihan: Alimpiad Ilmiah", label: "15 Feb", pos: "col-start-5 col-end-6", color: "from-blue-500 to-indigo-500" },
  { name: "Penyisihan: Alimpiad Sports", label: "15 Feb", pos: "col-start-5 col-end-6", color: "from-blue-500 to-indigo-500" },
  { name: "Penyisihan: Alimpic", label: "15 Feb", pos: "col-start-5 col-end-6", color: "from-blue-500 to-indigo-500" },
  { name: "Semifinal: Sports", label: "16 Feb", pos: "col-start-6 col-end-7", color: "from-yellow-500 to-amber-600" },
  { name: "🔥 Grand Final All Match", label: "17 Feb", pos: "col-start-7 col-end-8", color: "from-red-600 to-red-800" },
  { name: "Alfest Talk", label: "18 Feb", pos: "col-start-8 col-end-9", color: "from-violet-500 to-purple-600" },
  { name: "Awarding & Closing", label: "19 Feb", pos: "col-start-9 col-end-10", color: "from-yellow-500 to-amber-500" },
  { name: "❤️ Philanthropy Event", label: "17 - 20 Mar", pos: "col-start-10 col-end-11", color: "from-teal-400 to-emerald-500" }
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
  return (
    <div className="w-full text-white py-6 font-sans">
      <div className="w-full bg-[#111625]/60 rounded-xl border border-gray-800 p-4 md:p-6 overflow-x-auto backdrop-blur-sm">
        <div className="min-w-[1000px]">
          
          {/* Header Grid Tanggal */}
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
                <div className={`p-2.5 rounded bg-gradient-to-r ${event.color} ${event.pos} shadow-md hover:scale-[1.01] transition-all cursor-pointer`}>
                  <div className="font-bold text-xs truncate">{event.name}</div>
                  <div className="text-[10px] opacity-80">{event.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}