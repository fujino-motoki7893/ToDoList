#!/usr/bin/env node

const fs = require('fs')

/**
 * 型参照すべてにTypes.がついてしまうので、不要なところを削除する
 */
function removeTypesPrefix(filePath) {
  // ファイルを読み込む
  const content = fs.readFileSync(filePath, 'utf8')

  // 行に分割
  const lines = content.split('\n')

  const startlineIndex = lines.findIndex(line => line.includes('// START OPERATIONS'))

  // 特定の行以降の処理
  for (let i = startlineIndex - 1; i < lines.length; i++) {
    lines[i] = lines[i].replace(/Types\./g, '')
  }

  // 行を結合して文字列に戻す
  let modifiedContent = lines.join('\n')

  // ファイルに書き戻す
  fs.writeFileSync(filePath, modifiedContent, 'utf8')

  console.log(`File ${filePath} has been modified.`)
}

const filePath = process.argv.slice(-1)[0]
removeTypesPrefix(filePath)
