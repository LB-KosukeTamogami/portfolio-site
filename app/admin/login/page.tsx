'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/client'
import { Lock, Mail } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        router.push('/admin')
        router.refresh()
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-youtube-dark flex items-center justify-center">
      <div className="bg-youtube-gray p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Lock className="h-7 w-7 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8">Admin Login</h1>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="admin@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          
          {error && (
            <div className="bg-red-900/20 border border-red-900 rounded-lg p-3 text-sm text-red-400">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <a href="/" className="hover:text-white transition-colors">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}