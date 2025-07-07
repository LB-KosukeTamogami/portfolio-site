'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Clock, ChevronDown, ChevronUp, Info } from 'lucide-react'
import { Project } from '@/app/types'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  onOpenDetail?: (project: Project) => void
  priority?: boolean
}

const ProjectCard = ({ project, onOpenDetail, priority = false }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const categoryColors = {
    'homepage': 'bg-purple-600',
    'landing-page': 'bg-pink-600',
    'web-app': 'bg-blue-600',
    'mobile-app': 'bg-green-600'
  }

  const categoryLabels = {
    'homepage': 'ホームページ',
    'landing-page': 'ランディングページ',
    'web-app': 'Webアプリ',
    'mobile-app': 'モバイルアプリ'
  }

  const handleCardClick = () => {
    if (project.live_url) {
      window.open(project.live_url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      className={`video-card group ${project.live_url ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
      onClick={handleCardClick}
      role={project.live_url ? "button" : undefined}
      tabIndex={project.live_url ? 0 : undefined}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && project.live_url) {
          handleCardClick()
        }
      }}
      title={project.live_url ? "クリックしてサイトを見る" : undefined}
    >
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className={`absolute top-1 sm:top-2 right-1 sm:right-2 ${categoryColors[project.category]} text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded`}>
          {categoryLabels[project.category]}
        </div>
        {project.featured && (
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-blue-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            Featured
          </div>
        )}
        {project.live_url && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div
              className="p-3 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-6 h-6 text-black" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-2.5 sm:p-3">
        <div className="flex-1 min-w-0">
            <h3 className="font-medium text-xs sm:text-sm leading-4 sm:leading-5 line-clamp-2 mb-1 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            
            <div className="mb-2">
              <p className={`text-[11px] sm:text-xs text-muted-foreground ${!isExpanded ? 'line-clamp-2' : ''}`}>
                {project.description}
              </p>
              {project.description.length > 100 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(!isExpanded)
                  }}
                  className="text-[11px] sm:text-xs text-blue-400 hover:text-blue-300 mt-1 flex items-center gap-0.5 sm:gap-1"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      閉じる
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      もっと見る
                    </>
                  )}
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] sm:text-xs bg-youtube-gray px-1.5 sm:px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5 sm:gap-1 text-[11px] sm:text-xs text-muted-foreground">
                <Clock className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                <span className="hidden sm:inline">開発期間: </span>
                <span>{project.duration}</span>
              </div>
              {onOpenDetail && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpenDetail(project)
                  }}
                  className="text-[11px] sm:text-xs text-blue-400 hover:text-blue-300 flex items-center gap-0.5 sm:gap-1 px-2 py-1 -mr-1 -mb-1 rounded"
                >
                  <Info className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                  詳細
                </button>
              )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard