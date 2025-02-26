import axios, { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'

import { env } from '~/env.mjs'

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL
})

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (typeof window !== 'undefined') {
      const message = String(error.response ? error.response.data : error.message)

      toast.error(message)
    }

    return Promise.reject(error)
  }
)
