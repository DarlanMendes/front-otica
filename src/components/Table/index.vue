<template>
  <main class="py-8 px-4 w-[95vw] max-w-[1800px] flex flex-col">
    <DataTable :value="props.content">
      <template #header>
        <div class="flex justify-between">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Limpar "
            outlined
            @click="clearFilter()"
          />
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global']" placeholder="Buscar" />
          </IconField>
        </div>
      </template>
      <Column
        :field="header?.field"
        :header="header?.label"
        :style="{ minWidth: header?.width }"
        v-for="(header, index) in headers"
      >
        <template #body="data" v-if="header.field === 'action'">
          <div>
            <Button :label="'Visualizar'" @click.prevent="goToClientView(index)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </main>
</template>
<script lang="ts" setup>
import type { ColumnHeader } from '@/model/components.model'
import { ref, type PropType } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  content: {
    type: Array as PropType<Array<Record<string, string>>>,
    default: [],
  },
  headers: {
    type: Array as PropType<Array<ColumnHeader>>,
  },
})
const filters = ref({ global: '' })
function clearFilter() {}
function goToClientView(index: number) {
  if (!props.content[index]?.id) return
  router.push({ name: 'clientDetail', params: { id: props.content[index].id } })
}
</script>
