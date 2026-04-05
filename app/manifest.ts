import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TechFlow Solutions',
    short_name: 'TechFlow',
    description: 'IT services and business automation for Toronto businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#667eea',
    icons: [
      {
        src: '/images/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
      },
    ],
  }
}
