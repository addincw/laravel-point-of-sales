import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost/lv-pos/public',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default instance
