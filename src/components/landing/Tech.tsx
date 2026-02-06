'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cpu, Server, Database, Network, Layers, Sparkles, ArrowRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Tech() {
  const technologies = [
    {
      icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      color: "primary",
      title: "Claude 3.5",
      description: "Logical reasoning & structure"
    },
    {
      icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />,
      color: "blue",
      title: "GPT-4o",
      description: "Creative generation"
    },
    {
      icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />,
      color: "purple",
      title: "Mistral & Open Models",
      description: "Speed & efficiency"
    },
    {
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />,
      color: "cyan",
      title: "Integrated Memory",
      description: "Context-aware processing"
    },
    {
      icon: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />,
      color: "green",
      title: "Enterprise Infrastructure",
      description: "Secured & scalable"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Circuit-like connection lines - visible only on larger screens */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none hidden lg:block" viewBox="0 0 1000 400">
        <motion.path
          d="M200,200 C300,100 500,300 800,200"
          stroke="var(--primary)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.path
          d="M100,250 C300,220 700,280 900,250"
          stroke="var(--primary)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </svg>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 md:px-4 py-1 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 mr-1.5 text-primary" />
            <span>Advanced Technology</span>
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 relative">
              Intelligent model orchestration.
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
                  stroke="url(#tech-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                />
                <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </motion.svg>
            </span> Purpose-built for results.
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just connect to APIs. We've built a proprietary system that selects and coordinates models for optimal outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm group relative overflow-hidden">
                {/* Subtle highlight effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${tech.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Processing indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${tech.color}-500/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                />

                <CardContent className="p-5 md:p-6 flex flex-col items-center text-center">
                  <div className={`mb-4 p-2 rounded-lg bg-${tech.color}-500/10 border border-${tech.color}-500/20`}>
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{tech.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated model coordination diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-70"></div>

          <div className="grid md:grid-cols-7 p-5 md:p-8 gap-6 md:gap-8 relative">
            <div className="md:col-span-3 space-y-4">
              <Badge variant="secondary" className="mb-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                Exclusive Technology
              </Badge>

              <h3 className="text-xl md:text-2xl font-bold">Model Coordination Platform</h3>

              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </motion.div>
                  </div>
                  <p className="text-muted-foreground">
                    Each task is routed to the optimal AI model based on its specific requirements.
                  </p>
                </div>

                <Separator className="bg-border/40" />

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.7
                      }}
                    >
                      <Network className="h-3 w-3 text-blue-500" />
                    </motion.div>
                  </div>
                  <p className="text-muted-foreground">
                    Models collaborate seamlessly, sharing context and maintaining memory across your entire project.
                  </p>
                </div>

                <Separator className="bg-border/40" />

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1.4
                      }}
                    >
                      <Layers className="h-3 w-3 text-purple-500" />
                    </motion.div>
                  </div>
                  <p className="text-muted-foreground">
                    Custom infrastructure ensures security, speed, and reliability at enterprise scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Visualization side */}
            <div className="md:col-span-4 flex items-center justify-center p-4 relative">
              <div className="w-full h-full max-w-md relative">
                {/* Central node */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10">
                    <Layers className="h-7 w-7 md:h-10 md:w-10 text-primary/80" />
                  </div>

                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/20 opacity-75"></div>
                </motion.div>

                {/* Orbiting nodes */}
                {technologies.map((tech, i) => {
                  // Calculate positions in a circle around the center
                  const angle = (i * (2 * Math.PI)) / technologies.length;
                  const radius = 120; // Adjust based on your container size
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);

                  return (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        x: [0, 5, -5, 0],
                        y: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.5
                      }}
                    >
                      <div className={`w-10 h-10 rounded-full bg-${tech.color}-500/10 border border-${tech.color}-500/20 flex items-center justify-center`}>
                        {tech.icon}
                      </div>

                      {/* Connection line to center */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-[120px] h-px origin-left"
                        style={{
                          background: `linear-gradient(90deg, var(--${tech.color}-500) 0%, transparent 100%)`,
                          rotate: `${angle * (180/Math.PI) + 180}deg`
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 0.3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </motion.div>
                  );
                })}

                {/* Data transfer animations */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`data-${i}`}
                    className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-primary"
                    initial={{
                      x: 0, y: 0,
                      scale: 0.5,
                      opacity: 0
                    }}
                    animate={{
                      x: [0, 80 * Math.cos(i * 2.1)],
                      y: [0, 80 * Math.sin(i * 2.1)],
                      scale: [0.5, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section for technical details */}
          <div className="grid grid-cols-3 divide-x divide-border/20 bg-muted/30">
            <div className="p-4 text-center">
              <div className="text-xs text-muted-foreground">Response Time</div>
              <div className="text-sm md:text-base font-medium">~250ms</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-xs text-muted-foreground">Model Switching</div>
              <div className="text-sm md:text-base font-medium">Automatic</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-xs text-muted-foreground">Context Window</div>
              <div className="text-sm md:text-base font-medium">100k+ tokens</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Button variant="outline" className="group border border-border/40 hover:bg-background hover:text-primary gap-2 h-10 px-4 rounded-full text-sm">
            <span>Learn more about our technology</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
