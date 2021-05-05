import axios from 'axios'

// Create an axios instance
const request = axios.create({
  baseURL: 'https://www.theaudiodb.com/api/v1/json/1',
  timeout: 5000 // Request timeout
})

// Request interceptor
request.interceptors.request.use(
  (config) => {
    config.params = config.params || {}
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// Response interceptor
request.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    // Global api response error handling here...
    console.log(error)
    return Promise.reject(error)
  }
)

export { request }
