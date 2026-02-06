'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import FeaturedProduct from '@/components/landing/FeaturedProduct'
// import Portfolio from '@/components/landing/Portfolio'
// import StudioPhilosophy from '@/components/landing/StudioPhilosophy'
// import Services from '@/components/landing/Services'
// import Testimonials from '@/components/landing/Testimonials'
// import Blog from '@/components/landing/Blog'
import { FuturisticLoader } from '@/components/ui/loader'
import { AnimatePresence } from 'framer-motion'
import Manifesto from '@/components/landing/Manifesto'
import CinematicManifesto from '@/components/landing/Manifesto'
import Portfolio from '@/components/landing/Portfolio'
import Services from '@/components/landing/Services'
import CallToAction from '@/components/landing/CallToAction'
import ClientMarquee from '@/components/landing/ClientMarquee'
import Blog from '@/components/landing/Blog'

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">

      <Header />
      <main>
        <Hero />
        <ClientMarquee />
        <FeaturedProduct />
        <Portfolio />
        <Services />
        <CallToAction />
        <CinematicManifesto />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
