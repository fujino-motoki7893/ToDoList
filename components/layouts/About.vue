<template>
  <div>
    <div class="flex h-200">
      <div
        ref="profileImageSection"
        class="flex px-57.5 w-240 items-center opacity-0 transition-all
        duration-1000 ease-out transform translate-x-[-30px]"
        :class="{ 'opacity-100 translate-x-0': isProfileImageVisible }"
      >
        <NuxtImg
          provider="s3"
          src="/images/fujino_ago.jpg"
          alt="藤野元規"
          class="w-125 h-125 transform transition-all duration-500 hover:scale-105"
        />
      </div>
      <div
        ref="profileTextSection"
        class="flex flex-col py-25 w-240 opacity-0 transition-all duration-1000 ease-out transform translate-x-[30px]"
        :class="{ 'opacity-100 translate-x-0': isProfileTextVisible }"
      >
        <div class="text-[40px] opacity-0 animate-name-fade">
          藤野 元規
          <span class="p-4">
            MOTOKI
          </span>
          <span>
            FUJINO
          </span>
        </div>
        <div class="text-[40px] flex-col py-8 pr-16">
          <span class="text-[24px] leading-[1.67] tracking-[4px]">
            <p>
              幼少期からコンピューターが好きで、将来の夢は「コンピュータープログラマーだ！」と周りに言いふらしていました。
            </p>
            <p>
              中学時代にシステムについて学びたいと考え、広島商船高等専門学校の流通情報工学科に入学。ITの基礎を学びました。
            </p>
            <p>
              そこからクラウドについて開発経験を積むために株式会社FIXERに入学。全国規模のシステム運用・保守や、大規模システムの詳細設計・開発を経て今に至ります。
            </p>
            <p>
              ・・・
            </p>
            <p>
              趣味はゲーム・漫画・アニメなど、オタク文化ならだいたい好きです。本人曰く、「Fate に時間を、SAOに仕事を、化物語に人格を奪われた！ゆるせない！」だそうです。許せないとは、、、？
            </p>
            <p>
              座右の銘はメンタリティとお気に入りのプレイリストさえあれば生きていけるです。えへへ ^ ^
            </p>
          </span>
        </div>
      </div>
    </div>
    <div class="flex h-[566px]">
      <div
        ref="importantTitleSection"
        class="text-[40px] w-[418px] flex justify-center font-bold px-16 opacity-0 transition-all
        duration-1000 ease-out transform translate-x-[-30px]"
        :class="{ 'opacity-100 translate-x-0': isImportantTitleVisible }"
      >
        たいせつなこと
      </div>
      <div
        ref="importantContentSection"
        class="flex flex-col w-[1438px] leading-[1.67] tracking-[4px] pr-16 text-[20px] opacity-0 transition-all
        duration-1000 ease-out transform translate-x-[-30px]"
        :class="{ 'opacity-100 translate-x-0': isImportantContentVisible }"
      >
        <div class="font-bold">
          <span class="flex text-[24px]">
            1. 共同が生み出す、一人を超えた価値
            <span class="px-2">
              <MessageSquare
                :size="40"
                color="green"
              />
            </span>
          </span>
          <p class="font-normal py-6">
            多様な視点を持つ仲間と敬意をもって議論を交わし、互いの知見を掛け合わせるプロセスこそ、質の高いプロダクト開発に不可欠だと考えています。私が持つ知識も誰かから教わったものであり、
            それを次の誰かに繋いでいく。そんな知識の好循環を生み出すことで、チーム全体の力を高めることに貢献します。
          </p>
        </div>
        <div class="font-bold">
          <span class="flex text-[24px]">
            2. 「誰かのため」という実感が生む、当事者意識
            <span class="px-2">
              <UserRound
                :size="40"
                color="blue"
              />
            </span>
          </span>
          <p class="font-normal py-6">
            自分が書いたコードが、どのようにユーザーの課題を解決し、事業の成長に貢献しているのか。その繋がりを明確に感じられることに、私は最大のやりがいを感じます。人づてにでも「ありがとう」と感謝される喜びが、
            私を「もっと良くしたい」という次なる行動へと駆り立てます。常に目的意識と当事者意識を持ち、ユーザーとビジネスに寄り添った本質的な価値提供を追求します。
          </p>
        </div>
        <div class="font-bold">
          <span class="flex text-[24px]">
            3. 知的好奇心が生む、未来への挑戦
            <span class="px-2">
              <Lightbulb
                :size="40"
                color="orange"
              />
            </span>
          </span>
          <p class="font-normal py-6">
            「この技術を使えば、もっとスマートな解決ができるのでは」と考えるプロセスそのものに、大きな喜びを感じます。現在は特にクラウド技術（AWS）に関心があり、
            スケーラブルで堅牢なシステムアーキテクチャの設計・運用に挑戦することで、プロダクトの価値をさらに高めていきたいと考えています。
          </p>
        </div>
      </div>
    </div>
    <div class="p-16" />
    <div class="flex">
      <div
        ref="techTitleSection"
        class="text-[40px] w-[418px] flex justify-center font-bold px-16 opacity-0 transition-all
        duration-1000 ease-out transform translate-x-[-30px]"
        :class="{ 'opacity-100 translate-x-0': isTechTitleVisible }"
      >
        技術スタック
      </div>
      <div
        ref="techContentSection"
        class="flex flex-col w-[1438px] pr-16 pt-4 text-[20px] tracking-[2px] opacity-0 transition-all
        duration-1000 ease-out transform translate-x-[-30px]"
        :class="{ 'opacity-100 translate-x-0': isTechContentVisible }"
      >
        <div class="flex">
          <span class="font-bold w-[198px] text-[24px]">
            フロントエンド...
          </span>
          <p class="pb-8 w-[1220px]">
            TypeScript, HTML/CSS, Nuxt.js, Vue.js, pnpm,  codegen, Tailwind.css, Figma, 単一責任の原則、アトミックデザイン（縛られ過ぎない程度に）
          </p>
        </div>
        <div class="flex">
          <span class="font-bold w-[198px] text-[24px]">
            バックエンド...
          </span>
          <p class="pb-8 w-[1220px]">
            C#, ASP.NET Core, GraphQL, REST, Swagger, Nitro, クリーンアーキテクチャ、Repository pattern, Jet Brains Rider
          </p>
        </div>
        <div class="flex">
          <span class="font-bold w-[198px] text-[24px]">
            データベース・<br>インフラ...
          </span>
          <p class="pb-8 w-[1220px]">
            GraphQL, PostgreSQL, A5:SQL Mk-2, DBeaver, Azure（DevOps Services, Front Door, SQL Database,
            Virtual Machines, Container Registry, Kubernetes Services, Functions）, AWS（Lambda, Cloud Watch,
            S3, Cloudfront, API Gateway, RDS, DynamoDB） , GitOps, GitHub, Grafana, Google Analytics,
          </p>
        </div>
      </div>
    </div>
    <div class="p-16" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  MessageSquare,
  UserRound,
  Lightbulb,
} from 'lucide-vue-next'

// 各セクションの参照
const profileImageSection = ref(null)
const profileTextSection = ref(null)
const importantTitleSection = ref(null)
const importantContentSection = ref(null)
const techTitleSection = ref(null)
const techContentSection = ref(null)

// 表示状態の管理
const isProfileImageVisible = ref(false)
const isProfileTextVisible = ref(false)
const isImportantTitleVisible = ref(false)
const isImportantContentVisible = ref(false)
const isTechTitleVisible = ref(false)
const isTechContentVisible = ref(false)

// Intersection Observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px',
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === profileImageSection.value) {
          isProfileImageVisible.value = true
        }
        else if (entry.target === profileTextSection.value) {
          isProfileTextVisible.value = true
        }
        else if (entry.target === importantTitleSection.value) {
          isImportantTitleVisible.value = true
        }
        else if (entry.target === importantContentSection.value) {
          isImportantContentVisible.value = true
        }
        else if (entry.target === techTitleSection.value) {
          isTechTitleVisible.value = true
        }
        else if (entry.target === techContentSection.value) {
          isTechContentVisible.value = true
        }
      }
    })
  }, observerOptions)

  if (profileImageSection.value) observer.observe(profileImageSection.value)
  if (profileTextSection.value) observer.observe(profileTextSection.value)
  if (importantTitleSection.value) observer.observe(importantTitleSection.value)
  if (importantContentSection.value) observer.observe(importantContentSection.value)
  if (techTitleSection.value) observer.observe(techTitleSection.value)
  if (techContentSection.value) observer.observe(techContentSection.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 名前のフェードイン */
.animate-name-fade {
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

/* プロフィールテキストの段階的フェードイン */
.animate-text-fade-1 {
  animation: fadeInUp 0.6s ease-out 0.6s forwards;
}

.animate-text-fade-2 {
  animation: fadeInUp 0.6s ease-out 0.8s forwards;
}

.animate-text-fade-3 {
  animation: fadeInUp 0.6s ease-out 1.0s forwards;
}

.animate-text-fade-4 {
  animation: fadeInUp 0.6s ease-out 1.2s forwards;
}

.animate-text-fade-5 {
  animation: fadeInUp 0.6s ease-out 1.4s forwards;
}

.animate-text-fade-6 {
  animation: fadeInUp 0.6s ease-out 1.6s forwards;
}

/* たいせつなことセクション */
.animate-important-1 {
  animation: fadeInUp 0.6s ease-out 0.3s forwards;
}

.animate-important-2 {
  animation: fadeInUp 0.6s ease-out 0.6s forwards;
}

.animate-important-3 {
  animation: fadeInUp 0.6s ease-out 0.9s forwards;
}

/* 技術スタックセクション */
.animate-tech-1 {
  animation: fadeInUp 0.6s ease-out 0.3s forwards;
}

.animate-tech-2 {
  animation: fadeInUp 0.6s ease-out 0.6s forwards;
}

.animate-tech-3 {
  animation: fadeInUp 0.6s ease-out 0.9s forwards;
}
</style>
