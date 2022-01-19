import { createRouter, createWebHistory } from 'vue-router'
import Quotes from '../views/Quotes.vue'
import MisaLand from '../views/MisaLand.vue'
import Gayms from '../views/Gayms.vue'
import Utils from '../views/Utils.vue'
import Staff from '../views/Mod.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MisaLand
  },

  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes,
  },

  {
    path: '/gayms',
    name: "Gayms",
    component: Gayms
  },
  {
    path: '/utils',
    name: "Utils",
    component: Utils
  },
  {
    path: '/staff/applications',
    name: 'Staff',
    component: Staff
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
