import { createRouter, createWebHistory } from 'vue-router'
import { authenticatedRoutes } from './authenticated.route'

const router = createRouter({
  history: createWebHistory(),
  routes: [...authenticatedRoutes],
})

export default router
