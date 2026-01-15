<template>
  <div class="min-h-screen bg-slate-950">
    <Header />
    <SecondaryNav />
    <MarketIndicators />
    <TableFilters />

    <div class="max-w-[1920px] mx-auto px-6 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-3">
          <CryptoTable />
        </div>

        <div class="lg:col-span-1 space-y-6">
          <TrendingCoins />

          <div class="bg-slate-800 rounded-xl shadow-xl p-6 border border-gray-700">
            <h2 class="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span class="text-2xl">📂</span> Categories
            </h2>
            <div class="space-y-2">
              <NuxtLink
                v-for="(category, index) in categories"
                :key="category.slug"
                :to="`/${category.slug}`"
                class="flex items-center justify-between text-gray-300 hover:text-purple-400 py-3 px-3 border-b border-gray-700 last:border-b-0 transition-all duration-300 hover:bg-slate-700 rounded-lg font-semibold group"
              >
                <span>{{ category.name }}</span>
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </NuxtLink>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl p-6 text-white">
            <h3 class="text-2xl font-extrabold mb-2 flex items-center gap-2">
              <span class="text-3xl">📱</span> Get the App
            </h3>
            <p class="text-sm mb-4 font-semibold text-purple-100">
              Track crypto prices on the go with our mobile app
            </p>
            <button class="w-full bg-white text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Download Now
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10 bg-slate-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 class="text-3xl font-extrabold mb-4 text-white">About CoinTracker</h2>
        <p class="text-gray-300 leading-relaxed text-lg">
          CoinTracker is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space.
          Its mission is to make crypto discoverable and efficient globally by empowering retail users with unbiased, high quality and
          accurate information for drawing their own informed conclusions.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { categories } from '~/data/mockData.js'

useSeoMeta({
  title: 'CoinTracker - Cryptocurrency Prices, Charts & Market Cap',
  ogTitle: 'CoinTracker - Cryptocurrency Prices, Charts & Market Cap',
  description: 'Top cryptocurrency prices and charts, listed by market cap. Free access to current and historic data for Bitcoin and thousands of altcoins.',
  ogDescription: 'Top cryptocurrency prices and charts, listed by market cap. Free access to current and historic data for Bitcoin and thousands of altcoins.',
  twitterCard: 'summary_large_image',
})
</script>
