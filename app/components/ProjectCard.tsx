import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Clock } from 'lucide-react'
import { Project } from '@/app/types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const categoryColors = {
    'homepage': 'bg-purple-600',
    'landing-page': 'bg-pink-600',
    'web-app': 'bg-blue-600',
    'mobile-app': 'bg-green-600'
  }

  const categoryLabels = {
    'homepage': 'ホームページ',
    'landing-page': 'ランディングページ',
    'web-app': 'Web App',
    'mobile-app': 'Mobile App'
  }

  return (
    <div className="video-card group">
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={`absolute top-2 right-2 ${categoryColors[project.category]} text-white text-xs px-2 py-1 rounded`}>
          {categoryLabels[project.category]}
        </div>
        {project.featured && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            Featured
          </div>
        )}
        {project.demo && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <ExternalLink className="w-6 h-6 text-black" />
            </a>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm leading-5 line-clamp-2 mb-1 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            
            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs bg-youtube-gray px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>開発期間: {project.duration}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard