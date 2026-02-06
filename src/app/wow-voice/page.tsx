'use client'

import { motion } from 'framer-motion'
import { PhoneCall, ArrowUpRight, Mic, Users, BarChart3, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function WowVoicePage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const features = [
    {
      icon: PhoneCall,
      title: 'Inbound Call Handling',
      description: 'Replace your IVR with intelligent voice agents that understand and route calls perfectly.'
    },
    {
      icon: Users,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads, capture information, and schedule follow-ups.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track call performance, sentiment, and conversion rates in real-time.'
    },
    {
      icon: MessageSquare,
      title: 'CRM Integration',
      description: 'Seamlessly sync conversations, transcripts, and lead data with your existing CRM.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                <Mic className="h-4 w-4" />
                <span>VOICE AI AGENTS</span>
              </motion.div>

              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-blue-400 via-cyan-400 to-purple-400'
                  : 'from-blue-600 via-cyan-600 to-purple-600'
              }`}>
                WOW Voice
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                24/7 Voice Agents That Actually Work
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Intelligent voice agents that answer calls, qualify leads, book appointments,
                and sync conversations into your CRM with transcripts and summaries.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } text-white border-0`}
                >
                  <span className="flex items-center gap-2">
                    Request Demo Call
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>

                <Button variant="outline" size="lg" className="h-14 px-6 text-lg rounded-full">
                  Listen to Samples
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/20">
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
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-4xl md:text-5xl font-bold">
                Hear the difference
              </h3>
              <p className="text-xl text-muted-foreground">
                Experience natural conversations that convert prospects into customers.
              </p>

              <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="aspect-video bg-muted/30 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-6xl">🎵</div>
                </div>
                <p className="text-muted-foreground">
                  Interactive voice demo coming soon. Request a live demo call to experience WOW Voice in action.
                </p>
              </div>

              <Button
                size="lg"
                className={`h-14 px-8 text-lg rounded-full ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } text-white border-0`}
              >
                Schedule a Demo Call
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
