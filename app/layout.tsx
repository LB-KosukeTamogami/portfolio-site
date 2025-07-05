import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}