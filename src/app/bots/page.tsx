import Link from 'next/link'
import { ArrowRight, Bot, Zap, Shield, TrendingUp, Copy, Target, Brain } from 'lucide-react'

const bots = [
  {
    id: 'maestro',
    name: 'Maestro Bot',
    description: 'Multichain-Trading & Bridging (Houdini via Maestro). Auto-Snipe, Copy-Trading, Anti-MEV/Rug-Schutz, Call-Channel-Sniping, Wallet-Tools.',
    recommendation: 'Empfehlung für Bridge-Flows',
    tags: ['Multichain', 'Bridge', 'Copy-Trading', 'Anti-MEV'],
    icon: Bot,
    featured: true
  },
  {
    id: 'bullx',
    name: 'BullX',
    description: 'Multi-Chain Trading per Telegram & Web. Schnelle Ausführung, Limit Orders, Pump-Vision, Multi-Wallet, Live-Charts – ideal für aktives Trading.',
    tags: ['Multi-Chain', 'Limit Orders', 'Charts', 'Web-Interface'],
    icon: TrendingUp
  },
  {
    id: 'solsniperx',
    name: 'SolSniper X',
    description: 'High-Speed Sniping auf Solana. Auto-Buy neuer Token, Rug-Filter, LP-Burn-Checks, Echtzeit-Logs – fokussiert auf frühe Entries.',
    tags: ['Solana', 'Sniping', 'Rug-Filter', 'Auto-Buy'],
    icon: Target
  },
  {
    id: 'bonkbot',
    name: 'BONKbot',
    description: 'Blitzschnelles Solana-Trading mit Jupiter-Routing, MEV-Schutz, Limit Orders, Auto-Buys und Portfolio-Tracking. Große Community, hohes Volumen.',
    tags: ['Solana', 'Jupiter', 'MEV-Schutz', 'Portfolio'],
    icon: Zap
  },
  {
    id: 'blum',
    name: 'Blum',
    description: 'Multichain-Bot (TON, Solana, BNB). On-Chain Sniping, Terminal-UI, Limit-Orders, Bridge, Wallet-Management, P&L-Reports.',
    tags: ['TON', 'Solana', 'BNB', 'Terminal-UI'],
    icon: Bot
  },
  {
    id: 'soltradingbot',
    name: 'SolTradingBot',
    description: 'Solana-Fokus mit Jupiter/Orca/Radium-Anbindung, Copy-Trading, Limit/DCA-Orders und Backup-Bots für hohe Netzlast.',
    tags: ['Solana', 'Jupiter', 'Copy-Trading', 'DCA'],
    icon: Copy
  },
  {
    id: 'hector',
    name: 'Hector Trojan Bot',
    description: 'AI-gestützte Strategien, Hidden-Gem-Scanning, schnelle Ausführung direkt im Telegram-Bot. Nicht-custodial, Solana-fokussiert.',
    tags: ['AI', 'Hidden-Gems', 'Solana', 'Fast'],
    icon: Brain
  },
  {
    id: 'tradewiz',
    name: 'TradeWiz',
    description: 'Ultra-schnelles Copy-Trading (<2 s), Smart-Wallet-Erkennung, regelbasierte Automatisierung, DCA/Limit-Support.',
    tags: ['Copy-Trading', 'Fast', 'Smart-Wallet', 'Automation'],
    icon: Shield
  }
]

export default function BotsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-high-contrast mb-6">
            Telegram-Bots für{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Krypto
            </span>
          </h1>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Auswahl & Schnellstart – kuratierte Trading-Bots für jede Strategie
          </p>
        </div>

        {/* Bots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bots.map((bot) => {
            const IconComponent = bot.icon
            return (
              <div
                key={bot.id}
                className={`bg-card/50 border rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-200 ${
                  bot.featured ? 'border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-blue-500/5' : 'border-border'
                }`}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${bot.featured ? 'gradient-primary' : 'bg-secondary'} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{bot.name}</h3>
                    {bot.featured && (
                      <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-medium">
                        Empfohlen
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {bot.description}
                </p>

                {/* Recommendation */}
                {bot.recommendation && (
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                    <p className="text-purple-300 text-xs font-medium">
                      💡 {bot.recommendation}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {bot.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded-md border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/api/go/${bot.id}`}
                  className={`w-full ${
                    bot.featured
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 glow-purple hover:glow-blue'
                      : 'bg-secondary hover:bg-secondary/80'
                  } text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  Jetzt starten
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card/30 border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Warum Telegram-Trading-Bots?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Schnelle Ausführung</h3>
              <p className="text-muted-foreground text-sm">
                Trades werden in Sekunden ausgeführt, oft schneller als über Web-Interfaces.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Non-Custodial</h3>
              <p className="text-muted-foreground text-sm">
                Du behältst die Kontrolle über deine privaten Schlüssel und Funds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Einfach zu nutzen</h3>
              <p className="text-muted-foreground text-sm">
                Keine App-Installation nötig – alles läuft direkt in Telegram.
              </p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
          <p className="text-orange-300 font-medium mb-2 text-center">⚠️ Wichtiger Hinweis</p>
          <p className="text-orange-200 text-sm text-center">
            Alle Bots bergen Risiken. Krypto ist volatil, Smart Contracts können Bugs haben.
            Starte mit kleinen Beträgen und investiere nur, was du dir leisten kannst zu verlieren.
          </p>
        </div>
      </div>
    </div>
  )
}
