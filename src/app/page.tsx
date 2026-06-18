"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutUs from "@/components/AboutUs";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<"all" | "tinta" | "toner" | "cartridge">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filter produk
  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // Hitung halaman
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset ke halaman 1 ketika filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Navigasi pagination
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll ke katalog
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-md"
                }`}
              >
                &laquo; Sebelumnya
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? "bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-md"
                }`}
              >
                Selanjutnya &raquo;
              </button>
            </div>
          )}

          {/* Jumlah Produk */}
          <div className="text-center text-gray-500 mt-6 text-sm">
            Menampilkan {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} dari {filteredProducts.length} produk
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
