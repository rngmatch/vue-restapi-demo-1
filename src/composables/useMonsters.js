import { ref } from 'vue'
import useApi from '@/composables/useApi'

const monsters = ref([])
const currentMonster = ref(null)
const firstLoad = ref(true)

const api = useApi()
//const page = ref(1)

const useMonsters = () => {
  /*  
  const fetchMonsters = async () => {
    const { data } = await api.instance.get('/', {
      params: {
        page: page.value,
      },
    })
    monsters.value.push(...data.data)
    page.value++
  }
*/
  const fetchMonster = async (id) => {
    const { data } = await api.instance.get(`/${id}`)
    currentMonster.value = data
  }

  return {
    monsters,
    //fetchMonsters,
    fetchMonster,
    currentMonster,
    firstLoad,
  }
}

export default useMonsters
