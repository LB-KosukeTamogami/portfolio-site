'use client'

import Header from './Header'
import Sidebar from './Sidebar'
import ContactButton from './ContactButton'
import PageTransition from './PageTransition'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-youtube-dark text-foreground">
      <Header />
      <Sidebar />
      <main className="pt-6 ml-0 md:ml-60">
        <PageTransition>{children}</PageTransition>
      </main>
      <ContactButton />
    </div>
  )
}