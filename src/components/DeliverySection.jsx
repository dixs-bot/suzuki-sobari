"use client";

import { useState } from "react";
import { deliveryPhotos } from "../data/siteConfig";

export default function DeliverySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="delivery" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="title-accent">Galeri</span> Serah Terima Unit
        </h2>
        <p className="section-subtitle reveal">
          Bukti nyata kepuasan dan kepercayaan pelanggan membeli mobil Suzuki bersama kami di Bandung &amp; Cimahi
        </p>

        <div className="delivery-grid reveal" id="delivery-gallery">
          {deliveryPhotos.map((photo, index) => (
            <div
              key={index}
              className="delivery-card card glass"
              onClick={() => setSelectedPhoto(photo)}
              style={{ cursor: "pointer" }}
            >
              <div className="delivery-img-wrap">
                <img
                  src={`/images/${photo.src}`}
                  alt={photo.caption}
                  className="delivery-img"
                  loading="lazy"
                />
              </div>
              <p className="delivery-caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="modal active"
          id="modal-delivery"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="modal-content glass delivery-modal-content">
            <button
              className="modal-close"
              onClick={() => setSelectedPhoto(null)}
            >
              &times;
            </button>
            <img
              src={`/images/${selectedPhoto.src}`}
              alt={selectedPhoto.caption}
              style={{ width: "100%", borderRadius: "8px", maxHeight: "80vh", objectFit: "contain" }}
            />
            <p style={{ marginTop: "12px", textAlign: "center", fontWeight: "600" }}>
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
