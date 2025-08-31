"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Head>
        <title>CryptoPulse: Beste Telegram Krypto-Bots</title>
        <meta
          name="description"
          content="Entdecken Sie CryptoPulse – die besten Telegram-Bots für Krypto-Trading, Sniping, Copy-Trading und Bridging. Sicher, schnell und non-custodial für Anfänger und Profis in Deutschland!"
        />
        <meta
          name="keywords"
          content="CryptoPulse, Telegram Krypto-Bots, Krypto-Trading-Bots, Sniper-Bots, Copy-Trading, Krypto-Bridging, Krypto-Anfänger Deutschland, Krypto-Trading Deutschland"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CryptoPulse Team" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'CryptoPulse: Telegram Krypto-Bots',
              description:
                'CryptoPulse bietet die besten Telegram-Bots für Krypto-Trading, Sniping, Copy-Trading und Bridging. Sicher, schnell und non-custodial für Anfänger und Profis.',
              publisher: {
                '@type': 'Organization',
                name: 'CryptoPulse',
                logo: { '@type': 'ImageObject', url: '/logo.svg' },
              },
            }),
          }}
        />
      </Head>

      {/* Risk Warning (Top Right) */}
      <div className="fixed top-4 right-4 bg-orange-500/20 border border-orange-500 rounded-lg p-4 max-w-xs text-sm text-orange-300 z-50">
        <strong>Risikohinweis:</strong> Krypto-Trading birgt hohe Risiken, einschließlich des Totalverlusts Ihres Kapitals. Investieren Sie nur, was Sie sich leisten können zu verlieren. Keine Finanzberatung.
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 bg-gradient-to-br from-purple-800 to-blue-800">
        <div className="absolute inset-0 opacity-50 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Krypto-Trading & Bridging mit{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CryptoPulse
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die besten Telegram-Bots für Krypto-Trading, Sniping, Copy-Trading und Cross-Chain-Bridging. Von
            Maestro bis TradeWiz – sicher, schnell und non-custodial für Anfänger und Profis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://fast-trade-bridge.vercel.app/bots"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Bots entdecken
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/blog"
              className="border border-gray-600 hover:border-purple-500 text-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gray-700"
            >
              Krypto-Tipps lesen
            </Link>
          </div>
        </div>
      </section>

      {/* Beginner’s Guide Section */}
      <section className="py-20 px-4 bg-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Krypto für Anfänger: Telegram-Bots leicht gemacht
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="text-lg leading-relaxed mb-6">
              Neu in der Krypto-Welt? Telegram-Bots machen den Einstieg einfach. Diese automatisierten Tools laufen direkt
              in der Telegram-App und ermöglichen Trading, Sniping oder Bridging ohne komplizierte Plattformen.
            </p>
            <h3 className="text-xl font-semibold mb-4">Wie starte ich?</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Telegram installieren</strong>: Laden Sie die kostenlose Telegram-App auf Ihr Smartphone oder
                nutzen Sie sie im Browser.
              </li>
              <li>
                <strong>Bot auswählen</strong>: Besuchen Sie{' '}
                <Link href="https://fast-trade-bridge.vercel.app/bots" className="text-purple-400 hover:underline">
                  unsere Bot-Seite
                </Link>{' '}
                und wählen Sie einen Bot wie Maestro, BONKbot oder SolSniper X.
              </li>
              <li>
                <strong>Wallet verbinden</strong>: Verknüpfen Sie eine non-custodial Wallet (z. B. MetaMask), um die
                Kontrolle über Ihre Assets zu behalten.
              </li>
              <li>
                <strong>Aktion starten</strong>: Kaufen Sie Krypto, snipe neue Token oder transferieren Sie Assets zwischen
                Blockchains.
              </li>
            </ol>
            <p className="text-lg leading-relaxed mt-6">
              CryptoPulse bietet Bots für jeden Bedarf – von einfachem Trading mit BONKbot bis zu fortgeschrittenem
              Sniping mit SolSniper X. Starten Sie mit kleinen Beträgen und lernen Sie die Grundlagen!
            </p>
            <div className="text-center mt-8">
              <Link
                href="https://fast-trade-bridge.vercel.app/bots"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                Bots ausprobieren
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Insights Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Insider-Tipps: Maximieren Sie Ihre Krypto-Strategie
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="text-lg leading-relaxed mb-6">
              Für erfahrene Trader bietet CryptoPulse eine Auswahl an Bots für jede Strategie: Sniping, Copy-Trading,
              Bridging und mehr. Entdecken Sie Tools wie Maestro, BullX oder TradeWiz, um im Krypto-Markt voraus zu sein.
            </p>
            <h3 className="text-xl font-semibold mb-4">Top-Strategien mit unseren Bots</h3>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Token-Sniping</strong>: Nutzen Sie SolSniper X oder Maestro, um neue Token bei Launches frühzeitig
                zu kaufen und von Preisanstiegen zu profitieren.
              </li>
              <li>
                <strong>Copy-Trading</strong>: Folgen Sie Top-Tradern mit TradeWiz oder SolTradingBot und replizieren Sie
                deren Strategien in Echtzeit.
              </li>
              <li>
                <strong>Bridging</strong>: Transferieren Sie Assets zwischen Chains wie Ethereum, Solana oder TON mit
                Maestro oder Blum für niedrige Gebühren.
              </li>
              <li>
                <strong>Portfolio-Tracking</strong>: Verfolgen Sie Ihre Investments mit BONKbot’s P&L-Reports oder BullX’s
                Live-Charts.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              Bleiben Sie informiert mit unserem{' '}
              <Link href="/blog" className="text-purple-400 hover:underline">
                Blog
              </Link>
              , der Markttrends und Analysen von Quellen wie{' '}
              <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                CoinDesk
              </a>{' '}
              bietet.
            </p>
            <div className="text-center mt-8">
              <Link
                href="https://fast-trade-bridge.vercel.app/bots"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                Alle Bots entdecken
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 px-4 bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Warum CryptoPulse?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-800 border border-gray-600 hover:border-purple-500 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blitzschnelles Trading</h3>
              <p className="text-gray-400">
                Führen Sie Trades in Sekunden aus mit Bots wie BONKbot oder TradeWiz – schneller als viele Web-Plattformen.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-800 border border-gray-600 hover:border-purple-500 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Maximale Sicherheit</h3>
              <p className="text-gray-400">
                Non-custodial Bots wie Maestro oder SolSniper X mit MEV-Schutz und Rug-Filter. Ihre Schlüssel bleiben bei
                Ihnen.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-800 border border-gray-600 hover:border-purple-500 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multichain-Support</h3>
              <p className="text-gray-400">
                Handeln und bridgen Sie auf Ethereum, Solana, BSC, TON und mehr mit Bots wie Blum und Maestro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-600 py-12 px-4">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">CryptoPulse</h3>
            <p className="text-gray-400 text-sm">
              Ihr Zugang zu den besten Telegram-Bots für Krypto-Trading, Sniping und Bridging. Sicher, schnell,
              non-custodial.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              <strong>Über uns</strong>: Das CryptoPulse-Team besteht aus Krypto-Experten mit über 10 Jahren Erfahrung in
              Blockchain-Technologien und Trading.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bridging" className="hover:text-white">
                  Bridging
                </Link>
              </li>
              <li>
                <Link href="/bots" className="hover:text-white">
                  Bots
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 CryptoPulse. Alle Rechte vorbehalten. Wir erhalten Provisionen für Transaktionen über unsere Links.
            <br />
            <strong>Risikohinweis:</strong> Krypto-Trading birgt hohe Risiken, einschließlich des Totalverlusts Ihres
            Kapitals. Investieren Sie nur, was Sie sich leisten können zu verlieren.
          </p>
        </div>
      </footer>
    </div>
  );
}
