<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function handleSubmit() {
  if (email.value) {
    // TODO: 替换为真实邮件订阅 API
    submitted.value = true
    setTimeout(() => { submitted.value = false; email.value = '' }, 3000)
  }
}
</script>

<template>
  <section class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 footer-box-item">
          <div class="footer-about footer-list">
            <a class="footer-logo" href="/" aria-label="哈希云图首页">
              <img src="/assets/img/logo.png" class="white-logo" alt="哈希云图信息科技有限公司" />
            </a>
            <p>哈希云图信息科技有限公司，专注人工智能、大数据、云计算、系统集成与网络安全领域，为政企客户提供一站式智能化解决方案。</p>
            <ul class="footer-social-icon">
              <li><button class="footer-social-btn" aria-label="微博"><i class="fab fa-weibo"></i></button></li>
              <li><button class="footer-social-btn" aria-label="微信"><i class="fab fa-weixin"></i></button></li>
              <li><button class="footer-social-btn" aria-label="QQ"><i class="fab fa-qq"></i></button></li>
              <li><button class="footer-social-btn" aria-label="YouTube"><i class="fab fa-youtube"></i></button></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 footer-box-item">
          <div class="footer-list">
            <h5 class="title">公司</h5>
            <ul class="footer-nav-links">
              <li><a href="/about">关于我们</a></li>
              <li><a href="/projects">项目案例</a></li>
              <li><a href="/services">IT解决方案</a></li>
              <li><a href="/services">数字解决方案</a></li>
              <li><a href="/contact">联系我们</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 footer-box-item">
          <div class="footer-list">
            <h5 class="title">服务</h5>
            <ul class="footer-nav-links">
              <li><a href="/services#ai">AI 智能应用</a></li>
              <li><a href="/services#data">数据与云服务</a></li>
              <li><a href="/services#integration">系统集成运维</a></li>
              <li><a href="/services#dev">技术开发咨询</a></li>
              <li><a href="/services#security">网络安全配套</a></li>
              <li><a href="/projects">项目案例</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 footer-box-item">
          <div class="footer-list">
            <h5 class="title">联系信息</h5>
            <div class="footer-contact-info">
              <ul class="footer-contact-list">
                <li><span>地址:</span> 太原市小店区平阳路65号平阳景苑5号楼19层</li>
                <li><span>电话:</span> <a href="tel:18523845416" aria-label="联系电话">18523845416</a></li>
                <li><span>邮箱:</span> <a href="mailto:hashcloud@foxmail.com" aria-label="发送邮件">hashcloud@foxmail.com</a></li>
              </ul>
              <div class="footer-info-newsletter">
                <form class="newsletter-form" @submit.prevent="handleSubmit">
                  <input
                    v-model="email"
                    type="email"
                    class="input-newsletter"
                    :placeholder="submitted ? '已提交!' : '填写你的邮箱'"
                    required
                    autocomplete="off"
                  />
                  <button class="btn btn-primary" type="submit">{{ submitted ? '✓' : '提交' }}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="copyright-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <p>&copy; {{ new Date().getFullYear() }} 哈希云图信息科技有限公司 版权所有</p>
        </div>
        <div class="col-lg-6 col-md-6">
          <ul>
            <li><button class="footer-link-btn" aria-label="查看条款和条件">条款 & 条件</button></li>
            <li><button class="footer-link-btn" aria-label="查看隐私策略">隐私策略</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
