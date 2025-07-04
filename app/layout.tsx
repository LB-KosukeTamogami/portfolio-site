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
      <body className={inter.className}>{children}</body>
    </html>
  )
}