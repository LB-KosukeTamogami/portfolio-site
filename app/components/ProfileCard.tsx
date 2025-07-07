import { Globe, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ProfileCardProps {
  profile?: {
    name: string
    title: string
    bio: string
    location?: string
    email?: string
    github_url?: string
    twitter_url?: string
    linkedin_url?: string
  }
  categoryStats?: {
    homepage: number
    'landing-page': number
    'web-app': number
    'mobile-app': number
  }
}

export default function ProfileCard({ profile, categoryStats }: ProfileCardProps) {
  const defaultProfile = {
    name: "LandBridge株式会社",
    title: "AIによる自動コーディングを活用した開発実績",
    bio: "当社では、AIによる自動コーディング手法「バイブコーディング」を取り入れることで、従来にないスピード感と柔軟性を備えた開発を実現しています。\n本サイトでは、その技術を活用して開発したWebサイトやアプリケーションの事例を掲載しています。\nご相談やお見積りなど、お気軽にお問い合わせください。",
    location: null,
    email: null,
    github_url: null,
    twitter_url: null,
    linkedin_url: null,
  }

  const data = profile || defaultProfile

  return (
    <div className="relative rounded-lg p-8 mb-8 overflow-hidden">
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/10 rounded-lg" />
      
      {/* コンテンツ */}
      <div className="relative flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <p className="text-xl text-gray-300 mb-4">{data.title}</p>
          
          <div className="text-lg mb-6 leading-relaxed text-gray-200 whitespace-pre-line">{data.bio}</div>
          
          <div className="flex items-center gap-2 mt-6">
            <Link 
              href="https://landbridge.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <Globe className="h-5 w-5" />
              <span>企業サイトはこちら</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="font-semibold mb-4 text-gray-200">開発実績</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">コーポレートサイト</span>
                <span className="text-2xl font-bold text-blue-400 w-10 text-right tabular-nums">{categoryStats?.homepage || 0}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">ランディングページ</span>
                <span className="text-2xl font-bold text-purple-400 w-10 text-right tabular-nums">{categoryStats?.['landing-page'] || 0}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Webアプリ</span>
                <span className="text-2xl font-bold text-indigo-400 w-10 text-right tabular-nums">{categoryStats?.['web-app'] || 0}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">モバイルアプリ</span>
                <span className="text-2xl font-bold text-blue-400 w-10 text-right tabular-nums">{categoryStats?.['mobile-app'] || 0}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}