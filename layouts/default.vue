<template>
  <div class="min-h-screen flex flex-col">
    <BlogHeader />
    <main class="container flex-grow py-8">
      <slot />
    </main>
    <BlogFooter />
  </div>
</template>
