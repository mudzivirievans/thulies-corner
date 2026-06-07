'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, Bot, User, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const suggestions = [
  'How much will it cost to import 50 office chairs?',
  'Where is my shipment?',
  'How long does sea freight take?',
  'Can I source this product from China?',
]

const aiResponses: Record<string, string> = {
  'how much': 'Based on current rates, importing 50 office chairs from China would cost approximately:\n\n• Product cost: ~P 92,500 (P 1,850 each)\n• Sea freight: ~P 8,200\n• Import duties: ~P 5,400\n• Service charge: ~P 3,780\n\n**Total estimated: P 109,880**\n\nWould you like me to create a detailed quote for you?',
  'where is my shipment': 'Your shipment **CN-2847** (iPhone 17 Pro Max) is currently **In Transit**.\n\n📍 Current location: Departed Guangzhou via air freight\n🛫 Method: Air Freight\n📅 Estimated arrival: December 24, 2024\n⏱️ 6 days remaining\n\nWould you like to see the full tracking timeline?',
  'how long does sea freight': 'Sea freight from China to Botswana typically takes:\n\n🚢 **Standard Sea Freight**: 25-35 business days\n⚡ **Express Sea Freight**: 18-25 business days\n✈️ **Air Freight** (for comparison): 7-14 business days\n\nSea freight is more cost-effective for bulk orders. For a 20ft container, rates start at approximately P 15,000.',
  'can i source': 'Yes! ChinaConnect can source virtually any product from China. Here\'s how:\n\n1. **Paste a link** from Alibaba, 1688, Taobao, or AliExpress\n2. **Describe what you need** and we\'ll find suppliers\n3. **Get a quote** within 24-48 hours\n\nOur sourcing team works with verified suppliers across China to get you the best prices and quality.',
  'default': 'I can help you with:\n\n• Shipment status and tracking\n• Import cost estimation\n• Product sourcing guidance\n• Payment and billing questions\n• General customer support\n\nWhat would you like to know?',
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your ChinaConnect AI assistant. I can help with shipment tracking, import costs, product sourcing, and more. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const getAIResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()
    if (lower.includes('cost') || lower.includes('price') || lower.includes('how much')) return aiResponses['how much']
    if (lower.includes('where') || lower.includes('shipment') || lower.includes('tracking')) return aiResponses['where is my shipment']
    if (lower.includes('sea freight') || lower.includes('shipping time') || lower.includes('how long')) return aiResponses['how long does sea freight']
    if (lower.includes('source') || lower.includes('find') || lower.includes('can i')) return aiResponses['can i source']
    return aiResponses['default']
  }

  const handleSend = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(messageText),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-xl shadow-teal-500/30 flex items-center justify-center transition-colors group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">1</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: 'min(600px, calc(100vh - 120px))' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#0D9488] to-[#0F766E] text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">AI Import Assistant</p>
                  <p className="text-xs text-white/60">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimized(true)}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'assistant' ? 'bg-teal-50' : 'bg-gray-100'
                  }`}>
                    {msg.role === 'assistant' ? (
                      <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-gray-500" />
                    )}
                  </div>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'assistant'
                      ? 'bg-gray-50 text-gray-700 rounded-tl-md'
                      : 'bg-[#0D9488] text-white rounded-tr-md'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-5 pb-2">
                <p className="text-xs text-gray-400 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="px-3 py-1.5 rounded-lg bg-gray-50 text-xs text-gray-600 hover:bg-teal-50 hover:text-[#0D9488] transition-colors border border-gray-100"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-11 h-11 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] disabled:bg-gray-200 text-white disabled:text-gray-400 flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized indicator */}
      <AnimatePresence>
        {open && minimized && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setMinimized(false)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-xl shadow-teal-500/30 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI Assistant</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
