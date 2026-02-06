'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Clock, Badge as BadgeIcon, Mail, AlertCircle, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        // Show success toast using Sonner
        toast.success("You're on the list!", {
          description: "We'll be in touch when your access is ready.",
          duration: 5000,
        })
      } else {
        // Handle specific error scenarios with nicer messages
        if (response.status === 409) {
          setError("This email is already on our waitlist! We'll be in touch soon.")
        } else if (response.status === 400) {
          setError("Please provide a valid email address.")
        } else {
          setError(data.message || "Something went wrong. Please try again.")
        }

        // Small animation effect - shake the input field
        const inputEl = document.getElementById('waitlist-email')
        if (inputEl) {
          inputEl.classList.add('shake-error')
          setTimeout(() => inputEl.classList.remove('shake-error'), 820)
        }
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    {
      icon: <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />,
      label: "Early access",
      tooltip: "Get access weeks before public release"
    },
    {
      icon: <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />,
      label: "Beta features",
      tooltip: "Test advanced capabilities still in development"
    },
    {
      icon: <BadgeIcon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />,
      label: "Founder status",
      tooltip: "Lifetime recognition and special perks for early adopters"
    },
    {
      icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />,
      label: "Priority support",
      tooltip: "Get personalized help when you need it most"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden" id="waitlist">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5 pointer-events-none"></div>

      {/* Decorative elements */}
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

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden">
            {/* Animated top border */}
            <div className="relative h-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <CardHeader className="text-center pt-8 md:pt-10">
              <Badge
                variant="outline"
                className="mb-4 px-3 md:px-4 py-1 text-sm font-medium border-primary/20 bg-background/60 backdrop-blur-sm mx-auto">
                <Sparkles className="h-3 w-3 mr-1.5 text-primary" />
                <span>Limited Spots</span>
              </Badge>

              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Reserve your access
              </CardTitle>

              <CardDescription className="text-base md:text-lg mt-2">
                Join the builders creating tomorrow's products today
              </CardDescription>
            </CardHeader>

            <CardContent>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive mb-4 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                          </Alert>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
                        <div className="md:col-span-3 relative">
                          <Mail className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                          <Input
                            id="waitlist-email"
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-11 md:h-12 pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/50 bg-background/70"
                            disabled={isLoading}
                          />

                          {/* Focus highlight effect */}
                          <motion.div
                            className="absolute -inset-px rounded-md bg-primary/20 pointer-events-none opacity-0"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>

                        <div className="md:col-span-2">
                          <Button
                            type="submit"
                            className="h-11 md:h-12 w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 relative overflow-hidden group"
                            disabled={isLoading}
                          >
                         <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                            <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1 relative z-10">
                              {isLoading ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Join Waitlist
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                              )}
                            </span>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 gap-y-3">
                        {benefits.map((benefit, i) => (
                          <TooltipProvider key={i}>
                            <Tooltip delayDuration={100}>
                              <TooltipTrigger asChild>
                                <motion.div
                                  className="flex items-center gap-1.5 text-xs md:text-sm cursor-default bg-background/70 px-2 py-1 rounded-full border border-border/40 shadow-sm"
                                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
                                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                >
                                  <div className="flex-shrink-0 p-1 rounded-full bg-background">
                                    {benefit.icon}
                                  </div>
                                  <span>{benefit.label}</span>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent
                                side="bottom"
                                className="bg-card p-3 max-w-[200px] text-foreground text-xs md:text-sm border border-border/40"
                              >
                                {benefit.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-6"
                    >
                      <Check className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-xl md:text-2xl font-semibold mb-2"
                    >
                      You're on the list!
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="text-muted-foreground max-w-md mx-auto text-sm md:text-base"
                    >
                      Thank you for joining. We'll be in touch when your access is ready.
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="mt-8"
                    >
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="hover:bg-primary/5"
                      >
                        Add another email
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>

            <CardFooter className="bg-muted/50 p-4 md:p-6 flex items-center justify-center">
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Zap className="h-3 w-3 md:h-4 md:w-4" />
                <span>Current wait time: <span className="font-medium text-foreground">approximately 2 weeks</span></span>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Add CSS for shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .shake-error {
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </section>
  )
}
