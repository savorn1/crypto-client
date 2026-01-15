<template>
  <div class="relative" ref="dropdownRef">
    <FilterButton
      label="More"
      :has-dropdown="true"
      @click="toggleDropdown"
    />

    <!-- Dropdown Menu -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        :style="dropdownStyle"
        class="fixed bg-slate-800 border border-gray-700 rounded-lg shadow-2xl w-64 max-h-96 overflow-y-auto z-50"
      >
        <!-- Search Box -->
        <div class="sticky top-0 bg-slate-800 p-3 border-b border-gray-700">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search networks..."
            class="w-full px-3 py-2 bg-slate-900 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
          />
        </div>

        <!-- Network Categories -->
        <div class="py-2">
          <!-- Layer 1 -->
          <div class="px-3 py-2">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Layer 1</div>
            <div v-for="network in filteredNetworks.layer1" :key="network.name" class="group">
              <button
                @click="selectNetwork(network)"
                class="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-left"
              >
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full" :style="{ backgroundColor: network.color }"></span>
                  <span class="text-white text-sm font-semibold">{{ network.name }}</span>
                </div>
                <span class="text-xs text-gray-500">${{ network.tvl }}</span>
              </button>
            </div>
          </div>

          <!-- Layer 2 -->
          <div class="px-3 py-2 border-t border-gray-700">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Layer 2</div>
            <div v-for="network in filteredNetworks.layer2" :key="network.name" class="group">
              <button
                @click="selectNetwork(network)"
                class="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-left"
              >
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full" :style="{ backgroundColor: network.color }"></span>
                  <span class="text-white text-sm font-semibold">{{ network.name }}</span>
                </div>
                <span class="text-xs text-gray-500">${{ network.tvl }}</span>
              </button>
            </div>
          </div>

          <!-- DeFi Chains -->
          <div class="px-3 py-2 border-t border-gray-700">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">DeFi Chains</div>
            <div v-for="network in filteredNetworks.defi" :key="network.name" class="group">
              <button
                @click="selectNetwork(network)"
                class="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-left"
              >
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full" :style="{ backgroundColor: network.color }"></span>
                  <span class="text-white text-sm font-semibold">{{ network.name }}</span>
                </div>
                <span class="text-xs text-gray-500">${{ network.tvl }}</span>
              </button>
            </div>
          </div>

          <!-- Meme Chains -->
          <div class="px-3 py-2 border-t border-gray-700">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Meme & Community</div>
            <div v-for="network in filteredNetworks.meme" :key="network.name" class="group">
              <button
                @click="selectNetwork(network)"
                class="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-left"
              >
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full" :style="{ backgroundColor: network.color }"></span>
                  <span class="text-white text-sm font-semibold">{{ network.name }}</span>
                </div>
                <span class="text-xs text-gray-500">${{ network.tvl }}</span>
              </button>
            </div>
          </div>

          <!-- Other Networks -->
          <div class="px-3 py-2 border-t border-gray-700">
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Other Networks</div>
            <div v-for="network in filteredNetworks.other" :key="network.name" class="group">
              <button
                @click="selectNetwork(network)"
                class="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-left"
              >
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full" :style="{ backgroundColor: network.color }"></span>
                  <span class="text-white text-sm font-semibold">{{ network.name }}</span>
                </div>
                <span class="text-xs text-gray-500">${{ network.tvl }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="noResults" class="px-4 py-8 text-center">
          <p class="text-gray-500 text-sm">No networks found</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const searchQuery = ref('')
const dropdownRef = ref(null)
const dropdownStyle = ref({})

const networks = {
  layer1: [
    { name: 'Ethereum', color: '#627EEA', tvl: '45.2B' },
    { name: 'Solana', color: '#14F195', tvl: '4.8B' },
    { name: 'Cardano', color: '#0033AD', tvl: '1.2B' },
    { name: 'Avalanche', color: '#E84142', tvl: '2.1B' },
    { name: 'Polkadot', color: '#E6007A', tvl: '1.8B' },
    { name: 'Cosmos', color: '#2E3148', tvl: '0.9B' },
    { name: 'NEAR Protocol', color: '#00C08B', tvl: '0.7B' },
    { name: 'Algorand', color: '#000000', tvl: '0.5B' },
  ],
  layer2: [
    { name: 'Polygon', color: '#8247E5', tvl: '3.5B' },
    { name: 'Arbitrum', color: '#28A0F0', tvl: '6.2B' },
    { name: 'Optimism', color: '#FF0420', tvl: '5.8B' },
    { name: 'Base', color: '#0052FF', tvl: '4.1B' },
    { name: 'zkSync', color: '#4E529A', tvl: '2.3B' },
    { name: 'Starknet', color: '#EC796B', tvl: '1.5B' },
  ],
  defi: [
    { name: 'Binance Alpha', color: '#F3BA2F', tvl: '8.9B' },
    { name: 'Fantom', color: '#1969FF', tvl: '0.8B' },
    { name: 'Cronos', color: '#002D74', tvl: '0.6B' },
    { name: 'Four.Meme - X node', color: '#FF6B35', tvl: '0.3B' },
  ],
  meme: [
    { name: 'Memes', color: '#FF69B4', tvl: '1.2B' },
    { name: 'Doge Chain', color: '#C2A633', tvl: '0.4B' },
    { name: 'Shiba Chain', color: '#FFA409', tvl: '0.5B' },
  ],
  other: [
    { name: 'SOL', color: '#9945FF', tvl: '4.8B' },
    { name: 'BNB', color: '#F3BA2F', tvl: '8.9B' },
    { name: 'AI', color: '#00D4FF', tvl: '2.1B' },
    { name: 'TON', color: '#0088CC', tvl: '1.3B' },
    { name: 'Tron', color: '#EB0029', tvl: '7.4B' },
    { name: 'Aptos', color: '#000000', tvl: '0.9B' },
    { name: 'Sui', color: '#6FBCF0', tvl: '1.1B' },
  ]
}

const filteredNetworks = computed(() => {
  if (!searchQuery.value) return networks

  const query = searchQuery.value.toLowerCase()
  const filtered = {}

  for (const [category, items] of Object.entries(networks)) {
    filtered[category] = items.filter(network =>
      network.name.toLowerCase().includes(query)
    )
  }

  return filtered
})

const noResults = computed(() => {
  return Object.values(filteredNetworks.value).every(arr => arr.length === 0)
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    updateDropdownPosition()
  }
}

const updateDropdownPosition = () => {
  if (!dropdownRef.value) return

  const rect = dropdownRef.value.getBoundingClientRect()
  const spaceBelow = window.innerHeight - rect.bottom
  const spaceAbove = rect.top

  if (spaceBelow < 400 && spaceAbove > spaceBelow) {
    // Open upward
    dropdownStyle.value = {
      bottom: `${window.innerHeight - rect.top}px`,
      left: `${rect.left}px`,
    }
  } else {
    // Open downward
    dropdownStyle.value = {
      top: `${rect.bottom + 8}px`,
      left: `${rect.left}px`,
    }
  }
}

const selectNetwork = (network) => {
  console.log('Selected network:', network.name)
  isOpen.value = false
  searchQuery.value = ''
  // Emit event or handle network selection
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    const dropdown = document.querySelector('.fixed.bg-slate-800')
    if (dropdown && !dropdown.contains(event.target)) {
      isOpen.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', () => {
    if (isOpen.value) {
      updateDropdownPosition()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
