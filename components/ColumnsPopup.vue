<template>
  <div class="relative" ref="filterRef">
    <FilterButton
      label="Columns"
      :icon="true"
      icon-path="M4 6h16M4 10h16M4 14h16M4 18h16"
      @click="toggleFilter"
    />

    <!-- Columns Popup -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="popupRef"
        :style="popupStyle"
        class="fixed bg-[#1a1d2e] border border-gray-700/50 rounded-xl shadow-2xl z-[9999] p-6 columns-popup w-[520px] min-w-[520px] max-h-[600px] overflow-y-auto"
      >
        <!-- Title -->
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-white font-bold text-lg">Choose up to 7/12 metrics</h3>
          <button
            @click="resetColumns"
            class="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Restart
          </button>
        </div>

        <!-- Subtitle -->
        <p class="text-gray-400 text-sm mb-5">Add, delete and sort metrics just how you need it</p>

        <!-- Preset Dropdown -->
        <div class="mb-5">
          <select
            v-model="selectedPreset"
            class="w-full px-3 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm font-medium transition-colors"
          >
            <option value="classic">Classic</option>
            <option value="trading">Trading</option>
            <option value="defi">DeFi</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <!-- Selected Metrics -->
        <div class="space-y-2 mb-5">
          <div
            v-for="(metric, index) in selectedMetrics"
            :key="metric.id"
            class="flex items-center justify-between bg-[#252942] px-3 py-2.5 rounded-lg border border-transparent hover:border-gray-600/50 transition-colors"
          >
            <div class="flex items-center gap-3">
              <span class="text-gray-400 text-sm font-medium">{{ index + 1 }}</span>
              <span class="text-white text-sm">{{ metric.label }}</span>
            </div>
            <div class="flex items-center gap-1">
              <button
                v-if="metric.sortable !== false"
                class="p-1.5 hover:bg-[#1a1d2e] rounded transition-colors"
              >
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
              <button
                @click="removeMetric(metric.id)"
                class="p-1.5 hover:bg-[#1a1d2e] rounded transition-colors"
              >
                <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Available Metrics by Category -->
        <div class="space-y-5 mb-6">
          <!-- Price Section -->
          <div>
            <h4 class="text-gray-500 text-xs font-semibold mb-2">Price</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="metric in availableMetrics.price"
                :key="metric.id"
                @click="toggleMetric(metric)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isMetricSelected(metric.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#252942] text-gray-300 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
                ]"
              >
                {{ metric.label }}
              </button>
            </div>
          </div>

          <!-- Price Change Section -->
          <div>
            <h4 class="text-gray-500 text-xs font-semibold mb-2">Price Change</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="metric in availableMetrics.priceChange"
                :key="metric.id"
                @click="toggleMetric(metric)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isMetricSelected(metric.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#252942] text-gray-300 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
                ]"
              >
                {{ metric.label }}
              </button>
            </div>
          </div>

          <!-- Market Cap Section -->
          <div>
            <h4 class="text-gray-500 text-xs font-semibold mb-2">Market Cap</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="metric in availableMetrics.marketCap"
                :key="metric.id"
                @click="toggleMetric(metric)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isMetricSelected(metric.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#252942] text-gray-300 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
                ]"
              >
                {{ metric.label }}
              </button>
            </div>
          </div>

          <!-- Volume Section -->
          <div>
            <h4 class="text-gray-500 text-xs font-semibold mb-2">Volume</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="metric in availableMetrics.volume"
                :key="metric.id"
                @click="toggleMetric(metric)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isMetricSelected(metric.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#252942] text-gray-300 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
                ]"
              >
                {{ metric.label }}
              </button>
            </div>
          </div>

          <!-- Supply Section -->
          <div>
            <h4 class="text-gray-500 text-xs font-semibold mb-2">Supply</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="metric in availableMetrics.supply"
                :key="metric.id"
                @click="toggleMetric(metric)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isMetricSelected(metric.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#252942] text-gray-300 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
                ]"
              >
                {{ metric.label }}
              </button>
            </div>
          </div>

          <!-- Charts Section -->
          <div>
            <h4 class="text-gray-500 text-xs font-semibold mb-2">Charts</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="metric in availableMetrics.charts"
                :key="metric.id"
                @click="toggleMetric(metric)"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isMetricSelected(metric.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#252942] text-gray-300 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
                ]"
              >
                {{ metric.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 pt-4 border-t border-gray-700/50">
          <button
            @click="cancelChanges"
            class="px-5 py-2.5 text-gray-300 hover:text-white hover:bg-[#252942] rounded-lg font-medium text-sm transition-all duration-200"
          >
            Cancel
          </button>
          <button
            @click="applyChanges"
            class="flex-1 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-all duration-200"
          >
            Apply Changes
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
const selectedPreset = ref('classic')

const selectedMetrics = ref([
  { id: '1h', label: '1h %', sortable: true },
  { id: '24h', label: '24h %', sortable: true },
  { id: '7d', label: '7d %', sortable: true },
  { id: 'marketCap', label: 'Market Cap', sortable: true },
  { id: 'volume24h', label: 'Volume(24h)', sortable: true },
  { id: 'circulatingSupply', label: 'Circulating Supply', sortable: true },
  { id: '7dChart', label: '7d Chart', sortable: false }
])

const availableMetrics = reactive({
  price: [
    { id: 'price', label: 'Price' },
    { id: 'priceBTC', label: 'Price in BTC' },
    { id: 'priceETH', label: 'Price in ETH' },
    { id: 'ath', label: 'ATH' },
    { id: 'atl', label: 'ATL' },
    { id: '24hHigh', label: '24h high' },
    { id: '24hLow', label: '24h low' },
    { id: 'fromATH', label: 'From ATH' },
    { id: 'fromATL', label: 'From ATL' }
  ],
  priceChange: [
    { id: '1h', label: '1h %' },
    { id: '24h', label: '24h %' },
    { id: '7d', label: '7d %' },
    { id: '30d', label: '30d %' },
    { id: '60d', label: '60d %' },
    { id: '90d', label: '90d %' },
    { id: 'ytd', label: 'YTD %' },
    { id: '1hBTC', label: '1h% in BTC' },
    { id: '24hBTC', label: '24h% in BTC' },
    { id: '1hETH', label: '1h% in ETH' },
    { id: '24hETH', label: '24h% in ETH' }
  ],
  marketCap: [
    { id: 'marketCap', label: 'Market Cap' },
    { id: 'fullyDiluted', label: 'Fully Diluted Mcap' }
  ],
  volume: [
    { id: 'volume24h', label: 'Volume(24h)' },
    { id: 'volume7d', label: 'Volume(7d)' },
    { id: 'volume30d', label: 'Volume(30d)' },
    { id: 'volumeMcap', label: 'Volume / Mcap' }
  ],
  supply: [
    { id: 'circulatingSupply', label: 'Circulating Supply' },
    { id: 'totalSupply', label: 'Total Supply' },
    { id: 'maxSupply', label: 'Max Supply' }
  ],
  charts: [
    { id: '24hChart', label: '24h Chart' },
    { id: '7dChart', label: '7d Chart' },
    { id: '30dChart', label: '30d Chart' },
    { id: '60dChart', label: '60d Chart' },
    { id: '90dChart', label: '90d Chart' }
  ]
})

const emit = defineEmits(['columns'])

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

const isMetricSelected = (id) => {
  return selectedMetrics.value.some(m => m.id === id)
}

const toggleMetric = (metric) => {
  const index = selectedMetrics.value.findIndex(m => m.id === metric.id)

  if (index > -1) {
    // Remove metric
    selectedMetrics.value.splice(index, 1)
  } else {
    // Add metric (max 12)
    if (selectedMetrics.value.length < 12) {
      selectedMetrics.value.push({ ...metric, sortable: !metric.id.includes('Chart') })
    }
  }
}

const removeMetric = (id) => {
  const index = selectedMetrics.value.findIndex(m => m.id === id)
  if (index > -1) {
    selectedMetrics.value.splice(index, 1)
  }
}

const resetColumns = () => {
  selectedMetrics.value = [
    { id: '1h', label: '1h %', sortable: true },
    { id: '24h', label: '24h %', sortable: true },
    { id: '7d', label: '7d %', sortable: true },
    { id: 'marketCap', label: 'Market Cap', sortable: true },
    { id: 'volume24h', label: 'Volume(24h)', sortable: true },
    { id: 'circulatingSupply', label: 'Circulating Supply', sortable: true },
    { id: '7dChart', label: '7d Chart', sortable: false }
  ]
  selectedPreset.value = 'classic'
}

const cancelChanges = () => {
  isOpen.value = false
}

const applyChanges = () => {
  emit('columns', selectedMetrics.value)
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
