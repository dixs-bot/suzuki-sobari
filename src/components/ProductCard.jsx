"use client";

import { getWhatsAppLink } from "../data/siteConfig";

export default function ProductCard({ product, onOpenDetail }) {
  const minPrice =
    product.variants && product.variants.length > 0 && typeof product.variants[0].price === "number"
      ? product.variants[0].price
      : 0;
  const firstVariant =
    product.variants && product.variants.length > 0
      ? product.variants[0].name
      : "";

  return (
    <div className="product-card card glass">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <div className="product-img-wrap">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <div className="product-price-box">
          <span className="price-label">Mulai dari</span>
          <span className="price-val">Rp {minPrice.toLocaleString("id-ID")}</span>
          <span className="price-note">OTR Bandung ({firstVariant})</span>
        </div>
        <div className="product-highlights">
          {product.briefSpecs &&
            product.briefSpecs.map((h, i) => (
              <span key={i} className="highlight-tag">
                {h}
              </span>
            ))}
        </div>
        <div className="product-actions">
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => onOpenDetail(product)}
          >
            Lihat Detail
          </button>
          <a
            href={getWhatsAppLink(`Halo, saya tertarik dengan mobil Suzuki ${product.name}. Mohon info promo dan simulasi kredit.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Chat Sales
          </a>
        </div>
      </div>
    </div>
  );
}
