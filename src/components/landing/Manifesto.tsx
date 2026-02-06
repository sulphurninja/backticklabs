'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useTime } from 'framer-motion'
import { Code, Zap, Rocket, Brain, Sparkles, ArrowRight, Users, Award, Target } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Manifesto() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const time = useTime()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const [visibleLines, setVisibleLines] = useState(0)
  const [activePhase, setActivePhase] = useState<'thinking' | 'creating' | 'shipping'>('thinking')

  const manifestoLines = [
    { text: "We don't follow trends.", emphasis: false },
    { text: "We create them.", emphasis: true },
    { text: "Every line of code is intentional.", emphasis: false },
    { text: "Every design decision shapes the future.", emphasis: true },
    { text: "We build the unbuildable.", emphasis: false },
    { text: "Then we ship it.", emphasis: true }
  ]

  const phases = [
    {
      id: 'thinking',
      label: 'RESEARCH & IDEATION',
      description: 'Deep AI research, market analysis, and creative problem-solving',
      icon: Brain,
      color: isDark ? 'text-purple-400' : 'text-purple-600',
      bgColor: isDark ? 'bg-purple-500/20' : 'bg-purple-100',
      borderColor: isDark ? 'border-purple-500/30' : 'border-purple-200'
    },
    {
      id: 'creating',
      label: 'DEVELOPMENT & DESIGN',
      description: 'Building with cutting-edge AI, modern architecture, and user-first design',
      icon: Code,
      color: isDark ? 'text-cyan-400' : 'text-blue-600',
      bgColor: isDark ? 'bg-cyan-500/20' : 'bg-blue-100',
      borderColor: isDark ? 'border-cyan-500/30' : 'border-blue-200'
    },
    {
      id: 'shipping',
      label: 'LAUNCH & SCALE',
      description: 'Rapid deployment, performance optimization, and continuous innovation',
      icon: Rocket,
      color: isDark ? 'text-pink-400' : 'text-pink-600',
      bgColor: isDark ? 'bg-pink-500/20' : 'bg-pink-100',
      borderColor: isDark ? 'border-pink-500/30' : 'border-pink-200'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'AI-First Thinking',
      description: 'Every solution starts with how AI can make it 10x better, not just 10% better.',
      color: isDark ? 'text-cyan-400' : 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Ship Fast, Learn Faster',
      description: 'We believe in rapid iteration, real user feedback, and continuous improvement.',
      color: isDark ? 'text-purple-400' : 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Human-Centric AI',
      description: 'Technology should amplify human potential, not replace human connection.',
      color: isDark ? 'text-pink-400' : 'text-pink-600'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => prev < manifestoLines.length ? prev + 1 : prev)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase(current => {
        const currentIndex = phases.findIndex(p => p.id === current)
        const nextIndex = (currentIndex + 1) % phases.length
        return phases[nextIndex].id as 'thinking' | 'creating' | 'shipping'
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20'
              : 'bg-gradient-to-br from-purple-50 via-transparent to-blue-50'
          }`}
          style={{ opacity }}
        />

        {/* Animated Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-cyan-400/30' : 'bg-blue-400/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Large Background Icons */}
        {phases.map((phase, i) => {
          const Icon = phase.icon
          return (
            <motion.div
              key={i}
              className={`absolute ${isDark ? 'opacity-5' : 'opacity-10'}`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <Icon className={`w-32 h-32 ${phase.color.replace('400', '300').replace('600', '400')}`} />
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="container max-w-6xl mx-auto px-4 text-center relative z-10"
        style={{ y }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium mb-8 ${
              isDark
                ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                : 'bg-purple-100 border-purple-200 text-purple-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>THE BACKTICK LABS MANIFESTO</span>
          </motion.div>

          <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r bg-clip-text text-transparent ${
            isDark
              ? 'from-white via-purple-400 to-cyan-400'
              : 'from-gray-900 via-purple-600 to-blue-600'
          }`}>
            Our Beliefs
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            These aren't just words on a wall. They're the principles that guide every line of code,
            every design decision, and every conversation we have with our clients.
          </p>
        </motion.div>

        {/* Manifesto Lines */}
        <div className="space-y-12 mb-20">
          {manifestoLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{
                opacity: visibleLines > index ? 1 : 0,
                y: visibleLines > index ? 0 : 50,
                rotateX: visibleLines > index ? 0 : -15
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              className="relative group"
            >
              <motion.p
                className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-tight ${
                  line.emphasis
                    ? (isDark
                        ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')
                    : 'text-foreground'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {line.text}
              </motion.p>

              {/* Subtle underline for emphasis */}
              {line.emphasis && (
                <motion.div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-400/60 to-purple-400/60'
                      : 'bg-gradient-to-r from-blue-500/60 to-purple-500/60'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: visibleLines > index ? '60%' : 0 }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                />
              )}

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: line.emphasis
                    ? (isDark
                        ? 'linear-gradient(45deg, #00ffff, #8b5cf6, #f472b6)'
                        : 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)')
                    : 'transparent'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className={`text-3xl md:text-4xl font-bold mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            What drives us
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 group cursor-pointer ${
                    isDark ? 'bg-gray-900/20 border-gray-800 hover:bg-gray-800/30' : 'bg-white/50 border-gray-200 hover:bg-white/80'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: isDark ?
                      '0 25px 50px -12px rgba(139, 92, 246, 0.25)' :
                      '0 25px 50px -12px rgba(139, 92, 246, 0.15)'
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${
                      i === 0 ? (isDark ? 'bg-cyan-500/20' : 'bg-blue-100') :
                      i === 1 ? (isDark ? 'bg-purple-500/20' : 'bg-purple-100') :
                      (isDark ? 'bg-pink-500/20' : 'bg-pink-100')
                    } flex items-center justify-center mb-6 mx-auto`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </motion.div>

                  <h4 className="text-xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Process Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className={`text-3xl md:text-4xl font-bold mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            How we work
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isActive = activePhase === phase.id

              return (
                <motion.div
                  key={phase.id}
                  className="relative group cursor-pointer flex-1 max-w-sm"
                  onClick={() => setActivePhase(phase.id as any)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div
                    className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                      isActive
                        ? `${phase.bgColor} ${phase.borderColor}`
                        : (isDark ? 'bg-gray-900/20 border-gray-800' : 'bg-white/50 border-gray-200')
                    } ${
                      isActive
                        ? ''
                        : 'hover:bg-card/50 hover:border-primary/20'
                    }`}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      boxShadow: isActive ?
                        (isDark ?
                          '0 25px 50px -12px rgba(139, 92, 246, 0.3)' :
                          '0 25px 50px -12px rgba(139, 92, 246, 0.2)'
                        ) :
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl ${phase.bgColor} flex items-center justify-center mb-6 mx-auto`}
                      animate={{
                        rotate: isActive ? [0, 10, -10, 0] : 0,
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-8 w-8 ${phase.color}`} />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h4 className={`text-lg font-bold transition-colors ${
                        isActive ? phase.color : 'text-foreground'
                      }`}>
                        {phase.label}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Active indicator */}
                    <motion.div
                      className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                        phase.bgColor.replace('/20', '/60').replace('100', '500/60')
                      }`}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />

                    {/* Connection lines */}
                    {index < phases.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border transform -translate-y-1/2">
                        <motion.div
                          className={`h-full ${
                            isDark ? 'bg-gradient-to-r from-purple-400 to-cyan-400' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: isActive ? '100%' : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <motion.div
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl border cursor-pointer group ${
              isDark
                ? 'bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-500/30 hover:from-purple-800/30 hover:to-cyan-800/30'
                : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 hover:from-purple-100 hover:to-blue-100'
            } transition-all duration-500`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Award className={`h-6 w-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <span className={`text-lg font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              Ready to build something legendary?
            </span>
            <ArrowRight className={`h-5 w-5 ${isDark ? 'text-purple-400' : 'text-purple-600'} transition-transform group-hover:translate-x-1`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
