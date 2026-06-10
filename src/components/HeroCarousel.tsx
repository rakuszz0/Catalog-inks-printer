"use client";
import React, { useState, useEffect } from "react";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: string;
  buttonText: string;
  filter: "all" | "tinta" | "toner";
}

const slides: Slide[] = [
  {
    id: "1",
    title: "Katalog Tinta Printer Terlengkap",
    subtitle: "Tinta Original Epson, HP, Brother, Canon, Xerox",
    description: "Harga terbaik, kualitas terjamin, dan pengiriman cepat!",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "fas fa-print",
    buttonText: "Lihat Semua Tinta",
    filter: "tinta",
  },
  {
    id: "2",
    title: "Toner Printer Berkualitas Premium",
    subtitle: "Toner Original untuk Hasil Cetak Maksimal",
    description: "Toner asli dengan hasil cetak jelas dan tahan lama!",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    icon: "fas fa-microchip",
    buttonText: "Lihat Semua Toner",
    filter: "toner",
  },
  {
    id: "3",
    title: "Diskon Spesial Bulan Ini!",
    subtitle: "Dapatkan Potongan Harga Menarik",
    description: "Belanja lebih hemat dengan promo spesial kami!",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    icon: "fas fa-tags",
    buttonText: "Pesan Sekarang!",
    filter: "all",
  },
];

interface HeroCarouselProps {
  onButtonClick: (filter: "all" | "tinta" | "toner") => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onButtonClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`relative min-w-full py-20 md:py-28 text-center overflow-hidden bg-gradient-to-r ${slide.gradient}`}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <i className={`${slide.icon} text-6xl md:text-8xl text-white/90 mb-6`}></i>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-3">{slide.subtitle}</p>
              <p className="text-lg md:text-xl text-white/80 mb-8">{slide.description}</p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                  <i className="fas fa-check-circle mr-2"></i> 100% Original
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                  <i className="fas fa-truck mr-2"></i> Pengiriman Cepat
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                  <i className="fas fa-shield-alt mr-2"></i> Garansi Resmi
                </div>
              </div>

              <button
                onClick={() => {
                  onButtonClick(slide.filter);
                  document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <i className="fas fa-arrow-down mr-2"></i>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <i className="fas fa-chevron-left text-xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <i className="fas fa-chevron-right text-xl"></i>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-10" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
