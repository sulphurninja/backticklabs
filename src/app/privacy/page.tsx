'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Data Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect only the information necessary to provide our services and improve your experience.
                  This includes contact information, project details, and usage analytics.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">How We Use Your Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data is used to deliver our services, communicate with you about projects,
                  and improve our AI solutions. We never sell your data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data,
                  including encryption at rest and in transit, regular security audits, and access controls.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this privacy policy, please contact us at{' '}
                  <a href="mailto:privacy@backtick.app" className="text-primary hover:underline">
                    privacy@backtick.app
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
