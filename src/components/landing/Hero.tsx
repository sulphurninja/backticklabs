'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Play, Pause } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useTime,
  useReducedMotion,
} from 'framer-motion'

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const time = useTime()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const prefersReducedMotion = useReducedMotion()

  const [isLoaded, setIsLoaded] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [artParams, setArtParams] = useState({
    complexity: 0.3,
    energy: 0.5,
    harmony: 0.7,
  })

  // Generative canvas art - restored original animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number

    const draw = () => {
      const t = time.get() * 0.001
      const mx = smoothMouseX.get()
      const my = smoothMouseY.get()

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = 12
      const centerX = canvas.offsetWidth / 2
      const centerY = canvas.offsetHeight / 2
      const radius = Math.min(centerX, centerY) * 0.4

      // Theme-aware colors
      const primaryColor = isDark ? '0, 255, 255' : '59, 130, 246'
      const secondaryColor = isDark ? '139, 92, 246' : '168, 85, 247'
      const accentColor = isDark ? '244, 114, 182' : '236, 72, 153'

      // Draw connections
      ctx.strokeStyle = `rgba(${primaryColor}, ${0.05 + artParams.energy * 0.15})`
      ctx.lineWidth = isDark ? 1 : 0.8
      ctx.beginPath()

      for (let i = 0; i < nodes; i++) {
        for (let j = i + 1; j < nodes; j++) {
          const angle1 = (i / nodes) * Math.PI * 2 + t * 0.2
          const angle2 = (j / nodes) * Math.PI * 2 + t * 0.2

          const x1 = centerX + Math.cos(angle1) * (radius + Math.sin(t + i) * 20)
          const y1 = centerY + Math.sin(angle1) * (radius + Math.cos(t + i) * 20)
          const x2 = centerX + Math.cos(angle2) * (radius + Math.sin(t + j) * 20)
          const y2 = centerY + Math.sin(angle2) * (radius + Math.cos(t + j) * 20)

          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
          if (distance < 150) {
            const opacity = (1 - distance / 150) * (0.1 + mx * 0.2)
            ctx.globalAlpha = opacity
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
          }
        }
      }
      ctx.stroke()
      ctx.globalAlpha = 1

      // Draw nodes
      for (let i = 0; i < nodes; i++) {
        const angle = (i / nodes) * Math.PI * 2 + t * 0.2
        const x = centerX + Math.cos(angle) * (radius + Math.sin(t + i) * 20)
        const y = centerY + Math.sin(angle) * (radius + Math.cos(t + i) * 20)

        const size = 3 + Math.sin(t * 2 + i) * 2 + my * 5

        // Node glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
        gradient.addColorStop(0, `rgba(${primaryColor}, ${isDark ? 0.8 : 0.6})`)
        gradient.addColorStop(0.5, `rgba(${secondaryColor}, ${isDark ? 0.4 : 0.3})`)
        gradient.addColorStop(1, `rgba(${secondaryColor}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core node
        ctx.fillStyle = isDark ? '#00ffff' : '#3b82f6'
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Data flow particles
      const particleCount = 8
      for (let i = 0; i < particleCount; i++) {
        const progress = (t * 0.5 + i / particleCount) % 1
        const angle = progress * Math.PI * 2 + i
        const spiralRadius = radius * 0.3 + progress * radius * 0.7

        const x = centerX + Math.cos(angle) * spiralRadius
        const y = centerY + Math.sin(angle) * spiralRadius

        const size = 2 + Math.sin(progress * Math.PI) * 3
        const opacity = Math.sin(progress * Math.PI) * 0.7

        ctx.fillStyle = `rgba(${accentColor}, ${opacity * (isDark ? 1 : 0.8)})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [time, smoothMouseX, smoothMouseY, artParams, prefersReducedMotion, isDark])

  // Simple load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen mt-24 flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Generative Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Subtle Environment */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={isDark ? 'neural-network-dark' : 'neural-network-light'} />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark ? [
              'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 60%, rgba(139,92,246,0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(244,114,182,0.03) 0%, transparent 50%)',
            ] : [
              'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 60%, rgba(168,85,247,0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(236,72,153,0.03) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">

          {/* Left: Typography & Identity */}
          <div className="lg:col-span-7 space-y-8">

            {/* Studio Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <motion.div
                animate={{ rotate: isLoaded ? 360 : 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className={`w-3 h-3 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-blue-500'}`}
              />
              <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
                AI Studio  — Est. 2024
              </span>
            </motion.div>

            {/* Main Typography - Fixed with two lines */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.h1
                  className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]"
                  style={{
                    fontFamily: 'var(--font-geist-sans)',
                    fontVariationSettings: '"wght" 900',
                  }}
                >
                  {/* First line: BACKTICK */}
                  <span className="block">
                    {"BACKTICK".split('').map((char, i) => (
                      <motion.span
                        key={`${isDark}-backtick-${i}`}
                        className="inline-block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.6 }}
                        style={{
                          background: isDark
                            ? 'linear-gradient(135deg, #00ffff, #8b5cf6)'
                            : 'linear-gradient(135deg, #1e40af, #8b5cf6)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          MozBackgroundClip: 'text',
                          MozTextFillColor: 'transparent',
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>

                  {/* Second line: LABS */}
                  <span className="block">
                    {"LABS".split('').map((char, i) => (
                      <motion.span
                        key={`${isDark}-labs-${i + 8}`}
                        className="inline-block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (i + 8) * 0.08, duration: 0.6 }}
                        style={{
                          background: isDark
                            ? 'linear-gradient(135deg, #8b5cf6, #f472b6)'
                            : 'linear-gradient(135deg, #7c3aed, #ec4899)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          MozBackgroundClip: 'text',
                          MozTextFillColor: 'transparent',
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>

                <motion.div
                  className="flex items-center gap-4 mt-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className={`text-2xl ${isDark ? 'text-cyan-400' : 'text-blue-500'}`}
                  >
                    ●
                  </motion.span>
                  <p className="font-mono text-lg md:text-xl text-muted-foreground tracking-wider uppercase">
                    WHERE CODE MEETS CREATIVITY
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Creative Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ delay: 1.5 }}
              className="space-y-6"
            >
              <p className="text-xl text-foreground max-w-lg leading-relaxed">
                We architect the impossible. Design the unthinkable.
                <span className={`${isDark ? 'text-cyan-400' : 'text-blue-600'} font-medium`}> Ship the future.</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className={`group bg-transparent border-2 transition-all duration-300 px-8 py-6 text-lg ${isDark
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                    : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    Start Project
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>

                <button
                  onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                  className="group flex items-center gap-3 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors border border-border hover:border-muted-foreground rounded-lg"
                >
                  {isAudioPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  <span className="font-mono text-sm tracking-wider">
                    {isAudioPlaying ? 'PAUSE' : 'PLAY'} AMBIENT
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Elements */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-12">

            {/* Creative Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="grid grid-cols-2 gap-6 w-full max-w-sm"
            >
              {[
                { label: 'EXPERIMENTS', value: '∞' },
                { label: 'POSSIBILITIES', value: '∞²' },
                { label: 'CREATIVE ENERGY', value: '100%' },
                { label: 'FUTURE READY', value: 'TRUE' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group cursor-pointer bg-card/50 backdrop-blur-sm"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`font-mono text-2xl font-black mb-1 group-hover:text-purple-500 transition-colors ${isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Lab Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="w-full max-w-sm p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-muted-foreground tracking-wide">LAB STATUS</span>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              </div>

              <div className="space-y-3 font-mono text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>CREATIVE_MATRIX</span>
                  <span className="text-green-500">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>AI_AGENTS</span>
                  <span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>READY</span>
                </div>
                <div className="flex justify-between">
                  <span>INNOVATION</span>
                  <span className="text-purple-500">ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="font-mono text-xs tracking-widest">SCROLL TO EXPLORE</div>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  )
}
