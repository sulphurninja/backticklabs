'use client'

import { motion } from 'framer-motion'
import { Users, Target, Zap, Heart, Code, Sparkles, Award, Globe, Rocket } from 'lucide-react'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const values = [
    {
      icon: Zap,
      title: 'Ship Fast, Learn Faster',
      description: 'We believe in rapid iteration, real user feedback, and continuous improvement.',
      color: isDark ? 'text-yellow-400' : 'text-yellow-600'
    },
    {
      icon: Heart,
      title: 'Human-Centric AI',
      description: 'Technology should amplify human potential, not replace human connection.',
      color: isDark ? 'text-pink-400' : 'text-pink-600'
    },
    {
      icon: Target,
      title: 'AI-First Thinking',
      description: 'Every solution starts with how AI can make it 10x better, not just 10% better.',
      color: isDark ? 'text-cyan-400' : 'text-blue-600'
    },
    {
      icon: Code,
      title: 'Craft Over Speed',
      description: 'We balance rapid development with thoughtful architecture and clean code.',
      color: isDark ? 'text-purple-400' : 'text-purple-600'
    }
  ]

  const stats = [
    { icon: Award, label: 'Projects Delivered', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '165+' },
    { icon: Globe, label: 'Countries Served', value: '4' },
    { icon: Rocket, label: 'AI Models Deployed', value: '50+' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
                  isDark
                    ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                    : 'bg-purple-100 border-purple-200 text-purple-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>ABOUT BACKTICK LABS</span>
              </motion.div>

              <h1 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-white via-purple-400 to-cyan-400'
                  : 'from-gray-900 via-purple-600 to-blue-600'
              }`}>
                We build the unbuildable
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Backtick Labs is a full-stack AI product team that turns impossible ideas into production-ready solutions.
                We're the team you call when "it can't be done" – because that's exactly when we do our best work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
              <div className={`max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-sm border ${
                isDark ? 'bg-gray-900/20 border-gray-800' : 'bg-white/50 border-gray-200'
              }`}>
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                  "To democratize AI by building production-ready solutions that empower businesses
                  to focus on what they do best, while AI handles the rest."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every line of code we write.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl backdrop-blur-sm border ${
                      isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Icon className={`h-12 w-12 ${value.color} mb-6`} />
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">By the Numbers</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${
                      isDark ? 'text-primary' : 'text-primary'
                    }`} />
                    <div className={`text-4xl font-black mb-2 ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Story</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Founded in 2024, Backtick Labs emerged from a simple observation: while AI was advancing rapidly,
                  most businesses struggled to implement it effectively in production environments.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We started with a mission to bridge that gap – not just by building AI solutions, but by creating
                  complete product experiences that businesses could deploy immediately and scale confidently.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Today, we're a full-stack AI product team that has helped over 165 clients across 4 countries
                  turn their ambitious ideas into production-ready solutions. From AI SaaS platforms to voice agents,
                  from cloud infrastructure to custom AI implementations – we build it all.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
