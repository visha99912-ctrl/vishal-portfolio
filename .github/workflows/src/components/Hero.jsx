import React from 'react'
import { motion } from 'framer-motion'
import SakuraTree from './SakuraTree'

const Hero = ({ scrollY }) => {
  const treeY = scrollY * 0.15
  const textY = scrollY * 0.05
  const opacity = Math.max(0, 1 - scrollY / 700)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sakura-50/80 via-white/60 to-mist-50/80" />

      <div className="absolute top-20 right-20 w-72 h-72 bg-sakura-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-mist-100/30 rounded-full blur-3xl" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          style={{ y: textY, opacity }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sakura-100/60 text-sakura-700 text-sm font-medium tracking-wider mb-6 border border-sakura-200/50">
              ✦ Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-6"
          >
            <span className="block">Vishal</span>
            <span className="block text-gradient">Kumar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
              Building Intelligent Digital Experiences
            </p>
            <div className="mt-4 flex items-center gap-3 justify-center lg:justify-start text-sm text-sakura-500">
              <span className="w-12 h-px bg-sakura-300" />
              <span>Web Developer & AI/ML Enthusiast</span>
              <span className="w-12 h-px bg-sakura-300" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255, 182, 193, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-sakura-400 to-sakura-500 text-white rounded-full font-medium shadow-lg shadow-sakura-200/50 transition-all"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-sakura-200 text-sakura-700 rounded-full font-medium hover:bg-sakura-50 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {['DCSE', 'B.Tech AI & ML'].map((edu) => (
              <span
                key={edu}
                className="px-4 py-2 text-xs font-medium text-sakura-600 bg-sakura-50/80 rounded-lg border border-sakura-100"
              >
                {edu}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: treeY }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <SakuraTree />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-sakura-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-sakura-300 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-sakura-400"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero