'use client';

import Link from 'next/link';
import Head from 'next/head';
import { ArrowRight, Zap, Shield, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>CryptoPulse - Telegram Krypto Trading Bots & Cross-Chain Bridging</title>
        <meta name="description" content="Handeln und überbrücken Sie Kryptowährungen mühelos mit Telegram-Bots. Schnell, sicher und anfängerfreundlich auf Ethereum, Solana, BSC und mehr." />
        <meta name="keywords" content="Telegram Krypto Bots, Cross-Chain Bridging, Krypto Trading, Ethereum, Solana, BSC, DeFi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="CryptoPulse - Telegram Krypto Trading Bots" />
        <meta property="og:description" content="Handeln und überbrücken Sie Kryptowährungen mühelos mit Telegram-Bots" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cryptopulse.de" />
      </Head>
        {/* Navigation - Mobile Optimiert */}
        <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
                CryptoPulse
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2">
                  Startseite
                </Link>
                <Link href="/bridge" className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2">
                  Bridging
                </Link>
                <Link href="/bots" className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2">
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
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Startseite
                  </Link>
                  <Link 
                    href="/bridge" 
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bridging
                  </Link>
                  <Link 
                    href="/bots" 
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bots
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero-Bereich - Mobile Optimiert */}
        <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-b from-white to-gray-100">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Krypto meistern mit{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                CryptoPulse
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Handeln und überbrücken Sie Kryptowährungen mühelos mit unseren ausgewählten Telegram-Bots. Schnell, sicher und anfängerfreundlich – starten Sie in Sekunden mit CryptoPulse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link 
                href="/bridge" 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-h-[48px]"
              >
                Jetzt Bridging starten
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/bots" 
                className="w-full sm:w-auto border-2 border-gray-300 hover:border-purple-500 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-gray-100 flex items-center justify-center min-h-[48px]"
              >
                Bots entdecken
              </Link>
            </div>
          </div>
        </section>

        {/* Vorteile-Bereich - Mobile Responsive */}
        <section className="py-16 sm:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
              Warum CryptoPulse wählen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Blitzschnell</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Handeln und überbrücken Sie in Sekunden mit Telegram-Bots. Kein kompliziertes Setup – einfach verbinden und loslegen.
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Sicher & Nicht-Verwahrend</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Behalten Sie die Kontrolle über Ihre Schlüssel. Unsere Bots bieten MEV-Schutz und sicheres, nicht-verwahrendes Trading.
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Multichain-Unterstützung</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Handeln und überbrücken Sie nahtlos auf Ethereum, Solana, BSC, Base, TON und mehr.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO-Inhaltsbereich - Verbesserte Struktur */}
        <section className="py-16 sm:py-20 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-2">
              Ihr Tor zum Krypto-Handel und Bridging
            </h2>
            <div className="prose max-w-none text-gray-600 px-2">
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                CryptoPulse ist Ihre zentrale Plattform für <strong>Telegram-Krypto-Trading-Bots</strong> und <strong>Cross-Chain-Bridging</strong>. Egal, ob Sie neu im Krypto-Bereich oder ein erfahrener Trader sind, unsere ausgewählten Tools machen Trading und Bridging schnell, sicher und zugänglich direkt in Telegram.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Telegram-Trading-Bots</h3>
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                Unsere <strong>Telegram-Bots</strong> ermöglichen Handel auf großen Blockchains wie Solana, Ethereum und BSC mit Funktionen wie Auto-Sniping, Copy-Trading und Echtzeit-Markteinblicken.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Chain-Bridging</h3>
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                Für <strong>Bridging</strong> arbeiten wir mit dem Maestro-Bot zusammen, der Houdini Swap für sichere, kostengünstige Cross-Chain-Übertragungen nutzt.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Für alle Trader-Level</h3>
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                Anfänger profitieren von leicht verständlichen Anleitungen, während fortgeschrittene Trader Tools wie Anti-MEV-Schutz, Rug-Pull-Filter und Multi-Wallet-Management nutzen können. Alle Bots sind nicht-verwahrend, sodass Sie die volle Kontrolle über Ihre Gelder behalten.
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
                  Der Handel und das Bridging von Kryptowährungen sind mit erheblichen Risiken verbunden, einschließlich des möglichen Verlusts Ihrer gesamten Investition. Die Preise sind stark volatil, und Smart Contracts können Schwachstellen enthalten. CryptoPulse bietet keine Finanzberatung. Führen Sie stets Ihre eigene Recherche durch und investieren Sie nur, was Sie sich leisten können zu verlieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ-Bereich - Mobile Optimiert */}
        <section className="py-16 sm:py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                    Was sind Telegram-Krypto-Bots?
                  </h3>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Telegram-Krypto-Bots sind automatisierte Tools innerhalb der Telegram-App, mit denen Sie Kryptowährungen kaufen, verkaufen und überbrücken können, ohne externe Plattformen zu nutzen. Sie sind nicht-verwahrend, was bedeutet, dass Sie die Kontrolle über Ihre privaten Schlüssel behalten.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                    Wie funktioniert Bridging?
                  </h3>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Bridging überträgt Vermögenswerte zwischen Blockchains, wie z. B. von Ethereum zu Solana. CryptoPulse nutzt den Maestro-Bot mit Houdini Swap für sichere, effiziente Übertragungen mit niedrigen Gebühren auf unterstützten Chains.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                    Ist die Nutzung sicher?
                  </h3>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Unsere empfohlenen Bots sind nicht-verwahrend und bieten MEV-Schutz sowie Rug-Pull-Filter. Dennoch gibt es Risiken wie Marktvolatilität und Smart-Contract-Schwachstellen. Investieren Sie verantwortungsvoll und führen Sie gründliche Recherchen durch.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 inline">
                    Wie starte ich mit einem Bot?
                  </h3>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Besuchen Sie den Telegram-Kanal des Bots, folgen Sie den Einrichtungsanweisungen und verbinden Sie eine Wallet (neu oder bestehend). Zahlen Sie mindestens 0,1 ETH oder Äquivalent ein, dann nutzen Sie Chat-Befehle zum Handeln oder Bridgen. Unsere Anleitungen machen es für Anfänger einfach.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Call-to-Action Bereich */}
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-purple-500 to-blue-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-2">
              Bereit, mit CryptoPulse zu starten?
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
              Schließen Sie sich Tausenden von Tradern an, die bereits von schnellem, sicherem Krypto-Trading und Bridging profitieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link 
                href="/bridge" 
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-h-[48px]"
              >
                Bridging starten
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/bots" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center min-h-[48px]"
              >
                Bots ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Footer - Mobile Optimiert */}
        <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">CryptoPulse</h3>
              <p className="text-sm mb-4">CryptoPulse &copy; 2025. Alle Rechte vorbehalten.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                <Link href="/privacy" className="text-sm hover:text-purple-400 transition-colors">
                  Datenschutz
                </Link>
                <span className="hidden sm:inline text-gray-500">|</span>
                <Link href="/terms" className="text-sm hover:text-purple-400 transition-colors">
                  Nutzungsbedingungen
                </Link>
                <span className="hidden sm:inline text-gray-500">|</span>
                <Link href="/impressum" className="text-sm hover:text-purple-400 transition-colors">
                  Impressum
                </Link>
              </div>
              <div className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
                <strong>Haftungsausschluss:</strong> Kryptowährungsinvestitionen sind risikoreich und können zu erheblichen Verlusten führen. CryptoPulse ist kein Finanzberater. Führen Sie vor dem Investieren eine gründliche Recherche durch.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}
