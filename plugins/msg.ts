import { setupWorker } from 'msw/browser'

const worker = setupWorker(...handlers)

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'development') {
    worker.start()
  }
})
