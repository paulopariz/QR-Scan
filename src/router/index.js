import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerateQrView from '../views/GenerateQrView.vue'
import HistoryView from '../views/HistoryView.vue'
import ConfigsView from '../views/ConfigsView.vue'

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
   ,
   {
     path: '/configs',
     name: 'configs',
     component: ConfigsView
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
