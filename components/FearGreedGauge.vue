<template>
  <div class="bg-slate-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300">
    <div class="flex items-center justify-between mb-2">
      <span class="text-gray-400 text-sm font-semibold">{{ title }}</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="flex items-center gap-3">
      <div class="relative w-16 h-16">
        <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#374151"
            stroke-width="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#gradient)"
            stroke-width="3"
            :stroke-dasharray="`${percentage}, 100`"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="50%" stop-color="#fbbf24" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
          </defs>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-lg font-bold text-white">{{ value }}</span>
        </div>
      </div>
      <div>
        <div class="text-xl font-bold" :class="labelColorClass">{{ label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Fear & Greed'
  },
  value: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const percentage = computed(() => {
  return props.value
})

const labelColorClass = computed(() => {
  if (props.value < 25) return 'text-red-500'
  if (props.value < 45) return 'text-orange-500'
  if (props.value < 55) return 'text-yellow-500'
  if (props.value < 75) return 'text-green-400'
  return 'text-green-500'
})
</script>
