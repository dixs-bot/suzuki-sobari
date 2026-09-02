"use client";

import { useState } from "react";
import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo ${siteConfig.businessName}, saya ${formData.name}. ${formData.message} (No HP: ${formData.phone}, Email: ${formData.email || "-"})`;
    window.open(getWhatsAppLink(text), "_blank");
    setSent(true);
  };

  return (
    <section id="kontak" className="section">
      <div className="container contact-grid">
        <div className="reveal">
          <h2 className="section-title">
            <span className="title-accent">Hubungi</span> Kami
          </h2>
          <p className="section-subtitle">
            Isi form di bawah ini atau langsung chat via WhatsApp. Kami siap membantu konsultasi tipe mobil, simulasi kredit, dan booking test drive.
          </p>
          <form
            id="contact-form"
            className="card glass form-grid contact-card"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Nama</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Nama lengkap Anda"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-phone">No. HP / WhatsApp</label>
              <input
                type="text"
                id="contact-phone"
                placeholder="08xx-xxxx-xxxx"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                placeholder="email@contoh.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="contact-message">Pesan</label>
              <textarea
                id="contact-message"
                rows="4"
                placeholder="Contoh: Saya mau tanya promo dan simulasi kredit untuk XL7 di Bandung."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <div className="form-actions full-width">
              <button type="submit" className="btn btn-primary btn-glow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Kirim Pesan via WhatsApp
              </button>
            </div>
            {sent && (
              <p style={{ color: "#25D366", marginTop: "10px", gridColumn: "1 / -1" }}>
                Pesan telah disiapkan di WhatsApp!
              </p>
            )}
          </form>
        </div>

        <div className="contact-info reveal">
          <h3>Informasi Dealer</h3>
          <div className="contact-info-card glass card">
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>
                <strong>{siteConfig.dealerName}</strong>
                <br />
                {siteConfig.address}
              </p>
            </div>
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <p>
                <strong>WhatsApp:</strong> {siteConfig.phoneNumberFormatted}
              </p>
            </div>
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <p>
                <strong>Email:</strong> {siteConfig.email}
              </p>
            </div>
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p>
                <strong>Jam Operasional:</strong>
                <br />
                Senin - Minggu, 08.00 - 17.00
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Halo, saya ingin konsultasi langsung dengan Sales Suzuki.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-glow btn-full"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Chat Sales via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
