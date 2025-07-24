<template>
  <div class="flex justify-between w-full h-92 bg-[#595959] text-white font-bold p-7.5 py-12.5">
    <div class="flex flex-col py-8 justify-end">
      <span class="text-[36px]">
        motokifujino.com
      </span>
      <p class="text-[20px] pt-6">
        This site is made by
        <a
          href="/"
          class="underline hover:text-gray-300"
        >motoki fujino</a>, Icons by
        <a
          href="https://icons8.com/"
          class="underline hover:text-gray-300"
        >Icons8</a>.
      </p>
    </div>
    <div class="flex flex-col py-8">
      <nav class="flex text-[36px] space-x-12 items-end justify-end pr-18">
        <a
          href="/"
          class="hover:text-gray-300"
        >HOME</a>
        <a
          class="hover:text-gray-300"
        >ABOUT ME</a>
      </nav>
      <nav class="flex space-x-12 items-end justify-end pr-24 pt-16">
        <a
          href="https://x.com/motoki_f_7893"
          class="w-18 h-18 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 text-[48px]"
        >
          X
        </a>
        <a
          href="https://github.com/fujino-motoki7893"
          class="w-18 h-18 bg-black rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          <Github
            :size="48"
            color="white"
          />
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'
</script>
