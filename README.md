# TechFlow Solutions — Next.js Website

Full Next.js 14 (App Router) conversion of `techflowsolutions.ca`.

## Stack

- **Next.js 14** — App Router, SSR, auto sitemap, auto robots.txt
- **TypeScript** — strict mode
- **Google Fonts** — Inter + Poppins (next/font, no layout shift)
- **EmailJS** — contact form (`service_fpx3i2b` / `template_dwmz48t`)
- **Google Tag Manager** — `GTM-M2VPMC5V`
- **Font Awesome 6.4** — icons via CDN

## Project Structure

```
app/
  layout.tsx              # Root layout: GTM, fonts, Navbar, Footer
  page.tsx                # Homepage
  about/page.tsx
  contact/page.tsx
  business-automation/page.tsx
  it-services/page.tsx
  website-design/page.tsx
  digital-growth/page.tsx
  globals.css             # All styles (converted from styles.css + hero.css)
  sitemap.ts              # Auto-generated /sitemap.xml
  robots.ts               # Auto-generated /robots.txt

components/
  Navbar.tsx              # Sticky nav + hamburger (client)
  Footer.tsx              # Footer (server)
  Hero.tsx                # Slideshow hero (client)
  ScrollProgress.tsx      # Purple progress bar (client)
  ContactForm.tsx         # EmailJS form with validation (client)
  AnimateOnScroll.tsx     # Intersection Observer fade-in (client)
  Accordion.tsx           # Collapsible accordion (client)
  FAQItem.tsx             # FAQ toggle (client)

lib/
  analytics.ts            # GTM/dataLayer helpers (typed)
```

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deployment (Vercel — recommended)

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. No env vars needed — EmailJS key is public
4. Deploy → Done ✓

Vercel auto-detects Next.js 14 and configures everything correctly.

## Add Hero Images

Place hero images in `public/images/heroes/`:

```
hero-home-1.png … hero-home-5.png
hero-about-1.png … hero-about-3.png
hero-contact-1.png … hero-contact-3.png
hero-automation-1.png … hero-automation-5.png
hero-it-1.png … hero-it-6.png
hero-design-1.png … hero-design-5.png
```

Also add `public/images/og-image.jpg` and favicon files.

## EmailJS Configuration

Keys are in `components/ContactForm.tsx`:
- **Public key**: `QPLcDCj74Fq0lTwK-`
- **Service ID**: `service_fpx3i2b`
- **Template ID**: `template_dwmz48t`

## What's Improved vs HTML Site

| Feature | HTML Site | Next.js |
|---------|-----------|---------|
| SSR/SEO | ❌ Static | ✅ Server-rendered |
| Meta tags | Manual per page | ✅ `generateMetadata` |
| Sitemap | Manual XML | ✅ Auto-generated |
| Robots.txt | Manual | ✅ Auto-generated |
| Fonts | CDN flash | ✅ next/font (no CLS) |
| Images | Raw `<img>` | ✅ next/image optimized |
| JS bundle | Monolithic | ✅ Code-split per route |
| Schema.org | Inline script | ✅ Root layout |
| Open Graph | Manual | ✅ Metadata API |
| Hero slideshow | Raw JS | ✅ React `useEffect` |
| Form validation | Raw JS | ✅ React state |
| Mobile nav | Raw JS | ✅ React state |
| Animations | Raw JS IO | ✅ React IO wrapper |
