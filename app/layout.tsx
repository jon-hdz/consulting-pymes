import type { Metadata } from 'next'
import './globals.css'
import { getSchemaMarkup } from './schema'

export const metadata: Metadata = {
  title: 'Consultora Digital PyME | Transformación Digital Empresarial',
  description: 'Soluciones digitales para PyMEs en México: presencia web, automatización, reportes y capacitación. +20 empresas acompañadas. Respuesta en menos de 24h.',
  keywords: ['transformación digital', 'PyMEs', 'consultoría digital', 'automatización', 'México', 'presencia digital'],
  authors: [{ name: 'Consultora Digital PyME' }],
  creator: 'Consultora Digital PyME',
  publisher: 'Consultora Digital PyME',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://jonathanhdz.xyz',
    title: 'Consultora Digital PyME | Transformación Digital Empresarial',
    description: 'Soluciones digitales para PyMEs en México: presencia web, automatización, reportes y capacitación. Respuesta en menos de 24h.',
    siteName: 'Consultora Digital PyME',
    images: [
      {
        url: 'https://jonathanhdz.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultora Digital PyME - Transformación Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultora Digital PyME | Transformación Digital',
    description: 'Acompañamos PyMEs en su transformación digital. Respuesta en menos de 24h.',
    images: ['https://jonathanhdz.xyz/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://jonathanhdz.xyz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSchemaMarkup()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
