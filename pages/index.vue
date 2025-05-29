<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">ブログ記事一覧</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        技術やプログラミングに関する記事を公開しています。
      </p>
    </div>

    <div v-if="!articles || articles.length === 0" class="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
      <p class="text-yellow-800 dark:text-yellow-200">記事が見つかりませんでした。</p>
    </div>

    <div v-else class="grid gap-6 md:grid-cols-1">
      <ArticleCard 
        v-for="article in articles" 
        :key="article._path" 
        :article="article" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent()
    .where({ _path: { $contains: '/articles/' } })
    .sort({ date: -1 })
    .find()
)
</script>
