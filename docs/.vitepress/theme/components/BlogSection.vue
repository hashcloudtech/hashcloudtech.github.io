<script setup>
defineProps({
  posts: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="blog-area bg-grey section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>新闻动态</h6>
            <h2>最新资讯</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="post in posts" :key="post.url" class="col-lg-4 col-md-6">
          <div class="single-blog">
            <div class="post-img">
              <a :href="post.url">
                <img :src="post.cover" :alt="post.title" />
              </a>
            </div>
            <div class="blog-content">
              <div class="blog-date">
                <ul class="blog-list">
                  <li><h6>{{ post.date }}</h6></li>
                  <li><span class="blog-inline-sep">|</span></li>
                  <li><a :href="post.url">{{ post.tag }}</a></li>
                </ul>
              </div>
              <div class="blog-body-title">
                <h3><a :href="post.url">{{ post.title }}</a></h3>
              </div>
              <div class="blog-body-text">
                <p>{{ post.description }}</p>
              </div>
              <div class="blog-bottom-text-link">
                <a :href="post.url">+ 阅读更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="blog-more-btn-box mt-45 text-center">
            <a href="/contact" class="btn btn-primary mr-15">获取方案报价</a>
            <a href="/blog" class="btn btn-primary">更多资讯</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
