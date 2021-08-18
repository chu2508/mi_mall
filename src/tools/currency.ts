import currency from "currency.js"

const CNY_SYMBOL = '￥'

export const formatCNY = (value: number): string => {
  return currency(value, {symbol: CNY_SYMBOL, precision: 2}).format();
}