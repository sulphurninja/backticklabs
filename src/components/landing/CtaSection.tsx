'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays, Zap, Clock, Lightbulb, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function CtaSection() {
  const stats = [
    {
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
      color: "primary",
      value: "94%",
      label: "Faster development cycles",
      description: "Complete projects in days instead of months"
    },
    {
      icon: <Zap className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
      color: "blue",
      value: "82%",
      label: "Less boilerplate code",
      description: "Focus on what matters, not repetitive tasks"
    },
    {
      icon: <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />,
      color: "purple",
      value: "3.5x",
      label: "More ideas validated",
      description: "Test more concepts in the same timeframe"
    }
  ]

  return (
    <section className="py-20 md:py-28 relative bg-muted/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Subtle top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 md:px-4 py-1 text-sm font-medium border-primary/20 bg-background/60 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-1.5 text-primary" />
            <span>Transform Your Development Process</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
            Your AI team delivers <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 relative">
              in hours, not weeks.
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
                  stroke="url(#cta-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                />
                <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </motion.svg>
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Backtick generates complete solutions, not just mockups.
            From initial concept to shipped product—with AI that truly understands
            your vision and executes with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-border h-11 md:h-14 px-6 md:px-8 rounded-full text-sm md:text-base group"
            >
              <CalendarDays className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span>See a Demo</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Button>
          </div>
        </motion.div>

        <div className="my-12 md:my-16 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent opacity-80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                {/* Subtle highlight effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>

                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className={`p-2.5 rounded-lg bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex-shrink-0 w-fit`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-500 mb-1 md:mb-2 flex items-baseline gap-1`}>
                        {stat.value}
                        <span className="text-sm text-muted-foreground font-normal hidden xs:inline">improvement</span>
                      </div>
                      <div className="font-medium text-base md:text-lg mb-1 md:mb-2">{stat.label}</div>
                      <p className="text-sm md:text-base text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>

                  {/* Bottom highlight line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${stat.color}-500/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
