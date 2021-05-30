import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lang from "./lang/index"
import "./assets/style/reset.less"


window.lang = lang

const app = createApp(App)
//定义全局变量
app.config.globalProperties.lang = lang

app.use(store)
app.use(router)

app.mount('#app')
