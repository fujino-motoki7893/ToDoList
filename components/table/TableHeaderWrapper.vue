<template>
  <div class="bg-gray-100 rounded-t-lg p-4 flex items-center justify-between">
    <div class="flex items-center">
      <h2 class="text-lg font-bold text-gray-800">
        あなたに必要なタスクを見つける
      </h2>
    </div>
    <div class="flex items-center space-x-2">
      <button
        class="text-indigo-600 hover:text-indigo-800 transition-colors p-1"
        title="リストを更新"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11
             11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
      <button
        class="text-indigo-600 hover:text-indigo-800 transition-colors p-1"
        title="リスト設定"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724
             1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724
              1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724
               1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724
                0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724
                0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
                 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
                 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
