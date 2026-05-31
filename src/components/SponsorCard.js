import React from "react";

export default function SponsorCard({ tier }) {
  return (
    <div
      className={`flex flex-col justify-between bg-slate-900/60 rounded-2xl border border-slate-800/80 p-6 md:p-8 shadow-xl hover:scale-[1.03] ${tier.shadowColor} hover:border-slate-700/50 transition-all duration-300`}
    >
      {/* Bagian Atas Card */}
      <div>
        {/* Info Paket */}
        <h3 className={`text-2xl font-bold text-left mb-2 ${tier.textColor}`}>{tier.title}</h3>
        <p className="text-sm text-slate-400 text-left mb-6 leading-relaxed">{tier.desc}</p>
        
        <hr className="border-slate-800 my-4" />

        {/* List Benefit */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 text-left mb-3">Fasilitas / Benefit:</h4>
        <ul className="space-y-2.5 text-left mb-8">
          {tier.benefits.map((benefit, bIndex) => (
            <li key={bIndex} className="text-sm text-slate-300 flex items-start gap-2">
              <span className="text-amber-500 mt-1 shrink-0">✔</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bagian Tombol Aksi */}
      <div className="mt-auto">
        <a
          href="/proposal.pdf"
          download={`Proposal_Sponsorship_Alfest_2027.pdf`}
          className="block w-full py-3 text-center text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 rounded-xl transition-all duration-200 border border-slate-700/50 hover:border-amber-500"
        >
          Pilih Paket & Unduh Detail
        </a>
      </div>
    </div>
  );
}