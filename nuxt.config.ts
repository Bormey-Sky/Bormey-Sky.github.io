import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/animation.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image', '@nuxtjs/sitemap'],
  app: {
    head: {
      meta: [
        { name: 'og:url', content: 'https://bormeychanchem.com' },
        { name: 'og:site_name', content: 'Bormey Chanchem Portfolio' },
      ],
    },
  },
})