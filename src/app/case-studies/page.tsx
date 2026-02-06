'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, TrendingUp, Users, Zap, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CaseStudiesPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const caseStudies = [
    {
      title: 'Backtick App',
      subtitle: 'AI Team for Startups',
      description: 'A collaborative AI workspace with multi-role agents that ship production-grade UI components and integrate with development workflows.',
      category: 'AI SaaS',
      results: [
        { metric: '10x', description: 'Faster UI development' },
        { metric: '95%', description: 'Code quality score' },
        { metric: '500+', description: 'Components generated' },
        { metric: '24/7', description: 'AI team availability' }
      ],
      technologies: ['Next.js', 'shadcn/ui', 'MCP', 'Claude/GPT'],
      link: 'https://backtick.app',
      color: isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600',
      bgColor: isDark ? 'bg-purple-500/10' : 'bg-purple-100'
    },
    {
      title: 'OceanLinux',
      subtitle: 'Managed VPS & Cloud',
      description: 'AI-assisted cloud platform with transparent India-first billing, one-click deployments, and smart operations.',
      category: 'Cloud Infrastructure',
      results: [
        { metric: '99.9%', description: 'Uptime guarantee' },
        { metric: '3min', description: 'Average deployment time' },
        { metric: '40%', description: 'Cost reduction vs competitors' },
        { metric: '24/7', description: 'AI + Human support' }
      ],
      technologies: ['Kubernetes', 'NVMe', 'AI SmartOps', 'UPI Payments'],
      link: '/oceanlinux',
      color: isDark ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600',
      bgColor: isDark ? 'bg-cyan-500/10' : 'bg-cyan-100'
    },
    {
      title: 'WOW Voice',
      subtitle: 'Conversational AI Platform',
      description: 'Voice AI agents for businesses that handle calls, qualify leads, and integrate with CRM systems for seamless customer interactions.',
      category: 'Voice AI',
      results: [
        { metric: '80%', description: 'Call resolution rate' },
        { metric: '50%', description: 'Support cost reduction' },
        { metric: '24/7', description: 'Availability' },
        { metric: '97%', description: 'Customer satisfaction' }
      ],
      technologies: ['Voice AI', 'NLP', 'WebRTC', 'CRM APIs'],
      link: '/wow-voice',
      color: isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600',
      bgColor: isDark ? 'bg-green-500/10' : 'bg-green-100'
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
                    ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                    : 'bg-purple-100 border-purple-200 text-purple-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-4 w-4" />
                <span>SUCCESS STORIES</span>
              </motion.div>

              <h1 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-white via-purple-400 to-cyan-400'
                  : 'from-gray-900 via-purple-600 to-blue-600'
              }`}>
                Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Real results from real projects. See how we've helped startups and enterprises
                build AI products that users love and businesses depend on.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`rounded-3xl p-8 md:p-12 border backdrop-blur-sm ${
                    isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      {/* Category */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {study.category}
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h2 className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r bg-clip-text text-transparent ${study.color}`}>
                          {study.title}
                        </h2>
                        <h3 className="text-xl font-semibold text-muted-foreground mb-4">
                          {study.subtitle}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {study.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div>
                        {study.link.startsWith('http') ? (
                          <a href={study.link} target="_blank" rel="noopener noreferrer">
                            <Button
                              className={`group bg-gradient-to-r text-white border-0 ${study.color.replace('from-', 'from-').replace('to-', 'to-')}`}
                            >
                              <span className="flex items-center gap-2">
                                View Live Product
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </span>
                            </Button>
                          </a>
                        ) : (
                          <Link href={study.link}>
                            <Button
                              className={`group bg-gradient-to-r text-white border-0 ${study.color.replace('from-', 'from-').replace('to-', 'to-')}`}
                            >
                              <span className="flex items-center gap-2">
                                Learn More
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </span>
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">Key Results</h3>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result, i) => (
                          <motion.div
                            key={i}
                            className={`p-6 rounded-2xl text-center ${study.bgColor}`}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <div className={`text-3xl font-black mb-2 ${study.color.split(' ')[0]} bg-gradient-to-r bg-clip-text text-transparent`}>
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                              {result.description}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready for your success story?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's build something that your users will love and your competition will envy.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className={`h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                  } text-white border-0`}
                >
                  Start Your Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
