'use client'

import { motion } from 'framer-motion'
import { Search, Calculator, CreditCard, MapPin, ChevronRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Find Products',
    description: 'Browse our catalog or paste links from Alibaba, 1688, Taobao, and AliExpress directly into our search.',
    details: ['Browse curated products', 'Paste supplier links', 'Request custom sourcing', 'Get AI recommendations'],
    color: 'from-[#0D9488] to-[#14B8A6]',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Calculator,
    number: '02',
    title: 'Receive Quote',
    description: 'Our platform calculates the complete cost including product, shipping, import fees, and service charges with estimated arrival.',
    details: ['Product cost breakdown', 'Shipping cost estimate', 'Import fees calculated', 'Estimated arrival date'],
    color: 'from-[#F59E0B] to-[#FBBF24]',
    bgColor: 'bg-amber-50',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Pay Securely',
    description: 'Choose from multiple payment methods including Visa, Mastercard, bank transfer, Orange Money, and local payment options.',
    details: ['Visa & Mastercard', 'Bank transfer', 'Orange Money', 'Local payment methods'],
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    bgColor: 'bg-violet-50',
  },
  {
    icon: MapPin,
    number: '04',
    title: 'Track Shipment',
    description: 'Watch your shipment move from China to Botswana in real-time with detailed milestones and delivery notifications.',
    details: ['Real-time tracking', 'Shipment milestones', 'Delivery notifications', 'Map visualization'],
    /* Teal to match the tracking identity used in the hero and tracking sections */
    color: 'from-[#0D9488] to-[#14B8A6]',
    bgColor: 'bg-teal-50',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Four simple steps from browsing to delivery. Importing from China has never been easier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Flow indicator — dashed line + chevron guiding the eye to the next step */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center absolute top-12 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] -translate-y-1/2 z-10">
                  <div className="flex-1 border-t-2 border-dashed border-gray-300" />
                  <ChevronRight className="w-5 h-5 text-gray-400 -ml-2 flex-shrink-0" />
                </div>
              )}

              <div className="relative rounded-2xl bg-white border border-gray-100 p-6 lg:p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:border-gray-200">
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-3xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{step.description}</p>

                <div className="space-y-2.5">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} flex-shrink-0`} />
                      <span className="text-xs text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
