// Cryptocurrency data
export const cryptocurrencies = [
  {
    id: 1,
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 43567.89,
    change1h: 0.23,
    change24h: 2.45,
    change7d: -1.32,
    marketCap: 852000000000,
    volume24h: 28500000000,
    circulatingSupply: 19550000,
    logo: "🟠"
  },
  {
    id: 2,
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 2287.45,
    change1h: -0.15,
    change24h: 1.87,
    change7d: 3.42,
    marketCap: 275000000000,
    volume24h: 15200000000,
    circulatingSupply: 120250000,
    logo: "⬥"
  },
  {
    id: 3,
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    price: 1.00,
    change1h: 0.01,
    change24h: 0.02,
    change7d: -0.01,
    marketCap: 91500000000,
    volume24h: 52300000000,
    circulatingSupply: 91500000000,
    logo: "₮"
  },
  {
    id: 4,
    rank: 4,
    name: "BNB",
    symbol: "BNB",
    price: 312.67,
    change1h: 0.45,
    change24h: -0.78,
    change7d: 5.23,
    marketCap: 48200000000,
    volume24h: 1850000000,
    circulatingSupply: 154218217,
    logo: "🔶"
  },
  {
    id: 5,
    rank: 5,
    name: "Solana",
    symbol: "SOL",
    price: 98.45,
    change1h: 1.23,
    change24h: 5.67,
    change7d: 12.34,
    marketCap: 42500000000,
    volume24h: 3200000000,
    circulatingSupply: 431700000,
    logo: "◎"
  },
  {
    id: 6,
    rank: 6,
    name: "XRP",
    symbol: "XRP",
    price: 0.6234,
    change1h: -0.34,
    change24h: 1.23,
    change7d: -2.45,
    marketCap: 33400000000,
    volume24h: 1450000000,
    circulatingSupply: 53580000000,
    logo: "✕"
  },
  {
    id: 7,
    rank: 7,
    name: "USD Coin",
    symbol: "USDC",
    price: 1.00,
    change1h: 0.00,
    change24h: 0.01,
    change7d: 0.00,
    marketCap: 25800000000,
    volume24h: 6700000000,
    circulatingSupply: 25800000000,
    logo: "⊙"
  },
  {
    id: 8,
    rank: 8,
    name: "Cardano",
    symbol: "ADA",
    price: 0.5678,
    change1h: 0.67,
    change24h: 3.45,
    change7d: 8.92,
    marketCap: 19900000000,
    volume24h: 780000000,
    circulatingSupply: 35045000000,
    logo: "₳"
  },
  {
    id: 9,
    rank: 9,
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.0876,
    change1h: -0.23,
    change24h: 4.56,
    change7d: 15.67,
    marketCap: 12400000000,
    volume24h: 1200000000,
    circulatingSupply: 141500000000,
    logo: "Ð"
  },
  {
    id: 10,
    rank: 10,
    name: "TRON",
    symbol: "TRX",
    price: 0.1023,
    change1h: 0.12,
    change24h: -1.23,
    change7d: 2.34,
    marketCap: 9050000000,
    volume24h: 456000000,
    circulatingSupply: 88500000000,
    logo: "◬"
  },
  {
    id: 11,
    rank: 11,
    name: "Chainlink",
    symbol: "LINK",
    price: 14.23,
    change1h: 0.89,
    change24h: 2.34,
    change7d: -3.21,
    marketCap: 8300000000,
    volume24h: 567000000,
    circulatingSupply: 583000000,
    logo: "⬡"
  },
  {
    id: 12,
    rank: 12,
    name: "Polygon",
    symbol: "MATIC",
    price: 0.8456,
    change1h: -0.45,
    change24h: 6.78,
    change7d: 11.23,
    marketCap: 7850000000,
    volume24h: 445000000,
    circulatingSupply: 9280000000,
    logo: "⬢"
  },
  {
    id: 13,
    rank: 13,
    name: "Polkadot",
    symbol: "DOT",
    price: 5.67,
    change1h: 0.23,
    change24h: -2.34,
    change7d: 4.56,
    marketCap: 7200000000,
    volume24h: 234000000,
    circulatingSupply: 1270000000,
    logo: "●"
  },
  {
    id: 14,
    rank: 14,
    name: "Litecoin",
    symbol: "LTC",
    price: 72.45,
    change1h: 0.56,
    change24h: 1.23,
    change7d: -0.98,
    marketCap: 5400000000,
    volume24h: 456000000,
    circulatingSupply: 74500000,
    logo: "Ł"
  },
  {
    id: 15,
    rank: 15,
    name: "Avalanche",
    symbol: "AVAX",
    price: 34.56,
    change1h: 1.45,
    change24h: 8.23,
    change7d: 15.67,
    marketCap: 4900000000,
    volume24h: 389000000,
    circulatingSupply: 141800000,
    logo: "▲"
  }
]

// Market statistics
export const marketStats = {
  totalMarketCap: 1680000000000,
  totalVolume24h: 95000000000,
  btcDominance: 50.7,
  ethDominance: 16.4,
  activeCoins: 12453,
  markets: 42876
}

// Trending coins
export const trendingCoins = [
  { id: 5, name: "Solana", symbol: "SOL", change24h: 5.67 },
  { id: 9, name: "Dogecoin", symbol: "DOGE", change24h: 4.56 },
  { id: 15, name: "Avalanche", symbol: "AVAX", change24h: 8.23 },
  { id: 12, name: "Polygon", symbol: "MATIC", change24h: 6.78 },
  { id: 8, name: "Cardano", symbol: "ADA", change24h: 3.45 }
]

// Real-World Assets data
export const realWorldAssets = [
  {
    id: 1,
    rank: 1,
    name: "Gold",
    symbol: "XAU",
    price: 2047.35,
    change24h: 0.85,
    change7d: 2.14,
    marketCap: 27550000000000,
    volume24h: 15200000000,
    tokenMarketCap: 850000000,
    tokenVolume24h: 45000000,
    logo: "🥇"
  },
  {
    id: 2,
    rank: 2,
    name: "NVIDIA",
    symbol: "NVDA",
    price: 925.45,
    change24h: 3.45,
    change7d: 8.92,
    marketCap: 4650000000000,
    volume24h: 8500000000,
    tokenMarketCap: 234000000,
    tokenVolume24h: 12000000,
    logo: "🟢"
  },
  {
    id: 3,
    rank: 3,
    name: "Apple",
    symbol: "AAPL",
    price: 189.67,
    change24h: -0.45,
    change7d: 1.23,
    marketCap: 4030000000000,
    volume24h: 6200000000,
    tokenMarketCap: 189000000,
    tokenVolume24h: 8500000,
    logo: "🍎"
  },
  {
    id: 4,
    rank: 4,
    name: "Microsoft",
    symbol: "MSFT",
    price: 415.23,
    change24h: 1.23,
    change7d: 3.45,
    marketCap: 3790000000000,
    volume24h: 5800000000,
    tokenMarketCap: 176000000,
    tokenVolume24h: 7200000,
    logo: "🪟"
  },
  {
    id: 5,
    rank: 5,
    name: "Amazon",
    symbol: "AMZN",
    price: 178.45,
    change24h: 2.15,
    change7d: 5.67,
    marketCap: 2890000000000,
    volume24h: 4500000000,
    tokenMarketCap: 145000000,
    tokenVolume24h: 5600000,
    logo: "📦"
  },
  {
    id: 6,
    rank: 6,
    name: "Silver",
    symbol: "XAG",
    price: 24.85,
    change24h: 1.45,
    change7d: 3.21,
    marketCap: 1450000000000,
    volume24h: 2100000000,
    tokenMarketCap: 98000000,
    tokenVolume24h: 4200000,
    logo: "⚪"
  },
  {
    id: 7,
    rank: 7,
    name: "Tesla",
    symbol: "TSLA",
    price: 234.56,
    change24h: -1.23,
    change7d: 4.56,
    marketCap: 1230000000000,
    volume24h: 3800000000,
    tokenMarketCap: 87000000,
    tokenVolume24h: 3900000,
    logo: "⚡"
  },
  {
    id: 8,
    rank: 8,
    name: "Real Estate Index",
    symbol: "REIT",
    price: 156.78,
    change24h: 0.67,
    change7d: 2.34,
    marketCap: 890000000000,
    volume24h: 1200000000,
    tokenMarketCap: 67000000,
    tokenVolume24h: 2800000,
    logo: "🏢"
  },
  {
    id: 9,
    rank: 9,
    name: "Oil Brent",
    symbol: "BRT",
    price: 82.45,
    change24h: 2.34,
    change7d: -1.45,
    marketCap: 650000000000,
    volume24h: 980000000,
    tokenMarketCap: 54000000,
    tokenVolume24h: 2100000,
    logo: "🛢️"
  },
  {
    id: 10,
    rank: 10,
    name: "Platinum",
    symbol: "XPT",
    price: 945.67,
    change24h: 0.89,
    change7d: 1.78,
    marketCap: 420000000000,
    volume24h: 670000000,
    tokenMarketCap: 45000000,
    tokenVolume24h: 1800000,
    logo: "⚫"
  },
  {
    id: 11,
    rank: 11,
    name: "Copper",
    symbol: "XCU",
    price: 4.23,
    change24h: 1.56,
    change7d: 3.89,
    marketCap: 380000000000,
    volume24h: 560000000,
    tokenMarketCap: 38000000,
    tokenVolume24h: 1500000,
    logo: "🟤"
  },
  {
    id: 12,
    rank: 12,
    name: "Google",
    symbol: "GOOGL",
    price: 156.89,
    change24h: 0.78,
    change7d: 2.45,
    marketCap: 2100000000000,
    volume24h: 3400000000,
    tokenMarketCap: 123000000,
    tokenVolume24h: 4800000,
    logo: "🔍"
  }
]

// Categories
export const categories = [
  { name: "All Cryptocurrencies", slug: "all" },
  { name: "DeFi", slug: "defi" },
  { name: "NFT", slug: "nft" },
  { name: "Gaming", slug: "gaming" },
  { name: "Stablecoins", slug: "stablecoins" },
  { name: "Metaverse", slug: "metaverse" },
  { name: "Real-World Assets", slug: "real-world-assets" }
]

// Helper function to format large numbers
export function formatNumber(num) {
  if (num >= 1000000000000) {
    return '$' + (num / 1000000000000).toFixed(2) + 'T'
  }
  if (num >= 1000000000) {
    return '$' + (num / 1000000000).toFixed(2) + 'B'
  }
  if (num >= 1000000) {
    return '$' + (num / 1000000).toFixed(2) + 'M'
  }
  if (num >= 1000) {
    return '$' + (num / 1000).toFixed(2) + 'K'
  }
  return '$' + num.toFixed(2)
}

// Helper function to format price
export function formatPrice(price) {
  if (price >= 1) {
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  return '$' + price.toFixed(4)
}
