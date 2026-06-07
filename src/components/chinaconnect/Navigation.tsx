'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ArrowLeft, User, Package, Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export type ViewType = 'home' | 'shop' | 'services' | 'track' | 'pricing' | 'about' | 'contact' | 'dashboard' | 'admin' | 'login' | 'product'

interface NavigationProps {
  currentView: ViewType
  onNavigate: (view: ViewType) => void
}

/* Tracking lives in the top-right utility bar (and mobile menu), so it is
   intentionally omitted here to avoid three competing entry points. */
const navLinks: { label: string; view: ViewType }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Shop', view: 'shop' },
  { label: 'Services', view: 'services' },
  { label: 'Pricing', view: 'pricing' },
  { label: 'About', view: 'about' },
  { label: 'Contact', view: 'contact' },
]

/* ONLY the homepage has a dark hero that justifies a transparent nav */
const darkHeroViews: ViewType[] = ['home']

/* Inner detail pages that show a back arrow */
const innerPages: ViewType[] = ['product', 'dashboard', 'admin']

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  /*
   * LOGO RULE:
   * - Home page (dark hero): transparent header while at top, solid white after scroll.
   * - Every other page: ALWAYS solid white header with dark teal wordmark.
   * This ensures the "Thulie's" word never disappears on light backgrounds.
   */
  const isDarkHero = darkHeroViews.includes(currentView) && !scrolled
  const isInner = innerPages.includes(currentView)
  const useDarkText = !isDarkHero

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
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
          useDarkText
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-gray-100/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo — always readable */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className={useDarkText ? 'text-[#0D9488]' : 'text-white'}>Thulie&apos;s</span>
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
                      ? useDarkText
                        ? 'text-[#0D9488] bg-teal-50'
                        : 'text-white bg-white/10'
                      : useDarkText
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
                className={useDarkText ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white hover:bg-white/10'}
              >
                <Truck className="w-4 h-4 mr-1.5" />
                Track
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNav('dashboard')}
                className={useDarkText ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white hover:bg-white/10'}
              >
                <User className="w-4 h-4 mr-1.5" />
                Account
              </Button>
              {/* Secondary (outline) so it doesn't compete with the hero's primary CTA */}
              <Button
                variant="outline"
                onClick={() => handleNav('login')}
                size="sm"
                className={`rounded-lg ${
                  useDarkText
                    ? 'border-[#0D9488] text-[#0D9488] hover:bg-teal-50 hover:text-[#0F766E]'
                    : 'border-white/40 text-white bg-white/5 hover:bg-white/15 hover:border-white/60'
                }`}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                useDarkText ? 'text-gray-600' : 'text-white'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Back button for inner/detail pages */}
      {isInner && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => handleNav(currentView === 'product' ? 'shop' : 'home')}
              className="flex items-center gap-2 py-3 text-sm font-medium text-[#0D9488] hover:text-[#0F766E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
      )}

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
