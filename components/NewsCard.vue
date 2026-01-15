<template>
  <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div class="relative">
      <img
        :src="article.image || '/api/placeholder/400/250'"
        :alt="article.title"
        class="w-full h-48 object-cover"
      />
      <div class="absolute top-4 left-4">
        <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
          {{ article.category }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
        <NuxtLink :to="`/article/${article.id}`" class="hover:text-blue-600 transition-colors">
          {{ article.title }}
        </NuxtLink>
      </h3>
      
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ article.excerpt }}
      </p>
      
      <div class="flex items-center justify-between text-sm text-gray-500">
        <span>By {{ article.author }}</span>
        <time :datetime="article.publishedAt">
          {{ formatDate(article.publishedAt) }}
        </time>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>