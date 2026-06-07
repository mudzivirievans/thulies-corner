'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, HelpCircle, Zap, Shield, Truck, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingViewProps {
  onNavigate: (view: string) => void
}

/* No subscriptions — you pay a small service fee per order. Browsing & quotes
   are free. Tiers reflect the service-fee rate, not a monthly plan. */
const plans = [
  {
    name: 'Personal',
    description: 'For one-off and personal imports',
    price: '8%',
    priceDetail: 'service fee per order',
    features: [
      'Browse the full catalog',
      'Free instant quotes',
      'Standard air freight',
      'Real-time tracking',
      'Email support',
    ],
    cta: 'Create Free Account',
    ctaView: 'login',
    popular: false,
  },
  {
    name: 'Business',
    description: 'For businesses importing regularly',
    price: '5%',
    priceDetail: 'service fee per order',
    features: [
      'Everything in Personal',
      'Lower 5% service fee',
      'Air & sea freight options',
      'Warehouse consolidation',
      'Dedicated account manager',
      'Customs documentation',
      'Priority support',
    ],
    cta: 'Talk to Us',
    ctaView: 'contact',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For bulk and large-scale importers',
    price: 'Custom',
    priceDetail: 'negotiated rates',
    features: [
      'Everything in Business',
      'Volume-based discounts',
      'Dedicated warehouse space',
      'Multi-user accounts',
      'Compliance consulting',
      '24/7 dedicated support',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    ctaView: 'contact',
    popular: false,
  },
]

const faqs = [
  { q: 'Are there hidden fees beyond the service charge?', a: 'No. Our pricing is fully transparent. You see the product cost, shipping cost, import fees, and service charge before you pay. There are no hidden fees or surprise charges.' },
  { q: 'How is the service fee calculated?', a: 'Our service fee is a flat percentage of your order value: 8% for personal orders and 5% for registered businesses. Enterprise and bulk importers get custom negotiated rates. You always see the exact amount before you pay.' },
  { q: 'Do I need a subscription or monthly plan?', a: 'No. Thulie\'s Corner has no subscriptions or monthly fees. You only pay a small service fee on each order you place — browsing the catalog and getting quotes is always free.' },
  { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, bank transfers, Orange Money, and various local payment methods in Botswana. Enterprise clients can arrange custom payment terms.' },
  { q: 'Do you offer refunds?', a: 'Yes. If your order cannot be fulfilled or arrives damaged, we provide a full refund. Our escrow system protects your payment until delivery is confirmed.' },
]

/* Average share of a typical order — `value` numbers sum to 100 for the bar */
const feeBreakdown = [
  { label: 'Product Cost', description: 'Direct supplier price — no markup', pct: '60–75%', value: 67, color: '#0D9488', icon: Shield },
  { label: 'Shipping Cost', description: 'Air or sea freight from China to Botswana', pct: '10–20%', value: 15, color: '#F59E0B', icon: Truck },
  { label: 'Import Fees & Duties', description: 'Botswana customs duties and taxes', pct: '8–15%', value: 11, color: '#0EA5E9', icon: Shield },
  { label: 'Service Charge', description: 'Our fee for sourcing, payment, and logistics', pct: '5–8%', value: 7, color: '#8B5CF6', icon: Zap },
]

export default function PricingView({ onNavigate }: PricingViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-6">
              <Zap className="w-4 h-4 text-[#0D9488]" />
              <span className="text-sm text-[#0D9488] font-medium">Simple, transparent pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Import with Confidence
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              No hidden fees. No surprises. See the full cost breakdown before you pay — product, shipping, duties, and service charge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Reassurance — clarifies the per-order model up front */}
          <div className="max-w-2xl mx-auto mb-10 flex items-center justify-center gap-2.5 text-center px-5 py-3 rounded-xl bg-teal-50 border border-teal-100">
            <Check className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">No subscriptions, no monthly fees.</span> You only pay a small service fee when you import — browsing and quotes are always free.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-2xl border p-8 ${plan.popular ? 'border-[#0D9488] shadow-xl shadow-teal-500/10' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-[#0D9488] text-white text-xs font-semibold shadow-lg shadow-teal-500/20">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.priceDetail}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate(plan.ctaView)}
                  variant={plan.popular ? 'default' : 'outline'}
                  className={`w-full rounded-xl ${
                    plan.popular
                      ? 'bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-lg shadow-teal-500/20'
                      : 'border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee breakdown */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Fee Breakdown</h2>
            <p className="text-gray-500">You always know what you&apos;re paying for</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            {/* Stacked proportion bar — digest the cost structure at a glance */}
            <div className="flex h-5 w-full overflow-hidden rounded-full mb-3 shadow-inner">
              {feeBreakdown.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
                  className={`h-full ${i > 0 ? 'border-l-2 border-white' : ''}`}
                  style={{ backgroundColor: item.color }}
                  title={`${item.label} · ${item.pct}`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mb-7">Typical share of an import order</p>

            <div className="space-y-3">
              {feeBreakdown.map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm" style={{ color: item.color }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold" style={{ color: item.color }}>{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const open = openFaq === i
              return (
                <div key={i} className="rounded-xl border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 leading-relaxed px-5 pb-5 pl-[2.6rem]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
