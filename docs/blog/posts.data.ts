import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  includeSrc: false,
  excerpt: true,
  transform(raw) {
    return raw
      .filter(page => page.url !== '/blog/')
      .map(page => ({
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        tag: page.frontmatter.tag || '资讯',
        description: page.frontmatter.description || page.excerpt,
        cover: page.frontmatter.cover,
        url: page.url,
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
})
