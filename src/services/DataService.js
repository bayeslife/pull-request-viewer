import api from '@/services/api'

export default {

  async pullrequests () {
    var response = await api().get('/PullRequests')
    // console.log(response)
    return response.data
  }
}
