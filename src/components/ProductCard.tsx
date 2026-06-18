"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product, Review } from "@/lib/products";

const WHATSAPP_NUMBER = "6285754008091";

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

  // State for new review form
  const [newReview, setNewReview] = useState<Omit<Review, 'date'>>({
    name: '',
    rating: 0,
    comment: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Get reviews from localStorage
  const getLocalReviews = (): Review[] => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`reviews-${product.id}`);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  };
  
  const [localReviews, setLocalReviews] = useState<Review[]>([]);

  useEffect(() => {
    setLocalReviews(getLocalReviews());
  }, [product.id]);

  // Combine static and local reviews
  const allReviews = [...product.reviews, ...localReviews];

  // Calculate average rating
  const averageRating = allReviews.length > 0 
    ? allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length 
    : 0;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      alert('Mohon lengkapi semua kolom ulasan!');
      return;
    }
    
    // Add date
    const today = new Date();
    const dateStr = today.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const reviewToAdd: Review = {
      ...newReview,
      date: dateStr,
    };
    
    // Save to localStorage
    const updatedLocalReviews = [...localReviews, reviewToAdd];
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedLocalReviews));
    setLocalReviews(updatedLocalReviews);
    
    // Send to WhatsApp for verification
    const reviewMessage = `Halo TintaPrinter.ID, ada ulasan baru dari pelanggan!\n\nProduk: ${product.name}\nNama: ${reviewToAdd.name}\nRating: ${'⭐'.repeat(reviewToAdd.rating)}\nUlasan: ${reviewToAdd.comment}\nTanggal: ${reviewToAdd.date}\n\nSilakan verifikasi dan tambahkan ke daftar ulasan produk.`;
    const encodedReview = encodeURIComponent(reviewMessage);
    const reviewWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedReview}`;
    window.open(reviewWhatsAppUrl, '_blank');
    
    // Reset form
    setNewReview({ name: '', rating: 0, comment: '' });
    setShowForm(false);
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
      
      {/* Product image with lazy loading */}
      <div className={`text-center mb-6 p-4 bg-gradient-to-br ${brandColors[product.brand]}/10 rounded-2xl overflow-hidden`}>
        <div className="relative w-full h-48 flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-xl"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        </div>
        {imageError && (
          <div className="py-8">
            <i className={`${product.category === "toner" ? "fas fa-microchip" : product.category === "cartridge" ? "fas fa-box" : "fas fa-tint"} text-7xl bg-gradient-to-r ${brandColors[product.brand]} bg-clip-text text-transparent`}></i>
          </div>
        )}
      </div>
      
      {/* Product name */}
      <h3 className="text-xl font-bold text-center mb-2 text-gray-800 leading-tight">
        {product.name}
      </h3>

      {/* Rating */}
      {allReviews.length > 0 && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <i key={star} className={`${star <= Math.round(averageRating) ? "fas" : "far"} fa-star`}></i>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({allReviews.length} review{allReviews.length > 1 ? 's' : ''})
          </span>
        </div>
      )}
      
      {/* Product description */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {product.description}
      </p>
      
      {/* Product details */}
      <div className="mb-6 space-y-3 border-t pt-4 border-gray-100">
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

      {/* Customer reviews (optimized) */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <i className="fas fa-comments text-green-500"></i> Ulasan Pelanggan {allReviews.length > 0 && `(${allReviews.length})`}
          </h4>
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all"
          >
            {showForm ? 'Tutup' : 'Tulis Ulasan'}
          </button>
        </div>
        
        {/* Review form */}
        {showForm && (
          <form onSubmit={handleSubmitReview} className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">Nama Kamu</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Masukkan nama kamu"
              />
            </div>
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="text-2xl focus:outline-none"
                  >
                    <i className={`${star <= newReview.rating ? "fas" : "far"} fa-star text-yellow-400 hover:text-yellow-500`}></i>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">Ulasan</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
                placeholder="Ceritakan pengalamanmu belanja di sini..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold text-sm hover:shadow-md transition-all"
            >
              <i className="fab fa-whatsapp mr-2"></i> Kirim Ulasan via WhatsApp
            </button>
          </form>
        )}
        
        {/* Reviews list (limited initially) */}
        {allReviews.length > 0 && (
          <div>
            <div className="space-y-3 max-h-32 overflow-y-auto">
              {allReviews.slice(0, 2).map((review, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-gray-800">{review.name}</span>
                    <div className="flex text-yellow-400 text-xs">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`${star <= review.rating ? "fas" : "far"} fa-star`}></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{review.date}</p>
                  <p className="text-sm text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
            {allReviews.length > 2 && (
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="w-full mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                {showAllReviews ? 'Tutup' : `Lihat ${allReviews.length - 2} ulasan lainnya`}
              </button>
            )}
            {showAllReviews && allReviews.length > 2 && (
              <div className="space-y-3 mt-2">
                {allReviews.slice(2).map((review, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-gray-800">{review.name}</span>
                      <div className="flex text-yellow-400 text-xs">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className={`${star <= review.rating ? "fas" : "far"} fa-star`}></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{review.date}</p>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {allReviews.length === 0 && !showForm && (
          <p className="text-sm text-gray-500 text-center">Jadilah yang pertama memberikan ulasan!</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
