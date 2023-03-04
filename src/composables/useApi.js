import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mhw-db.com/monsters',
})

const useApi = () => {
  return { instance }
}

export default useApi
