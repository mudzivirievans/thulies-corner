'use client'

import { Package, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'
import type { ViewType } from './Navigation'

interface FooterProps {
  onNavigate: (view: ViewType) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A0E17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                China<span className="text-[#0D9488]">Connect</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              The premium import platform for Botswana. Shop products from China, track shipments, and manage imports from one account.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Shop', view: 'shop' as ViewType },
                { label: 'Services', view: 'services' as ViewType },
                { label: 'Track Shipment', view: 'track' as ViewType },
                { label: 'Pricing', view: 'pricing' as ViewType },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.view)}
                    className="text-sm text-white/40 hover:text-[#14B8A6] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', view: 'about' as ViewType },
                { label: 'Contact', view: 'contact' as ViewType },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.view)}
                    className="text-sm text-white/40 hover:text-[#14B8A6] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'FAQ', 'Shipping Guide', 'Returns Policy'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/40 hover:text-[#14B8A6] transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-white/80 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Mail className="w-4 h-4" />
                support@chinaconnect.co.bw
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <Phone className="w-4 h-4" />
                +267 71 234 567
              </li>
              <li className="flex items-start gap-2 text-sm text-white/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Gaborone, Botswana
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} ChinaConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/30">Shop Products from China. Track Every Shipment. One Account.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
