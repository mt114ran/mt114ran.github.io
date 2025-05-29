<template>
  <div>
    <h1>記事一覧</h1>
    <p v-if="!articles || articles.length === 0">記事が見つかりませんでした。</p>
    <ul>
      <li v-for="article in articles" :key="article._path">
        <pre>{{ article }}</pre>
        <NuxtLink :to="article._path">{{ article.title || article._path }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryContent().find() // ← only() を外す
)
</script>
