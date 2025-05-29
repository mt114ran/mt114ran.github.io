<template>
  <footer class="bg-white dark:bg-gray-800 shadow-inner mt-8">
    <div class="container py-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-600 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} My Blog. All rights reserved.
          </p>
        </div>
        <div class="flex space-x-4">
          <a href="https://github.com/mt114ran" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
