import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krypto Telegram Bots & Bridging – Maestro, BONKbot, BullX | One-Click Trading",
  description: "Starte in Sekunden mit Telegram-Trading-Bots: Maestro, BONKbot, BullX, SolSniperX, TradeWiz u. v. m. Bridge Coins schnell & sicher – via Houdini über Maestro. Keine Anlageberatung.",
  keywords: "Telegram Trading Bots, Krypto Bridge, Maestro Bot, BONKbot, BullX, SolSniperX, TradeWiz, Houdini Swap, DEX Trading",
  openGraph: {
    title: "One-Click Crypto Trading & Bridging",
    description: "Trade & bridge in Sekunden. Die besten Telegram-Bots für Krypto – klar erklärt, direkt startbereit.",
    type: "website",
    url: "https://one-click-crypto.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Click Crypto Trading & Bridging",
    description: "Trade & bridge in Sekunden. Die besten Telegram-Bots für Krypto – klar erklärt, direkt startbereit.",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen gradient-bg`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
