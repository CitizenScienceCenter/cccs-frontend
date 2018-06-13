<template>
  <div>
  <form novalidate class="md-layout" @submit.prevent="create">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">{{msg}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="name">Name</label>
            <md-input type="text" v-model="task.name" name="name" id="name" :disabled="sending" />
          </md-field>

          <md-field>
            <label for="platform">Sequence</label>
            <md-input type="text" v-model="task.sequence" name="name" id="name" :disabled="sending" />
          </md-field>

            <md-field>
              <label>Content</label>
              <md-textarea type="text" v-model="task.content" md-autogrow></md-textarea>
            </md-field>

            <md-field>
              <label>Required?</label>
              <br>
              <md-switch v-model="task.required" class="live-switch md-primary">Live?</md-switch>
            </md-field>

          
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="taskSaved">Your project has been created, add some tasks!</md-snackbar>
    </form>
  </div>
</template>

<script>
  export default {
    name: "CreateTask",
    data() {
      return {
        msg: "Create a new task!",
        sending: false,
        project_id: this.$route.params.id,
        task: {
            name: '',
            required: false,
            sequence: 0,
            content: {}
        },
        taskSaved: false
      };
    },
    created() {
      this.loadTasks()
    },
    methods: {
      
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
            tasks: [this.task]
          })
          .then(res => {
            console.log(res)
            // TODO redirect to project task page
          })
          .catch(e => console.error(e))
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
