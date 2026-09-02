"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import ProductModal from "../components/ProductModal";
import CreditSimulation from "../components/CreditSimulation";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import DeliverySection from "../components/DeliverySection";
import WhatsAppButton from "../components/WhatsAppButton";
import PromoPopup from "../components/PromoPopup";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function HomePage() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setCurrentFilter(categoryId);
  };

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <CategorySection
        currentFilter={currentFilter}
        onSelectCategory={handleSelectCategory}
      />
      <ProductSection
        products={products}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        onOpenDetail={handleOpenDetail}
      />
      <CreditSimulation products={products} />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <DeliverySection />
      <Footer />

      {/* Interactive Floating / Modal Overlays */}
      <WhatsAppButton />
      <PromoPopup />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseDetail}
        />
      )}
    </main>
  );
}
