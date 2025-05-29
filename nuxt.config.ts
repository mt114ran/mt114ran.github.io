// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./content/**/*.md"
      ],
      theme: {
        extend: {
          colors: {
            gray: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
              900: '#111827',
            },
            blue: {
              300: '#93c5fd',
              400: '#60a5fa',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
            }
          },
        },
      },
      plugins: [
        require('@tailwindcss/typography')
      ],
      darkMode: 'class'
    }
  },
  app: {
    head: {
      title: 'My Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My personal blog built with Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
          async: true
        }
      ]
    }
  },
  nitro: {
    preset: 'github-pages'
  }
})
