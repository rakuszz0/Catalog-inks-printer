import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 md:py-28 text-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          Katalog Tinta Printer Terlengkap
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Tinta Original Epson, HP, dan Brother dengan Harga Terbaik
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
      </div>
    </section>
  );
};

export default Hero;
