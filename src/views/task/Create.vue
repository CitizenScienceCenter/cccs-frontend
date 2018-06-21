<template>
  <div>
  <form novalidate class="md-layout" @submit.prevent="add">
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
              <label>Required?</label>
              <br>
              <md-switch v-model="task.required" class="live-switch md-primary"></md-switch>
            </md-field>


             <md-subheader>Question</md-subheader>

            <md-field>
            <label for="qutxt">Question Text</label>
            <md-input type="text" v-model="task.content.question.text" name="qutxt" id="qutxt" :disabled="sending" />
          </md-field>

            <md-field>
              <md-select v-model="task.content.question.type" name="data_type" id="data_type">
                <md-option value="text">Text</md-option>
                <md-option value="file">File</md-option>
              </md-select>
            </md-field>

            <md-subheader>Answer</md-subheader>

            <md-field>
              <md-select v-model="task.content.answer.type" name="data_type" id="data_type">
                <md-option value="text">Text</md-option>
                <md-option value="file">File</md-option>
                <md-option value="multiple_choice">Multiple Choice</md-option>
              </md-select>
            </md-field>

            <task-multiple-choices :choices="task.content.answer.choices" v-if="task.content.answer.type === 'multiple_choice'"></task-multiple-choices>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Add</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="taskSaved" :md-duration="8000">
        <span>Your task has been created</span>
        <md-button class="md-primary" :to="{name:'CreateTask', params: {id: project_id}}">Add Another?</md-button>
        <md-button class="md-primary" :to="{ path: $store.state.route.from.fullPath }">Back</md-button>
      </md-snackbar>
    </form>
  </div>
</template>

<script>
import TaskMultipleChoices from '@/components/task-multiple-choices.vue'
export default {
  name: "CreateTask",
  components: {TaskMultipleChoices, TaskMultipleChoices},
  data() {
    return {
      msg: "Add a new task!",
      sending: false,
      project_id: this.$route.params.id,
      task: {
        name: "",
        project_id: this.$route.params.id,
        required: true,
        sequence: 0,
        content: {
          question: {
            text: '',
            type: ''
          },
          answer: {
            type: '',
            choices: []
          }
        }
      },
      taskSaved: false
    };
  },
  created() {
  },
  methods: {
    add() {
      this.$store.dispatch('task/addTasks', [this.task])
      .then()
    },
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
.live-switch {
  padding-top: 1%;
}
</style>
