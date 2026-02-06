import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Github,
  Twitter,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Mail
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const products = [
    { name: 'Backtick App', href: 'https://backtick.app' },
    { name: 'OceanLinux', href: '/oceanlinux' },
    { name: 'WOW Voice', href: '/wow-voice' },
    { name: 'Lab Experiments', href: '/portfolio' },
  ]

  const services = [
    { name: 'Custom AI SaaS', href: '/services/ai-saas' },
    { name: 'AI Agents', href: '/services/ai-agents' },
    { name: 'Voice AI', href: '/services/voice-ai' },
    { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
  ]

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
  ]

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press Kit', href: '/press' },
  ]

  return (
    <footer className="border-t bg-background/60 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="rounded-xl bg-muted/50 p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay in the lab loop</h3>
              <p className="text-muted-foreground">
                Get AI insights, product updates, and development stories delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="Your email address" className="pl-10 h-11" />
              </div>
              <Button className="h-11 bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 xl:gap-12">
          <div className="col-span-2">
            <img src='/back.svg' className='h-12 dark:invert-[100]'/>
            <p className="mt-4 text-muted-foreground max-w-xs">
              A full-stack AI Product Team that turns impossible ideas into production-ready solutions.
            </p>
            <div className="flex items-center space-x-1 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="https://twitter.com/backtick_labs" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="https://github.com/backtick-labs" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="https://linkedin.com/company/backtick-labs" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="https://discord.gg/backtick" aria-label="Discord">
                  <MessageCircle className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-border/60" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <div>© {currentYear} Backtick Labs Private Limited.</div>
            <div className="hidden sm:flex h-4 w-px bg-border"></div>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>

          <div className="flex gap-3">
            <Link href="/contact">
              <Button variant="outline" size="sm" className="h-9 px-4 rounded-full">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
