<template>
  <div class="w-full h-[72px] shadow flex justify-center">
    <span class="flex w-[1280px] items-center font-bold justify-between">
      <span class="text-[36px]">
        motokifujino.com
      </span>
      <nav class="text-[20px] text-gray-600 space-x-12">
        <NuxtLink
          to="/"
          class="hover:text-blue-600"
          :class="{ 'text-blue-600': $route.path === '/' }"
        >
          HOME
        </NuxtLink>
        <a class="w-[1px] h-[24px] x-6 bg-gray-300 absolute mx-[-24px] my-[4px]" />
        <NuxtLink
          to="/about"
          class="hover:text-blue-600"
          :class="{ 'text-blue-600': $route.path === '/about' }"
        >
          ABOUT ME
        </NuxtLink>
      </nav>
    </span>
  </div>
</template>
