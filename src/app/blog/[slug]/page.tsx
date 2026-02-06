'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, Eye, ArrowLeft, Share2, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    'building-ai-agents-production': {
      title: 'Building AI Agents That Actually Work in Production',
      excerpt: 'Lessons learned from deploying 50+ AI agents across different industries.',
      category: 'AI Development',
      author: 'Backtick Labs Team',
      date: '2024-12-15',
      readTime: '8 min read',
      views: '2.1k',
      content: `
        <p class="lead">After deploying over 50 AI agents across various industries, we've learned that the gap between AI demos and production systems is vast. Here are the hard-earned lessons that will save you months of debugging and frustrated users.</p>

        <h2>The Production Reality Check</h2>
        <p>Most AI agent tutorials show perfect scenarios: clean inputs, expected outputs, and happy path flows. Production is messier. Users type in unexpected ways, systems fail, and edge cases multiply.</p>

        <p>We've seen agents that worked perfectly in testing completely break when exposed to real user behavior. The solution isn't just better testing—it's building resilience into the agent architecture from day one.</p>

        <h2>Hallucination Handling</h2>
        <p>The biggest challenge we've faced is managing AI hallucinations in production. Here's our three-layer approach:</p>
        <ul>
          <li><strong>Input validation and sanitization:</strong> Clean and structure user inputs before they reach the AI model</li>
          <li><strong>Output confidence scoring:</strong> Rate every AI response and flag low-confidence answers</li>
          <li><strong>Human-in-the-loop fallbacks:</strong> Seamless handoff to human agents when AI confidence drops</li>
        </ul>

        <blockquote>
          "The best AI agents know when they don't know something and aren't afraid to ask for help."
        </blockquote>

        <h2>Performance at Scale</h2>
        <p>What works for 10 users doesn't work for 10,000. We've had to rebuild our architecture twice to handle scale properly. The key insights:</p>

        <ul>
          <li>Cache everything you can</li>
          <li>Use streaming responses for better perceived performance</li>
          <li>Implement proper rate limiting and queue management</li>
          <li>Monitor token usage and costs religiously</li>
        </ul>

        <h2>Monitoring and Observability</h2>
        <p>You can't improve what you can't measure. Our monitoring stack includes:</p>
        <ul>
          <li>Response time and throughput metrics</li>
          <li>AI model accuracy tracking</li>
          <li>User satisfaction scores</li>
          <li>Error rate analysis</li>
          <li>Cost per conversation tracking</li>
        </ul>

        <h2>The Human Element</h2>
        <p>The most successful AI agents we've deployed maintain a clear human element. Users need to know they're talking to AI, and they need easy ways to reach humans when needed.</p>

        <p>This isn't just about ethics—it's about user experience. Transparent AI agents that know their limitations perform better than those that try to hide their artificial nature.</p>

        <h2>Key Takeaways</h2>
        <p>Building production-ready AI agents requires more than just prompt engineering. It requires thinking about edge cases, monitoring, fallbacks, and the complete user journey.</p>

        <p>Start with these principles:</p>
        <ol>
          <li>Design for failure from day one</li>
          <li>Implement comprehensive monitoring</li>
          <li>Plan human fallbacks</li>
          <li>Test with real user data</li>
          <li>Monitor costs closely</li>
        </ol>

        <p>Ready to build AI agents that actually work in production? <a href="/contact">Let's talk about your project</a>.</p>
      `
    },
    'future-voice-ai': {
      title: 'The Future of Voice AI: Beyond Simple Commands',
      excerpt: 'How we built WOW Voice to understand context, emotions, and complex business workflows.',
      category: 'Voice AI',
      author: 'Backtick Labs Team',
      date: '2024-12-10',
      readTime: '12 min read',
      views: '3.7k',
      content: `
        <p class="lead">Voice AI has evolved far beyond "Hey Siri, set a timer." We're now building conversational AI that understands context, emotion, and complex business processes. Here's how we built WOW Voice and what we learned about the future of human-AI interaction.</p>

        <h2>Beyond Command and Control</h2>
        <p>Traditional voice assistants work on a simple model: wake word, command, response. But real conversations are messier, more contextual, and deeply human.</p>

        <p>When we started building WOW Voice, we realized that business conversations require a fundamentally different approach. A customer calling about a billing issue isn't just issuing commands—they're having a conversation with emotional context, multiple topics, and complex needs.</p>

        <h2>Understanding Context and Intent</h2>
        <p>The breakthrough came when we stopped thinking about voice AI as a command interpreter and started thinking of it as a conversation partner. This meant building systems that could:</p>

        <ul>
          <li>Maintain conversation context across multiple turns</li>
          <li>Understand emotional undertones and respond appropriately</li>
          <li>Handle interruptions and topic changes gracefully</li>
          <li>Remember previous interactions and build on them</li>
        </ul>

        <h2>The Technical Architecture</h2>
        <p>Building conversational AI requires a different technical approach than traditional chatbots. Our architecture includes:</p>

        <h3>Real-time Speech Processing</h3>
        <p>We use a combination of streaming ASR (Automatic Speech Recognition) and real-time processing to minimize latency. Every millisecond counts in voice conversations.</p>

        <h3>Contextual Memory Systems</h3>
        <p>Each conversation maintains both short-term (current call) and long-term (customer history) memory. This allows the AI to reference previous interactions and build relationships over time.</p>

        <h3>Emotion Detection and Response</h3>
        <p>We analyze vocal patterns, word choice, and conversation flow to detect emotional states and adjust responses accordingly. An frustrated customer needs a different approach than a happy one.</p>

        <blockquote>
          "The future of voice AI isn't about perfect recognition—it's about perfect understanding."
        </blockquote>

        <h2>Lessons from Production</h2>
        <p>After processing thousands of real business calls, we've learned:</p>

        <h3>Silence is Golden</h3>
        <p>Knowing when to pause and let the human speak is crucial. Over-eager AI that interrupts constantly feels robotic and frustrating.</p>

        <h3>Accents and Dialects Matter</h3>
        <p>Training on diverse speech patterns isn't optional—it's essential for inclusive AI that works for everyone.</p>

        <h3>Business Context is Everything</h3>
        <p>A voice agent handling insurance claims needs different capabilities than one booking restaurant reservations. One-size-fits-all doesn't work.</p>

        <h2>What's Next?</h2>
        <p>We're working on several exciting developments:</p>

        <ul>
          <li><strong>Multimodal Integration:</strong> Combining voice with visual cues and screen sharing</li>
          <li><strong>Predictive Assistance:</strong> AI that anticipates needs before they're expressed</li>
          <li><strong>Emotional Intelligence:</strong> More sophisticated emotion detection and response</li>
          <li><strong>Cross-language Fluency:</strong> Real-time translation and cultural adaptation</li>
        </ul>

        <h2>Building Your Voice AI Strategy</h2>
        <p>If you're considering voice AI for your business, start with these questions:</p>

        <ol>
          <li>What conversations are your customers already having?</li>
          <li>Where do human agents excel, and where do they struggle?</li>
          <li>How can voice AI enhance rather than replace human interaction?</li>
          <li>What would success look like for your specific use case?</li>
        </ol>

        <p>Voice AI isn't about replacing human conversation—it's about augmenting it, making it more accessible, and handling the routine so humans can focus on the complex and creative.</p>

        <p>Ready to explore voice AI for your business? <a href="/contact">Let's start the conversation</a>.</p>
      `
    }
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${slug}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main className="pt-24 pb-20">
        <article className="container max-w-4xl mx-auto px-4">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="group p-0 h-auto">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to articles
              </Button>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Category */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
            }`}>
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Dec 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Share:</span>
              <Button variant="outline" size="sm" className="h-9 px-3" asChild>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="h-9 px-3" asChild>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`prose prose-lg max-w-none ${
              isDark ? 'prose-invert' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mt-16 p-8 rounded-2xl border backdrop-blur-sm ${
              isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                isDark ? 'bg-primary/20' : 'bg-primary/10'
              }`}>
                🚀
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The team at Backtick Labs is passionate about building AI solutions that work in the real world.
                  We share our learnings, failures, and breakthroughs to help the community build better AI products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8">More from the Lab</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/future-voice-ai">
                <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isDark ? 'bg-card/30 border-border hover:border-primary/30' : 'bg-white/80 border-gray-200 hover:border-primary/30'
                }`}>
                  <h3 className="font-bold mb-2">The Future of Voice AI: Beyond Simple Commands</h3>
                  <p className="text-muted-foreground text-sm">How we built WOW Voice to understand context and emotions...</p>
                </div>
              </Link>
              <Link href="/blog/ship-fast-development-process">
                <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isDark ? 'bg-card/30 border-border hover:border-primary/30' : 'bg-white/80 border-gray-200 hover:border-primary/30'
                }`}>
                  <h3 className="font-bold mb-2">Ship Fast or Die: Our 48-Hour Development Process</h3>
                  <p className="text-muted-foreground text-sm">How we go from idea to production-ready AI products in 2 days...</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
