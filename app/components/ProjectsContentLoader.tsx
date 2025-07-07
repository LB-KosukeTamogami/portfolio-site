'use client'

import { useState, useEffect, lazy, Suspense, useMemo } from 'react'
import { createStaticClient } from '@/app/lib/supabase/static'
import ProjectCard from '@/app/components/ProjectCard'
import ProjectGridSkeleton from './ProjectGridSkeleton'
import { FolderOpen } from 'lucide-react'
import { Project } from '@/app/types'

// ProjectDetailModalを遅延読み込み
const ProjectDetailModal = lazy(() => import('@/app/components/ProjectDetailModal'))

const categories = [
  { id: 'all', label: 'すべて' },
  { id: 'homepage', label: 'ホームページ' },
  { id: 'landing-page', label: 'ランディングページ' },
  { id: 'web-app', label: 'Webアプリ' },
  { id: 'mobile-app', label: 'モバイルアプリ' },
]

export default function ProjectsContentLoader() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createStaticClient()
        
        const { data: projectsData } = await supabase
          .from('projects')
          .select('*')
          .order('order', { ascending: true })

        setProjects(projectsData || [])
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // フィルタリングをメモ化
  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory)
  }, [activeCategory, projects])
    
  const handleOpenDetail = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <div className="p-4 sm:p-6 pt-2 sm:pt-3">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">開発実績一覧</h1>
        
        {/* Category Tabs - 静的なので即座に表示 */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-youtube-gray hover:bg-youtube-dark text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - 動的コンテンツ */}
        {loading ? (
          <ProjectGridSkeleton count={8} columns="projects" />
        ) : filteredProjects.length === 0 ? (
          <div className="bg-youtube-gray rounded-lg p-12 text-center">
            <FolderOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">
              {activeCategory === 'all' ? 'プロジェクトがありません' : 'このカテゴリにはプロジェクトがありません'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenDetail={handleOpenDetail}
              />
            ))}
          </div>
        )}
      </div>

      <Suspense fallback={null}>
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Suspense>
    </>
  )
}