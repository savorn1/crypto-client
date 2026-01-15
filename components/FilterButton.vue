<template>
  <button
    :class="[
      'flex items-center gap-1 px-2.5 py-1 rounded-md transition-all duration-300 border whitespace-nowrap text-xs',
      variant === 'primary'
        ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600'
        : variant === 'active'
        ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-600'
        : 'bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white border-gray-700'
    ]"
    @click="$emit('click')"
  >
    <svg
      v-if="icon"
      class="w-3 h-3"
      :fill="iconFill || 'none'"
      :stroke="iconStroke || 'currentColor'"
      viewBox="0 0 24 24"
    >
      <path
        v-if="iconPath"
        :stroke-linecap="strokeLinecap || 'round'"
        :stroke-linejoin="strokeLinejoin || 'round'"
        :stroke-width="strokeWidth || '2'"
        :d="iconPath"
      />
    </svg>
    <span v-if="emoji" class="text-sm">{{ emoji }}</span>
    <span class="font-medium">
      <slot>{{ label }}</slot>
    </span>
    <svg
      v-if="hasDropdown"
      class="w-2.5 h-2.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default', // 'default', 'primary', 'active'
    validator: (value) => ['default', 'primary', 'active'].includes(value)
  },
  icon: {
    type: Boolean,
    default: false
  },
  iconPath: {
    type: String,
    default: ''
  },
  iconFill: {
    type: String,
    default: 'none'
  },
  iconStroke: {
    type: String,
    default: 'currentColor'
  },
  strokeLinecap: {
    type: String,
    default: 'round'
  },
  strokeLinejoin: {
    type: String,
    default: 'round'
  },
  strokeWidth: {
    type: String,
    default: '2'
  },
  emoji: {
    type: String,
    default: ''
  },
  hasDropdown: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>
