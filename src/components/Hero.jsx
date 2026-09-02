"use client";

import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="badge animate-fade-up">
            <span className="badge-dot"></span> Promo Suzuki Bandung & Cimahi 2026
          </div>
          <h1 className="animate-fade-up" style={{ "--delay": "0.15s" }}>
            {siteConfig.dealerName}
          </h1>
          <p className="animate-fade-up" style={{ "--delay": "0.3s" }}>
            Penjualan mobil baru Suzuki untuk wilayah Bandung raya, Cimahi, dan sekitarnya.
            Dapatkan promo DP ringan, bunga rendah, diskon puluhan juta, serta proses kredit
            cepat dan dibantu sampai approved!
          </p>
          <div className="hero-actions animate-fade-up" style={{ "--delay": "0.45s" }}>
            <a href="#produk" className="btn btn-outline">
              Lihat Unit Mobil
            </a>
            <a
              href={getWhatsAppLink("Halo, saya tertarik dengan promo Suzuki. Mohon info promo dan kredit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-glow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Konsultasi WhatsApp
            </a>
          </div>

          <div className="sales-card animate-fade-up" style={{ "--delay": "0.6s" }}>
            <p className="sales-name">{siteConfig.businessName}</p>
            <p className="sales-role">{siteConfig.salesRole}</p>
          </div>
        </div>

        <div className="hero-right animate-fade-up" style={{ "--delay": "0.3s" }}>
          <div className="hero-video-wrap">
            <video
              id="hero-video"
              className="hero-video"
              src="/images/fronk-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className="hero-video-overlay">
              <span className="hero-video-tag">Unit Unggulan Suzuki</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero-stats animate-fade-up" style={{ "--delay": "0.75s" }}>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Unit Terjual / Tahun</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Kredit Disetujui</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Fast Response Konsultasi</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Dealer Resmi NJS</span>
        </div>
      </div>
    </section>
  );
}
