import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-sakura-100/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <path d="M50 10 C55 25, 70 30, 85 25 C75 35, 80 50, 90 55 C75 55, 65 65, 70 80 C60 70, 45 70, 35 80 C40 65, 30 55, 15 55 C25 50, 30 35, 20 25 C35 30, 50 25, 50 10Z" fill="#ffb7c5" />
              <circle cx="50" cy="50" r="5" fill="#ff8fa3" />
            </svg>
            <div>
              <span className="font-serif text-lg font-bold text-gray-800">Vishal Kumar</span>
              <p className="text-xs text-gray-400">AI & Web Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart className="w-4 h-4 text-sakura-400 fill-sakura-400" />
            </motion.div>
            <span>and lots of</span>
            <span className="text-sakura-400 font-medium">sakura petals</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/60 border border-sakura-100 text-sakura-500 hover:bg-sakura-50 hover:text-sakura-600 transition-colors shadow-sm"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-sakura-50 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Vishal Kumar. All rights reserved. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer