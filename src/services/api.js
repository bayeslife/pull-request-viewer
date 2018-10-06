import axios from 'axios'

export default() => {
  console.log(`Backend:${process.env.BACKEND_HOST}`)
  var backend = process.env.BACKEND_HOST || 'http://localhost:8081'
  return axios.create({
    baseURL: `${backend}`
  })
}
