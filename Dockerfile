FROM node:22-alpine AS builder

# 作業ディレクトリの設定
WORKDIR /app

# 必要なツールのインストール
# pnpmをインストール
RUN npm install -g pnpm

# 依存関係のインストール
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ソースファイルのコピー
COPY . .

# ビルド
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm run build

# 実行用のイメージ
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.output /app/.output

# ポートの設定
ENV PORT=3000
EXPOSE 3000

USER node

# 起動コマンドの設定
CMD ["node", ".output/server/index.mjs"]
