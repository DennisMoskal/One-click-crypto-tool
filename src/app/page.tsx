'use client';

import Link from 'next/link';
import Head from 'next/head';
import { Zap, Shield, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#16213E] text-white">
      <Head>
        <title>Pulse - Schnelles DeFi Trading & Bridging</title>
        <meta name="description" content="Erleben Sie schnelles Trading und sicheres Bridging mit Pulse Telegram-Bots. Optimierte Tools für DeFi auf mehreren Blockchains." />
        <meta name="keywords" content="Telegram Trading Bots, DeFi Bridging, Krypto Sniping, DeFi Tools, Secure Trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pulse - DeFi Trading & Bridging" />
        <meta property="og:description" content="Schnelles, sicheres Trading und Bridging mit Pulse Telegram-Bots." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pulse-defi.de" />
      </Head>

      {/* Navigation - Mobile Optimiert */}
      <nav className="bg-[#0F3460] shadow-md fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#E94560] transition-colors">
              Pulse
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-[#E94560] font-medium transition-colors px-3 py-2">
                Startseite
              </Link>
              <Link href="/bridge" className="text-gray-300 hover:text-[#E94560] font-medium transition-colors px-3 py-2">
                Bridging
              </Link>
              <Link href="/bots" className="text-gray-300 hover:text-[#E94560] font-medium transition-colors px-3 py-2">
                Bots
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-[#1A1A2E] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#1A1A2E] py-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-[#E94560] font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Startseite
                </Link>
                <Link 
                  href="/bridge" 
                  className="text-gray-300 hover:text-[#E94560] font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bridging
                </Link>
                <Link 
                  href="/bots" 
                  className="text-gray-300 hover:text-[#E94560] font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bots
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero-Bereich - Stil inspiriert von Maestro */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#16213E]">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            DeFi neu definieren mit{' '}
            <span className="bg-gradient-to-r from-[#E94560] to-[#FF6F61] bg-clip-text text-transparent">
              Pulse
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Erleben Sie schnelles Trading, sicheres Sniping und nahtloses Bridging direkt in Telegram. Ihre DeFi-Reise beginnt hier.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="/bots" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#E94560] to-[#FF6F61] hover:from-[#D94157] hover:to-[#E65B53] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-h-[48px]"
            >
              Zu den Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile-Bereich - Stil angepasst */}
      <section className="py-16 sm:py-20 px-4 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 px-2 text-center">
            Warum Pulse wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#0F3460] border border-[#2E2E48] hover:border-[#E94560] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E94560] to-[#FF6F61] flex items-center justify-center">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Blitzschnelles Trading</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Führen Sie Trades und Snipings in unter einer Sekunde durch mit unserer optimierten Technologie.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#0F3460] border border-[#2E2E48] hover:border-[#E94560] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E94560] to-[#FF6F61] flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Sichere Plattform</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Schutz durch Anti-Rug-Technologie und nicht-verwahrende Wallets für maximale Sicherheit.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#0F3460] border border-[#2E2E48] hover:border-[#E94560] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E94560] to-[#FF6F61] flex items-center justify-center">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Nahtloses Bridging</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Verbinden Sie Blockchains sicher und kostengünstig mit unseren Bridging-Tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Inhaltsbereich - Bridging und Sniping */}
      <section className="py-16 sm:py-20 px-4 bg-[#16213E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 px-2">
            DeFi meistern mit Pulse
          </h2>
          <div className="prose max-w-none text-gray-300 px-2">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Pulse bietet <strong>Telegram-Trading-Bots</strong> und <strong>Cross-Chain-Bridging-Tools</strong> für den modernen DeFi-Händler. Unsere Plattform kombiniert Geschwindigkeit, Sicherheit und Benutzerfreundlichkeit.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4 mt-8">Schnelles Token-Sniping</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Nutzen Sie unseren Sniper Bot, um neue Token-Launches sofort abzufangen. Mit Auto-Snipe und Anti-Rug-Schutz bleiben Sie vor Betrug sicher.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Cross-Chain-Bridging</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Übertragen Sie Vermögenswerte zwischen Blockchains mit minimalen Gebühren und maximaler Sicherheit durch unsere Bridging-Technologie.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Einfacher Einstieg</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Ob Anfänger oder Profi – unsere Tools bieten intuitive Bedienung und fortschrittliche Funktionen wie Copy-Trading und Echtzeit-Alarme.
            </p>
            
            <div className="bg-[#2E2E48] border border-[#4A4A6A] rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-[#E94560] font-medium mb-2">💡 Hinweis</p>
              <p className="text-sm text-gray-400">
                Wir können Provisionen über Referral-Links erhalten, ohne Kosten für Sie.
              </p>
            </div>

            <div className="bg-[#2E2E48] border border-[#4A4A6A] rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-[#E94560] font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Kryptowährungen und DeFi sind mit hohen Risiken verbunden, einschließlich Verlusts Ihres Kapitals. Preise sind volatil, und Smart Contracts können Fehler enthalten. Pulse bietet keine Finanzberatung. Investieren Sie nur, was Sie verlieren können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Bereich */}
      <section className="py-16 sm:py-20 px-4 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 px-2 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <details className="bg-[#0F3460] border border-[#2E2E48] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#1A1A2E] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-white inline">
                  Was sind Telegram-Trading-Bots?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Telegram-Trading-Bots ermöglichen Krypto-Trading direkt in Telegram. Sie sind nicht-verwahrend und bieten Sniping, Trading und mehr.
                </p>
              </div>
            </details>

            <details className="bg-[#0F3460] border border-[#2E2E48] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#1A1A2E] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-white inline">
                  Wie funktioniert Bridging?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Bridging überträgt Vermögenswerte zwischen Blockchains sicher und kostengünstig mit unserer fortschrittlichen Technologie.
                </p>
              </div>
            </details>

            <details className="bg-[#0F3460] border border-[#2E2E48] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#1A1A2E] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-white inline">
                  Ist Pulse sicher?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Ja, mit Anti-Rug- und nicht-verwahrenden Funktionen. Dennoch tragen Sie das Risiko von Marktvolatilität.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Bereich */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-[#E94560] to-[#FF6F61]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-2">
            Starten Sie jetzt mit Pulse
          </h2>
          <p className="text-base sm:text-lg text-gray-100 mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
            Entdecken Sie die Zukunft des DeFi-Tradings und Bridgings mit unserer Community.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="/bots" 
              className="w-full sm:w-auto bg-white text-[#E94560] hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-h-[48px]"
            >
              Zu den Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Footer mit Warnhinweisen */}
      <footer className="bg-[#0F3460] text-gray-400 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Pulse</h3>
            <p className="text-sm mb-4">Pulse &copy; 2025. Alle Rechte vorbehalten.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <Link href="/privacy" className="text-sm hover:text-[#E94560] transition-colors">
                Datenschutz
              </Link>
              <span className="hidden sm:inline text-gray-500">|</span>
              <Link href="/terms" className="text-sm hover:text-[#E94560] transition-colors">
                Nutzungsbedingungen
              </Link>
              <span className="hidden sm:inline text-gray-500">|</span>
              <Link href="/impressum" className="text-sm hover:text-[#E94560] transition-colors">
                Impressum
              </Link>
            </div>
            <div className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
              <strong>Risikohinweis:</strong> DeFi und Kryptowährungen sind spekulativ und können zu Verlusten führen. Führen Sie Ihre eigene Forschung durch.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
