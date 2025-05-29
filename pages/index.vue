<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">ブログ記事一覧</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        技術やプログラミングに関する記事を公開しています。
      </p>
    </div>

    <div v-if="pending">
      <p class="text-gray-600">Loading articles...</p>
    </div>

    <div v-else-if="!posts || posts.length === 0" class="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
      <p class="text-yellow-800 dark:text-yellow-200">記事が見つかりませんでした。</p>
    </div>
    
    <div v-else class="grid gap-6 md:grid-cols-1">
      <div v-for="post in posts" :key="post._path" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {{ post.title || 'No Title' }}
          </h2>
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {{ post.date ? new Date(post.date).toLocaleDateString('ja-JP') : 'No Date' }}
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            {{ post.description || 'No Description' }}
          </p>
          <div class="mt-4 flex">
            <NuxtLink :to="post._path" class="text-blue-600 dark:text-blue-400 font-medium">Read more →</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Query blog content with a simpler approach
const { data: posts, pending } = await useAsyncData('blog-posts', () => {
  return queryContent('blog')
    .only(['title', 'description', 'date', '_path'])
    .sort({ date: -1 })
    .find();
});

console.log('Blog Posts:', posts.value);
</script>
