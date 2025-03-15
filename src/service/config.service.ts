import { useAuthStore } from '@/stores/user.store'
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

class SetupAxios {
  private static configAxios(baseURL: string) {
    return { baseURL }
  }
  private static initAxios(config: AxiosRequestConfig): AxiosInstance {
    const instance = axios.create(config)
    instance.interceptors.request.use(
      (req: any) => {
        const auth = useAuthStore()
        if (auth.token) {
          return req.headers.set('Authorization', auth.token)
        }
        return req
      },
      (error) => Promise.reject(error),
    )
    instance.interceptors.response.use(
      (res: any) => res,
      (error) => error,
    )
    return instance
  }
  static api(baseURL: string = '/api'): AxiosInstance {
    return SetupAxios.initAxios(this.configAxios(baseURL))
  }
}
export const api = SetupAxios.api()
