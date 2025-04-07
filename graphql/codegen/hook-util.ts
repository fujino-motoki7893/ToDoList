import { exec, type ExecException } from 'child_process'
import { promisify } from 'util'

const prefix = '[hook]'
const log = (...args: unknown[]) => console.log(prefix, ...args)
const logError = (...args: unknown[]) => console.error(prefix, ...args)

/**
 * スクリプトの出力をログに出力しつつコマンドを実行する
 * @note hookの中でのlog出力はstdoutに出力されないので、この関数で結果を受け取り出力する
 */
export const withLog = (cmd: string, throwOnError = false) => {
  const execute = async () => {
    const { stdout } = await promisify(exec)(cmd)
    return stdout
  }

  return async () => {
    log('>', cmd)

    try {
      const stdout = await execute()
      if (stdout) {
        log(stdout)
      }
    }
    catch (e) {
      const err = e as ExecException & { stdout: string, stderr: string }

      logError(`コマンドの実行でエラーが発生しました。\n`, err.stderr || err.stdout || e)
      if (throwOnError) {
        throw e
      }
      return
    }

    log('done!')
  }
}
