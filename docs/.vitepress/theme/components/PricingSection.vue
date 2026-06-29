<script setup>
import { ref, computed } from 'vue'

// ========== 筛选标签 ==========
const filterTabs = [
  { label: '全部', key: 'all' },
  { label: 'AI 智能应用', key: 'ai' },
  { label: '数据与云服务', key: 'data' },
  { label: '系统集成与运维', key: 'integration' },
  { label: '技术开发与咨询', key: 'dev' },
  { label: '网络安全与配套', key: 'security' },
]

const activeFilter = ref('all')

// ========== 定价数据 ==========
const pricingCategories = [
  {
    id: 'ai-pricing',
    icon: 'fas fa-robot',
    title: 'AI 智能应用',
    key: 'ai',
    plans: [
      {
        badge: '基础版',
        badgeClass: 'badge-basic',
        title: 'AI 基础套餐',
        price: '¥8,000',
        unit: '/月起',
        desc: '适合首次尝试 AI 应用的小型企业',
        features: [
          '通用大模型 API 接入（1个模型）',
          '基础智能客服机器人',
          '简单知识库搭建（<1000条）',
          '基础使用培训',
          '5×8 技术支持',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询 AI 基础套餐',
        isPopular: false,
      },
      {
        badge: '专业版',
        badgeClass: 'badge-pro',
        title: 'AI 专业套餐',
        price: '¥30,000',
        unit: '/月起',
        desc: '适合有明确 AI 需求的中型企业',
        features: [
          '大模型私有化部署（DeepSeek等）',
          'RAG 应用定制开发',
          '智能客服系统（多渠道接入）',
          '知识库问答系统（企业级）',
          'AI Agent 搭建（1-2个场景）',
          '7×12 技术支持 + 每月优化',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询 AI 专业套餐',
        isPopular: true,
        popularLabel: '最受欢迎',
      },
      {
        badge: '企业版',
        badgeClass: 'badge-enterprise',
        title: 'AI 企业套餐',
        price: '定制',
        unit: '报价',
        desc: '适合有深度 AI 转型需求的大型企业',
        features: [
          '多模型集群私有化部署',
          '全量 RAG + 多 Agent 协同',
          '全渠道智能客服平台',
          '企业知识图谱 + 海量知识库',
          'AI 中台建设 + 全场景覆盖',
          '7×24 专属运维 + SLA 保障',
        ],
        cta: '获取报价',
        ctaTitle: '咨询 AI 企业定制方案',
        isPopular: false,
        checkTheme: 'orange',
      },
    ],
  },
  {
    id: 'data-pricing',
    icon: 'fas fa-cloud',
    title: '数据与云服务',
    key: 'data',
    plans: [
      {
        badge: '基础版',
        badgeClass: 'badge-basic',
        title: '数据基础方案',
        price: '¥12,000',
        unit: '/月起',
        desc: '适合初步构建数据能力的企业',
        features: [
          '云平台基础部署（单云）',
          '基础数据分析 + 可视化报表',
          '数据清洗与ETL（<10数据源）',
          '单机/单节点部署架构',
          '5×8 技术支持',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询数据基础方案',
        isPopular: false,
      },
      {
        badge: '专业版',
        badgeClass: 'badge-pro',
        title: '数据中台方案',
        price: '¥50,000',
        unit: '/月起',
        desc: '适合需要统一数据治理的企业',
        features: [
          '多云/混合云架构部署',
          '数据中台建设（数据治理+资产）',
          '商业智能 BI 系统搭建',
          '实时流计算 + 数据管道',
          'Docker/K8s 容器化部署',
          '7×12 技术支持 + 季度巡检',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询数据中台方案',
        isPopular: true,
        popularLabel: '推荐',
      },
      {
        badge: '企业版',
        badgeClass: 'badge-enterprise',
        title: '数据智能方案',
        price: '定制',
        unit: '报价',
        desc: '适合大型企业的数据化转型',
        features: [
          '全栈云原生架构设计',
          '企业级数据中台（全链路）',
          'AI + BI 智能决策系统',
          '大规模实时流处理（Flink）',
          '微服务架构 + 服务网格',
          '7×24 专属运维 + SLA 99.9%',
        ],
        cta: '获取报价',
        ctaTitle: '咨询数据智能方案',
        isPopular: false,
        checkTheme: 'orange',
      },
    ],
  },
  {
    id: 'integration-pricing',
    icon: 'fas fa-cogs',
    title: '系统集成与运维',
    key: 'integration',
    plans: [
      {
        badge: '基础版',
        badgeClass: 'badge-basic',
        title: '运维基础服务',
        price: '¥5,000',
        unit: '/月起',
        desc: '适合基础 IT 运维需求的中小企业',
        features: [
          '基础网络部署（<50终端）',
          '服务器监控（<10台）',
          '基础数据备份方案',
          '月度巡检报告',
          '5×8 远程支持 + 紧急到场',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询运维基础服务',
        isPopular: false,
      },
      {
        badge: '专业版',
        badgeClass: 'badge-pro',
        title: '集成运维方案',
        price: '¥20,000',
        unit: '/月起',
        desc: '适合需要系统集成专业服务的企业',
        features: [
          '企业级网络规划与部署',
          '7×24 运维监控（<50台）',
          '灾备方案设计 + 演练',
          'IT 资产管理系统',
          '系统集成方案设计实施',
          '7×12 技术支持 + 月度报告',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询集成运维方案',
        isPopular: true,
        popularLabel: '最受欢迎',
      },
      {
        badge: '企业版',
        badgeClass: 'badge-enterprise',
        title: '全托管运维',
        price: '定制',
        unit: '报价',
        desc: '适合大型企业/数据中心的全面运维',
        features: [
          '数据中心级集成规划',
          '7×24 全域运维监控',
          '两地三中心灾备体系',
          'CMDB + ITIL运维体系',
          '驻场工程师 + 远程支持',
          'SLA 99.95% + 15分钟响应',
        ],
        cta: '获取报价',
        ctaTitle: '咨询全托管运维服务',
        isPopular: false,
        checkTheme: 'orange',
      },
    ],
  },
  {
    id: 'dev-pricing',
    icon: 'fas fa-code',
    title: '技术开发与咨询',
    key: 'dev',
    plans: [
      {
        badge: '基础版',
        badgeClass: 'badge-basic',
        title: '开发体验包',
        price: '¥15,000',
        unit: '/项目起',
        desc: '适合小型项目或原型验证',
        features: [
          '企业官网/落地页开发',
          '微信小程序（基础功能）',
          'IT 咨询（半天诊断）',
          '原型 + UI设计稿',
          '3个月技术支持',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询开发体验包',
        isPopular: false,
      },
      {
        badge: '专业版',
        badgeClass: 'badge-pro',
        title: '专业开发方案',
        price: '¥80,000',
        unit: '/项目起',
        desc: '适合中型系统的定制开发',
        features: [
          'Web 应用全栈开发（Java/Go）',
          '移动APP / 多端小程序',
          'IT 战略规划咨询',
          '系统架构设计 + 技术选型',
          '数字化转型方案设计',
          '1年技术支持 + 运维保障',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询专业开发方案',
        isPopular: true,
        popularLabel: '推荐',
      },
      {
        badge: '企业版',
        badgeClass: 'badge-enterprise',
        title: '企业级开发',
        price: '定制',
        unit: '报价',
        desc: '适合大型平台/核心系统的建设',
        features: [
          '大型平台级系统建设',
          '微服务 + 分布式架构',
          '全链路数字化转型',
          '企业架构治理 + 技术委员会',
          'DevOps + 持续交付体系',
          '长期技术合伙人模式',
        ],
        cta: '获取报价',
        ctaTitle: '咨询企业级开发方案',
        isPopular: false,
        checkTheme: 'orange',
      },
    ],
  },
  {
    id: 'security-pricing',
    icon: 'fas fa-shield-alt',
    title: '网络安全与配套',
    key: 'security',
    plans: [
      {
        badge: '基础版',
        badgeClass: 'badge-basic',
        title: '安全基础服务',
        price: '¥8,000',
        unit: '/月起',
        desc: '适合基础安全防护需求的企业',
        features: [
          '基础安全评估 + 检查',
          '防火墙 / VPN 部署',
          '终端安全防护',
          '基础安全策略配置',
          '月度安全报告',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询安全基础服务',
        isPopular: false,
      },
      {
        badge: '专业版',
        badgeClass: 'badge-pro',
        title: '等保合规方案',
        price: '¥30,000',
        unit: '/月起',
        desc: '适合需要等保认证的企业',
        features: [
          '等保二级/三级测评整改',
          '渗透测试 + 漏洞扫描',
          '安全运维（7×24监控）',
          '应急响应预案 + 演练',
          '安全设备部署（防火墙/IDS/WAF）',
          '季度安全审计 + 合规报告',
        ],
        cta: '立即咨询',
        ctaTitle: '咨询等保合规方案',
        isPopular: true,
        popularLabel: '最受欢迎',
      },
      {
        badge: '企业版',
        badgeClass: 'badge-enterprise',
        title: '安全运营中心',
        price: '定制',
        unit: '报价',
        desc: '适合对安全要求极高的大型企业',
        features: [
          '等保三级全流程辅导',
          '零信任安全架构建设',
          'SOC + 态势感知平台',
          '红蓝对抗 + 深度渗透',
          '数据安全治理（DLP）',
          '7×24 安全运营 + RTO<30min',
        ],
        cta: '获取报价',
        ctaTitle: '咨询安全运营中心方案',
        isPopular: false,
        checkTheme: 'orange',
      },
    ],
  },
]

// ========== 对比表格 ==========
const comparisonRows = [
  { label: '适用规模', basic: '<50人 / 初创企业', pro: '50-500人 / 中型企业', enterprise: '500人+ / 大型企业' },
  { label: '服务深度', basic: '标准化交付', pro: '定制化方案', enterprise: '全栈深度定制', alt: true },
  { label: '技术支持', basic: '5×8 远程支持', pro: '7×12 远程+到场', enterprise: '7×24 专属+驻场' },
  { label: 'SLA 保障', basic: '—', pro: '99.5%', enterprise: '99.9%+', alt: true },
  { label: '响应时间', basic: '4小时', pro: '1小时', enterprise: '15分钟' },
  { label: '专属经理', basic: '—', pro: '✓', enterprise: '✓', alt: true, iconPro: true },
  { label: '驻场服务', basic: '—', pro: '可选', enterprise: '✓', iconEnterprise: true },
  { label: '交付周期', basic: '1-4周', pro: '1-3个月', enterprise: '3-12个月+', alt: true },
  { label: '付款方式', basic: '一次性', pro: '分期 / 按季度', enterprise: '分期 / 按年签约', alt: true },
]

// ========== FAQ ==========
const faqItems = [
  { q: '报价是否包含硬件设备费用？', a: '基础版和专业版的报价仅包含软件与服务费用，不含硬件设备采购费用。企业版可包含硬件整体方案，具体以实际合同约定为准。如需硬件设备（服务器、防火墙等），我们可提供设备选型与代采服务。' },
  { q: '是否支持组合购买多个服务？', a: '支持。多个服务组合购买可享受打包优惠，具体折扣比例根据服务组合和合同金额确定。我们建议大中型客户选择"AI + 数据 + 安全"三位一体方案，性价比更高。' },
  { q: '后续是否有隐形费用？', a: '无隐形费用。合同签订前我们会提供详细的费用清单，包含一次性交付费用、持续服务费用、可选增值服务费用等。所有费用均在合同中明确列明，确保透明。' },
  { q: '能否先试用或做小规模 POC？', a: '可以。我们支持先进行概念验证（POC）项目，以较小投入验证方案可行性。POC 费用根据项目范围协商确定，正式签约时 POC 费用可抵扣合同金额。' },
  { q: '基础版可以升级到专业版或企业版吗？', a: '可以无缝升级。基础版客户在业务发展后可按需升级到专业版或企业版，已支付的基础版费用可按比例抵扣升级后的服务费用，实现平滑过渡。' },
  { q: '是否支持开票和对公付款？', a: '支持。哈希云图为正规注册企业，可开具增值税专用发票或普通发票，支持对公银行转账、承兑汇票等多种付款方式。合同签订后按约定节点付款。' },
]

// ========== 合作流程 ==========
const processSteps = [
  { step: 1, title: '需求沟通', descLines: ['在线留言或电话沟通，', '了解您的业务需求'] },
  { step: 2, title: '方案报价', descLines: ['定制方案 + 明细报价，', '透明无隐形费用'] },
  { step: 3, title: '签约启动', descLines: ['签订合同 + 项目启动，', '组建专属项目团队'] },
  { step: 4, title: '交付运维', descLines: ['实施交付 + 持续运维，', '保障项目成功落地'] },
]

// ========== 筛选逻辑 ==========
const filteredCategories = computed(() => {
  if (activeFilter.value === 'all') return pricingCategories
  return pricingCategories.filter(c => c.key === activeFilter.value)
})
</script>

<template>
  <div class="page-content">
    <div class="container">

      <!-- 标题区域 -->
      <div class="pricing-header">
        <div class="section-title">
          <h6>透明定价</h6>
          <h2>灵活方案，按需选择</h2>
          <p>哈希云图提供基础版、专业版、企业版三档方案，覆盖五大业务线。所有报价透明公开，<br/>具体需求欢迎联系我们获取定制报价。</p>
        </div>
      </div>

      <!-- 定价筛选按钮 -->
      <div class="pricing-tabs">
        <button
          v-for="tab in filterTabs"
          :key="tab.key"
          class="pricing-tab-btn"
          :class="{ active: activeFilter === tab.key }"
          @click="activeFilter = tab.key"
        >{{ tab.label }}</button>
      </div>

      <!-- 定价卡片区域 -->
      <div
        v-for="cat in filteredCategories"
        :id="cat.id"
        :key="cat.id"
        class="pricing-category"
      >
        <h3 class="pricing-category-title">
          <i :class="cat.icon" class="category-icon"></i>{{ cat.title }}
        </h3>
        <div class="row">
          <div
            v-for="plan in cat.plans"
            :key="plan.title"
            class="col-lg-4 col-md-6 col-sm-12 col-card"
          >
            <div class="pricing-card" :class="{ popular: plan.isPopular }">
              <div v-if="plan.isPopular && plan.popularLabel" class="popular-label">{{ plan.popularLabel }}</div>
              <div class="badge" :class="plan.badgeClass">{{ plan.badge }}</div>
              <h4 class="plan-title">{{ plan.title }}</h4>
              <div class="price" :class="{ 'price-highlight': plan.isPopular }">
                {{ plan.price }}<span class="price-unit">{{ plan.unit }}</span>
              </div>
              <p class="plan-desc">{{ plan.desc }}</p>
              <ul class="feature-list">
                <li v-for="(feat, j) in plan.features" :key="feat" :class="{ 'feature-last': j === plan.features.length - 1 }">
                  <i class="fas fa-check" :class="plan.checkTheme === 'orange' ? 'check-orange' : 'check-blue'"></i>{{ feat }}
                </li>
              </ul>
              <a href="/contact" class="btn btn-primary btn-full" :title="plan.ctaTitle">{{ plan.cta }}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 对比表格 -->
      <div class="comparison-section">
        <div class="section-title text-center">
          <h6>方案对比</h6>
          <h2>快速选择适合您的方案</h2>
        </div>
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="th-label">对比维度</th>
                <th class="th-version">基础版</th>
                <th class="th-pro">专业版</th>
                <th class="th-version">企业版</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.label"
                :class="{ 'row-alt': row.alt }"
              >
                <td class="td-label">{{ row.label }}</td>
                <td class="td-cell">
                  <template v-if="row.iconPro && row.basic === '—'">{{ row.basic }}</template>
                  <template v-else>{{ row.basic }}</template>
                </td>
                <td class="td-pro-cell">
                  <template v-if="row.iconPro && row.pro === '✓'"><i class="fas fa-check check-blue"></i></template>
                  <template v-else>{{ row.pro }}</template>
                </td>
                <td class="td-cell">
                  <template v-if="row.iconEnterprise && row.enterprise === '✓'"><i class="fas fa-check check-orange"></i></template>
                  <template v-else>{{ row.enterprise }}</template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FAQ -->
      <div class="faq-section">
        <div class="section-title text-center">
          <h6>常见问题</h6>
          <h2>关于定价的疑问解答</h2>
        </div>
        <div class="row faq-grid">
          <div v-for="item in faqItems" :key="item.q" class="col-lg-6 col-md-12 faq-col">
            <div class="faq-card">
              <h4 class="faq-q"><i class="fas fa-question-circle faq-icon"></i>{{ item.q }}</h4>
              <p class="faq-a">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 合作流程 -->
      <div class="process-section">
        <div class="section-title text-center">
          <h6>合作流程</h6>
          <h2>四步开启合作</h2>
        </div>
        <div class="row process-grid">
          <div v-for="step in processSteps" :key="step.step" class="col-lg-3 col-md-6 col-sm-12 process-col">
            <div class="process-card">
              <div class="process-num">{{ step.step }}</div>
              <h4 class="process-title">{{ step.title }}</h4>
              <p class="process-desc"><span v-for="(line, li) in step.descLines" :key="li">{{ line }}<br v-if="li < step.descLines.length - 1" /></span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ========== Header ========== */
.pricing-header {
  text-align: center;
  padding: 60px 0 20px;
}

/* ========== Filter Tabs ========== */
.pricing-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.pricing-tab-btn {
  padding: 10px 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  color: #333;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
}

.pricing-tab-btn:hover {
  border-color: #5764ec;
  color: #5764ec;
}

.pricing-tab-btn.active {
  border-color: #5764ec;
  background: #5764ec;
  color: #fff;
  font-weight: 600;
}

/* ========== Category ========== */
.pricing-category {
  margin-bottom: 80px;
}

.pricing-category-title {
  text-align: center;
  margin-bottom: 40px;
  color: #222;
  font-size: 28px;
  font-weight: 700;
}

.category-icon {
  color: #5764ec;
  margin-right: 8px;
}

/* ========== Card Columns ========== */
.col-card {
  margin-bottom: 30px;
}

/* ========== Pricing Card ========== */
.pricing-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 35px 25px;
  text-align: center;
  height: 100%;
  background: #fff;
  transition: all 0.3s;
}

.pricing-card.popular {
  border: 2px solid #5764ec;
  position: relative;
  transform: scale(1.03);
  box-shadow: 0 10px 40px rgba(87, 100, 236, 0.15);
}

.popular-label {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #5764ec;
  color: #fff;
  padding: 4px 20px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

/* ========== Badge ========== */
.badge {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.badge-basic {
  background: #e8f4fd;
  color: #5764ec;
}

.badge-pro {
  background: #e8e6ff;
  color: #5764ec;
  margin: 10px 0 15px;
}

.badge-enterprise {
  background: #fef4e8;
  color: #ff561d;
}

/* ========== Plan Title & Price ========== */
.plan-title {
  font-size: 22px;
  margin-bottom: 10px;
}

.price {
  font-size: 42px;
  font-weight: 800;
  color: #222;
  margin-bottom: 5px;
}

.price-highlight {
  color: #5764ec;
}

.price-unit {
  font-size: 16px;
  color: #999;
  font-weight: 400;
}

.plan-desc {
  color: #888;
  font-size: 14px;
  margin-bottom: 25px;
}

/* ========== Feature List ========== */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
  text-align: left;
}

.feature-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  color: #555;
}

.feature-list li.feature-last {
  border-bottom: none;
}

.check-blue {
  color: #5764ec;
  margin-right: 8px;
}

.check-orange {
  color: #ff561d;
  margin-right: 8px;
}

/* ========== CTA ========== */
.btn-full {
  width: 100%;
}

/* ========== Comparison Table ========== */
.comparison-section {
  margin-bottom: 80px;
}

.text-center {
  text-align: center;
}

.table-responsive {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  margin-top: 30px;
}

.comparison-table thead tr {
  background: #5764ec;
  color: #fff;
}

.th-label {
  padding: 16px;
  text-align: left;
  width: 25%;
}

.th-version {
  padding: 16px;
  text-align: center;
  width: 25%;
}

.th-pro {
  padding: 16px;
  text-align: center;
  width: 25%;
  background: #4a56d4;
}

.comparison-table tbody tr {
  border-bottom: 1px solid #e5e5e5;
}

.comparison-table tbody tr.row-alt {
  background: #fafafa;
}

.td-label {
  padding: 14px 16px;
  font-weight: 600;
}

.td-cell {
  padding: 14px 16px;
  text-align: center;
  color: #555;
}

.td-pro-cell {
  padding: 14px 16px;
  text-align: center;
  background: #f8f9ff;
  color: #555;
}

/* ========== FAQ ========== */
.faq-section {
  margin-bottom: 60px;
}

.faq-grid {
  margin-top: 30px;
}

.faq-col {
  margin-bottom: 30px;
}

.faq-card {
  background: #f8f9ff;
  padding: 24px;
  border-radius: 8px;
  height: 100%;
}

.faq-q {
  font-size: 17px;
  color: #222;
  margin-bottom: 12px;
}

.faq-icon {
  color: #5764ec;
  margin-right: 8px;
}

.faq-a {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
  margin: 0;
}

/* ========== Process Steps ========== */
.process-section {
  text-align: center;
  padding: 60px 0;
  background: #f8f9ff;
  border-radius: 8px;
  margin-bottom: 60px;
}

.process-grid {
  margin-top: 40px;
}

.process-col {
  margin-bottom: 30px;
}

.process-card {
  padding: 20px;
}

.process-num {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  background: #5764ec;
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  margin: 0 auto 18px;
}

.process-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.process-desc {
  color: #777;
  font-size: 14px;
}
</style>
