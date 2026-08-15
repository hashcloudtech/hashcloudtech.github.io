import { defineConfig } from 'vitepress'

const SITE_URL = 'https://www.hashcloud.cn'
const SITE_TITLE = '哈希云图'
const SITE_TITLE_FULL = '哈希云图信息科技有限公司'
const SITE_DESCRIPTION = '哈希云图信息科技有限公司 —— AI智能应用与IT解决方案服务商，专注人工智能、数据云服务、系统集成运维、技术开发咨询、网络安全配套。'
// og-image 待制作后替换；当前回退使用 Logo
const OG_IMAGE = '/assets/img/logo.png'

export default defineConfig({
  lang: 'zh-CN',
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,

  // 部署在域名根路径（如需部署到子目录，改为 '/子目录名/'）
  base: '/',

  // 美化 URL（去掉 .html 后缀）
  cleanUrls: true,
  // 显示最后更新时间（搜索引擎偏好新鲜内容）
  lastUpdated: true,

  // 全局 sitemap 配置
  sitemap: {
    hostname: SITE_URL,
  },

  // 页面标题模板
  titleTemplate: ':title — 哈希云图信息科技有限公司',

  head: [
    // ========== 基础 Meta ==========
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/img/favicon.png' }],
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: SITE_TITLE_FULL }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'keywords', content: '哈希云图,AI应用,人工智能,IT解决方案,系统集成,网络安全,数据云服务,软件开发,信息技术咨询,大模型部署,RAG应用,智能客服,知识库问答,太原IT公司,等保合规' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],

    // ========== Canonical URL ==========
    ['link', { rel: 'canonical', href: SITE_URL }],

    // ========== Open Graph (Facebook / LinkedIn / 社交平台) ==========
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: SITE_TITLE_FULL }],
    ['meta', { property: 'og:title', content: SITE_TITLE_FULL }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:image', content: `${SITE_URL}${OG_IMAGE}` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: `${SITE_TITLE} — AI智能应用与IT解决方案服务商` }],

    // ========== Twitter Card ==========
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: SITE_TITLE_FULL }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}${OG_IMAGE}` }],
    ['meta', { name: 'twitter:image:alt', content: `${SITE_TITLE} — AI智能应用与IT解决方案服务商` }],

    // ========== 百度站长验证（有账号时替换 content） ==========
    // ['meta', { name: 'baidu-site-verification', content: 'code-xxxxxxxx' }],

    // ========== JSON-LD 结构化数据：WebSite ==========
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_TITLE_FULL,
        alternateName: SITE_TITLE,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: 'zh-CN',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }),
    ],

    // ========== JSON-LD 结构化数据：Organization / LocalBusiness ==========
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'InformationTechnologyCompany',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_TITLE_FULL,
        alternateName: SITE_TITLE,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/img/logo.png`,
        description: SITE_DESCRIPTION,
        foundingDate: '2021',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '小店区平阳路65号平阳景苑5号楼19层',
          addressLocality: '太原市',
          addressRegion: '山西省',
          postalCode: '030000',
          addressCountry: 'CN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '18523845416', // TODO: 替换为真实电话
          email: 'hashcloud@foxmail.com',
          contactType: '客户服务',
          areaServed: ['CN'],
          availableLanguage: ['zh-CN'],
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '10:00',
            closes: '16:00',
          },
        ],
        sameAs: [
          // 请替换为公司实际的社交媒体主页链接
          // 'https://weibo.com/your-company',
          // 'https://www.zhihu.com/org/your-company',
        ],
        knowsAbout: [
          '人工智能',
          '大模型部署',
          'RAG应用',
          '智能客服',
          '数据中台',
          '云计算',
          '系统集成',
          '网络安全',
          '等保合规',
          '软件开发',
        ],
        areaServed: {
          '@type': 'Country',
          name: '中国',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'IT解决方案服务',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI 智能应用',
                description: '大模型私有化部署、智能客服、知识库问答、RAG应用开发',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '数据与云服务',
                description: '大数据分析、云计算部署、数据中台建设',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '系统集成与运维',
                description: '系统集成、网络部署、7×24小时运维监控、灾备方案',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '技术开发与咨询',
                description: '定制软件开发、IT战略咨询、数字化转型规划',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '网络安全与配套',
                description: '等保合规、安全运维、渗透测试、安全设备部署',
              },
            },
          ],
        },
      }),
    ],

    // ========== 字体 ==========
    // Google Fonts 已移除（中国大陆加载超时/被墙），改用自定义字体栈 + 本地备选，参见 custom.css

    // ========== TechSoft 模板 CSS ==========
    ['link', { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/animate.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/icofont.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/icomoon.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/fontawesome.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/magnific-popup.min.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/style.css' }],
    ['link', { rel: 'stylesheet', href: '/assets/css/responsive.css' }],
  ],

  // 正文中不再使用 visually-hidden 隐藏大段 SEO 文本（存在 cloaking 风险），
  // 所有结构化实体信息通过 JSON-LD 注入（见上方 head 配置）

  // 按页面动态注入元数据
  transformHead: async (context) => {
    const { pageData } = context
    const heads = []

    // Canonical per page
    heads.push(['link', { rel: 'canonical', href: `${SITE_URL}${pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}` }])

    // OG / Twitter per page
    const fm = pageData.frontmatter || {}
    const pageTitle = fm.title || SITE_TITLE
    const pageDesc = fm.description || SITE_DESCRIPTION
    const pageOgTitle = fm.ogTitle || `${pageTitle} — ${SITE_TITLE_FULL}`
    const pageOgDesc = fm.ogDescription || pageDesc

    heads.push(
      ['meta', { property: 'og:title', content: pageOgTitle }],
      ['meta', { property: 'og:description', content: pageOgDesc }],
      ['meta', { property: 'og:url', content: `${SITE_URL}${pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}` }],
      ['meta', { name: 'twitter:title', content: pageOgTitle }],
      ['meta', { name: 'twitter:description', content: pageOgDesc }],
    )

    // ========== JSON-LD 结构化数据：BreadcrumbList（非首页） ==========
    const relativePath = pageData.relativePath
    const isNotHome = !(relativePath === 'index.md')
    if (isNotHome) {
      const breadcrumbName = fm.breadcrumb || pageTitle
      const pageSlug = relativePath.replace(/\.md$/, '')
      const pageUrl = pageSlug === 'index' ? SITE_URL : `${SITE_URL}/${pageSlug}`
      heads.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: '首页',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: breadcrumbName,
              item: pageUrl,
            },
          ],
        }),
      ])
    }

    return heads
  },

  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '定价', link: '/pricing' },
      { text: '服务', link: '/services' },
      { text: '案例', link: '/projects/' },
      { text: '资讯', link: '/blog/' },
      { text: '联系我们', link: '/contact' },
    ],
    sidebar: {
      '/services/': [
        { text: '服务概览', link: '/services/' },
        { text: 'AI 智能应用', link: '/services/#ai' },
        { text: '数据与云服务', link: '/services/#data' },
        { text: '系统集成与运维', link: '/services/#integration' },
        { text: '技术开发与咨询', link: '/services/#dev' },
        { text: '网络安全与配套', link: '/services/#security' },
      ],
      '/blog/': [
        { text: '全部文章', link: '/blog/' },
      ],
      '/projects/': [
        { text: '全部案例', link: '/projects/' },
        { text: '政企信息化综合管理平台', link: '/projects/gov-platform' },
        { text: 'AI 智能知识库与客服平台', link: '/projects/ai-knowledge-base' },
        { text: '制造企业数据中台建设', link: '/projects/manufacturing-data-platform' },
        { text: '金融科技等保三级合规整改', link: '/projects/fintech-security' },
        { text: '高校智慧校园统一管理平台', link: '/projects/smart-campus' },
      ],
    },
    footer: {
      message: `© ${new Date().getFullYear()} 哈希云图信息科技有限公司 版权所有`,
      copyright: '晋ICP备XXXXXXXX号-1', // TODO: 替换为真实备案号
    },
    // 文档编辑链接（可选）
    editLink: {
      pattern: 'https://github.com/hashcloud/hash-yuntu-web/edit/main/docs/:path',
    },
  },
})
