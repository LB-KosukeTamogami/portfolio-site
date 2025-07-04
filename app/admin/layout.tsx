import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/server'
import AdminSidebar from './components/AdminSidebar'
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
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-60 mt-16">
          {children}
        </main>
      </div>
    </div>
  )
}