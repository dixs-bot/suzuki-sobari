"use client";

import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-wrap" style={{ marginBottom: "16px" }}>
              <img
                src="/images/suzuki-logo.png"
                alt={`Logo ${siteConfig.businessName}`}
                className="footer-logo-img"
              />
            </div>
            <p className="footer-desc">
              Dealer resmi Suzuki Nusantara Jaya Sentosa melayani penjualan mobil baru Suzuki di wilayah Bandung, Cimahi, dan Jawa Barat.
            </p>
          </div>
          <div>
            <h4>Navigasi</h4>
            <a href="#beranda">Beranda</a>
            <a href="#produk">Produk</a>
            <a href="#simulasi">Simulasi Kredit</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </div>
          <div>
            <h4>Produk Populer</h4>
            <a href="#produk">Suzuki XL7 Hybrid</a>
            <a href="#produk">Suzuki All New Ertiga</a>
            <a href="#produk">Suzuki New Carry Pick Up</a>
            <a href="#produk">Suzuki Jimny 5-Door</a>
            <a href="#produk">Suzuki Grand Vitara</a>
          </div>
          <div>
            <h4>Hubungi Kami</h4>
            <p>{siteConfig.address}</p>
            <p>WhatsApp: {siteConfig.phoneNumberFormatted}</p>
            <p>Email: {siteConfig.email}</p>
            <p>Jam Kerja: Senin - Minggu (08.00 - 17.00 WIB)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 {siteConfig.dealerName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
