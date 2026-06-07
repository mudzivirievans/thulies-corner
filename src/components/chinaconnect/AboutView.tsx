'use client'

import { motion } from 'framer-motion'
import { Globe, Users, Shield, TrendingUp, ArrowRight, MapPin, Target, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AboutViewProps {
  onNavigate: (view: string) => void
}

const values = [
  {
    icon: Shield,
    title: 'Trust',
    description: 'We build trust through transparency. Every cost, every milestone, every detail is visible to our customers. No hidden fees, no surprises — just honest, reliable service.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'We believe every African business and consumer deserves access to the world\'s largest manufacturing market. Our platform removes the barriers between China and Botswana.',
  },
  {
    icon: TrendingUp,
    title: 'Simplicity',
    description: 'Importing from China has traditionally been complex and opaque. We make it simple. From sourcing to delivery, every step is designed to feel effortless.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every feature, every interaction, every decision is made with our customers in mind. We exist to make importing easier, faster, and more reliable for Botswana.',
  },
]

const stats = [
  { value: '5,000+', label: 'Products Available' },
  { value: '1,200+', label: 'Happy Customers' },
  { value: '3,500+', label: 'Shipments Delivered' },
  { value: '98%', label: 'Satisfaction Rate' },
]

export default function AboutView({ onNavigate }: AboutViewProps) {
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
              Building Africa&apos;s Import <span className="gradient-text">Infrastructure</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Thulie's Corner was founded to solve a simple problem: importing from China should be as easy as shopping online. Founded by a Motswana who moved to China, we bridge the gap between Chinese suppliers and customers back home in Botswana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              To democratize access to global trade for Africa. We believe that every business and consumer in Botswana deserves a seamless, transparent, and trustworthy way to import products from China. Our platform eliminates the complexity, risk, and opacity that has traditionally made importing difficult.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[#F8FAFC]"
              >
                <p className="text-3xl font-bold text-[#0D9488]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-500">The principles that guide everything we build</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-[#0D9488]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Based in China, Serving Botswana</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Our founder moved from Botswana to China, giving us direct access to Chinese suppliers and firsthand understanding of what Botswana customers need. We are uniquely positioned to bridge the gap.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl shadow-lg shadow-teal-500/20"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
