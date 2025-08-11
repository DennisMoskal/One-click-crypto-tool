import Link from 'next/link'
import { MessageCircle, Settings, Zap, ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Bot auswählen',
    description: 'Wähle einen Trading-Bot basierend auf deiner Strategie. Für Bridging empfehlen wir Maestro.',
    icon: MessageCircle,
    details: [
      'Browse unsere kuratierte Bot-Auswahl',
      'Lies die Beschreibungen und Features',
      'Klicke auf "Jetzt starten" für deinen gewählten Bot'
    ]
  },
  {
    number: '02',
    title: 'Wallet verbinden',
    description: 'Verbinde dein Wallet im Telegram-Bot. Deine Schlüssel bleiben bei dir – 100% non-custodial.',
    icon: Settings,
    details: [
      'Bot startet automatisch in Telegram',
      'Folge den Anweisungen zur Wallet-Einrichtung',
      'Importiere bestehende Wallet oder erstelle neue'
    ]
  },
  {
    number: '03',
    title: 'Trading starten',
    description: 'Jetzt kannst du direkt im Telegram-Chat handeln. Schnell, sicher und einfach.',
    icon: Zap,
    details: [
      'Nutze einfache Befehle zum Trading',
      'Setze Limit-Orders oder trade sofort',
      'Überwache dein Portfolio in Echtzeit'
    ]
  }
]

const useCases = [
  {
    title: 'Bridging zwischen Chains',
    description: 'Transferiere Coins zwischen Ethereum, Solana, BSC und anderen Chains.',
    example: 'Beispiel: ETH von Ethereum zu Solana bridgen'
  },
  {
    title: 'Schnelle Token-Swaps',
    description: 'Tausche Token direkt und profitiere von MEV-Schutz.',
    example: 'Beispiel: USDC zu SOL auf Solana swappen'
  },
  {
    title: 'Copy-Trading',
    description: 'Folge erfolgreichen Tradern automatisch.',
    example: 'Beispiel: Top-Trader auf Solana kopieren'
  },
  {
    title: 'Neue Token snipen',
    description: 'Kaufe neue Token sofort nach dem Launch.',
    example: 'Beispiel: Frühzeitig in neue Meme-Coins einsteigen'
  }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-high-contrast mb-6">
            So{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              funktioniert's
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In 3 einfachen Schritten zum erfolgreichen Krypto-Trading via Telegram
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                )}

                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-6">
                    <div className="w-32 h-32 rounded-2xl gradient-primary flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-3xl font-bold mb-1">{step.number}</div>
                        <IconComponent size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:pt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Was kannst du machen?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-card/50 border border-border rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-200">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {useCase.description}
                </p>
                <div className="bg-background/50 border border-border rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">
                    💡 {useCase.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bereit zum Start?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wähle deinen ersten Bot und starte in wenigen Sekunden
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/api/go/maestro"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 glow-purple hover:glow-blue flex items-center justify-center gap-2"
            >
              Bridge mit Maestro
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/bots"
              className="border border-border hover:border-purple-500 text-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-card"
            >
              Alle Bots ansehen
            </Link>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <span className="text-yellow-400 text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Tipp für Anfänger</h3>
            <p className="text-muted-foreground text-sm">
              Starte mit kleinen Beträgen und lerne die Funktionen kennen.
            </p>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Sicherheit</h3>
            <p className="text-muted-foreground text-sm">
              Alle Bots sind non-custodial. Deine Schlüssel bleiben bei dir.
            </p>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Geschwindigkeit</h3>
            <p className="text-muted-foreground text-sm">
              Trades in Sekunden, schneller als Web-Interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
