import { NextRequest, NextResponse } from 'next/server'

// Mapping von slug zu Referral-Links
const referralMap: Record<string, string> = {
  maestro: 'https://t.me/maestro?start=r-schmied0815',
  bullx: 'https://t.me/bull_x_trading_bot?start=ref_01z8ia',
  solsniperx: 'https://t.me/SolSniper_X_bot?start=ref_7SaiUk',
  bonkbot: 'https://t.me/BonkBot_Original_Bot?start=ref_zzyre',
  blum: 'https://t.me/BlumCryptoTradingBot?start=fUWB8pIqKi',
  soltradingbot: 'https://t.me/SolTradingBot?start=jOXoZ6gZY',
  hector: 'https://t.me/hector_trojanbot?start=r-schmied0815',
  tradewiz: 'https://t.me/TradeWiz_Solbot?start=r-WLRZWOBV5L'
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params

  // Prüfe ob slug existiert
  if (!referralMap[slug]) {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }

  // Baue URL mit UTM-Parametern
  const baseUrl = referralMap[slug]
  const urlObj = new URL(baseUrl)

  // UTM-Parameter hinzufügen
  urlObj.searchParams.set('utm_source', 'oneclick')
  urlObj.searchParams.set('utm_medium', 'site')
  urlObj.searchParams.set('utm_campaign', slug)

  // 302 Redirect
  return NextResponse.redirect(urlObj.toString(), 302)
}
