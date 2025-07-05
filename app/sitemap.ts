import { MetadataRoute } from 'next'
import { createClient } from '@/app/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://portfolio-site-blond-eta.vercel.app'
  
  // 基本的なページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Supabaseからプロジェクトデータを取得
  try {
    const supabase = await createClient()
    const { data: projects } = await supabase
      .from('projects')
      .select('id, updated_at')
      .order('updated_at', { ascending: false })

    // プロジェクト個別ページがある場合はここに追加
    // 現在は個別ページがないため、静的ページのみを返す
    
    return staticPages
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticPages
  }
}