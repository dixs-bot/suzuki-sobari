```jsx
"use client";

import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

export default function AboutSection() {
  const [distanceInfo, setDistanceInfo] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const calculateDistance = () => {
    if (!navigator.geolocation) {
      setDistanceInfo("Browser Anda tidak mendukung geolokasi.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Radius bumi dalam kilometer
        const R = 6371;

        // Konversi derajat ke radian
        const dLat =
          ((siteConfig.dealerCoords.lat - userLat) * Math.PI) / 180;

        const dLng =
          ((siteConfig.dealerCoords.lng - userLng) * Math.PI) / 180;

        // Rumus Haversine
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((userLat * Math.PI) / 180) *
            Math.cos((siteConfig.dealerCoords.lat * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = Math.round(R * c * 10) / 10;

        setDistanceInfo(
          `Jarak Anda ke ${siteConfig.businessName} sekitar ${distance} km.`
        );

        setLoadingLocation(false);
      },
      () => {
        setDistanceInfo(
          "Tidak dapat mengakses lokasi Anda. Dealer beralamat di Jl. Ahmad Yani No.68, Bandung."
        );

        setLoadingLocation(false);
      }
    );
  };

  return (
    <>
      {/* =========================
          ABOUT SECTION
      ========================== */}
      <section id="tentang" className="section">
        <div className="container about-grid">
          {/* Foto Sales */}
          <div className="about-image-wrap reveal">
            <div className="sales-photo-wrap">
              <img
                src="/images/profil.png"
                alt={`${siteConfig.salesName} – Sales Suzuki Bandung & Cimahi di Dealer NJS`}
                className="sales-photo"
                loading="lazy"
              />

              <div className="sales-photo-badge">
                <span className="badge-name">
                  {siteConfig.businessName}
                </span>

                <span className="badge-status">
                  Certified Suzuki Consultant
                </span>
              </div>
            </div>
          </div>

          {/* Informasi Tentang Kami */}
          <div className="about-text reveal">
            <h2 className="section-title">
              Tentang <span className="title-accent">Kami</span>
            </h2>

            <p className="about-lead">
              Halo, salam sehat dan salam sejahtera. Saya{" "}
              <strong>Muhammad Sobari</strong>, Sales Executive &amp;
              Consultant resmi dari Suzuki Bandung &amp; Jawa Barat{" "}
              (<strong>NJS Ahmad Yani</strong>).
            </p>

            <p>
              Mengutamakan pelayanan terbaik bagi seluruh Sahabat Suzuki,
              Sobari berkomitmen untuk memberikan pelayanan yang profesional,
              ramah, dan terpercaya dalam membantu memenuhi setiap kebutuhan
              kendaraan Anda.
            </p>

            <p>
              Bagi Sobari, setiap kendaraan bukan sekadar sebuah pilihan,
              tetapi bagian dari perjalanan dan impian setiap keluarga. Karena
              itu, menjadi bagian dari perjalanan Sahabat Suzuki dalam
              mewujudkan kendaraan impian merupakan sebuah kebanggaan dan
              kehormatan.
            </p>

            <p>
              Mari wujudkan kendaraan impian Anda bersama Suzuki.
            </p>

            {/* Fitur Layanan */}
            <div className="about-features">
              <div className="about-feature-item">
                <div className="af-icon">✓</div>

                <div>
                  <h4>Proses Cepat &amp; Mudah</h4>
                  <p>
                    Pemberkasan dibantu dari awal hingga serah terima unit di
                    rumah Anda.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="af-icon">✓</div>

                <div>
                  <h4>Negosiasi Terbaik</h4>
                  <p>
                    Diskon spesial, bonus aksesoris lengkap, dan paket kredit
                    bersahabat.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="af-icon">✓</div>

                <div>
                  <h4>Layanan After Sales</h4>
                  <p>
                    Bantuan klaim asuransi, servis berkala, dan ketersediaan
                    suku cadang resmi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION SECTION
      ========================== */}
      <section className="section section-alt">
        <div className="container text-center reveal">
          <h2 className="section-title">
            <span className="title-accent">Lokasi</span>{" "}
            Dealer Suzuki NJS Ahmad Yani Bandung
          </h2>

          <p className="section-subtitle">
            Kunjungi Dealer Suzuki NJS Ahmad Yani Bandung untuk melihat-lihat
            unit mobil Suzuki, Test Drive, dan konsultasi kebutuhan kendaraan
            Anda.
          </p>

          {/* Google Maps */}
          <div
            className="map-container"
            style={{
              marginTop: "24px",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <iframe
              src={siteConfig.mapsUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Dealer Suzuki NJS Ahmad Yani Bandung"
            />
          </div>

          {/* Cek Jarak */}
          <div
            className="card glass"
            style={{
              marginTop: "24px",
              maxWidth: "600px",
              margin: "24px auto 0",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>
              Jarak Anda ke Dealer {siteConfig.businessName}
            </h3>

            <p id="distance-result">
              {distanceInfo ||
                "Klik tombol di bawah untuk mengetahui jarak Anda ke dealer kami."}
            </p>

            <button
              onClick={calculateDistance}
              className="btn btn-outline btn-sm"
              style={{ marginTop: "12px" }}
              disabled={loadingLocation}
            >
              {loadingLocation
                ? "Mencari Lokasi..."
                : "Cek Jarak ke Dealer"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
```
