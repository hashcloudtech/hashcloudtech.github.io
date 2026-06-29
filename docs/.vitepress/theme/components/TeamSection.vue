<script setup>
const team = [
  { img: '/assets/img/team/team-1.jpg', name: '吴晓波', role: '首席执行官' },
  { img: '/assets/img/team/team-2.jpg', name: '王伟', role: '人力资源总监' },
  { img: '/assets/img/team/team-3.jpg', name: '王芳', role: '内容运营主管' },
  { img: '/assets/img/team/team-4.jpg', name: '王鑫', role: '技术研发主管' },
]
</script>

<template>
  <section class="team-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>核心团队</h6>
            <h2>团队成员</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="member in team" :key="member.name" class="col-lg-3 col-md-6">
          <div class="single-team-box">
            <div class="team-image">
              <img :src="member.img" :alt="member.name" />
              <div class="team-social-box">
                <div class="team-social-icon">
                  <button :aria-label="member.name + ' 微博'" class="team-social-btn"><i class="fab fa-weibo"></i></button>
                  <button :aria-label="member.name + ' 微信'" class="team-social-btn"><i class="fab fa-weixin"></i></button>
                  <button :aria-label="member.name + ' QQ'" class="team-social-btn"><i class="fab fa-qq"></i></button>
                </div>
              </div>
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <span>{{ member.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-social-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  line-height: 1;
}
</style>
