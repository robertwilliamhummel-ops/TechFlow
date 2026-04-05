/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For static export / GitHub Pages compatibility
  },
  // Uncomment below for full static export (GitHub Pages):
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
