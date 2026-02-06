'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Server, Clock, Zap, Shield, ArrowUpRight, CheckCircle, Play, Users, TrendingUp, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export default function FeaturedProduct() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [activeFeature, setActiveFeature] = useState(0)
  const [isPreviewHovered, setIsPreviewHovered] = useState(false)
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  const valuePillars = [
    {
      title: 'Speed to Production',
      description: 'From idea → live server in minutes with one-click stacks, snapshots, and sane defaults.',
      icon: Zap,
      color: isDark ? 'text-green-400' : 'text-green-600',
      accent: isDark ? 'bg-green-500/20' : 'bg-green-100'
    },
    {
      title: 'AI SmartOps',
      description: 'Our automation picks optimal instances/regions, right-sizes, and suggests savings—no DevOps degree required.',
      icon: Server,
      color: isDark ? 'text-cyan-400' : 'text-blue-600',
      accent: isDark ? 'bg-cyan-500/20' : 'bg-blue-100'
    },
    {
      title: 'Transparent Economics',
      description: 'India-native payments (UPI, cards, GST invoices), honest pricing, no surprise bills.',
      icon: Shield,
      color: isDark ? 'text-purple-400' : 'text-purple-600',
      accent: isDark ? 'bg-purple-500/20' : 'bg-purple-100'
    }
  ]

  const coreFeatures = [
    'NVMe VPS with dedicated vCPU options',
    'One-click stacks (Docker, Node, Python, databases)',
    'Snapshots & backups you will actually use',
    'IPv4/IPv6 with clean IP hygiene',
    'API & CLI for serious workflows',
    'Human + AI support (chat/WhatsApp)'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % valuePillars.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [valuePillars.length])

  const handleWebsiteClick = () => {
    window.open('https://oceanlinux.com', '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="featured-product"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 bg-background overflow-hidden"
    >

      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full ${
            isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'
          } blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full ${
            isDark ? 'bg-green-500/5' : 'bg-green-500/10'
          } blur-3xl`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="container max-w-7xl mx-auto px-4 relative z-10"
        style={{ y, opacity }}
      >
          <div className='flex items-center mb-12 justify-center'>
            {/* Badge */}
            <motion.div
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
                isDark ? 'bg-amber-500 -500/20 border-blue-500/30 text-white -400' : 'bg-amber-500 -100 border-blue-200 text-white -600'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="h-4 w-4 bg-am" />
              <span>FEATURED PRODUCT</span>
            </motion.div>
</div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Main Title & Subtitle */}
            <div className="space-y-4">
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark
                    ? 'from-blue-400 via-cyan-400 to-teal-400'
                    : 'from-blue-600 via-cyan-500 to-teal-500'
                }`}>
                🌊Ocean
                </span>
                <span className=" text-foreground">Linux</span>
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-foreground font-semibold">AI-Automated Cloud for Builders</span>
                <br />
                Spin up blazing-fast VPS with AI-driven provisioning, routing, and pricing.
                Built by Backtick Labs to help startups ship faster, scale smarter, and pay fairly.
              </motion.p>
            </div>

            {/* Credibility Strip */}
            <motion.div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className={`h-5 w-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  1st Month Launch Success
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-mono font-bold">₹8,40,431 revenue</span> • <span className="font-mono font-bold">1822 orders</span> (early adopters, zero ads)
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Backed by Backtick Labs (The AI Team for your startup)
              </div>
            </motion.div>

            {/* Value Pillars */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Why OceanLinux?</h3>
              {valuePillars.map((pillar, index) => {
                const Icon = pillar.icon
                const isActive = index === activeFeature

                return (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      isActive ? pillar.accent : 'hover:bg-card/50'
                    } border ${
                      isActive ? 'border-primary/30' : 'border-transparent hover:border-border'
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`p-2 rounded-lg ${pillar.accent} flex-shrink-0`}
                      animate={{
                        scale: isActive ? 1.1 : 1
                      }}
                    >
                      <Icon className={`h-5 w-5 ${pillar.color}`} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Core Features */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h4 className="text-md font-semibold text-foreground">Core Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {coreFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.6 }}
                  >
                    <CheckCircle className={`h-4 w-4 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                onClick={handleWebsiteClick}
                className={`group transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                } text-white border-0`}
              >
                <span className="flex items-center gap-2">
                  Launch a Server
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleWebsiteClick}
                className={`transition-colors ${
                  isDark
                    ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                    : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                }`}
              >
                See Pricing
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Live Website Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center -mt-96 justify-center"
          >
            {/* Browser Window with Live Website */}
            <motion.div
              className="relative w-full max-w-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={handleWebsiteClick}
              onMouseEnter={() => setIsPreviewHovered(true)}
              onMouseLeave={() => setIsPreviewHovered(false)}
            >
              <motion.div
                className={`rounded-2xl overflow-hidden shadow-2xl border ${
                  isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
                }`}
                animate={{
                  boxShadow: isPreviewHovered ?
                    (isDark ?
                      '0 25px 50px -12px rgba(0, 255, 255, 0.25)' :
                      '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                    ) :
                    '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              >
                {/* Browser Header */}
                <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                  isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className={`flex-1 mx-3 px-3 py-1 rounded-md text-sm ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'
                  } font-mono`}>
                    oceanlinux.com
                  </div>
                  <motion.div
                    animate={{ opacity: isPreviewHovered ? 1 : 0.7 }}
                    className={`text-xs px-2 py-1 rounded ${
                      isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                    }`}
                  >
                    LIVE
                  </motion.div>
                </div>

                {/* Live Website Iframe */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {/* Loading State */}
                  {!isIframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                      <div className="flex flex-col items-center gap-3">
                        <motion.div
                          className={`w-8 h-8 border-2 border-current border-t-transparent rounded-full ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span className="text-sm text-muted-foreground">Loading oceanlinux.com</span>
                      </div>
                    </div>
                  )}

                  {/* Actual Website */}
                  <iframe
                    src="https://oceanlinux.com"
                    className="w-full h-full border-0"
                    onLoad={() => setIsIframeLoaded(true)}
                    style={{
                      transform: 'scale(0.8)',
                      transformOrigin: 'top left',
                      width: '125%',
                      height: '205%'
                    }}
                    title="OceanLinux Live Preview"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isPreviewHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`px-6 py-3 rounded-full ${
                      isDark ? 'bg-gray-900/90' : 'bg-white/90'
                    } backdrop-blur-sm border flex items-center gap-2`}>
                      <ExternalLink className={`h-4 w-4 ${
                        isDark ? 'text-cyan-400' : 'text-blue-600'
                      }`} />
                      <span className={`text-sm font-medium ${
                        isDark ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        Visit oceanlinux.com
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Status Indicators */}
              <motion.div
                className={`absolute -top-4 -right-4 px-3 py-2 rounded-full ${
                  isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-100 border border-green-200'
                } backdrop-blur-sm`}
                animate={{
                  y: [0, -5, 0],
                  scale: isPreviewHovered ? 1.05 : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className={`text-xs font-medium ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}>
                    LIVE
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={`absolute -bottom-4 -left-4 px-3 py-2 rounded-full ${
                  isDark ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-100 border border-blue-200'
                } backdrop-blur-sm`}
                animate={{
                  y: [0, 5, 0],
                  scale: isPreviewHovered ? 1.05 : 1
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Users className={`h-3 w-3 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <span className={`text-xs font-medium ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    2202+ users
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground">
            Built by product builders for product builders — zero fluff, everything you need to ship.
            <br />
            <button
              onClick={handleWebsiteClick}
              className={`mt-2 text-sm underline hover:no-underline ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}
            >
              Uptime, data handling, and acceptable-use details in our Trust Center →
            </button>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
