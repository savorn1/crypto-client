<template>
  <div class="bg-gradient-to-r from-slate-800 via-purple-900 to-violet-900 text-white py-6 border-b-4 border-teal-400 shadow-2xl shine-effect">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
        <StatCard
          label="Cryptocurrencies"
          :value="marketStats.activeCoins"
          icon="💰"
          format="number"
          :delay="0"
        />

        <StatCard
          label="Markets"
          :value="marketStats.markets"
          icon="📊"
          format="number"
          :delay="0.1"
        />

        <StatCard
          label="Market Cap"
          :value="formatNumber(marketStats.totalMarketCap)"
          icon="💵"
          value-color="text-emerald-300"
          :delay="0.2"
        />

        <StatCard
          label="24h Volume"
          :value="formatNumber(marketStats.totalVolume24h)"
          icon="📈"
          value-color="text-cyan-300"
          :delay="0.3"
        />

        <StatCard
          label="BTC Dominance"
          :value="marketStats.btcDominance"
          icon="🟠"
          value-color="text-amber-300"
          format="percent"
          :delay="0.4"
        />

        <StatCard
          label="ETH Dominance"
          :value="marketStats.ethDominance"
          icon="⬥"
          value-color="text-purple-300"
          format="percent"
          :delay="0.5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { marketStats, formatNumber } from '~/data/mockData.js'
</script>
