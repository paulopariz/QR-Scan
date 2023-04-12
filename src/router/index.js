import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerateQrView from '../views/GenerateQrView.vue'
import HistoryView from '../views/HistoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/generate-qr',
    name: 'generate-qr',
    component: GenerateQrView

  },
   {
     path: '/history',
     name: 'history',
     component: HistoryView

   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
