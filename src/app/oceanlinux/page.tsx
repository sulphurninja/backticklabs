'use client'

import { motion } from 'framer-motion'
import { Server, Zap, Shield, IndianRupee, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function OceanLinuxPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const features = [
    'NVMe VPS with dedicated vCPU options',
    'One-click stacks (Docker, Node, Python, databases)',
    'Snapshots & backups you will actually use',
    'IPv4/IPv6 with clean IP hygiene',
    'API & CLI for serious workflows',
    'Human + AI support (chat/WhatsApp)'
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '₹499',
      period: '/month',
      specs: '1 vCPU, 1GB RAM, 25GB NVMe',
      features: ['Basic Support', 'Daily Backups', 'Mumbai Region']
    },
    {
      name: 'Developer',
      price: '₹999',
      period: '/month',
      specs: '2 vCPU, 2GB RAM, 50GB NVMe',
      features: ['Priority Support', 'Automated Backups', 'Multi-region']
    },
    {
      name: 'Production',
      price: '₹1999',
      period: '/month',
      specs: '4 vCPU, 4GB RAM, 100GB NVMe',
      features: ['24/7 Support', 'Real-time Monitoring', 'Global CDN']
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
                    ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                    : 'bg-emerald-100 border-emerald-200 text-emerald-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Server className="h-4 w-4" />
                <span>MANAGED VPS & IP CLOUD</span>
              </motion.div>

              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? 'from-emerald-400 via-cyan-400 to-blue-400'
                  : 'from-emerald-600 via-cyan-600 to-blue-600'
              }`}>
                OceanLinux
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cloud Infrastructure That Just Works
              </h2>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Spin up NVMe VPS in minutes with AI-assisted SmartOps, one-click stacks,
                transparent India-first billing, and support that actually helps.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button
                  size="lg"
                  className={`group h-14 px-8 text-lg rounded-full ${
                    isDark
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600'
                      : 'bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700'
                  } text-white border-0`}
                >
                  <span className="flex items-center gap-2">
                    Launch Your VPS
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>

                <Button variant="outline" size="lg" className="h-14 px-6 text-lg rounded-full">
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Why OceanLinux?</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${
                    isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h3>
              <p className="text-xl text-muted-foreground">
                Pay in INR via UPI. No hidden fees. Cancel anytime.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-8 rounded-2xl backdrop-blur-sm border ${
                    index === 1
                      ? (isDark ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200')
                      : (isDark ? 'bg-card/30 border-border' : 'bg-white/80 border-gray-200')
                  }`}
                >
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <div className="text-3xl font-black mb-1 flex items-baseline gap-1">
                    <span>{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.specs}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      index === 1
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
              }`}>
                <IndianRupee className="h-4 w-4" />
                <span className="text-sm font-medium">UPI & GST invoices supported</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
