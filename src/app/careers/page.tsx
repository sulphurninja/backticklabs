'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowUpRight, Users, Zap, Heart, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CareersPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const openings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build production-ready AI systems that scale. Work with LLMs, voice AI, and cutting-edge ML technologies.',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow/PyTorch', 'Production AI systems', 'API design']
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design AI-first user experiences that feel magical yet intuitive. Shape how humans interact with AI.',
      requirements: ['AI/ML product experience', 'Figma expertise', 'User research', 'Design systems']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain the infrastructure that powers our AI products. Scale from prototype to production.',
      requirements: ['Kubernetes', 'AWS/GCP', 'CI/CD pipelines', 'Infrastructure as Code']
    }
  ]

  const perks = [
    {
      icon: Zap,
      title: 'Cutting-Edge Projects',
      description: 'Work on AI projects that push the boundaries of what\'s possible.'
    },
    {
      icon: Users,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with a global team of AI enthusiasts.'
    },
    {
      icon: Target,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and professional development.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.'
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
              <h1 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-white via-purple-400 to-cyan-400'
                  : 'from-gray-900 via-purple-600 to-blue-600'
              }`}>
                Join the Lab
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Help us build the future of AI. We're looking for passionate builders, thinkers,
                and dreamers who want to create AI products that actually matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-center p-8 rounded-2xl border backdrop-blur-sm mb-16 ${
                isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
              }`}
            >
              <p className="text-lg leading-relaxed">
                At Backtick Labs, we believe in building AI that amplifies human potential.
                Every team member shapes our products, culture, and the future we're creating together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground">
                Don't see the perfect fit? Send us your portfolio anyway – we're always looking for exceptional talent.
              </p>
            </motion.div>

            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-8 rounded-2xl border backdrop-blur-sm ${
                    isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-2xl font-bold">{job.title}</h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">Key Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button
                        className={`group ${
                          isDark
                            ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                            : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                        } text-white border-0`}
                      >
                        <span className="flex items-center gap-2">
                          Apply Now
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-20 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Join Us?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {perks.map((perk, index) => {
                const Icon = perk.icon
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
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {perk.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to build the future?
              </h2>
              <p className="text-xl text-muted-foreground">
                Send us your portfolio, tell us about your dreams, and let's create something extraordinary together.
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
                  Get in Touch
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
