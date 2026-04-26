import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/vishalkumar', color: 'hover:text-gray-800' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/vishalkumar', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/vishalkumar', color: 'hover:text-sky-500' },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputClasses = `w-full px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-sakura-200/50 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sakura-300 focus:ring-2 focus:ring-sakura-100 transition-all duration-300 hover:bg-white/80`

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sakura-50/30 to-mist-50/50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sakura-100/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-mist-100/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sakura-500 text-sm font-medium tracking-widest uppercase mb-4 block">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Have a project in mind or want to collaborate? I would love to hear from you.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-sakura-300 to-mist-300 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sakura-100 text-sakura-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:vishal@example.com" className="text-gray-700 font-medium hover:text-sakura-600 transition-colors">vishal@example.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-mist-100 text-mist-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-gray-700 font-medium">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sakura-100 text-sakura-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Availability</p>
                    <p className="text-gray-700 font-medium">Open for opportunities</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-sakura-100/50">
                <p className="text-sm text-gray-500 mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map(social => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-white/60 border border-sakura-100/50 text-gray-600 ${social.color} hover:shadow-lg hover:shadow-sakura-100/30 transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Your Name</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputClasses} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Email Address</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputClasses} placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Message</label>
                  <textarea required rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Tell me about your project..." />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sakura-400 to-sakura-500 text-white font-medium shadow-lg shadow-sakura-200/50 hover:shadow-xl hover:shadow-sakura-200/60 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-200">✓</motion.div>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact