import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../resources/views/HomeView.vue'
import NotFound from '@/resources/views/NotFound.vue'
import auth from './auth.js'
import admin from './admin.js'
import config from './core/config/config.js'
import logs from './core/logs/index.js'
import maintenance from './core/maintenance/index.js'
import tickets from './core/tickets/index.js'
import websites from './core/config/websites.js'
import academicevel from './core/config/academiclevels.js'
import links from './core/links/links.js'
import StickyNotes from './core/stickyNotes/stickyNotes.js'
import payments from './core/payments/payments.js'
import announcements from './core/announcements/announcements.js'
import orders from './core/orders/orders.js'
import user from './core/user/user.js'
import guides from './core/guides/guide.js'

let routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
routes = routes.concat(auth, admin, config,logs, maintenance, websites, academicevel,tickets, links, StickyNotes, payments, announcements, orders, user, guides)
routes = routes.concat([
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      layout: 'profile'
    }
  }
])
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
