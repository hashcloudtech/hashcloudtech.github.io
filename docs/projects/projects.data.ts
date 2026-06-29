import { createContentLoader } from 'vitepress'

// 案例展示顺序（与侧边栏保持一致）
const ORDER: Record<string, number> = {
  'gov-platform': 1,
  'ai-knowledge-base': 2,
  'manufacturing-data-platform': 3,
  'fintech-security': 4,
  'smart-campus': 5,
}

export default createContentLoader('projects/*.md', {
  includeSrc: false,
  excerpt: true,
  transform(raw) {
    return raw
      .filter(page => page.url !== '/projects/')
      .map(page => {
        const slug = page.url.replace('/projects/', '')
        return {
          title: page.frontmatter.title,
          description: page.frontmatter.description || page.excerpt,
          cover: page.frontmatter.cover,
          tech: page.frontmatter.tech || '',
          service: page.frontmatter.service || '',
          url: page.url,
          order: ORDER[slug] ?? 99,
        }
      })
      .sort((a, b) => a.order - b.order)
  }
})
