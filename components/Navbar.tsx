'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const eventHighlights = [
    { name: 'Hackathon', href: '#hackathon' },
    { name: 'Project Expo', href: 'https://vivid-website-pi.vercel.app/' },
    { name: 'Eminent Speakers', href: '#speakers' },
    { name: 'Workshops', href: '#workshops' },
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">AIAH</div>
                <div className="text-xs text-sky-200 text-center">2026</div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-sky-300 transition-colors">
              Home
            </Link>
            
            {/* Event Highlights Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-sky-300 transition-colors flex items-center space-x-1">
                <span>Event Highlights</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 text-gray-800">
                  {eventHighlights.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

           
            <Link href="#contact" className="hover:text-blue-300 transition-colors">
              Contact
            </Link>
            <a 
              href="https://aissn.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors"
            >
              Register Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#home" className="block px-3 py-2 hover:bg-slate-700 rounded">
              Home
            </Link>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded flex justify-between items-center"
            >
              <span>Event Highlights</span>
              <svg 
                className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="pl-6 space-y-1">
                {eventHighlights.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm hover:bg-slate-700 rounded"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="#research" className="block px-3 py-2 hover:bg-slate-700 rounded">
              Research Symposium
            </Link>
            <Link href="#organisers" className="block px-3 py-2 hover:bg-slate-700 rounded">
              Organisers
            </Link>
            <Link href="#contact" className="block px-3 py-2 hover:bg-slate-700 rounded">
              Contact
            </Link>
            <a 
              href="https://aissn.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-sky-600 hover:bg-sky-700 rounded text-center"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
