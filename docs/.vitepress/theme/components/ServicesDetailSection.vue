<script setup>
const serviceDetails = [
  {
    id: 'ai',
    title: 'AI 智能应用',
    paragraphs: [
      '哈希云图紧跟人工智能技术前沿，为企业提供大模型私有化部署、智能客服、知识库问答、RAG（检索增强生成）应用开发等 AI 智能应用服务，帮助企业将 AI 能力真正落地到业务场景中。',
      '我们基于主流大模型平台（如 DeepSeek、通义千问、文心一言等），结合企业私有数据与业务逻辑，打造安全可控、精准高效的智能应用，助力客户在客户服务、内部办公、数据分析等场景实现智能化升级。',
    ],
    core: '大模型部署 · RAG 应用 · 智能客服 · 知识库问答 · AI Agent 开发',
    ctaText: '咨询 AI 服务',
    ctaTitle: '咨询 AI 智能应用服务',
    img: '/assets/img/services/services-1.jpg',
    imgAlt: 'AI 智能应用 — 大模型部署、RAG 应用、智能客服、知识库问答',
    reversed: false,
  },
  {
    id: 'data',
    title: '数据与云服务',
    paragraphs: [
      '哈希云图提供覆盖数据全生命周期的云服务解决方案，涵盖大数据分析、云计算部署、数据中台建设及互联网数据服务，帮助政企客户打破数据孤岛，构建统一数据视图，驱动精准业务决策。',
      '基于对主流云平台（阿里云、华为云、腾讯云）的深度集成能力，我们为企业提供弹性可扩展的云架构设计、平滑迁移及持续运维服务，保障系统高可用与数据安全。',
    ],
    core: '数据治理 · 云原生架构 · 数据中台 · 商业智能(BI) · 实时流计算',
    ctaText: '咨询数据服务',
    ctaTitle: '咨询数据与云服务',
    img: '/assets/img/services/services-2.jpg',
    imgAlt: '数据与云服务 — 大数据分析、云计算部署、数据中台建设',
    reversed: false,
  },
  {
    id: 'integration',
    title: '系统集成与运维',
    paragraphs: [
      '信息系统集成与运维是哈希云图的核心业务之一。我们提供从需求分析、方案设计到落地实施的全流程系统集成服务，覆盖软硬件整合、网络部署、数据中心建设等场景。',
      '运维服务方面，我们提供 7×24 小时实时监控、定期巡检、故障快速响应及应急预案机制，确保客户 IT 系统持续稳定运行，故障响应速度及恢复时效行业领先。',
    ],
    core: '系统集成 · 网络部署 · 运维监控 · 灾备方案 · IT资产管理',
    ctaText: '咨询集成运维',
    ctaTitle: '咨询系统集成与运维服务',
    img: '/assets/img/services/services-3.jpg',
    imgAlt: '系统集成与运维 — 网络部署、运维监控、灾备方案、IT资产管理',
    reversed: true,
  },
  {
    id: 'dev',
    title: '技术开发与咨询',
    paragraphs: [
      '我们提供从需求分析到产品交付的全生命周期软件开发服务，覆盖 Web 应用、移动 APP、小程序、AI 应用、企业管理系统等全场景。技术栈涵盖 Java、Python、Vue、React、uni-app 等主流框架。',
      '同时提供企业管理咨询及 IT 战略咨询服务，帮助客户梳理业务流程、制定数字化转型路径、评估技术方案可行性，有效降低 IT 投资风险与试错成本。',
    ],
    core: '定制开发 · 技术咨询 · 项目管理 · 数字化转型规划 · 系统架构设计',
    ctaText: '咨询技术服务',
    ctaTitle: '咨询技术开发与IT咨询服务',
    img: '/assets/img/services/services-4.jpg',
    imgAlt: '技术开发与咨询 — 定制开发、技术咨询、项目管理、数字化转型规划',
    reversed: false,
  },
  {
    id: 'security',
    title: '网络安全与配套',
    paragraphs: [
      '网络安全服务覆盖等保测评整改、安全运维、渗透测试、应急响应等全场景。基于零信任架构构建纵深多层防护体系，有效抵御各类网络攻击与数据泄露风险。',
      '同时提供网络技术服务与计算机软硬件设备供应，从防火墙部署到终端安全管理，一站式满足企业安全合规与基础设施升级需求。',
    ],
    core: '等保合规 · 安全运维 · 渗透测试 · 安全设备 · 网络架构',
    ctaText: '咨询安全服务',
    ctaTitle: '咨询网络安全与等保合规服务',
    img: '/assets/img/services/services-5.jpg',
    imgAlt: '网络安全与配套 — 等保合规、安全运维、渗透测试、安全设备部署',
    reversed: true,
  },
]
</script>

<template>
  <div class="page-content">
    <div class="container">
      <div
        v-for="detail in serviceDetails"
        :id="detail.id"
        :key="detail.id"
        class="row align-items-center service-detail-row"
      >
        <div class="col-lg-6 col-md-12" :class="{ 'order-lg-2': detail.reversed }">
          <h2>{{ detail.title }}</h2>
          <p v-for="(p, i) in detail.paragraphs" :key="i">{{ p }}</p>
          <p><strong>核心能力：</strong>{{ detail.core }}</p>
          <a
            href="/contact"
            class="btn btn-primary mt-20"
            :title="detail.ctaTitle"
          >{{ detail.ctaText }}</a>
        </div>
        <div class="col-lg-6 col-md-12" :class="{ 'order-lg-1': detail.reversed }">
          <img
            :src="detail.img"
            :alt="detail.imgAlt"
            class="service-detail-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-detail-row {
  margin-bottom: 80px;
}

.service-detail-img {
  border-radius: 3px;
}
</style>
