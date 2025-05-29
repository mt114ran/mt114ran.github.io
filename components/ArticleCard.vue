<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6 transition-transform hover:scale-[1.01]">
    <NuxtLink :to="article._path" class="no-underline">
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {{ article.title }}
        </h2>
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {{ formatDate(article.date) }}
        </div>
        <p class="text-gray-700 dark:text-gray-300">
          {{ article.description }}
        </p>
        <div class="mt-4 flex">
          <span class="text-blue-600 dark:text-blue-400 font-medium">Read more →</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true
  }
});

const formatDate = (date: string) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>
