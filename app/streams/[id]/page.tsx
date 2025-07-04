import MainLayout from '@/app/components/MainLayout'
import { liveStreams } from '@/app/lib/data'
import { notFound } from 'next/navigation'
import { Calendar, Eye, Clock, Youtube, Twitch } from 'lucide-react'

export default function StreamDetailPage({ params }: { params: { id: string } }) {
  const stream = liveStreams.find(s => s.id === params.id)
  
  if (!stream) {
    notFound()
  }

  const PlatformIcon = stream.platform === 'youtube' ? Youtube : Twitch

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Embed */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <iframe
                src={stream.embedUrl}
                title={stream.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="bg-youtube-gray rounded-lg p-6 mb-6">
              <h1 className="text-2xl font-bold mb-4">{stream.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{stream.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(stream.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{stream.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PlatformIcon className="w-4 h-4" />
                  <span className="capitalize">{stream.platform}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{stream.description}</p>

              <div className="flex flex-wrap gap-2">
                {stream.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-youtube-dark px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Related Streams</h2>
            <div className="space-y-4">
              {liveStreams
                .filter(s => s.id !== stream.id)
                .slice(0, 5)
                .map((relatedStream) => (
                  <a
                    key={relatedStream.id}
                    href={`/streams/${relatedStream.id}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-40 aspect-video bg-youtube-gray rounded overflow-hidden flex-shrink-0">
                      <img
                        src={relatedStream.thumbnail}
                        alt={relatedStream.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium line-clamp-2 group-hover:text-white">
                        {relatedStream.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {relatedStream.views.toLocaleString()} views
                      </p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}