'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Calendar,
  Clock,
  ArrowUpRight,
  Sparkles,
  Brain,
  Code,
  Rocket,
  User,
  Eye
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Blog() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const [featuredPost, setFeaturedPost] = useState(0)

  const blogPosts = [
    {
      id: 1,
      title: 'Building AI Agents That Actually Work in Production',
      excerpt: 'Lessons learned from deploying 50+ AI agents across different industries. From hallucination handling to real-world performance optimization.',
      category: 'AI Development',
      author: 'Backtick Labs Team',
      date: '2024-12-15',
      readTime: '8 min read',
      views: '2.1k',
      featured: true,
      slug: 'building-ai-agents-production',
      tags: ['AI', 'Production', 'Agents'],
      color: isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600',
      icon: Brain,
      bgGradient: isDark
        ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20'
        : 'bg-gradient-to-br from-purple-100 to-pink-100'
    },
    {
      id: 2,
      title: 'The Future of Voice AI: Beyond Simple Commands',
      excerpt: 'How we built WOW Voice to understand context, emotions, and complex business workflows. A deep dive into conversational AI architecture.',
      category: 'Voice AI',
      author: 'Backtick Labs Team',
      date: '2024-12-10',
      readTime: '12 min read',
      views: '3.7k',
      featured: false,
      slug: 'future-voice-ai',
      tags: ['Voice AI', 'NLP', 'Architecture'],
      color: isDark ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600',
      icon: Code,
      bgGradient: isDark
        ? 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20'
        : 'bg-gradient-to-br from-cyan-100 to-blue-100'
    },
    {
      id: 3,
      title: 'Ship Fast or Die: Our 48-Hour Product Development Process',
      excerpt: 'How we go from idea to production-ready AI products in 2 days. Our battle-tested framework for rapid AI development and deployment.',
      category: 'Development',
      author: 'Backtick Labs Team',
      date: '2024-12-05',
      readTime: '6 min read',
      views: '4.2k',
      featured: false,
      slug: 'ship-fast-development-process',
      tags: ['Development', 'Process', 'Speed'],
      color: isDark ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600',
      icon: Rocket,
      bgGradient: isDark
        ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20'
        : 'bg-gradient-to-br from-green-100 to-emerald-100'
    }
  ]

  const recentPosts = [
    {
      title: 'Why We Chose MCP for AI Agent Communication',
      date: '2024-12-01',
      readTime: '5 min',
      slug: 'why-mcp-ai-agents'
    },
    {
      title: 'OceanLinux: Rethinking Cloud Infrastructure for AI',
      date: '2024-11-28',
      readTime: '7 min',
      slug: 'oceanlinux-cloud-infrastructure'
    },
    {
      title: 'The Economics of AI: Cost vs Value in 2024',
      date: '2024-11-25',
      readTime: '9 min',
      slug: 'economics-ai-cost-value'
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-gray-900/30 via-transparent to-purple-900/20'
              : 'bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/50'
          }`}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Icons */}
        {blogPosts.map((post, i) => {
          const Icon = post.icon
          return (
            <motion.div
              key={i}
              className={`absolute ${isDark ? 'opacity-5' : 'opacity-10'}`}
              style={{
                left: `${10 + i * 30}%`,
                top: `${15 + i * 25}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <Icon className="w-24 h-24 text-primary/30" />
            </motion.div>
          )
        })}
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <Sparkles className="h-4 w-4" />
            <span>INSIGHTS FROM THE LAB</span>
          </motion.div>

          <h2 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
            isDark
              ? 'from-white via-purple-400 to-cyan-400'
              : 'from-gray-900 via-purple-600 to-blue-600'
          }`}>
            Latest from our Lab
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep dives into AI development, production insights, and the future we're building.
            <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}> Fresh from the trenches.</span>
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className={`relative rounded-3xl p-8 md:p-12 border backdrop-blur-sm overflow-hidden ${
            isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-white/80 border-gray-200'
          }`}>
            {/* Background Gradient */}
            <div className={`absolute inset-0 ${blogPosts[0].bgGradient} opacity-60`} />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {/* Category Badge */}
                <motion.div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                    isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Brain className="h-3 w-3" />
                  <span>{blogPosts[0].category}</span>
                </motion.div>

                {/* Title */}
                <h3 className={`text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r bg-clip-text text-transparent ${blogPosts[0].color}`}>
                  {blogPosts[0].title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{blogPosts[0].views} views</span>
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <Button
                    className={`group bg-transparent border-2 transition-all duration-300 ${
                      isDark
                        ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black'
                        : 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      Read Article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Featured Visual */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`aspect-video rounded-2xl border backdrop-blur-sm p-8 flex items-center justify-center ${
                  isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white/70 border-gray-300'
                }`}>
                  <Brain className={`h-24 w-24 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => {
            const Icon = post.icon
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className={`h-full rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500 ${
                      isDark ? 'bg-card/30 border-border hover:border-primary/30' : 'bg-white/80 border-gray-200 hover:border-primary/30'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    animate={{
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isDark ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-6 w-6 ${isDark ? 'text-primary' : 'text-primary'}`} />
                    </motion.div>

                  {/* Category */}
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium mb-3 ${
                      isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {post.category}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Dec {index + 5}, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Links to Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">More from the Lab</h3>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {recentPosts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <motion.div
                  className={`p-4 rounded-xl border transition-all duration-300 hover:border-primary/50 ${
                    isDark ? 'bg-gray-900/20 border-gray-800' : 'bg-white/50 border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <h4 className="font-semibold mb-2 text-sm">{post.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div className="mt-8">
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full"
              >
                <span className="flex items-center gap-2">
                  View All Articles
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
