import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/model/user.model'

export const useAuthStore = defineStore('user-auth', () => {
  const user: Ref<Partial<User>> = ref({})
  const token = computed(() => user.value.token)
  function tokenIsExperied() {
    return token
  }

  return { token, tokenIsExperied }
})
