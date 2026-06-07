'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'

/* Marketplaces we source from. A small brand-coloured dot stands in as a
   lightweight "logo" — drop real logo SVGs into /public and swap the dot for
   an <img> later if desired. */
const platforms: { name: string; dot: string }[] = [
  { name: 'Alibaba', dot: '#FF6A00' },
  { name: '1688', dot: '#FF7A00' },
  { name: 'Taobao', dot: '#FF5000' },
  { name: 'AliExpress', dot: '#E62E04' },
  { name: 'Shein', dot: '#111111' },
]

export default function SearchSection() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const suggestions = [
    'iPhone 17 Pro Max',
    'Mining Equipment',
    'Solar Panels',
    'Office Furniture',
    'Fashion Products',
    'Electronics',
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F4F6F4] via-[#F7F9F6] to-white">
      {/* ===== Soft background accents ===== */}
      {/* Faint dashed shipping curves echoing the hero map, to fill the negative
          space and guide the eye toward the search bar. */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 180 C 300 60, 560 80, 1500 220"
          stroke="rgba(13,148,136,0.10)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <path
          d="M -50 470 C 380 560, 760 520, 1500 380"
          stroke="rgba(13,148,136,0.07)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>
      {/* Soft organic glow blobs in the brand palette */}
      <div className="absolute -left-24 top-1/3 w-72 h-72 bg-[#0D9488]/[0.06] rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -right-24 bottom-1/4 w-80 h-80 bg-[#F59E0B]/[0.05] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What are you looking for today?
          </h2>
          <p className="text-gray-500 text-lg">
            Search from thousands of products across Chinese marketplaces
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Search bar — floats with a soft shadow, lifts and glows teal on focus/hover */}
          <div className={`group relative rounded-2xl transition-all duration-300 ${
            focused
              ? 'shadow-[0_0_0_2px_rgba(13,148,136,0.45),0_18px_45px_-12px_rgba(13,148,136,0.30)] -translate-y-0.5'
              : 'shadow-[0_10px_35px_-10px_rgba(15,42,38,0.18)] hover:shadow-[0_16px_40px_-12px_rgba(13,148,136,0.22)] hover:-translate-y-0.5'
          }`}>
            <div className={`flex items-center gap-3 px-6 py-5 bg-white rounded-2xl border transition-colors duration-300 ${
              focused ? 'border-[#0D9488]/60' : 'border-[#0D9488]/15 group-hover:border-[#0D9488]/30'
            }`}>
              <Search className={`w-5 h-5 flex-shrink-0 transition-colors ${focused ? 'text-[#0D9488]' : 'text-gray-400'}`} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Search products, categories, or paste a link from Alibaba, 1688, Taobao, Shein..."
                className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
              />
              <button className="flex-shrink-0 px-5 py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl font-medium text-sm transition-colors flex items-center gap-2 shadow-lg shadow-teal-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Search
              </button>
            </div>
          </div>

          {/* Quick suggestions — soft teal pills that read as clickable */}
          <div className="flex flex-wrap items-center gap-2 mt-5 justify-center">
            <span className="text-sm text-gray-500">Popular:</span>
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item)}
                className="px-3.5 py-1.5 text-sm font-medium text-[#0D9488] bg-[#0D9488]/[0.08] hover:bg-[#0D9488]/[0.15] rounded-full transition-all duration-200 border border-[#0D9488]/10 hover:border-[#0D9488]/25 hover:-translate-y-0.5"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Supported platforms — upgraded to credible logo-style badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 mt-12 pt-8 border-t border-gray-200/70"
        >
          <span className="text-sm text-gray-500 mr-1">Source from</span>
          {platforms.map((platform) => (
            <span
              key={platform.name}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors cursor-default"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: platform.dot }} />
              {platform.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
