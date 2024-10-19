import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import '@/styles/index.scss' // 全局CSS

const app = createApp(App)

// 注册插件
app.use(router)
app.use(ElementPlus)
app.use(store)
// 挂载
app.mount('#app')
