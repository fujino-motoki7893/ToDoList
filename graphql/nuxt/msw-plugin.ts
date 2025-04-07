// nuxtのpluginとして実行される想定のファイル。ビルドエラーの回避のためにpluginを読み込むかどうかを実行時の環境に応じて制御したいため、nuxtのpluginsとは別で管理
import { setupWorker } from 'msw/browser'

const worker = setupWorker()

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'development') {
    worker.start()
  }
})
