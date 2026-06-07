'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ChevronDown, User, LogIn, ShoppingCart,
  Package, Search, BarChart3, Settings, Truck, MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export type ViewType = 'home' | 'shop' | 'services' | 'track' | 'pricing' | 'about' | 'contact' | 'dashboard' | 'admin' | 'login' | 'product'

interface NavigationProps {
  currentView: ViewType
  onNavigate: (view: ViewType) => void
}

const navLinks: { label: string; view: ViewType }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Shop', view: 'shop' },
  { label: 'Services', view: 'services' },
  { label: 'Track Shipment', view: 'track' },
  { label: 'Pricing', view: 'pricing' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
]

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (view: ViewType) => {
    onNavigate(view)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className={scrolled ? 'text-gray-900' : 'text-white'}>Thulie's</span>
                <span className="text-[#0D9488]"> Corner</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNav(link.view)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentView === link.view
                      ? scrolled
                        ? 'text-[#0D9488] bg-teal-50'
                        : 'text-white bg-white/10'
                      : scrolled
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNav('track')}
                className={scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white hover:bg-white/10'}
              >
                <Truck className="w-4 h-4 mr-1.5" />
                Track
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNav('dashboard')}
                className={scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white hover:bg-white/10'}
              >
                <User className="w-4 h-4 mr-1.5" />
                Account
              </Button>
              <Button
                onClick={() => handleNav('login')}
                size="sm"
                className="bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-lg shadow-teal-500/20 rounded-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.view}
                      onClick={() => handleNav(link.view)}
                      className={`px-4 py-3 text-left rounded-xl font-medium transition-colors ${
                        currentView === link.view
                          ? 'text-[#0D9488] bg-teal-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="my-3 border-t border-gray-100" />
                  <button
                    onClick={() => handleNav('dashboard')}
                    className="px-4 py-3 text-left rounded-xl text-gray-700 hover:bg-gray-50 font-medium flex items-center gap-3"
                  >
                    <User className="w-4 h-4" />
                    My Account
                  </button>
                  <button
                    onClick={() => handleNav('track')}
                    className="px-4 py-3 text-left rounded-xl text-gray-700 hover:bg-gray-50 font-medium flex items-center gap-3"
                  >
                    <Truck className="w-4 h-4" />
                    Track Shipment
                  </button>
                  <div className="mt-4">
                    <Button
                      onClick={() => handleNav('login')}
                      className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
