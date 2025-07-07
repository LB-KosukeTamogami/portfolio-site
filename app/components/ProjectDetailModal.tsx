'use client'

import { Project } from '@/app/types'
import { X, ExternalLink, Github, Clock, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !project) return null

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      
      <div className="relative bg-youtube-dark border border-youtube-gray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="sticky top-0 bg-youtube-dark border-b border-youtube-gray p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-youtube-gray rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-64px)]">
          <div className="p-6 space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className={`absolute top-4 right-4 ${categoryColors[project.category]} text-white text-sm px-3 py-1 rounded`}>
                {categoryLabels[project.category]}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">プロジェクト概要</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-400 mb-2">開発期間</h4>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                {project.client && (
                  <div>
                    <h4 className="font-medium text-gray-400 mb-2">クライアント</h4>
                    <p className="text-gray-300">{project.client}</p>
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-medium text-gray-400 mb-2">使用技術</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-youtube-gray px-3 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    サイトを見る
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-youtube-gray hover:bg-youtube-gray/80 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    ソースコード
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}