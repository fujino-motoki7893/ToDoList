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

  runtimeConfig: {
    // サーバーサイド用（秘密情報）
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

    public: {
      // クライアントサイド用（公開情報）
      s3BucketUrl: process.env.S3_BUCKET_URL || 'https://my-portfolio-images-prod.s3.amazonaws.com',
      s3Region: process.env.AWS_REGION || 'ap-northeast-1',
    },
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
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['lucide-vue-next'],
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

  image: {
    providers: {
      s3: {
        name: 's3',
        provider: '~/providers/s3-provider.ts',
        options: {
          baseURL: 'https://my-portfolio-images-prod.s3.amazonaws.com',
        },
      },
    },

    // S3をデフォルトプロバイダーに設定
    provider: 's3',

    // 画像の最適化設定
    format: ['webp', 'jpg'],
    quality: 80,

    // プリセット設定
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 300,
          quality: 80,
        },
      },
    },
  },
})
