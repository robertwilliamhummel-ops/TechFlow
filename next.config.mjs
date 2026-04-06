/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Vercel handles Next.js image optimization natively — no config needed
  },
  async redirects() {
    return [
      { source: '/it-services.html',        destination: '/it-services',        permanent: true },
      { source: '/business-automation.html', destination: '/business-automation', permanent: true },
      { source: '/website-design.html',      destination: '/website-design',      permanent: true },
      { source: '/digital-growth.html',      destination: '/digital-growth',      permanent: true },
      { source: '/remote-support.html',      destination: '/remote-support',      permanent: true },
      { source: '/about.html',               destination: '/about',               permanent: true },
      { source: '/contact.html',             destination: '/contact',             permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',           value: 'nosniff' },
          { key: 'X-Frame-Options',                  value: 'DENY' },
          { key: 'X-XSS-Protection',                 value: '1; mode=block' },
          { key: 'Referrer-Policy',                  value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',               value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
