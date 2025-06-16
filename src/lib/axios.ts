import axios from 'axios'
import { normalizeError } from '../utils/normalizeError' 

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedMessage = normalizeError(error)

    console.error('[Axios Error]', {
      url: error.config?.url,
      method: error.config?.method,
      message: normalizedMessage,
      status: error?.response?.status,
      data: error?.response?.data,
    })


    return Promise.reject(error) 
  }
)

export default api
