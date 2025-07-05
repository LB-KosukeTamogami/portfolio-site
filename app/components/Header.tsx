'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { profile } from '@/app/lib/data'
import { useState, useEffect } from 'react'

interface HeaderProps {
  onMenuToggle: () => void
  isMenuOpen?: boolean
}

const Header = ({ onMenuToggle, isMenuOpen = false }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-youtube-dark border-b border-border sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-youtube-gray rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-5 h-5">
            <Menu 
              className={`h-5 w-5 absolute transition-all duration-200 ${
                isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`} 
            />
            <X 
              className={`h-5 w-5 absolute transition-all duration-200 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`} 
            />
          </div>
        </button>
        <Link href="/" className="flex items-center space-x-2 group">
          <h1 className="text-xl font-bold transition-colors duration-200 group-hover:text-blue-400">Portfolio</h1>
        </Link>
      </div>


    </header>
  )
}

export default Header