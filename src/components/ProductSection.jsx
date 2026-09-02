"use client";

import ProductCard from "./ProductCard";

export default function ProductSection({
  products,
  currentFilter,
  onFilterChange,
  onOpenDetail
}) {
  const filteredProducts = products.filter((p) => {
    if (currentFilter === "all") return true;

    const cat = (p.category || "").toLowerCase();
    const name = (p.name || "").toLowerCase();
    const tagline = (p.tagline || "").toLowerCase();

    if (currentFilter === "suv") {
      return (
        tagline.includes("suv") ||
        tagline.includes("4x4") ||
        tagline.includes("crossover") ||
        name.includes("xl7") ||
        name.includes("grand vitara") ||
        name.includes("jimny") ||
        name.includes("fronx")
      );
    }

    if (currentFilter === "mpv") {
      return (
        tagline.includes("mpv") ||
        tagline.includes("city car") ||
        name.includes("ertiga") ||
        name.includes("s-presso") ||
        (name.includes("apv") && !name.includes("blind van"))
      );
    }

    if (
      currentFilter === "komersial" ||
      currentFilter === "commercial" ||
      currentFilter === "niaga"
    ) {
      return (
        cat === "commercial" ||
        tagline.includes("niaga") ||
        name.includes("carry") ||
        name.includes("blind van")
      );
    }

    if (currentFilter === "passenger") {
      return cat === "passenger";
    }

    return cat === currentFilter.toLowerCase();
  });

  return (
    <section id="produk" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="title-accent">Daftar Mobil</span> Suzuki
        </h2>
        <p className="section-subtitle reveal">
          Pilihan lengkap mobil Suzuki dengan harga resmi OTR Bandung &amp; Cimahi
        </p>

        <div className="filter-chips reveal">
          {[
            { id: "all", label: "Semua Mobil" },
            { id: "suv", label: "SUV & Crossover" },
            { id: "mpv", label: "MPV & City Car" },
            { id: "komersial", label: "Komersial" }
          ].map((chip) => (
            <button
              key={chip.id}
              type="button"
              className={`chip ${currentFilter === chip.id ? "active" : ""}`}
              onClick={() => onFilterChange(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="product-grid" id="product-list">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
