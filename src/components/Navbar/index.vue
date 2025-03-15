<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item }">
        <div class="p-2 flex flex-row gap-2 items-center justify-center">
          <RouterLink
            :to="{ name: item.name }"
            class="no-underline pt-1"
            active-class="text-amber-500"
          >
            <i :class="item.icon"></i>
            {{ item.label }}
          </RouterLink>
        </div>
      </template>
    </Menubar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const items = ref([
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    name: 'Home',
  },
  {
    label: 'Clientes',
    icon: 'pi pi-users',
    name: 'Clients',
  },
])
</script>
