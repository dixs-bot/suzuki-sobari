"use client";

import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Berapa DP minimal mobil Suzuki di Bandung & Cimahi?",
      a: `DP minimal mengikuti ketentuan leasing, namun banyak paket promo DP ringan mulai dari belasan juta untuk tipe tertentu. Hubungi ${siteConfig.salesName} via WhatsApp untuk cek promo terbaru yang sesuai dengan profil Anda.`
    },
    {
      q: "Apakah bisa tukar tambah mobil lama dengan mobil Suzuki baru?",
      a: "Bisa. Kami melayani tukar tambah mobil lama Anda ke mobil Suzuki baru, proses dibantu sampai selesai termasuk appraisal unit lama dan pengurusan berkas."
    },
    {
      q: `Apakah ${siteConfig.dealerName} melayani luar kota Bandung?`,
      a: "Ya, kami melayani konsumen dari Bandung, Cimahi, dan sekitarnya seperti Padalarang, Lembang, Rancaekek, hingga Kabupaten Bandung, Subang, Sumedang, dan Garut."
    },
    {
      q: `Di mana lokasi dealer ${siteConfig.dealerName}?`,
      a: `Dealer berlokasi di ${siteConfig.address}. Anda bisa datang langsung atau janjian test drive terlebih dahulu dengan sales.`
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="title-accent">FAQ</span> Pertanyaan Umum
        </h2>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleFaq(i)}
                aria-expanded={openIndex === i}
              >
                <h3>{faq.q}</h3>
                <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
