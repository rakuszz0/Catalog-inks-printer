"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";

const WHATSAPP_NUMBER = "6281369982308";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleOrder = () => {
    const message = `Halo TintaPrinter.ID, saya ingin memesan produk berikut:\n\nNama Produk: ${product.name}\nHarga: Rp ${product.price.toLocaleString("id-ID")}\n\nMohon informasi lebih lanjut. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const [imageError, setImageError] = useState(false);

  // Brand-specific colors
  const brandColors = {
    epson: "from-blue-500 to-cyan-600",
    hp: "from-indigo-500 to-purple-600",
    brother: "from-red-500 to-orange-600",
    canon: "from-red-600 to-red-700",
    xerox: "from-gray-700 to-gray-800",
  };

  // Category badge
  const categoryLabel = {
    tinta: "Tinta",
    toner: "Toner",
    cartridge: "Cartridge",
  };

  const categoryColors = {
    tinta: "from-green-500 to-teal-600",
    toner: "from-purple-500 to-pink-600",
    cartridge: "from-orange-500 to-red-500",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-gray-100">
      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <div className={`inline-block bg-gradient-to-r ${categoryColors[product.category]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {categoryLabel[product.category]}
        </div>
        <div className={`inline-block bg-gradient-to-r ${brandColors[product.brand]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {product.brand.toUpperCase()}
        </div>
      </div>
      
      {/* Product image or icon */}
      <div className={`text-center mb-6 p-4 bg-gradient-to-br ${brandColors[product.brand]}/10 rounded-2xl overflow-hidden`}>
        {!imageError ? (
          <div className="relative w-full h-48 flex items-center justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-xl"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="py-8">
            <i className={`${product.category === "toner" ? "fas fa-microchip" : "fas fa-tint"} text-7xl bg-gradient-to-r ${brandColors[product.brand]} bg-clip-text text-transparent`}></i>
          </div>
        )}
      </div>
      
      {/* Product name */}
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800 leading-tight">
        {product.name}
      </h3>
      
      {/* Product details */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <i className="fas fa-palette text-lg text-indigo-500"></i>
          <span className="font-medium">Warna:</span>
          <span>{product.color}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <i className="fas fa-tag text-lg text-indigo-500"></i>
          <span className="font-medium">Tipe:</span>
          <span>{product.type}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <i className="fas fa-weight text-lg text-indigo-500"></i>
          <span className="font-medium">Kapasitas:</span>
          <span>{product.capacity}</span>
        </div>
        <div className="flex items-start gap-3 text-gray-600">
          <i className="fas fa-check-circle text-lg text-green-500 mt-0.5"></i>
          <div>
            <span className="font-medium">Kompatibel:</span>
            <div className="text-sm mt-1">{product.compatible.join(", ")}</div>
          </div>
        </div>
      </div>
      
      {/* Price */}
      <div className="text-center mb-6">
        <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>
      
      {/* Order button */}
      <button
        onClick={handleOrder}
        className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        Pesan via WhatsApp
      </button>
    </div>
  );
};

export default ProductCard;
