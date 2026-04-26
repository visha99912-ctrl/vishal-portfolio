import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = scrollY > 100

  const scrollToSection = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-sakura-100/20' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <svg viewBox="0 0 100 100" className="w-8 h-8 transition-transform group-hover:rotate-12">
              <path
                d="M50 10 C55 25, 70 30, 85 25 C75 35, 80 50, 90 55 C75 55, 65 65, 70 80 C60 70, 45 70, 35 80 C40 65, 30 55, 15 55 C25 50, 30 35, 20 25 C35 30, 50 25, 50 10Z"
                fill="#ffb7c5"
              />
              <circle cx="50" cy="50" r="5" fill="#ff8fa3" />
            </svg>
            <span className={`font-serif text-xl font-semibold transition-colors ${isScrolled ? 'text-sakura-800' : 'text-sakura-700'}`}>
              Vishal
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                className={`relative text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-gray-600 hover:text-sakura-600' : 'text-gray-500 hover:text-sakura-500'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sakura-400 to-mist-400"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sakura-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-sakura-100"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className="block text-gray-700 hover:text-sakura-600 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation