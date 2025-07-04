import MainLayout from '@/app/components/MainLayout'
import ProjectsClient from './ProjectsClient'
import { createClient } from '@/app/lib/supabase/server'

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