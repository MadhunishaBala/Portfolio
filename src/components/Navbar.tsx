'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#articles', label: 'Articles' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed w-full bg-secondary bg-opacity-95 backdrop-blur-md z-50 shadow-lg">
      <div className="container flex justify-between items-center h-16">
        <Link href="#" className="text-2xl font-bold text-accent">
          MB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-secondary flex flex-col gap-4 p-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}