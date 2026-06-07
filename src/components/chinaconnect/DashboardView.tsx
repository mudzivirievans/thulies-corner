'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Package, Truck, CheckCircle, Wallet, TrendingUp,
  Clock, ArrowRight, ChevronRight, Bell, MessageCircle,
  CreditCard, ArrowUpRight, ArrowDownLeft, Eye, Star,
  BarChart3, ShoppingBag, FileText, Settings, Home
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { ViewType } from './Navigation'

interface DashboardViewProps {
  onNavigate: (view: ViewType) => void
}

const stats = [
  { icon: ShoppingBag, label: 'Total Orders', value: '24', change: '+3 this month', color: 'text-[#0D9488]', bgColor: 'bg-teal-50' },
  { icon: Truck, label: 'Active Shipments', value: '5', change: '2 arriving soon', color: 'text-amber-600', bgColor: 'bg-amber-50' },
  { icon: CheckCircle, label: 'Delivered', value: '19', change: '+2 this week', color: 'text-green-600', bgColor: 'bg-green-50' },
  { icon: Wallet, label: 'Account Balance', value: 'P 15,240', change: 'Available', color: 'text-violet-600', bgColor: 'bg-violet-50' },
]

const recentOrders = [
  { id: 'CN-2847', product: 'iPhone 17 Pro Max', status: 'In Transit', statusColor: 'bg-amber-50 text-amber-700', amount: 'P 15,600', date: '2 days ago' },
  { id: 'CN-2835', product: 'Office Chair x50', status: 'At Warehouse', statusColor: 'bg-blue-50 text-blue-700', amount: 'P 92,500', date: '5 days ago' },
  { id: 'CN-2821', product: 'Solar Panels x20', status: 'Delivered', statusColor: 'bg-green-50 text-green-700', amount: 'P 56,000', date: '3 weeks ago' },
  { id: 'CN-2810', product: 'Gaming Laptop', status: 'Quote Ready', statusColor: 'bg-purple-50 text-purple-700', amount: 'P 22,400', date: 'Yesterday' },
]

const notifications = [
  { type: 'shipment', message: 'Shipment CN-2847 has cleared customs in Guangzhou', time: '2h ago', icon: Truck },
  { type: 'payment', message: 'Payment of P 92,500 confirmed for order CN-2835', time: '5h ago', icon: CreditCard },
  { type: 'quote', message: 'Quote ready for Gaming Laptop - Order CN-2810', time: '1d ago', icon: FileText },
]

type DashTab = 'overview' | 'orders' | 'shipments' | 'wallet' | 'notifications'

export default function DashboardView({ onNavigate }: DashboardViewProps) {
  const [activeTab, setActiveTab] = useState<DashTab>('overview')

  const tabs: { id: DashTab; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'shipments', label: 'Shipments', icon: Truck },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Good Evening, Thabo</h1>
          <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your imports</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#0D9488] text-white shadow-md shadow-teal-500/20'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}

              {/* Return to the public marketing site */}
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all whitespace-nowrap lg:mt-1 lg:border-t lg:border-gray-100 lg:rounded-t-none"
              >
                <Home className="w-4 h-4" />
                Return to Website
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {activeTab === 'overview' && <OverviewTab onNavigate={onNavigate} />}
            {activeTab === 'orders' && <OrdersTab />}
            {activeTab === 'shipments' && <ShipmentsTab onNavigate={onNavigate} />}
            {activeTab === 'wallet' && <WalletTab />}
            {activeTab === 'notifications' && <NotificationsTab />}
          </div>
        </div>
      </div>
    </div>
  )
}

function OverviewTab({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  return (
    <div className="space-y-6">
      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            <p className="text-xs text-gray-400 mt-2">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900">Recent Orders</h3>
            <button className="text-sm text-[#0D9488] font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg">📦</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{order.product}</p>
                    <p className="text-xs text-gray-400">{order.id} · {order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{order.amount}</p>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <Badge variant="secondary" className="text-xs">{notifications.length}</Badge>
          </div>
          <div className="space-y-4">
            {notifications.map((notif, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <notif.icon className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 leading-snug">{notif.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Track Shipment', icon: Truck, view: 'track' as ViewType },
          { label: 'New Order', icon: ShoppingBag, view: 'shop' as ViewType },
          { label: 'View Quotes', icon: FileText, view: 'dashboard' as ViewType },
          { label: 'Get Support', icon: MessageCircle, view: 'contact' as ViewType },
        ].map((action) => (
          <button
            key={action.label}
            onClick={() => onNavigate(action.view)}
            className="bg-white rounded-2xl border border-gray-100 p-5 text-left hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-gray-200 transition-all group"
          >
            <action.icon className="w-5 h-5 text-[#0D9488] mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-semibold text-gray-900">{action.label}</p>
            <ArrowRight className="w-3 h-3 text-gray-400 mt-2 group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  )
}

function OrdersTab() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="font-semibold text-gray-900 mb-6">All Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Order ID</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Product</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Date</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Amount</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 pr-4 text-sm font-medium text-[#0D9488]">{order.id}</td>
                <td className="py-4 pr-4 text-sm text-gray-900">{order.product}</td>
                <td className="py-4 pr-4 text-sm text-gray-500">{order.date}</td>
                <td className="py-4 pr-4 text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${order.statusColor}`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ShipmentsTab({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  const shipments = [
    { id: 'CN-2847', product: 'iPhone 17 Pro Max', stage: 4, totalStages: 7, eta: 'Jun 20, 2026' },
    { id: 'CN-2835', product: 'Office Chair x50', stage: 2, totalStages: 7, eta: 'Jul 02, 2026' },
    { id: 'CN-2840', product: 'LED Monitors x10', stage: 5, totalStages: 7, eta: 'Jun 16, 2026' },
  ]

  return (
    <div className="space-y-4">
      {shipments.map((shipment) => (
        <div key={shipment.id} className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-semibold text-gray-900">{shipment.product}</p>
              <p className="text-sm text-gray-500">{shipment.id} · ETA: {shipment.eta}</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onNavigate('track')} className="rounded-lg">
              Track <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] h-2 rounded-full transition-all"
              style={{ width: `${(shipment.stage / shipment.totalStages) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Stage {shipment.stage} of {shipment.totalStages}</p>
        </div>
      ))}
    </div>
  )
}

function WalletTab() {
  const transactions = [
    { type: 'deposit', description: 'Bank Transfer Deposit', amount: '+P 20,000', date: '3 days ago', icon: ArrowDownLeft, color: 'text-green-600' },
    { type: 'payment', description: 'Order CN-2847 - iPhone 17', amount: '-P 15,600', date: '3 days ago', icon: ArrowUpRight, color: 'text-red-500' },
    { type: 'deposit', description: 'Orange Money Deposit', amount: '+P 5,000', date: '1 week ago', icon: ArrowDownLeft, color: 'text-green-600' },
    { type: 'refund', description: 'Refund - Order CN-2802', amount: '+P 2,400', date: '2 weeks ago', icon: ArrowDownLeft, color: 'text-green-600' },
  ]

  return (
    <div className="space-y-6">
      {/* Balance card */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-2xl p-8 text-white">
        <p className="text-white/60 text-sm font-medium">Available Balance</p>
        <p className="text-4xl font-bold mt-2">P 15,240.00</p>
        <div className="flex gap-3 mt-6">
          <Button className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-xl">
            <ArrowDownLeft className="w-4 h-4 mr-2" />
            Deposit
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-xl">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Withdraw
          </Button>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-5">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((tx, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${tx.type === 'deposit' || tx.type === 'refund' ? 'bg-green-50' : 'bg-red-50'} flex items-center justify-center`}>
                  <tx.icon className={`w-5 h-5 ${tx.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{tx.description}</p>
                  <p className="text-xs text-gray-400">{tx.date}</p>
                </div>
              </div>
              <span className={`text-sm font-semibold ${tx.color}`}>{tx.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NotificationsTab() {
  const allNotifications = [
    { icon: Truck, title: 'Shipment Update', message: 'CN-2847 has cleared customs in Guangzhou', time: '2 hours ago', unread: true },
    { icon: CreditCard, title: 'Payment Confirmed', message: 'Payment of P 92,500 confirmed for order CN-2835', time: '5 hours ago', unread: true },
    { icon: FileText, title: 'Quote Ready', message: 'Your quote for Gaming Laptop is ready for review', time: '1 day ago', unread: true },
    { icon: CheckCircle, title: 'Delivery Complete', message: 'Order CN-2821 has been delivered successfully', time: '2 days ago', unread: false },
    { icon: Bell, title: 'System Update', message: 'New shipping routes available for industrial equipment', time: '3 days ago', unread: false },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-900">All Notifications</h3>
        <button className="text-sm text-[#0D9488] font-medium">Mark all read</button>
      </div>
      <div className="space-y-2">
        {allNotifications.map((notif, i) => (
          <div key={i} className={`flex gap-4 p-4 rounded-xl transition-colors ${notif.unread ? 'bg-teal-50/50' : 'hover:bg-gray-50'}`}>
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
              <notif.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-gray-900">{notif.title}</p>
                {notif.unread && <div className="w-2 h-2 rounded-full bg-[#0D9488]" />}
              </div>
              <p className="text-sm text-gray-600 mt-0.5">{notif.message}</p>
              <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
