import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerateQrView from '../views/GenerateQrView.vue'
import SettingsView from '../views/SettingsView.vue'

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
     path: '/settings',
     name: 'settings',
     component: SettingsView

   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
