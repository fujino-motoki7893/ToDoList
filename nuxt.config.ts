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

  app: {
    baseURL: '/portfolio/',
  },

  css: ['~/assets/css/main.css'],

  // アセットディレクトリの明示的な指定
  dir: {
    assets: 'assets',
    static: 'static',
    public: 'public',
  },

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
    publicAssets: [
      {
        baseURL: '/portfolio/images',
        dir: 'public/images',
        maxAge: 60 * 60 * 24 * 365,
      },
    ],
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
    build: {
      assetsDir: 'assets',
    },
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
