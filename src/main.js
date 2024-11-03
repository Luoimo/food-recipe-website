/*
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-01 20:16:51
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-03 11:23:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock'
import './utils/axiosConfig'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
