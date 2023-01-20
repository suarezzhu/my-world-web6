import { createApp,Directive } from 'vue'

import App from './App.vue'
import router from "@/router";
import {store} from '@/store'

import { loadAllPlugins } from './plugins'

import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'

import * as directives from '@/directives'
// import '@/permission'


const app = createApp(App)

debugger
// 加载所有插件
loadAllPlugins(app)
// 自定义指令
Object.keys(directives).forEach(key => {
    app.directive(key, (directives as { [key: string ]: Directive })[key])
})

app.use(router).mount('#app')
