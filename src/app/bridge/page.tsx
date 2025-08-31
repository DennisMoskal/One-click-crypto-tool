"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import Head from 'next/head';

export default function BridgingPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Head>
        <title>CryptoPulse: Krypto-Bridging mit Telegram-Bots</title>
        <meta
          name="description"
          content="Sicheres und schnelles Krypto-Bridging mit CryptoPulse. Nutzen Sie Bots wie Maestro und Blum für Cross-Chain-Transfers zwischen Ethereum, Solana, TON und mehr."
        />
        <meta
          name="keywords"
          content="CryptoPulse, Krypto-Bridging, Cross-Chain-Transfer, Telegram Krypto-Bot, Maestro Bridging, Blum Bot, Krypto-Anfänger Deutschland"
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
              name: 'CryptoPulse: Krypto-Bridging mit Telegram-Bots',
              description:
                'Nutzen Sie CryptoPulse für sicheres Krypto-Bridging mit Bots wie Maestro und Blum. Schnelle Transfers zwischen Ethereum, Solana, TON und mehr.',
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
        <strong>Risikohinweis:</strong> Krypto-Bridging birgt Risiken, einschließlich des Totalverlusts Ihrer Assets. Handeln Sie verantwortungsvoll.
      </div>

      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CryptoPulse</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/bridging" className="text-white font-semibold">
              Bridging
            </Link>
            <Link href="/bots" className="text-gray-400 hover:text-white">
              Bots
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white">
              Blog
            </Link>
          </nav>
          <Link
            href="https://fast-trade-bridge.vercel.app/bots"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200"
          >
            Bridging-Bots starten
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-800 to-blue-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Krypto-Bridging mit <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">CryptoPulse</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Transferieren Sie Kryptowährungen schnell und sicher zwischen Blockchains wie Ethereum, Solana, TON und mehr
            mit Telegram-Bots wie Maestro und Blum. Non-custodial und benutzerfreundlich – ideal für Anfänger und Profis.
          </p>

          {/* Bridging Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold mb-4">Was ist Krypto-Bridging?</h3>
              <p className="text-gray-400">
                Bridging ermöglicht den Transfer von Kryptowährungen (z. B. USDT, ETH) zwischen verschiedenen Blockchains.
                Für Anfänger: Stellen Sie sich vor, Sie versenden Geld von einer Bank zu einer anderen, nur für Krypto.
                Mit Bots wie Maestro oder Blum ist das in Minuten erledigt.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold mb-4">Warum CryptoPulse?</h3>
              <p className="text-gray-400">
                CryptoPulse bietet Zugang zu Top-Bridging-Bots wie Maestro (mit Houdini-Integration für optimierte Routen)
                und Blum (unterstützt TON, Solana, BNB). Sicher, schnell und ohne KYC.
              </p>
            </div>
          </div>

          {/* Bridging Features */}
          <h3 className="text-2xl font-semibold mb-6 text-center">Vorteile des Bridgings mit CryptoPulse</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Multichain-Support</h4>
              <p className="text-gray-400 text-sm">
                Transferieren Sie Assets zwischen Ethereum, Solana, BSC, TON, Polygon, Arbitrum und mehr.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Non-Custodial</h4>
              <p className="text-gray-400 text-sm">
                Ihre Schlüssel bleiben bei Ihnen. Bots wie Maestro und Blum sind sicher und ohne KYC.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Schnelle Transfers</h4>
              <p className="text-gray-400 text-sm">
                Bridging in Minuten mit optimierten Routen und niedrigen Gebühren (z. B. ~0.05% mit Maestro).
              </p>
            </div>
          </div>

          {/* Bridging Bots */}
          <h3 className="text-2xl font-semibold mb-6 text-center">Unsere Bridging-Bots</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600">
              <h4 className="text-xl font-semibold mb-4">Maestro Bot</h4>
              <p className="text-gray-400 mb-4">
                Multichain-Bridging mit Houdini-Integration für optimierte Routen. Unterstützt Ethereum, Solana, BSC und
                mehr. Ideal für Anfänger und Profis.
              </p>
              <p className="text-sm text-gray-500 mb-4">Multichain | Houdini | Non-Custodial | Niedrige Gebühren</p>
              <Link
                href="https://fast-trade-bridge.vercel.app/bots"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
              >
                Bridge via Maestro starten
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-6 bg-gray-700 rounded-xl border border-gray-600">
              <h4 className="text-xl font-semibold mb-4">Blum Bot</h4>
              <p className="text-gray-400 mb-4">
                Bridging für TON, Solana, BNB und mehr. Mit Terminal-UI und Wallet-Management für einfache Transfers.
              </p>
              <p className="text-sm text-gray-500 mb-4">TON | Solana | BNB | Terminal-UI</p>
              <Link
                href="https://fast-trade-bridge.vercel.app/bots"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
              >
                Bridge via Blum starten
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="https://fast-trade-bridge.vercel.app/bots"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              Bridging-Bots entdecken
              <ArrowRight size={20} />
            </Link>
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
            <strong>Risikohinweis:</strong> Krypto-Bridging birgt hohe Risiken, einschließlich des Totalverlusts Ihres
            Kapitals. Investieren Sie nur, was Sie sich leisten können zu verlieren.
          </p>
        </div>
      </footer>
    </div>
  );
}
