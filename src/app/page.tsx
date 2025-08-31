"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Users } from 'lucide-react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>CryptoPulse: Telegram Krypto-Bots & Bridging</title>
        <meta
          name="description"
          content="Entdecken Sie CryptoPulse – die besten Telegram-Bots für Krypto-Trading und Bridging. Sicher, schnell und non-custodial mit Maestro. Perfekt für Anfänger und Profis in Deutschland!"
        />
        <meta
          name="keywords"
          content="CryptoPulse, Telegram Krypto-Bot, Krypto-Bridging, non-custodial Trading, Cross-Chain-Transfer, Maestro Bot, Krypto-Anfänger Deutschland, Krypto-Trading Deutschland"
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
              name: 'CryptoPulse: Telegram Krypto-Bots und Bridging',
              description:
                'CryptoPulse bietet die besten Telegram-Bots für Krypto-Trading und Cross-Chain-Bridging. Sicher, schnell und non-custodial mit Maestro. Ideal für Anfänger und erfahrene Trader in Deutschland.',
              publisher: {
                '@type': 'Organization',
                name: 'CryptoPulse',
                logo: { '@type': 'ImageObject', url: '/logo.svg' },
              },
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-50 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Krypto-Trading & Bridging mit{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CryptoPulse
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Handeln Sie Kryptowährungen und transferieren Sie Assets zwischen Blockchains in Sekunden. Nutzen Sie
            Maestro für sicheres, non-custodial Trading und Bridging – ideal für Anfänger und Profis.
            <br />
            <strong className="text-orange-300">
              Warnhinweis: Krypto-Trading birgt hohe Risiken, einschließlich des Totalverlusts Ihres Kapitals. Investieren Sie nur, was Sie sich leisten können zu verlieren. Keine Finanzberatung.
            </strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/api/go/maestro"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Jetzt mit Maestro starten
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/bots"
              className="border border-gray-600 hover:border-purple-500 text-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gray-800"
            >
              Trading-Bots entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Beginner’s Guide Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Krypto für Anfänger: Erste Schritte mit CryptoPulse
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="text-lg leading-relaxed mb-6">
              Sind Sie neu in der Welt der Kryptowährungen? CryptoPulse macht den Einstieg einfach und sicher. Unsere
              Telegram-Bots, wie Maestro, ermöglichen Ihnen, Kryptowährungen direkt in der Telegram-App zu handeln oder
              zwischen Blockchains wie Ethereum und Solana zu transferieren – ohne komplizierte Plattformen.
            </p>
            <h3 className="text-xl font-semibold mb-4">Wie starte ich mit Krypto-Trading?</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Telegram installieren</strong>: Laden Sie die kostenlose Telegram-App auf Ihr Smartphone oder
                nutzen Sie sie im Browser.
              </li>
              <li>
                <strong>Maestro-Bot hinzufügen</strong>: Suchen Sie in Telegram nach „Maestro“ und starten Sie den Bot mit
                einem Klick.
              </li>
              <li>
                <strong>Wallet verbinden</strong>: Verknüpfen Sie eine non-custodial Wallet (z. B. MetaMask), um die volle
                Kontrolle über Ihre Assets zu behalten.
              </li>
              <li>
                <strong>Erste Aktion starten</strong>: Kaufen Sie Krypto, tauschen Sie Tokens oder transferieren Sie Assets
                zwischen Blockchains.
              </li>
            </ol>
            <p className="text-lg leading-relaxed mt-6">
              CryptoPulse ist besonders anfängerfreundlich und bietet Schutzmechanismen wie MEV-Schutz, um Sie vor
              versteckten Kosten zu bewahren. Beginnen Sie mit kleinen Beträgen und lernen Sie die Grundlagen Schritt für
              Schritt!
              <br />
              <strong className="text-orange-300">
                Risikohinweis: Kryptowährungen sind hochvolatil. Sie können Ihr gesamtes Kapital verlieren. Investieren Sie
                verantwortungsvoll.
              </strong>
            </p>
            <div className="text-center mt-8">
              <Link
                href="/api/go/maestro"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                Jetzt mit Maestro loslegen
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Insights Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Insider-Tipps: Maximieren Sie Ihre Krypto-Strategie mit CryptoPulse
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="text-lg leading-relaxed mb-6">
              Für erfahrene Trader bietet CryptoPulse mit dem Maestro-Bot fortschrittliche Tools, um im dynamischen
              Krypto-Markt die Nase vorn zu haben. Nutzen Sie Funktionen wie Token-Sniping, Copy-Trading und optimierte
              Cross-Chain-Transfers mit Houdini-Integration, um Ihre Renditen zu maximieren.
            </p>
            <h3 className="text-xl font-semibold mb-4">Top-Strategien für Profis</h3>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Token-Sniping</strong>: Entdecken Sie neue Projekte frühzeitig mit Maestro’s Sniping-Funktion und
                profitieren Sie von Preisanstiegen bei Token-Launches.
              </li>
              <li>
                <strong>Copy-Trading</strong>: Folgen Sie erfolgreichen Tradern auf Blockchains wie Ethereum oder Solana und
                replizieren Sie deren Strategien in Echtzeit.
              </li>
              <li>
                <strong>MEV-Schutz</strong>: Schützen Sie sich vor Verlusten durch Miner Extractable Value mit Maestro’s
                fortschrittlichen Schutzmechanismen.
              </li>
              <li>
                <strong>Cross-Chain-Optimierung</strong>: Nutzen Sie Houdini für kostengünstige und schnelle Transfers
                zwischen Chains wie BSC, Base und TON.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              Bleiben Sie informiert mit unserem <Link href="/blog" className="text-purple-400 hover:underline">Blog</Link>,
              der aktuelle Markttrends und Analysen von Experten wie{' '}
              <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                CoinDesk
              </a>{' '}
              liefert.
              <br />
              <strong className="text-orange-300">
                Risikohinweis: Krypto-Trading ist spekulativ und birgt das Risiko eines Totalverlusts. Handeln Sie mit
                Bedacht und informieren Sie sich gründlich.
              </strong>
            </p>
            <div className="text-center mt-8">
              <Link
                href="/api/go/maestro"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                Fortgeschrittene Tools nutzen
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Warum CryptoPulse wählen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-purple-500 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blitzschnelles Trading</h3>
              <p className="text-gray-400">
                Starten Sie Trades in unter 30 Sekunden direkt in Telegram. Kein kompliziertes Setup, sofort loslegen.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-purple-500 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Maximale Sicherheit</h3>
              <p className="text-gray-400">
                Non-custodial Bots mit MEV-Schutz und Rug-Filter. Ihre Schlüssel bleiben immer bei Ihnen.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-purple-500 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multichain-Support</h3>
              <p className="text-gray-400">
                Unterstützt Ethereum, Solana, BSC, Base, TON und mehr – alles in einer einfachen Oberfläche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Überblick Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Ihr Einstieg mit CryptoPulse</h2>
          <div className="prose prose-invert max-w-none text-gray-400">
            <p className="text-lg leading-relaxed mb-6">
              Mit <strong>CryptoPulse</strong> handeln Sie Kryptowährungen direkt in der Telegram-App und transferieren
              Assets zwischen Blockchains wie Ethereum, Solana oder BSC. Wir empfehlen den{' '}
              <strong>Maestro-Bot</strong>, der mit Houdini-Integration schnelle, sichere und kostengünstige
              Cross-Chain-Transfers ermöglicht.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Egal, ob Anfänger oder Profi: Unsere Bots bieten <strong>non-custodial Trading</strong>, Anti-MEV-Schutz und
              Funktionen wie Copy-Trading oder Token-Sniping. Starten Sie in Minuten und behalten Sie die volle Kontrolle
              über Ihre Assets.
              <br />
              <strong className="text-orange-300">
                Warnhinweis: Krypto-Trading ist riskant. Es besteht die Gefahr eines Totalverlusts. Informieren Sie sich
                gründlich, bevor Sie investieren.
              </strong>
            </p>
            <div className="text-center">
              <Link
                href="/blog"
                className="text-purple-400 hover:underline text-lg font-semibold"
              >
                Lesen Sie unseren Blog für aktuelle Krypto-Tipps und Strategien
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Häufige Fragen</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Was sind Telegram Krypto-Bots?</h3>
              <p className="text-gray-400">
                Telegram Krypto-Bots sind automatisierte Tools, die in der Telegram-App laufen. Sie ermöglichen Trading,
                Bridging und mehr, ohne dass Sie Ihre Schlüssel abgeben. Maestro bietet z. B. Sniping und
                Cross-Chain-Transfers.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Wie funktioniert Krypto-Bridging?</h3>
              <p className="text-gray-400">
                Bridging ermöglicht den Transfer von Assets zwischen Blockchains (z. B. von Ethereum zu Solana). Maestro
                nutzt Houdini für optimierte Routen und niedrige Gebühren, unterstützt zahlreiche Chains und sorgt für
                sichere Transfers.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Sind Telegram-Bots sicher?</h3>
              <p className="text-gray-400">
                Maestro ist non-custodial und bietet MEV-Schutz sowie Rug-Filter. Dennoch: Krypto-Trading ist riskant, und
                Smart Contracts können Fehler enthalten. Investieren Sie nur, was Sie sich leisten können zu verlieren.
                <br />
                <strong className="text-orange-300">
                  Risikohinweis: Krypto-Investitionen können zum Totalverlust führen. Handeln Sie verantwortungsvoll.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">CryptoPulse</h3>
            <p className="text-gray-400 text-sm">
              Ihr Zugang zu den besten Telegram-Bots für Krypto-Trading und Bridging. Sicher, schnell, non-custodial.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              <strong>Über uns</strong>: Das CryptoPulse-Team besteht aus Krypto-Experten mit über 10 Jahren Erfahrung in
              Blockchain-Technologien und Trading. Wir helfen Anfängern und Profis, den Krypto-Markt zu meistern.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
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
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 CryptoPulse. Alle Rechte vorbehalten. Wir erhalten Provisionen für Transaktionen über unsere Links.
            Krypto-Trading birgt hohe Risiken, einschließlich Totalverlust.
          </p>
        </div>
      </footer>
    </div>
  );
}
