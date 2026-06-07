'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactView() {
  const [formState, setFormState] = useState({
    name: '', email: '', subject: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! Our team will get back to you within 24 hours.')
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Have a question about importing, need a custom quote, or want to learn more? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'support@thuliescorner.co.bw', sub: 'We respond within 24 hours' },
                { icon: Phone, label: 'Phone', value: '+267 74 791 379', sub: 'Mon-Fri, 8am-6pm CAT' },
                { icon: MapPin, label: 'Office', value: 'Gaborone, Botswana', sub: 'Plot 123, CBD' },
                { icon: Clock, label: 'Hours', value: 'Mon - Fri: 8:00 - 18:00', sub: 'Sat: 9:00 - 13:00' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-[#F8FAFC] hover:bg-teal-50/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social / Quick links */}
              <div className="pt-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Quick Links</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-lg text-xs">
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg text-xs">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Help Center
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-[#F8FAFC] rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Name</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState(s => ({ ...s, subject: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                  >
                    <option value="">Select a topic</option>
                    <option value="quote">Request a Quote</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="shipping">Shipping Inquiry</option>
                    <option value="payment">Payment Question</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl shadow-lg shadow-teal-500/20 py-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
