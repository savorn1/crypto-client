<template>
  <div class="bg-slate-900 border-b border-gray-800">
    <div class="max-w-[1920px] mx-auto px-6">
      <div class="flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.link"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-300',
            activeTab === tab.id
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white hover:bg-slate-800'
          ]"
        >
          {{ tab.label }}
        </NuxtLink>

        <!-- More Dropdown -->
        <div class="relative" ref="moreButtonRef">
          <button
            @click="toggleMoreDropdown"
            class="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-400 hover:text-white hover:bg-slate-800 transition-all duration-300 whitespace-nowrap"
          >
            More
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <Teleport to="body">
            <div
              v-if="isMoreOpen"
              :style="moreDropdownStyle"
              class="fixed bg-slate-800 border border-gray-700 rounded-lg shadow-2xl w-56 z-50 py-2"
            >
              <button
                v-for="item in moreItems"
                :key="item.id"
                @click="selectMoreItem(item)"
                class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-700 transition-all duration-200 text-left"
              >
                <span class="text-lg">{{ item.emoji }}</span>
                <span class="text-white text-sm font-medium">{{ item.label }}</span>
              </button>
            </div>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref('new')
const isMoreOpen = ref(false)
const moreButtonRef = ref(null)
const moreDropdownStyle = ref({})

const tabs = [
  { id: 'top', label: 'Top', link: '/' },
  { id: 'trending', label: 'Trending', link: '/' },
  { id: 'most-visited', label: 'Most Visited', link: '/' },
  { id: 'new', label: 'New', link: '/' },
  { id: 'gainers', label: 'Gainers', link: '/' },
  { id: 'real-world', label: 'Real-World Assets', link: '/real-world-assets' }
]

const moreItems = [
  { id: 'rehype', label: 'Rehype', emoji: '🔷' },
  { id: 'binance-alpha', label: 'Binance Alpha', emoji: '🟡' },
  { id: 'four-meme', label: 'Four.Meme - X node', emoji: '🟠' },
  { id: 'memes', label: 'Memes', emoji: '🎭' },
  { id: 'sol', label: 'SOL', emoji: '🟣' },
  { id: 'bnb', label: 'BNB', emoji: '🟡' },
  { id: 'ai', label: 'AI', emoji: '🤖' }
]


const toggleMoreDropdown = () => {
  isMoreOpen.value = !isMoreOpen.value
  if (isMoreOpen.value) {
    updateMoreDropdownPosition()
  }
}

const updateMoreDropdownPosition = () => {
  if (!moreButtonRef.value) return

  const rect = moreButtonRef.value.getBoundingClientRect()
  moreDropdownStyle.value = {
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`,
  }
}

const selectMoreItem = (item) => {
  console.log('Selected:', item.label)
  activeTab.value = item.id
  isMoreOpen.value = false
}

const handleClickOutside = (event) => {
  if (moreButtonRef.value && !moreButtonRef.value.contains(event.target)) {
    const dropdown = document.querySelector('.fixed.bg-slate-800')
    if (dropdown && !dropdown.contains(event.target)) {
      isMoreOpen.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', () => {
    if (isMoreOpen.value) {
      updateMoreDropdownPosition()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
