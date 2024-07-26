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
      path: '/qr-advanced',
      name: 'qr-advanced',
      component: () => import('../views/QRAdvancedView.vue')
    },
    {
      path: '/qr-simple',
      name: 'qr-simple',
      component: () => import('../views/QRSimpleView.vue')
    },
    {
      path: '/shamirs-secret',
      name: 'shamirs-secret',
      component: () => import('../views/ShamirsSecretView.vue')
    },
    {
      path: '/ethereum-wallet',
      name: 'ethereum-wallet',
      component: () => import('../views/EthereumWalletView.vue')
    }
  ]
})

export default router
