'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { createStaticClient } from '@/app/lib/supabase/static'
import ProfileCard from './ProfileCard'
import ProjectGridSkeleton from './ProjectGridSkeleton'
import ProjectCard from './ProjectCard'
import { ArrowRight, FolderOpen } from 'lucide-react'
import Link from 'next/link'
import { Project } from '@/app/types'

// ProjectDetailModalを遅延読み込み
const ProjectDetailModal = lazy(() => import('./ProjectDetailModal'))

export default function HomeContentLoader() {
  const [projects, setProjects] = useState<Project[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)
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
        console.error('Error fetching data:', error)
        setProjects([])
      } finally {
        setProjectsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleOpenDetail = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const featuredProjects = projects
    .filter(p => p.featured)
    .slice(0, 3) // 最大3つまで
  
  // カテゴリ別に集計
  const categoryStats = {
    'homepage': projects.filter(p => p.category === 'homepage').length,
    'landing-page': projects.filter(p => p.category === 'landing-page').length,
    'web-app': projects.filter(p => p.category === 'web-app').length,
    'mobile-app': projects.filter(p => p.category === 'mobile-app').length,
  }

  return (
    <>
      <div className="p-4 sm:p-6 pt-2 sm:pt-3">
        {/* SEO用の非表示h1 */}
        <h1 className="sr-only">LandBridge株式会社 - AIによる自動コーディングを活用した開発実績</h1>
        
        {/* Profile Card - 静的コンテンツなので即座に表示 */}
        <ProfileCard categoryStats={categoryStats} />

        {/* Featured Projects */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">注目のプロジェクト</h2>
            <Link
              href="/projects"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {projectsLoading ? (
            <ProjectGridSkeleton count={3} columns="home" />
          ) : featuredProjects.length === 0 ? (
            <div className="bg-youtube-gray rounded-lg p-12 text-center">
              <FolderOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">No featured projects yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onOpenDetail={handleOpenDetail}
                  priority={index < 3} // 最初の3枚を優先読み込み
                />
              ))}
            </div>
          )}
        </section>
        
        {/* 問い合わせボタンとの重なりを防ぐためのスペース */}
        <div className="h-24" />
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