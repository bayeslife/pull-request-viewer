<template>
  <div >
    <h1>Pull Requests</h1>

    <b-table :items="pullrequests" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
    <template slot="project" slot-scope="data">
      <a :href="`${data.item.url}`" >{{data.item.repository}} </a>
    </template>
    <template slot="show_details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
      </b-button>
    </template>

    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Repository:</b></b-col>
          <b-col>{{ row.item.repository }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Url:</b></b-col>
          <b-col><a :href="`${row.item.url}`">{{ row.item.url }}</a></b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>State:</b></b-col>
          <b-col>{{ row.item.state }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Number:</b></b-col>
          <b-col>{{ row.item.number }}</b-col>
        </b-row>
      </b-card>
    </template>
  </b-table>
  </div>
</template>

<script>
import dataservice from '@/services/DataService'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      pullrequests: [],
      sortBy: 'startdate',
      sortDesc: true,
      fields: [ 'repository', 'title', 'sender', 'when', 'show_details' ]
    }
  },
  created () {
    this.getPullRequests()
  },
  methods: {
    getPullRequests: async function () {
      var r = await dataservice.pullrequests()
      var table = r.map((tr) => {

        var pr = tr.pull_request || {
          created_at: new Date(),
          url: "...",
          name: "name",
          number: "-",
          state: "open",
          title: "-"
        }

        return {
          _rowVariant: pr.state==='open' ? 'success' : 'danger',
          date: pr.created_at,
          url: pr.url,
          repository: tr.repository ? tr.repository.name : 'name',
          number: pr.number,
          state: pr.state,
          title: pr.title,
          sender: tr.sender ? tr.sender.login : 'user',
          when: moment(pr.created_at).fromNow()
        }
      })
      this.pullrequests = table
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
