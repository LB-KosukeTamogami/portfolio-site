'use client'

import Link from 'next/link'
import { profile } from '@/app/lib/data'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-youtube-dark border-b border-border sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <h1 className="text-xl font-bold transition-colors duration-200 group-hover:text-blue-400">Portfolio</h1>
        </Link>
      </div>


    </header>
  )
}

export default Header