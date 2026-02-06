'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Code,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Brain,
  Database,
  Shield,
  Zap,
  Users,
  BarChart3,
  Layers,
  Cpu
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function AISaaSPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  const features = [
    {
      icon: Brain,
      title: 'AI Model Integration',
      description: 'Seamlessly integrate GPT, Claude, custom models, and multi-modal AI into your product architecture.'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Cloud-native design patterns that scale from MVP to millions of users with zero downtime.'
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'AI-first UX that feels natural and intuitive. No learning curve, just pure productivity.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time insights into AI performance, user behavior, and business metrics that matter.'
    },
    {
      icon: Database,
      title: 'Data Pipeline',
      description: 'Robust data ingestion, processing, and storage systems designed for AI workloads.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC2, GDPR compliance, and data encryption at every layer.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, user needs, and technical requirements to craft the perfect AI solution.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'AI Architecture Design',
      description: 'Design scalable AI workflows, choose optimal models, and plan the technical architecture for your SaaS.',
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'MVP Development',
      description: 'Build and deploy a working MVP with core AI features, user authentication, and payment integration.',
      duration: '3-6 weeks'
    },
    {
      step: '04',
      title: 'Scale & Optimize',
      description: 'Continuous improvement, performance optimization, and feature expansion based on user feedback.',
      duration: 'Ongoing'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        >
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className={`absolute inset-0 ${
                isDark
                  ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20'
                  : 'bg-gradient-to-br from-purple-50 via-transparent to-cyan-50'
              }`}
              style={{ y }}
            />

            {/* Floating Code Icons */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${isDark ? 'opacity-5' : 'opacity-10'}`}
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${10 + Math.floor(i / 4) * 40}%`,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                <Code className="w-16 h-16 text-primary/30" />
              </motion.div>
            ))}
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              {/* Badge */}
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${
                  isDark
                    ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                    : 'bg-blue-100 border-blue-200 text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Code className="h-4 w-4" />
                <span>CUSTOM AI SAAS DEVELOPMENT</span>
              </motion.div>

              {/* Title */}
              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-cyan-400 via-purple-400 to-pink-400'
                  : 'from-blue-600 via-purple-600 to-pink-600'
              }`}>
                AI SaaS
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                End-to-End AI Products
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We design and build complete AI-powered SaaS platforms from concept to scale.
                Every line of code is crafted for performance, scalability, and user delight.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  } text-white border-0`}
                >
                  <span className="flex items-center gap-2">
                    Start Your AI SaaS Project
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 text-lg rounded-full"
                >
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                What we deliver
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Full-stack AI solutions that integrate seamlessly into your business workflow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                      isDark ? 'bg-card/30 border-border hover:border-primary/30' : 'bg-white/80 border-gray-200 hover:border-primary/30'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                        isDark ? 'bg-primary/20' : 'bg-primary/10'
                      }`}
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>

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

        {/* Process Section */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Our proven process
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From idea to production in weeks, not months
              </p>
            </motion.div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className={`p-8 rounded-2xl ${
                      isDark ? 'bg-card/50' : 'bg-white/80'
                    } border backdrop-blur-sm`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`text-4xl font-black ${
                          isDark ? 'text-primary' : 'text-primary'
                        }`}>
                          {step.step}
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {step.duration}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary"></div>
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
              <h3 className="text-4xl md:text-5xl font-bold">
                Ready to build your AI SaaS?
              </h3>
              <p className="text-xl text-muted-foreground">
                Let's turn your vision into a production-ready AI product that users love.
              </p>
              <Button
                size="lg"
                className={`group h-14 px-8 text-lg rounded-full ${
                  isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } text-white border-0`}
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
