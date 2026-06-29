<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isMenuOpen = ref(false)

function isActive(path) {
  if (path === '/') return route.path === '/' || route.path === '/index.html'
  return route.path.startsWith(path)
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const nav = document.querySelector('.navbar-area')
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('is-sticky')
    } else {
      nav.classList.remove('is-sticky')
    }
  }
}
</script>

<template>
  <div class="navbar-area">
    <!-- 移动端导航 -->
    <div class="techSoft-responsive-nav">
      <div class="container">
        <div class="techSoft-responsive-menu mean-container">
          <div class="mean-bar">
            <div class="logo-mobile">
              <a href="/">
                <img src="/assets/img/logo.png" alt="哈希云图" />
              </a>
            </div>
            <button class="meanmenu-reveal" @click="toggleMenu" :style="{ display: 'block' }" aria-label="打开菜单">
              <span></span><span></span><span></span>
            </button>
            <nav class="mean-nav" v-show="isMenuOpen">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="/" class="nav-link" :class="{ active: isActive('/') }" @click="closeMenu">首页</a>
                </li>
                <li class="nav-item">
                  <a href="/pricing" class="nav-link" :class="{ active: isActive('/pricing') }" @click="closeMenu">定价</a>
                </li>
                <li class="nav-item">
                  <a href="/services" class="nav-link" :class="{ active: isActive('/services') }" @click="closeMenu">服务</a>
                </li>
                <li class="nav-item">
                  <a href="/projects" class="nav-link" :class="{ active: isActive('/projects') }" @click="closeMenu">案例</a>
                </li>
                <li class="nav-item">
                  <a href="/blog" class="nav-link" :class="{ active: isActive('/blog') }" @click="closeMenu">资讯</a>
                </li>
                <li class="nav-item">
                  <a href="/contact" class="nav-link" :class="{ active: isActive('/contact') }" @click="closeMenu">联系我们</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- 桌面端导航 -->
    <div class="techSoft-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <img src="/assets/img/logo.png" alt="哈希云图" />
          </a>
          <div class="collapse navbar-collapse mean-menu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/" class="nav-link" :class="{ active: isActive('/') }">首页</a>
              </li>
              <li class="nav-item">
                <a href="/pricing" class="nav-link" :class="{ active: isActive('/pricing') }">定价</a>
              </li>
              <li class="nav-item">
                <a href="/services" class="nav-link" :class="{ active: isActive('/services') }">服务</a>
              </li>
              <li class="nav-item">
                <a href="/projects" class="nav-link" :class="{ active: isActive('/projects') }">案例</a>
              </li>
              <li class="nav-item">
                <a href="/blog" class="nav-link" :class="{ active: isActive('/blog') }">资讯</a>
              </li>
              <li class="nav-item">
                <a href="/contact" class="nav-link" :class="{ active: isActive('/contact') }">联系我们</a>
              </li>
            </ul>
            <div class="other-option">
              <a class="btn btn-primary" href="mailto:hashcloud@foxmail.com">免费咨询</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
