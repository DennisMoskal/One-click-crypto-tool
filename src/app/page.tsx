import Link from 'next/link'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-high-contrast mb-6 leading-tight">
            One-Click Crypto{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trading & Bridging
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-medium-contrast mb-8 max-w-3xl mx-auto leading-relaxed">
            Trade & bridge in Sekunden. Die besten Telegram-Bots für Krypto – klar erklärt, direkt startbereit.
            Bridge immer sicher via Maestro (Houdini-Power).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/api/go/maestro"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 glow-purple hover:glow-blue flex items-center gap-2"
            >
              Bridge starten
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/bots"
              className="border border-border hover:border-purple-500 text-high-contrast px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-card"
            >
              Bots entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-high-contrast mb-16">
            Warum One-Click Crypto?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-purple-500/50 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-high-contrast mb-4">
                Schnell & einfach
              </h3>
              <p className="text-medium-contrast">
                Start in 30 Sekunden, kein Setup. Direkt im Telegram-Bot handeln ohne komplizierte Einrichtung.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-purple-500/50 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-high-contrast mb-4">
                Sicher & non-custodial
              </h3>
              <p className="text-medium-contrast">
                Handel direkt im Telegram-Bot. Deine Schlüssel bleiben bei dir, MEV-Schutz inklusive.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-purple-500/50 transition-all duration-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-high-contrast mb-4">
                Multichain-Ready
              </h3>
              <p className="text-medium-contrast">
                Ethereum, Solana, BSC, Base, TON u. v. m. Alle wichtigen Chains in einem Interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-high-contrast mb-8">
            Kuratierte Telegram-Trading-Bots & Krypto-Bridge
          </h2>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Unsere Plattform bündelt <strong>Telegram-Trading-Bots</strong> und eine <strong>Krypto-Bridge</strong> in einem klaren Interface.
              Ob Solana-Sniper, Copy-Trading oder Multichain-Bridging – hier findest du kuratierte Tools inklusive direkter Referral-Links.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              <strong>Bridge-Transaktionen</strong> laufen stets über den <strong>Maestro-Bot</strong> (Houdini-Integration) für optimale
              Reichweite und starke Routen. Von schnellen Solana-Swaps bis hin zu komplexen Cross-Chain-Transfers –
              alles über eine einheitliche Schnittstelle.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Für <strong>Anfänger</strong> bieten wir einfache Schritt-für-Schritt-Anleitungen, <strong>Fortgeschrittene</strong>
              profitieren von erweiterten Features wie Anti-MEV-Schutz, Copy-Trading und automatisiertem Sniping.
              Alle Bots sind non-custodial – deine Schlüssel bleiben bei dir.
            </p>

            <div className="bg-card/50 border border-orange-500/30 rounded-lg p-6 my-8">
              <p className="text-orange-300 font-medium mb-2">⚠️ Wichtiger Hinweis:</p>
              <p className="text-sm">
                Keine Finanzberatung. Krypto ist volatil und kann zu Verlusten führen.
                Investiere nur, was du dir leisten kannst zu verlieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Häufige Fragen
          </h2>

          <div className="space-y-8">
            <div className="bg-card/50 border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">
                Was ist ein Telegram-Trading-Bot?
              </h3>
              <p className="text-medium-contrast">
                Ein Telegram-Trading-Bot ist ein automatisierter Service, der direkt in der Telegram-App läuft.
                Du kannst Kryptowährungen kaufen, verkaufen und bridgen, ohne eine separate App zu installieren.
                Die Bots sind non-custodial – du behältst die Kontrolle über deine Schlüssel.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">
                Wie funktioniert Bridging?
              </h3>
              <p className="text-medium-contrast">
                Bridging ermöglicht es, Coins zwischen verschiedenen Blockchains zu transferieren.
                Unsere Bridge-Funktion nutzt die Houdini-Integration via Maestro-Bot für optimale Routen
                und niedrige Gebühren. Unterstützt werden Ethereum, Solana, BSC, Base und weitere Chains.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">
                Ist das sicher?
              </h3>
              <p className="text-medium-contrast">
                Ja, alle empfohlenen Bots sind non-custodial und bieten MEV-Schutz sowie Rug-Filter.
                Dennoch bestehen Risiken: Krypto ist volatil, Smart Contracts können Bugs haben,
                und es gibt keine Garantie gegen Verluste. Investiere nur, was du dir leisten kannst zu verlieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
