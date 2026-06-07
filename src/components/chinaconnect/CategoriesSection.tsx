'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone, Shirt, Home, Factory, Sun, Cog, Sparkles, Gamepad2, Briefcase,
  ArrowUpRight, ArrowRight, type LucideIcon
} from 'lucide-react'
import { stockImages } from './stockImages'

interface CategoriesSectionProps {
  onNavigate: (view: string) => void
}

/* Each category shows a curated photo with a dark overlay + label. Swap any
   `img` for your own photo in /public later. If an image fails to load, the
   icon/colour fallback shows so it never looks broken. */
type Category = {
  icon: LucideIcon
  label: string
  count: string
  img: string
  fallback: string
}

const categories: Category[] = [
  { icon: Smartphone, label: 'Electronics', count: '12K+', img: stockImages.cat_electronics, fallback: 'from-blue-500 to-blue-700' },
  { icon: Shirt, label: 'Fashion', count: '8K+', img: stockImages.cat_fashion, fallback: 'from-orange-500 to-rose-600' },
  { icon: Home, label: 'Home & Living', count: '6K+', img: stockImages.cat_home, fallback: 'from-amber-500 to-orange-700' },
  { icon: Factory, label: 'Industrial Equipment', count: '3K+', img: stockImages.cat_industrial, fallback: 'from-slate-500 to-slate-700' },
  { icon: Sun, label: 'Solar Solutions', count: '2K+', img: stockImages.cat_solar, fallback: 'from-yellow-500 to-amber-600' },
  { icon: Cog, label: 'Auto Parts', count: '4K+', img: stockImages.cat_auto, fallback: 'from-sky-500 to-sky-700' },
  { icon: Sparkles, label: 'Beauty Products', count: '5K+', img: stockImages.cat_beauty, fallback: 'from-pink-500 to-fuchsia-600' },
  { icon: Gamepad2, label: 'Gaming', count: '2K+', img: stockImages.cat_gaming, fallback: 'from-violet-500 to-purple-700' },
  { icon: Briefcase, label: 'Office Supplies', count: '3K+', img: stockImages.cat_office, fallback: 'from-teal-500 to-teal-700' },
]

function CategoryCard({ cat, index, onNavigate }: { cat: Category; index: number; onNavigate: (v: string) => void }) {
  const [failed, setFailed] = useState(false)

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onNavigate('shop')}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] text-left shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Photo (or colour fallback) */}
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cat.img}
          alt={cat.label}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.fallback}`} />
      )}

      {/* Unifying dark gradient overlay for legibility + cohesion */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/0 group-hover:from-black/85 transition-colors duration-300" />

      {/* Hover cue */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-5">
        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-[#0D9488] transition-colors duration-300">
          <cat.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-bold text-white leading-tight">{cat.label}</h3>
        <p className="text-sm text-white/75">{cat.count} products</p>
      </div>
    </motion.button>
  )
}

export default function CategoriesSection({ onNavigate }: CategoriesSectionProps) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything from electronics to industrial equipment — sourced from verified Chinese suppliers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, index) => (
            <CategoryCard key={cat.label} cat={cat} index={index} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Catch-all CTA for niches not shown in the preview grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => onNavigate('shop')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm hover:border-[#0D9488]/40 hover:text-[#0D9488] hover:shadow-md transition-all duration-200"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
