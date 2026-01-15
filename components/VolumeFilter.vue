<template>
  <div class="relative" ref="filterRef">
    <FilterButton
      label="Volume(24h)"
      :icon="true"
      icon-path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      @click="toggleFilter"
    />

    <!-- Filter Popup -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="popupRef"
        :style="popupStyle"
        class="fixed bg-[#1a1d2e] border border-gray-700/50 rounded-xl shadow-2xl z-[9999] p-6 volume-popup w-[380px] min-w-[380px]"
      >
        <!-- Title -->
        <h3 class="text-white font-bold text-lg mb-6">Volume (24h)</h3>

        <!-- Quick Filter Options -->
        <div class="space-y-2 mb-6">
          <button
            v-for="option in quickOptions"
            :key="option.value"
            @click="selectQuickOption(option.value)"
            :class="[
              'w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 text-left',
              selectedQuick === option.value
                ? 'bg-blue-600 text-white'
                : 'bg-[#252942] text-gray-200 hover:bg-[#2d3350] border border-transparent hover:border-gray-600/50'
            ]"
          >
            <span class="text-sm font-medium">{{ option.label }}</span>
            <svg
              v-if="selectedQuick === option.value"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Custom Range Inputs -->
        <div class="flex items-center gap-3 mb-6">
          <div class="relative flex-1">
            <input
              v-model="minValue"
              type="text"
              placeholder="Min"
              class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
              @input="handleCustomInput"
            />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
          </div>
          <span class="text-gray-600">-</span>
          <div class="relative flex-1">
            <input
              v-model="maxValue"
              type="text"
              placeholder="Max"
              class="w-full pl-3 pr-7 py-2 bg-[#252942] text-white rounded-lg border border-transparent hover:border-gray-600/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 focus:outline-none text-sm placeholder-gray-500 transition-colors"
              @input="handleCustomInput"
            />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 pt-4 border-t border-gray-700/50">
          <button
            @click="resetFilter"
            class="px-6 py-2.5 text-gray-300 hover:text-white hover:bg-[#252942] rounded-lg font-medium text-sm transition-all duration-200"
          >
            Reset
          </button>
          <button
            @click="applyFilter"
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
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const filterRef = ref(null)
const popupRef = ref(null)
const popupStyle = ref({})
const selectedQuick = ref('any')
const minValue = ref('')
const maxValue = ref('')

const quickOptions = [
  { label: 'Any', value: 'any' },
  { label: '≥ $1M', value: '1m' },
  { label: '≥ $10M', value: '10m' },
  { label: '≥ $100M', value: '100m' }
]

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

const selectQuickOption = (value) => {
  selectedQuick.value = value

  // Clear custom inputs when selecting quick option
  if (value !== 'custom') {
    minValue.value = ''
    maxValue.value = ''
  }
}

const handleCustomInput = () => {
  // When user types in custom fields, deselect quick options
  if (minValue.value || maxValue.value) {
    selectedQuick.value = null
  }
}

const resetFilter = () => {
  selectedQuick.value = 'any'
  minValue.value = ''
  maxValue.value = ''
}

const applyFilter = () => {
  const filter = {
    type: selectedQuick.value,
    min: minValue.value,
    max: maxValue.value
  }

  emit('filter', filter)
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
