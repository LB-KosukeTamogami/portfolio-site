import { createClient } from '@/app/lib/supabase/server'
import { FolderOpen, Eye, TrendingUp } from 'lucide-react'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Get project count
  const { count: projectCount } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })
  
  // Get featured projects
  const { count: featuredCount } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })
    .eq('featured', true)

  const stats = [
    {
      label: 'Total Projects',
      value: projectCount || 0,
      icon: FolderOpen,
      color: 'bg-blue-600',
    },
    {
      label: 'Featured Projects',
      value: featuredCount || 0,
      icon: TrendingUp,
      color: 'bg-green-600',
    },
    {
      label: 'Total Views',
      value: '0',
      icon: Eye,
      color: 'bg-purple-600',
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-youtube-gray rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-youtube-gray rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/admin/projects/new"
            className="bg-youtube-dark hover:bg-blue-600 transition-colors rounded-lg p-4 text-center"
          >
            <FolderOpen className="h-8 w-8 mx-auto mb-2" />
            <p>Add New Project</p>
          </a>
          <a
            href="/admin/profile"
            className="bg-youtube-dark hover:bg-blue-600 transition-colors rounded-lg p-4 text-center"
          >
            <Eye className="h-8 w-8 mx-auto mb-2" />
            <p>Update Profile</p>
          </a>
        </div>
      </div>
    </div>
  )
}