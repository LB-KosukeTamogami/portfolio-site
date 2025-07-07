export default function ProfileCardSkeleton() {
  return (
    <div className="relative rounded-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 bg-youtube-gray/50">
      <div className="animate-pulse">
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
    </div>
  )
}