<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    bg: '/assets/img/slider-1.jpg',
    titleLine1: 'AI 赋能，',
    titleHighlight: '智领未来',
    desc: '大模型应用、大数据、云计算——一站式 AI+IT 解决方案，助您降本增效，赢在智能时代。',
    btn1: '联系我们',
    btn2: '了解方案',
    link1: '/contact',
    link2: '/services',
  },
  {
    bg: '/assets/img/slider-2.jpg',
    titleLine1: '专业的技术团队，',
    titleHighlight: '可靠的落地交付',
    desc: '从需求调研到系统上线，全流程精细化管控，为您的智能化转型保驾护航。',
    btn1: '服务详情',
    btn2: '联系我们',
    link1: '/services',
    link2: '/contact',
  },
  {
    bg: '/assets/img/slider-3.jpg',
    titleLine1: '拥抱 AI，',
    titleHighlight: '智驭未来',
    desc: '深度融合大模型与行业场景，打造智能化应用解决方案，驱动业务实现指数级增长。',
    btn1: '关于我们',
    btn2: '核心服务',
    link1: '/about',
    link2: '/services',
  },
]

const currentSlide = ref(0)
const isAutoPlaying = ref(true)
let autoTimer = null

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})

function startAutoPlay() {
  stopAutoPlay()
  autoTimer = setInterval(() => {
    if (isAutoPlaying.value) {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }
  }, 7000)
}

function stopAutoPlay() {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

function goToSlide(index) {
  currentSlide.value = index
  startAutoPlay()
}
</script>

<template>
  <div class="home-slider-area">
    <div class="home-slider flickity-dots-absolute">
      <!-- 所有幻灯片同时渲染并叠加，仅激活的可见，避免 DOM 切换导致背景图闪烁 -->
      <div
        v-for="(slide, idx) in slides"
        :key="slide.bg"
        class="home-slider-single-item"
        :class="{ 'slider-item--active': idx === currentSlide }"
        :style="{ backgroundImage: `url(${slide.bg})` }"
        :aria-hidden="idx !== currentSlide"
      >
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col">
              <div class="home-slider-content" :class="{ 'is-selected': idx === currentSlide }">
                <h1 class="home-slider-title">{{ slide.titleLine1 }}<br/><span v-if="slide.titleHighlight" class="color-text">{{ slide.titleHighlight }}</span></h1>
                <div class="home-slider-description">
                  <p>{{ slide.desc }}</p>
                </div>
                <div class="home-slider-btn-box">
                  <a :href="slide.link1" class="btn btn-primary mr-15">{{ slide.btn1 }}</a>
                  <a :href="slide.link2" class="btn btn-primary">{{ slide.btn2 }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 指示器 -->
      <div class="flickity-page-dots">
        <div
          v-for="(slide, idx) in slides"
          :key="'dot-' + idx"
          class="dot"
          :class="{ 'is-selected': idx === currentSlide }"
          @click="goToSlide(idx)"
          @mouseenter="isAutoPlaying = false"
          @mouseleave="isAutoPlaying = true"
        ></div>
      </div>
    </div>
  </div>
</template>
