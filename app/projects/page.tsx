import MainLayout from '@/app/components/MainLayout'
import ProjectsClient from './ProjectsClient'
import { createClient } from '@/app/lib/supabase/server'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プロジェクト一覧 | LandBridge Portfolio',
  description: 'LandBridge株式会社の開発実績一覧。ホームページ、ランディングページ、Webアプリケーション、モバイルアプリケーションの制作事例をご覧いただけます。',
  keywords: ['プロジェクト', '開発実績', 'ポートフォリオ', 'Webサイト制作', 'アプリ開発', 'LandBridge'],
  openGraph: {
    title: 'プロジェクト一覧 | LandBridge Portfolio',
    description: 'LandBridge株式会社の開発実績一覧をご覧ください',
    type: 'website',
    url: 'https://portfolio-site-blond-eta.vercel.app/projects',
  },
}

export default async function ProjectsPage() {
  const supabase = await createClient()
  
  // Fetch projects from Supabase
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true })
  
  const allProjects = projects || []

  return (
    <MainLayout>
      <ProjectsClient projects={allProjects} />
    </MainLayout>
  )
}