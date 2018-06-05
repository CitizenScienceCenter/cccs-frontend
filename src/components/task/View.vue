<template>
  <div>
    <md-table v-model="tasks" md-card @md-selected="onSelect">
      <md-table-toolbar>
        <h1 class="md-title">Tasks for Project</h1>
      </md-table-toolbar>
      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ `${count} Tasks Selected` }}c</div>
  
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" v-on:click="del">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Sequence" md-sort-by="sequence">{{ item.sequence }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Data Type" md-sort-by="data_type">
          <md-field>
            <md-select v-model="item.content.data_type" name="data_type" id="data_type">
              <md-option value="text">Text</md-option>
              <md-option value="long_text">Long Text</md-option>
              <md-option value="file">file</md-option>
            </md-select>
          </md-field>
        </md-table-cell>
        <md-table-cell md-label="Required">
          <md-switch v-model="item.required" class="md-primary"></md-switch>
        </md-table-cell>
      </md-table-row>
    </md-table>
  
    <md-progress-bar md-mode="indeterminate" v-if="sending" />
  
    <md-card-actions md-right>
      <md-button v-on:click="add" type="submit" class="md-primary" :disabled="sending">Add Task</md-button>
      <md-button v-on:click="save" type="submit" class="md-primary" :disabled="sending">Save</md-button>
    </md-card-actions>
    <md-snackbar :md-active.sync="taskSaved">Your tasks have been created, add some more?</md-snackbar>
  
  </div>
</template>

<script>
  export default {
    name: "ViewTasks",
    data() {
      return {
        msg: "Please create a task for this project",
        sending: false,
        project_id: undefined,
        selected: [],
        tasks: [],
        taskSaved: false
      };
    },
    // this.$ac.apis.tasks.get
    created() {
      this.project_id = this.$route.params.id
      this.loadTasks()
    },
    methods: {
      loadTasks() {
        this.$ac.apis.Projects.project_tasks({
            id: this.project_id
          })
          .then(res => {
            this.selected = []
            this.tasks = res.body.map(t => {
              t["readonly"] = true
              return t
            })
          })
          .catch(err => {
            console.error(e)
          })
      },
      del() {
        const sel = this.selected
        console.log(sel)
        this.$ac.apis.Tasks.delete3({
            tasks: sel
          })
          .then(res => {
            console.log(res.body)
            this.loadTasks()
          }).catch(e => console.error(e))
      },
      onSelect(selected) {
        console.log(selected)
        this.selected = selected.map(s => {
          return s.id
        })
      },
      save() {
        this.sending = true
        const newTasks = this.tasks.reduce((result, t) => {
          if (!t["readonly"]) result.push(t)
          return result
        }, []);
        console.log(newTasks)
        this.$ac.apis.Tasks.create4({
            tasks: newTasks
          })
          .then(res => {
            this.taskSaved = true
            this.sending = false
            this.tasks = res.body.map(t => {
              t["readonly"] = true
              return t
            })
          })
          .catch(e => console.error(e))
      },
      add() {
        this.tasks.push({
            project_id: this.project_id,
            sequence: this.tasks.length + 1,
            title: `New Task ${this.tasks.length + 1}`,
            required: true,
            content: {
              data_type: "long_text",
              description: ""
            }
          })
        }
    }
  };
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
  
  .active {
    opacity: 0.8;
    pointer-events: none;
  }
</style>
