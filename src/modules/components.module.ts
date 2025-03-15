import Navbar from '@/components/Navbar/index.vue'
import Table from '@/components/Table/index.vue'
import type { App } from 'vue'
export function setComponents(app: App) {
  app.component('Navbar', Navbar)
  app.component('Table', Table)
}
