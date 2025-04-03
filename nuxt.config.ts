// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/apollo',
  ],

  components: [
    {
      path: '~/components/atoms',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  compatibilityDate: '2024-11-01',

  apollo: {
    clients: {
      default: './graphql/apollo/clients/default.ts',
    },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
