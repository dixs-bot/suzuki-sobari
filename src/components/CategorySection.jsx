"use client";

import { siteConfig } from "../data/siteConfig";

export default function CategorySection({ currentFilter, onSelectCategory }) {
  const categories = [
    {
      id: "suv",
      title: "SUV & Crossover",
      models: "Grand Vitara, XL7, Jimny",
      desc: "Tangguh untuk segala medan dengan teknologi hybrid modern dan fitur kenyamanan premium."
    },
    {
      id: "mpv",
      title: "MPV & City Car",
      models: "All New Ertiga, S-Presso",
      desc: "Kabin luas dan nyaman untuk keluarga, konsumsi BBM super irit, lincah bermanuver di perkotaan."
    },
    {
      id: "komersial",
      title: "Komersial & Niaga",
      models: "New Carry Pick Up, Carry Box, APV Blind Van",
      desc: "Rajanya Pick Up di Indonesia! Mesin bandel, muatan banyak, hemat bahan bakar, bisnis makin untung."
    }
  ];

  return (
    <>
      <section className="section">
        <div className="container text-center reveal">
          <h2 className="section-title">
            Dealer Mobil Suzuki Bandung Resmi &amp; Terpercaya
          </h2>
          <p className="section-subtitle">
            Dealer Suzuki Bandung dari {siteConfig.businessName} merupakan dealer resmi Suzuki yang melayani pembelian mobil Suzuki baru dengan proses mudah, cepat, dan aman. Kami melayani pembelian cash maupun kredit dengan promo DP ringan, bunga rendah, serta bonus melimpah untuk area Bandung, Cimahi, dan Jawa Barat.
          </p>
          <p className="section-subtitle" style={{ marginTop: "12px" }}>
            Dapatkan pelayanan profesional dari sales consultant berpengalaman yang siap membantu Anda memilih mobil Suzuki terbaik seperti Suzuki XL7, Ertiga Hybrid, Grand Vitara, Jimny, hingga Suzuki Carry Pick Up untuk kebutuhan usaha Anda. Untuk Anda yang mencari dealer mobil Suzuki Bandung terpercaya dengan pelayanan terbaik dan promo menarik, {siteConfig.dealerName} adalah pilihan yang tepat.
          </p>
        </div>
      </section>

      <section id="kategori" className="section">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="title-accent">Kategori</span> Mobil Suzuki
          </h2>
          <p className="section-subtitle reveal">
            Pilih kategori mobil yang sesuai dengan kebutuhan dan gaya hidup Anda
          </p>

          <div className="category-grid reveal">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`card glass category-card ${currentFilter === cat.id ? "active-cat" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById("produk");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="category-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3>{cat.title}</h3>
                <p className="category-models">{cat.models}</p>
                <p className="category-desc">{cat.desc}</p>
                <div className="btn btn-outline" style={{ marginTop: "12px", width: "100%" }}>
                  Lihat Unit {cat.title.split(" ")[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
