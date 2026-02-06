'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, Eye, ArrowUpRight, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function BlogPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'AI Development', 'Voice AI', 'Development', 'Case Studies', 'Insights']

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
      slug: 'building-ai-agents-production',
      featured: true
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
      slug: 'future-voice-ai',
      featured: false
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
      slug: 'ship-fast-development-process',
      featured: false
    },
    {
      id: 4,
      title: 'Why We Chose MCP for AI Agent Communication',
      excerpt: 'A technical deep-dive into Model Context Protocol and how it revolutionized our AI agent architecture.',
      category: 'AI Development',
      author: 'Backtick Labs Team',
      date: '2024-12-01',
      readTime: '5 min read',
      views: '1.8k',
      slug: 'why-mcp-ai-agents',
      featured: false
    },
    {
      id: 5,
      title: 'OceanLinux: Rethinking Cloud Infrastructure for AI',
      excerpt: 'How we built a managed VPS platform optimized for AI workloads with transparent pricing and Indian payment methods.',
      category: 'Case Studies',
      author: 'Backtick Labs Team',
      date: '2024-11-28',
      readTime: '7 min read',
      views: '3.1k',
      slug: 'oceanlinux-cloud-infrastructure',
      featured: false
    },
    {
      id: 6,
      title: 'The Economics of AI: Cost vs Value in 2024',
      excerpt: 'Breaking down the real costs of AI implementation and how to calculate ROI for AI projects.',
      category: 'Insights',
      author: 'Backtick Labs Team',
      date: '2024-11-25',
      readTime: '9 min read',
      views: '2.6k',
      slug: 'economics-ai-cost-value',
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-white via-purple-400 to-cyan-400'
                  : 'from-gray-900 via-purple-600 to-blue-600'
              }`}>
                Lab Notes
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Insights from the trenches of AI development. Real stories, hard lessons, and the future we're building.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'All' && searchQuery === '' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16"
              >
                <div className="text-sm font-medium text-primary mb-4">Featured Article</div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className={`group relative rounded-3xl p-8 md:p-12 border backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                    isDark ? 'bg-gray-900/30 border-gray-800 hover:bg-gray-800/40' : 'bg-white/80 border-gray-200 hover:bg-white'
                  }`}>
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                          isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                        }`}>
                          {featuredPost.category}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Dec 15, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>{featuredPost.views} views</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className={`aspect-video rounded-2xl border backdrop-blur-sm p-8 flex items-center justify-center ${
                          isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white/70 border-gray-300'
                        }`}>
                          <div className="text-6xl">🤖</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <article className={`group h-full p-6 rounded-2xl border backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                      isDark ? 'bg-card/30 border-border hover:border-primary/30' : 'bg-white/80 border-gray-200 hover:border-primary/30'
                    }`}>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium mb-3 ${
                        isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {post.category}
                      </div>

                      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
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
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
