'use client'

import { useState } from 'react'
import { UserCircle, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface HeaderProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useSmoothScroll()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { href: 'https://drive.google.com/file/d/1GTCqLvZw00ecWKu8MiNr3B183t-1v6BR/view', label: 'Curriculum Vitae' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-5 flex items-center justify-between rounded-bl-2xl shadow-md">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="mr-4 text-blue-500 hover:text-blue-600 transition-colors duration-200"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
        <UserCircle className="h-8 w-8 text-blue-500 mr-2" />
        <h1 className="text-xl font-semibold text-gray-800">Fatharoni Adillah Rachman</h1>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-blue-500 hover:text-blue-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-blue-500 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

