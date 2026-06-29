<script setup>
const features = [
  {
    icon: '/assets/img/icon/icon-1.svg',
    title: 'AI 智能应用落地',
    desc: '大模型私有化部署、智能问答、知识库等场景快速落地，助力企业抢先迈入 AI 时代。',
  },
  {
    icon: '/assets/img/icon/icon-2.svg',
    title: '智能网络监控',
    desc: '实时流量分析引擎精准识别 DDoS 攻击、异常流量与潜在安全威胁，防患于未然。',
  },
  {
    icon: '/assets/img/icon/icon-3.svg',
    title: '零信任安全体系',
    desc: '基于零信任架构构建纵深防护体系，有效抵御定向攻击、勒索病毒等各类安全威胁。',
  },
  {
    icon: '/assets/img/icon/icon-4.svg',
    title: '托管运维服务',
    desc: '服务器维护、数据库优化、证书管理、补丁升级等全托式运维，让您专注核心业务。',
  },
  {
    icon: '/assets/img/icon/icon-5.svg',
    title: '专属技术支持',
    desc: '从系统对接、硬件调试到技术咨询，配备专属工程师提供一站式快速响应服务。',
  },
  {
    icon: '/assets/img/icon/icon-6.svg',
    title: '按需定制开发',
    desc: '根据业务场景量身打造管理系统、数据平台、AI应用等，精准匹配您的业务需求。',
  },
]
</script>

<template>
  <section class="whychoose-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>核心优势</h6>
            <h2>为什么选择我们？</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in features" :key="item.title" class="col-lg-4 col-md-6">
          <div class="whychoose-single-item">
            <div class="whychoose-icon-box">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <div class="whychoose-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
