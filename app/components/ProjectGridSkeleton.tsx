interface ProjectGridSkeletonProps {
  count?: number
  columns?: 'home' | 'projects'
}

export default function ProjectGridSkeleton({ count = 3, columns = 'home' }: ProjectGridSkeletonProps) {
  const gridClass = columns === 'home' 
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'

  return (
    <div className={gridClass}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden">
          {/* Thumbnail skeleton with shimmer */}
          <div className="aspect-video skeleton-box"></div>
          
          {/* Content skeleton with shimmer */}
          <div className="p-3 space-y-2 bg-youtube-gray">
            <div className="h-4 rounded skeleton-box"></div>
            <div className="h-3 rounded w-4/5 skeleton-box"></div>
            {columns === 'projects' && (
              <div className="flex gap-1 mt-2">
                <div className="h-5 w-12 rounded skeleton-box"></div>
                <div className="h-5 w-12 rounded skeleton-box"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}