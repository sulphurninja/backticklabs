'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Braces, Cpu, Database, LayoutGrid, Loader2, Network, Palette, Server, Sparkles } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'

export function FuturisticLoader() {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Initializing AI systems')
  const { theme, resolvedTheme } = useTheme() // Get current theme
  const isDarkTheme = theme === 'dark' || resolvedTheme === 'dark'

  // AI-themed loading messages
  const loadingMessages = [
    'Initializing AI systems',
    'Loading neural networks',
    'Syncing design modules',
    'Preparing development environment',
    'Configuring component library',
    'Activating AI agents',
    'Establishing secure connection',
    'Optimizing user experience',
    'Ready to launch'
  ]

  useEffect(() => {
    // Simulate progress increasing over time
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1.25
      })
    }, 50)

    // Update status text at different progress points
    const messageTimer = setInterval(() => {
      const messageIndex = Math.min(
        Math.floor((progress / 100) * loadingMessages.length),
        loadingMessages.length - 1
      )
      setStatusText(loadingMessages[messageIndex])
    }, 150)

    return () => {
      clearInterval(timer)
      clearInterval(messageTimer)
    }
  }, [progress])

  // Floating Icons
  const AIIcons = [Bot, Braces, Database, Network, Palette, LayoutGrid, Cpu, Server, Sparkles]

  return (
    <motion.div
      className={`${isDarkTheme ? 'bg-black' : 'bg-white'} inset-0 z-[100] absolute flex flex-col items-center h-screen overflow-hidden justify-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background grid */}
        <div className={`absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat ${isDarkTheme ? 'opacity-5' : 'opacity-10'}`}></div>

        {/* Digital circuit paths */}
        {/* <motion.div
          className={`absolute h-[1px] ${isDarkTheme ? 'bg-primary/20' : 'bg-primary/30'} left-0 right-0 top-1/3`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute h-[1px] ${isDarkTheme ? 'bg-blue-500/20' : 'bg-blue-500/30'} left-0 right-0 bottom-1/3`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div
          className={`absolute w-[1px] ${isDarkTheme ? 'bg-primary/20' : 'bg-primary/30'} top-0 bottom-0 left-1/3`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.div
          className={`absolute w-[1px] ${isDarkTheme ? 'bg-blue-500/20' : 'bg-blue-500/30'} top-0 bottom-0 right-1/3`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        /> */}

        {/* Floating AI icons */}
        {/* {AIIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className={isDarkTheme ? 'absolute text-primary/30' : 'absolute text-primary/50'}
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${15 + Math.random() * 70}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          >
            <Icon className="h-8 w-8" />
          </motion.div>
        ))} */}

        {/* Data transmission animations */}
        {/* {[...Array(10)].map((_, i) => (
          <motion.div
            key={`data-stream-${i}`}
            className={`absolute h-1 w-1 rounded-full ${isDarkTheme ? 'bg-primary' : 'bg-primary'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() > 0.5 ? 100 : -100],
              y: [0, Math.random() > 0.5 ? 100 : -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))} */}

        {/* AI node connection points */}
        {/* {[...Array(6)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              backgroundColor: i % 2 === 0
                ? isDarkTheme ? 'rgb(124, 58, 237, 0.2)' : 'rgb(124, 58, 237, 0.3)'
                : isDarkTheme ? 'rgb(59, 130, 246, 0.2)' : 'rgb(59, 130, 246, 0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 0 rgba(124, 58, 237, 0)',
                isDarkTheme ? '0 0 10px rgba(124, 58, 237, 0.5)' : '0 0 10px rgba(124, 58, 237, 0.7)',
                '0 0 0 rgba(124, 58, 237, 0)'
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))} */}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-10 p-8">
        {/* Logo pulse animation */}
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-full bg-primary/20 blur-lg"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative"
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className={`w-24 h-24 rounded-full ${isDarkTheme ? 'bg-black' : 'bg-white'} flex items-center justify-center shadow-lg`}>
              <img src='/back.svg' className={isDarkTheme ? 'h-12 invert-[100]' : 'h-12'} alt="Backtick" />
            </div>
          </motion.div>
        </div>

        {/* Badge and loading indicator */}
        <div className="space-y-6 text-center w-full max-w-md">
          <Badge
            variant="outline"
            className={`px-4 py-1.5 border-primary/20 ${isDarkTheme ? 'bg-black/60' : 'bg-white/60'} backdrop-blur-sm mx-auto`}
          >
            <Sparkles className={`h-4 w-4 mr-1.5 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`} />
            <span className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>AI System Loading</span>
          </Badge>

          <div className="space-y-3 w-full">
            <div className="flex justify-between items-center">
              <span className={`text-sm ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>{statusText}</span>
              <span className={`text-sm font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className={`h-2 ${isDarkTheme ? 'bg-white/20' : 'bg-gray-200'}`} />
          </div>

          <div className={`flex items-center justify-center space-x-2 text-sm ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
            <Loader2 className={`h-4 w-4 animate-spin ${isDarkTheme ? 'text-white' : 'text-gray-900'}`} />
            <span>Initializing AI components</span>
          </div>
        </div>

        {/* Binary Matrix Effect */}
        <div className="absolute bottom-8 left-0 right-0 overflow-hidden h-4 flex justify-center gap-1">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className={`${isDarkTheme ? 'text-primary/40' : 'text-primary/60'} font-mono text-xs`}
              animate={{
                opacity: [0, 1, 0],
                y: [-10, 0, 10],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                repeatDelay: Math.random() * 0.5,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
