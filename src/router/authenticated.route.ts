import Home from '@/views/Home/index.vue'
import Clients from '@/views/Clients/index.vue'
export const authenticatedRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients,
  },
]
