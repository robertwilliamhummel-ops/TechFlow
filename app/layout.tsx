import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://techflowsolutions.ca'),
  title: {
    default: 'TechFlow Solutions | IT Services & Business Automation in Toronto',
    template: '%s | TechFlow Solutions',
  },
  description:
    'IT services and business automation for Toronto businesses. Custom automation, professional websites, and IT support backed by 15+ years of engineering experience.',
  keywords: [
    'IT services Toronto',
    'business automation Toronto',
    'website design Toronto',
    'IT support GTA',
    'workflow automation',
    'invoicing system',
    'remote IT support',
  ],
  authors: [{ name: 'TechFlow Solutions' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'TechFlow Solutions',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechFlow Solutions — IT Services & Business Automation',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  verification: { google: 'DOW8j4cWK4qlsFdhN-5aY5drO_JfeOyct2zrImMK4nI' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TechFlow Solutions',
  image: 'https://techflowsolutions.ca/images/og-image.jpg',
  telephone: '(647) 572-8341',
  email: 'rob@techflowsolutions.ca',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6532,
    longitude: -79.3832,
  },
  url: 'https://techflowsolutions.ca',
  areaServed: 'Greater Toronto Area',
  priceRange: '$$',
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa-Su 08:00-20:00'],
  sameAs: [
    'https://facebook.com/techflowsolutions',
    'https://linkedin.com/company/techflowsolutions',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2VPMC5V');`,
          }}
        />
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2VPMC5V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
