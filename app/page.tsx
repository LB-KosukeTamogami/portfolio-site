import MainLayout from './components/MainLayout'
import HomeContent from './components/HomeContent'
import { createStaticClient } from '@/app/lib/supabase/static'
import { unstable_cache } from 'next/cache'

// データフェッチをキャッシュ
const getCachedProjects = unstable_cache(
  async () => {
    const supabase = createStaticClient()
    const { data: projects } = await supabase
      .from('projects')
      .select('*')
      .order('order', { ascending: true })
    return projects || []
  },
  ['projects'],
  { revalidate: 60 } // 60秒間キャッシュ
)

const getCachedProfile = unstable_cache(
  async () => {
    const supabase = createStaticClient()
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .limit(1)
      .single()
    return profile
  },
  ['profile'],
  { revalidate: 300 } // 5分間キャッシュ
)

export default async function HomePage() {
  // キャッシュされたデータを並列で取得
  const [allProjects, profiles] = await Promise.all([
    getCachedProjects(),
    getCachedProfile()
  ])
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