<template>
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div v-if="article" class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="relative">
        <img
          :src="article.image || '/api/placeholder/800/400'"
          :alt="article.title"
          class="w-full h-96 object-cover"
        />
        <div class="absolute top-6 left-6">
          <span class="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
            {{ article.category }}
          </span>
        </div>
      </div>

      <div class="p-8">
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ article.title }}
          </h1>
          
          <div class="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div class="flex items-center space-x-4">
              <span>By <strong>{{ article.author }}</strong></span>
              <time :datetime="article.publishedAt">
                {{ formatDate(article.publishedAt) }}
              </time>
            </div>
            <div class="flex items-center space-x-2">
              <button class="text-blue-600 hover:text-blue-800">Share</button>
              <button class="text-blue-600 hover:text-blue-800">Save</button>
            </div>
          </div>

          <p class="text-xl text-gray-700 leading-relaxed">
            {{ article.excerpt }}
          </p>
        </header>

        <div class="prose prose-lg max-w-none">
          <p>{{ article.content }}</p>
        </div>

        <footer class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex space-x-4">
              <button class="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Like</span>
              </button>
              <button class="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Comment</span>
              </button>
            </div>
            
            <div class="flex space-x-4">
              <button class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <div v-else class="text-center py-16">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Article not found</h2>
      <p class="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
      <NuxtLink to="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Back to Home
      </NuxtLink>
    </div>

    <section v-if="relatedArticles.length > 0" class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NewsCard
          v-for="relatedArticle in relatedArticles"
          :key="relatedArticle.id"
          :article="relatedArticle"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import { getArticleById, mockArticles } from '~/data/mockData.js'

const route = useRoute()
const articleId = computed(() => parseInt(route.params.id))

const article = computed(() => {
  return getArticleById(articleId.value)
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  const allArticles = Object.values(mockArticles).flat()
  return allArticles
    .filter(a => a.id !== articleId.value && a.category === article.value.category)
    .slice(0, 3)
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: () => article.value ? `${article.value.title} - NewsHub` : 'Article Not Found - NewsHub',
  ogTitle: () => article.value ? `${article.value.title} - NewsHub` : 'Article Not Found - NewsHub',
  description: () => article.value ? article.value.excerpt : 'Article not found',
  ogDescription: () => article.value ? article.value.excerpt : 'Article not found',
  ogImage: () => article.value ? article.value.image : '/api/placeholder/1200/630',
})
</script>