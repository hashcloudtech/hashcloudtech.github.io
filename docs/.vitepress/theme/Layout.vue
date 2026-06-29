<script setup>
import { useData, useRoute } from 'vitepress'
import { computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'

const { frontmatter } = useData()
const route = useRoute()

const isHome = computed(() => route.path === '/' || route.path === '/index.html')

// 文章详情页：/blog/xxx 或 /projects/xxx 下的具体文章/案例（非列表首页）
const isArticleDetail = computed(() => {
  return (
    (route.path.startsWith('/blog/') && route.path !== '/blog/' && route.path !== '/blog/index') ||
    (route.path.startsWith('/projects/') && route.path !== '/projects/' && route.path !== '/projects/index')
  )
})

const pageTitle = computed(() => frontmatter.value?.title || '')
const pageBreadcrumb = computed(() => frontmatter.value?.breadcrumb || pageTitle.value)

// 回到顶部按钮显隐
function handleScroll() {
  const goTop = document.querySelector('.go-top')
  if (goTop) {
    goTop.classList.toggle('active', window.scrollY > 600)
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  // SPA 模式下 hash 链接锚点滚动
  handleHashScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 处理 hash 锚点跳转（SPA 模式下 VitePress 不会自动滚动到锚点）
watch(() => route.hash, () => {
  nextTick(() => handleHashScroll())
})

function handleHashScroll() {
  const hash = route.hash
  if (hash) {
    nextTick(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }
}
</script>

<template>
  <div class="techsoft-app">
    <!-- ========== 头部：导航栏 ========== -->
    <header>
      <SiteNav />
    </header>

    <!-- ========== 页面横幅（非首页） ========== -->
    <div v-if="!isHome" class="page-banner-area">
      <div class="container">
        <div class="page-banner-content" aria-label="页面标题区域">
          <h1>{{ pageTitle }}</h1>
          <nav aria-label="面包屑导航">
            <ol>
              <li><a href="/">首页</a></li>
              <li>{{ pageBreadcrumb }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <!-- ========== 主体内容 ========== -->
    <main>
      <!-- 首页：直接渲染 -->
      <template v-if="isHome">
        <Content />
      </template>
      <!-- 文章详情页（博客文章/项目案例详情）：卡片布局 -->
      <template v-else-if="isArticleDetail">
        <div class="article-page-wrapper">
          <div class="container">
            <div class="article-body">
              <Content />
            </div>
          </div>
        </div>
      </template>
      <!-- 全宽页面（定价/服务/案例列表/资讯列表/联系我们/关于我们）：直接渲染 -->
      <template v-else>
        <Content />
      </template>
    </main>

    <!-- ========== 页脚 ========== -->
    <footer>
      <SiteFooter />
    </footer>

    <!-- ========== 回到顶部 ========== -->
    <div
      class="go-top"
      role="button"
      aria-label="回到顶部"
      tabindex="0"
      @click="scrollToTop"
      @keydown.enter="scrollToTop"
      @keydown.space.prevent="scrollToTop"
    >
      <i class="fas fa-chevron-up" aria-hidden="true"></i>
      <i class="fas fa-chevron-up" aria-hidden="true"></i>
    </div>
  </div>
</template>
