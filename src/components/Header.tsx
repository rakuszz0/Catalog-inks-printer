"use client";
import React from "react";

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
        >
          <i className="fas fa-print"></i>
          Dunia Cartridge
        </h1>
        <nav>
          <ul className="flex gap-6 md:gap-8">
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, "home")}
                className="font-medium hover:opacity-80 transition-opacity cursor-pointer"
              >
                Beranda
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, "about")}
                className="font-medium hover:opacity-80 transition-opacity cursor-pointer"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a 
                href="#catalog" 
                onClick={(e) => handleNavClick(e, "catalog")}
                className="font-medium hover:opacity-80 transition-opacity cursor-pointer"
              >
                Katalog
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, "contact")}
                className="font-medium hover:opacity-80 transition-opacity cursor-pointer"
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
