import axios from 'axios'
import storage from './storage.js'

let token = storage.get('token')

const httpFactory = axios.create({
  baseURL: 'http://localhost/api'
})

const httpClient = {
  get(endpoint) {
    return httpFactory.get(endpoint)
  },
  post(endpoint, data) {
    return httpFactory.post(endpoint, data)
  },
  setAuthToken(token) {
    httpFactory.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  setInterceptor() {
    httpFactory.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error.response.status == 401) {
          storage.remove('auth')
          location.href = '/auth/login'
          return
        }
        return Promise.reject(error)
      }
    )
  }
}

export default httpClient
