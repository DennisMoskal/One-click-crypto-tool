import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CryptoPulse</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium">Startseite</Link>
            <Link href="/bridge" className="text-gray-600 hover:text-purple-600 font-medium">Bridging</Link>
            <Link href="/bots" className="text-gray-600 hover:text-purple-600 font-medium">Bots</Link>
          </div>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Krypto meistern mit{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              CryptoPulse
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Handeln und überbrücken Sie Kryptowährungen mühelos mit unseren ausgewählten Telegram-Bots. Schnell, sicher und anfängerfreundlich – starten Sie in Sekunden mit CryptoPulse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/bridge"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Jetzt Bridging starten
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/bots"
              className="border-2 border-gray-300 hover:border-purple-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
            >
              Bots entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Warum CryptoPulse wählen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blitzschnell</h3>
              <p className="text-gray-600">
                Handeln und überbrücken Sie in Sekunden mit Telegram-Bots. Kein kompliziertes Setup – einfach verbinden und loslegen.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sicher & Nicht-Verwahrend</h3>
              <p className="text-gray-600">
                Behalten Sie die Kontrolle über Ihre Schlüssel. Unsere Bots bieten MEV-Schutz und sicheres, nicht-verwahrendes Trading.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multichain-Unterstützung</h3>
              <p className="text-gray-600">
                Handeln und überbrücken Sie nahtlos auf Ethereum, Solana, BSC, Base, TON und mehr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Inhaltsbereich */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ihr Tor zum Krypto-Handel und Bridging
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-6">
              CryptoPulse ist Ihre zentrale Plattform für <strong>Telegram-Krypto-Trading-Bots</strong> und <strong>Cross-Chain-Bridging</strong>. Egal, ob Sie neu im Krypto-Bereich oder ein erfahrener Trader sind, unsere ausgewählten Tools machen Trading und Bridging schnell, sicher und zugänglich direkt in Telegram.
            </p>
            <p className="text-lg mb-6">
              Unsere <strong>Telegram-Bots</strong> ermöglichen Handel auf großen Blockchains wie Solana, Ethereum und BSC mit Funktionen wie Auto-Sniping, Copy-Trading und Echtzeit-Markteinblicken. Für <strong>Bridging</strong> arbeiten wir mit dem Maestro-Bot zusammen, der Houdini Swap für sichere, kostengünstige Cross-Chain-Übertragungen nutzt.
            </p>
            <p className="text-lg mb-6">
              Anfänger profitieren von leicht verständlichen Anleitungen, während fortgeschrittene Trader Tools wie Anti-MEV-Schutz, Rug-Pull-Filter und Multi-Wallet-Management nutzen können. Alle Bots sind nicht-verwahrend, sodass Sie die volle Kontrolle über Ihre Gelder behalten. <strong>Hinweis:</strong> Wir können Provisionen für Transaktionen über unsere Referral-Links erhalten, ohne zusätzliche Kosten für Sie.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <p className="text-orange-700 font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-orange-600">
                Der Handel und das Bridging von Kryptowährungen sind mit erheblichen Risiken verbunden, einschließlich des möglichen Verlusts Ihrer gesamten Investition. Die Preise sind stark volatil, und Smart Contracts können Schwachstellen enthalten. CryptoPulse bietet keine Finanzberatung. Führen Sie stets Ihre eigene Recherche durch und investieren Sie nur, was Sie sich leisten können zu verlieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Was sind Telegram-Krypto-Bots?
              </h3>
              <p className="text-gray-600">
                Telegram-Krypto-Bots sind automatisierte Tools innerhalb der Telegram-App, mit denen Sie Kryptowährungen kaufen, verkaufen und überbrücken können, ohne externe Plattformen zu nutzen. Sie sind nicht-verwahrend, was bedeutet, dass Sie die Kontrolle über Ihre privaten Schlüssel behalten.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wie funktioniert Bridging?
              </h3>
              <p className="text-gray-600">
                Bridging überträgt Vermögenswerte zwischen Blockchains, wie z. B. von Ethereum zu Solana. CryptoPulse nutzt den Maestro-Bot mit Houdini Swap für sichere, effiziente Übertragungen mit niedrigen Gebühren auf unterstützten Chains.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ist die Nutzung sicher?
              </h3>
              <p className="text-gray-600">
                Unsere empfohlenen Bots sind nicht-verwahrend und bieten MEV-Schutz sowie Rug-Pull-Filter. Dennoch gibt es Risiken wie Marktvolatilität und Smart-Contract-Schwachstellen. Investieren Sie verantwortungsvoll und führen Sie gründliche Recherchen durch.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wie starte ich mit einem Bot?
              </h3>
              <p className="text-gray-600">
                Besuchen Sie den Telegram-Kanal des Bots, folgen Sie den Einrichtungsanweisungen und verbinden Sie eine Wallet (neu oder bestehend). Zahlen Sie mindestens 0,1 ETH oder Äquivalent ein, dann nutzen Sie Chat-Befehle zum Handeln oder Bridgen. Unsere Anleitungen machen es für Anfänger einfach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">CryptoPulse &copy; 2025. Alle Rechte vorbehalten.</p>
          <p className="text-sm">
            <Link href="/privacy" className="hover:text-purple-400">Datenschutz</Link> | 
            <Link href="/terms" className="hover:text-purple-400 ml-2">Nutzungsbedingungen</Link>
          </p>
          <p className="text-sm mt-4">
            <strong>Haftungsausschluss:</strong> Kryptowährungsinvestitionen sind risikoreich und können zu erheblichen Verlusten führen. CryptoPulse ist kein Finanzberater. Führen Sie vor dem Investieren eine gründliche Recherche durch.
          </p>
        </div>
      </footer>
    </div>
  );
}

// src/app/bridge/page.tsx
import Link from 'next/link';
import { ArrowRight, RefreshCw, Lock, DollarSign } from 'lucide-react';

export default function BridgePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CryptoPulse</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium">Startseite</Link>
            <Link href="/bridge" className="text-purple-600 font-medium">Bridging</Link>
            <Link href="/bots" className="text-gray-600 hover:text-purple-600 font-medium">Bots</Link>
          </div>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Nahtloses Cross-Chain-Bridging
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Übertragen Sie Vermögenswerte mühelos zwischen Blockchains mit dem Maestro-Bot von CryptoPulse, unterstützt von Houdini Swap. Sicher, schnell und kostengünstig für alle Nutzer.
          </p>
          <Link
            href="/api/go/maestro"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Jetzt Bridging starten
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Funktionen-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Warum mit CryptoPulse bridgen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Chain-Effizienz</h3>
              <p className="text-gray-600">
                Bewegen Sie Vermögenswerte zwischen Ethereum, Solana, BSC und mehr mit optimierten Routen und minimalen Gebühren über Houdini Swap.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Transaktionen</h3>
              <p className="text-gray-600">
                Genießen Sie sichere, private Übertragungen mit MEV-resistenter Technologie, die Ihre Gelder schützt.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kosteneffektiv</h3>
              <p className="text-gray-600">
                Niedrige Transaktionsgebühren (1 % Standard, 0,9 % mit Referrals) machen Bridging für alle erschwinglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert’s-Bereich */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wie man mit CryptoPulse bridgt
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Das Überbrücken von Kryptowährungen über Blockchains hinweg ist mit CryptoPulse einfach. Folgen Sie diesen Schritten für sichere Übertragungen:
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Dem Maestro-Bot beitreten:</strong> Greifen Sie auf den Maestro-Bot in Telegram zu und folgen Sie den Einrichtungsanweisungen.</li>
              <li><strong>Wallet verbinden:</strong> Erstellen Sie eine neue Wallet oder importieren Sie eine bestehende mit Ihrem privaten Schlüssel.</li>
              <li><strong>Wallet aufladen:</strong> Zahlen Sie mindestens 0,1 ETH oder Äquivalent ein, um Gebühren und Übertragungen abzudecken.</li>
              <li><strong>Chains und Token auswählen:</strong> Wählen Sie die Quell- und Ziel-Blockchain (z. B. Ethereum zu Solana) und geben Sie den Token-Betrag an.</li>
              <li><strong>Bestätigen und Bridgen:</strong> Überprüfen Sie die Transaktionsdetails, bestätigen Sie, und lassen Sie Houdini Swap den Rest für schnelle, sichere Übertragungen erledigen.</li>
            </ol>
            <p className="text-lg mt-6">
              Unser Bridging-Service unterstützt große Chains wie Ethereum, Solana, BSC, Base und TON mit Echtzeit-Tracking und niedrigen Gebühren. <strong>Hinweis:</strong> Wir können Provisionen für Bridging-Transaktionen über unsere Referral-Links erhalten, ohne zusätzliche Kosten für Sie.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <p className="text-orange-700 font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-orange-600">
                Bridging birgt Risiken, einschließlich potenzieller Schwachstellen in Smart Contracts und Marktvolatilität. Überprüfen Sie stets die Transaktionsdetails und übertragen Sie nur Gelder, deren Verlust Sie sich leisten können. CryptoPulse ist nicht für Verluste beim Bridging verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">CryptoPulse &copy; 2025. Alle Rechte vorbehalten.</p>
          <p className="text-sm">
            <Link href="/privacy" className="hover:text-purple-400">Datenschutz</Link> | 
            <Link href="/terms" className="hover:text-purple-400 ml-2">Nutzungsbedingungen</Link>
          </p>
          <p className="text-sm mt-4">
            <strong>Haftungsausschluss:</strong> Das Bridging von Kryptowährungen birgt Risiken, einschließlich potenzieller Verluste. CryptoPulse bietet keine Finanzberatung. Führen Sie vor dem Bridging eine gründliche Recherche durch.
          </p>
        </div>
      </footer>
    </div>
  );
}

// src/app/bots/page.tsx
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Shield } from 'lucide-react';

export default function BotsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CryptoPulse</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium">Startseite</Link>
            <Link href="/bridge" className="text-gray-600 hover:text-purple-600 font-medium">Bridging</Link>
            <Link href="/bots" className="text-purple-600 font-medium">Bots</Link>
          </div>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Smarter handeln mit Telegram-Bots
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die besten Telegram-Krypto-Trading-Bots mit CryptoPulse. Von Auto-Sniping bis Copy-Trading machen unsere ausgewählten Bots das Trading schnell und intuitiv.
          </p>
          <Link
            href="/api/go/maestro"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Jetzt Bots entdecken
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Funktionen-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Top-Funktionen unserer Bots
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Sniping</h3>
              <p className="text-gray-600">
                Kaufen Sie neue Token sofort bei Launch mit Hochgeschwindigkeits-Sniping, optimiert für Solana und Ethereum.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Copy-Trading</h3>
              <p className="text-gray-600">
                Spiegeln Sie die Trades von Top-Tradern automatisch, ideal für Anfänger und Profis gleichermaßen.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mbස

System: The response was cut off due to length constraints. I’ll complete the `bots/page.tsx` component and provide additional steps to ensure the deployment error is resolved, maintaining the fully German-translated, SEO-optimized CryptoPulse website for recommendation on https://unser-vergleichsportal.de/. The artifact will remain compatible with Next.js, Bun, and Vercel, addressing the "Unexpected token `div`" error in `page.tsx`.

### Completing the Artifact
The previous artifact was cut off in the `bots/page.tsx` component. Below, I’ll provide the complete `bots/page.tsx` file, ensuring proper JSX syntax to avoid the error. I’ve also reviewed the code for potential issues (e.g., unclosed tags, invalid characters) and ensured it aligns with Next.js’s app router structure (`src/app/bots/page.tsx`). The content is fully in German, with consistent design (light layout, Tailwind CSS, clean lines), functional buttons, crypto disclaimers, and referral transparency.

### Additional Error-Fixing Steps
To ensure the "Unexpected token `div`" error is resolved, consider these additional steps based on the deployment logs and search results:

7. **Check for Hidden Characters**: The error might be caused by invisible characters (e.g., BOM, non-ASCII characters) in `page.tsx`. Open the file in a text editor like VS Code, set encoding to UTF-8 without BOM, and remove any stray characters before or after the `<div>` tag on line 297.
8. **Update Bun**: Ensure you’re using the latest Bun version (`bun upgrade` to get v1.1.0 or higher), as older versions may have JSX parsing issues.
9. **Clear Vercel Cache**: If the error persists, clear Vercel’s build cache in the project settings and redeploy to ensure no stale files are causing issues.
10. **Debug with Bun Locally**: Run `bun run dev` locally to test the app. If the error appears, check the console output for specific line numbers or use a linter (e.g., ESLint) to catch syntax issues:
    ```bash
    bun add -D eslint eslint-config-next
    bun run eslint src/app
    ```
11. **Fallback to Node.js**: If Bun continues to fail, switch to Node.js for building:
    ```json
    // package.json
    {
      "scripts": {
        "build": "next build",
        "dev": "next dev"
      }
    }
    ```
    Install Node.js dependencies:
    ```bash
    npm install
    npm run build
    ```
    Update Vercel’s build command to `npm run build` in the project settings.

### Updated Artifact
Below is the complete, corrected artifact with all three files (`page.tsx`, `bridge/page.tsx`, `bots/page.tsx`), ensuring proper JSX syntax and German translation. The structure uses Next.js’s app router, with Tailwind CSS for styling, and is optimized for Vercel deployment.

<xaiArtifact artifact_id="ccca4348-3669-4a21-a61b-d07be199a4bf" artifact_version_id="978ec389-f9bf-4d90-a0ac-7ae64321ac4b" title="CryptoPulseWebsite.tsx" contentType="text/tsx">
```tsx
// src/app/page.tsx
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CryptoPulse</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium">Startseite</Link>
            <Link href="/bridge" className="text-gray-600 hover:text-purple-600 font-medium">Bridging</Link>
            <Link href="/bots" className="text-gray-600 hover:text-purple-600 font-medium">Bots</Link>
          </div>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Krypto meistern mit{' '}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              CryptoPulse
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Handeln und überbrücken Sie Kryptowährungen mühelos mit unseren ausgewählten Telegram-Bots. Schnell, sicher und anfängerfreundlich – starten Sie in Sekunden mit CryptoPulse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/bridge"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Jetzt Bridging starten
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/bots"
              className="border-2 border-gray-300 hover:border-purple-500 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
            >
              Bots entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Warum CryptoPulse wählen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blitzschnell</h3>
              <p className="text-gray-600">
                Handeln und überbrücken Sie in Sekunden mit Telegram-Bots. Kein kompliziertes Setup – einfach verbinden und loslegen.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sicher & Nicht-Verwahrend</h3>
              <p className="text-gray-600">
                Behalten Sie die Kontrolle über Ihre Schlüssel. Unsere Bots bieten MEV-Schutz und sicheres, nicht-verwahrendes Trading.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multichain-Unterstützung</h3>
              <p className="text-gray-600">
                Handeln und überbrücken Sie nahtlos auf Ethereum, Solana, BSC, Base, TON und mehr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Inhaltsbereich */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ihr Tor zum Krypto-Handel und Bridging
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-6">
              CryptoPulse ist Ihre zentrale Plattform für <strong>Telegram-Krypto-Trading-Bots</strong> und <strong>Cross-Chain-Bridging</strong>. Egal, ob Sie neu im Krypto-Bereich oder ein erfahrener Trader sind, unsere ausgewählten Tools machen Trading und Bridging schnell, sicher und zugänglich direkt in Telegram.
            </p>
            <p className="text-lg mb-6">
              Unsere <strong>Telegram-Bots</strong> ermöglichen Handel auf großen Blockchains wie Solana, Ethereum und BSC mit Funktionen wie Auto-Sniping, Copy-Trading und Echtzeit-Markteinblicken. Für <strong>Bridging</strong> arbeiten wir mit dem Maestro-Bot zusammen, der Houdini Swap für sichere, kostengünstige Cross-Chain-Übertragungen nutzt.
            </p>
            <p className="text-lg mb-6">
              Anfänger profitieren von leicht verständlichen Anleitungen, während fortgeschrittene Trader Tools wie Anti-MEV-Schutz, Rug-Pull-Filter und Multi-Wallet-Management nutzen können. Alle Bots sind nicht-verwahrend, sodass Sie die volle Kontrolle über Ihre Gelder behalten. <strong>Hinweis:</strong> Wir können Provisionen für Transaktionen über unsere Referral-Links erhalten, ohne zusätzliche Kosten für Sie.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <p className="text-orange-700 font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-orange-600">
                Der Handel und das Bridging von Kryptowährungen sind mit erheblichen Risiken verbunden, einschließlich des möglichen Verlusts Ihrer gesamten Investition. Die Preise sind stark volatil, und Smart Contracts können Schwachstellen enthalten. CryptoPulse bietet keine Finanzberatung. Führen Sie stets Ihre eigene Recherche durch und investieren Sie nur, was Sie sich leisten können zu verlieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Was sind Telegram-Krypto-Bots?
              </h3>
              <p className="text-gray-600">
                Telegram-Krypto-Bots sind automatisierte Tools innerhalb der Telegram-App, mit denen Sie Kryptowährungen kaufen, verkaufen und überbrücken können, ohne externe Plattformen zu nutzen. Sie sind nicht-verwahrend, was bedeutet, dass Sie die Kontrolle über Ihre privaten Schlüssel behalten.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wie funktioniert Bridging?
              </h3>
              <p className="text-gray-600">
                Bridging überträgt Vermögenswerte zwischen Blockchains, wie z. B. von Ethereum zu Solana. CryptoPulse nutzt den Maestro-Bot mit Houdini Swap für sichere, effiziente Übertragungen mit niedrigen Gebühren auf unterstützten Chains.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ist die Nutzung sicher?
              </h3>
              <p className="text-gray-600">
                Unsere empfohlenen Bots sind nicht-verwahrend und bieten MEV-Schutz sowie Rug-Pull-Filter. Dennoch gibt es Risiken wie Marktvolatilität und Smart-Contract-Schwachstellen. Investieren Sie verantwortungsvoll und führen Sie gründliche Recherchen durch.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wie starte ich mit einem Bot?
              </h3>
              <p className="text-gray-600">
                Besuchen Sie den Telegram-Kanal des Bots, folgen Sie den Einrichtungsanweisungen und verbinden Sie eine Wallet (neu oder bestehend). Zahlen Sie mindestens 0,1 ETH oder Äquivalent ein, dann nutzen Sie Chat-Befehle zum Handeln oder Bridgen. Unsere Anleitungen machen es für Anfänger einfach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">CryptoPulse &copy; 2025. Alle Rechte vorbehalten.</p>
          <p className="text-sm">
            <Link href="/privacy" className="hover:text-purple-400">Datenschutz</Link> | 
            <Link href="/terms" className="hover:text-purple-400 ml-2">Nutzungsbedingungen</Link>
          </p>
          <p className="text-sm mt-4">
            <strong>Haftungsausschluss:</strong> Kryptowährungsinvestitionen sind risikoreich und können zu erheblichen Verlusten führen. CryptoPulse ist kein Finanzberater. Führen Sie vor dem Investieren eine gründliche Recherche durch.
          </p>
        </div>
      </footer>
    </div>
  );
}

// src/app/bridge/page.tsx
import Link from 'next/link';
import { ArrowRight, RefreshCw, Lock, DollarSign } from 'lucide-react';

export default function BridgePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CryptoPulse</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium">Startseite</Link>
            <Link href="/bridge" className="text-purple-600 font-medium">Bridging</Link>
            <Link href="/bots" className="text-gray-600 hover:text-purple-600 font-medium">Bots</Link>
          </div>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Nahtloses Cross-Chain-Bridging
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Übertragen Sie Vermögenswerte mühelos zwischen Blockchains mit dem Maestro-Bot von CryptoPulse, unterstützt von Houdini Swap. Sicher, schnell und kostengünstig für alle Nutzer.
          </p>
          <Link
            href="/api/go/maestro"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Jetzt Bridging starten
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Funktionen-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Warum mit CryptoPulse bridgen?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Chain-Effizienz</h3>
              <p className="text-gray-600">
                Bewegen Sie Vermögenswerte zwischen Ethereum, Solana, BSC und mehr mit optimierten Routen und minimalen Gebühren über Houdini Swap.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Transaktionen</h3>
              <p className="text-gray-600">
                Genießen Sie sichere, private Übertragungen mit MEV-resistenter Technologie, die Ihre Gelder schützt.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kosteneffektiv</h3>
              <p className="text-gray-600">
                Niedrige Transaktionsgebühren (1 % Standard, 0,9 % mit Referrals) machen Bridging für alle erschwinglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert’s-Bereich */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wie man mit CryptoPulse bridgt
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Das Überbrücken von Kryptowährungen über Blockchains hinweg ist mit CryptoPulse einfach. Folgen Sie diesen Schritten für sichere Übertragungen:
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Dem Maestro-Bot beitreten:</strong> Greifen Sie auf den Maestro-Bot in Telegram zu und folgen Sie den Einrichtungsanweisungen.</li>
              <li><strong>Wallet verbinden:</strong> Erstellen Sie eine neue Wallet oder importieren Sie eine bestehende mit Ihrem privaten Schlüssel.</li>
              <li><strong>Wallet aufladen:</strong> Zahlen Sie mindestens 0,1 ETH oder Äquivalent ein, um Gebühren und Übertragungen abzudecken.</li>
              <li><strong>Chains und Token auswählen:</strong> Wählen Sie die Quell- und Ziel-Blockchain (z. B. Ethereum zu Solana) und geben Sie den Token-Betrag an.</li>
              <li><strong>Bestätigen und Bridgen:</strong> Überprüfen Sie die Transaktionsdetails, bestätigen Sie, und lassen Sie Houdini Swap den Rest für schnelle, sichere Übertragungen erledigen.</li>
            </ol>
            <p className="text-lg mt-6">
              Unser Bridging-Service unterstützt große Chains wie Ethereum, Solana, BSC, Base und TON mit Echtzeit-Tracking und niedrigen Gebühren. <strong>Hinweis:</strong> Wir können Provisionen für Bridging-Transaktionen über unsere Referral-Links erhalten, ohne zusätzliche Kosten für Sie.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <p className="text-orange-700 font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-orange-600">
                Bridging birgt Risiken, einschließlich potenzieller Schwachstellen in Smart Contracts und Marktvolatilität. Überprüfen Sie stets die Transaktionsdetails und übertragen Sie nur Gelder, deren Verlust Sie sich leisten können. CryptoPulse ist nicht für Verluste beim Bridging verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">CryptoPulse &copy; 2025. Alle Rechte vorbehalten.</p>
          <p className="text-sm">
            <Link href="/privacy" className="hover:text-purple-400">Datenschutz</Link> | 
            <Link href="/terms" className="hover:text-purple-400 ml-2">Nutzungsbedingungen</Link>
          </p>
          <p className="text-sm mt-4">
            <strong>Haftungsausschluss:</strong> Das Bridging von Kryptowährungen birgt Risiken, einschließlich potenzieller Verluste. CryptoPulse bietet keine Finanzberatung. Führen Sie vor dem Bridging eine gründliche Recherche durch.
          </p>
        </div>
      </footer>
    </div>
  );
}

// src/app/bots/page.tsx
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Shield } from 'lucide-react';

export default function BotsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">CryptoPulse</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium">Startseite</Link>
            <Link href="/bridge" className="text-gray-600 hover:text-purple-600 font-medium">Bridging</Link>
            <Link href="/bots" className="text-purple-600 font-medium">Bots</Link>
          </div>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white to-gray-100">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Smarter handeln mit Telegram-Bots
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die besten Telegram-Krypto-Trading-Bots mit CryptoPulse. Von Auto-Sniping bis Copy-Trading machen unsere ausgewählten Bots das Trading schnell und intuitiv.
          </p>
          <Link
            href="/api/go/maestro"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            Jetzt Bots entdecken
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Funktionen-Bereich */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Top-Funktionen unserer Bots
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Sniping</h3>
              <p className="text-gray-600">
                Kaufen Sie neue Token sofort bei Launch mit Hochgeschwindigkeits-Sniping, optimiert für Solana und Ethereum.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Copy-Trading</h3>
              <p className="text-gray-600">
                Spiegeln Sie die Trades von Top-Tradern automatisch, ideal für Anfänger und Profis gleichermaßen.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Erweiterte Sicherheit</h3>
              <p className="text-gray-600">
                Anti-Rug- und Honeypot-Schutz sorgen dafür, dass Ihre Trades vor Betrug sicher sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert’s-Bereich */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wie man mit Telegram-Bots handelt
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Der Handel mit den Telegram-Bots von CryptoPulse ist unkompliziert und leistungsstark. So starten Sie:
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Bot auswählen:</strong> Wählen Sie aus unserer kuratierten Liste, einschließlich Maestro, Trojan oder BONKbot, über Telegram.</li>
              <li><strong>Wallet einrichten:</strong> Erstellen oder importieren Sie eine Wallet mit mindestens 0,1 ETH oder Äquivalent.</li>
              <li><strong>Handelsparameter konfigurieren:</strong> Geben Sie Token-Vertragsadressen ein, stellen Sie Slippage ein oder aktivieren Sie Copy-Trading.</li>
              <li><strong>Trades ausführen:</strong> Nutzen Sie einfache Chat-Befehle, um in Echtzeit zu kaufen, zu verkaufen oder Trades zu überwachen.</li>
              <li><strong>Performance verfolgen:</strong> Überwachen Sie Ihr Portfolio und Markttrends direkt in Telegram.</li>
            </ol>
            <p className="text-lg mt-6">
              Unsere Bots unterstützen erweiterte Funktionen wie Limit-Orders, DCA und Multi-Wallet-Trading mit Gebühren von nur 0,9 % bei Referrals. <strong>Hinweis:</strong> Wir können Provisionen für Trades über unsere Referral-Links erhalten, ohne zusätzliche Kosten für Sie.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
              <p className="text-orange-700 font-medium mb-2">⚠️ Risikohinweis</p>
              <p className="text-sm text-orange-600">
                Der Handel mit Kryptowährungen ist mit hohen Risiken verbunden, einschließlich des potenziellen Verlusts von Geldern aufgrund von Marktvolatilität oder Smart-Contract-Problemen. Überprüfen Sie stets die Authentizität der Bots und handeln Sie verantwortungsvoll. CryptoPulse ist nicht für Handelsverluste verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">CryptoPulse &copy; 2025. Alle Rechte vorbehalten.</p>
          <p className="text-sm">
            <Link href="/privacy" className="hover:text-purple-400">Datenschutz</Link> | 
            <Link href="/terms" className="hover:text-purple-400 ml-2">Nutzungsbedingungen</Link>
          </p>
          <p className="text-sm mt-4">
            <strong>Haftungsausschluss:</strong> Der Handel mit Kryptowährungen birgt Risiken, einschließlich potenzieller Verluste. CryptoPulse bietet keine Finanzberatung. Führen Sie vor dem Handeln eine gründliche Recherche durch.
          </p>
        </div>
      </footer>
    </div>
  );
}
