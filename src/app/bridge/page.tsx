'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowDown, ArrowRight, RefreshCw } from 'lucide-react'

const chains = [
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
  { id: 'bsc', name: 'BSC', symbol: 'BNB' },
  { id: 'base', name: 'Base', symbol: 'ETH' },
  { id: 'polygon', name: 'Polygon', symbol: 'MATIC' },
  { id: 'arbitrum', name: 'Arbitrum', symbol: 'ETH' },
]

const tokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'USDT', name: 'Tether' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'BNB', name: 'BNB' },
  { symbol: 'MATIC', name: 'Polygon' },
]

export default function BridgePage() {
  const [fromChain, setFromChain] = useState(chains[0])
  const [toChain, setToChain] = useState(chains[1])
  const [fromToken, setFromToken] = useState(tokens[0])
  const [toToken, setToToken] = useState(tokens[1])
  const [amount, setAmount] = useState('')

  const swapChains = () => {
    const temp = fromChain
    setFromChain(toChain)
    setToChain(temp)
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-high-contrast mb-6">
            Bridge Coins in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sekunden
            </span>
          </h1>
          <p className="text-xl text-medium-contrast">
            Wähle Chains & Token – die Ausführung erfolgt im Maestro-Bot (Houdini-Integration)
          </p>
        </div>

        {/* Bridge Interface */}
        <div className="bg-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
          {/* From Section */}
          <div className="space-y-4 mb-6">
            <label className="text-sm font-medium text-muted-foreground">Von</label>
            <div className="space-y-3">
              {/* Chain Selector */}
              <select
                value={fromChain.id}
                onChange={(e) => setFromChain(chains.find(c => c.id === e.target.value) || chains[0])}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name} ({chain.symbol})
                  </option>
                ))}
              </select>

              {/* Token and Amount */}
              <div className="flex gap-3">
                <select
                  value={fromToken.symbol}
                  onChange={(e) => setFromToken(tokens.find(t => t.symbol === e.target.value) || tokens[0])}
                  className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="0.0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={swapChains}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-border"
            >
              <RefreshCw size={20} className="text-foreground" />
            </button>
          </div>

          {/* To Section */}
          <div className="space-y-4 mb-8">
            <label className="text-sm font-medium text-muted-foreground">Nach</label>
            <div className="space-y-3">
              {/* Chain Selector */}
              <select
                value={toChain.id}
                onChange={(e) => setToChain(chains.find(c => c.id === e.target.value) || chains[1])}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name} ({chain.symbol})
                  </option>
                ))}
              </select>

              {/* Token Selector */}
              <select
                value={toToken.symbol}
                onChange={(e) => setToToken(tokens.find(t => t.symbol === e.target.value) || tokens[1])}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bridge Summary */}
          {amount && (
            <div className="bg-background/50 border border-border rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                <span>Geschätzte Dauer:</span>
                <span>2-5 Minuten</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                <span>Bridge-Gebühr:</span>
                <span>~0.05%</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Du erhältst ca.:</span>
                <span>{amount} {toToken.symbol}</span>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Link
            href="/api/go/maestro"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 glow-purple hover:glow-blue flex items-center justify-center gap-2"
          >
            Bridge via Maestro starten
            <ArrowRight size={20} />
          </Link>

          {/* Hinweis */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-blue-300 text-sm text-center">
              💡 Bridging powered by Houdini – Zugriff ausschließlich über Maestro-Bot
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-card/30 border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Optimale Routen
            </h3>
            <p className="text-muted-foreground text-sm">
              Houdini-Integration sorgt für die besten Wechselkurse und niedrigste Gebühren
              über alle unterstützten Chains.
            </p>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Sicher & schnell
            </h3>
            <p className="text-muted-foreground text-sm">
              Non-custodial Bridging direkt im Telegram-Bot. Keine Registrierung,
              keine KYC – einfach starten.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
