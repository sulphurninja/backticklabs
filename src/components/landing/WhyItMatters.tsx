'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Terminal, Clock, Code, Lightbulb, Sparkles, ShoppingCart, CreditCard, Star, ArrowRight, Users, Settings, Database } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function WhyItMatters() {
  const benefits = [
    {
      icon: <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />,
      text: "Transform ideas into code in minutes, not days"
    },
    {
      icon: <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />,
      text: "Remembers your preferences across every project"
    },
    {
      icon: <Code className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
      text: "Implements best practices without being asked"
    },
    {
      icon: <Terminal className="h-4 w-4 md:h-5 md:w-5 text-cyan-500" />,
      text: "Eliminates repetitive setup and configuration"
    },
    {
      icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-500" />,
      text: "Evolves with you as you build more products"
    }
  ]

  return (
    <section className="py-6 md:py-4 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-80"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl opacity-80"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Badge
              variant="outline"
              className="mb-4 px-3 md:px-4 py-1 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 mr-1.5 text-primary" />
              <span>Why It Matters</span>
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              Tools that match your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 relative">
                speed and vision.
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
                    stroke="url(#why-gradient)"
                    strokeWidth="1.5"
                    strokeDasharray="1"
                  />
                  <linearGradient id="why-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </motion.svg>
              </span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed">
              Backtick isn't just another AI tool—it's an extension of your creativity.
              It understands your intent and executes with precision, letting you
              build at the speed of thought without compromising on quality.
            </p>

            <div className="space-y-5 mb-8 md:mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-background border border-border shadow-sm group-hover:border-primary/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-sm md:text-base lg:text-lg">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <Button
              variant="outline"
              className="hidden md:flex items-center gap-2 h-10 px-4 rounded-full text-sm group border border-border/40 hover:bg-background hover:text-primary"
            >
              <span>Learn how our AI augments your workflow</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <Card className="relative border border-border/40 rounded-xl overflow-hidden shadow-xl">
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl blur opacity-30"></div>

              <CardContent className="p-0 relative z-10">
                <div className="bg-muted/80 p-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs md:text-sm font-medium flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                    Backtick Studio
                  </div>
                  <div className="w-16 flex justify-end">
                    <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-primary/20 text-primary">
                      Live
                    </Badge>
                  </div>
                </div>

                <Tabs defaultValue="ui" className="w-full">
                  <div className="flex justify-center border-b border-border/30 px-3">
                    <TabsList className="my-2 h-9 bg-muted/50">
                      <TabsTrigger value="ui" className="text-xs px-3 rounded-md data-[state=active]:bg-background">
                        <div className="flex items-center gap-1.5">
                          <ShoppingCart className="h-3 w-3" />
                          <span>Product UI</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger value="back" className="text-xs px-3 rounded-md data-[state=active]:bg-background">
                        <div className="flex items-center gap-1.5">
                          <Code className="h-3 w-3" />
                          <span>Backend</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger value="data" className="text-xs px-3 rounded-md data-[state=active]:bg-background">
                        <div className="flex items-center gap-1.5">
                          <Database className="h-3 w-3" />
                          <span>Data Model</span>
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="ui" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="bg-card p-4 md:p-6 h-[350px] md:h-[400px] overflow-auto">
                      <div className="w-full max-w-md space-y-6 mx-auto">
                        {/* Realistic UI preview with processing indicators */}
                        <div className="space-y-3 relative">
                          <motion.div
                            className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-primary"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          />

                          <h3 className="text-lg md:text-xl font-semibold text-primary">Featured Products</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            Discover our top items, handpicked for quality and innovation
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                          {/* Product cards */}
                          <motion.div
                            className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow group"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="h-20 md:h-24 bg-gradient-to-r from-primary/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
                              <ShoppingCart className="h-6 md:h-8 w-6 md:w-8 text-primary/70" />

                              {/* Processing indicator */}
                              <motion.div
                             className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-full"
                             animate={{
                               rotate: 360,
                               opacity: [0.1, 0.3, 0.1]
                             }}
                             transition={{
                               duration: 8,
                               repeat: Infinity,
                               ease: "linear"
                             }}
                           />
                         </div>
                         <div className="p-3">
                           <div className="text-xs md:text-sm font-medium mb-1">Smart Watch</div>
                           <div className="text-[10px] md:text-xs text-muted-foreground mb-2">$129.99</div>
                           <div className="flex items-center">
                             <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-500 fill-yellow-500" />
                             <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-500 fill-yellow-500" />
                             <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-500 fill-yellow-500" />
                             <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-500 fill-yellow-500" />
                             <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-muted" />
                           </div>
                         </div>
                       </motion.div>

                       <motion.div
                         className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow"
                         whileHover={{ y: -2 }}
                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
                       >
                         <div className="h-20 md:h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                           <Users className="h-6 md:h-8 w-6 md:w-8 text-blue-500/70" />
                         </div>
                         <div className="p-3">
                           <div className="text-xs md:text-sm font-medium mb-1">Pro Membership</div>
                           <div className="text-[10px] md:text-xs text-muted-foreground mb-2">$19.99/mo</div>
                           <div className="text-[10px] md:text-xs inline-flex items-center gap-1 text-primary">
                             <Badge variant="outline" className="text-[8px] md:text-[10px] py-0 px-1 border-primary/20">Popular</Badge>
                           </div>
                         </div>
                       </motion.div>

                       <motion.div
                         className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow"
                         whileHover={{ y: -2 }}
                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
                       >
                         <div className="h-20 md:h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                           <Settings className="h-6 md:h-8 w-6 md:w-8 text-purple-500/70" />
                         </div>
                         <div className="p-3">
                           <div className="text-xs md:text-sm font-medium mb-1">Developer Kit</div>
                           <div className="text-[10px] md:text-xs text-muted-foreground mb-2">$49.99</div>
                           <div className="flex items-center">
                             <Badge variant="outline" className="text-[8px] md:text-[10px] py-0 px-1 border-purple-500/20 text-purple-500">New</Badge>
                           </div>
                         </div>
                       </motion.div>

                       <motion.div
                         className="rounded-lg border border-border bg-background/50 overflow-hidden hover:shadow-md transition-shadow"
                         whileHover={{ y: -2 }}
                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
                       >
                         <div className="h-20 md:h-24 bg-gradient-to-r from-cyan-500/10 to-primary/10 flex items-center justify-center">
                           <CreditCard className="h-6 md:h-8 w-6 md:w-8 text-cyan-500/70" />
                         </div>
                         <div className="p-3">
                           <div className="text-xs md:text-sm font-medium mb-1">Gift Card</div>
                           <div className="text-[10px] md:text-xs text-muted-foreground mb-2">$25 - $500</div>
                           <div className="text-[10px] md:text-xs text-muted-foreground">Customizable</div>
                         </div>
                       </motion.div>
                     </div>

                     <div className="flex justify-center">
                       <Button variant="outline" size="sm" className="rounded-full text-xs gap-1 border-primary/20 text-primary hover:bg-primary/5 h-8">
                         View All Products <ArrowRight className="h-3 w-3" />
                       </Button>
                     </div>
                   </div>
                 </div>
               </TabsContent>

               <TabsContent value="back" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                 <div className="bg-card p-4 md:p-6 h-[350px] md:h-[400px] overflow-hidden">
                   {/* Code editor styling */}
                   <div className="border border-border/40 rounded-md bg-background/50 overflow-hidden">
                     <div className="bg-muted/80 px-3 py-1.5 border-b border-border/40 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <Code className="h-3.5 w-3.5 text-blue-500" />
                         <span className="text-xs font-mono">api/products/[id]/route.ts</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <Badge variant="outline" className="h-5 text-[10px] px-1.5 bg-blue-500/10 text-blue-500 border-blue-500/20">
                           TypeScript
                         </Badge>
                       </div>
                     </div>

                     {/* Code with syntax highlighting */}
                     <div className="p-4 font-mono text-[10px] md:text-xs h-[300px] md:h-[350px] overflow-auto">
                       <div className="relative">
                         {/* Line numbers */}
                         <div className="absolute left-0 top-0 bottom-0 text-muted-foreground/50 pr-4 select-none">
                           {Array.from({ length: 20 }).map((_, i) => (
                             <div key={i} className="h-5 text-right">{i + 1}</div>
                           ))}
                         </div>

                         {/* Actual code with syntax highlighting */}
                         <div className="pl-8 space-y-0 leading-5">
                           <div><span className="text-blue-400">import</span> <span className="text-foreground">{'{ NextResponse }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'next/server'</span>;</div>
                           <div><span className="text-blue-400">import</span> <span className="text-foreground">{'{ db }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@/lib/db'</span>;</div>
                           <div></div>
                           <div><span className="text-purple-400">// Get a specific product by ID with related data</span></div>
                           <div><span className="text-blue-400">export async function</span> <span className="text-yellow-400">GET</span><span className="text-foreground">(</span></div>
                           <div><span className="text-foreground ml-4">request: Request,</span></div>
                           <div><span className="text-foreground ml-4">{'{ params }: { params: { id: string } }'}</span></div>
                           <div><span className="text-foreground">) {'{'}</span></div>
                           <div><span className="text-foreground ml-4">try {'{'}</span></div>
                           <div><span className="text-foreground ml-8">const product = await db.product.findUnique({'{'}</span></div>
                           <div><span className="text-foreground ml-12">where: {'{'}</span></div>
                           <div><span className="text-foreground ml-16">id: params.id,</span></div>
                           <div><span className="text-foreground ml-12">{'}'},'</span></div>
                           <div><span className="text-foreground ml-12">include: {'{'}</span></div>
                           <div><span className="text-foreground ml-16">features: true,</span></div>
                           <div><span className="text-foreground ml-16">pricing: true,</span></div>
                           <div><span className="text-foreground ml-12">{'}'},</span></div>
                           <div><span className="text-foreground ml-8">{'}'});</span></div>
                           <div></div>

                           {/* Animated cursor and background highlight */}
                           <motion.div
                             className="absolute left-0 right-0 h-5 bg-blue-500/5 border-l-2 border-blue-500"
                             style={{ top: 17 * 20 }} // position at line 18
                             animate={{
                               opacity: [0.7, 1, 0.7]
                             }}
                             transition={{
                               duration: 2,
                               repeat: Infinity
                             }}
                           />

                           <div><span className="text-foreground ml-8">if (!product) {'{'}</span></div>
                           <div><span className="text-foreground ml-12">return NextResponse.json(</span></div>
                           <div><span className="text-foreground ml-16">{'{ error: \'Product not found\' }'},</span></div>
                           <div><span className="text-foreground ml-16">{'{ status: 404 }'}</span></div>
                           <div><span className="text-foreground ml-12">);</span></div>
                           <div><span className="text-foreground ml-8">{'}'}</span></div>
                           <div></div>
                           <div><span className="text-foreground ml-8">return NextResponse.json(product);</span></div>
                           <div><span className="text-foreground ml-4">{'}'} catch (error) {'{'}</span></div>
                           <div><span className="text-foreground ml-8">return NextResponse.json(</span></div>
                           <div><span className="text-foreground ml-12">{'{ error: \'Failed to fetch product\' }'},</span></div>
                           <div><span className="text-foreground ml-12">{'{ status: 500 }'}</span></div>
                           <div><span className="text-foreground ml-8">);</span></div>
                           <div><span className="text-foreground ml-4">{'}'}</span></div>
                           <div><span className="text-foreground">{'}'}</span></div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </TabsContent>

               <TabsContent value="data" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                 <div className="bg-card p-4 md:p-6 h-[350px] md:h-[400px] overflow-auto flex items-center justify-center">
                   <div className="w-full max-w-md">
                     <div className="space-y-4">
                       {/* Data model visualization */}
                       <motion.div
                         className="p-4 border border-border/60 rounded-lg bg-background/50 shadow-sm"
                         whileHover={{
                           boxShadow: "0 0 0 1px rgba(var(--primary-rgb), 0.2)",
                           borderColor: "rgba(var(--primary-rgb), 0.3)"
                         }}
                       >
                         <div className="flex items-center justify-between mb-2">
                           <div className="text-sm font-medium flex items-center gap-2">
                             <div className="h-2 w-2 rounded-full bg-primary"></div>
                             Product
                           </div>
                           <Badge className="text-[8px] md:text-[10px] bg-primary/10 text-primary h-4">Primary</Badge>
                         </div>
                         <div className="space-y-1.5 pl-2">
                           <div className="text-[10px] md:text-xs text-muted-foreground flex justify-between">
                             <span>id</span>
                             <span className="font-mono">string</span>
                           </div>
                           <div className="text-[10px] md:text-xs text-muted-foreground flex justify-between">
                             <span>name</span>
                             <span className="font-mono">string</span>
                           </div>
                           <div className="text-[10px] md:text-xs text-muted-foreground flex justify-between">
                             <span>description</span>
                             <span className="font-mono">string</span>
                           </div>
                           <div className="text-[10px] md:text-xs text-muted-foreground flex justify-between">
                             <span>createdAt</span>
                             <span className="font-mono">datetime</span>
                           </div>
                         </div>
                       </motion.div>

                       <div className="grid grid-cols-2 gap-4">
                         <motion.div
                           className="p-4 border border-border/60 rounded-lg bg-background/50 shadow-sm"
                           whileHover={{
                             boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.2)",
                             borderColor: "rgba(59, 130, 246, 0.3)"
                           }}
                         >
                           <div className="flex items-center justify-between mb-2">
                             <div className="text-sm font-medium flex items-center gap-2">
                               <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                               Feature
                             </div>
                             <div className="text-[8px] md:text-[10px] text-muted-foreground">1:n</div>
                           </div>
                           <div className="space-y-1 pl-2 text-[10px] md:text-xs text-muted-foreground">
                             <div className="flex justify-between">
                               <span>id</span>
                               <span className="font-mono">string</span>
                             </div>
                             <div className="flex justify-between">
                               <span>title</span>
                               <span className="font-mono">string</span>
                             </div>
                             <div className="flex justify-between">
                               <span>productId</span>
                               <span className="font-mono">string</span>
                             </div>
                           </div>
                         </motion.div>

                         <motion.div
                           className="p-4 border border-border/60 rounded-lg bg-background/50 shadow-sm"
                           whileHover={{
                             boxShadow: "0 0 0 1px rgba(124, 58, 237, 0.2)",
                             borderColor: "rgba(124, 58, 237, 0.3)"
                           }}
                         >
                           <div className="flex items-center justify-between mb-2">
                             <div className="text-sm font-medium flex items-center gap-2">
                               <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                               Pricing
                             </div>
                             <div className="text-[8px] md:text-[10px] text-muted-foreground">1:1</div>
                           </div>
                           <div className="space-y-1 pl-2 text-[10px] md:text-xs text-muted-foreground">
                             <div className="flex justify-between">
                               <span>id</span>
                               <span className="font-mono">string</span>
                             </div>
                             <div className="flex justify-between">
                               <span>amount</span>
                               <span className="font-mono">decimal</span>
                             </div>
                             <div className="flex justify-between">
                               <span>interval</span>
                               <span className="font-mono">string</span>
                             </div>
                           </div>
                         </motion.div>
                       </div>

                       {/* Connection lines */}
                       <svg className="w-full h-8 text-muted-foreground/30" viewBox="0 0 400 30">
                         <path
                           d="M200,0 L200,10 L100,10 L100,30"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="1"
                           strokeDasharray="3,2"
                         />
                         <path
                           d="M200,0 L200,10 L300,10 L300,30"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="1"
                           strokeDasharray="3,2"
                         />
                       </svg>

                       <motion.div
                         className="p-3 border border-border/60 rounded-lg bg-background/50 shadow-sm"
                         whileHover={{
                           boxShadow: "0 0 0 1px rgba(6, 182, 212, 0.2)",
                           borderColor: "rgba(6, 182, 212, 0.3)"
                         }}
                       >
                         <div className="flex items-center justify-between mb-1">
                           <div className="text-xs font-medium flex items-center gap-2">
                             <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                             Order
                           </div>
                           <Badge className="text-[8px] bg-cyan-500/10 text-cyan-500 h-4">Related</Badge>
                         </div>
                         <div className="text-[10px] text-muted-foreground pl-1">
                           References Product through orderItems
                         </div>
                       </motion.div>
                     </div>
                   </div>
                 </div>
               </TabsContent>
             </Tabs>

             {/* Status indicators at bottom */}
             <div className="bg-muted/30 border-t border-border/30 p-2 flex items-center justify-between text-[10px] md:text-xs text-muted-foreground">
               <div className="flex items-center gap-3">
                 <div className="flex items-center gap-1.5">
                   <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                   <span>Frontend</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                   <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                   <span>API</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                   <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                   <span>Database</span>
                 </div>
               </div>
               <div>
                 Updated <span className="text-foreground">just now</span>
               </div>
             </div>
           </CardContent>
         </Card>

         {/* Mobile-only button */}
         <div className="flex justify-center mt-8 md:hidden">
           <Button
             variant="outline"
             className="flex items-center gap-2 h-10 px-4 rounded-full text-sm group border border-border/40 hover:bg-background hover:text-primary"
           >
             <span>Learn more about our workflow</span>
             <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
           </Button>
         </div>
       </motion.div>
     </div>
   </div>
 </section>
)
}
