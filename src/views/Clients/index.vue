<template>
  <main>
    <Table :content="clients" :headers="headers" />
  </main>
</template>
<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'

import type { Client } from '@/model/client.model'
import moment from 'moment'
import 'moment/dist/locale/pt-br'
import { getAllClients } from './client.service'
import { clientsList } from './client.util'

const clients: Ref<Array<Client>> = ref([])
const headers = [
  { label: 'Nome', field: 'name', width: '10rem' },
  { label: 'Aniversário', field: 'birthDate', width: '10rem' },
  { label: 'CPF', field: 'cpf', width: '4rem' },
  { label: 'Ações', field: 'action', width: '4rem' },
]
async function formatClient() {
  moment.locale('pt-br')
  getAllClients().then((clientsList) => {
    clients.value = clientsList.map((client: any) => ({
      ...client,
      birthDate: moment(new Date(client.birthDate)).format('LL'),
    }))
  })
}
onMounted(() => {
  formatClient()
})
</script>
