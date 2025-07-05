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
        "fixed left-0 top-16 h-full bg-youtube-dark border-r border-border z-40 overflow-y-auto",
        "transition-[width] duration-200 ease-in-out",
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
                  "flex items-center w-full px-3 py-2 rounded-lg transition-all duration-200",
                  "hover:bg-blue-600/10",
                  isActive && "bg-blue-600/20 text-blue-400",
                  !isOpen && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span 
                  className={cn(
                    "ml-3 whitespace-nowrap transition-all duration-200",
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0 overflow-hidden"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>

      </div>
    </aside>
  )
}

export default Sidebar