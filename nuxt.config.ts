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
      path: '~/components',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // devServer: {
  //   host: '0.0.0.0',
  //   port: 3000,
  // },

  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'github_pages',
    devProxy: {
      '/graphql': {
        target: 'http://localhost:5142/graphql',
        changeOrigin: true,
      },
    },
  },

  app: {
    baseURL: '/to-do-list/', // リポジトリ名に変更
    buildAssetsDir: 'assets/'
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  apollo: {
    clients: {
      default: './graphql/apollo/clients/default.ts',
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
