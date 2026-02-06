'use client'
import { motion } from 'framer-motion'
import { CircuitBoard, Network, Braces, ChevronRight, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Differentiator() {
  const features = [
    {
      icon: <Network className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      color: "primary",
      title: "Multi-Agent Architecture",
      badge: "Specialized",
      description: "AI teammates with defined roles that work together—unlike using a single AI that tries to do everything at once."
    },
    {
      icon: <CircuitBoard className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
      color: "blue",
      title: "Model Context Protocol",
      badge: "Exclusive",
      description: "Our memory layer remembers your brand voice, design choices, and business rules across every project and iteration."
    },
    {
      icon: <Braces className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
      color: "purple",
      title: "Full-Stack Capability",
      badge: "Complete",
      description: "Seamlessly create and connect UI, APIs, database logic, and assets—all working together as a cohesive system."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Floating circuit elements - professional and subtle */}
      <svg className="absolute right-0 top-20 w-64 h-64 text-primary/5 hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <motion.div
        className="absolute left-10 bottom-10 w-32 h-32 text-blue-500/5 hidden lg:block"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x="35" y="35" width="30" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 md:px-4 py-1 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 mr-1.5 text-primary" />
            <span>What Sets Us Apart</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            They wrap AI. <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 relative">
              We built a system.
              <motion.svg
                className="absolute -bottom-1 left-0 w-full"
                height="5"
                viewBox="0 0 300 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path
                  d="M0,2.5 C50,5 150,0 300,2.5"
                  fill="none"
                  stroke="url(#diff-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                />
                <linearGradient id="diff-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </motion.svg>
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Others give you a fancy chat box. Backtick gives you an ecosystem of
            AI experts that collaborate, remember context, and turn your ideas
            into complete, production-ready solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex"
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm group relative overflow-hidden flex flex-col flex-1">
                {/* Subtle highlight glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Top corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-${feature.color}-500/10 to-transparent rounded-bl-3xl transform translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500`}></div>

                <CardHeader className="pb-2">
                  <div className="mb-5 flex items-start">
                    <div className={`rounded-lg flex items-center justify-center p-3 bg-${feature.color}-500/10 ring-1 ring-${feature.color}-500/20`}>
                      {feature.icon}
                    </div>

                    <motion.div
                      className={`ml-auto border border-${feature.color}-500/20 bg-${feature.color}-500/5 rounded-full h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100`}
                      initial={{ rotate: -90, scale: 0.8 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      <ChevronRight className={`h-4 w-4 text-${feature.color}-500`} />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Badge
                      variant="secondary"
                      className={`font-medium bg-${feature.color}-500/10 text-${feature.color}-500 hover:bg-${feature.color}-500/15`}
                    >
                      {feature.badge}
                    </Badge>
                    <CardTitle className="text-xl md:text-2xl font-semibold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-2 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  {/* Progressive border animation on hover */}
                  <div className="mt-auto pt-6 relative">
                    <div className={`absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-${feature.color}-500/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out`}></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Button variant="ghost" className="text-sm md:text-base group border border-border/40 hover:bg-background hover:text-primary gap-2 h-11 px-5 rounded-full">
            <span>Learn more about our architecture</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
