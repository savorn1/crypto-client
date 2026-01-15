<template>
  <div
    class="transform hover:scale-110 transition-transform duration-300 slide-in-up"
    :style="{ animationDelay: `${delay}s` }"
  >
    <div class="text-teal-300 text-xs mb-1 font-semibold flex items-center gap-1">
      <span v-if="icon">{{ icon }}</span>
      {{ label }}
    </div>
    <div
      :class="[
        'font-bold text-lg',
        valueColor || 'text-white'
      ]"
    >
      {{ formattedValue }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  valueColor: {
    type: String,
    default: 'text-white'
  },
  delay: {
    type: Number,
    default: 0
  },
  format: {
    type: String,
    default: 'none', // 'none', 'number', 'currency', 'percent'
    validator: (value) => ['none', 'number', 'currency', 'percent'].includes(value)
  }
})

const formattedValue = computed(() => {
  if (props.format === 'number') {
    return typeof props.value === 'number' ? props.value.toLocaleString() : props.value
  }
  if (props.format === 'percent') {
    return `${props.value}%`
  }
  return props.value
})
</script>
