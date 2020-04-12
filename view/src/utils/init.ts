import axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-cn'

const isDev = process.env.NODE_ENV === 'development'
let baseURL = '/api'

if (isDev) {
  baseURL = `http://localhost:3001${baseURL}`
}

moment.locale('zh-cn')

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 2500

// axios.interceptors.request.use()

axios.interceptors.response.use(response => {
  return response.data
})
