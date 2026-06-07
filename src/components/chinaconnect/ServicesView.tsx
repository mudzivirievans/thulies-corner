'use client'

import { motion } from 'framer-motion'
import {
  Search, Truck, Shield, Globe, Package, CreditCard,
  ArrowRight, CheckCircle, Sparkles, Users, BarChart3, Headphones
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServicesViewProps {
  onNavigate: (view: string) => void
}

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'Find any product from Chinese suppliers. Paste a link from Alibaba, 1688, Taobao, or AliExpress and we handle the rest. Our team verifies suppliers and negotiates the best prices on your behalf.',
    features: ['Link-based sourcing', 'Supplier verification', 'Price negotiation', 'Quality inspection'],
    color: 'from-[#0D9488] to-[#14B8A6]',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Pay with confidence using our secure payment platform. We hold funds in escrow until your shipment is confirmed, protecting both buyers and suppliers throughout the transaction.',
    features: ['Escrow protection', 'Multiple payment methods', 'Currency conversion', 'Payment tracking'],
    color: 'from-[#F59E0B] to-[#FBBF24]',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Choose between air freight for speed or sea freight for bulk orders. Our logistics network ensures your products arrive safely from China to Botswana with full tracking visibility.',
    features: ['Air & sea freight', 'Door-to-door delivery', 'Customs clearance', 'Insurance options'],
    color: 'from-[#8B5CF6] to-[#A78BFA]',
  },
  {
    icon: Shield,
    title: 'Import Compliance',
    description: 'Navigate Botswana import regulations with ease. Our compliance team handles all documentation, duties, and regulatory requirements so you never have to worry about customs issues.',
    features: ['Documentation handling', 'Duty calculation', 'Regulatory compliance', 'Tax management'],
    color: 'from-[#EF4444] to-[#F87171]',
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Consolidate multiple orders in our Chinese warehouses before shipping. This reduces shipping costs and ensures all your products arrive together in one organized delivery.',
    features: ['Order consolidation', 'Quality inspection', 'Storage solutions', 'Packaging optimization'],
    color: 'from-[#10B981] to-[#34D399]',
  },
  {
    icon: Sparkles,
    title: 'AI Import Assistant',
    description: 'Get instant answers to all your import questions. Our AI assistant helps with cost estimates, shipping timelines, product sourcing, and real-time shipment tracking — available 24/7.',
    features: ['24/7 availability', 'Cost estimation', 'Shipment tracking', 'Import guidance'],
    color: 'from-[#EC4899] to-[#F472B6]',
  },
]

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-[#0A0E17] to-[#0F1A2E] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Import Services Built for <span className="gradient-text">Africa</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              From sourcing to delivery, ChinaConnect handles every step of the import process so you can focus on growing your business.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl shadow-xl shadow-teal-500/20"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Importing?</h2>
          <p className="text-gray-500 text-lg mb-8">Create your free account and start shopping from China today.</p>
          <Button
            onClick={() => onNavigate('shop')}
            size="lg"
            className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl shadow-xl shadow-teal-500/20"
          >
            Start Shopping
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
