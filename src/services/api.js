import axios from 'axios'

export default() => {
  var backend = process.env.BACKEND_HOST || 'http://92f2baf8.ngrok.io'
  return axios.create({
    baseURL: backend
  })
}
