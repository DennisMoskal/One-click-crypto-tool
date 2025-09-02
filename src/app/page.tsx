'use client';

import Link from 'next/link';
import Head from 'next/head';
import { Zap, Shield, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#4B5563] text-white font-sans pattern-grid pattern-gray-800 pattern-opacity-5">
      <Head>
        <title>Pulse - Präzises DeFi Trading & Bridging</title>
        <meta name="description" content="Erleben Sie präzises Trading und sicheres Bridging mit Pulse Telegram-Bots. Hochwertige DeFi-Lösungen für Profis." />
        <meta name="keywords" content="Telegram Trading Bots, DeFi Bridging, Krypto Sniping, Präzises Trading, Hochsicherheit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pulse - Präzises DeFi Trading" />
        <meta property="og:description" content="Hochwertiges Trading und Bridging mit Pulse Telegram-Bots." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pulse-defi.de" />
      </Head>

      {/* Navigation - Technisch und Hochwertig */}
      <nav className="bg-[#1F2937] shadow-lg border-b border-[#6B7280] fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-[#D1D5DB] hover:text-[#EC4899] transition-colors">
              Pulse
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-[#D1D5DB] hover:text-[#EC4899] font-medium transition-colors px-3 py-2">
                Startseite
              </Link>
              <Link href="/bridge" className="text-[#D1D5DB] hover:text-[#EC4899] font-medium transition-colors px-3 py-2">
                Bridging
              </Link>
              <Link href="/bots" className="text-[#D1D5DB] hover:text-[#EC4899] font-medium transition-colors px-3 py-2">
                Bots
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-[#374151] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#6B7280] py-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-[#D1D5DB] hover:text-[#EC4899] font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Startseite
                </Link>
                <Link 
                  href="/bridge" 
                  className="text-[#D1D5DB] hover:text-[#EC4899] font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bridging
                </Link>
                <Link 
                  href="/bots" 
                  className="text-[#D1D5DB] hover:text-[#EC4899] font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bots
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero-Bereich - Technisch und Hochwertig */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 bg-[#374151] pattern-dots pattern-gray-700 pattern-opacity-10">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E5E7EB] mb-6 leading-tight">
            Präzision trifft DeFi mit{' '}
            <span className="bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#F9A8D4] bg-clip-text text-transparent">
              Pulse
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#D1D5DB] mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Hochwertige Trading-, Sniping- und Bridging-Lösungen direkt in Telegram. Entwickelt für Profis und Sicherheitsbewusste.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="/bots" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#EC4899] to-[#F472B6] hover:from-[#DB2777] hover:to-[#E11D48] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center min-h-[48px]"
            >
              Zu den Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile-Bereich - Technisch und Hochwertig */}
      <section className="py-16 sm:py-20 px-4 bg-[#4B5563] pattern-cross pattern-gray-700 pattern-opacity-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-8 sm:mb-12 px-2 text-center">
            Warum Pulse wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#374151] border border-[#6B7280] hover:border-[#EC4899] transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] flex items-center justify-center">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] mb-3">Ultraschnelles Trading</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Ausführung von Trades in unter 0,1 Sekunden mit optimierter Blockchain-Integration.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#374151] border border-[#6B7280] hover:border-[#EC4899] transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] mb-3">Hochsichere Technologie</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Anti-Rug-Schutz und AES-verschlüsselte Wallets für maximale Sicherheit.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#374151] border border-[#6B7280] hover:border-[#EC4899] transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F9A8D4] flex items-center justify-center">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] mb-3">Erweitertes Bridging</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Nahtlose Vermögensübertragung mit minimalen Kosten über mehrere Blockchains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Inhaltsbereich - Technisch und Hochwertig */}
      <section className="py-16 sm:py-20 px-4 bg-[#374151] pattern-grid pattern-gray-700 pattern-opacity-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-6 sm:mb-8 px-2">
            DeFi-Perfektion mit Pulse
          </h2>
          <div className="prose max-w-none text-[#D1D5DB] px-2">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Pulse liefert <strong>Telegram-Trading-Bots</strong> und <strong>Cross-Chain-Bridging-Tools</strong> mit präziser Technologie für den professionellen DeFi-Markt.
            </p>
            
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4 mt-8">Präzises Token-Sniping</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Snipe Token mit millisekunden-genauer Geschwindigkeit und Anti-Rug-Schutz für sichere Investments.
            </p>
            
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">Fortschrittliches Bridging</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Übertragen Sie Vermögenswerte mit hochentwickelter Sicherheit und minimalen Gebühren.
            </p>
            
            <h3 className="text-xl font-semibold text-[#E5E7EB] mb-4">Profi-Tools</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Nutzen Sie Copy-Trading, Echtzeit-Analysen und Multi-Wallet-Management für optimale Ergebnisse.
            </p>
            
            <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-[#EC4899] font-medium mb-2">💡 Hinweis</p>
              <p className="text-sm text-[#D1D5DB]">
                Provisionen über Referral-Links möglich, ohne Zusatzkosten für Sie.
              </p>
            </div>

            <div className="bg-[#4B5563] border border-[#6B7280] rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-[#EC4899] font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                DeFi und Kryptowährungen bergen hohe Risiken, einschließlich Kapitalverlust. Pulse ist kein Finanzberater. Investieren Sie verantwortungsvoll.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Bereich - Technisch und Hochwertig */}
      <section className="py-16 sm:py-20 px-4 bg-[#4B5563] pattern-cross pattern-gray-700 pattern-opacity-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-8 sm:mb-12 px-2 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Was sind Telegram-Trading-Bots?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Automatisierte Tools für Krypto-Trading in Telegram, nicht-verwahrend und präzise.
                </p>
              </div>
            </details>

            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Wie funktioniert Bridging?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Sichere Vermögensübertragung zwischen Blockchains mit optimierter Technologie.
                </p>
              </div>
            </details>

            <details className="bg-[#374151] border border-[#6B7280] rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-[#4B5563] transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB] inline">
                  Ist Pulse sicher?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Ja, mit AES-Verschlüsselung und Anti-Rug-Schutz. Markt- und Smart-Contract-Risiken bleiben.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Bereich - Technisch und Hochwertig */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-[#EC4899] to-[#F472B6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-2">
            Starten Sie Ihre DeFi-Journey
          </h2>
          <p className="text-base sm:text-lg text-[#E5E7EB] mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
            Treten Sie ein in die Welt präzisen Tradings und sicheren Bridgings mit Pulse.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="/bots" 
              className="w-full sm:w-auto bg-[#374151] text-[#EC4899] hover:bg-[#4B5563] px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center min-h-[48px]"
            >
              Zu den Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Footer mit Warnhinweisen */}
      <footer className="bg-[#1F2937] text-[#D1D5DB] py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">Pulse</h3>
            <p className="text-sm mb-4">Pulse &copy; 2025. Alle Rechte vorbehalten.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <Link href="/privacy" className="text-sm hover:text-[#EC4899] transition-colors">
                Datenschutz
              </Link>
              <span className="hidden sm:inline text-[#6B7280]">|</span>
              <Link href="/terms" className="text-sm hover:text-[#EC4899] transition-colors">
                Nutzungsbedingungen
              </Link>
              <span className="hidden sm:inline text-[#6B7280]">|</span>
              <Link href="/impressum" className="text-sm hover:text-[#EC4899] transition-colors">
                Impressum
              </Link>
            </div>
            <div className="text-xs text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              <strong>Risikohinweis:</strong> DeFi-Investitionen sind spekulativ und können zu Verlusten führen. Führen Sie eigene Recherchen durch.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
