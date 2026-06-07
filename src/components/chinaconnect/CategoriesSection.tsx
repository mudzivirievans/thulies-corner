'use client'

import { motion } from 'framer-motion'
import {
  Smartphone, Shirt, Home, Factory, Sun, Car, Sparkles, Gamepad2, Briefcase
} from 'lucide-react'

interface CategoriesSectionProps {
  onNavigate: (view: string) => void
}

const categories = [
  { icon: Smartphone, label: 'Electronics', count: '12K+', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50' },
  { icon: Shirt, label: 'Fashion', count: '8K+', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50' },
  { icon: Home, label: 'Home & Living', count: '6K+', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50' },
  { icon: Factory, label: 'Industrial Equipment', count: '3K+', color: 'from-gray-600 to-gray-800', bg: 'bg-gray-50' },
  { icon: Sun, label: 'Solar Solutions', count: '2K+', color: 'from-yellow-400 to-amber-500', bg: 'bg-yellow-50' },
  { icon: Car, label: 'Auto Parts', count: '4K+', color: 'from-red-500 to-orange-500', bg: 'bg-red-50' },
  { icon: Sparkles, label: 'Beauty Products', count: '5K+', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50' },
  { icon: Gamepad2, label: 'Gaming', count: '2K+', color: 'from-indigo-500 to-violet-500', bg: 'bg-indigo-50' },
  { icon: Briefcase, label: 'Office Supplies', count: '3K+', color: 'from-teal-500 to-emerald-500', bg: 'bg-teal-50' },
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
          {categories.map((category, index) => (
            <motion.button
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onNavigate('shop')}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 lg:p-8 text-left border border-gray-100 hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {category.label}
              </h3>
              <p className="text-sm text-gray-400">{category.count} products</p>
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
