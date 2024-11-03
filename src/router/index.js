/*
 * @Description: 
 * @version: v1.0.0
 * @Author: GaoMingze
 * @Date: 2024-11-01 20:16:51
 * @LastEditors: GaoMingze
 * @LastEditTime: 2024-11-02 09:58:44
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'
import MainBox from '@/views/MainBox.vue'

const routes = [
  {
    path: '/',
    name: 'mainbox',
    component: MainBox,
    children: [
        {
        path: '',
        name: 'home',
        component: HomePage
      },
      {
        path: 'recipes',
        name:'recipes',
        component: () => import('@/views/recipes/recipesPage.vue')
      },
      {
        path:'blog',
        name:'blog',
        component: () => import('@/views/blog/blogPage.vue')
      },
      {
        path:'contact',
        name:'contact',
        component: () => import('@/views/contact/contactPage.vue')
        }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
