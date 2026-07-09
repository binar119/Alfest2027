import React from "react";
import SponsorCard from "@/components/SponsorCard"; // Import komponen baru tadi

export default function SponsorshipPage() {
  const sponsorTiers = [
    {
      title: "Bronze",
      desc: "Paket kemitraan awal untuk mendukung kesuksesan Albinaa Festival 2027.",
      logoPlaceholder: "BRONZE",
      textColor: "text-amber-500",
      shadowColor: "hover:shadow-amber-500/30",
      benefits: ["Logo ukuran kecil di spanduk acara", "Adlips oleh MC sebanyak 1x", "Sertifikat apresiasi digital"],
    },
    {
      title: "Silver",
      desc: "Pilihan tepat untuk meningkatkan jangkauan brand Anda di kalangan audiens.",
      logoPlaceholder: "SILVER",
      textColor: "text-slate-400",
      shadowColor: "hover:shadow-slate-400/30",
      benefits: ["Logo ukuran sedang di semua media cetak", "Adlips oleh MC di setiap sesi utama", "1 Slot promosi di Instagram Story @alfest2027", "E-Sertifikat apresiasi"],
    },
    {
      title: "Gold",
      desc: "Paket populer dengan eksposur media yang luas dan interaksi langsung.",
      logoPlaceholder: "GOLD",
      textColor: "text-yellow-600",
      shadowColor: "hover:shadow-yellow-500/40",
      benefits: ["Logo ukuran besar di backdrop utama", "Stan pameran / Booth ukuran standar (2x2m)", "Dedicating Post di Feed Instagram Albinaa Festival", "Adlips oleh MC di setiap pembukaan & penutupan", "Pencantuman logo di t-shirt panitia"],
    },
    {
      title: "Platinum",
      desc: "Kemitraan eksklusif dengan keuntungan branding premium di seluruh area festival.",
      logoPlaceholder: "PLATINUM",
      textColor: "text-cyan-700",
      shadowColor: "hover:shadow-cyan-400/40",
      benefits: ["Logo ukuran ekstra besar di semua media cetak & digital", "Stan pameran / Booth di area VIP (3x3m)", "Logo dipasang di video teaser & dokumentasi utama", "Promosi berkala di seluruh media sosial Albinaa Festival", "Slot khusus pengenalan produk di panggung utama (5 menit)"],
    },
    {
      title: "Diamond / Utama",
      desc: "Mitra utama Albinaa Festival 2027. Hak branding tertinggi dan eksklusivitas industri penuh.",
      logoPlaceholder: "DIAMOND",
      textColor: "text-indigo-600",
      shadowColor: "hover:shadow-purple-500/50",
      benefits: ["Hak penamaan event (Albinaa Festival 2027 dipersembahkan oleh Brand Anda)", "Logo eksklusif di main stage & tiket masuk", "Stan VIP Utama di lokasi strategis", "Hak distribusi produk tunggal di area festival", "Durasi promosi khusus di panggung utama setiap hari (10 menit)", "Plakat penghargaan fisik eksklusif"],
    },
    {
      title: "TAJIR BOS",
      desc: "POKOKNYA LU ORG TETRATIJIR SEDUINA!!! GILE GW RESPEK",
      logoPlaceholder: "DIAMOND",
      textColor: "text-red-600",
      shadowColor: "hover:shadow-red-500/50",
      benefits: ["respek dari seluruh kba", "lifetime makan matham gratiss tis tis", "ilfe time al inn", "lebih berkuasa dibanding mudir"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl px-4 mx-auto text-center">
        {/* HEADER */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 mb-4">
          SPONSORSHIP OPPORTUNITIES
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-10">
          Bergabunglah sebagai mitra strategis Albinaa Festival 2027 dan hubungkan brand Anda dengan ribuan partisipan.
        </p>

        {/* TOMBOL DOWNLOAD */}
        <div className="mb-20">
          <a
            href="/proposal.pdf"
            download="Proposal_Sponsorship_Alfest_2027.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Unduh Proposal (.PDF)
          </a>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {sponsorTiers.map((tier, index) => (
            <SponsorCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
}