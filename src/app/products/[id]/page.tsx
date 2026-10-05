"use client"
import React, { use, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { products, type Product, type Review } from "@/lib/products"

const WHATSAPP_NUMBER = "6285754008091"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products.find(p => p.id === id)

  if (!product) {
    notFound()
  }

  const [customerName, setCustomerName] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [quantity, setQuantity] = useState('')
  const [notes, setNotes] = useState('')

  const brandColors = {
    epson: "from-blue-500 to-cyan-600",
    hp: "from-indigo-500 to-purple-600",
    brother: "from-red-500 to-orange-600",
    canon: "from-red-600 to-red-700",
    xerox: "from-gray-700 to-gray-800",
  }

  const categoryColors = {
    tinta: "from-green-500 to-teal-600",
    toner: "from-purple-500 to-pink-600",
    cartridge: "from-orange-500 to-red-500",
  }

  const handleOrder = () => {
    let message = `Halo TintaPrinter.ID, saya ingin memesan produk berikut:\n\nNama Produk: ${product.name}\nHarga: Rp ${product.price.toLocaleString("id-ID")}\n`

    if (quantity) {
      message += `Jumlah: ${quantity}\n`
    }

    if (customerName) {
      message += `Nama: ${customerName}\n`
    }

    if (customerAddress) {
      message += `Alamat: ${customerAddress}\n`
    }

    if (notes) {
      message += `Catatan: ${notes}\n`
    }

    message += `\nMohon informasi lebih lanjut. Terima kasih!`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/#catalog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className={`relative w-full aspect-square bg-gradient-to-br ${brandColors[product.brand]}/10 rounded-2xl`}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[product.category]} text-white text-sm font-semibold`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {product.category === "tinta" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  ) : product.category === "toner" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  )}
                </svg>
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${brandColors[product.brand]} text-white text-sm font-semibold`}>
                {product.brand.toUpperCase()}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

            <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Rp {product.price.toLocaleString("id-ID")}
            </div>

            <div className="prose text-gray-600 mb-8 text-lg leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Detail Produk
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Warna</p>
                      <p className="font-medium text-gray-800">{product.color}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tipe</p>
                      <p className="font-medium text-gray-800">{product.type}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kapasitas</p>
                      <p className="font-medium text-gray-800">{product.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Kompatibel dengan</p>
                        <p className="font-medium text-gray-800">{product.compatible.join(", ")}</p>
                      </div>
                    </div>
                  </div>
              </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Pemesanan (Opsional)</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Pesanan</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Masukkan jumlah pesanan"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Anda</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Pengiriman</label>
                  <textarea
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="Masukkan alamat lengkap Anda (opsional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Catatan (Nego Harga, dll)</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="Masukkan catatan seperti nego harga atau keterangan lainnya"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleOrder()
              }}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.148-1.756-.866-2.03-.965-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.163-.173.195-.347.219-.644.074-.297-.146-1.251-.46-2.38-1.47-.879-.785-1.469-1.759-1.642-2.056-.173-.298-.018-.46.13-.608.135-.135.298-.354.447-.532.149-.178.198-.297.297-.496.099-.199.05-.37-.025-.52-.075-.149-.67-1.611-.917-2.207-.242-.596-.486-.512-.669-.527-.172-.013-.37-.015-.568-.015-.197 0-.518.074-.79.371-.272.297-1.037 1.012-1.037 2.467 0 1.454 1.062 2.857 1.21 3.056.149.198 2.096 3.2 5.077 4.486.713.306 1.269.489 1.701.626.717.229 1.37.195 1.888.118.576-.085 1.756-.715 2.004-1.408.248-.694.248-1.288.172-1.412-.075-.123-.272-.198-.569-.347z" />
              </svg>
              Pesan via WhatsApp
            </button>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Ulasan Pelanggan
              </h3>
              {product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((review: Review, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800">{review.name}</span>
                            <div className="flex text-yellow-400">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-4 h-4" fill={star <= review.rating ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 text-center rounded-xl border border-gray-200">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="text-gray-500">Belum ada ulasan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
