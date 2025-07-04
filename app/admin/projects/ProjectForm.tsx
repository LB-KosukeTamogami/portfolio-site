'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/client'
import { Save, X } from 'lucide-react'
import Link from 'next/link'

interface ProjectFormData {
  title: string
  description: string
  thumbnail: string
  live_url: string
  github_url: string
  technologies: string[]
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  category: 'homepage' | 'landing-page' | 'web-app' | 'mobile-app'
  duration: string
  order: number
}

interface ProjectFormProps {
  initialData?: Partial<ProjectFormData>
  projectId?: string
}

export default function ProjectForm({ initialData, projectId }: ProjectFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [techInput, setTechInput] = useState('')
  
  const [formData, setFormData] = useState<ProjectFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    thumbnail: initialData?.thumbnail || '',
    live_url: initialData?.live_url || '',
    github_url: initialData?.github_url || '',
    technologies: initialData?.technologies || [],
    featured: initialData?.featured || false,
    status: initialData?.status || 'planned',
    category: initialData?.category || 'web-app',
    duration: initialData?.duration || '',
    order: initialData?.order || 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (projectId) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update(formData)
          .eq('id', projectId)

        if (error) throw error
      } else {
        // Create new project
        const { error } = await supabase
          .from('projects')
          .insert([formData])

        if (error) throw error
      }

      router.push('/admin/projects')
      router.refresh()
    } catch (error: unknown) {
      alert('Error saving project: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()]
      })
      setTechInput('')
    }
  }

  const removeTechnology = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter(t => t !== tech)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as ProjectFormData['category'] })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="homepage">ホームページ</option>
            <option value="landing-page">ランディングページ</option>
            <option value="web-app">Webアプリケーション</option>
            <option value="mobile-app">モバイルアプリケーション</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as ProjectFormData['status'] })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="planned">Planned</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            開発期間
          </label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="2週間"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Thumbnail URL *
        </label>
        <input
          type="url"
          value={formData.thumbnail}
          onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
          className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Live URL
          </label>
          <input
            type="url"
            value={formData.live_url}
            onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            value={formData.github_url}
            onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="https://github.com/username/repo"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Technologies
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
            className="flex-1 px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Add a technology..."
          />
          <button
            type="button"
            onClick={addTechnology}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-youtube-gray px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {tech}
              <button
                type="button"
                onClick={() => removeTechnology(tech)}
                className="text-red-400 hover:text-red-300"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 text-youtube-red bg-youtube-dark border-border rounded focus:ring-blue-600"
            />
            <span className="text-sm font-medium">Featured Project</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Order
          </label>
          <input
            type="number"
            value={formData.order}
            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
            className="w-full px-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          <Save className="h-5 w-5" />
          {loading ? 'Saving...' : 'Save Project'}
        </button>
        
        <Link
          href="/admin/projects"
          className="flex items-center gap-2 bg-youtube-gray hover:bg-youtube-dark px-6 py-2 rounded-lg transition-colors"
        >
          <X className="h-5 w-5" />
          Cancel
        </Link>
      </div>
    </form>
  )
}