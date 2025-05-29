<template>
  <header class="bg-white dark:bg-gray-800 shadow">
    <div class="container py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white no-underline">
          My Blog
        </NuxtLink>
        <nav>
          <ul class="flex space-x-6">
            <li>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 no-underline">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 no-underline">
                About
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
