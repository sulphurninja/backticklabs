'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, MapPin, Send, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form or show success message
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Drop us a line anytime',
      value: 'hello@backtick.app',
      href: 'mailto:hello@backtick.app',
      color: isDark ? 'text-cyan-400' : 'text-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Discord Community',
      description: 'Join our developer community',
      value: 'Join Discord',
      href: 'https://discord.gg/backtick',
      color: isDark ? 'text-purple-400' : 'text-purple-600'
    },
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a strategy session',
      value: 'Book Now',
      href: '#',
      color: isDark ? 'text-green-400' : 'text-green-600'
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
                Let's build together
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to turn your impossible idea into reality? We'd love to hear about your project
                and explore how we can help bring it to life.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={`p-8 rounded-3xl border backdrop-blur-sm ${
                  isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                }`}>
                  <h2 className="text-3xl font-bold mb-6">Tell us about your project</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full h-12 text-lg ${
                        isDark
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                      } text-white border-0`}
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="h-4 w-4" />
                      </span>
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Prefer a different way to connect? Choose what works best for you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        className={`block p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                          isDark
                            ? 'bg-card/20 border-border hover:border-primary/30'
                            : 'bg-white/60 border-gray-200 hover:border-primary/30'
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            isDark ? 'bg-gray-800' : 'bg-gray-100'
                          }`}>
                            <Icon className={`h-6 w-6 ${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                            <p className={`font-medium ${method.color}`}>{method.value}</p>
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>

                {/* Response Time */}
                <div className={`p-6 rounded-2xl border backdrop-blur-sm ${
                  isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className={`h-5 w-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    <h3 className="font-semibold">Quick Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours on weekdays. For urgent matters,
                    reach out on Discord for faster assistance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: "What's the typical timeline for an AI project?",
                  a: "Most projects take 4-12 weeks from concept to production, depending on complexity. We can often have an MVP ready in 2-4 weeks."
                },
                {
                  q: "Do you work with startups or only enterprises?",
                  a: "We work with both! From early-stage startups to Fortune 500 companies. Our approach scales to your budget and timeline."
                },
                {
                  q: "What AI technologies do you specialize in?",
                  a: "We work with GPT, Claude, custom models, voice AI, computer vision, and more. We choose the right tech for your specific use case."
                },
                {
                  q: "Can you help with existing projects or only new builds?",
                  a: "Both! We can audit, optimize, and extend existing AI implementations, or build new solutions from scratch."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border backdrop-blur-sm ${
                    isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
