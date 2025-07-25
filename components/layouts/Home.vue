<template>
  <div class="flex justify-center relative overflow-hidden">
    <div class="relative w-320 h-[634px]">
      <div
        ref="slideContainer"
        class="flex transition-transform duration-1000 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div class="min-w-full">
          <NuxtImg
            provider="s3"
            src="/images/argo-archi.png"
            class="w-320 h-[634px] opacity-0 animate-fade-in"
          />
        </div>

        <div class="min-w-full">
          <NuxtImg
            provider="s3"
            src="/images/think_fujino_edit.jpg"
            class="w-320 h-[634px] opacity-0 animate-fade-in"
          />
        </div>
        <div class="min-w-full">
          <NuxtImg
            provider="s3"
            src="images/スライド1_調整.PNG"
            class="w-320 h-[634px] opacity-0 animate-fade-in"
          />
        </div>
        <div class="min-w-full">
          <NuxtImg
            provider="s3"
            src="/images/argo-archi.png"
            class="w-320 h-[634px] opacity-0 animate-fade-in"
          />
        </div>

        <div class="min-w-full">
          <NuxtImg
            provider="s3"
            src="/images/think_fujino_edit.jpg"
            class="w-320 h-[634px] opacity-0 animate-fade-in"
          />
        </div>
      </div>

      <div
        class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-3
      bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <div
          v-for="(slide, index) in totalSlides"
          :key="index"
          class="relative transition-all duration-300 ease-out cursor-pointer"
          :class="getIndicatorIndex() === index ? 'w-8 h-3' : 'w-3 h-3'"
          @click="goToSlide(index)"
        >
          <div
            v-if="getIndicatorIndex() === index"
            class="w-full h-full bg-white rounded-full shadow-lg"
          />
          <div
            v-else
            class="w-full h-full bg-white/60 rounded-full hover:bg-white/80 transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    ref="textSection"
    class="justify-center flex py-16 opacity-0 transition-all duration-1000 ease-out transform translate-y-8"
    :class="{ 'opacity-100 translate-y-0': isTextVisible }"
  >
    <span class="w-202 text-4">
      <p class="pb-5">
        はじめまして。藤野 元規と申します。当ポートフォリオをご覧いただき、ありがとうございます。
      </p>
      <p class="pb-5">
        私は、単にコードを書くだけのエンジニアで終わりたくありません。技術力でチームを牽引する「一流のエンジニア」になることを目標に、日々スキルを磨いています。
      </p>
      <p class="pb-5">
        そのために、現在はモダンなフロントエンド技術を軸に開発経験を積んでいますが、今後は領域を限定せず、
        様々な技術やアーキテクチャに触れていきたいと考えています。幅広い選択肢の中から最適な技術を選定できる
        視野を養い、自身のキャリアの可能性を見極めていきたいです。
      </p>
      <p class="pb-5">
        最終的には、
        <span class="font-bold">
          要件定義や設計といった上流工程から、タスク管理、コードレビュー、チームマネジメントまで、
          開発プロセス全体に責任を持てるエンジニア
        </span>
        になることが目標です。プレイヤーとしての実力と、プロジェクト
        を俯瞰する視点を両立させ、事業の成長に根本から貢献できる存在になりたいと考えています。
      </p>
      <p class="pb-5">
        私のこれまでの経験とこれからの情熱が、貴社の力になれると信じています。ぜひ一度お話をお聞かせください。
      </p>
    </span>
  </div>
  <div
    ref="frontendSection"
    class="flex justify-left w-full h-200 opacity-0 transition-all duration-1000 ease-out transform translate-x-[-50px]"
    :class="{ 'opacity-100 translate-x-0': isFrontendVisible }"
  >
    <NuxtImg
      provider="s3"
      src="/images/town-cut.png"
      class="w-[531px]"
    />
    <div class="flex items-center">
      <span class="min-w-[1389px] text-[20px] px-[172px]">
        <div class="flex font-bold text-[32px] justify-center py-16">
          モダンフロントエンド技術
        </div>
        <p class="pb-10">
          現代のWebサービスに不可欠な、高品質なUI/UXと高いメンテナンス性を両立できるフロントエンド開発のエキスパートを目指します。
        </p>
        <p class="pb-10">
          UI/UXの構築に純粋な楽しさを感じることが学習の原動力です。その上で、優れたUI/UXは事業の成功に直結すると確信しており、
          TypeScriptによる型安全性やNuxt.jsのようなフレームワークを使いこなす専門性は、エンジニアとして事業に貢献する上で極めて重要だと考えています。
        </p>
        <p class="pb-10">
          個人開発においてNuxt.jsとTypeScriptを用いたWebアプリケーションを構築中。今後は、状態管理ライブラリの比較検証や、
          Server Side Renderingにおけるパフォーマンス計測など、より実務に近い課題解決に取り組んでいきます。
        </p>
      </span>
    </div>
  </div>
  <div
    ref="cloudSection"
    class="flex justify-right w-full h-200 opacity-0 transition-all duration-1000 ease-out transform translate-x-[50px]"
    :class="{ 'opacity-100 translate-x-0': isCloudVisible }"
  >
    <div class="flex items-center">
      <span class="min-w-[1389px] text-[20px] px-[172px]">
        <div class="flex font-bold text-[32px] justify-center py-16">
          クラウド技術
        </div>
        <p class="pb-10">
          アプリケーションが稼働するインフラまでを理解し、プロダクト全体の品質（信頼性・スケーラビリティ・コスト）に貢献できるエンジニアを目指します。
        </p>
        <p class="pb-10">
          自身が書いたコードが、どのようなインフラ上で、どのように運用されているかを理解することは、アプリケーション開発者の責務だと考えています。
          サービスの信頼性やコストはクラウドの活用方法に大きく左右されるため、インフラを意識した開発は不可欠です。
        </p>
        <p class="pb-10">
          個人開発でAWSを利用し、Cloudfront, API Gateway, DynamoDB, S3, Lambdaなどを活用して、サーバーレスなバックエンド構成とインフラストラクチャのコスト感を学習中です。
          今後は、フロントからインフラまでを一貫して構築・運用する経験を積む計画です。
        </p>
      </span>
    </div>
    <NuxtImg
      provider="s3"
      src="/images/cloud_edit.jpg"
      class="w-[531px]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const textSection = ref(null)
const frontendSection = ref(null)
const cloudSection = ref(null)

const isTextVisible = ref(false)
const isFrontendVisible = ref(false)
const isCloudVisible = ref(false)

const slideContainer = ref(null)
const currentSlide = ref(1)
const totalSlides = 3
const totalSlidesWithClones = 5
let slideInterval = null
let isTransitioning = false

const goToSlide = (targetIndex) => {
  if (isTransitioning) return

  stopSlideshow()

  isTransitioning = true
  currentSlide.value = targetIndex + 1

  setTimeout(() => {
    startSlideshow()
  }, 3000)
}

const getIndicatorIndex = () => {
  if (currentSlide.value === 0) return 2
  if (currentSlide.value === 4) return 0
  return currentSlide.value - 1
}

const handleTransitionEnd = () => {
  if (!isTransitioning) return

  if (currentSlide.value === totalSlidesWithClones - 1) {
    slideContainer.value.style.transition = 'none'
    currentSlide.value = 1
    nextTick(() => {
      slideContainer.value.style.transition = 'transform 1000ms ease-in-out'
    })
  }
  else if (currentSlide.value === 0) {
    slideContainer.value.style.transition = 'none'
    currentSlide.value = totalSlides
    nextTick(() => {
      slideContainer.value.style.transition = 'transform 1000ms ease-in-out'
    })
  }

  isTransitioning = false
}

const nextSlide = () => {
  if (isTransitioning) return

  isTransitioning = true
  currentSlide.value++
}

const startSlideshow = () => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 3000)
}

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === textSection.value) {
          isTextVisible.value = entry.isIntersecting
        }
        else if (entry.target === frontendSection.value) {
          isFrontendVisible.value = entry.isIntersecting
        }
        else if (entry.target === cloudSection.value) {
          isCloudVisible.value = entry.isIntersecting
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    },
  )

  if (textSection.value) observer.observe(textSection.value)
  if (frontendSection.value) observer.observe(frontendSection.value)
  if (cloudSection.value) observer.observe(cloudSection.value)

  return observer
}

onMounted(() => {
  if (slideContainer.value) {
    slideContainer.value.addEventListener('transitionend', handleTransitionEnd)
  }

  startSlideshow()

  const observer = setupIntersectionObserver()

  onUnmounted(() => {
    stopSlideshow()
    if (slideContainer.value) {
      slideContainer.value.removeEventListener('transitionend', handleTransitionEnd)
    }
    observer.disconnect()
  })
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}
</style>
