import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Preloader } from '@/components/preloader'
import 'leaflet/dist/leaflet.css'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://bizhmining.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Bizh Mining (PTY) Ltd | Underground & Surface Mining Consultancy',
  description:
    'Bizh Mining (PTY) Ltd is a South African mining consultancy delivering sustainable underground and surface mining solutions that increase production, improve safety, and reduce operational costs.',
  keywords: [
    'mining consultancy',
    'underground mining',
    'surface mining',
    'mine planning',
    'South Africa mining',
    'mineral resource management',
  ],
  applicationName: 'Bizh Mining',
  authors: [{ name: 'Bizh Mining' }],
  creator: 'Bizh Mining',
  publisher: 'Bizh Mining',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Bizh Mining (PTY) Ltd | Underground & Surface Mining Consultancy',
    description:
      'Bizh Mining (PTY) Ltd provides sustainable underground and surface mining consultancy services that improve safety, productivity, and operational performance.',
    url: siteUrl,
    siteName: 'Bizh Mining',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/images/hero-mining.png',
        width: 1200,
        height: 630,
        alt: 'Bizh Mining mining consultancy team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizh Mining (PTY) Ltd | Underground & Surface Mining Consultancy',
    description:
      'Bizh Mining (PTY) Ltd provides sustainable underground and surface mining consultancy services that improve safety, productivity, and operational performance.',
    images: ['/images/hero-mining.png'],
  },
  generator: 'Next.js',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2239',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Preloader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
