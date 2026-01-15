<template>
  <div class="relative" ref="filterRef">
    <FilterButton
      label="Filters"
      :icon="true"
      icon-path="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      @click="toggleFilter"
    />

    <!-- Filter Popup -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="popupRef"
        :style="popupStyle"
        class="fixed bg-[#1a1d2e] border border-gray-700/50 rounded-xl shadow-2xl z-[9999] p-6 filters-popup w-[440px] min-w-[440px]"
      >
        <!-- Title -->
        <h3 class="text-white font-bold text-lg mb-6">Filters</h3>

        <!-- Content -->
        <div class="space-y-5">
          <!-- Visible Coin Range -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Visible Coin Range</label>
            <select class="w-full px-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm transition-colors">
              <option>Show 100</option>
              <option>Show 50</option>
              <option>Show 200</option>
              <option>Show All</option>
            </select>
          </div>

          <!-- Networks -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Networks</label>
            <select class="w-full px-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm transition-colors">
              <option>All Networks</option>
              <option>Ethereum</option>
              <option>BSC</option>
              <option>Solana</option>
              <option>Polygon</option>
            </select>
          </div>

          <!-- Category -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Category</label>
            <select class="w-full px-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm transition-colors">
              <option>All Categories</option>
              <option>DeFi</option>
              <option>NFT</option>
              <option>Gaming</option>
              <option>Meme</option>
            </select>
          </div>

          <!-- Exchange -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Exchange</label>
            <select class="w-full px-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm transition-colors">
              <option>All Exchanges</option>
              <option>Binance</option>
              <option>Coinbase</option>
              <option>Kraken</option>
              <option>KuCoin</option>
            </select>
          </div>

          <!-- Market Cap -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Market Cap</label>
            <div class="flex items-center gap-3">
              <div class="relative flex-1">
                <input
                  v-model="filters.marketCapMin"
                  type="text"
                  placeholder="Min"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              </div>
              <span class="text-gray-600">-</span>
              <div class="relative flex-1">
                <input
                  v-model="filters.marketCapMax"
                  type="text"
                  placeholder="Max"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              </div>
            </div>
          </div>

          <!-- FDV -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">FDV</label>
            <div class="flex items-center gap-3">
              <div class="relative flex-1">
                <input
                  v-model="filters.fdvMin"
                  type="text"
                  placeholder="Min"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              </div>
              <span class="text-gray-600">-</span>
              <div class="relative flex-1">
                <input
                  v-model="filters.fdvMax"
                  type="text"
                  placeholder="Max"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              </div>
            </div>
          </div>

          <!-- Price Change (24h) -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Price Change (24h)</label>
            <div class="flex items-center gap-3">
              <div class="relative flex-1">
                <input
                  v-model="filters.priceChangeMin"
                  type="text"
                  placeholder="Min"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
              </div>
              <span class="text-gray-600">-</span>
              <div class="relative flex-1">
                <input
                  v-model="filters.priceChangeMax"
                  type="text"
                  placeholder="Max"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
              </div>
            </div>
          </div>

          <!-- Volume (24h) -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Volume (24h)</label>
            <div class="flex items-center gap-3">
              <div class="relative flex-1">
                <input
                  v-model="filters.volumeMin"
                  type="text"
                  placeholder="Min"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              </div>
              <span class="text-gray-600">-</span>
              <div class="relative flex-1">
                <input
                  v-model="filters.volumeMax"
                  type="text"
                  placeholder="Max"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              </div>
            </div>
          </div>

          <!-- Volume Change (24h) -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Volume Change (24h)</label>
            <div class="flex items-center gap-3">
              <div class="relative flex-1">
                <input
                  v-model="filters.volumeChangeMin"
                  type="text"
                  placeholder="Min"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
              </div>
              <span class="text-gray-600">-</span>
              <div class="relative flex-1">
                <input
                  v-model="filters.volumeChangeMax"
                  type="text"
                  placeholder="Max"
                  class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
              </div>
            </div>
          </div>

          <!-- Age -->
          <div class="space-y-2">
            <label class="text-gray-400 text-sm font-normal">Age</label>
            <div class="flex items-center gap-3">
              <div class="relative flex-1">
                <input
                  v-model="filters.ageMin"
                  type="text"
                  placeholder="Min"
                  class="w-full pr-20 pl-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <select class="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 text-sm border-none focus:outline-none cursor-pointer">
                  <option>hours</option>
                  <option>days</option>
                  <option>months</option>
                  <option>years</option>
                </select>
              </div>
              <span class="text-gray-600">-</span>
              <div class="relative flex-1">
                <input
                  v-model="filters.ageMax"
                  type="text"
                  placeholder="Max"
                  class="w-full pr-20 pl-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
                />
                <select class="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 text-sm border-none focus:outline-none cursor-pointer">
                  <option>hours</option>
                  <option>days</option>
                  <option>months</option>
                  <option>years</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 mt-8 pt-6 border-t border-gray-700/50">
          <button
            @click="resetFilters"
            class="px-6 py-2.5 text-gray-300 hover:text-white hover:bg-[#252942] rounded-lg font-medium text-sm transition-all duration-200"
          >
            Reset
          </button>
          <button
            @click="applyFilters"
            class="flex-1 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-all duration-200"
          >
            Apply
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const filterRef = ref(null)
const popupRef = ref(null)
const popupStyle = ref({})

const filters = reactive({
  visibleRange: 'Show 100',
  network: 'All Networks',
  category: 'All Categories',
  exchange: 'All Exchanges',
  marketCapMin: '',
  marketCapMax: '',
  fdvMin: '',
  fdvMax: '',
  priceChangeMin: '',
  priceChangeMax: '',
  volumeMin: '',
  volumeMax: '',
  volumeChangeMin: '',
  volumeChangeMax: '',
  ageMin: '',
  ageMax: ''
})

const emit = defineEmits(['filter'])

const toggleFilter = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    updatePopupPosition()
  }
}

const updatePopupPosition = () => {
  // Center the popup in the middle of the window
  popupStyle.value = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

const resetFilters = () => {
  filters.visibleRange = 'Show 100'
  filters.network = 'All Networks'
  filters.category = 'All Categories'
  filters.exchange = 'All Exchanges'
  filters.marketCapMin = ''
  filters.marketCapMax = ''
  filters.fdvMin = ''
  filters.fdvMax = ''
  filters.priceChangeMin = ''
  filters.priceChangeMax = ''
  filters.volumeMin = ''
  filters.volumeMax = ''
  filters.volumeChangeMin = ''
  filters.volumeChangeMax = ''
  filters.ageMin = ''
  filters.ageMax = ''
}

const applyFilters = () => {
  emit('filter', { ...filters })
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (!isOpen.value) return

  const clickedInsideButton = filterRef.value && filterRef.value.contains(event.target)
  const clickedInsidePopup = popupRef.value && popupRef.value.contains(event.target)

  if (!clickedInsideButton && !clickedInsidePopup) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', () => {
    if (isOpen.value) {
      updatePopupPosition()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
