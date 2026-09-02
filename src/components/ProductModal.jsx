"use client";

import { useState, useEffect } from "react";
import { getWhatsAppLink } from "../data/siteConfig";

export default function ProductModal({ product, onClose }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [activeImage, setActiveImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [simDpPercent, setSimDpPercent] = useState(20);
  const [simTenor, setSimTenor] = useState(5);
  const [simResult, setSimResult] = useState(null);

  // Sync state when product changes & handle body scroll locking
  useEffect(() => {
    if (product) {
      setSelectedVariantIndex(0);
      setActiveImage(product.image || "");
      setSelectedColor(product.colors && product.colors[0] ? product.colors[0].name : "");
      setSimResult(null);

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Cleanup unlock on unmount / close
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [product]);

  if (!product) return null;

  const currentVariant =
    product.variants && product.variants.length > 0
      ? product.variants[selectedVariantIndex] || product.variants[0]
      : { name: "", price: 0 };

  const currentPrice = currentVariant.price || 0;
  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean);

  const calculateSim = (e) => {
    if (e) e.preventDefault();
    const dpRatio = simDpPercent / 100;
    const dp = currentPrice * dpRatio;
    const pokok = currentPrice - dp;
    const bungaRates = { 1: 0.05, 2: 0.06, 3: 0.07, 4: 0.08, 5: 0.09 };
    const bunga = bungaRates[simTenor] || 0.08;
    const totalBunga = pokok * bunga * simTenor;
    const totalBayar = pokok + totalBunga;
    const cicilan = Math.round(totalBayar / (simTenor * 12));

    setSimResult({
      harga: currentPrice,
      dp,
      simDpPercent,
      cicilan,
      tenor: simTenor
    });
  };

  const getWaMessage = () => {
    return `Halo, saya ingin konsultasi & booking unit Suzuki ${product.name} tipe ${currentVariant.name} (Harga OTR: Rp ${currentPrice.toLocaleString("id-ID")}).`;
  };

  return (
    <div
      className="product-modal-overlay"
      id="product-modal-overlay"
      onClick={(e) => {
        if (e.target.id === "product-modal-overlay") onClose();
      }}
    >
      <div className="product-modal glass">
        <button
          type="button"
          className="product-modal-close"
          onClick={onClose}
          aria-label="Tutup Modal"
        >
          &times;
        </button>

        <div className="product-modal-content">
          {/* Gallery Column */}
          <div className="product-modal-gallery">
            <div className="product-modal-main-image-wrap">
              <img
                src={activeImage ? `/images/${activeImage}` : `/images/${product.image}`}
                alt={product.name}
                className="product-modal-main-image"
              />
            </div>

            {allImages.length > 1 && (
              <div className="product-modal-thumbs">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`product-modal-thumb-btn ${
                      activeImage === img || (!activeImage && i === 0) ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={`/images/${img}`} alt={`${product.name} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="product-modal-color-section">
                <h4>Pilihan Warna</h4>
                <div className="product-modal-color-chips">
                  {product.colors.map((w, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`product-modal-color-chip ${selectedColor === w.name ? "active" : ""}`}
                      onClick={() => {
                        setSelectedColor(w.name);
                        if (w.image) setActiveImage(w.image);
                      }}
                      title={w.name}
                    >
                      <span className="color-dot" style={{ backgroundColor: w.hex || "#333" }}></span>
                      <span className="color-name">{w.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info Column */}
          <div className="product-modal-info">
            <h2 className="product-modal-title">{product.name}</h2>
            <p className="product-modal-tagline">{product.tagline}</p>
            <p className="product-modal-desc">{product.description}</p>

            {/* Active Price Box */}
            <div className="product-modal-price-box">
              <span className="price-label">Harga OTR Bandung ({currentVariant.name}):</span>
              <span className="price-val">Rp {currentPrice.toLocaleString("id-ID")}</span>
            </div>

            {/* Variant Options */}
            {product.variants && product.variants.length > 0 && (
              <div className="product-modal-variants">
                <h4>Pilihan Tipe &amp; Transmisi</h4>
                <div className="product-modal-variant-buttons">
                  {product.variants.map((v, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`product-modal-variant-btn ${selectedVariantIndex === index ? "active" : ""}`}
                      onClick={() => {
                        setSelectedVariantIndex(index);
                        setSimResult(null);
                      }}
                    >
                      <span className="var-name">{v.name}</span>
                      <span className="var-price">
                        Rp {(v.price || 0).toLocaleString("id-ID")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specs && (
              <div className="product-modal-specs">
                <h4>Spesifikasi Utama</h4>
                <div className="product-modal-specs-grid">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">{key}</span>
                      <span className="spec-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="product-modal-features">
                <h4>Fitur Unggulan</h4>
                <ul className="product-modal-feature-list">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Credit Simulation */}
            <div className="product-modal-sim-box card glass">
              <h4>Simulasi Cicilan Cepat ({currentVariant.name})</h4>
              <form onSubmit={calculateSim}>
                <div className="form-group-modal">
                  <label htmlFor="modal-sim-dp">DP (%)</label>
                  <select
                    id="modal-sim-dp"
                    value={simDpPercent}
                    onChange={(e) => setSimDpPercent(Number(e.target.value))}
                  >
                    <option value={15}>15% (DP Promo Ringan)</option>
                    <option value={20}>20% (Standar)</option>
                    <option value={25}>25%</option>
                    <option value={30}>30%</option>
                    <option value={40}>40%</option>
                  </select>
                </div>
                <div className="form-group-modal">
                  <label htmlFor="modal-sim-tenor">Tenor (Tahun)</label>
                  <select
                    id="modal-sim-tenor"
                    value={simTenor}
                    onChange={(e) => setSimTenor(Number(e.target.value))}
                  >
                    <option value={1}>1 Tahun (12x)</option>
                    <option value={2}>2 Tahun (24x)</option>
                    <option value={3}>3 Tahun (36x)</option>
                    <option value={4}>4 Tahun (48x)</option>
                    <option value={5}>5 Tahun (60x)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-outline btn-full" style={{ marginTop: "8px" }}>
                  Hitung Cicilan {currentVariant.name}
                </button>
              </form>

              {simResult && (
                <div className="sim-result-box" style={{ marginTop: "12px" }}>
                  <p>
                    <strong>DP ({simResult.simDpPercent}%):</strong> Rp {Math.round(simResult.dp).toLocaleString("id-ID")}
                  </p>
                  <p>
                    <strong>Cicilan:</strong>{" "}
                    <span className="price-val">
                      Rp {simResult.cicilan.toLocaleString("id-ID")}
                    </span>{" "}
                    /bulan ({simResult.tenor} Tahun)
                  </p>
                </div>
              )}
            </div>

            {/* WhatsApp CTA Action */}
            <div className="product-modal-actions" style={{ marginTop: "20px" }}>
              <a
                href={getWhatsAppLink(getWaMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-glow btn-full"
              >
                Chat Sales via WhatsApp ({currentVariant.name})
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
