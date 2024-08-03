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
      path: '/ethereum-wallet',
      name: 'ethereum-wallet',
      component: () => import('../views/EthereumWalletView.vue')
    }
  ]
})

export default router
