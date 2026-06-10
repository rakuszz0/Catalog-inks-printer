# TintaPrinter.ID - Katalog Tinta Printer

Website katalog tinta printer dengan tampilan menarik dan responsive.

## 🚀 Fitur Utama
- ✅ Katalog produk dengan brand Epson, HP, dan Brother
- ✅ Detail produk (warna, tipe, kapasitas, kompatibilitas)
- ✅ Order via WhatsApp dengan pesan otomatis
- ✅ Alamat toko dengan link Google Maps
- ✅ Sosial media terhubung (WhatsApp, Instagram, Facebook)
- ✅ Desain menarik dan responsive (mobile, tablet, desktop)

## 📦 Teknologi
- **Next.js 15** - Framework React
- **React 19** - Library UI
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Font Awesome** - Ikon

## 🛠️ Cara Menjalankan

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Jalankan development server**
   ```bash
   npm run dev
   ```

3. **Buka di browser**
   Buka [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### 1. Ganti Nomor WhatsApp
Edit file `src/components/ProductCard.tsx`:
```typescript
const WHATSAPP_NUMBER = "6281234567890"; // ganti dengan nomormu
```

### 2. Ganti Data Produk
Edit file `src/lib/products.ts` untuk menambah/hapus/ubah produk.

### 3. Ganti Alamat & Google Maps
Edit file `src/components/Footer.tsx`:
```typescript
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=alamat-kamu";
```
Ubah juga teks alamat di bagian `<span>`.

### 4. Ganti Sosial Media
Edit link di `src/components/Footer.tsx`.

## 📱 Tampilan
- Home: Hero section dengan keunggulan produk
- Catalog: Grid produk dengan kartu menarik
- Footer: Kontak, alamat, dan sosial media

## 📄 Lisensi
MIT
