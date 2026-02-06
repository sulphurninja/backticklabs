'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useTime } from 'framer-motion'
import { ArrowUpRight, Sparkles, Zap, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export default function CallToAction() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const time = useTime()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 bg-background overflow-hidden"
    >
      {/* Kinetic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20'
              : 'bg-gradient-to-br from-purple-50 via-transparent to-cyan-50'
          }`}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${isDark ? 'bg-purple-400/30' : 'bg-purple-400/40'}`}
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
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Large Background Text */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center ${isDark ? 'opacity-5' : 'opacity-10'}`}
          animate={{ rotate: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className={`text-[20vw] font-black tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'} select-none`}>
            FUTURE
          </div>
        </motion.div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Main CTA Content */}
          <div className="space-y-8">
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
                isDark
                  ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                  : 'bg-purple-100 border-purple-200 text-purple-600'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>READY TO BUILD?</span>
            </motion.div>

            {/* Kinetic Typography */}
            <div className="space-y-6">
              <motion.h2
                className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Let's invent
              </motion.h2>

              <motion.div
                className="overflow-hidden"
                initial={{ height: '0.8em' }}
                animate={{ height: 'auto' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h2
                  className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark
                      ? 'from-purple-400 via-cyan-400 to-pink-400'
                      : 'from-purple-600 via-blue-600 to-pink-600'
                  }`}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  your future.
                </motion.h2>
              </motion.div>
            </div>

            <motion.p
              className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Whether you're a startup with a wild idea or an enterprise ready to leap into AI,
              <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}> we're here to make the impossible possible.</span>
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              size="lg"
              className={`group relative overflow-hidden h-16 px-12 text-xl font-bold rounded-full transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
              } text-white border-0`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Building with Backtick
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`group h-16 px-8 text-lg border-2 transition-all duration-300 ${
                isDark
                  ? 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50'
                  : 'border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400'
              } rounded-full`}
            >
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                hello@backtick.app
              </span>
            </Button>
          </motion.div>

          {/* Lab Credentials */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { label: 'AI RESEARCH', value: 'ADVANCED' },
              { label: 'STARTUP READY', value: 'ALWAYS' },
              { label: 'SHIP SPEED', value: 'RAPID' },
              { label: 'INNOVATION', value: '∞' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`text-2xl font-black font-mono ${
                  isDark ? 'text-cyan-400 group-hover:text-purple-400' : 'text-blue-600 group-hover:text-purple-600'
                } transition-colors`}>
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className={`text-lg font-mono tracking-wider ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              // The future is not coming. We're building it now.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
