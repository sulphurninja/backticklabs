'use client'

import { useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Brain,
  Server,
  PhoneCall,
  CheckCircle2,
  IndianRupee,
  ReceiptIndianRupee,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// ---- QUICK URL SWITCHBOARD (edit these) ----
const URLS = {
  oceanlinux: '/oceanlinux',    // replace with live URL when ready
  backtick: 'https://backtick.app',
  wowvoice: '/wow-voice',       // replace with live URL when ready
}

type Project = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  status: 'Live' | 'Beta' | 'Pilot' | 'Coming Soon'
  color: string
  accentColor: string
  bgColor: string
  icon: any
  href?: string
  highlights?: string[]
  badges?: { label: string; icon?: any }[]
  extraAction?: React.ReactNode // e.g. WOW Voice Demo button
}

export default function Portfolio() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sectionRef = useRef<HTMLElement>(null)
  useScroll({ target: sectionRef, offset: ['start end', 'end start'] })

  const [activeProject, setActiveProject] = useState(0)
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  // ----- OceanLinux info -----
  const oceanLinuxPillars = [
    'Speed to Production',
    'AI SmartOps',
    'Transparent Economics'
  ]
  const oceanLinuxCore = [
    'NVMe VPS with dedicated vCPU options',
    'One-click stacks (Docker, Node, Python, databases)',
    'Snapshots & backups you will actually use',
    'IPv4/IPv6 with clean IP hygiene',
    'API & CLI for serious workflows',
    'Human + AI support (chat/WhatsApp)'
  ]

  // ---- WOW Voice Demo Modal (inline so it can use theme) ----
  const WowVoiceDemo = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [starting, setStarting] = useState(false)

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" size="sm" className="mt-2">
            Start demo call
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>WOW Voice – Quick Demo</DialogTitle>
            <DialogDescription>
              This simulates an inbound agent greeting, lead capture, and booking intent. (Frontend-only preview)
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="grid gap-2">
              <Label htmlFor="demo-name">Your name</Label>
              <Input
                id="demo-name"
                placeholder="Rohit Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="demo-phone">Phone</Label>
              <Input
                id="demo-phone"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <Button
              disabled={starting}
              onClick={() => {
                setStarting(true)
                setTimeout(() => setStarting(false), 2200)
              }}
              className="w-full"
            >
              {starting ? 'Connecting…' : 'Play sample greeting'}
            </Button>

            {/* Simple waveform simulation */}
            <div className={`h-20 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'} overflow-hidden flex items-end gap-1 px-2`}>
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.span
                  key={i}
                  className={`${isDark ? 'bg-primary/70' : 'bg-primary/80'} w-0.5 rounded-sm`}
                  initial={{ height: 6 }}
                  animate={{ height: starting ? [6, 30, 12, 24, 8, 36, 10, 28, 6] : 6 }}
                  transition={{ repeat: starting ? Infinity : 0, duration: 1.2, delay: i * 0.01 }}
                />
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Tip: In production, bind to your voice provider (e.g., ElevenLabs/Twilio), save transcripts & summaries, and auto-create CRM leads.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  const projects: Project[] = [
    {
      title: 'OceanLinux',
      subtitle: 'Managed VPS & IP Cloud',
      description:
        'Spin up NVMe VPS in minutes with AI-assisted SmartOps, one-click stacks, snapshots, and transparent India-first billing.',
      tech: ['NVMe', 'VPS', 'AI SmartOps', 'API & CLI'],
      status: 'Live',
      color: isDark ? 'from-emerald-400 to-cyan-400' : 'from-emerald-600 to-cyan-600',
      accentColor: isDark ? 'text-emerald-400' : 'text-emerald-600',
      bgColor: isDark ? 'bg-emerald-500/20' : 'bg-emerald-100',
      icon: Server,
      href: URLS.oceanlinux,
      highlights: [...oceanLinuxPillars, ...oceanLinuxCore],
      badges: [
        { label: 'UPI Payments', icon: IndianRupee },
        { label: 'GST Invoices', icon: ReceiptIndianRupee },
      ],
    },
    {
      title: 'Backtick App',
      subtitle: 'The AI Team for Startups',
      description:
        'A collaborative AI workspace with multi-role agents (Dev, Designer, Marketer) that ship production-grade UI with shadcn/ui, wire APIs, and reason about your repo via MCP.',
      tech: ['Next.js', 'shadcn/ui', 'MCP', 'Claude/GPT'],
      status: 'Beta',
      color: isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600',
      accentColor: isDark ? 'text-purple-400' : 'text-purple-600',
      bgColor: isDark ? 'bg-purple-500/20' : 'bg-purple-100',
      icon: Brain,
      href: URLS.backtick,
      highlights: [
        'Multi-agent AI (Dev, Designer, Marketer)',
        'Prompt → shadcn/ui components',
        'Repo-aware via MCP',
        'One-click deploy flows',
        'Design systems & code reviews',
      ],
    },
    {
      title: 'WOW Voice',
      subtitle: 'Inbound & Outbound AI Voice Agents',
      description:
        '24/7 voice agents that answer calls, qualify leads, book appointments, and sync conversations into your CRM with transcripts, summaries, and follow-ups.',
      tech: ['Voice AI', 'NLP', 'WebRTC', 'CRMs'],
      status: 'Pilot',
      color: isDark ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600',
      accentColor: isDark ? 'text-cyan-400' : 'text-blue-600',
      bgColor: isDark ? 'bg-cyan-500/20' : 'bg-blue-100',
      icon: PhoneCall,
      href: URLS.wowvoice,
      highlights: [
        'Inbound IVR replacement',
        'Outbound campaigns & callbacks',
        'Lead capture + routing',
        'Calendars, bookings, reminders',
        'Realtime transcript & post-call summary',
        'Webhooks + CRM sync',
      ],
      extraAction: <WowVoiceDemo />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-background overflow-hidden"
    >
      {/* Background veil */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-gray-900/50 via-transparent to-purple-900/20'
              : 'bg-gradient-to-br from-gray-50 via-transparent to-purple-50'
          }`}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {projects.map((project, i) => {
          const Icon = project.icon
          return (
            <motion.div
              key={i}
              className={`absolute ${isDark ? 'opacity-5' : 'opacity-10'}`}
              style={{ left: `${10 + i * 25}%`, top: `${20 + i * 15}%` }}
              animate={{ rotate: 360, scale: [1, 1.2, 1], y: [0, -20, 0] }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
            >
              <Icon className={`w-32 h-32 ${project.accentColor.replace('text-', 'text-').replace('400', '300')}`} />
            </motion.div>
          )
        })}
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8 ${
              isDark
                ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                : 'bg-purple-100 border-purple-200 text-purple-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>CREATIVE PORTFOLIO</span>
          </motion.div>

          <h2
            className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
              isDark ? 'from-white via-purple-400 to-cyan-400' : 'from-gray-900 via-purple-600 to-blue-600'
            }`}
          >
            Lab Experiments
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to code, we push the boundaries of what’s possible with AI.
            <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}> Here’s what we’re building.</span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isActive = activeProject === index
            const expanded = expandedIdx === index
            const visibleHighlights = project.highlights?.slice(0, expanded ? project.highlights.length : 5) || []

            const Card = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setActiveProject(index)}
                onMouseEnter={() => setActiveProject(index)}
              >
                <motion.div
                  className={`h-full rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 ${
                    isActive ? `${project.bgColor} border-primary/30` : 'bg-card/50 border-border hover:border-primary/20'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    boxShadow: isActive
                      ? isDark
                        ? '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
                        : '0 25px 50px -12px rgba(139, 92, 246, 0.15)'
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${project.bgColor}`}
                    animate={{ rotate: isActive ? [0, 10, -10, 0] : 0, scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`h-8 w-8 ${project.accentColor}`} />
                  </motion.div>

                  {/* Status */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      project.status === 'Live'
                        ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600')
                        : project.status === 'Beta'
                        ? (isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600')
                        : project.status === 'Pilot'
                        ? (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600')
                        : (isDark ? 'bg-gray-500/20 text-gray-400' : 'bg-gray-100 text-gray-600')
                    }`}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full ${
                        project.status === 'Live'
                          ? 'bg-green-500'
                          : project.status === 'Beta'
                          ? 'bg-yellow-500'
                          : project.status === 'Pilot'
                          ? 'bg-blue-500'
                          : 'bg-gray-500'
                      }`}
                      animate={{ opacity: project.status === 'Live' ? [0.5, 1, 0.5] : 1 }}
                      transition={{ duration: 2, repeat: project.status === 'Live' ? Infinity : 0 }}
                    />
                    {project.status}
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent ${project.color}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Badges (OceanLinux UPI / GST) */}
                    {project.badges && project.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.badges.map((b, i) => {
                          const Ico = b.icon
                          return (
                            <span
                              key={i}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                isDark ? 'bg-gray-900/40 border border-gray-800 text-gray-200' : 'bg-white border border-gray-200 text-gray-700'
                              }`}
                            >
                              {Ico ? <Ico className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                              {b.label}
                            </span>
                          )
                        })}
                      </div>
                    )}

                    {/* Highlights with Show more */}
                    {visibleHighlights.length > 0 && (
                      <div className="mt-2 grid grid-cols-1 gap-1">
                        {visibleHighlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className={`mt-1 h-1.5 w-1.5 rounded-full ${isDark ? 'bg-primary/60' : 'bg-primary/80'}`} />
                            <span>{h}</span>
                          </div>
                        ))}
                        {project.highlights && project.highlights.length > 5 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setExpandedIdx(expanded ? null : index)
                            }}
                            className="text-xs font-semibold mt-1 underline hover:no-underline"
                          >
                            {expanded ? 'Show less' : `Show all (${project.highlights.length})`}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-2 flex items-center gap-3">
                      {project.href ? (
                        project.href.startsWith('http') ? (
                          <a href={project.href} target="_blank" rel="noreferrer">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`group p-0 h-auto font-semibold ${project.accentColor} hover:bg-transparent`}
                            >
                              <span className="flex items-center gap-2">
                                {project.status === 'Live'
                                  ? 'Visit'
                                  : project.status === 'Beta'
                                  ? 'Join beta'
                                  : project.status === 'Pilot'
                                  ? 'Request access'
                                  : 'Learn more'}
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </Button>
                          </a>
                        ) : (
                          <Link href={project.href}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`group p-0 h-auto font-semibold ${project.accentColor} hover:bg-transparent`}
                            >
                              <span className="flex items-center gap-2">
                                {project.status === 'Live'
                                  ? 'Visit'
                                  : project.status === 'Beta'
                                  ? 'Join beta'
                                  : project.status === 'Pilot'
                                  ? 'Request access'
                                  : 'Learn more'}
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </Button>
                          </Link>
                        )
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`group p-0 h-auto font-semibold ${project.accentColor} hover:bg-transparent`}
                        >
                          <span className="flex items-center gap-2">
                            {project.status === 'Live'
                              ? 'Explore'
                              : project.status === 'Beta'
                              ? 'Join beta'
                              : project.status === 'Pilot'
                              ? 'Request access'
                              : 'Coming soon'}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </Button>
                      )}

                      {/* Extra action (WOW Voice demo) */}
                      {project.extraAction}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )

            return Card
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Have an idea that could change the world?
          </p>
          <Button
            size="lg"
            className={`group ${
              isDark
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
            } text-white border-0 px-8 py-6 text-lg`}
          >
            <span className="flex items-center gap-2">
              Let’s build it together
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
