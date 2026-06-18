export interface Product {
  id: string;
  name: string;
  brand: "epson" | "hp" | "brother" | "canon" | "xerox";
  category: "tinta" | "toner" | "cartridge";
  color: string;
  type: string;
  capacity: string;
  compatible: string[];
  price: number;
  imageUrl: string;
  description: string;
  reviews: Review[];
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export const products: Product[] = [
  // Epson
  {
    id: "epson-003-black",
    name: "Epson 003 Black Tinta",
    brand: "epson",
    category: "tinta",
    color: "Hitam",
    type: "Tinta Original",
    capacity: "70 ml",
    compatible: ["L1210", "L3210", "L3250", "L3216", "L3150", "L3110"],
    price: 85000,
    imageUrl: "/images/products/003_black.jpeg",
    description: "Tinta Epson 003 Original dirancang khusus untuk printer Epson seri L dengan teknologi Micro Piezo. Menghasilkan cetakan hitam yang tajam, tahan air dan tahan cahaya. Kapasitas besar untuk penggunaan sehari-hari yang hemat biaya.",
    reviews: [
      { name: "Budi Santoso", rating: 5, date: "15 Mei 2024", comment: "Kualitas tinta benar-benar original! Hasil cetakan jernih dan tidak mudah luntur. Recommended banget!" },
      { name: "Siti Aminah", rating: 4, date: "20 April 2024", comment: "Pengiriman cepat dan paket rapi. Tinta sesuai dengan deskripsi. Harga juga terjangkau." }
    ]
  },
  {
    id: "epson-003-color",
    name: "Epson 003 Color (CMY)",
    brand: "epson",
    category: "tinta",
    color: "Cyan, Magenta, Yellow",
    type: "Tinta Original",
    capacity: "70 ml (warna)",
    compatible: ["L1210", "L3210", "L3250", "L3216", "L3150", "L3110"],
    price: 90000,
    imageUrl: "/images/products/003_cym.jpeg",
    description: "Tinta Epson 003 Color Original memberikan hasil warna cerah dan natural untuk foto dan dokumen. Diformulasi khusus untuk printer Epson dengan teknologi DURABrite.",
    reviews: [
      { name: "Dewi Lestari", rating: 5, date: "10 Juni 2024", comment: "Warna super cerah! Cocok banget untuk cetak foto keluarga." },
      { name: "Rudi Hartono", rating: 4, date: "5 Mei 2024", comment: "Tinta awet dan harganya murah untuk hasil yang bagus." }
    ]
  },
  {
    id: "epson-664-black",
    name: "Epson 664 Black",
    brand: "epson",
    category: "tinta",
    color: "Hitam",
    type: "Original",
    capacity: "70 ml",
    compatible: ["L120", "L210", "L220", "L300", "L360"],
    price: 85000,
    imageUrl: "/images/products/664_b.jpeg",
    description: "Epson T6641 Tinta Hitam Original adalah tinta asli Epson yang dirancang khusus untuk printer Epson seri L. Menghasilkan kualitas cetak yang tajam, jelas, dan tahan lama.",
    reviews: [
      { name: "Andi Pratama", rating: 5, date: "25 Mei 2024", comment: "Tinta original, hasil cetak jelas banget!" },
      { name: "Rina Putri", rating: 5, date: "18 April 2024", comment: "Lama banget habisnya, hemat banget!" }
    ]
  },
  {
    id: "epson-664-cyan",
    name: "Epson 664 Cyan",
    brand: "epson",
    category: "tinta",
    color: "Cyan",
    type: "Original",
    capacity: "70 ml",
    compatible: ["L120", "L210", "L220", "L300", "L360"],
    price: 85000,
    imageUrl: "/images/products/664_blue.jpeg",
    description: "Tinta Epson 664 Cyan Original memberikan hasil warna cerah dan natural untuk foto dan dokumen.",
    reviews: []
  },
  {
    id: "epson-664-magenta",
    name: "Epson 664 Magenta",
    brand: "epson",
    category: "tinta",
    color: "Magenta",
    type: "Original",
    capacity: "70 ml",
    compatible: ["L120", "L210", "L220", "L300", "L360"],
    price: 85000,
    imageUrl: "/images/products/664_m.jpeg",
    description: "Tinta Epson 664 Magenta Original memberikan gradasi warna yang smooth dan natural.",
    reviews: []
  },
  {
    id: "epson-664-yellow",
    name: "Epson 664 Yellow",
    brand: "epson",
    category: "tinta",
    color: "Kuning",
    type: "Original",
    capacity: "70 ml",
    compatible: ["L120", "L210", "L220", "L300", "L360"],
    price: 85000,
    imageUrl: "/images/products/664_y.jpeg",
    description: "Tinta Epson 664 Yellow Original memberikan warna kuning yang cerah dan tidak mudah pudar.",
    reviews: []
  },
  {
    id: "epson-673",
    name: "Epson 673 Ink Set",
    brand: "epson",
    category: "tinta",
    color: "Black, Cyan, Magenta, Yellow, Light Cyan, Light Magenta",
    type: "Tinta Photo Original",
    capacity: "70 ml per botol",
    compatible: ["L800", "L805", "L810", "L850", "L1800"],
    price: 650000,
    imageUrl: "/images/products/673.jpeg",
    description: "Epson 673 Tinta Photo Original 6 Warna adalah tinta khusus untuk printer foto Epson. Menghasilkan kualitas foto profesional dengan gradasi warna yang halus dan tahan lama.",
    reviews: [
      { name: "Foto Studio Jakarta", rating: 5, date: "30 Juni 2024", comment: "Untuk kebutuhan studio foto, tinta ini adalah pilihan terbaik!" },
      { name: "Susi Fotografer", rating: 5, date: "22 Mei 2024", comment: "Warna sangat akurat dan hasil fotonya memuaskan!" }
    ]
  },
  {
    id: "epson-001",
    name: "Epson 001 Ink Set",
    brand: "epson",
    category: "tinta",
    color: "Black, Cyan, Magenta, Yellow",
    type: "Tinta Pigment & Dye Original",
    capacity: "127 ml (hitam), 70 ml (warna)",
    compatible: ["L4150", "L4160", "L6160", "L6170", "L6190"],
    price: 850000,
    imageUrl: "/images/products/001.jpeg",
    description: "Epson 001 Tinta Original adalah tinta baru dari Epson untuk printer seri L yang lebih baru. Hitam pigment untuk dokumen yang tahan air, warna dye untuk foto yang cerah.",
    reviews: [
      { name: "Perusahaan ABC", rating: 5, date: "10 Juni 2024", comment: "Untuk kebutuhan kantor, sangat memuaskan!" },
      { name: "Bapak Suherman", rating: 4, date: "2 Juni 2024", comment: "Kualitasnya premium tapi worth it untuk hasil yang baik." }
    ]
  },
  {
    id: "epson-774",
    name: "Epson 774 Black",
    brand: "epson",
    category: "tinta",
    color: "Hitam Pigment",
    type: "Tinta Original",
    capacity: "140 ml",
    compatible: ["M100", "M105", "M200", "M205"],
    price: 245000,
    imageUrl: "/images/products/774.jpeg",
    description: "Epson 774 Tinta Hitam Pigment Original khusus untuk printer Monochrome Epson seri M. Hasil cetak super tajam, cepat kering, dan hemat biaya.",
    reviews: [
      { name: "Toko ATK Maju", rating: 5, date: "5 Juli 2024", comment: "Untuk kebutuhan cetak hitam, sangat ekonomis!" },
      { name: "Pak Anton", rating: 5, date: "20 Juni 2024", comment: "Lama banget, cocok untuk usaha percetakan." }
    ]
  },
  {
    id: "epson-702-black",
    name: "Epson 702 Black Cartridge",
    brand: "epson",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "1100 halaman",
    compatible: ["Epson WF-3720", "Epson WF-3725", "Epson WF-3730"],
    price: 285000,
    imageUrl: "/images/products/702.jpeg",
    description: "Cartridge Epson 702 Black Original memberikan kualitas cetak profesional untuk kebutuhan kantor. Hasil cetak tajam dan konsisten.",
    reviews: [
      { name: "Kantor XYZ", rating: 5, date: "1 Juli 2024", comment: "Cartridge awet dan hasilnya bagus!" }
    ]
  },
  {
    id: "epson-703-color",
    name: "Epson 703 Tri-Color",
    brand: "epson",
    category: "cartridge",
    color: "CMY",
    type: "Cartridge Original",
    capacity: "950 halaman (warna)",
    compatible: ["Epson WF-3720", "Epson WF-3725", "Epson WF-3730"],
    price: 325000,
    imageUrl: "/images/products/703_tri.jpeg",
    description: "Cartridge Epson 703 Color Original untuk hasil cetak presentasi dan dokumen berwarna yang profesional.",
    reviews: [
      { name: "Ibu Siti", rating: 4, date: "25 Juni 2024", comment: "Warna cerah dan bagus untuk presentasi kantor!" }
    ]
  },
  // Canon
  {
    id: "canon-790-black",
    name: "Canon 790 Black",
    brand: "canon",
    category: "tinta",
    color: "Hitam",
    type: "Tinta Original",
    capacity: "135 ml",
    compatible: ["G1000", "G1010", "G2000", "G2010", "G3000", "G3010"],
    price: 165000,
    imageUrl: "/images/products/790_black.jpeg",
    description: "Tinta Canon GI-790 Black Original khusus untuk printer Canon PIXMA seri G. Hasil cetak hitam yang pekat dan hemat biaya.",
    reviews: [
      { name: "Mama Rina", rating: 5, date: "10 Juli 2024", comment: "Cetak tugas anak-anak jadi hemat banget!" },
      { name: "Pak Joko", rating: 5, date: "5 Juli 2024", comment: "Tinta original, kualitas terjamin!" }
    ]
  },
  {
    id: "canon-790-color",
    name: "Canon 790 Color Set",
    brand: "canon",
    category: "tinta",
    color: "Cyan, Magenta, Yellow",
    type: "Tinta Original",
    capacity: "70 ml per warna",
    compatible: ["G1000", "G1010", "G2000", "G2010", "G3000", "G3010"],
    price: 350000,
    imageUrl: "/images/products/790_co.jpeg",
    description: "Tinta Canon GI-790 Color Original untuk hasil cetak foto dan dokumen berwarna yang cerah dan natural.",
    reviews: [
      { name: "Siti Nurhaliza", rating: 5, date: "15 Juli 2024", comment: "Warna foto hasil cetakan sangat bagus!" }
    ]
  },
  {
    id: "canon-71-black",
    name: "Canon PG-71 Black",
    brand: "canon",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "150 halaman",
    compatible: ["E500", "E510", "E600", "E610"],
    price: 135000,
    imageUrl: "https://placehold.co/400x400/991B1B/FFFFFF?text=Canon+PG-71",
    description: "Cartridge Canon PG-71 Black Original untuk printer PIXMA seri E. Mudah dipasang dan hasil cetak bagus.",
    reviews: [
      { name: "Adit", rating: 4, date: "2 Juli 2024", comment: "Gampang dipasang, hasilnya jelas!" }
    ]
  },
  {
    id: "canon-71-color",
    name: "Canon CL-71 Color",
    brand: "canon",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "130 halaman",
    compatible: ["E500", "E510", "E600", "E610"],
    price: 175000,
    imageUrl: "https://placehold.co/400x400/7F1D1D/FFFFFF?text=Canon+CL-71",
    description: "Cartridge Canon CL-71 Color Original untuk hasil cetak berwarna yang cerah.",
    reviews: [
      { name: "Diana", rating: 5, date: "20 Juni 2024", comment: "Warna-warnanya cerah banget!" }
    ]
  },
  {
    id: "canon-pg-545",
    name: "Canon PG-545 Black",
    brand: "canon",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "180 halaman",
    compatible: ["MG2550", "MG2555", "MG3050", "TS3150"],
    price: 185000,
    imageUrl: "https://placehold.co/400x400/DC2626/FFFFFF?text=Canon+PG-545",
    description: "Cartridge Canon PG-545 Black Original untuk printer PIXMA home user.",
    reviews: [
      { name: "Keluarga Ahmad", rating: 4, date: "28 Juni 2024", comment: "Cocok untuk kebutuhan rumah tangga!" }
    ]
  },
  {
    id: "canon-cl-546",
    name: "Canon CL-546 Color",
    brand: "canon",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "180 halaman",
    compatible: ["MG2550", "MG2555", "MG3050", "TS3150"],
    price: 225000,
    imageUrl: "https://placehold.co/400x400/B91C1C/FFFFFF?text=Canon+CL-546",
    description: "Cartridge Canon CL-546 Color Original untuk mencetak foto dan dokumen berwarna.",
    reviews: [
      { name: "Anak-Anak", rating: 5, date: "10 Juli 2024", comment: "Cetak foto-foto liburan jadi jelas!" }
    ]
  },
  {
    id: "canon-pg-47",
    name: "Canon PG-47 Black",
    brand: "canon",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "400 halaman",
    compatible: ["E400", "E410", "E460", "E470"],
    price: 145000,
    imageUrl: "https://placehold.co/400x400/DC2626/FFFFFF?text=Canon+PG-47",
    description: "Cartridge Canon PG-47 Black Original dengan kapasitas besar.",
    reviews: [
      { name: "Pak RT", rating: 5, date: "8 Juli 2024", comment: "Kapasitas besar, cocok untuk kegiatan RT!" }
    ]
  },
  {
    id: "canon-cl-57",
    name: "Canon CL-57 Color",
    brand: "canon",
    category: "cartridge",
    color: "Warna (CMY)",
    type: "Cartridge Original",
    capacity: "300 halaman",
    compatible: ["E400", "E410", "E460", "E470"],
    price: 185000,
    imageUrl: "https://placehold.co/400x400/B91C1C/FFFFFF?text=Canon+CL-57",
    description: "Cartridge Canon CL-57 Color Original.",
    reviews: []
  },
  {
    id: "canon-pg-810",
    name: "Canon PG-810 Black",
    brand: "canon",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "220 halaman",
    compatible: ["MP258", "MP287", "MP497", "MX328"],
    price: 155000,
    imageUrl: "https://placehold.co/400x400/991B1B/FFFFFF?text=Canon+PG-810",
    description: "Cartridge Canon PG-810 Black Original.",
    reviews: [
      { name: "Mas Agus", rating: 4, date: "1 Juli 2024", comment: "Untuk printer lama, masih bagus!" }
    ]
  },
  {
    id: "canon-cl-811",
    name: "Canon CL-811 Color",
    brand: "canon",
    category: "cartridge",
    color: "Warna (CMY)",
    type: "Cartridge Original",
    capacity: "244 halaman",
    compatible: ["MP258", "MP287", "MP497", "MX328"],
    price: 195000,
    imageUrl: "https://placehold.co/400x400/7F1D1D/FFFFFF?text=Canon+CL-811",
    description: "Cartridge Canon CL-811 Color Original.",
    reviews: []
  },
  {
    id: "canon-328",
    name: "Canon 328 Toner",
    brand: "canon",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "2100 halaman",
    compatible: ["MF4410", "MF4450", "MF4710"],
    price: 480000,
    imageUrl: "https://placehold.co/400x400/C53030/FFFFFF?text=Canon+328",
    description: "Toner Canon 328 Original untuk printer laser monochrome.",
    reviews: [
      { name: "Kantor Makmur", rating: 5, date: "25 Juli 2024", comment: "Untuk kebutuhan kantor, toner ini sangat awet!" }
    ]
  },
  {
    id: "canon-337",
    name: "Canon 337 Toner",
    brand: "canon",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "2400 halaman",
    compatible: ["MF211", "MF212", "MF215", "MF217"],
    price: 550000,
    imageUrl: "https://placehold.co/400x400/9B2C2C/FFFFFF?text=Canon+337",
    description: "Toner Canon 337 Original dengan kapasitas lebih besar.",
    reviews: [
      { name: "Perusahaan Jaya", rating: 5, date: "15 Juli 2024", comment: "Kapasitas besar, hemat!" }
    ]
  },
  // Brother
  {
    id: "brother-bt5000",
    name: "Brother BT5000 Color Set",
    brand: "brother",
    category: "tinta",
    color: "Cyan, Magenta, Yellow",
    type: "Original",
    capacity: "1500 halaman",
    compatible: ["T300", "T500", "T700", "T800"],
    price: 95000,
    imageUrl: "https://placehold.co/400x400/F97316/FFFFFF?text=Brother+BT5000",
    description: "Tinta Brother BT5000 Original Color Set untuk printer Brother seri T. Hasil warna cerah dan hemat.",
    reviews: [
      { name: "Pak Herman", rating: 5, date: "5 Juli 2024", comment: "Harga murah tapi kualitas tetap oke!" },
      { name: "Bu Ratna", rating: 4, date: "1 Juli 2024", comment: "Tinta warna yang cukup awet." }
    ]
  },
  {
    id: "brother-bt6000",
    name: "Brother BT6000BK",
    brand: "brother",
    category: "tinta",
    color: "Hitam",
    type: "Original",
    capacity: "5000 halaman",
    compatible: ["T300", "T500", "T700", "T800"],
    price: 125000,
    imageUrl: "https://placehold.co/400x400/EF4444/FFFFFF?text=Brother+BT6000",
    description: "Tinta Brother BT6000 Black Original dengan kapasitas super besar untuk kebutuhan cetak banyak.",
    reviews: [
      { name: "Percetakan Ceria", rating: 5, date: "10 Juli 2024", comment: "Untuk percetakan rumahan, sangat hemat!" }
    ]
  },
  {
    id: "brother-lc223",
    name: "Brother LC-223BK Black",
    brand: "brother",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "550 halaman",
    compatible: ["DCP-J4120DW", "MFC-J4420DW", "MFC-J4620DW"],
    price: 210000,
    imageUrl: "https://placehold.co/400x400/EF4444/FFFFFF?text=Brother+LC223",
    description: "Cartridge Brother LC-223BK Original.",
    reviews: [
      { name: "Kantor Kita", rating: 4, date: "20 Juni 2024", comment: "Cocok untuk kebutuhan kantor kecil!" }
    ]
  },
  {
    id: "brother-lc223-cmy",
    name: "Brother LC-223 CMY Color Pack",
    brand: "brother",
    category: "cartridge",
    color: "Cyan, Magenta, Kuning",
    type: "Cartridge Original",
    capacity: "550 halaman",
    compatible: ["DCP-J4120DW", "MFC-J4420DW", "MFC-J4620DW"],
    price: 420000,
    imageUrl: "https://placehold.co/400x400/F97316/FFFFFF?text=Brother+LC223+CMY",
    description: "Paket cartridge Brother LC-223 warna lengkap.",
    reviews: []
  },
  {
    id: "brother-tn2260",
    name: "Brother TN-2260 Toner",
    brand: "brother",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1200 halaman",
    compatible: ["HL-2240", "HL-2250", "DCP-7060"],
    price: 380000,
    imageUrl: "https://placehold.co/400x400/FCA5A5/FFFFFF?text=Brother+TN2260",
    description: "Toner Brother TN-2260 Original.",
    reviews: []
  },
  {
    id: "brother-tn2280",
    name: "Brother TN-2280 Toner",
    brand: "brother",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "2600 halaman",
    compatible: ["HL-2240", "HL-2250", "MFC-7360"],
    price: 490000,
    imageUrl: "https://placehold.co/400x400/F87171/FFFFFF?text=Brother+TN2280",
    description: "Toner Brother TN-2280 Original High Yield.",
    reviews: [
      { name: "Perusahaan Sejahtera", rating: 5, date: "22 Juli 2024", comment: "High yield, hemat banget!" }
    ]
  },
  // HP
  {
    id: "hp-gt53",
    name: "HP GT53 Black",
    brand: "hp",
    category: "tinta",
    color: "Hitam",
    type: "Tinta Original",
    capacity: "90 ml",
    compatible: ["Ink Tank 115", "315", "415", "500", "515", "530", "615"],
    price: 145000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+GT53",
    description: "Tinta HP GT53 Black Original untuk printer HP Ink Tank. Hasil hitam pekat dan hemat.",
    reviews: [
      { name: "Keluarga Wijaya", rating: 5, date: "12 Juli 2024", comment: "Untuk kebutuhan rumah, sangat sempurna!" },
      { name: "Bu Lisa", rating: 5, date: "5 Juli 2024", comment: "Hasil cetak jelas banget!" }
    ]
  },
  {
    id: "hp-gt52",
    name: "HP GT52 Color Set",
    brand: "hp",
    category: "tinta",
    color: "Cyan, Magenta, Yellow",
    type: "Tinta Original",
    capacity: "70 ml per warna",
    compatible: ["Ink Tank 115", "315", "415", "500", "515", "530", "615"],
    price: 320000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+GT52+CMY",
    description: "Tinta HP GT52 Color Original untuk hasil warna cerah dan natural.",
    reviews: [
      { name: "Tante Yuli", rating: 5, date: "18 Juli 2024", comment: "Foto hasil cetak sangat cantik!" }
    ]
  },
  {
    id: "hp-85a",
    name: "HP 85A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1600 halaman",
    compatible: ["HP P1102", "HP M1132", "HP M1212"],
    price: 450000,
    imageUrl: "https://placehold.co/400x400/4338CA/FFFFFF?text=HP+85A",
    description: "Toner HP 85A Original (CE285A) untuk printer laser HP.",
    reviews: [
      { name: "Kantor Andalan", rating: 5, date: "25 Juni 2024", comment: "Toner HP yang paling populer!" }
    ]
  },
  {
    id: "hp-12a",
    name: "HP 12A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "2000 halaman",
    compatible: ["HP 1010", "HP 1018", "HP 1020", "HP M1005"],
    price: 520000,
    imageUrl: "https://placehold.co/400x400/7C3AED/FFFFFF?text=HP+12A",
    description: "Toner HP 12A Original (Q2612A) legendaris dan sangat awet!",
    reviews: [
      { name: "Pak Budi", rating: 5, date: "10 Juli 2024", comment: "Toner ini legendaris! Sudah puluhan tahun dipakai!" },
      { name: "Toko ATK Kita", rating: 5, date: "5 Juli 2024", comment: "Terlaris di toko!" }
    ]
  },
  {
    id: "hp-78a",
    name: "HP 78A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "2100 halaman",
    compatible: ["P1606dn", "M1536dnf"],
    price: 480000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+78A",
    description: "Toner HP 78A Original (CE278A).",
    reviews: []
  },
  {
    id: "hp-79a",
    name: "HP 79A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1000 halaman",
    compatible: ["M12a", "M12w", "M26a", "M26nw"],
    price: 370000,
    imageUrl: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=HP+79A",
    description: "Toner HP 79A Original (CF279A).",
    reviews: []
  },
  {
    id: "hp-17a",
    name: "HP 17A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1600 halaman",
    compatible: ["M102a", "M102w", "M130a", "M130fn", "M130fw", "M130nw"],
    price: 460000,
    imageUrl: "https://placehold.co/400x400/4338CA/FFFFFF?text=HP+17A",
    description: "Toner HP 17A Original (CF217A).",
    reviews: [
      { name: "Kantor Kecil", rating: 4, date: "1 Juli 2024", comment: "Untuk printer baru, works perfectly!" }
    ]
  },
  {
    id: "hp-83a",
    name: "HP 83A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1500 halaman",
    compatible: ["M201n", "M201dw", "M225dn", "M225dw"],
    price: 440000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+83A",
    description: "Toner HP 83A Original (CF283A).",
    reviews: []
  },
  {
    id: "hp-107a",
    name: "HP 107A Black Toner",
    brand: "hp",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1000 halaman",
    compatible: ["107a", "107w", "135a", "135w", "137fnw"],
    price: 360000,
    imageUrl: "https://placehold.co/400x400/7C3AED/FFFFFF?text=HP+107A",
    description: "Toner HP 107A Original (W1107A).",
    reviews: [
      { name: "Andi User Baru", rating: 5, date: "2 Juli 2024", comment: "Untuk printer baru saya, hasilnya bagus!" }
    ]
  },
  {
    id: "hp-416a",
    name: "HP 416A Color Toner Set",
    brand: "hp",
    category: "toner",
    color: "Black, Cyan, Magenta, Yellow",
    type: "Toner Original",
    capacity: "2400 halaman (hitam), 2100 halaman (warna)",
    compatible: ["M454dn", "M454dw", "M454nw", "MFP M479dw", "M479fdw", "M479fnw"],
    price: 3200000,
    imageUrl: "https://placehold.co/400x400/4338CA/FFFFFF?text=HP+416A",
    description: "Toner HP 416A Original Color Set untuk printer laser warna.",
    reviews: [
      { name: "Kantor Marketing", rating: 5, date: "15 Juli 2024", comment: "Untuk kebutuhan marketing, warna-warna bagus!" }
    ]
  },
  {
    id: "hp-410a",
    name: "HP 410A Color Toner Set",
    brand: "hp",
    category: "toner",
    color: "Black, Cyan, Magenta, Yellow",
    type: "Toner Original",
    capacity: "2300 halaman (hitam), 2200 halaman (warna)",
    compatible: ["M452dn", "M452dw", "M452nw", "MFP M477fdn", "M477fdw", "M477fnw"],
    price: 2900000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+410A",
    description: "Toner HP 410A Original Color Set.",
    reviews: []
  },
  {
    id: "hp-680",
    name: "HP 680 Black Cartridge",
    brand: "hp",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "480 halaman",
    compatible: ["HP 2335", "HP 2336", "HP 2775", "3775", "3776"],
    price: 145000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+680+BK",
    description: "Cartridge HP 680 Black Original (F6V27AA).",
    reviews: [
      { name: "Bu Ani", rating: 5, date: "8 Juli 2024", comment: "Untuk printer di rumah, bagus banget!" }
    ]
  },
  {
    id: "hp-680-color",
    name: "HP 680 Tri-Color",
    brand: "hp",
    category: "cartridge",
    color: "Warna (CMY)",
    type: "Cartridge Original",
    capacity: "150 halaman",
    compatible: ["HP 2335", "HP 2336", "HP 2775", "3775", "3776"],
    price: 185000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+680+Color",
    description: "Cartridge HP 680 Color Original (F6V26AA).",
    reviews: [
      { name: "Anak SD", rating: 5, date: "10 Juli 2024", comment: "Cetak tugas mewarnai jadi bagus!" }
    ]
  },
  {
    id: "hp-682",
    name: "HP 682 Black Cartridge",
    brand: "hp",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "300 halaman",
    compatible: ["2775", "2776", "2777", "2778", "2779", "4175", "4176", "4177"],
    price: 155000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+682+BK",
    description: "Cartridge HP 682 Black Original (3YM77AA).",
    reviews: []
  },
  {
    id: "hp-682-color",
    name: "HP 682 Tri-Color",
    brand: "hp",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "150 halaman",
    compatible: ["2775", "2776", "2777", "2778", "2779", "4175", "4176", "4177"],
    price: 195000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+682+Color",
    description: "Cartridge HP 682 Color Original (3YM76AA).",
    reviews: []
  },
  {
    id: "hp-678",
    name: "HP 678 Black Cartridge",
    brand: "hp",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "480 halaman",
    compatible: ["1015", "1018", "1515", "1518", "2515", "2545"],
    price: 140000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+678+BK",
    description: "Cartridge HP 678 Black Original (CZ107AA).",
    reviews: [
      { name: "Nenek", rating: 4, date: "1 Juli 2024", comment: "Untuk printer lama nenek, masih bisa dipakai!" }
    ]
  },
  {
    id: "hp-678-color",
    name: "HP 678 Tri-Color",
    brand: "hp",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "150 halaman",
    compatible: ["1015", "1018", "1515", "1518", "2515", "2545"],
    price: 180000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+678+Color",
    description: "Cartridge HP 678 Color Original (CZ108AA).",
    reviews: []
  },
  {
    id: "hp-802",
    name: "HP 802 Black Cartridge",
    brand: "hp",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "360 halaman",
    compatible: ["1010", "1050", "1510", "2000", "2050"],
    price: 125000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+802+BK",
    description: "Cartridge HP 802 Black Original (CH563AA).",
    reviews: []
  },
  {
    id: "hp-802-color",
    name: "HP 802 Tri-Color",
    brand: "hp",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "200 halaman",
    compatible: ["1010", "1050", "1510", "2000", "2050"],
    price: 165000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+802+Color",
    description: "Cartridge HP 802 Color Original (CH564AA).",
    reviews: []
  },
  {
    id: "hp-803",
    name: "HP 803 Black Cartridge",
    brand: "hp",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "190 halaman",
    compatible: ["1110", "1111", "1112", "2130", "2131", "2132", "2133", "2621", "2622", "2623"],
    price: 120000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+803+BK",
    description: "Cartridge HP 803 Black Original (F6V21AA).",
    reviews: [
      { name: "Bapak Guru", rating: 5, date: "15 Juli 2024", comment: "Untuk cetak materi mengajar, murah dan bagus!" }
    ]
  },
  {
    id: "hp-803-color",
    name: "HP 803 Tri-Color",
    brand: "hp",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "165 halaman",
    compatible: ["1110", "1111", "1112", "2130", "2131", "2132", "2133", "2621", "2622", "2623"],
    price: 155000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+803+Color",
    description: "Cartridge HP 803 Color Original (F6V20AA).",
    reviews: []
  },
  {
    id: "hp-704",
    name: "HP 704 Black Cartridge",
    brand: "hp",
    category: "cartridge",
    color: "Hitam",
    type: "Cartridge Original",
    capacity: "480 halaman",
    compatible: ["2010", "2060"],
    price: 145000,
    imageUrl: "https://placehold.co/400x400/6366F1/FFFFFF?text=HP+704+BK",
    description: "Cartridge HP 704 Black Original (CN692AA).",
    reviews: []
  },
  {
    id: "hp-704-color",
    name: "HP 704 Tri-Color",
    brand: "hp",
    category: "cartridge",
    color: "Tri-color",
    type: "Cartridge Original",
    capacity: "200 halaman",
    compatible: ["2010", "2060"],
    price: 185000,
    imageUrl: "https://placehold.co/400x400/A855F7/FFFFFF?text=HP+704+Color",
    description: "Cartridge HP 704 Color Original (CN693AA).",
    reviews: []
  },
  // Xerox
  {
    id: "xerox-106r04377",
    name: "Xerox 106R04377 Toner",
    brand: "xerox",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1500 halaman",
    compatible: ["B205", "B210", "B215"],
    price: 450000,
    imageUrl: "https://placehold.co/400x400/374151/FFFFFF?text=Xerox+106R",
    description: "Toner Xerox 106R04377 Original.",
    reviews: []
  },
  {
    id: "xerox-106r02773",
    name: "Xerox 106R02773 Toner",
    brand: "xerox",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "3000 halaman",
    compatible: ["Phaser 3020", "WorkCentre 3025"],
    price: 580000,
    imageUrl: "https://placehold.co/400x400/1F2937/FFFFFF?text=Xerox+02773",
    description: "Toner Xerox 106R02773 Original.",
    reviews: [
      { name: "Kantor Xerox", rating: 5, date: "18 Juli 2024", comment: "Toner untuk printer Xerox, kualitasnya bagus!" }
    ]
  },
  {
    id: "xerox-3020",
    name: "Xerox 3020 Toner",
    brand: "xerox",
    category: "toner",
    color: "Hitam",
    type: "Toner Original",
    capacity: "1500 halaman",
    compatible: ["Xerox 3020", "Xerox 3025"],
    price: 420000,
    imageUrl: "https://placehold.co/400x400/4B5563/FFFFFF?text=Xerox+3020",
    description: "Toner Xerox 3020 Original.",
    reviews: []
  }
];
