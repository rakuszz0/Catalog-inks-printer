# TintaPrinter.ID - Katalog Tinta Printer

Website katalog tinta printer dengan tampilan menarik dan responsive.

## 🚀 Fitur Utama
- ✅ Katalog produk dengan brand Epson, HP, Brother, Canon, dan Xerox
- ✅ Detail produk (warna, tipe, kapasitas, kompatibilitas)
- ✅ Foto produk dengan fallback icon
- ✅ Order via WhatsApp dengan pesan otomatis
- ✅ Alamat toko dengan link Google Maps
- ✅ Sosial media terhubung (WhatsApp, Instagram, Facebook)
- ✅ Desain menarik dan responsive (mobile, tablet, desktop)
- ✅ Auto-generate sitemap.xml dan robots.txt untuk SEO

## 📦 Teknologi
- **Next.js 15** - Framework React
- **React 19** - Library UI
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Font Awesome** - Ikon
- **Next.js Image** - Optimisasi gambar produk

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

### 1. Ganti Domain untuk Sitemap & Robots
Edit file:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
Ganti `https://yourdomain.com` dengan nama domain Anda yang sebenarnya!

### 2. Ganti Nomor WhatsApp
Edit file `src/components/ProductCard.tsx`:
```typescript
const WHATSAPP_NUMBER = "6281234567890"; // ganti dengan nomormu
```

### 3. Menambah/Mengedit Data Produk
Edit file `src/lib/products.ts`. Setiap produk memiliki:
- `id`: ID unik
- `name`: Nama produk
- `brand`: Brand (epson/hp/brother/canon/xerox)
- `category`: Kategori (tinta/toner)
- `color`: Warna
- `type`: Tipe
- `capacity`: Kapasitas
- `compatible`: List printer yang kompatibel
- `price`: Harga
- `imageUrl`: Path gambar produk (contoh: `/images/products/epson-664-black.jpg`)

### 4. Menambah Foto Produk
- Simpan gambar produk di folder `public/images/products/`
- Gunakan format gambar JPG, PNG, atau WEBP
- Ukuran ideal 400x400 px (rasio 1:1)
- Pastikan nama file sesuai dengan yang ditulis di `imageUrl` pada `src/lib/products.ts`

### 5. Ganti Alamat & Google Maps
Edit file `src/components/Footer.tsx` dan `src/components/AboutUs.tsx`.

### 6. Ganti Sosial Media
Edit link di `src/components/Footer.tsx`.

## 📱 Tampilan
- Home: Hero section dengan carousel
- About Us: Tentang toko
- Catalog: Grid produk dengan filter kategori
- Footer: Kontak, alamat, dan sosial media

## 📄 SEO Files
1. **sitemap.xml** - Akan otomatis tersedia di `https://yourdomain.com/sitemap.xml` setelah build
2. **robots.txt** - Akan otomatis tersedia di `https://yourdomain.com/robots.txt`

## 📄 Lisensi
MIT
