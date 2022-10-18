import { Currency, ETHER, Token } from 'gstswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'GST'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
