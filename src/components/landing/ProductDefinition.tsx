'use client'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Database,
  Rocket,
  Eye,
  Save,
  ArrowRight,
  Sparkles,
  Code,
  LayoutGrid,
  LineChart,
  Cpu
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

export default function ProductDefinition() {
  const steps = [
    {
      icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      color: "primary",
      title: "Describe your vision",
      description: "AI Designer and Developer build your UI with shadcn & Tailwind"
    },
    {
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />,
      color: "blue",
      title: "Define your data",
      description: "AI wires up APIs and database connections automatically"
    },
    {
      icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />,
      color: "purple",
      title: "Prepare for launch",
      description: "AI creates your marketing assets and conversion elements"
    },
    {
      icon: <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />,
      color: "cyan",
      title: "Preview instantly",
      description: "See your project unfold in real-time alongside the code"
    },
    {
      icon: <Save className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />,
      color: "green",
      title: "Deploy with confidence",
      description: "Export, save, or launch your complete solution"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Connection lines between steps - visible on larger screens */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none hidden lg:block"
           preserveAspectRatio="none" viewBox="0 0 1000 600">
        <motion.path
          d="M200,150 C350,130 400,230 550,220 C700,210 750,130 900,150"
          stroke="url(#workflow-gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="workflow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
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
            <span>Streamlined Workflow</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Idea to launch — <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 relative">
              in one platform.
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
                  stroke="url(#workflow-text-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                />
                <linearGradient id="workflow-text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </motion.svg>
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your AI team handles the entire product journey while you stay in control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connection arrow (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 -right-3 w-6 h-6 transform rotate-0 md:rotate-[-30deg] text-muted-foreground/30 hidden md:block z-10">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}

              <Card className="h-full border border-border/40 bg-card/50 backdrop-blur-sm group relative overflow-hidden">
                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Step number indicator */}
                <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground/70">
                  {i + 1}
                </div>

                <CardContent className="pt-6 pb-6">
                  <div className="space-y-3">
                    <div className={`p-2.5 rounded-lg bg-${step.color}-500/10 border border-${step.color}-500/20 w-fit`}>
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Animated progress indicator on hover */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${step.color}-500/50 to-transparent group-hover:w-full transition-all duration-700 ease-in-out`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced interactive preview mockup with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Decorative elements around the preview */}
          <div className="absolute -top-6 -left-6 h-12 w-12 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 h-12 w-12 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl hidden md:block"></div>

          <div className="rounded-xl overflow-hidden border border-border/60 shadow-2xl bg-card/90 backdrop-blur-sm relative">
            {/* Processing data visualization on top */}
            <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
              <motion.div
                className="h-px bg-gradient-to-r from-primary via-blue-500 to-purple-500"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Realistic studio header */}
            <div className="bg-muted/80 backdrop-blur-sm p-3 flex items-center gap-3 border-b border-border/60 relative">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs sm:text-sm text-foreground/80 font-medium flex-1 text-center flex items-center justify-center gap-2">
                <Cpu className="h-3 w-3 text-primary animate-pulse" />
                <span>Backtick Project Studio</span>
              </div>
              <div className="text-xs text-muted-foreground hidden sm:block">
                <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-border/40">
                  Live
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="preview" className="w-full">
              <div className="p-2 md:p-4 bg-muted/20 border-b border-border/40">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-background/50 backdrop-blur-sm p-1 rounded-lg">
                  <TabsTrigger value="code" className="gap-1.5 text-xs md:text-sm rounded-md">
                    <Code className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden xs:inline">Code</span>
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="gap-1.5 text-xs md:text-sm rounded-md">
                    <LayoutGrid className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden xs:inline">Preview</span>
                  </TabsTrigger>
                  <TabsTrigger value="assets" className="gap-1.5 text-xs md:text-sm rounded-md">
                    <LineChart className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden xs:inline">Assets</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="preview" className="mt-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="aspect-video md:aspect-[16/8] flex items-center justify-center p-4 md:p-8">
                  <div className="relative w-full max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground mb-4 text-center">Real-time preview as you describe your project</p>

                    {/* Preview content with realistic UI elements */}
                    <div className="relative rounded-lg bg-background border border-border/40 shadow-md overflow-hidden">
                      {/* Header bar */}
                      <div className="bg-muted p-2 md:p-3 border-b border-border/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                            <Sparkles className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-xs md:text-sm font-medium">Product Name</span>
                        </div>
                        <div className="flex gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-5 h-5 rounded-full bg-muted-foreground/10"></div>
                          ))}
                        </div>
                      </div>

                      {/* Hero section mockup */}
                      <div className="p-3 md:p-5 space-y-4">
                        <div className="space-y-2">
                          <div className="h-2.5 md:h-3 w-3/4 bg-muted-foreground/10 rounded-md"></div>
                          <div className="h-2.5 md:h-3 w-1/2 bg-muted-foreground/10 rounded-md"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                          <div className="aspect-video rounded-md bg-gradient-to-br from-primary/10 to-blue-500/5 flex items-center justify-center">
                            <motion.div
                              className="h-6 w-6 text-primary/40"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.7, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            >
                              <LayoutGrid className="h-full w-full" />
                            </motion.div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-full bg-muted-foreground/10 rounded-md"></div>
                            <div className="h-2 w-full bg-muted-foreground/10 rounded-md"></div>
                            <div className="h-2 w-2/3 bg-muted-foreground/10 rounded-md"></div>
                            <div className="h-6 w-2/3 mt-3 bg-primary/15 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI assistants working indicators */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <motion.div
                        className="flex items-center gap-1 text-xs text-muted-foreground bg-background rounded-full px-2 py-1 border border-border/40 shadow-sm"
                        animate={{
                          y: [0, -3, 0],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span>Designer</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-1 text-xs text-muted-foreground bg-background rounded-full px-2 py-1 border border-border/40 shadow-sm"
                        animate={{
                          y: [0, -3, 0],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        <span>Developer</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="aspect-video md:aspect-[16/8] flex items-center justify-center p-4 md:p-8">
                  <div className="w-full max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground mb-4 text-center">Code generated as you describe features</p>

                    <div className="rounded-lg border border-border/40 bg-background/50 overflow-hidden">
                      {/* Code editor header */}
                      <div className="bg-muted/80 px-3 py-2 border-b border-border/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="h-3.5 w-3.5 text-blue-500" />
                          <span className="text-xs font-mono">components/FeatureCard.jsx</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="h-5 text-[10px] px-1.5 bg-blue-500/10 text-blue-500 border-blue-500/20">
                            React
                          </Badge>
                        </div>
                      </div>

                      {/* Code content with syntax highlighting simulation */}
                      <div className="p-4 font-mono text-xs md:text-sm overflow-auto max-h-[300px] relative">
                        {/* Animated typing cursor */}
                        <motion.div
                          className="absolute h-[14px] w-[1px] bg-primary"
                          style={{ left: "184px", top: "208px" }}
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />

                        <div className="space-y-1 leading-relaxed">
                          <div><span className="text-blue-400">import</span> <span className="text-foreground">React</span> <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;</div>
                          <div><span className="text-blue-400">import</span> <span className="text-foreground">{'{ Button }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'./ui/button'</span>;</div>
                          <div></div>
                          <div className="text-purple-400">// Feature card component for product landing page</div>
                          <div className="text-purple-400">// Automatically adapts to light/dark mode</div>
                          <div></div>
                          <div><span className="text-blue-400">export function</span> <span className="text-yellow-400">FeatureCard</span><span className="text-foreground">{'({ title, description, icon }) {'}</span></div>
                          <div><span className="text-foreground ml-4">return (</span></div>
                          <div><span className="text-orange-400 ml-8">{'<div'}</span> <span className="text-green-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"rounded-lg p-6 border bg-card hover:shadow-md transition-all"</span><span className="text-orange-400">{'>'}</span></div>
                          <div><span className="text-orange-400 ml-12">{'<div'}</span> <span className="text-green-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"mb-4 p-2 rounded-md bg-primary/10 w-fit"</span><span className="text-orange-400">{'>'}</span></div>
                          <div><span className="text-orange-400 ml-16">{'{icon}'}</span></div>
                          <div><span className="text-orange-400 ml-12">{'</div>'}</span></div>
                          <div><span className="text-orange-400 ml-12">{'<h3'}</span> <span className="text-green-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"text-xl font-medium"</span><span className="text-orange-400">{'>'}</span><span className="text-orange-400">{'{title}'}</span><span className="text-orange-400">{'</h3>'}</span></div>
                          <div><span className="text-orange-400 ml-12">{'<p'}</span> <span className="text-green-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"mt-2 text-muted-foreground"</span><span className="text-orange-400">{'>'}</span><span className="text-orange-400">{'{description}'}</span><span className="text-orange-400">{'</p>'}</span></div>
                          <div><span className="text-orange-400 ml-12">{'<Button'}</span> <span className="text-green-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"mt-4"</span><span className="text-orange-400">{'>'}</span><span className="text-foreground">Learn more</span><span className="text-orange-400">{'</Button>'}</span></div>
                          <div><span className="text-orange-400 ml-8">{'</div>'}</span></div>
                          <div><span className="text-foreground ml-4">);</span></div>
                          <div><span className="text-foreground">{`}`}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="assets" className="mt-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="aspect-video md:aspect-[16/8] flex items-center justify-center p-4 md:p-8">
                  <div className="w-full max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground mb-4 text-center">Marketing assets created alongside your product</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {/* Social media mockups */}
                      <div className="col-span-2 aspect-video bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-lg border border-border/40 p-3 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <svg className="w-full h-full text-primary/10" viewBox="0 0 24 24" fill="none">
                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                            <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="1"/>
                          </svg>
                        </div>
                        <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground">
                          Social Media
                        </div>
                      </div>

                      {/* Logo design */}
                      <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-lg border border-border/40 flex items-center justify-center relative">
                        <div className="h-10 w-10 rounded-md bg-background/80 flex items-center justify-center shadow-sm">
                          <div className="h-6 w-6 rounded-sm bg-primary/20 flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <div className="h-3 w-3 rounded-sm bg-primary" />
                            </motion.div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground">
                          Logo
                        </div>
                      </div>

                      {/* Color palette */}
                      <div className="aspect-square bg-background rounded-lg border border-border/40 p-2 relative">
                        <div className="grid grid-cols-2 gap-1 h-full">
                          <div className="bg-primary rounded-sm"></div>
                          <div className="bg-blue-500 rounded-sm"></div>
                          <div className="bg-purple-500 rounded-sm"></div>
                          <div className="bg-green-500 rounded-sm"></div>
                        </div>
                        <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground">
                          Colors
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Command input simulation */}
            <div className="border-t border-border/60 px-4 py-3 bg-muted/30 flex items-center gap-3">
              <div className="flex-1 bg-background/80 rounded-full border border-border/40 px-4 py-2 text-xs md:text-sm text-muted-foreground flex items-center">
                <span className="mr-2 text-primary/70">/</span>
                <span>Create a responsive product landing page with 3 feature sections...</span>
                <motion.div
                  className="h-4 w-[1px] bg-foreground ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <Button size="sm" className="rounded-full h-8 px-3 text-xs bg-primary">
                <span className="hidden sm:inline mr-1">Send</span>
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA or learning resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Button variant="outline" className="group border border-border/40 hover:bg-background/80 hover:text-primary gap-2 h-10 px-4 rounded-full text-sm">
            <span>See the complete workflow in action</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
