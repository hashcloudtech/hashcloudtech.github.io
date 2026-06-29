<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)
const submitting = ref(false)
const errors = reactive({})

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
})

function validate() {
  Object.keys(errors).forEach(k => delete errors[k])
  let valid = true
  if (!form.name.trim()) { errors.name = '请输入您的姓名'; valid = false }
  if (!form.email.trim()) { errors.email = '请输入您的邮箱'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = '请输入有效的邮箱地址'; valid = false }
  if (form.phone && !/^[\d\-+() ]{7,20}$/.test(form.phone)) { errors.phone = '请输入有效的电话号码'; valid = false }
  if (!form.service) { errors.service = '请选择服务类型'; valid = false }
  if (!form.message.trim()) { errors.message = '请描述您的需求'; valid = false }
  return valid
}

function handleSubmit() {
  if (!validate()) return
  submitting.value = true
  // TODO: 替换为真实 API 调用
  // fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
  }, 1000)
}

function resetForm() {
  submitted.value = false
  Object.assign(form, { name: '', email: '', company: '', phone: '', service: '', message: '' })
  Object.keys(errors).forEach(k => delete errors[k])
}
</script>

<template>
  <div class="contact-form-box">
    <h3 class="form-heading">在线留言</h3>
    <p class="form-subtitle">填写以下表单，我们将尽快与您联系</p>

    <div v-if="submitted" class="success-panel">
      <div class="success-icon">&#10003;</div>
      <h4 class="success-title">提交成功！</h4>
      <p class="success-desc">感谢您的留言，我们将在 1 个工作日内与您联系。</p>
      <button class="btn btn-primary success-btn" @click="resetForm">继续留言</button>
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="form-group">
            <label for="cf-name" class="visually-hidden">您的姓名</label>
            <input id="cf-name" v-model="form.name" type="text" class="form-control" placeholder="您的姓名 *" :class="{ 'is-invalid': errors.name }" />
            <small v-if="errors.name" class="field-error">{{ errors.name }}</small>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="form-group">
            <label for="cf-email" class="visually-hidden">您的邮箱</label>
            <input id="cf-email" v-model="form.email" type="email" class="form-control" placeholder="您的邮箱 *" :class="{ 'is-invalid': errors.email }" />
            <small v-if="errors.email" class="field-error">{{ errors.email }}</small>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="form-group">
            <label for="cf-company" class="visually-hidden">公司名称</label>
            <input id="cf-company" v-model="form.company" type="text" class="form-control" placeholder="公司名称" />
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="form-group">
            <label for="cf-phone" class="visually-hidden">联系电话</label>
            <input id="cf-phone" v-model="form.phone" type="text" class="form-control" placeholder="联系电话" :class="{ 'is-invalid': errors.phone }" />
            <small v-if="errors.phone" class="field-error">{{ errors.phone }}</small>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="form-group">
            <label for="cf-service" class="visually-hidden">服务类型</label>
            <select id="cf-service" v-model="form.service" class="form-control">
              <option value="">请选择服务类型 *</option>
              <option>AI 智能应用</option>
              <option>数据与云服务</option>
              <option>系统集成与运维</option>
              <option>技术开发与咨询</option>
              <option>网络安全与配套</option>
              <option>其他</option>
            </select>
            <small v-if="errors.service" class="field-error">{{ errors.service }}</small>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <div class="form-group">
            <label for="cf-message" class="visually-hidden">需求描述</label>
            <textarea id="cf-message" v-model="form.message" class="form-control" rows="5" placeholder="请简要描述您的需求，以便我们为您准备针对性方案 *" :class="{ 'is-invalid': errors.message }"></textarea>
            <small v-if="errors.message" class="field-error">{{ errors.message }}</small>
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <button type="submit" class="btn btn-primary" :disabled="submitting">
            {{ submitting ? '提交中...' : '提交留言' }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-heading {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}
.form-subtitle {
  color: #888;
  font-size: 14px;
  margin-bottom: 25px;
}

.success-panel {
  text-align: center;
  padding: 60px 20px;
}
.success-icon {
  font-size: 48px;
  color: #28a745;
  margin-bottom: 15px;
}
.success-title {
  font-weight: 700;
  margin-bottom: 10px;
}
.success-desc {
  color: #666;
}
.success-btn {
  margin-top: 20px;
}

.field-error {
  color: #dc3545;
}
</style>
