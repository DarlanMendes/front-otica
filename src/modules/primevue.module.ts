import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { Button, Column, DataTable, IconField, InputIcon, InputText, Menubar } from 'primevue'
export function setPrimeVue(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  app.component('Menubar', Menubar)
  app.component('DataTable', DataTable)
  app.component('Column', Column)
  app.component('Button', Button)
  app.component('InputIcon', InputIcon)
  app.component('IconField', IconField)
  app.component('InputText', InputText)
}
