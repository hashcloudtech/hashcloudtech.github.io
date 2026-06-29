<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const testimonials = [
  {
    text: '系统集成方案让我们的 IT 基础设施连续稳定运行超过两年，运维成本降低约 30%。定期巡检、预防在先，值得信赖。',
    name: '张*明',
    role: '制造企业 CIO',
    avatar: '/assets/img/client/testimonial-1.jpg',
  },
  {
    text: '数据中台项目建设周期比预期缩短近四成，团队响应迅速、交付质量过硬。从需求对接到上线验收，全程专业高效。',
    name: '赵*华',
    role: '政企信息化负责人',
    avatar: '/assets/img/client/testimonial-2.jpg',
  },
  {
    text: '网络安全等保整改服务帮助我们顺利通过三级测评，7×24 安全运维团队多次及时拦截安全事件，避免了潜在的重大损失。',
    name: '陈*伟',
    role: '金融科技 CTO',
    avatar: '/assets/img/client/testimonial-3.jpg',
  },
  {
    text: '定制开发的管理系统打通了教务、后勤、一卡通三大数据板块，校园信息化水平一跃而上，师生满意度大幅攀升。',
    name: '李*东',
    role: '高校信息中心主任',
    avatar: '/assets/img/client/testimonial-4.jpg',
  },
]

const currentIndex = ref(0)
const visibleCount = ref(3) // 桌面端显示3个

const visibleTestimonials = computed(() => {
  const result = []
  for (let i = 0; i < visibleCount.value; i++) {
    const idx = (currentIndex.value + i) % testimonials.length
    result.push({ ...testimonials[idx], idx })
  }
  return result
})

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

function handleResize() {
  visibleCount.value = window.innerWidth < 768 ? 1 : window.innerWidth < 1000 ? 2 : 3
}

let autoTimer
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  autoTimer = setInterval(nextSlide, 4000)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  clearInterval(autoTimer)
})
</script>

<template>
  <section class="testimonial-area pt-50 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h6>客户评价</h6>
            <h2>客户口碑</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, idx) in visibleTestimonials" :key="'t-' + item.idx + '-' + idx" :class="visibleCount === 3 ? 'col-lg-4 col-md-6' : visibleCount === 2 ? 'col-md-6' : 'col-12'">
          <div class="single-testimonial">
            <div class="testimonial-content-inner">
              <div class="testimonial-text">
                <p>{{ item.text }}</p>
                <div class="rating-box">
                  <ul>
                    <li v-for="n in 5" :key="n"><i class="fa fa-star"></i></li>
                  </ul>
                  <h6>微信</h6>
                </div>
              </div>
              <div class="author-info-box">
                <div class="author-img">
                  <img :src="item.avatar" :alt="item.name" />
                </div>
                <div class="author-bio-info">
                  <h3>{{ item.name }}</h3>
                  <span>{{ item.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播指示器 -->
      <div class="owl-theme testimonial-dots">
        <div class="owl-dots">
          <div
            v-for="(t, i) in testimonials"
            :key="'dot-' + i"
            class="owl-dot"
            :class="{ active: i === currentIndex }"
            @click="currentIndex = i"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-dots {
  text-align: center;
  margin-top: 20px;
}
</style>
