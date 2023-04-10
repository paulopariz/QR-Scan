import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import 'animate.css';

import VueQRCodeComponent from 'vue-qrcode-component'

const app = createApp(App)
app.use(router)
app.component('qr-code', VueQRCodeComponent)
app.mount('#app')
