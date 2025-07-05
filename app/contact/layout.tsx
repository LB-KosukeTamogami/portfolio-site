import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | LandBridge Portfolio',
  description: 'LandBridge株式会社へのお問い合わせはこちら。Webサイト制作、アプリケーション開発のご相談を承っております。お気軽にご連絡ください。',
  keywords: ['お問い合わせ', 'コンタクト', '相談', '見積もり', 'Web制作', 'LandBridge'],
  openGraph: {
    title: 'お問い合わせ | LandBridge Portfolio',
    description: 'Webサイト制作・アプリ開発のご相談はお気軽に',
    type: 'website',
    url: 'https://portfolio-site-blond-eta.vercel.app/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}