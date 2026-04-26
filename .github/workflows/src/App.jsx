import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SakuraCanvas from './components/SakuraCanvas'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorEffect from './components/CursorEffect'

function App() {
  const [loading, setLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-sakura-50 to-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 10 C55 25, 70 30, 85 25 C75 35, 80 50, 90 55 C75 55, 65 65, 70 80 C60 70, 45 70, 35 80 C40 65, 30 55, 15 55 C25 50, 30 35, 20 25 C35 30, 50 25, 50 10Z"
                    fill="#ffb7c5"
                  />
                </svg>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-serif text-sakura-700 tracking-wider"
              >
                Vishal Kumar
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-sakura-400 mt-2 tracking-widest uppercase"
              >
                Loading Portfolio
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <SakuraCanvas scrollY={scrollY} />
          <CursorEffect />
          <Navigation scrollY={scrollY} />

          <main>
            <Hero scrollY={scrollY} />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}

export default App