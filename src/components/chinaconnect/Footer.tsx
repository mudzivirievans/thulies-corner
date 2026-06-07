'use client'

import { Package, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import type { ViewType } from './Navigation'

interface FooterProps {
  onNavigate: (view: ViewType) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A0E17] text-white">
      {/* Soft transition seam easing the jump from the light section above */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                Thulie's<span className="text-[#0D9488]"> Corner</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Your trusted import partner. Shop products from China, track shipments, and manage imports from one account.
            </p>

            {/* Social links — where Botswana customers reach businesses daily */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: MessageCircle, label: 'WhatsApp', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 text-white/50 hover:bg-[#0D9488] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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
              {/* Legal links — keep them easy to find and balance the column */}
              {['Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/40 hover:text-[#14B8A6] transition-colors cursor-pointer">
                    {item}
                  </span>
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
              <li>
                <a href="mailto:support@thuliescorner.co.bw" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#14B8A6] transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  support@thuliescorner.co.bw
                </a>
              </li>
              <li>
                <a href="tel:+26774791379" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#14B8A6] transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +267 74 791 379
                </a>
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
            &copy; {new Date().getFullYear()} Thulie's Corner. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/30">Your Bridge Between China and Botswana.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
