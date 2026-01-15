<template>
  <div class="bg-slate-800 rounded-xl overflow-hidden border border-gray-700">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-700 bg-slate-900/50 text-xs text-gray-400">
            <th class="px-4 py-4 text-left font-bold">#</th>
            <th class="px-4 py-4 text-left font-bold">Name</th>
            <th class="px-4 py-4 text-right font-bold">Price</th>
            <th class="px-4 py-4 text-right font-bold">1h %</th>
            <th class="px-4 py-4 text-right font-bold">24h %</th>
            <th class="px-4 py-4 text-right font-bold">7d %</th>
            <th class="px-4 py-4 text-right font-bold">Market Cap</th>
            <th class="px-4 py-4 text-right font-bold">Volume(24h)</th>
            <th class="px-4 py-4 text-right font-bold">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(crypto, index) in cryptocurrencies"
            :key="crypto.id"
            class="border-b border-gray-700/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <td class="px-4 py-5 text-sm">
              <span class="font-semibold text-gray-400">{{ crypto.rank }}</span>
            </td>
            <td class="px-4 py-5">
              <div class="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                <span class="text-2xl transform group-hover:rotate-12 transition-transform duration-300">{{ crypto.logo }}</span>
                <div>
                  <div class="font-bold text-white text-base">{{ crypto.name }}</div>
                  <div class="text-xs text-gray-500 font-semibold">{{ crypto.symbol }}</div>
                </div>
              </div>
            </td>
            <td class="px-4 py-5 text-right font-bold text-base text-white">
              {{ formatPrice(crypto.price) }}
            </td>
            <td class="px-4 py-5 text-right font-bold text-sm" :class="getChangeClass(crypto.change1h)">
              {{ formatChange(crypto.change1h) }}
            </td>
            <td class="px-4 py-5 text-right font-bold text-sm" :class="getChangeClass(crypto.change24h)">
              {{ formatChange(crypto.change24h) }}
            </td>
            <td class="px-4 py-5 text-right font-bold text-sm" :class="getChangeClass(crypto.change7d)">
              {{ formatChange(crypto.change7d) }}
            </td>
            <td class="px-4 py-5 text-right font-semibold text-gray-300">
              {{ formatNumber(crypto.marketCap) }}
            </td>
            <td class="px-4 py-5 text-right font-semibold text-gray-300">
              {{ formatNumber(crypto.volume24h) }}
            </td>
            <td class="px-4 py-5 text-right">
              <div class="text-gray-400 text-sm">{{ crypto.circulatingSupply.toLocaleString() }} <span class="text-gray-500">{{ crypto.symbol }}</span></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { cryptocurrencies, formatNumber, formatPrice } from '~/data/mockData.js'

const getChangeClass = (change) => {
  if (change > 0) return 'text-emerald-700'
  if (change < 0) return 'text-rose-700'
  return 'text-gray-600'
}

const formatChange = (change) => {
  const sign = change > 0 ? '+' : ''
  return `${sign}${change.toFixed(2)}%`
}
</script>
