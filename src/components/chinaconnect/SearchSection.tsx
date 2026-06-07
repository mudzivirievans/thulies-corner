'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles, ArrowRight } from 'lucide-react'

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
    <section className="relative py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className={`relative rounded-2xl transition-all duration-300 ${
            focused
              ? 'shadow-[0_0_0_2px_rgba(13,148,136,0.3),0_8px_30px_rgba(13,148,136,0.1)]'
              : 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          }`}>
            <div className="flex items-center gap-3 px-6 py-5 bg-white rounded-2xl border border-gray-100">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Search products, categories, or paste a link from Alibaba, 1688, Taobao, Shein..."
                className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
              />
              <button className="flex-shrink-0 px-5 py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl font-medium text-sm transition-colors flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Search
              </button>
            </div>
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-5 justify-center">
            <span className="text-sm text-gray-400">Popular:</span>
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item)}
                className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 hover:bg-teal-50 hover:text-[#0D9488] rounded-lg transition-colors border border-gray-100 hover:border-teal-100"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Supported platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-100"
        >
          <span className="text-sm text-gray-400">Source from</span>
          {['Alibaba', '1688', 'Taobao', 'AliExpress', 'Shein'].map((platform) => (
            <span key={platform} className="text-sm font-semibold text-gray-300 hover:text-gray-500 transition-colors cursor-default">
              {platform}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
