'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Eye, CheckCircle } from 'lucide-react'

const trustPoints = [
  { icon: Shield, text: 'Personally inspects every order' },
  { icon: Eye, text: 'Sends photos before shipping' },
  { icon: Heart, text: 'Motswana-owned & operated' },
  { icon: CheckCircle, text: 'Based in China — direct access' },
]

export default function MeetThulieSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200 mb-6">
            <Heart className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-xs font-bold tracking-wide text-amber-800 uppercase">Meet the founder</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
            Meet Thulie
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            A Motswana based in China, Thulie <strong className="font-semibold text-gray-900">personally sources, inspects, and ships every order</strong> — so you never worry about quality, authenticity, or getting scammed.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-2xl mx-auto mt-12"
        >
          <span aria-hidden="true" className="block text-7xl leading-none font-serif text-[#0D9488]/15 select-none mb-2">
            &ldquo;
          </span>
          <p className="text-xl font-medium text-gray-800 italic leading-relaxed -mt-6">
            I moved to China so my people back home don&apos;t have to worry about getting scammed. I check everything myself — if it&apos;s not good enough for my own family, it doesn&apos;t ship.
          </p>
          <cite className="block mt-4 text-sm font-semibold text-[#0D9488] not-italic">
            — Thulie, Founder
          </cite>
        </motion.blockquote>

        {/* Trust points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-14 text-left"
        >
          {trustPoints.map((point) => (
            <div
              key={point.text}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#0D9488]/[0.04] border border-[#0D9488]/10"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-[18px] h-[18px] text-[#0D9488]" />
              </div>
              <span className="text-sm font-medium text-gray-700 leading-snug">{point.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
