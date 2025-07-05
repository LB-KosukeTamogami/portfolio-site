import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My software development portfolio showcasing projects and skills',
  keywords: ['portfolio', 'programming', 'development', 'projects', 'software'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio',
    description: 'My software development portfolio showcasing projects and skills',
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1d4ed8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}