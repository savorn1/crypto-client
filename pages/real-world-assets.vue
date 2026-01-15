<template>
  <div class="min-h-screen bg-slate-950">
    <Header />
    <SecondaryNav />

    <!-- Page Header -->
    <div class="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-gray-700">
      <div class="max-w-[1920px] mx-auto px-6 py-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">🏦</span>
          <h1 class="text-3xl font-bold text-white">Real-World Assets (RWA)</h1>
        </div>
        <p class="text-gray-400 text-lg max-w-4xl">
          Track tokenized real-world assets including commodities, equities, and traditional financial instruments converted to blockchain tokens.
          A reliable resource for monitoring institutional adoption, DeFi integration, and regulatory developments in the tokenization space.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <!-- Total RWA Market Cap -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300 shadow-xl">
              <div class="flex items-start justify-between mb-3">
                <div class="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-400 text-sm font-medium mb-2">Total RWA Market Cap</p>
              <p class="text-white text-3xl font-bold tracking-tight">{{ formatNumber(totalMarketCap) }}</p>
              <div class="mt-3 flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">Live</span>
              </div>
            </div>
          </div>

          <!-- 24h Volume -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300 shadow-xl">
              <div class="flex items-start justify-between mb-3">
                <div class="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-400 text-sm font-medium mb-2">24h Volume</p>
              <p class="text-white text-3xl font-bold tracking-tight">{{ formatNumber(totalVolume) }}</p>
              <div class="mt-3 flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">+24h</span>
              </div>
            </div>
          </div>

          <!-- Total Assets -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300 shadow-xl">
              <div class="flex items-start justify-between mb-3">
                <div class="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-400 text-sm font-medium mb-2">Total Assets</p>
              <p class="text-white text-3xl font-bold tracking-tight">{{ realWorldAssets.length }}</p>
              <div class="mt-3 flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Assets</span>
              </div>
            </div>
          </div>

          <!-- Token Market Cap -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 group-hover:border-orange-400/50 transition-all duration-300 shadow-xl">
              <div class="flex items-start justify-between mb-3">
                <div class="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-400 text-sm font-medium mb-2">Token Market Cap</p>
              <p class="text-white text-3xl font-bold tracking-tight">{{ formatNumber(totalTokenMarketCap) }}</p>
              <div class="mt-3 flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">Tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TableFilters />

    <div class="max-w-[1920px] mx-auto px-6 py-6">
      <!-- Main Table -->
      <div class="bg-slate-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-800 border-b border-gray-700">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">#</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Asset</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">24h %</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">7d %</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Market Cap</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Volume(24h)</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Token MCap</th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Token Vol(24h)</th>
                <th class="px-6 py-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">7d Chart</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800">
              <tr
                v-for="asset in realWorldAssets"
                :key="asset.id"
                class="hover:bg-slate-800/50 transition-colors duration-200"
              >
                <td class="px-6 py-4 whitespace-nowrap text-gray-400 font-medium">{{ asset.rank }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl">{{ asset.logo }}</span>
                    <div>
                      <div class="font-semibold text-white">{{ asset.name }}</div>
                      <div class="text-sm text-gray-400">{{ asset.symbol }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                  {{ formatPrice(asset.price) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold" :class="asset.change24h >= 0 ? 'text-green-400' : 'text-red-400'">
                  {{ asset.change24h >= 0 ? '+' : '' }}{{ asset.change24h.toFixed(2) }}%
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold" :class="asset.change7d >= 0 ? 'text-green-400' : 'text-red-400'">
                  {{ asset.change7d >= 0 ? '+' : '' }}{{ asset.change7d.toFixed(2) }}%
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                  {{ formatNumber(asset.marketCap) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                  {{ formatNumber(asset.volume24h) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                  {{ formatNumber(asset.tokenMarketCap) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                  {{ formatNumber(asset.tokenVolume24h) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex justify-center">
                    <svg width="100" height="40" class="sparkline">
                      <polyline
                        :points="generateSparkline(asset.change7d)"
                        fill="none"
                        :stroke="asset.change7d >= 0 ? '#4ade80' : '#f87171'"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-slate-800 border-t border-gray-700 px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="text-gray-400 text-sm">
              Showing <span class="font-semibold text-white">{{ realWorldAssets.length }}</span> of <span class="font-semibold text-white">{{ realWorldAssets.length }}</span> assets
            </div>
            <div class="flex items-center gap-2">
              <button class="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Previous
              </button>
              <button class="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold">1</button>
              <button class="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Info Section -->
      <div class="mt-8 bg-slate-900 rounded-xl shadow-2xl p-8 border border-gray-800">
        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-3xl">💡</span> About Real-World Assets (RWA)
        </h2>
        <div class="text-gray-300 leading-relaxed space-y-4">
          <p>
            Real-World Assets (RWA) represent the tokenization of traditional financial assets on blockchain networks.
            This innovative approach bridges the gap between traditional finance (TradFi) and decentralized finance (DeFi),
            enabling fractional ownership, increased liquidity, and 24/7 trading of assets that were previously illiquid or inaccessible.
          </p>
          <p>
            The RWA sector includes tokenized versions of:
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Precious Metals:</strong> Gold, Silver, Platinum, and other commodities</li>
            <li><strong>Equities:</strong> Tokenized stocks from major companies like Apple, Microsoft, Tesla, and more</li>
            <li><strong>Real Estate:</strong> Property-backed tokens and real estate investment trusts (REITs)</li>
            <li><strong>Commodities:</strong> Oil, copper, agricultural products, and other raw materials</li>
            <li><strong>Bonds and Treasury Securities:</strong> Government and corporate debt instruments</li>
          </ul>
          <p>
            This page tracks the total market capitalization, trading volumes, and price movements of these tokenized assets,
            providing insights into institutional adoption, DeFi integration, and regulatory developments shaping the future of asset tokenization.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { realWorldAssets, formatNumber, formatPrice } from '~/data/mockData.js'

useSeoMeta({
  title: 'Real-World Assets (RWA) - Tokenized Assets Tracker | CoinTracker',
  ogTitle: 'Real-World Assets (RWA) - Tokenized Assets Tracker | CoinTracker',
  description: 'Track tokenized real-world assets including commodities, equities, and traditional financial instruments. Monitor RWA prices, market cap, and trading volumes.',
  ogDescription: 'Track tokenized real-world assets including commodities, equities, and traditional financial instruments. Monitor RWA prices, market cap, and trading volumes.',
  twitterCard: 'summary_large_image',
})

const totalMarketCap = computed(() => {
  return realWorldAssets.reduce((sum, asset) => sum + asset.marketCap, 0)
})

const totalVolume = computed(() => {
  return realWorldAssets.reduce((sum, asset) => sum + asset.volume24h, 0)
})

const totalTokenMarketCap = computed(() => {
  return realWorldAssets.reduce((sum, asset) => sum + asset.tokenMarketCap, 0)
})

const generateSparkline = (change7d) => {
  // Generate simple sparkline points based on 7d change
  const points = []
  const width = 100
  const height = 40
  const steps = 7

  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width
    // Create a wave pattern that ends higher/lower based on change7d
    const variation = Math.sin(i * 0.8) * 5
    const trend = (change7d / 100) * height * (i / steps)
    const y = (height / 2) - trend + variation
    points.push(`${x},${y}`)
  }

  return points.join(' ')
}
</script>

<style scoped>
.sparkline {
  filter: drop-shadow(0 0 2px currentColor);
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
