import api from '@/services/api'

export default {

  async pullrequests (count = 10) {
    var response = await api().get(`/PullRequests?count=${count}`)
    // console.log(response)
    return response.data
  }
}
