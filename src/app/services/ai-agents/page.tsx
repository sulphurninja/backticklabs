'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Bot, ArrowUpRight, MessageSquare, Brain, Zap, Users, Database, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function AIAgentsPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP that understands context, intent, and nuance in human communication.'
    },
    {
      icon: Brain,
      title: 'Decision Making Logic',
      description: 'Intelligent reasoning systems that make complex decisions autonomously.'
    },
    {
      icon: Database,
      title: 'Multi-System Integration',
      description: 'Seamlessly connect to your existing tools, databases, and workflows.'
    },
    {
      icon: Zap,
      title: 'Learning & Adaptation',
      description: 'Agents that improve over time by learning from interactions and feedback.'
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
                  ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20'
                  : 'bg-gradient-to-br from-purple-50 via-transparent to-pink-50'
              }`}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
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
                    ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                    : 'bg-purple-100 border-purple-200 text-purple-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Bot className="h-4 w-4" />
                <span>AUTONOMOUS AI AGENTS</span>
              </motion.div>

              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-purple-400 via-pink-400 to-cyan-400'
                  : 'from-purple-600 via-pink-600 to-blue-600'
              }`}>
                AI Agents
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Autonomous Intelligence
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Intelligent agents that work independently to solve complex business problems.
                They think, learn, and act on your behalf, 24/7.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                  } text-white border-0`}
                >
                  <span className="flex items-center gap-2">
                    Deploy AI Agents
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
