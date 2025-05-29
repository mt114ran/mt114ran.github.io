<template>
  <div v-if="article">
    <article class="prose prose-lg dark:prose-invert max-w-none">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ article.title }}</h1>
      
      <div class="text-gray-600 dark:text-gray-400 mb-8">
        <time v-if="article.date">{{ formatDate(article.date) }}</time>
      </div>
      
      <ContentRenderer :value="article" />
    </article>
  </div>
  <div v-else class="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
    <p class="text-red-800 dark:text-red-200">記事が見つかりませんでした。</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: article } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent(route.path).findOne();
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
