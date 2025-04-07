/**
 * パスカルケースに変換
 * @param {string} queryName
 * @returns {string}
 */
const getPascalCaseQueryName = (queryName) => {
  const [head, ...rest] = queryName
  const pascalCaseName = [head.toUpperCase(), ...rest].join('')

  // 中間の大文字の連続(先頭と末尾を除く)、文末までの大文字の連続(先頭を除く)、を小文字に変換
  return pascalCaseName.replace(/([A-Z])([A-Z]+)([A-Z]|$)/g, (_, p1, p2, p3) => {
    // 連続する大文字はPascalCaseにする際に小文字に変換される
    return `${p1}${p2.toLowerCase()}${p3}`
  })
}

/**
   * useQueryの関数名に変換
   * @param {string} queryName
   * @returns {string}
   */
const getUseQueryName = (queryName) => {
  const pascalCaseName = getPascalCaseQueryName(queryName)
  return `use${pascalCaseName}Query`
}

const FUNC_NAME = 'createQueryPromiseFunc'

/** @type {import('@graphql-codegen/plugin-helpers').CodegenPlugin<{queryNames: string[]}>} */
module.exports = {
  plugin: (config) => {
    const queryNames = config.queryNames.map(getPascalCaseQueryName)

    const composableNames = queryNames.map(getUseQueryName)
    const composableNamesImports = composableNames.map(n => `${n},`).join('\n')

    const functionsExports = queryNames.map((name, i) => {
      const functionName = `query${name}`
      const composableName = composableNames[i]

      return `/** 
    {@link ${composableName}} を、単なるPromiseを返す関数に変換したもの 
  */
  export const ${functionName} = ${FUNC_NAME}(${composableName})
  `
    }).join('\n')

    return `/** このファイルは自動生成ファイルです。直接編集しないでください。 */
  
  /* eslint-disable max-len */
  import { ${FUNC_NAME} } from '~/composables/utils/query'
  import {
    ${composableNamesImports}
  } from '~/graphql/codegen/generated/functions'
  
  ${functionsExports}
  `
  },
}
