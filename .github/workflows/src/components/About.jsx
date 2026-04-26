import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Code, Brain, GraduationCap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: 'Projects', value: '10+' },
    { icon: Brain, label: 'AI Models', value: '5+' },
    { icon: GraduationCap, label: 'Degrees', value: '2' },
    { icon: Sparkles, label: 'Experience', value: '2+ Years' },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sakura-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-mist-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                About Me
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My <span className="text-gradient">Journey</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sakura-300 to-mist-300 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-sakura-200 to-mist-200 rounded-3xl rotate-3 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-br from-sakura-100 to-mist-100 rounded-3xl -rotate-3 opacity-60" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full flex flex-col items-center justify-center border border-white/60 shadow-xl">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sakura-300 to-mist-300 flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-4xl font-serif text-white font-bold">VK</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">Vishal Kumar</h3>
                    <p className="text-sakura-600 font-medium mb-4">Full Stack Developer & AI Enthusiast</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <span className="px-3 py-1 bg-sakura-50 text-sakura-600 rounded-full text-xs font-medium border border-sakura-100">DCSE</span>
                      <span className="px-3 py-1 bg-mist-50 text-mist-600 rounded-full text-xs font-medium border border-mist-100">B.Tech AI & ML</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    I am a passionate <span className="text-sakura-600 font-medium">Web Developer</span> and <span className="text-sakura-600 font-medium">AI & ML Enthusiast</span> with a strong foundation in Computer Science. My journey began with a Diploma in Computer Science Engineering, which sparked my curiosity for building digital solutions.
                  </p>
                  <p>
                    Currently pursuing my <span className="font-medium text-gray-700">B.Tech in Artificial Intelligence and Machine Learning</span>, I have developed a unique blend of skills that bridge creative web development with intelligent systems.
                  </p>
                  <p>
                    My expertise spans from crafting responsive, pixel-perfect frontends using React and modern CSS to implementing machine learning models that solve real-world problems.
                  </p>
                  <p>
                    When I am not coding, you will find me exploring new AI research papers, contributing to open-source projects, or experimenting with creative coding projects.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-white/50 border border-sakura-100/50"
                    >
                      <stat.icon className="w-5 h-5 text-sakura-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About