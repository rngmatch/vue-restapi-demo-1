import { ref } from 'vue'
import axios from 'axios'
import useApi from '@/composables/useApi'

const monsters = ref([])
const currentMonster = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const fetchMonsters = async () => {
  try {
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
  } catch (error) {
    console.error(error)
  }
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

export const useMonsters = () => {
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
export default {
  monsters,
  fetchMonsters,
  currentMonster,
  fetchMonster,
  clearMonsters,
  loadNextPage,
}
