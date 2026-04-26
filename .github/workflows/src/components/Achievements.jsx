import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Star, Medal, ChevronRight } from 'lucide-react'

const achievementsData = [
  {
    year: '2024',
    title: 'AI Hackathon Winner',
    description: 'Secured first place in a national-level AI hackathon for developing an innovative fraud detection system using ensemble learning techniques.',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
    highlight: true
  },
  {
    year: '2024',
    title: 'Open Source Contributor',
    description: 'Active contributor to multiple open-source ML libraries with 500+ stars combined on GitHub repositories.',
    icon: Star,
    color: 'from-sakura-400 to-pink-500',
    highlight: false
  },
  {
    year: '2023',
    title: 'Best Project Award',
    description: 'Received Best Project Award for the Government Fund Monitoring AI System at university tech fest.',
    icon: Award,
    color: 'from-violet-400 to-purple-500',
    highlight: true
  },
  {
    year: '2023',
    title: 'Certified ML Practitioner',
    description: 'Completed advanced certification in Machine Learning and Deep Learning from recognized institutions.',
    icon: Medal,
    color: 'from-blue-400 to-indigo-500',
    highlight: false
  },
  {
    year: '2022',
    title: "Dean's List",
    description: "Consistently featured on the Dean's List for academic excellence throughout the B.Tech program.",
    icon: Star,
    color: 'from-emerald-400 to-teal-500',
    highlight: false
  }
]

const AchievementItem = ({ achievement, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
        className={`relative flex items-start gap-6 p-6 rounded-2xl ${achievement.highlight ? 'bg-white/80 shadow-lg shadow-sakura-100/20 border border-sakura-100/60' : 'bg-white/40 border border-white/60'} backdrop-blur-sm transition-all duration-300`}
      >
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg ${achievement.highlight ? 'ring-4 ring-sakura-100/50' : ''}`}>
            <achievement.icon className="w-7 h-7 text-white" />
          </div>
          <div className="mt-2 text-center">
            <span className="text-xs font-bold text-gray-400">{achievement.year}</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-serif text-xl font-bold text-gray-800">{achievement.title}</h3>
            {achievement.highlight && (
              <span className="px-2 py-0.5 text-xs font-medium bg-sakura-100 text-sakura-600 rounded-full">Highlight</span>
            )}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
        </div>

        <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  )
}

const Achievements = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sakura-50/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase mb-4 block">Milestones</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-gradient">Achievements</span> & Recognition
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Key milestones and recognitions that mark my journey in technology and innovation.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-sakura-300 to-mist-300 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sakura-200 via-sakura-300 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {achievementsData.map((achievement, index) => (
              <div key={achievement.title} className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2 md:px-8">
                  <AchievementItem achievement={achievement} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements