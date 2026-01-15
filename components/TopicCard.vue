<template>
  <div
    :class="[
      'flex items-center gap-2 rounded-xl px-4 py-3 min-w-fit cursor-pointer transition-all duration-300',
      variant === 'featured'
        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105'
        : 'bg-slate-800 border border-gray-700 hover:border-purple-500'
    ]"
  >
    <span
      v-if="variant === 'featured'"
      class="px-2 py-1 bg-white/20 rounded text-white text-xs font-bold"
    >
      Topic
    </span>
    <span v-else-if="icon" :class="iconColor">{{ icon }}</span>
    <span class="text-white font-semibold whitespace-nowrap">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: 'text-purple-400'
  },
  variant: {
    type: String,
    default: 'default', // 'default' or 'featured'
    validator: (value) => ['default', 'featured'].includes(value)
  }
})
</script>
