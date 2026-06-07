'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Truck, Shield, Clock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onNavigate: (view: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-[120px] pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#0D9488]/15 rounded-full blur-[80px]" />

        {/* Route visualization SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          {/* China point */}
          <circle cx="850" cy="300" r="6" fill="#0D9488" className="dot-pulse" />
          <text x="850" y="280" fill="#0D9488" fontSize="12" textAnchor="middle" opacity="0.8">China</text>
          {/* Botswana point */}
          <circle cx="550" cy="520" r="6" fill="#F59E0B" className="dot-pulse" style={{ animationDelay: '1s' }} />
          <text x="550" y="540" fill="#F59E0B" fontSize="12" textAnchor="middle" opacity="0.8">Botswana</text>
          {/* Route line */}
          <path d="M 850 300 C 800 350, 650 450, 550 520" fill="none" stroke="url(#routeGrad)" strokeWidth="2" className="route-line" opacity="0.6" />
          {/* Middle shipment icon */}
          <circle cx="700" cy="410" r="4" fill="#14B8A6" className="dot-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Now serving Botswana</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="text-white">Import Anything</span>
              <br />
              <span className="gradient-text">From China</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Shop products, request quotes, pay securely, and track every shipment from China to Botswana. One account. Complete control.
            </motion.p>

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
                onClick={() => onNavigate('track')}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-xl backdrop-blur-sm"
              >
                <Truck className="w-4 h-4 mr-2" />
                Track Shipment
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Shield, label: 'Secure Payments' },
                { icon: Clock, label: 'Real-time Tracking' },
                { icon: Globe, label: 'Global Sourcing' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/40">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating cards visualization */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[500px]">
              {/* Floating shipment card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 right-8 glass rounded-2xl p-5 w-72"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D9488]/30 flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Shipment #CN-2847</p>
                    <p className="text-white/50 text-xs">In Transit</p>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] h-1.5 rounded-full" style={{ width: '68%' }} />
                </div>
                <p className="text-white/40 text-xs mt-2">68% complete — Arrived at customs</p>
              </motion.div>

              {/* Floating shipment card 2 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-44 left-8 glass rounded-2xl p-5 w-64"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#FBBF24]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Payment Confirmed</p>
                    <p className="text-white/50 text-xs">P 12,450.00</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 rounded bg-white/20 flex items-center justify-center text-[8px] text-white/60 font-bold">VISA</div>
                  <div className="w-6 h-4 rounded bg-white/20 flex items-center justify-center text-[8px] text-white/60 font-bold">MC</div>
                  <div className="w-6 h-4 rounded bg-white/20 flex items-center justify-center text-[8px] text-white/60 font-bold">OM</div>
                </div>
              </motion.div>

              {/* Floating quote card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-16 right-16 glass rounded-2xl p-5 w-72"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Quote Ready</p>
                    <p className="text-white/50 text-xs">50x Office Chairs</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/40">Product</p>
                    <p className="text-white font-medium">P 45,000</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/40">Shipping</p>
                    <p className="text-white font-medium">P 8,200</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/40">Import Fees</p>
                    <p className="text-white font-medium">P 5,400</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <p className="text-white/40">Est. Arrival</p>
                    <p className="text-white font-medium">21 days</p>
                  </div>
                </div>
              </motion.div>

              {/* Connection lines between cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500">
                <line x1="260" y1="100" x2="140" y2="210" stroke="rgba(13,148,136,0.2)" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="260" y1="100" x2="280" y2="380" stroke="rgba(245,158,11,0.15)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

function Package({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
    </svg>
  )
}
