<script setup>
import { ref } from 'vue'

const partners = [
  { img: '/assets/img/partner-logo/client-1.png', name: '合作伙伴 1' },
  { img: '/assets/img/partner-logo/client-2.png', name: '合作伙伴 2' },
  { img: '/assets/img/partner-logo/client-3.png', name: '合作伙伴 3' },
  { img: '/assets/img/partner-logo/client-4.png', name: '合作伙伴 4' },
  { img: '/assets/img/partner-logo/client-5.png', name: '合作伙伴 5' },
  { img: '/assets/img/partner-logo/client-6.png', name: '合作伙伴 6' },
  { img: '/assets/img/partner-logo/client-7.png', name: '合作伙伴 7' },
  { img: '/assets/img/partner-logo/client-8.png', name: '合作伙伴 8' },
]

const scrollRef = ref(null)

function scrollLeft() {
  if (scrollRef.value) {
    scrollRef.value.scrollBy({ left: -260, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (scrollRef.value) {
    scrollRef.value.scrollBy({ left: 260, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="partner-area">
    <div class="container">
      <div class="partner-slider-wrapper">
        <button class="partner-scroll-btn partner-scroll-btn--left" aria-label="向左滑动" @click="scrollLeft">
          <span class="partner-scroll-arrow">&#8249;</span>
        </button>
        <div ref="scrollRef" class="partner-track">
          <div v-for="partner in partners" :key="partner.img" class="partner-item">
            <img :src="partner.img" :alt="partner.name" class="partner-logo" />
          </div>
        </div>
        <button class="partner-scroll-btn partner-scroll-btn--right" aria-label="向右滑动" @click="scrollRight">
          <span class="partner-scroll-arrow">&#8250;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partner-slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.partner-track {
  display: flex;
  align-items: center;
  gap: 32px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 10px 0;
  scrollbar-width: none;          /* Firefox */
  -ms-overflow-style: none;       /* IE/Edge */
}

.partner-track::-webkit-scrollbar {
  display: none;                  /* Chrome/Safari */
}

.partner-item {
  flex: 0 0 auto;
  text-align: center;
}

.partner-logo {
  height: 48px;
  width: auto;
  opacity: 0.6;
  transition: opacity 0.3s;
  filter: grayscale(100%);
  user-select: none;
  -webkit-user-drag: none;
}

.partner-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}

/* 左右箭头按钮 */
.partner-scroll-btn {
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
  z-index: 1;
}

.partner-scroll-btn:hover {
  background: #f3f4f6;
  color: #1f2937;
  border-color: #9ca3af;
}

.partner-scroll-btn--left {
  margin-right: 8px;
}

.partner-scroll-btn--right {
  margin-left: 8px;
}

.partner-scroll-arrow {
  font-size: 22px;
  line-height: 1;
}
</style>
