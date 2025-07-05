import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LandBridge Portfolio',
  description: 'LandBridge株式会社のポートフォリオサイト - Webサイト・アプリケーション開発',
  keywords: ['portfolio', 'LandBridge', 'web development', 'アプリ開発', 'ポートフォリオ'],
  authors: [{ name: 'LandBridge株式会社' }],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#1d4ed8',
  openGraph: {
    title: 'LandBridge Portfolio',
    description: 'LandBridge株式会社のポートフォリオサイト - Webサイト・アプリケーション開発',
    type: 'website',
    url: 'https://portfolio-site-blond-eta.vercel.app',
    siteName: 'LandBridge Portfolio',
    images: [
      {
        url: 'https://portfolio-site-blond-eta.vercel.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'LandBridge Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LandBridge Portfolio',
    description: 'LandBridge株式会社のポートフォリオサイト - Webサイト・アプリケーション開発',
    images: ['https://portfolio-site-blond-eta.vercel.app/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}