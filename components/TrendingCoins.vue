<template>
  <div class="bg-slate-800 rounded-xl shadow-xl p-6 border border-gray-700">
    <h2 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
      <span class="text-2xl">🔥</span>
      Trending
    </h2>
    <div class="space-y-3">
      <div
        v-for="(coin, index) in trendingCoins"
        :key="coin.id"
        class="flex items-center justify-between p-3 hover:bg-slate-700/50 rounded-lg transition-all duration-300 cursor-pointer group"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="flex items-center gap-3">
          <span class="text-sm font-semibold text-gray-500">{{ index + 1 }}</span>
          <div>
            <div class="font-bold text-white text-sm group-hover:text-purple-400 transition-colors">{{ coin.name }}</div>
            <div class="text-xs text-gray-500 font-semibold">{{ coin.symbol }}</div>
          </div>
        </div>
        <div :class="coin.change24h > 0 ? 'text-green-500' : 'text-red-500'" class="font-bold text-sm">
          {{ coin.change24h > 0 ? '+' : '' }}{{ coin.change24h.toFixed(2) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { trendingCoins } from '~/data/mockData.js'
</script>
