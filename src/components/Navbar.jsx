"use client";

import { useState, useEffect } from "react";
import { siteConfig, getWhatsAppLink } from "../data/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        <a href="#beranda" className="nav-logo" onClick={closeMenu}>
          <img
            src="/images/suzuki-logo.png"
            alt={`Logo ${siteConfig.businessName}`}
            className="logo-img"
          />
        </a>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`} id="nav-menu">
          <a href="#beranda" className="nav-link active" onClick={closeMenu}>
            Beranda
          </a>
          <a href="#kategori" className="nav-link" onClick={closeMenu}>
            Kategori
          </a>
          <a href="#produk" className="nav-link" onClick={closeMenu}>
            Produk
          </a>
          <a href="#simulasi" className="nav-link" onClick={closeMenu}>
            Simulasi Kredit
          </a>
          <a href="#tentang" className="nav-link" onClick={closeMenu}>
            Tentang Kami
          </a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>
            FAQ
          </a>
          <a href="#kontak" className="nav-link" onClick={closeMenu}>
            Kontak
          </a>
          <a
            href={getWhatsAppLink("Halo, saya ingin konsultasi pembelian mobil Suzuki.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Chat Sales
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          id="nav-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
