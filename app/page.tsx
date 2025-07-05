import MainLayout from './components/MainLayout'
import ProjectCard from './components/ProjectCard'
import ProfileCard from './components/ProfileCard'
import { createClient } from '@/app/lib/supabase/server'
import { ArrowRight, FolderOpen } from 'lucide-react'
import Link from 'next/link'

export default async function HomePage() {
  const supabase = await createClient()
  
  // Fetch projects from Supabase
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true })
  
  // Fetch profile from Supabase
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .limit(1)
    .single()
  
  const allProjects = projects || []
  const featuredProjects = allProjects.filter(p => p.featured)
  
  // カテゴリ別に集計
  const categoryStats = {
    'homepage': allProjects.filter(p => p.category === 'homepage').length,
    'landing-page': allProjects.filter(p => p.category === 'landing-page').length,
    'web-app': allProjects.filter(p => p.category === 'web-app').length,
    'mobile-app': allProjects.filter(p => p.category === 'mobile-app').length,
  }

  return (
    <MainLayout>
      <div className="p-6 pt-2">
        {/* Profile Card */}
        <ProfileCard profile={profiles} />
        
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-youtube-gray rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {categoryStats['homepage']}
            </div>
            <div className="text-muted-foreground">ホームページ</div>
          </div>
          <div className="bg-youtube-gray rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {categoryStats['landing-page']}
            </div>
            <div className="text-muted-foreground">ランディングページ</div>
          </div>
          <div className="bg-youtube-gray rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {categoryStats['web-app']}
            </div>
            <div className="text-muted-foreground">Webアプリケーション</div>
          </div>
          <div className="bg-youtube-gray rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {categoryStats['mobile-app']}
            </div>
            <div className="text-muted-foreground">モバイルアプリケーション</div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {featuredProjects.length === 0 ? (
            <div className="bg-youtube-gray rounded-lg p-12 text-center">
              <FolderOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">No featured projects yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  )
}