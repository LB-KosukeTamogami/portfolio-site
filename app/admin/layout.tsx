import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/server'
import AdminHeader from './components/AdminHeader'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-youtube-dark">
      <AdminHeader user={user} />
      <main className="p-6 mt-16">
        {children}
      </main>
    </div>
  )
}