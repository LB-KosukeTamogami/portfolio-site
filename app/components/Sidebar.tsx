'use client'

import { Home, FolderOpen, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/app/lib/utils'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname()
  
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: FolderOpen, label: 'Projects', href: '/projects' },
    { icon: Mail, label: 'Contact', href: '/contact' },
  ]


  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-full bg-youtube-dark border-r border-border transition-all duration-300 z-40 overflow-y-auto",
        isOpen ? "w-60" : "w-16"
      )}
    >
      <div className="py-2">
        <div className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center w-full px-3 py-2 rounded-lg hover:bg-blue-600/10 transition-colors",
                  isActive && "bg-blue-600/20 text-blue-400",
                  !isOpen && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span className="ml-3">{item.label}</span>}
              </Link>
            )
          })}
        </div>

      </div>
    </aside>
  )
}

export default Sidebar