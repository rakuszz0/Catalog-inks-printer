"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutUs from "@/components/AboutUs";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<"all" | "tinta" | "toner" | "cartridge">("all");

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel onButtonClick={(filter) => setActiveFilter(filter)} />
      <AboutUs />
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Katalog Produk
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveFilter("tinta")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "tinta"
                  ? "bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Tinta
            </button>
            <button
              onClick={() => setActiveFilter("toner")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "toner"
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Toner
            </button>
            <button
              onClick={() => setActiveFilter("cartridge")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "cartridge"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Cartridge
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
