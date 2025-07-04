import MainLayout from '@/app/components/MainLayout'
import StreamCard from '@/app/components/StreamCard'
import { liveStreams } from '@/app/lib/data'

export default function StreamsPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">All Live Streams</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {liveStreams.map((stream) => (
            <StreamCard key={stream.id} stream={stream} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}