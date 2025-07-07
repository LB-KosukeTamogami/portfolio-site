'use client'

import { useState, useEffect } from 'react'
import { createStaticClient } from '@/app/lib/supabase/static'
import HomeContent from './HomeContent'
import HomeContentSkeleton from './HomeContentSkeleton'
import { Project } from '@/app/types'

export default function HomeContentLoader() {
  const [projects, setProjects] = useState<Project[]>([])
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createStaticClient()
        
        // データを並列で取得
        const [projectsResponse, profileResponse] = await Promise.all([
          supabase
            .from('projects')
            .select('*')
            .order('order', { ascending: true }),
          supabase
            .from('profiles')
            .select('*')
            .limit(1)
            .single()
        ])

        setProjects(projectsResponse.data || [])
        setProfile(profileResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setProjects([])
        setProfile(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <HomeContentSkeleton />
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
    <HomeContent 
      profiles={profile}
      categoryStats={categoryStats}
      featuredProjects={featuredProjects}
    />
  )
}