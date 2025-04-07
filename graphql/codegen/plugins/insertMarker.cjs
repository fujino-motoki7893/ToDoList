/**
 * 型定義とQuery/Mutationの境界にコメントを入れるカスタムプラグイン
 */
module.exports = {
  plugin: () => {
    return `\n// START OPERATIONS\n`
  },
}
