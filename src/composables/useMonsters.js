import { ref } from 'vue'
import useApi from '@/composables/useApi'

const monsters = ref([])
const currentMonster = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const useMonsters = () => {
  const fetchMonsters = async () => {
    const { data } = await api.instance.get('/', {
      params: {
        page: page.value,
      },
    })
    if (firstLoad.value) {
      monsters.value = data.data
      firstLoad.value = false
    } else {
      monsters.value.push(...data.data)
    }
    page.value++
  }

  const fetchMonster = async (id) => {
    const { data } = await api.instance.get(`/${id}`)
    currentMonster.value = data
  }

  const clearMonsters = () => {
    monsters.value = []
    page.value = 1
    firstLoad.value = true
  }

  const loadNextPage = async () => {
    await fetchMonsters()
  }

  return {
    monsters,
    fetchMonsters,
    fetchMonster,
    currentMonster,
    firstLoad,
    clearMonsters,
    loadNextPage,
  }
}

export default useMonsters
