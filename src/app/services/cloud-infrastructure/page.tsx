'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Cloud, ArrowUpRight, Server, Shield, Zap, BarChart3, Database, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CloudInfrastructurePage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const features = [
    {
      icon: Zap,
      title: 'Auto-scaling',
      description: 'Intelligent scaling that adapts to AI workload demands automatically.'
    },
    {
      icon: BarChart3,
      title: 'Load Balancing',
      description: 'Smart traffic distribution across multiple AI inference endpoints.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC2, HIPAA, and GDPR compliance.'
    },
    {
      icon: Cpu,
      title: 'Performance Optimization',
      description: 'GPU clusters and edge deployment for lightning-fast AI responses.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20'
                  : 'bg-gradient-to-br from-orange-50 via-transparent to-red-50'
              }`}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Network nodes animation */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  isDark ? 'bg-orange-400/40' : 'bg-orange-500/30'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
                  isDark
                    ? 'bg-orange-500/20 border-orange-500/30 text-orange-400'
                    : 'bg-orange-100 border-orange-200 text-orange-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Cloud className="h-4 w-4" />
                <span>AI-FIRST CLOUD ARCHITECTURE</span>
              </motion.div>

              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-orange-400 via-red-400 to-pink-400'
                  : 'from-orange-600 via-red-600 to-pink-600'
              }`}>
                Cloud
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                AI-First Architecture
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Robust, scalable infrastructure designed specifically for AI workloads.
                From GPU clusters to edge deployment, we build the backbone that powers your AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                      : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
                  } text-white border-0`}
                >
                  <span className="flex items-center gap-2">
                    Build AI Infrastructure
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl backdrop-blur-sm border ${
                      isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                    }`}
                  >
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
