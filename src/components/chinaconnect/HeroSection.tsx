'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Shield, Clock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onNavigate: (view: string) => void
}

/* Clean, magazine-style hero product (license-free Unsplash).
   Swap this URL for your own image any time. */
const HERO_PRODUCT = 'https://images.unsplash.com/photo-1590739169125-a9438401596a?w=1000&q=80&auto=format&fit=crop'

const trust = [
  { icon: Shield, label: 'Secure Payments' },
  { icon: Clock, label: 'Real-time Tracking' },
  { icon: Globe, label: 'Global Sourcing' },
]

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0E17]">
      {/* Mobile: the product fills the background with a dark overlay for legibility */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={HERO_PRODUCT} alt="" aria-hidden="true" className="lg:hidden absolute inset-0 w-full h-full object-cover" />
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0A0E17]/88 via-[#0A0E17]/70 to-[#0A0E17]/92" />

      {/* Two soft glows for depth — clean, not busy */}
      <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] bg-[#0D9488]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-[#F59E0B]/[0.07] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Shipping from China to Botswana</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">Shop Anything</span>
              <br />
              <span className="bg-gradient-to-r from-[#2DD4BF] to-[#FCD34D] bg-clip-text text-transparent">From China</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed mb-10"
            >
              Browse thousands of products, pay securely, and track every order from China to your door in Botswana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button
                onClick={() => onNavigate('shop')}
                size="lg"
                className="bg-[#0D9488] hover:bg-[#0F766E] text-white px-8 py-6 text-base font-semibold rounded-xl shadow-xl shadow-teal-500/20 group"
              >
                Start Shopping
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => onNavigate('services')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/15 hover:border-white/50 px-8 py-6 text-base font-semibold rounded-xl backdrop-blur-sm bg-white/5"
              >
                <FileText className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-8"
            >
              {trust.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/70">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: one clean, glossy product image (desktop only — on mobile it's the background) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block w-full"
          >
            {/* Soft glow behind the frame for a premium, glossy feel */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#0D9488]/25 to-[#F59E0B]/10 rounded-[2.5rem] blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_PRODUCT}
                alt="Featured product"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Glossy sheen + subtle bottom shade */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean fade into the next (light) section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F4F6F4] to-transparent pointer-events-none" />
    </section>
  )
}
