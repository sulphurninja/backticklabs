'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
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
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-5xl font-black mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Backtick Labs provides AI development, consulting, and product development services.
                  Our services are provided "as is" and we strive for the highest quality in all deliverables.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Client projects remain the property of the client upon full payment.
                  We retain rights to our methodologies, frameworks, and general knowledge gained.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our liability is limited to the amount paid for services.
                  We are not responsible for indirect or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about these terms? Contact us at{' '}
                  <a href="mailto:legal@backtick.app" className="text-primary hover:underline">
                    legal@backtick.app
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
