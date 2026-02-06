'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu, ArrowUpRight, Zap, ExternalLink, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showServicesMenu, setShowServicesMenu] = useState(false)

  useEffect(() => {
    setMounted(true)

    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Only track sections on homepage
      if (pathname === '/') {
        const sections = ['manifesto', 'featured-product', 'portfolio', 'services']
        const current = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        setActiveSection(current || '')
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const isHomepage = pathname === '/'

  // Main navigation items
  const navigation = [
    {
      name: 'Products',
      items: [
        { name: 'Backtick App', href: 'https://backtick.app', external: true, description: 'AI Team for Startups' },
        { name: 'OceanLinux', href: '/oceanlinux', external: false, description: 'Managed VPS & Cloud' },
        { name: 'WOW Voice', href: '/wow-voice', external: false, description: 'Voice AI Agents' },
      ]
    },
    {
      name: 'Services',
      items: [
        { name: 'Custom AI SaaS', href: '/services/ai-saas', external: false, description: 'End-to-end AI products' },
        { name: 'AI Agents', href: '/services/ai-agents', external: false, description: 'Autonomous intelligence' },
        { name: 'Voice AI', href: '/services/voice-ai', external: false, description: 'Conversational interfaces' },
        { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure', external: false, description: 'AI-first architecture' },
      ]
    },
    { name: 'Portfolio', href: isHomepage ? '#portfolio' : '/#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
  ]

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      window.location.href = `/${id}`
      return
    }
    const element = document.getElementById(id.replace('#', ''))
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const handleNavigation = (item: any) => {
    if (item.href?.startsWith('#')) {
      scrollTo(item.href)
    } else if (item.href?.startsWith('http')) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = item.href
    }
  }

  // Creative scroll progress
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/30 py-3'
          : 'bg-transparent py-5'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      role="banner"
      aria-label="Backtick Labs Header"
    >
      {/* Creative Progress Indicator */}
      {mounted && (
        <motion.div
          className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r ${
            isDark
              ? 'from-purple-500 via-cyan-400 to-pink-500'
              : 'from-purple-600 via-blue-500 to-pink-600'
          }`}
          style={{ width: progress }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0.3 }}
        />
      )}

      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <motion.div
              className="relative group flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Backtick Labs — Home"
            >
              <div className="relative">
                <img
                  src="/back.svg"
                  alt="Backtick Labs"
                  className="h-12 dark:invert transition-all duration-300"
                />
                <motion.div
                  className={`absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? 'bg-cyan-500/20' : 'bg-blue-500/20'
                  } blur-md`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary Navigation">
            {navigation.map((item, index) => {
              const isActive = pathname.startsWith(item.href || '') ||
                              (isHomepage && activeSection === item.href?.replace('#', ''))

              if (item.items) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.name === 'Services' && setShowServicesMenu(true)}
                    onMouseLeave={() => item.name === 'Services' && setShowServicesMenu(false)}
                  >
                    <motion.button
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group flex items-center gap-1",
                        isActive
                          ? (isDark
                              ? 'text-cyan-400 bg-cyan-500/10'
                              : 'text-blue-600 bg-blue-100')
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" />

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: isDark
                            ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(0, 255, 255, 0.1))'
                            : 'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))'
                        }}
                      />
                    </motion.button>

                    {/* Dropdown Menu */}
                    <motion.div
                      className={`absolute top-full left-0 mt-2 w-64 rounded-xl border backdrop-blur-xl shadow-xl ${
                        isDark ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-200'
                      }`}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{
                        opacity: showServicesMenu && item.name === 'Services' ? 1 : 0,
                        y: showServicesMenu && item.name === 'Services' ? 0 : -10,
                        scale: showServicesMenu && item.name === 'Services' ? 1 : 0.95
                      }}
                      style={{
                        pointerEvents: showServicesMenu && item.name === 'Services' ? 'auto' : 'none'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2">
                        {item.items.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            {subItem.external ? (
                              <a
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-start justify-between p-3 rounded-lg transition-all duration-200 group ${
                                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 font-medium">
                                    {subItem.name}
                                    <ExternalLink className="h-3 w-3 opacity-60" />
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {subItem.description}
                                  </p>
                                </div>
                              </a>
                            ) : (
                              <Link
                                href={subItem.href}
                                className={`flex items-start justify-between p-3 rounded-lg transition-all duration-200 group ${
                                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex-1">
                                  <div className="font-medium">{subItem.name}</div>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {subItem.description}
                                  </p>
                                </div>
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )
              }

              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group",
                    isActive
                      ? (isDark
                          ? 'text-cyan-400 bg-cyan-500/10'
                          : 'text-blue-600 bg-blue-100')
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active Indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full ${
                      isDark
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: isDark
                        ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(0, 255, 255, 0.1))'
                        : 'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))'
                    }}
                  />
                </motion.button>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="sm"
                  className={`group font-medium transition-all duration-300 ${
                    isDark
                      ? 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
                      : 'border-purple-300 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  About
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="sm"
                  className={`group relative overflow-hidden font-medium px-6 ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                  } text-white border-0`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5" />
                    Start Project
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-9 w-9 transition-all duration-300 ${
                      isDark
                        ? 'border-gray-700 hover:bg-gray-800'
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className={`w-[320px] border-l backdrop-blur-xl p-6 ${
                    isDark
                      ? 'border-gray-800 bg-gray-950/95'
                      : 'border-gray-200 bg-white/95'
                  }`}
                >
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center gap-3">
                      <img src="/back.svg" className="h-7 dark:invert" alt="Backtick Labs" />
                      <div className={`px-2 py-1 rounded text-xs font-mono tracking-wider uppercase ${
                        isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                      }`}>
                        LABS
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4 mb-8" aria-label="Mobile Navigation">
                    {/* Products Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                        Products
                      </h3>
                      <div className="space-y-1">
                        {navigation.find(n => n.name === 'Products')?.items?.map((item, index) => (
                          <SheetClose key={item.name} asChild>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                            >
                              {item.external ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between py-3 px-4 text-left rounded-lg transition-all duration-300 group hover:bg-muted/50"
                                >
                                  <div>
                                    <div className="font-medium flex items-center gap-2">
                                      {item.name}
                                      <ExternalLink className="h-3 w-3 opacity-60" />
                                    </div>
                                    <div className="text-xs text-muted-foreground">{item.description}</div>
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="flex items-center justify-between py-3 px-4 text-left rounded-lg transition-all duration-300 group hover:bg-muted/50"
                                >
                                  <div>
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-xs text-muted-foreground">{item.description}</div>
                                  </div>
                                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                              )}
                            </motion.div>
                          </SheetClose>
                        ))}
                      </div>
                    </div>

                    {/* Services Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                        Services
                      </h3>
                      <div className="space-y-1">
                        {navigation.find(n => n.name === 'Services')?.items?.map((item, index) => (
                          <SheetClose key={item.name} asChild>
                            <Link
                              href={item.href}
                              className="flex items-center justify-between py-3 px-4 text-left rounded-lg transition-all duration-300 group hover:bg-muted/50"
                            >
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                              </div>
                              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>

                    {/* Other Pages */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                        More
                      </h3>
                      <div className="space-y-1">
                        {['Portfolio', 'Blog', 'Case Studies'].map((item) => {
                          const navItem = navigation.find(n => n.name === item)
                          return (
                            <SheetClose key={item} asChild>
                              <motion.button
                                onClick={() => handleNavigation(navItem!)}
                                className="flex items-center justify-between py-3 px-4 text-left rounded-lg transition-all duration-300 group hover:bg-muted/50 w-full"
                              >
                                <span className="font-medium">{item}</span>
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </motion.button>
                            </SheetClose>
                          )
                        })}
                      </div>
                    </div>
                  </nav>

                  {/* Mobile Actions */}
                  <div className="space-y-3">
                    <SheetClose asChild>
                      <Link href="/about">
                        <Button
                          variant="outline"
                          className="w-full justify-center"
                        >
                          About Us
                        </Button>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link href="/contact">
                        <Button
                          className={`w-full font-medium ${
                            isDark
                              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                          } text-white`}
                        >
                          <span className="flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Start Your Project
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>

                  {/* Mobile Footer */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      The AI Team for Your Startup
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
