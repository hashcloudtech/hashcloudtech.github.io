<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as posts } from '../../../blog/posts.data'

const { page } = useData()

const currentUrl = computed(() => {
  const rp = page.value?.relativePath || ''
  return '/' + rp.replace(/\.md$/, '')
})

const current = computed(() => posts.find(p => p.url === currentUrl.value))

const currentIndex = computed(() =>
  posts.findIndex(p => p.url === currentUrl.value)
)

// 资讯按日期降序排列（最新在前），导航需遵循时间顺序：
// "上一篇" = 更早发布的旧文章 = 数组中靠后的元素
// "下一篇" = 更晚发布的新文章 = 数组中靠前的元素
const prevPost = computed(() => {
  if (currentIndex.value >= posts.length - 1) return null
  return posts[currentIndex.value + 1]
})

const nextPost = computed(() => {
  if (currentIndex.value <= 0) return null
  return posts[currentIndex.value - 1]
})

// 格式化日期：2025-06-20 → 2025年6月20日
const formattedDate = computed(() => {
  const raw = current.value?.date
  if (!raw) return ''
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
})
</script>

<template>
  <div class="blog-detail-header" v-if="current">
    <!-- 封面图 -->
    <div class="blog-cover-wrap" v-if="current.cover">
      <img :src="current.cover" :alt="current.title" class="blog-cover" />
    </div>

    <!-- 元数据 -->
    <div class="blog-meta-bar">
      <span class="blog-date">{{ formattedDate }}</span>
      <span class="blog-tag" v-if="current.tag">{{ current.tag }}</span>
    </div>

    <!-- 导航 -->
    <nav class="blog-nav" aria-label="资讯导航">
      <a href="/blog/" class="nav-back">← 返回资讯列表</a>
      <div class="nav-arrows">
        <a
          v-if="prevPost"
          :href="prevPost.url"
          class="nav-link nav-prev"
          :title="prevPost.title"
        >
          ← {{ prevPost.title }}
        </a>
        <span v-else class="nav-link nav-disabled">← 已是第一篇</span>

        <a
          v-if="nextPost"
          :href="nextPost.url"
          class="nav-link nav-next"
          :title="nextPost.title"
        >
          {{ nextPost.title }} →
        </a>
        <span v-else class="nav-link nav-disabled">已是最后一篇 →</span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.blog-detail-header {
  margin-bottom: 30px;
}

/* 封面图 */
.blog-cover-wrap {
  margin: -20px 0 24px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .08);
}

.blog-cover {
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
}

/* 元数据栏 */
.blog-meta-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
  margin-bottom: 4px;
}

.blog-date {
  font-size: 14px;
  color: #6b7280;
}

.blog-tag {
  display: inline-block;
  padding: 2px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #2d3a8c;
  background: #e8edff;
  border: 1px solid #c4cdf5;
}

/* 导航 */
.blog-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
}

.nav-back {
  color: #2d3a8c;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}

.nav-back:hover {
  text-decoration: underline;
}

.nav-arrows {
  display: flex;
  gap: 20px;
}

.nav-link {
  font-size: 13px;
  color: #1a1a2e;
  text-decoration: none;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}

.nav-link:hover {
  color: #2d3a8c;
}

.nav-disabled {
  color: #bbb;
  pointer-events: none;
}

@media (max-width: 768px) {
  .blog-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-arrows {
    flex-direction: column;
    gap: 8px;
  }

  .blog-cover {
    max-height: 240px;
  }
}
</style>
