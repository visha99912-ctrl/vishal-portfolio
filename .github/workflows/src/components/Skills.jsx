import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, Server, Brain, GitBranch, Terminal, Layers, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    color: 'from-pink-400 to-rose-400',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-600',
    skills: [
      { name: 'HTML5', level: 90, icon: Code2 },
      { name: 'CSS3 / Tailwind', level: 85, icon: Layers },
      { name: 'JavaScript', level: 80, icon: Terminal },
      { name: 'React.js', level: 75, icon: Code2 },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-violet-400 to-purple-400',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600',
    skills: [
      { name: 'Node.js', level: 60, icon: Server },
      { name: 'Express.js', level: 55, icon: Server },
      { name: 'REST APIs', level: 65, icon: Terminal },
    ]
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'from-sakura-400 to-pink-400',
    bgColor: 'bg-sakura-50',
    borderColor: 'border-sakura-200',
    textColor: 'text-sakura-600',
    skills: [
      { name: 'Python', level: 85, icon: Terminal },
      { name: 'Machine Learning', level: 70, icon: Brain },
      { name: 'TensorFlow / Keras', level: 60, icon: Cpu },
      { name: 'Data Analysis', level: 65, icon: Layers },
    ]
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'from-mist-400 to-indigo-400',
    bgColor: 'bg-mist-50',
    borderColor: 'border-mist-200',
    textColor: 'text-indigo-600',
    skills: [
      { name: 'Git & GitHub', level: 80, icon: GitBranch },
      { name: 'VS Code', level: 90, icon: Terminal },
      { name: 'Figma', level: 60, icon: Palette },
      { name: 'Docker (Basic)', level: 40, icon: Layers },
    ]
  }
]

const SkillPetal = ({ skill, index, color }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.08, y: -5, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-sakura-100/60 shadow-sm shadow-sakura-100/20 hover:shadow-lg hover:shadow-sakura-200/30 hover:border-sakura-200/80 transition-all duration-300 cursor-default">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${color} bg-opacity-10`}>
            <skill.icon className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
        </div>

        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
            className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${color}`}
          />
        </div>
        <span className="text-xs text-gray-400 mt-1 block text-right">{skill.level}%</span>
      </div>

      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-sakura-200/50"
        animate={{ y: [0, -5, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
      />
    </motion.div>
  )
}

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sakura-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mist-100/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A curated collection of technologies I work with, organized by domain.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sakura-300 to-mist-300 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.15, duration: 0.8 }}
              className={`relative rounded-3xl p-8 ${category.bgColor} border ${category.borderColor} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-serif text-2xl font-bold ${category.textColor}`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPetal
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    color={category.color}
                  />
                ))}
              </div>

              <motion.div
                className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br ${category.color} opacity-10 blur-xl`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills