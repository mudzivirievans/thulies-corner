'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3, Users, Package, Truck, CreditCard, FileText,
  Settings, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight,
  ShoppingBag, Globe, Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type AdminTab = 'dashboard' | 'customers' | 'orders' | 'shipments' | 'analytics'

const adminStats = [
  { icon: DollarSign, label: 'Revenue', value: 'P 2.4M', change: '+12.5%', up: true, color: 'text-green-600', bgColor: 'bg-green-50' },
  { icon: ShoppingBag, label: 'Orders', value: '1,247', change: '+8.2%', up: true, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { icon: Users, label: 'Customers', value: '3,891', change: '+15.3%', up: true, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { icon: Truck, label: 'Active Shipments', value: '342', change: '-2.1%', up: false, color: 'text-amber-600', bgColor: 'bg-amber-50' },
]

const recentCustomers = [
  { name: 'Thabo Molefe', email: 'thabo@email.com', orders: 12, spent: 'P 45,600', status: 'Active' },
  { name: 'Pula Khama', email: 'pula@email.com', orders: 8, spent: 'P 28,200', status: 'Active' },
  { name: 'Mma Tiro', email: 'mma@email.com', orders: 24, spent: 'P 112,400', status: 'Premium' },
  { name: 'David Sento', email: 'david@email.com', orders: 3, spent: 'P 8,900', status: 'New' },
  { name: 'Lorato Bean', email: 'lorato@email.com', orders: 15, spent: 'P 67,300', status: 'Active' },
]

const topProducts = [
  { name: 'iPhone 17 Pro Max', category: 'Electronics', orders: 342, revenue: 'P 4.2M' },
  { name: 'Office Chair Executive', category: 'Office Supplies', orders: 256, revenue: 'P 473K' },
  { name: 'Solar Panel 400W', category: 'Solar Solutions', orders: 189, revenue: 'P 529K' },
  { name: 'Gaming Laptop RTX 5070', category: 'Gaming', orders: 234, revenue: 'P 5.2M' },
  { name: 'LED Monitor 27"', category: 'Electronics', orders: 145, revenue: 'P 319K' },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard')

  const tabs: { id: AdminTab; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'shipments', label: 'Shipments', icon: Truck },
    { id: 'analytics', label: 'Analytics', icon: Activity },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage operations and monitor performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-lg">
              <FileText className="w-4 h-4 mr-1.5" />
              Export
            </Button>
            <Button size="sm" className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-lg">
              <Settings className="w-4 h-4 mr-1.5" />
              Settings
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0D9488] text-white shadow-md shadow-teal-500/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0D9488]/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'dashboard' && <AdminOverview />}
        {activeTab === 'customers' && <AdminCustomers />}
        {activeTab === 'orders' && <AdminOrders />}
        {activeTab === 'shipments' && <AdminShipments />}
        {activeTab === 'analytics' && <AdminAnalytics />}
      </div>
    </div>
  )
}

function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-medium ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue chart placeholder */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-end gap-2 px-4">
            {[40, 55, 35, 60, 75, 50, 85, 65, 70, 90, 80, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-[#0D9488] to-[#14B8A6] transition-all hover:opacity-80"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[9px] text-gray-400">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-3">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-400 w-6">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-400">{product.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{product.revenue}</p>
                  <p className="text-xs text-gray-400">{product.orders} orders</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Growth chart */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Customer Growth</h3>
        <div className="h-32 flex items-end gap-1 px-2">
          {Array.from({ length: 30 }).map((_, i) => {
            const h = 20 + Math.random() * 80
            return (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-[#0D9488]/40 to-[#0D9488]/80 hover:from-[#0D9488]/60 hover:to-[#0D9488] transition-colors cursor-pointer"
                style={{ height: `${h}%` }}
              />
            )
          })}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>Last 30 days</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  )
}

function AdminCustomers() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">All Customers</h3>
        <input
          type="text"
          placeholder="Search customers..."
          className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Customer</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Email</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Orders</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Total Spent</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentCustomers.map((customer) => (
              <tr key={customer.email} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 pr-4 text-sm font-medium text-gray-900">{customer.name}</td>
                <td className="py-4 pr-4 text-sm text-gray-500">{customer.email}</td>
                <td className="py-4 pr-4 text-sm text-gray-700">{customer.orders}</td>
                <td className="py-4 pr-4 text-sm font-medium text-gray-900">{customer.spent}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                    customer.status === 'Premium' ? 'bg-amber-50 text-amber-700' :
                    customer.status === 'New' ? 'bg-green-50 text-green-700' :
                    'bg-gray-50 text-gray-700'
                  }`}>{customer.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function AdminOrders() {
  const orders = [
    { id: 'CN-2847', customer: 'Thabo Molefe', product: 'iPhone 17 Pro Max', amount: 'P 15,600', status: 'In Transit', date: 'Dec 15' },
    { id: 'CN-2835', customer: 'Mma Tiro', product: 'Office Chair x50', amount: 'P 92,500', status: 'Processing', date: 'Dec 10' },
    { id: 'CN-2840', customer: 'Pula Khama', product: 'LED Monitors x10', amount: 'P 22,000', status: 'Delivered', date: 'Dec 8' },
    { id: 'CN-2821', customer: 'Lorato Bean', product: 'Solar Panels x20', amount: 'P 56,000', status: 'Delivered', date: 'Nov 28' },
    { id: 'CN-2810', customer: 'David Sento', product: 'Gaming Laptop', amount: 'P 22,400', status: 'Quote Ready', date: 'Dec 18' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="font-semibold text-gray-900 mb-6">All Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Order ID</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Customer</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Product</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Amount</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3 pr-4">Date</th>
              <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 pr-4 text-sm font-medium text-[#0D9488]">{order.id}</td>
                <td className="py-4 pr-4 text-sm text-gray-900">{order.customer}</td>
                <td className="py-4 pr-4 text-sm text-gray-700">{order.product}</td>
                <td className="py-4 pr-4 text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="py-4 pr-4 text-sm text-gray-500">{order.date}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-50 text-green-700' :
                    order.status === 'In Transit' ? 'bg-amber-50 text-amber-700' :
                    order.status === 'Processing' ? 'bg-blue-50 text-blue-700' :
                    'bg-purple-50 text-purple-700'
                  }`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function AdminShipments() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
          <p className="text-2xl font-bold text-amber-600">142</p>
          <p className="text-sm text-gray-500">In Transit</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
          <p className="text-2xl font-bold text-blue-600">89</p>
          <p className="text-sm text-gray-500">At Warehouse</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
          <p className="text-2xl font-bold text-green-600">1,016</p>
          <p className="text-sm text-gray-500">Delivered</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Shipment Volume by Route</h3>
        <div className="space-y-3">
          {[
            { route: 'Guangzhou → Gaborone (Air)', volume: 68, pct: 68 },
            { route: 'Shenzhen → Gaborone (Air)', volume: 42, pct: 42 },
            { route: 'Shanghai → Gaborone (Sea)', volume: 35, pct: 35 },
            { route: 'Yiwu → Gaborone (Sea)', volume: 28, pct: 28 },
          ].map((item) => (
            <div key={item.route} className="p-3 rounded-xl bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">{item.route}</span>
                <span className="text-sm font-semibold text-gray-900">{item.volume} shipments</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-[#0D9488] h-1.5 rounded-full" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Category distribution */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Popular Categories</h3>
          <div className="space-y-3">
            {[
              { cat: 'Electronics', pct: 35, color: 'bg-teal-500' },
              { cat: 'Fashion', pct: 22, color: 'bg-pink-500' },
              { cat: 'Office Supplies', pct: 18, color: 'bg-amber-500' },
              { cat: 'Industrial Equipment', pct: 12, color: 'bg-gray-600' },
              { cat: 'Solar Solutions', pct: 8, color: 'bg-yellow-500' },
              { cat: 'Other', pct: 5, color: 'bg-gray-300' },
            ].map((item) => (
              <div key={item.cat} className="flex items-center gap-3">
                <span className="text-sm text-gray-700 w-36 flex-shrink-0">{item.cat}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-sm font-medium text-gray-900 w-10 text-right">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion metrics */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Conversion Metrics</h3>
          <div className="space-y-4">
            {[
              { label: 'Visit to Sign Up', value: '12.4%' },
              { label: 'Sign Up to First Order', value: '34.2%' },
              { label: 'Quote to Payment', value: '67.8%' },
              { label: 'Repeat Purchase Rate', value: '45.3%' },
              { label: 'Customer Retention (90d)', value: '72.1%' },
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <span className="text-sm text-gray-700">{metric.label}</span>
                <span className="text-sm font-bold text-[#0D9488]">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Insights */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Business Insights</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-green-50 border border-green-100">
            <p className="text-sm text-green-700 font-medium mb-1">Average Order Value</p>
            <p className="text-2xl font-bold text-green-800">P 8,450</p>
            <p className="text-xs text-green-600 mt-1">+15% from last month</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-sm text-blue-700 font-medium mb-1">Customer Lifetime Value</p>
            <p className="text-2xl font-bold text-blue-800">P 42,300</p>
            <p className="text-xs text-blue-600 mt-1">+22% from last quarter</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
            <p className="text-sm text-purple-700 font-medium mb-1">Avg. Delivery Time</p>
            <p className="text-2xl font-bold text-purple-800">14.2 days</p>
            <p className="text-xs text-purple-600 mt-1">-3 days from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
}
