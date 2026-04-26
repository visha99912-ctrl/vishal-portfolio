import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Brain, Shield, Wallet, Box, ArrowRight, X } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'AI-based Fraud Detection System',
    description: 'An intelligent system that leverages machine learning algorithms to detect fraudulent transactions in real-time.',
    longDescription: 'This comprehensive fraud detection solution uses ensemble learning methods including Random Forest and XGBoost to identify anomalies in financial data. The system processes transactions through a multi-layered pipeline and achieves 94% accuracy.',
    icon: Shield,
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50',
    tags: ['Python', 'scikit-learn', 'Pandas', 'React', 'Flask'],
    features: ['Real-time detection', '94% accuracy', 'Interactive dashboard', 'Alert system'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Smart Portfolio Generator',
    description: 'An AI-powered portfolio creation tool that generates personalized portfolio websites based on user input.',
    longDescription: 'The Smart Portfolio Generator revolutionizes how professionals showcase their work. By analyzing user-provided information through NLP processing, the system generates tailored portfolio layouts, color schemes, and content structures.',
    icon: Brain,
    color: 'from-sakura-400 to-purple-400',
    bgColor: 'bg-sakura-50',
    tags: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'MongoDB'],
    features: ['AI content generation', 'Auto-responsive design', 'Custom themes', 'SEO optimization'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Government Fund Monitoring AI',
    description: 'A transparent AI system for tracking and monitoring government fund allocation and expenditure.',
    longDescription: 'Built to promote transparency in public fund management, this system uses machine learning to predict fund allocation needs and detect irregularities in expenditure patterns.',
    icon: Wallet,
    color: 'from-violet-400 to-indigo-500',
    bgColor: 'bg-violet-50',
    tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
    features: ['Fund tracking', 'Anomaly detection', 'Audit trails', 'Predictive analytics'],
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Interactive 3D Portfolio Website',
    description: 'A visually immersive portfolio experience built with Three.js and React.',
    longDescription: 'This project pushes the boundaries of web design by incorporating Three.js for 3D graphics, custom shader effects, and physics-based animations.',
    icon: Box,
    color: 'from-mist-400 to-blue-400',
    bgColor: 'bg-mist-50',
    tags: ['React', 'Three.js', 'Framer Motion', 'GLSL', 'Vite'],
    features: ['3D interactions', 'Custom shaders', 'Physics animations', 'Spatial navigation'],
    github: '#',
    demo: '#'
  }
]

const ProjectCard = ({ project, index, onSelect }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer"
    >
      <div className={`relative rounded-3xl overflow-hidden ${project.bgColor} border border-white/60 shadow-lg shadow-sakura-100/10 hover:shadow-xl hover:shadow-sakura-200/20 transition-all duration-500`}>
        <div className={`h-2 bg-gradient-to-r ${project.color}`} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="w-7 h-7 text-white" />
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3 group-hover:text-sakura-700 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/70 text-gray-600 rounded-full border border-gray-100">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-sakura-500 group-hover:text-sakura-600 transition-colors">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className={`h-32 bg-gradient-to-r ${project.color} relative`}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="absolute -bottom-8 left-8">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-xl`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="pt-12 px-8 pb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{project.longDescription}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {project.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-700 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 text-sm font-medium bg-sakura-50 text-sakura-600 rounded-xl border border-sakura-100">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a href={project.github} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-900 transition-colors">
                <Github className="w-5 h-5" />
                View Code
              </motion.a>
              <motion.a href={project.demo} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-medium shadow-lg`}>
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A selection of projects that showcase my expertise in AI/ML and web development.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-sakura-300 to-mist-300 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects