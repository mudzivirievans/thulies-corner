'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, HelpCircle, Zap, Shield, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingViewProps {
  onNavigate: (view: string) => void
}

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for personal imports and small orders',
    price: 'Free',
    priceDetail: 'No monthly fee',
    features: [
      'Browse products catalog',
      'Up to 3 orders per month',
      'Standard tracking',
      'Email support',
      'Air freight only',
    ],
    cta: 'Get Started',
    popular: false,
    color: 'bg-white',
  },
  {
    name: 'Business',
    description: 'For growing businesses importing regularly',
    price: 'P 499',
    priceDetail: 'per month',
    features: [
      'Unlimited orders',
      'Priority tracking with SMS alerts',
      'Dedicated account manager',
      'Air & sea freight options',
      'Warehouse consolidation',
      'Customs documentation',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: 'bg-white',
  },
  {
    name: 'Enterprise',
    description: 'For large-scale importers and businesses',
    price: 'Custom',
    priceDetail: 'tailored pricing',
    features: [
      'Everything in Business',
      'Bulk order discounts',
      'Dedicated warehouse space',
      'API access',
      'Multi-user accounts',
      'Compliance consulting',
      '24/7 dedicated support',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'bg-white',
  },
]

const faqs = [
  { q: 'Are there hidden fees beyond the service charge?', a: 'No. Our pricing is fully transparent. You see the product cost, shipping cost, import fees, and service charge before you pay. There are no hidden fees or surprise charges.' },
  { q: 'How is the service charge calculated?', a: 'Our service charge is a flat percentage applied to the total order value. Starter accounts pay 8%, Business accounts pay 5%, and Enterprise accounts have custom negotiated rates.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes, you can cancel your Business or Enterprise subscription at any time. There are no cancellation fees or long-term contracts required.' },
  { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, bank transfers, Orange Money, and various local payment methods in Botswana. Enterprise clients can arrange custom payment terms.' },
  { q: 'Do you offer refunds?', a: 'Yes. If your order cannot be fulfilled or arrives damaged, we provide a full refund. Our escrow system protects your payment until delivery is confirmed.' },
]

export default function PricingView({ onNavigate }: PricingViewProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-2">{plan.priceDetail}</span>
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
                  onClick={() => onNavigate('login')}
                  className={`w-full rounded-xl ${
                    plan.popular
                      ? 'bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-lg shadow-teal-500/20'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Fee Breakdown</h2>
            <p className="text-gray-500">You always know what you&apos;re paying for</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-4">
            {[
              { label: 'Product Cost', description: 'Direct supplier price — no markup', pct: '60-75%', icon: Shield },
              { label: 'Shipping Cost', description: 'Air or sea freight from China to Botswana', pct: '10-20%', icon: Truck },
              { label: 'Import Fees & Duties', description: 'Botswana customs duties and taxes', pct: '8-15%', icon: Shield },
              { label: 'Service Charge', description: 'Our fee for sourcing, payment, and logistics', pct: '5-8%', icon: Zap },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#0D9488]">{item.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
