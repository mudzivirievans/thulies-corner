'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search, Truck, Package, CheckCircle, Clock,
  Plane, FileCheck, MapPin, Shield, CreditCard
} from 'lucide-react'
import { Button } from '@/components/ui/button'

/* --- Sample shipment data for the live lookup --- */
const sampleShipment = {
  id: 'CN-2847',
  product: 'iPhone 17 Pro Max',
  origin: 'Shenzhen, China',
  destination: 'Gaborone, Botswana',
  method: 'Air Freight',
  eta: '6 days remaining',
  stages: [
    { label: 'Order Placed', icon: Package, date: 'Dec 10', done: true },
    { label: 'Paid', icon: CreditCard, date: 'Dec 11', done: true },
    { label: 'Shipped', icon: Plane, date: 'Dec 13', done: true },
    { label: 'At Customs', icon: FileCheck, date: 'Dec 15', done: true, current: true },
    { label: 'Out for Delivery', icon: Truck, date: '', done: false },
    { label: 'Delivered', icon: CheckCircle, date: '', done: false },
  ],
}

/* --- Milestone cards, ordered left-to-right to match the real journey:
   Quote → Payment → Shipment. Each carries a status chip and a stage-coloured
   bar so all three cards stay visually balanced. --- */
const milestones = [
  {
    icon: Clock,
    title: 'Quote Ready',
    sub: '50x Office Chairs',
    detail: 'P 58,600 total',
    progress: 100,
    bar: 'from-[#10B981] to-[#34D399]',
    color: 'bg-emerald-500/20',
    iconColor: 'text-[#10B981]',
    chip: 'Valid 7 days',
    chipClass: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Shield,
    title: 'Payment Confirmed',
    sub: 'P 12,450.00',
    detail: 'Visa / MC / Orange Money',
    progress: 100,
    bar: 'from-[#F59E0B] to-[#FBBF24]',
    color: 'bg-amber-500/20',
    iconColor: 'text-[#D97706]',
    chip: 'Confirmed',
    chipClass: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Truck,
    title: 'Shipment #CN-2847',
    sub: 'In Transit',
    detail: '68% — Arrived at customs',
    progress: 68,
    bar: 'from-[#0D9488] to-[#14B8A6]',
    color: 'bg-teal-500/20',
    iconColor: 'text-[#0D9488]',
    chip: 'In transit',
    chipClass: 'bg-teal-50 text-[#0D9488]',
  },
]

/* Column centres (3 equal cards) used to anchor the connector dots/lines down
   to each card, colour-matched to that card's stage. */
const connectors = [
  { pos: 16.67, color: '#10B981' },
  { pos: 50, color: '#D97706' },
  { pos: 83.33, color: '#0D9488' },
]

export default function TrackingSection() {
  const [trackingId, setTrackingId] = useState('')
  const [searched, setSearched] = useState(false)
  const [found, setFound] = useState(false)

  const handleSearch = () => {
    if (!trackingId.trim()) return
    setSearched(true)
    /* Accept any input that looks like a tracking number; always show sample */
    setFound(trackingId.toUpperCase().includes('CN') || trackingId.trim().length >= 3)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Track Every Step, From Shenzhen to Your Door
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real-time visibility on every shipment. Know where your order is at all times — from the supplier&apos;s warehouse in China to your doorstep in Botswana.
          </p>
        </motion.div>

        {/* Visual: Route + milestone cards */}
        <div className="mb-14">
          {/* Desktop layout: route line with floating cards */}
          <div className="hidden lg:block relative">
            {/* Route arc */}
            <div className="relative h-8 mb-12">
              <div className="absolute left-[8%] right-[8%] top-1/2 h-[2px] -translate-y-1/2">
                <div className="w-full h-full bg-gradient-to-r from-[#0D9488] via-[#14B8A6] to-[#F59E0B] rounded-full" />
                {/* Progress dot — rests at 68%, having cleared Quote + Payment and
                    now nearing Gaborone, with a live pulse. */}
                <motion.div
                  initial={{ left: '0%' }}
                  whileInView={{ left: '68%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#0D9488] shadow-lg shadow-teal-500/40"
                >
                  <span className="absolute inset-0 rounded-full bg-[#0D9488] animate-ping opacity-60" />
                </motion.div>
              </div>

              {/* Connector dots + dashed drop-lines linking the timeline to each card */}
              {connectors.map((c, i) => (
                <div key={i} className="absolute top-1/2" style={{ left: `${c.pos}%` }}>
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: c.color }}
                  />
                  <div className="absolute left-0 -translate-x-1/2 top-0 border-l-2 border-dashed border-gray-200 h-14" />
                </div>
              ))}

              {/* Endpoint labels — dark text for readability; colour kept on the dot only */}
              <div className="absolute left-[4%] top-8 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span className="text-xs font-semibold text-gray-700">Shenzhen</span>
              </div>
              <div className="absolute right-[4%] top-8 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-xs font-semibold text-gray-700">Gaborone</span>
              </div>
            </div>

            {/* Milestone cards row */}
            <div className="grid grid-cols-3 gap-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50/60 to-white p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${m.color} flex items-center justify-center flex-shrink-0`}>
                      <m.icon className={`w-5 h-5 ${m.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{m.title}</p>
                      <p className="text-xs text-gray-500">{m.sub}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold whitespace-nowrap ${m.chipClass}`}>{m.chip}</span>
                  </div>
                  {/* Stage-coloured bar — present on every card for visual balance */}
                  <div className="w-full bg-gray-200/70 rounded-full h-1.5 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.12, ease: 'easeOut' }}
                      className={`bg-gradient-to-r ${m.bar} h-1.5 rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{m.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile layout: stacked milestone cards + simplified route */}
          <div className="lg:hidden space-y-4">
            {/* Simplified route indicator */}
            <div className="flex items-center gap-3 px-2 mb-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                Shenzhen
              </span>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0D9488] to-[#F59E0B] relative">
                <motion.div
                  animate={{ left: ['0%', '95%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#0D9488] shadow-md shadow-teal-500/30"
                />
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                Gaborone
              </span>
            </div>

            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50/60 to-white p-4 flex items-center gap-3"
              >
                <div className={`w-9 h-9 rounded-lg ${m.color} flex items-center justify-center flex-shrink-0`}>
                  <m.icon className={`w-4.5 h-4.5 ${m.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{m.title}</p>
                  <p className="text-xs text-gray-500">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Track Shipment lookup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Track a Shipment</h3>
            <p className="text-sm text-gray-500 mb-5">Enter your tracking number to see real-time status</p>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => { setTrackingId(e.target.value); setSearched(false) }}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="e.g. CN-2847"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl px-6 shadow-md shadow-teal-500/15"
              >
                Track
              </Button>
            </div>

            {/* Animated result timeline */}
            {searched && found && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6"
              >
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold text-gray-900">{sampleShipment.id} — {sampleShipment.product}</p>
                      <p className="text-xs text-gray-400">{sampleShipment.origin} → {sampleShipment.destination} · {sampleShipment.method}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold">{sampleShipment.eta}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] h-2 rounded-full relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-[#0D9488] shadow-md" />
                    </motion.div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-0">
                    {sampleShipment.stages.map((stage, i) => (
                      <motion.div
                        key={stage.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 * i }}
                        className="flex items-start gap-3 pb-4 last:pb-0"
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            stage.current
                              ? 'bg-[#0D9488] text-white shadow-md shadow-teal-500/20'
                              : stage.done
                                ? 'bg-teal-50 text-[#0D9488]'
                                : 'bg-gray-50 text-gray-300'
                          }`}>
                            <stage.icon className="w-4 h-4" />
                          </div>
                          {i < sampleShipment.stages.length - 1 && (
                            <div className={`w-0.5 h-6 ${stage.done ? 'bg-teal-200' : 'bg-gray-100'}`} />
                          )}
                        </div>
                        <div className="pt-1">
                          <p className={`text-sm font-medium ${stage.current ? 'text-[#0D9488]' : stage.done ? 'text-gray-700' : 'text-gray-400'}`}>
                            {stage.label}
                            {stage.current && <span className="ml-2 text-xs text-[#0D9488] font-semibold">Current</span>}
                          </p>
                          {stage.date && <p className="text-xs text-gray-400">{stage.date}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {searched && !found && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-sm text-gray-400"
              >
                No shipment found. Try <button onClick={() => { setTrackingId('CN-2847'); handleSearch() }} className="text-[#0D9488] underline font-medium">CN-2847</button> for a demo.
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
