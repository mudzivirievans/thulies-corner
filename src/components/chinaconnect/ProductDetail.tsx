'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star, Heart, ShoppingCart, Truck, Shield, RotateCcw,
  ChevronRight, Minus, Plus, Share2, MessageCircle, ArrowLeft, Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductDetailProps {
  onNavigate: (view: string) => void
}

export default function ProductDetail({ onNavigate }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('overview')

  const product = {
    name: 'iPhone 17 Pro Max',
    price: 12500,
    originalPrice: 15800,
    rating: 4.9,
    reviews: 342,
    category: 'Electronics',
    supplier: 'Shenzhen Tech Co.',
    shipping: '7-14 business days',
    importFee: 1875,
    shippingCost: 850,
    serviceCharge: 375,
    total: 15600,
    description: 'The latest iPhone 17 Pro Max featuring the A19 Pro chip, 48MP camera system with 5x optical zoom, titanium design, and all-day battery life. Imported directly from verified suppliers in Shenzhen, China.',
    specs: [
      { label: 'Display', value: '6.9" Super Retina XDR' },
      { label: 'Chip', value: 'A19 Pro' },
      { label: 'Camera', value: '48MP + 12MP + 12MP' },
      { label: 'Battery', value: '4,685 mAh' },
      { label: 'Storage', value: '256GB / 512GB / 1TB' },
      { label: 'Weight', value: '227g' },
    ],
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0D9488]">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => onNavigate('shop')} className="hover:text-[#0D9488]">Shop</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 aspect-square flex items-center justify-center overflow-hidden">
              <span className="text-[120px]">📱</span>
              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-50 text-amber-700 border-amber-200">Best Seller</Badge>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[0, 1, 2, 3].map((i) => (
                <button key={i} className={`rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 aspect-square flex items-center justify-center ${i === 0 ? 'ring-2 ring-[#0D9488]' : ''}`}>
                  <span className="text-2xl">📱</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-[#0D9488] font-medium mb-1">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">P {product.price.toLocaleString()}</span>
              <span className="text-lg text-gray-400 line-through">P {product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-green-50 text-green-700 border-green-200">Save {(Math.round((1 - product.price / product.originalPrice) * 100))}%</Badge>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-[#F8FAFC] rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Cost Breakdown</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Product Cost</span>
                <span className="text-gray-900 font-medium">P {product.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping Cost</span>
                <span className="text-gray-900 font-medium">P {product.shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Import Fees</span>
                <span className="text-gray-900 font-medium">P {product.importFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Service Charge</span>
                <span className="text-gray-900 font-medium">P {product.serviceCharge.toLocaleString()}</span>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between">
                <span className="text-sm font-semibold text-gray-700">Total Estimated Cost</span>
                <span className="text-lg font-bold text-[#0D9488]">P {product.total.toLocaleString()}</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Quantity</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl shadow-lg shadow-teal-500/20"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-gray-200">
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-gray-200 px-3">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Truck, label: '7-14 Day Shipping' },
                { icon: Shield, label: 'Secure Payment' },
                { icon: RotateCcw, label: 'Easy Returns' },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50">
                  <badge.icon className="w-5 h-5 text-[#0D9488]" />
                  <span className="text-xs text-gray-600 text-center font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product details tabs */}
        <div className="mt-16">
          <div className="flex gap-6 border-b border-gray-200 mb-8">
            {['overview', 'specifications', 'reviews', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#0D9488] border-b-2 border-[#0D9488]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between p-4 rounded-xl bg-gray-50">
                  <span className="text-sm text-gray-500">{spec.label}</span>
                  <span className="text-sm font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {[5, 4, 5, 4].map((rating, i) => (
                <div key={i} className="p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-sm font-semibold text-[#0D9488]">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Customer {i + 1}</p>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className={`w-3 h-3 ${j < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Great product! Arrived in perfect condition. The import process was smooth and transparent.</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-teal-50 border border-teal-100">
                <h4 className="font-semibold text-[#0D9488] mb-2">Shipping to Botswana</h4>
                <p className="text-sm text-gray-600">Estimated delivery: {product.shipping}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-100">
                  <p className="text-sm font-medium text-gray-900 mb-1">Air Freight</p>
                  <p className="text-sm text-gray-500">7-14 business days</p>
                  <p className="text-sm font-semibold text-[#0D9488] mt-1">P 850</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100">
                  <p className="text-sm font-medium text-gray-900 mb-1">Sea Freight</p>
                  <p className="text-sm text-gray-500">21-35 business days</p>
                  <p className="text-sm font-semibold text-[#0D9488] mt-1">P 350</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
