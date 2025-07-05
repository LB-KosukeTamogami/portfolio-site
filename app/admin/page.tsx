import { createClient } from '@/app/lib/supabase/server'
import Link from 'next/link'
import { Plus, Edit, Trash2, ExternalLink, FolderOpen, Eye } from 'lucide-react'
import Image from 'next/image'
import DeleteProjectButton from './projects/DeleteProjectButton'

export default async function AdminPage() {
  const supabase = await createClient()
  
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error)
  }

  const categoryColors = {
    'homepage': 'bg-purple-600',
    'landing-page': 'bg-pink-600',
    'web-app': 'bg-blue-600',
    'mobile-app': 'bg-green-600'
  }

  const categoryLabels = {
    'homepage': 'ホームページ',
    'landing-page': 'ランディングページ',
    'web-app': 'Webアプリケーション',
    'mobile-app': 'モバイルアプリケーション'
  }

  const statusColors = {
    completed: 'bg-green-600',
    'in-progress': 'bg-yellow-600',
    planned: 'bg-gray-600'
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">ポートフォリオ管理</h1>
          <p className="text-gray-400">プロジェクトの追加・編集・削除を行えます</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Eye className="h-5 w-5" />
            サイトを見る
          </Link>
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5" />
            プロジェクトを追加
          </Link>
        </div>
      </div>
      
      {!projects || projects.length === 0 ? (
        <div className="bg-youtube-gray rounded-lg p-16 text-center">
          <FolderOpen className="h-20 w-20 mx-auto mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold mb-4">プロジェクトがありません</h2>
          <p className="text-gray-400 mb-8">最初のプロジェクトを追加してポートフォリオを作成しましょう</p>
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-lg"
          >
            <Plus className="h-6 w-6" />
            プロジェクトを追加
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-youtube-gray rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400">{projects.length}</div>
              <div className="text-sm text-gray-400">総プロジェクト数</div>
            </div>
            <div className="bg-youtube-gray rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-400">完了済み</div>
            </div>
            <div className="bg-youtube-gray rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400">
                {projects.filter(p => p.status === 'in-progress').length}
              </div>
              <div className="text-sm text-gray-400">進行中</div>
            </div>
            <div className="bg-youtube-gray rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-gray-400">注目プロジェクト</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-youtube-gray rounded-lg overflow-hidden hover:bg-youtube-dark transition-colors group">
                <div className="relative aspect-video">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                      注目
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`${categoryColors[project.category]} text-white text-xs px-2 py-1 rounded`}>
                      {categoryLabels[project.category]}
                    </span>
                    <span className={`${statusColors[project.status]} text-white text-xs px-2 py-1 rounded`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {project.duration && `開発期間: ${project.duration}`}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-youtube-dark rounded-lg transition-colors"
                          title="サイトを見る"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      
                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        className="p-2 hover:bg-youtube-dark rounded-lg transition-colors"
                        title="編集"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      
                      <DeleteProjectButton projectId={project.id} projectTitle={project.title} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}