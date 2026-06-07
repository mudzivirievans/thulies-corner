'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, ArrowRight, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LoginViewProps {
  onNavigate: (view: string) => void
}

export default function LoginView({ onNavigate }: LoginViewProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0E17] flex items-center justify-center px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">
              Thulie's<span className="text-[#0D9488]"> Corner</span>
            </span>
          </div>

          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                !isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              Create Account
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard') }} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] pr-11"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-500">Remember me</span>
                </label>
                <button type="button" className="text-sm text-[#0D9488] font-medium">Forgot password?</button>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl py-6 shadow-lg shadow-teal-500/20"
              >
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard') }} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                    placeholder="Thabo"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                    placeholder="Molefe"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                  placeholder="+267 74 791 379"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488]"
                  placeholder="Create a password"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-xl py-6 shadow-lg shadow-teal-500/20"
              >
                Create Account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}

          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to Thulie's Corner&apos;s Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
