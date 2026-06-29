<script setup>
defineProps({
  projects: { type: Array, default: () => [] }
})
</script>

<template>
  <section id="project" class="project-area project-area-1 bg-grey section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>成功案例</h6>
            <h2>项目精选</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="proj in projects" :key="proj.url" class="col-lg-4 col-md-6">
          <div class="single-project">
            <div class="project-image">
              <img :src="proj.cover" :alt="proj.title" />
            </div>
            <div class="works-overly-info">
              <div class="text">
                <h3><a :href="proj.url">{{ proj.title }}</a></h3>
                <a :href="proj.url" class="works-category">查看详情</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="project-more-btn-box text-center">
            <a class="btn btn-primary" href="/projects">查看所有项目</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
