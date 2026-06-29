import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ContactForm from './components/ContactForm.vue'
import ContactSection from './components/ContactSection.vue'

// VitePress overrides (Vite-processed)
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ContactForm', ContactForm)
    app.component('ContactSection', ContactSection)
  }
}
