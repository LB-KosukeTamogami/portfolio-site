import Image from 'next/image'
import Link from 'next/link'
import { MoreVertical, Youtube, Twitch, Play } from 'lucide-react'
import { LiveStream } from '@/app/types'

interface StreamCardProps {
  stream: LiveStream
}

const StreamCard = ({ stream }: StreamCardProps) => {
  const platformIcon = stream.platform === 'youtube' ? Youtube : Twitch
  const PlatformIcon = platformIcon

  return (
    <div className="video-card group">
      <Link href={`/streams/${stream.id}`} className="block">
        <div className="relative">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={stream.thumbnail}
              alt={stream.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
            {stream.duration}
          </div>
          {stream.featured && (
            <div className="absolute top-2 left-2 bg-youtube-red text-white text-xs px-2 py-1 rounded">
              Featured
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>
      
      <div className="p-3">
        <div className="flex gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-youtube-red to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center">
            <PlatformIcon className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <Link href={`/streams/${stream.id}`}>
              <h3 className="font-medium text-sm leading-5 line-clamp-2 mb-1 group-hover:text-white transition-colors">
                {stream.title}
              </h3>
            </Link>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              {stream.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="bg-youtube-gray px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="text-xs text-muted-foreground">
              {stream.views.toLocaleString()} views • {new Date(stream.date).toLocaleDateString()}
            </div>
          </div>
          
          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-youtube-gray rounded">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StreamCard