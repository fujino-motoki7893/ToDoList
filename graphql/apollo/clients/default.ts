import { defineApolloClient } from '@nuxtjs/apollo/config'

export default defineApolloClient({
  httpEndpoint: process.env.NUXT_PUBLIC_BACKEND_DOMAIN || '',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
})
