'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/app/lib/supabase/client'

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkEnvironment = async () => {
      const supabase = createClient()
      
      // 環境変数の確認
      const envVars = {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT SET',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET (hidden)' : 'NOT SET',
      }

      // Supabaseの接続確認
      let connectionStatus = 'Unknown'
      let currentUser = null
      
      try {
        const { data: { user } } = await supabase.auth.getUser()
        currentUser = user
        connectionStatus = 'Connected'
      } catch (error) {
        connectionStatus = `Error: ${error}`
      }

      setDebugInfo({
        envVars,
        connectionStatus,
        currentUser,
        timestamp: new Date().toISOString(),
      })
      setLoading(false)
    }

    checkEnvironment()
  }, [])

  if (loading) {
    return <div className="p-8">Loading debug information...</div>
  }

  return (
    <div className="min-h-screen bg-youtube-dark p-8">
      <h1 className="text-2xl font-bold mb-4">管理画面デバッグ情報</h1>
      
      <div className="bg-youtube-gray p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">環境変数</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(debugInfo.envVars, null, 2)}
        </pre>
      </div>

      <div className="bg-youtube-gray p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Supabase接続状態</h2>
        <p>Status: {debugInfo.connectionStatus}</p>
      </div>

      <div className="bg-youtube-gray p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">現在のユーザー</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(debugInfo.currentUser, null, 2)}
        </pre>
      </div>

      <div className="bg-youtube-gray p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">正しいログイン情報</h2>
        <p>以下のいずれかのアカウントでログインしてください：</p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>オプション1:</strong><br />
            Email: admin@portfolio.com<br />
            Password: Portfolio2024!
          </li>
          <li className="mt-2">
            <strong>オプション2:</strong><br />
            Email: tamogami@landbridge.co.jp<br />
            Password: Portfolio2024!
          </li>
        </ul>
        <p className="mt-4 text-sm text-yellow-400">
          注: Supabaseダッシュボードで上記のいずれかのユーザーが作成されている必要があります
        </p>
      </div>

      <div className="mt-8">
        <a href="/admin/login" className="text-blue-400 hover:underline">
          ← ログインページに戻る
        </a>
      </div>
    </div>
  )
}