---
title: 首页
description: 哈希云图信息科技有限公司 — AI智能应用与IT解决方案服务商，专注人工智能、数据云服务、系统集成运维、技术开发咨询、网络安全配套。立足太原，服务全国。
keywords: 哈希云图,AI应用,IT解决方案,人工智能,数据云服务,系统集成,网络安全
ogDescription: 哈希云图信息科技有限公司 — 专业的AI智能应用与IT解决方案服务商。提供大模型部署、智能客服、数据中台、等保合规等一站式企业数字化服务。
---

<script setup>
import { data as posts } from './blog/posts.data'
import { data as projects } from './projects/projects.data'
import HeroSlider from './.vitepress/theme/components/HeroSlider.vue'
import ServicesSection from './.vitepress/theme/components/ServicesSection.vue'
import AboutSection from './.vitepress/theme/components/AboutSection.vue'
import WhyChooseSection from './.vitepress/theme/components/WhyChooseSection.vue'
import ProjectsSection from './.vitepress/theme/components/ProjectsSection.vue'
import TeamSection from './.vitepress/theme/components/TeamSection.vue'
import TestimonialsSection from './.vitepress/theme/components/TestimonialsSection.vue'
import BlogSection from './.vitepress/theme/components/BlogSection.vue'
import ConsultationCTA from './.vitepress/theme/components/ConsultationCTA.vue'
import PartnerSection from './.vitepress/theme/components/PartnerSection.vue'
</script>

<HeroSlider />
<ServicesSection />
<AboutSection />
<WhyChooseSection />
<ProjectsSection :projects="projects" />
<TeamSection />
<TestimonialsSection />
<BlogSection :posts="posts" />
<ConsultationCTA />
<PartnerSection />
