export const CLOUDINARY_CLOUD_NAME = "dzsbznfng"
export const CLOUDINARY_FOLDER = "tinta"

// Brand colors for placehold.co fallback
const brandPlaceholders: Record<string, string> = {
  epson: "1e40af/ffffff",
  hp: "4c1d95/ffffff",
  brother: "dc2626/ffffff",
  canon: "991b1b/ffffff",
  xerox: "374151/ffffff",
}

// Set this to false when you've uploaded all your images to Cloudinary!
const USE_FALLBACK = true // Ubah ke false ketika semua gambar sudah diupload ke Cloudinary

export function getImageUrl(
  filename: string,
  brand: string
) {
  if (USE_FALLBACK) {
    const [bg, text] = brandPlaceholders[brand] || "6b7280/ffffff"
    const textLabel = encodeURIComponent(brand.toUpperCase())
    return `https://placehold.co/400x400/${bg}/${text}?text=${textLabel}`
  }

  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`
  const publicId = `${CLOUDINARY_FOLDER}/${filename}`
  return `${baseUrl}/${publicId}`
}
