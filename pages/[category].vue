<template>
  <div class="min-h-screen bg-slate-950">
    <Header />
    <SecondaryNav />

    <div class="max-w-7xl mx-auto px-4 py-10">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-white mb-2 capitalize">{{ categoryName }}</h1>
        <p class="text-gray-400">Explore cryptocurrencies in the {{ categoryName }} category</p>
      </div>

      <div class="bg-slate-800 rounded-xl overflow-hidden border border-gray-700">
        <div class="p-6">
          <p class="text-gray-300 text-center py-16">
            Category page for {{ categoryName }} - Coming soon!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const category = computed(() => route.params.category)
const categoryName = computed(() =>
  category.value.charAt(0).toUpperCase() + category.value.slice(1).replace(/-/g, ' ')
)

useSeoMeta({
  title: () => `${categoryName.value} - CoinTracker`,
  ogTitle: () => `${categoryName.value} - CoinTracker`,
  description: () => `Explore ${categoryName.value} cryptocurrencies and track their prices, market cap, and performance.`,
  ogDescription: () => `Explore ${categoryName.value} cryptocurrencies and track their prices, market cap, and performance.`,
})
</script>