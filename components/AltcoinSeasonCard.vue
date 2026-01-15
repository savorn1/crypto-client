<template>
  <div class="bg-slate-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300">
    <div class="flex items-center justify-between mb-2">
      <span class="text-gray-400 text-sm font-semibold">{{ title }}</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="flex items-center justify-between mb-2">
      <div class="text-2xl font-bold text-white">
        {{ value }}<span class="text-gray-500">/{{ maxValue }}</span>
      </div>
    </div>
    <div class="flex items-center gap-2 text-xs">
      <span
        :class="[
          'px-2 py-1 rounded transition-all duration-300',
          isBitcoinSeason ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-700 text-gray-400'
        ]"
      >
        Bitcoin
      </span>
      <span
        :class="[
          'px-2 py-1 rounded transition-all duration-300',
          !isBitcoinSeason ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'
        ]"
      >
        Altcoin
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Altcoin Season'
  },
  value: {
    type: Number,
    required: true
  },
  maxValue: {
    type: Number,
    default: 100
  }
})

const isBitcoinSeason = computed(() => {
  return props.value < 50
})
</script>
