'use client'

import { useState, useEffect } from 'react'
import { createStaticClient } from '@/app/lib/supabase/static'
import ProjectsClient from '@/app/projects/ProjectsClient'
import ProjectsContentSkeleton from './ProjectsContentSkeleton'
import { Project } from '@/app/types'

export default function ProjectsContentLoader() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return <ProjectsContentSkeleton />
  }

  return <ProjectsClient projects={projects} />
}