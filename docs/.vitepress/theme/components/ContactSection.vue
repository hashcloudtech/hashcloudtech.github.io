<template>
  <div class="contact-form-area">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>联系我们</h6>
            <h2>与我们取得联系</h2>
            <p class="section-subtitle">无论您有技术疑问、项目需求还是合作意向，我们的专业团队都将在第一时间为您提供支持。</p>
          </div>
        </div>
      </div>

      <!-- 联系信息：4个卡片并排 -->
      <div class="row contact-info-row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="contact-info-box">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>公司地址</h3>
            <p>太原市小店区平阳路65号<br/>平阳景苑5号楼19层</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="contact-info-box">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>电子邮箱</h3>
            <p><a href="mailto:hashcloud@foxmail.com" class="inherit-link">hashcloud@foxmail.com</a></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="contact-info-box">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <h3>联系电话</h3>
            <p><a href="tel:18523845416" class="inherit-link">18523845416</a></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="contact-info-box">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>工作时间</h3>
            <p>周一至周五：9:00 - 18:00<br/>周六：10:00 - 16:00</p>
          </div>
        </div>
      </div>

      <!-- 在线留言表单 -->
      <div class="row form-section-row">
        <div class="col-sm-12">
          <div class="section-title">
            <h6>在线留言</h6>
            <h2>期待与您沟通</h2>
          </div>
        </div>
        <div class="col-sm-12">
          <ClientOnly>
            <ContactForm />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-subtitle {
  max-width: 600px;
  margin: 15px auto 0;
  color: #666;
  font-size: 15px;
}

.contact-info-row {
  display: flex;
  flex-wrap: wrap;
}

.form-section-row {
  margin-top: 40px;
}

.inherit-link {
  color: inherit;
}
</style>
