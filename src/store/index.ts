import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const search = ref('')

  const router = useRouter()
  const submitSearch = () => {
    router.push(`/discover?search=${search.value}`)
  }

  return {
    search,
    submitSearch,
  }
})
