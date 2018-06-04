<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="">
              <md-table md-card>
      <md-table-row>
        <md-table-head md-numeric>Sequence</md-table-head>
        <md-table-head>Title/Question</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Data Type</md-table-head>
        <md-table-head>Required?</md-table-head>
      </md-table-row>

      <md-table-row :key="t.sequence" v-for="t in tasks" :readonly="t.readonly">

        <md-table-cell md-numeric>{{t.sequence}}</md-table-cell> 

        <md-table-cell>
            <md-field>
      <md-input v-model="t.title"></md-input>
    </md-field>
        </md-table-cell>
            
        <md-table-cell>{{t.content.description}}</md-table-cell>
        
        <md-table-cell>
        <md-field>
          <md-select v-model="t.content.data_type" name="data_type" id="data_type" >
            <md-option value="text">Text</md-option>
            <md-option value="long_text">Long Text</md-option>
            <md-option value="file">file</md-option>
          </md-select>
        </md-field>
        </md-table-cell>
        
        <md-table-cell>
                <md-switch v-model="t.required" class="md-primary"></md-switch>
        </md-table-cell>
      </md-table-row>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button v-on:click="add" type="submit" class="md-primary" :disabled="sending">Add Task</md-button>
          <md-button v-on:click="save" type="submit" class="md-primary" :disabled="sending">Save</md-button>
        </md-card-actions>

    </md-table>

        <div>
  </div>

      <md-snackbar :md-active.sync="taskSaved">Your tasks have been created, add some more?</md-snackbar>
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
      project_id: undefined,
      tasks: [],
      taskSaved: false
    }
  },
    // this.$ac.apis.tasks.get
  created () {
      this.project_id = this.$route.params.id
      this.$ac.apis.Projects.project_tasks({id: this.project_id})
      .then(res => {
          this.tasks = res.body.map(t => {
              t['readonly'] = true
              return t
          })
      }).catch(err => {

      })
  },
  methods: {
    getModel() {
    //   return this.model.types
    },
    save () {
      this.sending = true
      this.$ac.apis.Tasks.create4({ tasks: this.tasks })
        .then(req => {
          localStorage.setItem('user', req['data'])
          console.log(req)
          this.taskSaved = true
          this.sending = false
        })
        .catch((e) => console.error(e))
    },
    add() {
        this.tasks.push({
            project_id: this.project_id,
            sequence: this.tasks.length + 1,
            title: `New Task ${this.tasks.length + 1}`,
            required: true,
            content: {
                data_type: 'long_text',
                description: ''
            }
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
