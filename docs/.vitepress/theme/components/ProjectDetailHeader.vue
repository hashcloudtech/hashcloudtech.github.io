<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as projects } from '../../../projects/projects.data'

const { page } = useData()

const currentUrl = computed(() => {
  const rp = page.value?.relativePath || ''
  return '/' + rp.replace(/\.md$/, '')
})

const current = computed(() => projects.find(p => p.url === currentUrl.value))

const currentIndex = computed(() =>
  projects.findIndex(p => p.url === currentUrl.value)
)

const prevProject = computed(() => {
  if (currentIndex.value <= 0) return null
  return projects[currentIndex.value - 1]
})

const nextProject = computed(() => {
  if (currentIndex.value >= projects.length - 1) return null
  return projects[currentIndex.value + 1]
})

const techList = computed(() => {
  if (!current.value?.tech) return []
  return current.value.tech.split('·').map(t => t.trim()).filter(Boolean)
})

const serviceList = computed(() => {
  if (!current.value?.service) return []
  return current.value.service.split('·').map(s => s.trim()).filter(Boolean)
})
</script>

<template>
  <div class="project-detail-header" v-if="current">
    <!-- 封面图 -->
    <div class="project-cover-wrap" v-if="current.cover">
      <img :src="current.cover" :alt="current.title" class="project-cover" />
    </div>

    <!-- 元数据卡片 -->
    <div class="project-meta-card">
      <div class="project-meta-row" v-if="techList.length">
        <span class="meta-label">技术栈</span>
        <span class="meta-tags">
          <span v-for="t in techList" :key="t" class="tag tag-tech">{{ t }}</span>
        </span>
      </div>
      <div class="project-meta-row" v-if="serviceList.length">
        <span class="meta-label">服务内容</span>
        <span class="meta-tags">
          <span v-for="s in serviceList" :key="s" class="tag tag-service">{{ s }}</span>
        </span>
      </div>
    </div>

    <!-- 案例导航 -->
    <nav class="project-nav" aria-label="案例导航">
      <a href="/projects/" class="nav-back">← 返回案例列表</a>
      <div class="nav-arrows">
        <a
          v-if="prevProject"
          :href="prevProject.url"
          class="nav-link nav-prev"
          :title="prevProject.title"
        >
          ← {{ prevProject.title }}
        </a>
        <span v-else class="nav-link nav-disabled">← 已是第一篇</span>

        <a
          v-if="nextProject"
          :href="nextProject.url"
          class="nav-link nav-next"
          :title="nextProject.title"
        >
          {{ nextProject.title }} →
        </a>
        <span v-else class="nav-link nav-disabled">已是最后一篇 →</span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.project-detail-header {
  margin-bottom: 30px;
}

/* 封面图 */
.project-cover-wrap {
  margin: -20px 0 30px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .08);
}

.project-cover {
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
}

/* 元数据卡片 */
.project-meta-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%);
  border: 1px solid #dce0f5;
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 24px;
}

.project-meta-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.project-meta-row:last-child {
  margin-bottom: 0;
}

.meta-label {
  flex-shrink: 0;
  min-width: 72px;
  font-weight: 700;
  color: #1a1a2e;
  font-size: 14px;
  padding-top: 2px;
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 13px;
  line-height: 1.6;
}

.tag-tech {
  background: #1a1a2e;
  color: #fff;
}

.tag-service {
  background: #e8edff;
  color: #2d3a8c;
  border: 1px solid #c4cdf5;
}

/* 导航 */
.project-nav {
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
  .project-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-arrows {
    flex-direction: column;
    gap: 8px;
  }

  .project-meta-row {
    flex-direction: column;
    gap: 6px;
  }

  .project-cover {
    max-height: 240px;
  }
}
</style>
