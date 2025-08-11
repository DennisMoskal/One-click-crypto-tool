import { AlertTriangle, Shield, Eye, FileText } from 'lucide-react'

export default function LegalPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-high-contrast mb-6">
            Rechtliche{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hinweise
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Wichtige Informationen zu Risiken, Datenschutz und Nutzungsbedingungen
          </p>
        </div>

        <div className="space-y-12">
          {/* Disclaimer */}
          <section className="bg-card/50 border border-orange-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-400" />
              <h2 className="text-2xl font-bold text-foreground">Disclaimer - Keine Anlageberatung</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-orange-300">One-Click Crypto Tools</strong> ist eine reine Informations- und Vermittlungsplattform.
                Wir bieten <strong>keine Finanz- oder Anlageberatung</strong> an.
              </p>

              <p>
                Alle Inhalte auf dieser Website dienen ausschließlich der Information und stellen keine Empfehlung zum Kauf,
                Verkauf oder Halten von Kryptowährungen dar. Jede Investitionsentscheidung liegt in deiner alleinigen Verantwortung.
              </p>

              <p>
                Wir sind <strong>nicht verantwortlich</strong> für:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Verluste durch Kryptowährungshandel</li>
                <li>Funktionsstörungen der verlinkten Telegram-Bots</li>
                <li>Änderungen an den verlinkten Diensten</li>
                <li>Technische Probleme oder Ausfälle</li>
              </ul>
            </div>
          </section>

          {/* Risiko-Hinweise */}
          <section className="bg-card/50 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-bold text-foreground">Risiko-Hinweise</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">⚠️ Hohe Volatilität</p>
                <p className="text-sm">
                  Kryptowährungen sind extrem volatil. Preise können innerhalb von Minuten um 50% oder mehr schwanken.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">🕳️ Rug-Pull-Risiko</p>
                <p className="text-sm">
                  Neue Token können "Rug-Pulls" sein, bei denen Entwickler mit den Geldern verschwinden.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">🔧 Smart Contract Risiken</p>
                <p className="text-sm">
                  Smart Contracts können Bugs enthalten oder gehackt werden. Niemand kann Sicherheit garantieren.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">💸 Totalverlust möglich</p>
                <p className="text-sm">
                  Du kannst dein gesamtes Investment verlieren. Investiere nur, was du dir leisten kannst zu verlieren.
                </p>
              </div>

              <p className="text-lg font-semibold text-orange-300 mt-6">
                Grundregel: Starte mit kleinen Beträgen und lerne zuerst die Funktionen kennen!
              </p>
            </div>
          </section>

          {/* Affiliate-Transparenz */}
          <section className="bg-card/50 border border-blue-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-foreground">Affiliate-Transparenz</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-blue-300">Vollständige Transparenz:</strong> Diese Website enthält Referral-Links zu Telegram-Trading-Bots.
                Wenn du über unsere Links einen Bot nutzt, erhalten wir möglicherweise eine Provision.
              </p>

              <p>
                <strong>Für dich entstehen keine zusätzlichen Kosten.</strong> Die Gebühren der Bots bleiben gleich,
                unabhängig davon, ob du sie direkt oder über unsere Links erreichst.
              </p>

              <p>
                Unsere Empfehlungen basieren auf eigener Recherche und Erfahrung. Wir empfehlen nur Bots,
                die wir selbst für seriös und funktional halten.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 font-medium mb-2">💡 Bridge-Hinweis</p>
                <p className="text-sm">
                  Alle Bridge-Funktionen auf dieser Website führen ausschließlich zum Maestro-Bot,
                  der Houdini-Integration für optimale Routen nutzt.
                </p>
              </div>
            </div>
          </section>

          {/* Datenschutz-Platzhalter */}
          <section className="bg-card/50 border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-muted-foreground" />
              <h2 className="text-2xl font-bold text-foreground">Datenschutz & Impressum</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">Datenschutz</h3>
              <p>
                Diese Website erhebt minimale Daten. Wir nutzen keine Tracking-Cookies und sammeln keine persönlichen Informationen.
                Alle Interaktionen mit den Telegram-Bots erfolgen direkt zwischen dir und dem jeweiligen Bot-Anbieter.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">Impressum</h3>
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <p className="text-sm">
                  <strong>Hinweis:</strong> Vollständige Impressums- und Datenschutzerklärung folgen.
                  Bei Fragen wende dich an: <span className="text-blue-400">legal@one-click-crypto.com</span>
                </p>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6">Haftungsausschluss</h3>
              <p>
                Wir übernehmen keine Haftung für die Inhalte verlinkter Websites oder die Funktionalität
                der vermittelten Telegram-Bots. Jede Nutzung erfolgt auf eigene Gefahr.
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Fragen oder Probleme?</h2>
            <p className="text-muted-foreground mb-6">
              Bei rechtlichen Fragen, Beschwerden oder Anregungen kannst du uns kontaktieren:
            </p>
            <div className="space-y-2">
              <p className="text-blue-400">legal@one-click-crypto.com</p>
              <p className="text-sm text-muted-foreground">
                Wir bemühen uns, alle Anfragen innerhalb von 48 Stunden zu beantworten.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
