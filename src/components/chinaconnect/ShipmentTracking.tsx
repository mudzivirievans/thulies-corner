'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search, Truck, Package, MapPin, CheckCircle, Clock,
  Plane, Ship, Anchor, FileCheck, ArrowRight, Copy, ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ShipmentTrackingProps {
  onNavigate: (view: string) => void
}

const stages = [
  { id: 1, label: 'Order Received', icon: Package, date: 'Dec 10, 2024', time: '14:30', detail: 'Order confirmed and payment verified', completed: true },
  { id: 2, label: 'Purchased From Supplier', icon: CheckCircle, date: 'Dec 11, 2024', time: '09:15', detail: 'Product purchased from Shenzhen Tech Co.', completed: true },
  { id: 3, label: 'Arrived Warehouse', icon: Package, date: 'Dec 13, 2024', time: '16:45', detail: 'Package arrived at Guangzhou warehouse', completed: true },
  { id: 4, label: 'Export Cleared', icon: FileCheck, date: 'Dec 15, 2024', time: '10:20', detail: 'Chinese customs clearance completed', completed: true },
  { id: 5, label: 'In Transit', icon: Plane, date: 'Dec 16, 2024', time: '08:00', detail: 'Shipment departed Guangzhou via air freight', completed: false, current: true },
  { id: 6, label: 'Arrived Botswana', icon: MapPin, date: 'Est. Dec 22', time: '', detail: 'Arrival at Sir Seretse Khama International Airport', completed: false },
  { id: 7, label: 'Out For Delivery', icon: Truck, date: 'Est. Dec 23', time: '', detail: 'Final delivery to your address', completed: false },
  { id: 8, label: 'Delivered', icon: CheckCircle, date: 'Est. Dec 24', time: '', detail: 'Package delivered and signed for', completed: false },
]

export default function ShipmentTracking({ onNavigate }: ShipmentTrackingProps) {
  const [trackingId, setTrackingId] = useState('CN-2847')
  const [searched, setSearched] = useState(true)

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Shipment</h1>
          <p className="text-gray-500">Enter your tracking number to get real-time updates</p>
        </div>

        <div className="flex gap-3 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking number (e.g., CN-2847)"
              className="w-full pl-11 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all"
            />
          </div>
          <Button className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl px-8 shadow-lg shadow-teal-500/20">
            Track
          </Button>
        </div>

        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Shipment header card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-gray-900">Shipment {trackingId}</h2>
                    <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold">In Transit</span>
                  </div>
                  <p className="text-gray-500 text-sm">iPhone 17 Pro Max · Shenzhen Tech Co.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    Copy ID
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Route summary */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-amber-50/50 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Origin</p>
                    <p className="text-sm font-bold text-gray-900">Guangzhou</p>
                    <p className="text-xs text-gray-500">China</p>
                  </div>
                  <div className="flex-1 mx-6 flex items-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-[#0D9488] to-[#F59E0B]" />
                    <div className="mx-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                      <Plane className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#F59E0B] to-gray-200" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Destination</p>
                    <p className="text-sm font-bold text-gray-900">Gaborone</p>
                    <p className="text-xs text-gray-500">Botswana</p>
                  </div>
                </div>
              </div>

              {/* ETA */}
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Estimated arrival</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">December 24, 2024</span>
                <span className="text-sm text-[#0D9488] font-medium">6 days remaining</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-6">Shipment Progress</h3>
              <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] h-3 rounded-full relative" style={{ width: '50%' }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-[3px] border-[#0D9488] shadow-md" />
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Ordered</span>
                <span>In Transit</span>
                <span>Delivered</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Shipment Timeline</h3>
              <div className="relative">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex gap-4 pb-8 last:pb-0"
                  >
                    {/* Timeline connector */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        stage.current
                          ? 'bg-[#0D9488] text-white shadow-lg shadow-teal-500/20 pulse-glow'
                          : stage.completed
                            ? 'bg-green-50 text-green-600'
                            : 'bg-gray-50 text-gray-300'
                      }`}>
                        <stage.icon className="w-5 h-5" />
                      </div>
                      {index < stages.length - 1 && (
                        <div className={`w-0.5 flex-1 mt-2 ${
                          stage.completed ? 'bg-green-200' : 'bg-gray-100'
                        }`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${stage.current ? 'pb-8' : ''}`}>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-semibold ${
                          stage.current ? 'text-[#0D9488]' : stage.completed ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {stage.label}
                        </h4>
                        {stage.current && (
                          <span className="px-2 py-0.5 rounded text-xs bg-[#0D9488]/10 text-[#0D9488] font-medium">Current</span>
                        )}
                      </div>
                      <p className={`text-sm mt-0.5 ${stage.completed || stage.current ? 'text-gray-500' : 'text-gray-300'}`}>
                        {stage.detail}
                      </p>
                      {stage.date && (
                        <p className={`text-xs mt-1 ${stage.completed || stage.current ? 'text-gray-400' : 'text-gray-200'}`}>
                          {stage.date} {stage.time && `· ${stage.time}`}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
