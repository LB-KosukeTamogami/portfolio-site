'use client'

import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ContactButton from './ContactButton'
import { cn } from '@/app/lib/utils'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-youtube-dark text-foreground">
      <Header 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        isMenuOpen={isSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <main
        className={cn(
          "pt-16 transition-[margin-left] duration-200 ease-in-out",
          isSidebarOpen ? "ml-60" : "ml-16"
        )}
      >
        {children}
      </main>
      <ContactButton />
    </div>
  )
}