'use client';

import Link from 'next/link';
import Head from 'next/head';
import { Zap, Shield, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Pulse - Schnelles Krypto-Trading & Bridging mit Telegram-Bots</title>
        <meta name="description" content="Erleben Sie schnelles Trading und Cross-Chain-Bridging mit Pulse Telegram-Bots auf Ethereum, Solana, BSC, Tron, Base, Avalanche, Arbitrum, Sonic und TON. Sicher, benutzerfreundlich und optimiert für DeFi." />
        <meta name="keywords" content="Telegram Trading Bots, Cross-Chain Bridging, Krypto Sniping, DeFi Trading, Ethereum, Solana, BSC, Tron, Anti-Rug, Copy Trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pulse - Telegram Krypto Trading & Bridging" />
        <meta property="og:description" content="Schnelles, sicheres Trading und Bridging mit Telegram-Bots auf mehreren Blockchains." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pulse-crypto.de" />
      </Head>

      {/* Navigation - Mobile Optimiert */}
      <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Pulse
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2">
                Startseite
              </Link>
              <Link href="/bridge" className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2">
                Bridging
              </Link>
              <Link href="/bots" className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2">
                Bots
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Startseite
                </Link>
                <Link 
                  href="/bridge" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bridging
                </Link>
                <Link 
                  href="/bots" 
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bots
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero-Bereich - Inspiriert von Maestro */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Revolutionieren Sie DeFi mit{' '}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Pulse
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Schnelles Trading, Sniping und Cross-Chain-Bridging direkt auf Telegram. Unterstützt Ethereum, Solana, BSC, Tron, Base, Avalanche, Arbitrum, Sonic und TON.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="/bots" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-h-[48px]"
            >
              Zu den Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Chains - Maestro-Layout inspiriert */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
            Unterstützte Blockchains
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {['Ethereum', 'Solana', 'BSC', 'Tron', 'Base', 'Avalanche', 'Arbitrum', 'Sonic', 'TON'].map((chain) => (
              <div key={chain} className="flex items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="text-sm sm:text-base font-semibold text-gray-900">{chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile-Bereich - Mobile Responsive */}
      <section className="py-16 sm:py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
            Warum Pulse wählen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Blitzschnelles Trading & Sniping</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Snipe neue Token mit Auto-Snipe in unter 0,25 Sekunden auf EVM und 0,15 Sekunden auf Solana. Handel in Echtzeit ohne Verzögerung.[](https://telegramtrading.net/maestro-sniper-bot-review/)
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Sicher mit Anti-Rug</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Schützen Sie Ihre Investitionen mit patentiertem Anti-Rug-Schutz und Anti-MEV-Technologie. Nicht-verwahrende Wallets mit AES-verschlüsselten Schlüsseln.[](https://www.maestrobots.com/)
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Cross-Chain-Bridging</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Übertragen Sie Vermögenswerte nahtlos zwischen Ethereum, Solana, BSC, Tron und mehr mit Houdini Swap für sichere, kostengünstige Transfers.[](https://www.coingecko.com/learn/what-is-maestro-bots-and-how-to-use-it)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produkte-Bereich - Maestro-Layout inspiriert */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
            Unsere Trading- und Bridging-Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Sniper Bot</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Automatisches Sniping neuer Token mit Funktionen wie Anti-Rug, Copy-Trading, Limit Orders und Multi-Wallet-Unterstützung (bis zu 10 Wallets).
              </p>
              <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside mb-4 leading-relaxed">
                <li>Auto-Snipe für Token-Launches</li>
                <li>Patentiertes Anti-Rug und Anti-MEV</li>
                <li>Copy-Trading von Whales</li>
                <li>1% Gebühr pro Trade</li>
              </ul>
              <Link href="/bots" className="text-blue-600 hover:text-blue-800 font-medium">Mehr erfahren</Link>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Wallet Bot</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Verfolgen Sie Ihre Wallets auf Ethereum, BSC und Arbitrum mit Echtzeit-Preisalarmen direkt in Telegram.
              </p>
              <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside mb-4 leading-relaxed">
                <li>Schnelle Preis-Benachrichtigungen</li>
                <li>Multi-Chain-Wallet-Tracking</li>
                <li>Benutzerfreundliche Oberfläche</li>
              </ul>
              <Link href="/bots" className="text-blue-600 hover:text-blue-800 font-medium">Mehr erfahren</Link>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Whale Bot</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                Erhalten Sie sofortige Benachrichtigungen über große Transaktionen von Whales, um profitable Gelegenheiten zu nutzen.
              </p>
              <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside mb-4 leading-relaxed">
                <li>Echtzeit-Whale-Tracking</li>
                <li>Automatisierte Markt-Einblicke</li>
                <li>Integriert in Telegram</li>
              </ul>
              <Link href="/bots" className="text-blue-600 hover:text-blue-800 font-medium">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Inhaltsbereich - Bridging und Sniping */}
      <section className="py-16 sm:py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
            Meistern Sie DeFi mit Pulse
          </h2>
          <div className="prose max-w-none text-gray-600 px-2">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Pulse bringt Ihnen die besten <strong>Telegram-Trading-Bots</strong> und <strong>Cross-Chain-Bridging-Tools</strong>, um den DeFi-Markt zu erobern. Unsere Plattform ist auf Geschwindigkeit, Sicherheit und Benutzerfreundlichkeit ausgelegt.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Schnelles Token-Sniping</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Mit unserem Sniper Bot können Sie neue Token-Launches auf Blockchains wie Ethereum, Solana und BSC in Echtzeit abfangen. Die Auto-Snipe-Funktion ermöglicht es, maximale Ausgaben festzulegen und automatisch zu handeln, während Anti-Rug- und Anti-MEV-Technologien Sie vor betrügerischen Projekten schützen.[](https://www.maestrobots.com/)
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Chain-Bridging</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Übertragen Sie Vermögenswerte mühelos zwischen Blockchains wie Ethereum, Solana, Tron, Base und mehr. Unser Bridging-Tool, unterstützt durch Houdini Swap, bietet sichere, kostengünstige Transfers mit minimalen Gebühren.[](https://pchojecki.medium.com/maestro-bot-on-telegram-for-crypto-trading-4aa1be28cd64)
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Copy-Trading & Markt-Einblicke</h3>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              Folgen Sie erfolgreichen Tradern mit unserer Copy-Trading-Funktion und erhalten Sie Echtzeit-Benachrichtigungen über Whale-Transaktionen. Unsere Bots scannen Telegram-Kanäle für Handelssignale, um Ihnen einen Vorsprung zu verschaffen.[](https://www.coingecko.com/learn/what-is-maestro-bots-and-how-to-use-it)
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-blue-700 font-medium mb-2">💡 Transparenz-Hinweis</p>
              <p className="text-sm text-blue-600">
                Wir können Provisionen für Transaktionen über unsere Referral-Links erhalten, ohne zusätzliche Kosten für Sie.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
              <p className="text-orange-700 font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-orange-600 leading-relaxed">
                Der Handel und das Bridging von Kryptowährungen sind mit hohen Risiken verbunden, einschließlich des möglichen Verlusts Ihrer gesamten Investition. Krypto-Preise sind volatil, und Smart Contracts können Schwachstellen aufweisen. Pulse bietet keine Finanzberatung. Führen Sie Ihre eigene Recherche durch und investieren Sie nur, was Sie sich leisten können zu verlieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Bereich */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                  Was sind Telegram-Trading-Bots?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Telegram-Trading-Bots sind automatisierte Tools, die es Ihnen ermöglichen, Kryptowährungen direkt in Telegram zu kaufen, zu verkaufen und zu snipe. Sie sind nicht-verwahrend, sodass Sie die Kontrolle über Ihre Schlüssel behalten.
                </p>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                  Wie funktioniert Cross-Chain-Bridging?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Bridging ermöglicht den Transfer von Vermögenswerten zwischen Blockchains wie Ethereum und Solana. Pulse nutzt Houdini Swap für sichere, kostengünstige Übertragungen mit minimalem Aufwand.
                </p>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                  Wie sicher sind Pulse-Bots?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Unsere Bots verwenden AES-verschlüsselte Schlüssel, Anti-Rug- und Anti-MEV-Technologien. Dennoch gibt es Risiken durch Marktvolatilität und Smart Contracts. Nutzen Sie separate Wallets mit begrenzten Mitteln für maximale Sicherheit.
                </p>
              </div>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                  Wie starte ich mit Pulse?
                </h3>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Besuchen Sie unseren Telegram-Kanal, richten Sie eine Wallet ein (neu oder bestehend) und zahlen Sie mindestens 0,1 ETH/SOL ein. Nutzen Sie einfache Chat-Befehle für Trading, Sniping oder Bridging.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call-to-Action Bereich */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-2">
            Starten Sie Ihre DeFi-Reise mit Pulse
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
            Schließen Sie sich der Community an und profitieren Sie von schnellem Trading, Sniping und Bridging auf mehreren Blockchains.
          </p>
          <div className="flex justify-center items-center px-4">
            <Link 
              href="/bots" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-h-[48px]"
            >
              Zu den Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Footer mit Warnhinweisen */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Pulse</h3>
            <p className="text-sm mb-4">Pulse &copy; 2025. Alle Rechte vorbehalten.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                Datenschutz
              </Link>
              <span className="hidden sm:inline text-gray-500">|</span>
              <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">
                Nutzungsbedingungen
              </Link>
              <span className="hidden sm:inline text-gray-500">|</span>
              <Link href="/impressum" className="text-sm hover:text-blue-400 transition-colors">
                Impressum
              </Link>
            </div>
            <div className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <strong>Risikohinweis:</strong> Kryptowährungsinvestitionen sind hochspekulativ und können zum Verlust Ihres gesamten Kapitals führen. Krypto-Preise sind volatil, und Smart Contracts können Schwachstellen enthalten. Pulse ist kein Finanzberater. Führen Sie Ihre eigene Recherche durch und investieren Sie nur, was Sie sich leisten können zu verlieren.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
