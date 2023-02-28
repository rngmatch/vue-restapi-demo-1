import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
  baseURL: 'https://api.disneyapi.dev/',
})

const page = ref(1)

const useApi = () => {
  const getCharaters = async () => {
    const { data } = await instance.get('/charaters', {
      params: {
        page: page.value,
      },
    })
    page.value++
    return data
  }

  return { getCharaters }
}

export default useApi
