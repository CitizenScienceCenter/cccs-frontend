<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">Add some tasks</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
              <md-table>
      <md-table-row>
        <md-table-head md-numeric>Sequence</md-table-head>
        <md-table-head>Title/Question</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Data Type</md-table-head>
      </md-table-row>

      <md-table-row :key="t.sequence" v-for="t in tasks">
        <md-table-cell md-numeric>{{t.sequence}}</md-table-cell>
        <md-table-cell>{{t.title}}n</md-table-cell>
        <md-table-cell>{{t.desc}}</md-table-cell>
        <md-table-cell>{{t.data_type}}</md-table-cell>
      </md-table-row>
    </md-table>

          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button v-on:click="add" type="submit" class="md-primary" :disabled="sending">Add Task</md-button>
          <md-button v-on:click="save" type="submit" class="md-primary" :disabled="sending">Save</md-button>
        </md-card-actions>
      </md-card>

        <div>
  </div>

      <md-snackbar :md-active.sync="projectSaved">Your task has been created, add some more?</md-snackbar>
    </form>
  </div>
</template>

<script>

export default {
  name: 'CreateTask',
  data () {
    return {
      msg: 'Please create a task for this project',
      sending: false,
      project: {
        name:'',
        description:'',
        platform:'Desktop',
        owned_by: ''
      },
      tasks: [],
      model: {
        types: [
          'Desktop',
          'Mobile',
          'Both'
        ]
      },
      projectSaved: false
    }
  },
    // this.$ac.apis.tasks.get
  created () {
      this.$ac.apis.Projects.project_tasks({id: this.$route.params.id || undefined})
      .then(res => {
          this.tasks = res.body
      }).catch(err => {

      })
  },
  methods: {
    getModel() {
      return this.model.types
    },
    save () {
      console.log(this.project)
      this.$ac.apis.Projects.create2({ project: this.project })
        .then(req => {
          localStorage.setItem('user', req['data'])
          console.log(req)
        })
        .catch((e) => console.error(e))
    },
    add() {
        this.tasks.push({
            sequence: this.tasks.length + 1,
            title: '',
            desc: '',
            data_type: ''
        })
    },
    delete(id) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
