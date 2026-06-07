'use client'

import { motion } from 'framer-motion'
import {
  Smartphone, Shirt, Home, Factory, Sun, Car, Sparkles, Gamepad2, Briefcase
} from 'lucide-react'

interface CategoriesSectionProps {
  onNavigate: (view: string) => void
}

const categories = [
  {
    icon: Smartphone,
    label: 'Electronics',
    count: '12K+',
    /* electric-blue identity */
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    cardTint: 'bg-gradient-to-br from-blue-50/80 to-white',
    hoverTint: 'from-blue-100/90 to-blue-50/60',
    borderHover: 'hover:border-blue-200',
  },
  {
    icon: Shirt,
    label: 'Fashion',
    count: '8K+',
    /* warm coral/peach */
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    cardTint: 'bg-gradient-to-br from-orange-50/80 to-white',
    hoverTint: 'from-orange-100/90 to-orange-50/60',
    borderHover: 'hover:border-orange-200',
  },
  {
    icon: Home,
    label: 'Home & Living',
    count: '6K+',
    /* soft sand */
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    cardTint: 'bg-gradient-to-br from-amber-50/80 to-white',
    hoverTint: 'from-amber-100/90 to-amber-50/60',
    borderHover: 'hover:border-amber-200',
  },
  {
    icon: Factory,
    label: 'Industrial Equipment',
    count: '3K+',
    /* slate */
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    cardTint: 'bg-gradient-to-br from-slate-50/80 to-white',
    hoverTint: 'from-slate-100/90 to-slate-50/60',
    borderHover: 'hover:border-slate-200',
  },
  {
    icon: Sun,
    label: 'Solar Solutions',
    count: '2K+',
    /* amber */
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    cardTint: 'bg-gradient-to-br from-yellow-50/80 to-white',
    hoverTint: 'from-yellow-100/90 to-yellow-50/60',
    borderHover: 'hover:border-yellow-200',
  },
  {
    icon: Car,
    label: 'Auto Parts',
    count: '4K+',
    /* slate-blue */
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    cardTint: 'bg-gradient-to-br from-sky-50/80 to-white',
    hoverTint: 'from-sky-100/90 to-sky-50/60',
    borderHover: 'hover:border-sky-200',
  },
  {
    icon: Sparkles,
    label: 'Beauty Products',
    count: '5K+',
    /* pink */
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    cardTint: 'bg-gradient-to-br from-pink-50/80 to-white',
    hoverTint: 'from-pink-100/90 to-pink-50/60',
    borderHover: 'hover:border-pink-200',
  },
  {
    icon: Gamepad2,
    label: 'Gaming',
    count: '2K+',
    /* violet */
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    cardTint: 'bg-gradient-to-br from-violet-50/80 to-white',
    hoverTint: 'from-violet-100/90 to-violet-50/60',
    borderHover: 'hover:border-violet-200',
  },
  {
    icon: Briefcase,
    label: 'Office Supplies',
    count: '3K+',
    /* teal */
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    cardTint: 'bg-gradient-to-br from-teal-50/80 to-white',
    hoverTint: 'from-teal-100/90 to-teal-50/60',
    borderHover: 'hover:border-teal-200',
  },
]

export default function CategoriesSection({ onNavigate }: CategoriesSectionProps) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            From electronics to industrial equipment — find everything you need from verified Chinese suppliers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onNavigate('shop')}
              className={`group relative overflow-hidden rounded-2xl p-6 lg:p-8 text-left border border-gray-100 ${cat.borderHover} hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ${cat.cardTint}`}
            >
              {/* Deepened tint on hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.hoverTint} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {cat.label}
                </h3>
                <p className="text-sm text-gray-400">{cat.count} products</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
