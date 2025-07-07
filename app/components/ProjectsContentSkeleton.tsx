export default function ProjectsContentSkeleton() {
  return (
    <div className="p-4 sm:p-6 pt-2 sm:pt-3">
      <div className="animate-pulse">
        <div className="h-8 bg-youtube-gray rounded w-48 mb-6"></div>
        
        {/* タブのスケルトン */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-24 bg-youtube-gray rounded-full"></div>
          ))}
        </div>
        
        {/* プロジェクトグリッドのスケルトン */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-youtube-gray rounded-lg overflow-hidden">
              <div className="aspect-video bg-youtube-gray/50"></div>
              <div className="p-3 space-y-2">
                <div className="h-4 bg-youtube-gray/50 rounded"></div>
                <div className="h-3 bg-youtube-gray/50 rounded w-4/5"></div>
                <div className="flex gap-1 mt-2">
                  <div className="h-5 w-12 bg-youtube-gray/50 rounded"></div>
                  <div className="h-5 w-12 bg-youtube-gray/50 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}