import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue')
    },
    {
      path: '/mbti',
      name: 'mbti',
      component: () => import('../views/MbtiView.vue')
    },
    {
      path: '/explanation',
      name: 'explanation',
      component: () => import('../views/ExplanationView.vue')
    }
  ]
})

export default router
