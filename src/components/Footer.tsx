import React from "react";

const Footer: React.FC = () => {
  // Google Maps link (you can update this with your actual location)
  const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Jl.+Printer+No.+123+Jakarta+Pusat";

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <i className="fas fa-print text-3xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"></i>
              TintaPrinter.ID
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Supplier tinta printer original terlengkap dan terpercaya untuk kebutuhan kantor dan rumahan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-store text-indigo-400"></i> Alamat Toko
            </h3>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700/50 p-4 rounded-xl mb-4 hover:bg-gray-700 transition-colors group"
            >
              <p className="text-gray-300 mb-2 flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-red-500 mt-1"></i>
                <span>Jl. Printer No. 123, Jakarta Pusat</span>
              </p>
              <p className="text-sm text-gray-400 flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                <i className="fas fa-external-link-alt"></i>
                Lihat di Google Maps
              </p>
            </a>
            <p className="text-gray-400 mb-3 flex items-center gap-3">
              <i className="fas fa-clock text-indigo-500"></i>
              Senin - Sabtu: 09.00 - 18.00 WIB
            </p>
            <p className="text-gray-400 flex items-center gap-3">
              <i className="fas fa-phone text-indigo-500"></i>
              Telepon: (021) 1234567
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-share-alt text-indigo-400"></i> Sosial Media
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/tintaprinterid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
                Instagram
              </a>
              <a
                href="https://facebook.com/tintaprinterid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <i className="fab fa-facebook text-2xl"></i>
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2026 TintaPrinter.ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
