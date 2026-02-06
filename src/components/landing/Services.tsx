'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Mic, Bot, Cloud, Sparkles, ArrowUpRight } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: 'Custom AI SaaS',
      subtitle: 'End-to-End AI Products',
      description: 'We design and build complete AI-powered SaaS platforms from concept to scale.',
      icon: Code,
      color: isDark ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600',
      accentColor: isDark ? 'text-cyan-400' : 'text-blue-600',
      bgColor: isDark ? 'bg-cyan-500/10' : 'bg-blue-50',
      borderColor: isDark ? 'border-cyan-500/30' : 'border-blue-200',
      glowColor: isDark ? 'shadow-cyan-500/25' : 'shadow-blue-500/25',
      features: ['AI Model Integration', 'Scalable Architecture', 'User Experience Design', 'Analytics & Monitoring']
    },
    {
      title: 'AI Agents',
      subtitle: 'Autonomous Intelligence',
      description: 'Intelligent agents that work independently to solve complex business problems.',
      icon: Bot,
      color: isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600',
      accentColor: isDark ? 'text-purple-400' : 'text-purple-600',
      bgColor: isDark ? 'bg-purple-500/10' : 'bg-purple-50',
      borderColor: isDark ? 'border-purple-500/30' : 'border-purple-200',
      glowColor: isDark ? 'shadow-purple-500/25' : 'shadow-purple-500/25',
      features: ['Natural Language Processing', 'Decision Making Logic', 'Multi-System Integration', 'Learning & Adaptation']
    },
    {
      title: 'Voice AI',
      subtitle: 'Conversational Interfaces',
      description: 'Next-generation voice experiences that understand context and intent.',
      icon: Mic,
      color: isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600',
      accentColor: isDark ? 'text-green-400' : 'text-green-600',
      bgColor: isDark ? 'bg-green-500/10' : 'bg-green-50',
      borderColor: isDark ? 'border-green-500/30' : 'border-green-200',
      glowColor: isDark ? 'shadow-green-500/25' : 'shadow-green-500/25',
      features: ['Speech Recognition', 'Intent Understanding', 'Response Generation', 'Multi-Language Support']
    },
    {
      title: 'Cloud Infrastructure',
      subtitle: 'AI-First Architecture',
      description: 'Robust, scalable infrastructure designed specifically for AI workloads.',
      icon: Cloud,
      color: isDark ? 'from-orange-400 to-red-400' : 'from-orange-600 to-red-600',
      accentColor: isDark ? 'text-orange-400' : 'text-orange-600',
      bgColor: isDark ? 'bg-orange-500/10' : 'bg-orange-50',
      borderColor: isDark ? 'border-orange-500/30' : 'border-orange-200',
      glowColor: isDark ? 'shadow-orange-500/25' : 'shadow-orange-500/25',
      features: ['Auto-scaling', 'Load Balancing', 'Security & Compliance', 'Performance Optimization']
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-gray-900/30 via-transparent to-blue-900/20'
              : 'bg-gradient-to-br from-gray-50/50 via-transparent to-blue-50/50'
          }`}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Service Icons */}
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={i}
              className={`absolute ${isDark ? 'opacity-5' : 'opacity-10'}`}
              style={{
                left: `${5 + i * 20}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Icon className={`w-24 h-24 ${service.accentColor.replace('400', '300')}`} />
            </motion.div>
          )
        })}
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8 ${
              isDark
                ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                : 'bg-blue-100 border-blue-200 text-blue-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>STUDIO SERVICES</span>
          </motion.div>

          <h2 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
            isDark
              ? 'from-white via-blue-400 to-purple-400'
              : 'from-gray-900 via-blue-600 to-purple-600'
          }`}>
            We build the unbuildable.
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Then we ship it.</span>
            {' '}Our lab specializes in turning impossible ideas into production-ready AI systems.
          </p>
        </motion.div>

        {/* Holographic Service Chips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className={`relative h-full rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500 ${
                    isHovered
                      ? `${service.bgColor} ${service.borderColor}`
                      : 'bg-card/30 border-border hover:border-primary/20'
                  }`}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  animate={{
                    boxShadow: isHovered ?
                      `0 25px 50px -12px rgba(139, 92, 246, 0.25)` :
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor}`}
                      animate={{
                        rotate: isHovered ? [0, 10, -10, 0] : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-6 w-6 ${service.accentColor}`} />
                    </motion.div>

                    {/* Title */}
                    <div>
                      <h3 className={`text-xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent ${service.color}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <motion.div
                      className="space-y-2"
                      animate={{
                        opacity: isHovered ? 1 : 0.7,
                        height: isHovered ? 'auto' : '60px'
                      }}
                    >
                      {service.features.slice(0, isHovered ? 4 : 2).map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${service.accentColor.replace('text-', 'bg-')}`} />
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Hover Action */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10
                      }}
                      className="pt-2"
                    >
                      <div className={`flex items-center gap-2 text-sm font-medium ${service.accentColor} group-hover:gap-3 transition-all`}>
                        <span>Learn more</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Studio Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className={`max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-sm border ${isDark ? 'bg-gray-900/20 border-gray-800' : 'bg-gray-50/50 border-gray-200'}`}>
            <motion.div
              className="space-y-6"
              animate={{
                background: isDark ? [
                  'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                  'radial-gradient(circle at 30% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
                  'radial-gradient(circle at 70% 30%, rgba(244, 114, 182, 0.1) 0%, transparent 70%)'
                ] : [
                  'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
                  'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                  'radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 70%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark ? 'from-white to-gray-400' : 'from-gray-900 to-gray-600'
              }`}>
                "We don't just build software."
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We architect experiences that didn't exist before. Every project is an experiment in pushing the boundaries of what AI can do for humanity.
              </p>
              <div className="flex justify-center">
                <div className={`px-6 py-2 rounded-full text-sm font-mono tracking-wider ${
                  isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                }`}>
                  — BACKTICK LABS PHILOSOPHY
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
