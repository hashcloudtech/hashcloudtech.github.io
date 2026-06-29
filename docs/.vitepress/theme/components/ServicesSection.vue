<script setup>
const services = [
  {
    icon: 'devops icon',
    imgClass: 'single-services-box-img-1',
    title: '数据与云服务',
    desc: '大数据分析、云计算部署、数据中台建设及互联网数据服务，帮助企业打通数据孤岛，驱动智能决策。',
    link: '/services#data',
  },
  {
    icon: 'machineLearning icon',
    imgClass: 'single-services-box-img-2',
    title: '系统集成与运维',
    desc: '软硬件整合、网络部署、7×24 日常巡检及故障快速响应，保障 IT 系统持续稳定运行。',
    link: '/services#integration',
  },
  {
    icon: 'microservice icon',
    imgClass: 'single-services-box-img-3',
    title: '技术开发与咨询',
    desc: '从需求分析到产品交付，提供 Web 应用、移动端、管理系统的全生命周期定制开发与 IT 咨询。',
    link: '/services#dev',
  },
  {
    icon: 'security icon',
    imgClass: 'single-services-box-img-4',
    title: '网络安全与配套',
    desc: '等保测评整改、渗透测试、安全运维及软硬件设备供应，构建零信任多层防护体系。',
    link: '/services#security',
  },
  {
    icon: 'consulting icon',
    imgClass: 'single-services-box-img-5',
    title: 'AI 智能应用',
    desc: '大模型私有化部署、智能客服、知识库问答、RAG 应用开发，让 AI 技术真正落地业务场景。',
    link: '/services#ai',
  },
  {
    icon: 'monitoring icon',
    imgClass: 'single-services-box-img-6',
    title: 'IT基础设施服务',
    desc: '服务器部署、网络架构设计、机房建设——一站式 IT 基础设施规划、实施与运维保障。',
    link: '/services',
  },
]
</script>

<template>
  <section id="services" class="services-area-1 section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>核心业务</h6>
            <h2>我们提供的服务</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="svc in services" :key="svc.title" class="col-lg-4 col-md-6">
          <div class="single-services-box-1" :class="svc.imgClass">
            <div class="services-icon-12">
              <i :class="svc.icon"></i>
            </div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <div class="services-btn">
              <a :href="svc.link" class="services-btn-one">阅读更多</a>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="services-more-btn-box text-center">
            <a class="btn btn-primary" href="/services">查看所有服务</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
