'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search, SlidersHorizontal, Star, Heart, ShoppingCart,
  ChevronDown, Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'

interface ShopViewProps {
  onNavigate: (view: string) => void
}

const products = [
  { id: 1, name: 'iPhone 17 Pro Max', category: 'Electronics', price: 12500, originalPrice: 15800, rating: 4.9, reviews: 342, image: '📱', supplier: 'Shenzhen Tech Co.', shipping: '7-14 days', badge: 'Best Seller' },
  { id: 2, name: 'Solar Panel 400W Monocrystalline', category: 'Solar Solutions', price: 2800, originalPrice: 3200, rating: 4.8, reviews: 189, image: '☀️', supplier: 'Jiangsu Solar Ltd.', shipping: '14-21 days', badge: 'Eco' },
  { id: 3, name: 'Executive Office Chair Ergonomic', category: 'Office Supplies', price: 1850, originalPrice: 2400, rating: 4.7, reviews: 256, image: '🪑', supplier: 'Foshan Furniture Co.', shipping: '14-21 days', badge: 'Popular' },
  { id: 4, name: 'Mining Drill Bit Set Professional', category: 'Industrial Equipment', price: 8900, originalPrice: 11000, rating: 4.6, reviews: 78, image: '⛏️', supplier: 'Hebei Industrial Ltd.', shipping: '21-30 days', badge: 'B2B' },
  { id: 5, name: 'Designer Leather Handbag Collection', category: 'Fashion', price: 650, originalPrice: 890, rating: 4.8, reviews: 512, image: '👜', supplier: 'Guangzhou Fashion Hub', shipping: '7-14 days', badge: 'Trending' },
  { id: 6, name: 'Gaming Laptop RTX 5070 16"', category: 'Gaming', price: 18500, originalPrice: 22000, rating: 4.9, reviews: 234, image: '🎮', supplier: 'Shenzhen Tech Co.', shipping: '7-14 days', badge: 'New' },
  { id: 7, name: 'Toyota Land Cruiser Brake Pads', category: 'Auto Parts', price: 450, originalPrice: 620, rating: 4.5, reviews: 167, image: '🚗', supplier: 'Zhejiang Auto Parts', shipping: '14-21 days', badge: '' },
  { id: 8, name: 'Premium Skincare Bundle 12-Piece', category: 'Beauty Products', price: 890, originalPrice: 1200, rating: 4.7, reviews: 398, image: '✨', supplier: 'Guangzhou Beauty Co.', shipping: '7-14 days', badge: 'Popular' },
  { id: 9, name: 'Smart Home Camera 4K System', category: 'Electronics', price: 2200, originalPrice: 2800, rating: 4.6, reviews: 145, image: '📷', supplier: 'Shenzhen Tech Co.', shipping: '7-14 days', badge: '' },
  { id: 10, name: 'Industrial LED Flood Light 200W', category: 'Industrial Equipment', price: 780, originalPrice: 950, rating: 4.4, reviews: 89, image: '💡', supplier: 'Ningbo Lighting Ltd.', shipping: '14-21 days', badge: '' },
  { id: 11, name: 'Women\'s Running Shoes Athletic', category: 'Fashion', price: 380, originalPrice: 520, rating: 4.7, reviews: 623, image: '👟', supplier: 'Putian Shoes Factory', shipping: '7-14 days', badge: 'Trending' },
  { id: 12, name: 'Standing Desk Electric Adjustable', category: 'Office Supplies', price: 4200, originalPrice: 5500, rating: 4.8, reviews: 198, image: '🖥️', supplier: 'Foshan Furniture Co.', shipping: '14-21 days', badge: 'Popular' },
]

const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Industrial Equipment', 'Solar Solutions', 'Auto Parts', 'Beauty Products', 'Gaming', 'Office Supplies']

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-amber-50 text-amber-700 border-amber-200',
  'Eco': 'bg-green-50 text-green-700 border-green-200',
  'Popular': 'bg-blue-50 text-blue-700 border-blue-200',
  'B2B': 'bg-gray-100 text-gray-700 border-gray-200',
  'Trending': 'bg-purple-50 text-purple-700 border-purple-200',
  'New': 'bg-teal-50 text-teal-700 border-teal-200',
}

export default function ShopView({ onNavigate }: ShopViewProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Products</h1>
          <p className="text-gray-500">Browse thousands of products from verified Chinese suppliers</p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#0D9488] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0D9488] text-white shadow-md shadow-teal-500/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0D9488]/30 hover:text-[#0D9488]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Extended filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-xl border border-gray-200 p-6 mb-6"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Price Range</label>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Min" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm" />
                  <span className="text-gray-400">—</span>
                  <input type="text" placeholder="Max" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Shipping Method</label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm">
                  <option>All Methods</option>
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Express</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Supplier Rating</label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm">
                  <option>All Ratings</option>
                  <option>4.5+ Stars</option>
                  <option>4.0+ Stars</option>
                  <option>3.5+ Stars</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Reset</button>
              <button className="px-4 py-2 text-sm bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E]">Apply Filters</button>
            </div>
          </motion.div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">{filteredProducts.length} products found</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => onNavigate('product')}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300 cursor-pointer"
            >
              {/* Image area */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${badgeColors[product.badge] || 'bg-gray-50 text-gray-600'}`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white">
                    <Heart className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-[#0D9488] font-medium mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-[#0D9488] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium text-gray-700">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">P {product.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 line-through ml-1.5">P {product.originalPrice.toLocaleString()}</span>
                  </div>
                  <button className="w-9 h-9 rounded-xl bg-[#0D9488]/10 flex items-center justify-center group-hover:bg-[#0D9488] transition-colors">
                    <ShoppingCart className="w-4 h-4 text-[#0D9488] group-hover:text-white transition-colors" />
                  </button>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-gray-500">
                  <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs font-medium">{product.shipping}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="rounded-xl px-8 border-gray-200">
            Load More Products
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
