'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Heart, Eye, CheckCircle } from 'lucide-react'

/* Drop the owner's photo in /public as "thulie.jpg" (or .png/.webp — update OWNER_PHOTO)
   and it appears automatically. Until then, the "T" placeholder is shown. */
const OWNER_PHOTO = '/thulie.jpg'

export default function MeetThulieSection() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0D9488]/10 to-[#F59E0B]/10 rounded-3xl blur-2xl" />

              {/* Photo slot */}
              <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-teal-50 to-amber-50 border border-gray-100 overflow-hidden flex items-center justify-center">
                {!photoFailed ? (
                  /* Real photo — drop it in /public as thulie.jpg */
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={OWNER_PHOTO}
                    alt="Thulie, founder of Thulie's Corner"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  /* Placeholder until real photo is provided */
                  <div className="text-center p-8">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0D9488]/20 to-[#0D9488]/10 mx-auto flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#0D9488]">T</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating trust badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Personally Inspected</p>
                    <p className="text-xs text-gray-400">Every order, every time</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200">
              <Heart className="w-3.5 h-3.5 text-amber-700" />
              <span className="text-xs font-bold tracking-wide text-amber-800 uppercase">Meet the founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Meet Thulie
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Thulie is a Motswana who made the move to China — and she did it so you don&apos;t have to. Living right where the world&apos;s products are made, she <strong className="font-semibold text-gray-900">personally sources, inspects, and ships every order</strong> so her clients back home in Botswana <strong className="font-semibold text-gray-900">never have to worry about quality, authenticity, or getting scammed.</strong>
            </p>

            <p className="text-gray-600 leading-relaxed">
              When you order through Thulie&apos;s Corner, you&apos;re <strong className="font-semibold text-gray-900">not dealing with a faceless website</strong> halfway across the world. You&apos;re working with someone who understands Botswana, who knows what you need, and who is <strong className="font-semibold text-gray-900">physically there</strong> to make sure it arrives exactly as expected.
            </p>

            {/* Quote */}
            <blockquote className="relative pl-6 pt-4 border-l-[3px] border-[#0D9488]">
              {/* Large decorative quotation mark — cues "someone is speaking" */}
              <span
                aria-hidden="true"
                className="absolute -top-3 left-3 text-7xl leading-none font-serif text-[#0D9488]/15 select-none pointer-events-none"
              >
                &ldquo;
              </span>
              <p className="relative text-lg font-medium text-gray-800 italic leading-relaxed">
                I moved to China so my people back home don&apos;t have to worry about getting scammed. I check everything myself — if it&apos;s not good enough for my own family, it doesn&apos;t ship.
              </p>
              <cite className="block mt-2 text-sm font-semibold text-[#0D9488] not-italic">
                — Thulie, Founder
              </cite>
            </blockquote>

            {/* Quick trust points — grounded in equal-sized tinted pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { icon: Shield, text: 'Personally inspects every order' },
                { icon: Eye, text: 'Sends photos before shipping' },
                { icon: Heart, text: 'Motswana-owned & operated' },
                { icon: CheckCircle, text: 'Based in China — direct access' },
              ].map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0D9488]/[0.04] border border-[#0D9488]/10 hover:bg-[#0D9488]/[0.07] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-[18px] h-[18px] text-[#0D9488]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-snug">{point.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
