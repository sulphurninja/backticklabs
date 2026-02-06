'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import Image from 'next/image'

export default function ClientMarquee() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [isHovered, setIsHovered] = useState(false)

  // Your actual clients with PNG logos and custom classNames
  const clients = [
    {
      name: 'Zapllo',
      logo: '/clients/zapllo.png',
      className: 'dark:invert-[100]'
    },
    {
      name: 'OceanLinux',
      logo: '/clients/ocean.png',
      className: 'invert-[100] dark:invert-[0]'
    },
    {
      name: 'We Wear Australia',
      logo: '/clients/wwa.avif',
      className: 'invert-[100] dark:invert-[0]'
    },
     {
      name: 'Zaptick',
      logo: '/clients/zaptick.webp',
      className: 'dark:invert-[100]'
    },
    {
      name: 'PitchME',
      logo: '/clients/pitchme.svg',
      className: 'dark:invert-[100]'
    },
    {
      name: 'Cohousy',
      logo: '/clients/cohousy.png',
      className: 'invert-[100] dark:invert-[0]'
    },
    {
      name: 'Lex Claim Connect',
      logo: '/clients/lex.png',
      className: ''
    },
     {
      name: 'The Pune Caterers',
      logo: '/clients/pune.png',
      className: ''
    },
    {
      name: 'LC Swing Beds',
      logo: '/clients/lc.png',
      className: 'dark:invert-[100]'
    },
    {
      name: 'LeadcellB2B',
      logo: '/clients/lead.jpeg',
      className: ''
    },
    {
      name: 'Jogeshwari Industries',
      logo: '/clients/jog.jpeg',
      className: ' invert-[100] dark:invert-[0] '
    },
     {
      name: 'A3M NextGen',
      logo: '/clients/a3m.jpeg',
      className: 'invert-[0] dark:invert-[100]'
    },
    {
      name: 'TheySee',
      logo: '/clients/they.png',
      className: 'dark:invert-[100]'
    }
  ]

  // Triple the array for seamless infinite loop
  const repeatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="relative py-16 bg-background border-b border-border/30 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-transparent via-gray-900/20 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-50/50 to-transparent'
          }`}
          animate={{
            background: isDark ? [
              'linear-gradient(90deg, transparent, rgba(17, 24, 39, 0.2), transparent)',
              'linear-gradient(90deg, transparent, rgba(55, 65, 81, 0.15), transparent)',
              'linear-gradient(90deg, transparent, rgba(17, 24, 39, 0.2), transparent)'
            ] : [
              'linear-gradient(90deg, transparent, rgba(249, 250, 251, 0.5), transparent)',
              'linear-gradient(90deg, transparent, rgba(243, 244, 246, 0.3), transparent)',
              'linear-gradient(90deg, transparent, rgba(249, 250, 251, 0.5), transparent)'
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium ${
              isDark
                ? 'bg-gray-900/50 border-gray-700 text-gray-300'
                : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <span className="tracking-wider uppercase">Trusted by Visionary Teams</span>
          </motion.div>

          <motion.p
            className="text-muted-foreground mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From startups to enterprises, we've helped build the future
          </motion.p>
        </motion.div>

        {/* Marquee Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16 md:gap-20"
              animate={{
                x: isHovered ? undefined : [0, -33.33 + '%']
              }}
              transition={{
                x: {
                  duration: 30, // Much slower - 60 seconds for full loop
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
              style={{
                width: '300%', // Triple width for triple array
                willChange: 'transform' // Optimize for animation
              }}
            >
              {repeatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Logo Container */}
                  <motion.div
                    className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl p-4 transition-all duration-500 ${
                      isDark
                        ? 'bg-gray-900/30 border border-gray-800/50 group-hover:bg-gray-800/50 group-hover:border-gray-700'
                        : 'bg-white/80 border border-gray-200/50 group-hover:bg-white group-hover:border-gray-300 shadow-sm group-hover:shadow-md'
                    } backdrop-blur-sm`}
                    whileHover={{
                      boxShadow: isDark ?
                        '0 20px 40px -12px rgba(139, 92, 246, 0.15)' :
                        '0 20px 40px -12px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className={`object-contain transition-all duration-500 ${client.className} ${
                          isDark
                            ? 'filter brightness-90 group-hover:brightness-110'
                            : 'filter group-hover:brightness-105'
                        }`}
                        sizes="(max-width: 768px) 96px, 112px"
                      />
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: isDark
                          ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(0, 255, 255, 0.1))'
                          : 'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Company Name - appears on hover */}
                  <motion.div
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-900/90 text-gray-300 border border-gray-700'
                        : 'bg-white/90 text-gray-600 border border-gray-200 shadow-sm'
                    } backdrop-blur-sm`}
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {client.name}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className={`absolute top-0 left-0 w-24 h-full bg-gradient-to-r pointer-events-none z-10 ${
            isDark ? 'from-background to-transparent' : 'from-background to-transparent'
          }`} />
          <div className={`absolute top-0 right-0 w-24 h-full bg-gradient-to-l pointer-events-none z-10 ${
            isDark ? 'from-background to-transparent' : 'from-background to-transparent'
          }`} />

          {/* Hover indicator */}
          {/* <motion.div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full text-sm font-medium pointer-events-none ${
              isDark
                ? 'bg-gray-900/90 text-cyan-400 border border-cyan-500/30'
                : 'bg-white/90 text-blue-600 border border-blue-200'
            } backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
          >
            Hover to pause
          </motion.div> */}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-16"
        >
          {[
            { label: 'Projects Delivered', value: '150+', icon: '🚀' },
            { label: 'Happy Clients', value: '165+', icon: '😊' },
            { label: 'Countries Served', value: '4', icon: '🌍' },
            { label: 'AI Models Deployed', value: '50+', icon: '🤖' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <motion.div
                className="text-2xl mb-2 group-hover:scale-110  transition-transform"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                {stat.icon}
              </motion.div>

              {/* Value */}
              <div className={`text-3xl md:text-4xl font-black font-mono mb-1 ${
                isDark
                  ? 'text-cyan-400 group-hover:text-purple-400'
                  : 'text-blue-600 group-hover:text-purple-600'
              } transition-colors duration-300`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xs text-muted-foreground tracking-wider uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Each partnership is a testament to our commitment to excellence.
            <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              {' '}Ready to join this list?
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
