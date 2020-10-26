import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// 全局注册自定义图标组件
import myIcon from '@/components/common/my-icon.vue'



// createApp(App).use(router).use(store).mount('#app')
// console.log('createApp:',createApp);
// 等价于下面这个
const vue = createApp(App)
console.log('vue:',vue);
vue.use(router).use(store).mount('#app')
// 这里必须先取出"vue"--const vue = createApp(App)
vue.component('my-icon', myIcon)  