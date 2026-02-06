'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Mic, ArrowUpRight, PhoneCall, MessageSquare, Users, Zap, Volume2, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function VoiceAIPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const features = [
    {
      icon: Volume2,
      title: 'Speech Recognition',
      description: 'Advanced ASR that understands accents, background noise, and natural speech patterns.'
    },
    {
      icon: MessageSquare,
      title: 'Intent Understanding',
      description: 'Deep NLU that grasps context, emotion, and complex business logic in conversations.'
    },
    {
      icon: PhoneCall,
      title: 'Response Generation',
      description: 'Natural, contextual responses that maintain conversation flow and achieve goals.'
    },
    {
      icon: Users,
      title: 'Multi-Language Support',
      description: 'Global reach with support for 40+ languages and regional dialects.'
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
                  ? 'bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20'
                  : 'bg-gradient-to-br from-cyan-50 via-transparent to-blue-50'
              }`}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Sound waves animation */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                  isDark ? 'border-cyan-400/20' : 'border-blue-400/20'
                }`}
                style={{
                  width: `${(i + 1) * 100}px`,
                  height: `${(i + 1) * 100}px`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
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
                    ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                    : 'bg-blue-100 border-blue-200 text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Mic className="h-4 w-4" />
                <span>CONVERSATIONAL AI INTERFACES</span>
              </motion.div>

              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-cyan-400 via-blue-400 to-purple-400'
                  : 'from-cyan-600 via-blue-600 to-purple-600'
              }`}>
                Voice AI
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Conversational Interfaces
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Next-generation voice experiences that understand context and intent.
                24/7 voice agents that answer calls, qualify leads, and engage customers naturally.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
                  } text-white border-0`}
                >
                  <span className="flex items-center gap-2">
                    Deploy Voice AI
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 text-lg rounded-full"
                >
                  <Headphones className="h-5 w-5 mr-2" />
                  Listen to Demo
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
