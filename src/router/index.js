import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/qr',
      name: 'qr',
      component: () => import('../views/QRView.vue')
    },
    {
      path: '/shamirs-secret-sharing',
      name: 'shamirs-secret-sharing',
      component: () => import('../views/ShamirsSecretView.vue')
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: () => import('../views/CryptoView.vue')
    }
  ]
})

export default router
