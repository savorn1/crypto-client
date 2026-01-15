<template>
  <div class="bg-slate-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300">
    <div class="flex items-center justify-between mb-2">
      <span class="text-gray-400 text-sm font-semibold">{{ title }}</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="text-2xl font-bold text-white mb-1">{{ value }}</div>
    <div class="flex items-center gap-1">
      <span :class="changeClass" class="text-sm font-semibold">{{ change }}</span>
      <svg v-if="showChart" class="w-16 h-8" viewBox="0 0 60 30">
        <path :d="chartPath" :stroke="chartColor" stroke-width="2" fill="none"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  change: {
    type: String,
    required: true
  },
  showChart: {
    type: Boolean,
    default: true
  },
  chartPath: {
    type: String,
    default: 'M0,15 L10,12 L20,18 L30,10 L40,20 L50,8 L60,15'
  }
})

const changeClass = computed(() => {
  if (props.change.startsWith('-')) {
    return 'text-red-500'
  }
  return 'text-green-500'
})

const chartColor = computed(() => {
  if (props.change.startsWith('-')) {
    return '#ef4444'
  }
  return '#10b981'
})
</script>
