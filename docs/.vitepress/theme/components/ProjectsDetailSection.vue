<script setup>
defineProps({
  projects: { type: Array, default: () => [] }
})
</script>

<template>
  <div class="page-content">
    <div class="container">
      <h2 class="projects-section-title">精选案例</h2>

      <div
        v-for="(project, index) in projects"
        :key="project.url"
        class="row project-detail-row"
      >
        <div class="col-lg-6 col-md-12" :class="{ 'order-lg-2': index % 2 === 1 }">
          <img
            :src="project.cover"
            :alt="project.title"
            class="project-detail-img"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 col-md-12" :class="{ 'order-lg-1': index % 2 === 1 }">
          <h3><a :href="project.url">{{ project.title }}</a></h3>
          <p>{{ project.description }}</p>
          <p v-if="project.tech"><strong>技术栈：</strong>{{ project.tech }}</p>
          <p v-if="project.service"><strong>服务内容：</strong>{{ project.service }}</p>
          <a :href="project.url" class="btn btn-primary">查看详情 →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-section-title {
  text-align: center;
  margin-bottom: 40px;
}

.project-detail-row {
  margin-bottom: 50px;
}

.project-detail-img {
  border-radius: 3px;
  margin-bottom: 20px;
}
</style>
