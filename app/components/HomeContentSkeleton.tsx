export default function HomeContentSkeleton() {
  return (
    <div className="p-4 sm:p-6 pt-2 sm:pt-3">
      <div className="animate-pulse">
        {/* プロフィールカードのスケルトン */}
        <div className="relative rounded-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 bg-youtube-gray/50">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="flex-1">
              <div className="h-12 bg-youtube-gray rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-youtube-gray rounded w-1/2 mb-6"></div>
              <div className="space-y-2">
                <div className="h-4 bg-youtube-gray rounded"></div>
                <div className="h-4 bg-youtube-gray rounded"></div>
                <div className="h-4 bg-youtube-gray rounded w-5/6"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-youtube-gray/50 rounded-lg p-4 sm:p-6 h-48"></div>
            </div>
          </div>
        </div>

        {/* プロジェクトカードのスケルトン */}
        <div className="mb-6">
          <div className="h-8 bg-youtube-gray rounded w-48 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-youtube-gray rounded-lg overflow-hidden">
                <div className="aspect-video bg-youtube-gray/50"></div>
                <div className="p-3 space-y-2">
                  <div className="h-4 bg-youtube-gray/50 rounded"></div>
                  <div className="h-3 bg-youtube-gray/50 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}