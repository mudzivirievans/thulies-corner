'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Smartphone, Briefcase, Sun } from 'lucide-react'
import Navigation, { ViewType } from '@/components/chinaconnect/Navigation'
import HeroSection from '@/components/chinaconnect/HeroSection'
import SearchSection from '@/components/chinaconnect/SearchSection'
import CategoriesSection from '@/components/chinaconnect/CategoriesSection'
import HowItWorks from '@/components/chinaconnect/HowItWorks'
import TrackingSection from '@/components/chinaconnect/TrackingSection'
import MeetThulieSection from '@/components/chinaconnect/MeetThulieSection'
import ShopView from '@/components/chinaconnect/ShopView'
import ProductDetail from '@/components/chinaconnect/ProductDetail'
import DashboardView from '@/components/chinaconnect/DashboardView'
import ShipmentTracking from '@/components/chinaconnect/ShipmentTracking'
import AIAssistant from '@/components/chinaconnect/AIAssistant'
import ServicesView from '@/components/chinaconnect/ServicesView'
import PricingView from '@/components/chinaconnect/PricingView'
import AboutView from '@/components/chinaconnect/AboutView'
import ContactView from '@/components/chinaconnect/ContactView'
import LoginView from '@/components/chinaconnect/LoginView'
import AdminDashboard from '@/components/chinaconnect/AdminDashboard'
import Footer from '@/components/chinaconnect/Footer'

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('home')

  const handleNavigate = (view: string) => {
    setCurrentView(view as ViewType)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* Inner pages that need extra top padding for the back bar */
  const needsBackBar = ['product'].includes(currentView)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation — on EVERY page */}
      <Navigation currentView={currentView} onNavigate={handleNavigate} />

      {/* Main content */}
      <main className={`flex-1 ${needsBackBar ? 'pt-[112px]' : ''}`}>
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection onNavigate={handleNavigate} />
              <SearchSection />
              <MeetThulieSection />
              <CategoriesSection onNavigate={handleNavigate} />
              <TrackingSection />
              <HowItWorks />

              {/* Testimonials */}
              <section className="pt-24 pb-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                  <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Businesses Across Botswana</h2>
                    <p className="text-gray-500 text-lg">From small shops to large enterprises, everyone imports with Thulie&apos;s Corner</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: 'Thabo M.', role: 'Electronics Retailer', icon: Smartphone, quote: "Thulie's Corner made importing phones and gadgets so easy. I used to spend weeks dealing with suppliers. Now it takes minutes.", rating: 5 },
                      { name: 'Mma T.', role: 'Office Manager', icon: Briefcase, quote: "We furnish our entire office through Thulie's Corner. The transparent pricing and real-time tracking give me peace of mind.", rating: 5 },
                      { name: 'David S.', role: 'Solar Installer', icon: Sun, quote: "Sourcing solar panels from China was always complicated. Thulie's Corner handles everything — I just place the order and track the shipment.", rating: 5 },
                    ].map((testimonial, i) => (
                      <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 flex flex-col"
                      >
                        <div className="flex items-center gap-0.5 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, j) => (
                            <svg key={j} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] flex-shrink-0">
                            <testimonial.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="pt-32 pb-28 bg-[#F8FAFC]">
                <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Ready to Start Importing?
                    </h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                      Create your free account and start importing from China today. Track every shipment, pay securely, and manage all your imports from one dashboard.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button
                        onClick={() => handleNavigate('login')}
                        className="px-8 py-4 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl font-semibold shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)] hover:shadow-[0_12px_34px_-12px_rgba(15,23,42,0.22)] transition-all"
                      >
                        Create Free Account
                      </button>
                      <button
                        onClick={() => handleNavigate('shop')}
                        className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold border border-gray-200 transition-colors"
                      >
                        Browse Products
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>

              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'shop' && (
            <motion.div key="shop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ShopView onNavigate={handleNavigate} />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'product' && (
            <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ProductDetail onNavigate={handleNavigate} />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'services' && (
            <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ServicesView onNavigate={handleNavigate} />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'track' && (
            <motion.div key="track" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ShipmentTracking onNavigate={handleNavigate} />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'pricing' && (
            <motion.div key="pricing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <PricingView onNavigate={handleNavigate} />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <AboutView onNavigate={handleNavigate} />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ContactView />
              <Footer onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <DashboardView onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'admin' && (
            <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <AdminDashboard />
            </motion.div>
          )}

          {currentView === 'login' && (
            <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <LoginView onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* AI Assistant — always available */}
      <AIAssistant />
    </div>
  )
}
