'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Truck, Shield, Clock, Globe, Package, CreditCard, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onNavigate: (view: string) => void
}

/* Floating status cards shown on the right side of the hero.
   Ordered top-to-bottom to mirror the real customer journey:
   Quote → Cost Breakdown → Payment → Shipment tracking. */
const statusCards = [
  {
    icon: Package,
    title: 'Quote Ready',
    status: '50x Office Chairs',
    detail: 'P 58,600 total',
    progress: 0,
    color: 'from-[#10B981] to-[#34D399]',
    badge: 'bg-emerald-500/20 text-[#10B981]',
  },
  {
    icon: CreditCard,
    title: 'Payment Confirmed',
    status: 'P 12,450.00',
    detail: 'Import fees included',
    progress: 100,
    color: 'from-[#F59E0B] to-[#FBBF24]',
    badge: 'bg-amber-500/20 text-[#FBBF24]',
  },
  {
    icon: Truck,
    title: 'Shipment #CN-2847',
    status: 'In Transit',
    detail: '68% complete',
    progress: 68,
    color: 'from-[#0D9488] to-[#14B8A6]',
    badge: 'bg-teal-500/20 text-[#14B8A6]',
  },
]

/* Quote breakdown mini-card */
const breakdown = [
  { label: 'Product', value: 'P 48,500' },
  { label: 'Shipping', value: 'P 6,200' },
  { label: 'Import Fees', value: 'P 3,900' },
  { label: 'Est. Arrival', value: '12 days' },
]

/* Single status card — extracted so the pipeline can be ordered explicitly
   (Quote → Cost Breakdown → Payment → Shipment) with the breakdown slotted in. */
function StatusCard({ card, pos }: { card: (typeof statusCards)[number]; pos: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 + pos * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-2xl p-5 hover:bg-white/12 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
          <card.icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white/90 truncate">{card.title}</p>
          <p className="text-xs text-white/70">{card.status}</p>
        </div>
        {card.progress > 0 && card.progress < 100 && (
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${card.badge}`}>
            {card.detail}
          </span>
        )}
        {card.progress === 100 && (
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${card.badge}`}>
            Confirmed
          </span>
        )}
        {card.progress === 0 && (
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${card.badge}`}>
            Pending
          </span>
        )}
      </div>
      {/* Progress bar */}
      {card.progress > 0 && (
        <div className="w-full bg-white/10 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${card.progress}%` }}
            transition={{ duration: 1.5, delay: 1 + pos * 0.2, ease: 'easeOut' }}
            className={`bg-gradient-to-r ${card.color} h-1.5 rounded-full`}
          />
        </div>
      )}
    </motion.div>
  )
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient">
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-[120px] pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#0D9488]/15 rounded-full blur-[80px]" />

        {/* Dotted route line connecting China → Botswana */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Dotted route arc */}
          <path
            d="M 180 620 C 400 300, 800 200, 1260 340"
            stroke="rgba(13,148,136,0.6)"
            strokeWidth="2"
            strokeDasharray="8 6"
            className="route-line"
          />
          {/* Faint second path for depth */}
          <path
            d="M 200 640 C 420 320, 820 220, 1240 360"
            stroke="rgba(20,184,166,0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="route-line"
          />

          {/* China location point (Shenzhen) */}
          <circle cx="180" cy="620" r="8" fill="#0D9488" opacity="0.8" />
          <circle cx="180" cy="620" r="16" fill="#0D9488" opacity="0.15" className="dot-pulse" />
          <circle cx="180" cy="620" r="24" fill="#0D9488" opacity="0.07" className="dot-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Botswana location point (Gaborone) */}
          <circle cx="1260" cy="340" r="8" fill="#F59E0B" opacity="0.8" />
          <circle cx="1260" cy="340" r="16" fill="#F59E0B" opacity="0.15" className="dot-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="1260" cy="340" r="24" fill="#F59E0B" opacity="0.07" className="dot-pulse" style={{ animationDelay: '1.5s' }} />

          {/* Midpoint glow */}
          <circle cx="700" cy="380" r="6" fill="#14B8A6" opacity="0.5" className="dot-pulse" style={{ animationDelay: '0.75s' }} />
        </svg>

        {/* City labels — kept on their own (undimmed) layer with a soft dark halo
            so they stay legible over the gradient and behind the cards. */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <text
            x="180" y="662" textAnchor="middle"
            fill="rgba(255,255,255,0.75)" stroke="rgba(2,6,23,0.45)" strokeWidth="3"
            paintOrder="stroke" fontSize="13" fontWeight="700" letterSpacing="0.5"
          >
            Shenzhen
          </text>
          <text
            x="1260" y="318" textAnchor="middle"
            fill="rgba(255,255,255,0.75)" stroke="rgba(2,6,23,0.45)" strokeWidth="3"
            paintOrder="stroke" fontSize="13" fontWeight="700" letterSpacing="0.5"
          >
            Gaborone
          </text>
        </svg>
      </div>

      {/* ===== Content: Left-aligned with right visual ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Headline + CTAs */}
          <div>
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Shipping from China to Botswana</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">Import Anything</span>
              <br />
              <span className="gradient-text">From China</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed mb-10"
            >
              Shop products, request quotes, pay securely, and track every shipment from China to Botswana. One account. Complete control.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
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

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              {[
                { icon: Shield, label: 'Secure Payments' },
                { icon: Clock, label: 'Real-time Tracking' },
                { icon: Globe, label: 'Global Sourcing' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/70">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Floating status cards with breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="space-y-4">
              {/* Step 1 — Quote approved */}
              <StatusCard card={statusCards[0]} pos={0} />

              {/* Step 2 — Cost Breakdown for that quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0D9488]/20 flex items-center justify-center">
                    <Package className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                  <p className="text-sm font-semibold text-white/90">Cost Breakdown</p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {breakdown.map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className="text-xs text-white/60">{row.label}</span>
                      <span className="text-xs font-medium text-white/85">{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Step 3 — Payment, Step 4 — Shipment */}
              {statusCards.slice(1).map((card, i) => (
                <StatusCard key={card.title} card={card} pos={i + 2} />
              ))}
            </div>

            {/* Decorative floating dots behind cards */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F59E0B]/10 rounded-full blur-[50px] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
