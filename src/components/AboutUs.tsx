import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Tentang Kami
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Supplier tinta dan toner printer original terlengkap dan terpercaya di Indonesia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-shield-alt text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Produk Asli</h3>
            <p className="text-gray-600">
              Semua produk kami 100% original dengan garansi resmi dan kualitas terjamin.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-truck text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Pengiriman Cepat</h3>
            <p className="text-gray-600">
              Kami menyediakan pengiriman cepat ke seluruh wilayah Indonesia dengan aman.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-headset text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Layanan 24/7</h3>
            <p className="text-gray-600">
              Tim support kami siap membantu Anda kapan saja melalui WhatsApp atau telepon.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kenapa Memilih Kami?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  Harga terbaik di kelasnya
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  Produk lengkap untuk semua merek
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  Transaksi aman dan nyaman
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  Garansi produk original
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <i className="fas fa-store text-7xl text-white/30 mb-4"></i>
              <a
                href="https://maps.app.goo.gl/JyuQFFR6AuVf3N44A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-green-300 transition-colors cursor-pointer"
              >
                TOLIP CARTRIDGE
              </a>
              <p className="text-lg mt-2">
                Senin - Sabtu: 09:00 - 18:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
