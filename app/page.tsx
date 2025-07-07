import MainLayout from './components/MainLayout'
import HomeContent from './components/HomeContent'
import { createClient } from '@/app/lib/supabase/server'

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
      <HomeContent 
        profiles={profiles}
        categoryStats={categoryStats}
        featuredProjects={featuredProjects}
      />
    </MainLayout>
  )
}