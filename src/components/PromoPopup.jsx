"use client";

import { useState, useEffect } from "react";
import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="spp-overlay spp-active"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }}
      onClick={(e) => {
        if (e.target.classList.contains("spp-overlay")) setIsOpen(false);
      }}
    >
      <div
        className="spp-card"
        style={{
           background: "#0B1F3A",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "480px",
          width: "100%",
          position: "relative",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          color: "#fff"
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer"
          }}
          aria-label="Tutup"
        >
          &times;
        </button>

        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
            style={{
               background: "#12345B",
              color: "#fff",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase"
            }}
          >
            Spesial Promo Suzuki 2026
          </span>
          <h3 style={{ marginTop: "12px", fontSize: "20px", fontWeight: 800 }}>
            Promo DP Ringan &amp; Diskon Spesial!
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginTop: "6px" }}>
            Dapatkan diskon puluhan juta rupiah, bunga kredit 0%, dan bonus paket aksesoris lengkap untuk pembelian mobil Suzuki di {siteConfig.businessName}.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href={getWhatsAppLink("Halo, saya tertarik dengan promo spesial Suzuki di Bandung. Mohon info promo dan diskon terbarunya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-glow btn-full"
            style={{ textAlign: "center" }}
            onClick={() => setIsOpen(false)}
          >
            Klaim Promo via WhatsApp
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-outline btn-full"
            style={{ textAlign: "center" }}
          >
            Lihat Unit Mobil Lainnya
          </button>
        </div>
      </div>
    </div>
  );
}
