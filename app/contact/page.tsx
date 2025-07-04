'use client'

import { useState } from 'react'
import MainLayout from '@/app/components/MainLayout'
import { Send, Mail, User, Building, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // ここでは仮の送信処理
    setTimeout(() => {
      setSubmitMessage('お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。')
      setFormData({ name: '', company: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <MainLayout>
      <div className="min-h-screen py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              システム開発のご相談・お見積りなど、お気軽にお問い合わせください。
              プロジェクトの規模やスケジュールに関わらず、まずはお話をお聞かせください。
            </p>
          </div>
          
          <div className="bg-youtube-gray rounded-xl p-8 shadow-2xl max-w-3xl mx-auto">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  お名前 <span className="text-blue-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="山田 太郎"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">
                  会社名
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-10 pr-3 py-3 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="株式会社〇〇"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3">
                メールアドレス <span className="text-blue-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="example@company.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3">
                お問い合わせ内容 <span className="text-blue-400">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 bg-youtube-dark border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="プロジェクトの詳細、ご要望などをお聞かせください。例：サイトのリニューアル、新規アプリ開発、ECサイト構築など"
                  rows={6}
                  required
                />
              </div>
            </div>
            
            {submitMessage && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-green-400 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  {submitMessage}
                </div>
              </div>
            )}
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-youtube-gray rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">ご相談内容の例</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">•</span>
                  <span>Webアプリケーション・モバイルアプリの開発</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">•</span>
                  <span>既存システムのリニューアル・改修</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">•</span>
                  <span>技術コンサルティング・アドバイザリー</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-lg">•</span>
                  <span>プロトタイプ開発・MVP構築</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-youtube-gray rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">レスポンス目安</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>初回返信: 24時間以内</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>詳細なお見積り: 2-3営業日</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>プロジェクト開始: ご相談後</span>
                </div>
                <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    まずはお気軽にご相談ください。無料で最適なソリューションをご提案いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}