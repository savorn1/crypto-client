# CoinTracker - CoinMarketCap Clone

A modern cryptocurrency tracking website built with Nuxt 3 and Tailwind CSS, inspired by CoinMarketCap.

## Features

- **Live Cryptocurrency Rankings** - View top cryptocurrencies ranked by market cap
- **Market Statistics** - Global market data including total market cap, 24h volume, and dominance stats
- **Price Tracking** - Real-time price information with 1h, 24h, and 7d percentage changes
- **Trending Coins** - Sidebar widget showing currently trending cryptocurrencies
- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface similar to CoinMarketCap

## Tech Stack

- **Nuxt 3** - Vue 3 framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Project Structure

```
├── app/
│   └── app.vue              # Main app component
├── assets/
│   └── css/
│       └── main.css         # Global styles and Tailwind config
├── components/
│   ├── Header.vue           # Main navigation header
│   ├── MarketStats.vue      # Market statistics banner
│   ├── CryptoTable.vue      # Cryptocurrency rankings table
│   └── TrendingCoins.vue    # Trending coins sidebar
├── data/
│   └── mockData.js          # Mock cryptocurrency data
├── layouts/
│   └── default.vue          # Default layout with footer
├── pages/
│   └── index.vue            # Homepage
└── nuxt.config.ts           # Nuxt configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Components

### CryptoTable
Main component displaying cryptocurrency rankings with:
- Rank number
- Coin name and symbol with logo
- Current price
- Percentage changes (1h, 24h, 7d)
- Market cap
- 24h volume
- Circulating supply

### MarketStats
Banner showing global market statistics:
- Total number of cryptocurrencies
- Total number of markets
- Total market cap
- 24h trading volume
- BTC and ETH dominance percentages

### TrendingCoins
Sidebar widget displaying trending cryptocurrencies with their 24h percentage changes.

### Header
Navigation header with:
- Logo and branding
- Main navigation links
- Search bar
- Sign in button

## Data Structure

The app uses mock data stored in `data/mockData.js`. Each cryptocurrency object contains:

```javascript
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
}
```

## Future Enhancements

- Integration with real cryptocurrency APIs (CoinGecko, CoinMarketCap)
- Live price updates using WebSockets
- Individual coin detail pages
- Price charts and historical data
- Portfolio tracking functionality
- User authentication
- Favorites/watchlist feature
- Price alerts
- Multiple currency support
- Dark mode

## License

MIT License - feel free to use this project for learning or as a template for your own cryptocurrency tracking application.

## Credits

Design inspired by [CoinMarketCap](https://coinmarketcap.com/)
