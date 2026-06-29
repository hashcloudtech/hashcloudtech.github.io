---
title: 项目案例
breadcrumb: 项目案例
description: 哈希云图精选项目案例展示 — 政企信息化平台、AI知识库、数据中台、等保合规、智慧校园等成功案例。了解我们的技术实力与交付成果。
keywords: 项目案例,政企信息化,AI知识库,数据中台,等保合规,智慧校园,IT项目,成功案例,数字化转型
ogDescription: 哈希云图精选案例：政企信息化平台、AI智能知识库、制造企业数据中台、金融等保三级、高校智慧校园，见证数字化转型成功实践。
---

<script setup>
import { data as projects } from './projects.data'
import ProjectsDetailSection from '../.vitepress/theme/components/ProjectsDetailSection.vue'
import ConsultationCTA from '../.vitepress/theme/components/ConsultationCTA.vue'
</script>

<ProjectsDetailSection :projects="projects" />
<ConsultationCTA />
