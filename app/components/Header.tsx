'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { profile } from '@/app/lib/data'

interface HeaderProps {
  onMenuToggle: () => void
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-youtube-dark border-b border-border sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-youtube-gray rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Portfolio</h1>
        </Link>
      </div>


    </header>
  )
}

export default Header