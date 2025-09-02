'use client';

import Link from 'next/link';
import Head from 'next/head';
import { Zap, Shield, Globe, Menu, X, Target, Bot, ArrowRightLeft } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] text-white font-sans tech-grid">
      <Head>
        <title>Pulse - Premium Telegram Sniper Bots & Trading Tools</title>
        <meta name="description" content="Professionelle Telegram Sniper Bots, Trading Bots und Bridging Tools für DeFi. Ultraschnelle Ausführung, maximale Sicherheit und präzise Technologie für automatisiertes Krypto-Trading." />
        <meta name="keywords" content="Telegram Trading Bots, Sniper Bots, Bridging Bots, DeFi Trading, Krypto Sniping, Automated Trading, Cross-Chain Bridging, Token Sniping, MEV Bots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pulse - Premium Telegram Trading Bots" />
        <meta property="og:description" content="Professionelle DeFi Trading und Bridging Lösungen direkt in Telegram" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pulse-defi.de" />
      </Head>

      <style jsx global>{`
        /* Advanced geometric background patterns inspired by Maestro */
        .pattern-grid {
          background-image: 
            linear-gradient(rgba(236, 72, 153, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
          background-size: 30px 30px, 30px 30px, 200px 200px, 300px 300px;
        }
        
        .pattern-dots {
          background-image: 
            radial-gradient(rgba(236, 72, 153, 0.15) 2px, transparent 2px),
            linear-gradient(45deg, rgba(236, 72, 153, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(139, 69, 19, 0.02) 25%, transparent 25%);
          background-size: 24px 24px, 60px 60px, 60px 60px;
          background-position: 0 0, 30px 30px, -30px 30px;
        }
        
        .pattern-cross {
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(236, 72, 153, 0.03) 8px, rgba(236, 72, 153, 0.03) 16px),
            repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(139, 69, 19, 0.03) 8px, rgba(139, 69, 19, 0.03) 16px),
            radial-gradient(ellipse at center, rgba(236, 72, 153, 0.05) 0%, transparent 70%);
          background-size: 32px 32px, 32px 32px, 400px 400px;
        }
        
        .pattern-circuit {
          background-image: 
            linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 25%),
            radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.2) 0%, transparent 25%),
            radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 30%);
          background-size: 40px 40px, 40px 40px, 180px 180px, 220px 220px, 160px 160px;
          background-position: 0 0, 0 0, 0 0, 0 0, 20px 20px;
        }
        
        .pattern-hexagon {
          background-image: 
            radial-gradient(circle at 50% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 0% 50%, rgba(139, 69, 19, 0.08) 0%, transparent 30%),
            radial-gradient(circle at 100% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 30%),
            linear-gradient(30deg, transparent 30%, rgba(236, 72, 153, 0.03) 30%, rgba(236, 72, 153, 0.03) 70%, transparent 70%);
          background-size: 120px 120px, 100px 100px, 100px 100px, 80px 80px;
        }
        
        /* Advanced animations and effects */
        .hover-float:hover {
          transform: translateY(-4px) scale(1.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glow-pink {
          box-shadow: 
            0 0 20px rgba(236, 72, 153, 0.4),
            0 0 40px rgba(236, 72, 153, 0.2),
            inset 0 0 20px rgba(236, 72, 153, 0.1);
        }
        
        .glow-pulse {
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes pulse-glow {
          from {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
          }
          to {
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), 0 0 50px rgba(236, 72, 153, 0.3);
          }
        }
        
        .gradient-border {
          position: relative;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(139, 69, 19, 0.3), rgba(236, 72, 153, 0.5));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }
        
        .tech-grid {
          background-image: 
            linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          position: relative;
        }
        
        .tech-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.2) 0%, transparent 50%);
          background-size: 300px 300px, 400px 400px;
          animation: float-bg 20s ease-in-out infinite;
        }
        
        @keyframes float-bg {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(1deg); }
          66% { transform: translate(-20px, 20px) rotate(-1deg); }
        }
        
        details summary {
          list-style: none;
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        
        /* Smooth scrolling and transitions */
        html {
          scroll-behavior: smooth;
        }
        
        * {
          transition: border-color 0.3s ease;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-[#0F0F23]/95 backdrop-blur-sm shadow-xl border-b border-[#EC4899]/20 fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-[#E5E7EB] hover:text-[#EC4899] transition-all duration-300 glow-pulse">
              Pulse
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg">
                Startseite
              </Link>
              <Link href="#sniper" className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg">
                Sniper Bots
              </Link>
              <Link href="#bridging" className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg">
                Bridging
              </Link>
              <Link href="#trading" className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg">
                Trading Bots
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-[#EC4899]/20 transition-all duration-300 gradient-border"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#EC4899]/20 py-4 bg-[#0F0F23]/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="#home" 
                  className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Startseite
                </Link>
                <Link 
                  href="#sniper" 
                  className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sniper Bots
                </Link>
                <Link 
                  href="#bridging" 
                  className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bridging
                </Link>
                <Link 
                  href="#trading" 
                  className="text-[#E5E7EB] hover:text-[#EC4899] font-medium transition-all duration-300 px-3 py-2 hover:bg-[#EC4899]/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trading Bots
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-br from-[#16213E]/50 to-[#0F0F23]/50 pattern-circuit">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/5 via-transparent to-[#8B4513]/5"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] mb-6 leading-tight">
            Professionelle{' '}
            <span className="bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#F97316] bg-clip-text text-transparent animate-pulse">
              Telegram Bots
            </span>
            {' '}für DeFi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#E2E8F0] mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Ultraschnelle Sniper Bots, sichere Bridging-Tools und automatisierte Trading-Lösungen direkt in Telegram. 
            Entwickelt für professionelle Trader und DeFi-Enthusiasten.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="#trading" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#E11D48] text-white px-8 sm:px-12 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-500 shadow-xl hover:shadow-2xl glow-pink hover-float flex items-center justify-center min-h-[56px] gradient-border"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A1A2E]/80 to-[#16213E]/80 pattern-hexagon">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-8 sm:mb-12 px-2 text-center">
            Warum Pulse wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-[#0F0F23]/60 backdrop-blur-sm border border-[#EC4899]/20 hover:border-[#EC4899]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover-float gradient-border">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F97316] flex items-center justify-center glow-pulse">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] mb-3">Blitzschnelle Sniper Bots</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Token-Launches in Millisekunden erkennen und kaufen. MEV-Schutz und Anti-Rug-Pull-Technologie inklusive.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#374151] border border-[#6B7280] hover:border-[#EC4899] transition-all duration-300 shadow-md hover:shadow-lg hover-float">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] mb-3">Maximale Sicherheit</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                End-to-End-Verschlüsselung, nicht-verwahrende Wallets und fortschrittliche Smart-Contract-Sicherheit.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#374151] border border-[#6B7280] hover:border-[#EC4899] transition-all duration-300 shadow-md hover:shadow-lg hover-float">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] flex items-center justify-center">
                <ArrowRightLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] mb-3">Multi-Chain Bridging</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Nahtlose Asset-Übertragung zwischen Ethereum, BSC, Polygon, Arbitrum und 20+ weiteren Chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sniper Bots Section */}
      <section id="sniper" className="py-16 sm:py-20 px-4 bg-[#374151] pattern-grid pattern-gray-700 pattern-opacity-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-6 sm:mb-8 px-2">
            Professionelle Sniper Bots für Token-Launches
          </h2>
          <div className="prose max-w-none text-[#D1D5DB] px-2">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Unsere <strong>Telegram Sniper Bots</strong> nutzen fortschrittliche Algorithmen für <strong>automatisches Token-Sniping</strong> bei neuen Launches. Mit Reaktionszeiten unter 50ms und intelligenter Gas-Optimierung sichern Sie sich die besten Einstiegspreise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">🎯 Token Launch Detection</h3>
                <ul className="text-sm text-[#D1D5DB] space-y-2">
                  <li>• Automatische Erkennung neuer Liquiditäts-Pools</li>
                  <li>• Smart Contract Analyse in Echtzeit</li>
                  <li>• Honeypot und Rug-Pull Erkennung</li>
                  <li>• Minimum Liquidity Checks</li>
                </ul>
              </div>
              
              <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">⚡ Blitzschnelle Ausführung</h3>
                <ul className="text-sm text-[#D1D5DB] space-y-2">
                  <li>• Sub-50ms Reaktionszeit</li>
                  <li>• Optimierte Gas-Strategien</li>
                  <li>• Priority Fee Management</li>
                  <li>• MEV-Protection integriert</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4 mt-8">Advanced Sniping Features</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Konfigurierbare <strong>Stop-Loss</strong> und <strong>Take-Profit</strong> Orders, Multi-Wallet-Support für maximale Effizienz und detaillierte Performance-Analytics für jeden Trade.
            </p>
          </div>
        </div>
      </section>

      {/* Bridging Section */}
      <section id="bridging" className="py-16 sm:py-20 px-4 bg-[#4B5563] pattern-dots pattern-gray-700 pattern-opacity-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-6 sm:mb-8 px-2">
            Cross-Chain Bridging Bots
          </h2>
          <div className="prose max-w-none text-[#D1D5DB] px-2">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Professionelle <strong>Bridging Bots</strong> für sichere und kosteneffiziente Asset-Übertragungen zwischen verschiedenen Blockchains. Unterstützt alle großen DeFi-Protokolle und Layer-2-Lösungen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#374151] border border-[#6B7280] rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-[#E5E7EB] mb-3">🌐 Multi-Chain</h3>
                <p className="text-sm text-[#D1D5DB]">
                  Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche und 15+ weitere Chains
                </p>
              </div>
              
              <div className="bg-[#374151] border border-[#6B7280] rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-[#E5E7EB] mb-3">💰 Niedrige Kosten</h3>
                <p className="text-sm text-[#D1D5DB]">
                  Automatische Route-Optimierung für minimale Bridge-Fees und Gas-Kosten
                </p>
              </div>
              
              <div className="bg-[#374151] border border-[#6B7280] rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-[#E5E7EB] mb-3">🔒 Sicherheit</h3>
                <p className="text-sm text-[#D1D5DB]">
                  Verifizierte Bridge-Protokolle und automatische Transaktions-Überwachung
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">Unterstützte Bridge-Protokolle</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Integration mit führenden Bridge-Anbietern wie <strong>Stargate</strong>, <strong>LayerZero</strong>, <strong>Multichain</strong> und <strong>Hop Protocol</strong> für maximale Liquidität und Sicherheit.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Bots Section */}
      <section id="trading" className="py-16 sm:py-20 px-4 bg-[#374151] pattern-cross pattern-gray-700 pattern-opacity-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-6 sm:mb-8 px-2">
            Automatisierte Trading Bots
          </h2>
          <div className="prose max-w-none text-[#D1D5DB] px-2">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Vollautomatisierte <strong>Trading Bots</strong> für kontinuierliches DeFi-Trading. Grid-Trading, DCA-Strategien, Arbitrage-Bots und Copy-Trading - alles steuerbar über Telegram.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">📊 Trading Strategien</h3>
                <ul className="text-sm text-[#D1D5DB] space-y-2">
                  <li>• Grid Trading mit konfigurierbaren Bereichen</li>
                  <li>• Dollar Cost Averaging (DCA)</li>
                  <li>• Mean Reversion Strategien</li>
                  <li>• Momentum & Trend Following</li>
                </ul>
              </div>
              
              <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">🤖 Arbitrage Bots</h3>
                <ul className="text-sm text-[#D1D5DB] space-y-2">
                  <li>• DEX-DEX Arbitrage Erkennung</li>
                  <li>• Flash Loan Integration</li>
                  <li>• Cross-Chain Arbitrage</li>
                  <li>• Liquidity Pool Monitoring</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-[#EC4899] font-medium mb-2">💡 Copy Trading</p>
              <p className="text-sm text-[#D1D5DB]">
                Folgen Sie erfolgreichen Tradern automatisch und replizieren deren Strategien mit konfigurierbaren Parametern und Risikomanagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 bg-[#4B5563] pattern-grid pattern-gray-700 pattern-opacity-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-8 sm:mb-12 px-2 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Wie funktionieren Telegram Sniper Bots?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Sniper Bots überwachen kontinuierlich neue Token-Launches auf DEXs wie Uniswap oder PancakeSwap. 
                  Sie analysieren Smart Contracts in Echtzeit und führen automatisch Käufe aus, sobald Liquidität hinzugefügt wird.
                </p>
              </div>
            </details>

            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Sind die Trading Bots sicher zu verwenden?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Ja, alle Bots nutzen nicht-verwahrende Technologie. Sie behalten die volle Kontrolle über Ihre Private Keys. 
                  Zusätzlich sind Anti-Rug-Pull und Honeypot-Erkennungssysteme integriert.
                </p>
              </div>
            </details>

            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Welche Blockchains werden unterstützt?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Ethereum, Binance Smart Chain, Polygon, Arbitrum, Optimism, Avalanche, Fantom und über 20 weitere EVM-kompatible Chains.
                </p>
              </div>
            </details>

            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Wie hoch sind die Gebühren?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Die Bot-Nutzung ist kostenlos. Nur erfolgreiche Trades werden mit einer Performance-Fee von 1-3% belastet. 
                  Keine versteckten Kosten oder Abonnement-Gebühren.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-[#EC4899] to-[#F472B6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-2">
            Starten Sie Ihr automatisiertes Trading
          </h2>
          <p className="text-base sm:text-lg text-[#E5E7EB] mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
            Treten Sie der Community von über 10.000 erfolgreichen Tradern bei und automatisieren Sie Ihr DeFi-Portfolio.
          </p>
          <div className="flex justify-center items-center px-4 space-x-4">
            <Link 
              href="https://t.me/pulse_official" 
              className="w-full sm:w-auto bg-[#374151] text-[#EC4899] hover:bg-[#4B5563] px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center min-h-[48px]"
            >
              Telegram Bot starten
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-[#D1D5DB] py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">Pulse</h3>
            <p className="text-sm mb-4">Pulse © 2025. Alle Rechte vorbehalten.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <Link href="/privacy" className="text-sm hover:text-[#EC4899] transition-colors">
                Datenschutz
              </Link>
              <span className="hidden sm:inline text-[#6B7280]">|</span>
              <Link href="/terms" className="text-sm hover:text-[#EC4899] transition-colors">
                AGB
              </Link>
              <span className="hidden sm:inline text-[#6B7280]">|</span>
              <Link href="/impressum" className="text-sm hover:text-[#EC4899] transition-colors">
                Impressum
              </Link>
            </div>
            
            <div className="bg-[#374151] border border-[#6B7280] rounded-lg p-4 sm:p-6 my-6 sm:my-8 max-w-3xl mx-auto">
              <p className="text-[#EC4899] font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                <strong>Wichtiger Hinweis:</strong> Der Handel mit Kryptowährungen und DeFi-Produkten ist hochriskant und kann zum Totalverlust des eingesetzten Kapitals führen. 
                Automatisierte Trading Bots garantieren keine Gewinne. Investieren Sie nur Geld, dessen Verlust Sie sich leisten können. 
                Diese Website stellt keine Anlageberatung dar. Führen Sie stets eigene Recherchen durch (DYOR).
              </p>
            </div>

            {/* SEO Content Section - Additional */}
            <div className="mt-8 text-center max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold text-[#E5E7EB] mb-4">Telegram Trading Bot Features</h4>
              <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                Pulse bietet professionelle <strong>Telegram Sniper Bots</strong> für automatisiertes Token-Sniping, 
                <strong>Cross-Chain Bridging Tools</strong> für sichere Asset-Transfers und vollautomatisierte 
                <strong>DeFi Trading Bots</strong> mit Grid-Trading, DCA-Strategien und Copy-Trading-Funktionen. 
                Unsere Bots unterstützen alle großen DEXs wie Uniswap, PancakeSwap, SushiSwap und über 50 weitere dezentrale Börsen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="text-left">
                  <h5 className="text-sm font-medium text-[#E5E7EB] mb-2">Unterstützte Features:</h5>
                  <ul className="text-xs text-[#6B7280] space-y-1">
                    <li>• MEV Protection & Front-Running Schutz</li>
                    <li>• Anti-Rug-Pull Smart Contract Analyse</li>
                    <li>• Honeypot Detection Algorithmus</li>
                    <li>• Limit Orders & Stop-Loss Management</li>
                    <li>• Multi-Wallet Portfolio Management</li>
                    <li>• Real-Time Performance Analytics</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h5 className="text-sm font-medium text-[#E5E7EB] mb-2">Blockchain Integration:</h5>
                  <ul className="text-xs text-[#6B7280] space-y-1">
                    <li>• Ethereum (ETH) - Uniswap V2/V3</li>
                    <li>• Binance Smart Chain (BSC) - PancakeSwap</li>
                    <li>• Polygon (MATIC) - QuickSwap</li>
                    <li>• Arbitrum One - SushiSwap</li>
                    <li>• Optimism - Velodrome</li>
                    <li>• Avalanche C-Chain - TraderJoe</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#374151] border border-[#6B7280] rounded-lg">
                <h5 className="text-sm font-medium text-[#E5E7EB] mb-2">Advanced Trading Strategien</h5>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Nutzen Sie professionelle Trading-Algorithmen wie <strong>Grid-Bot-Trading</strong> für Seitwärtsmärkte, 
                  <strong>DCA-Bots</strong> (Dollar Cost Averaging) für langfristige Akkumulation, <strong>Arbitrage-Bots</strong> 
                  für DEX-übergreifende Preisunterschiede und <strong>Copy-Trading</strong> zum Folgen erfolgreicher Wallet-Adressen. 
                  Alle Strategien sind vollständig anpassbar und können über einfache Telegram-Befehle gesteuert werden.
                </p>
              </div>
              
              <div className="mt-4 p-4 bg-[#374151] border border-[#6B7280] rounded-lg">
                <h5 className="text-sm font-medium text-[#E5E7EB] mb-2">Sicherheit & Non-Custodial Design</h5>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Alle Pulse Trading-Bots arbeiten non-custodial - Sie behalten jederzeit die volle Kontrolle über Ihre Private Keys. 
                  Unsere Bots verwenden fortschrittliche Verschlüsselungstechnologie und Smart-Contract-Validierung für maximale Sicherheit. 
                  Integrierte <strong>Slippage-Protection</strong>, <strong>Gas-Optimierung</strong> und <strong>Transaction-Simulation</strong> 
                  minimieren Risiken und maximieren Trading-Effizienz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
