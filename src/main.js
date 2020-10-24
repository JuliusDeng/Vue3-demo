import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
// 等价于下面这个
// const vue = createApp(App)
// vue.use(router).use(store).mount('#app')

