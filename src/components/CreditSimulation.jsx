"use client";

import { useState } from "react";
import { getWhatsAppLink } from "../data/siteConfig";

export default function CreditSimulation({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || "");
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenorYears, setTenorYears] = useState(5);
  const [result, setResult] = useState(null);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];
  const selectedVariant =
    selectedProduct?.variants && selectedProduct.variants.length > 0
      ? selectedProduct.variants[selectedVariantIndex] || selectedProduct.variants[0]
      : { name: "", price: 0 };

  const handleProductChange = (e) => {
    setSelectedProductId(e.target.value);
    setSelectedVariantIndex(0);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!selectedVariant || !selectedVariant.price) return;

    const harga = selectedVariant.price;
    const dp = harga * (dpPercent / 100);
    const pokok = harga - dp;
    const bungaRates = { 1: 0.05, 2: 0.06, 3: 0.07, 4: 0.08, 5: 0.09 };
    const bunga = bungaRates[tenorYears] || 0.08;
    const totalBunga = pokok * bunga * tenorYears;
    const totalBayar = pokok + totalBunga;
    const cicilan = Math.round(totalBayar / (tenorYears * 12));

    setResult({
      namaMobil: selectedProduct.name,
      namaVarian: selectedVariant.name,
      harga,
      dpPercent,
      dp,
      tenorYears,
      cicilan
    });
  };

  return (
    <section id="simulasi" className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="title-accent">Simulasi</span> Kredit Mobil Suzuki
        </h2>
        <p className="section-subtitle reveal">
          Hitung estimasi Down Payment (DP) dan cicilan bulanan sesuai budget Anda
        </p>

        <div className="sim-grid reveal">
          <form
            id="global-simulation-form"
            className="card glass form-grid"
            onSubmit={handleCalculate}
          >
            <div className="form-group">
              <label htmlFor="sim-product">Pilih Model Mobil</label>
              <select
                id="sim-product"
                value={selectedProductId}
                onChange={handleProductChange}
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sim-variant">Pilih Tipe / Varian</label>
              <select
                id="sim-variant"
                value={selectedVariantIndex}
                onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              >
                {selectedProduct?.variants?.map((v, i) => (
                  <option key={i} value={i}>
                    {v.name} - Rp {(v.price || 0).toLocaleString("id-ID")}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sim-dp">Uang Muka / DP (%)</label>
              <select
                id="sim-dp"
                value={dpPercent}
                onChange={(e) => setDpPercent(Number(e.target.value))}
              >
                <option value={15}>15% (Promo DP Ringan)</option>
                <option value={20}>20% (Standar)</option>
                <option value={25}>25%</option>
                <option value={30}>30%</option>
                <option value={40}>40%</option>
                <option value={50}>50%</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sim-tenor">Jangka Waktu / Tenor</label>
              <select
                id="sim-tenor"
                value={tenorYears}
                onChange={(e) => setTenorYears(Number(e.target.value))}
              >
                <option value={1}>1 Tahun (12 Bulan)</option>
                <option value={2}>2 Tahun (24 Bulan)</option>
                <option value={3}>3 Tahun (36 Bulan)</option>
                <option value={4}>4 Tahun (48 Bulan)</option>
                <option value={5}>5 Tahun (60 Bulan)</option>
              </select>
            </div>

            <div className="form-actions full-width">
              <button type="submit" className="btn btn-primary btn-glow">
                Hitung Simulasi Kredit
              </button>
            </div>
          </form>

          <div className="card glass sim-result-panel">
            <h3>Hasil Estimasi Cicilan</h3>
            {result ? (
              <div className="sim-details">
                <div className="sim-row">
                  <span>Unit:</span>
                  <strong>{result.namaMobil} ({result.namaVarian})</strong>
                </div>
                <div className="sim-row">
                  <span>Harga OTR:</span>
                  <strong>Rp {result.harga.toLocaleString("id-ID")}</strong>
                </div>
                <div className="sim-row">
                  <span>Estimasi DP ({result.dpPercent}%):</span>
                  <strong>Rp {Math.round(result.dp).toLocaleString("id-ID")}</strong>
                </div>
                <div className="sim-row">
                  <span>Tenor Kredit:</span>
                  <strong>{result.tenorYears} Tahun ({result.tenorYears * 12} Bulan)</strong>
                </div>
                <div className="sim-total-box">
                  <span className="total-label">Estimasi Angsuran / Bulan:</span>
                  <span className="total-val">Rp {result.cicilan.toLocaleString("id-ID")}</span>
                </div>
                <p className="sim-disclaimer">
                  *Perhitungan di atas merupakan simulasi estimasi. Nilai DP dan angsuran aktual dapat bervariasi sesuai paket promo leasing, asuransi, dan wilayah domisili.
                </p>
                <a
                  href={getWhatsAppLink(`Halo, saya ingin mengajukan kredit ${result.namaMobil} tipe ${result.namaVarian} dengan estimasi DP ${result.dpPercent}% dan tenor ${result.tenorYears} tahun.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-glow btn-full"
                  style={{ marginTop: "16px" }}
                >
                  Ajukan Kredit via WhatsApp
                </a>
              </div>
            ) : (
              <div className="sim-placeholder">
                <p>Silakan pilih unit dan parameter kredit di samping, lalu klik tombol <strong>Hitung Simulasi Kredit</strong>.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
