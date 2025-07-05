import { Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'
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
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const defaultProfile = {
    name: "LAND Bridge",
    title: "システム開発会社",
    bio: "お客様のビジネスに最適なソリューションを提供する、信頼できるパートナーとして、最新技術を活用したWebサイト・アプリケーション開発を行っています。",
    location: "東京, 日本",
    email: "tamogami@landbridge.co.jp",
    github_url: null,
    twitter_url: null,
    linkedin_url: null,
  }

  const data = profile || defaultProfile

  return (
    <div className="bg-youtube-gray rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{data.title}</p>
          
          <p className="text-lg mb-6 leading-relaxed">{data.bio}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            {data.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{data.location}</span>
              </div>
            )}
            
            {data.email && (
              <Link 
                href={`mailto:${data.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{data.email}</span>
              </Link>
            )}
          </div>

          <div className="flex gap-3 mt-6">
            {data.github_url && (
              <Link
                href={data.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-youtube-dark rounded-lg hover:bg-blue-600/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            
            {data.twitter_url && (
              <Link
                href={data.twitter_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-youtube-dark rounded-lg hover:bg-blue-600/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            
            {data.linkedin_url && (
              <Link
                href={data.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-youtube-dark rounded-lg hover:bg-blue-600/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="bg-youtube-dark rounded-lg p-6">
            <h3 className="font-semibold mb-3">サービス内容</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Webサイト制作・リニューアル</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Webアプリケーション開発</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>ECサイト構築</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>システム保守・運用</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}