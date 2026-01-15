<template>
  <div class="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
    <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
    <div class="flex-1">
      <h4 class="text-sm font-medium text-gray-900 leading-tight mb-1">
        <NuxtLink :to="`/article/${article.id}`" class="hover:text-blue-600 transition-colors">
          {{ article.title }}
        </NuxtLink>
      </h4>
      <time class="text-xs text-gray-500" :datetime="article.publishedAt">
        {{ formatDate(article.publishedAt) }}
      </time>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
  
  if (diffInHours < 1) {
    return 'Just now'
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`
  } else {
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }
}
</script>