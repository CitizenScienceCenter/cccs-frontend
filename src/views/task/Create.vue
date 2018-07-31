<template>
  <div>
  <form novalidate class="md-layout" @submit.prevent="add">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">{{msg}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="title">Title</label>
            <md-input type="text" v-model="task.title" name="title" id="title" :disabled="loading" />
          </md-field>

          <md-field>
            <label for="seq">Sequence</label>
            <md-input type="number" v-model="task.sequence" name="seq" id="seq" :disabled="loading" />
          </md-field>

            <md-field>
              <label>Required?</label>
              <br>
              <md-switch v-model="task.required" class="live-switch md-primary"></md-switch>
            </md-field>


             <md-subheader>Question</md-subheader>

            <md-field>
            <label for="qutxt">{{ $t('views.tasks.form_qutxt') }}</label>
            <md-input type="text" v-model="task.content.question.text" name="qutxt" id="qutxt" :disabled="loading" />
          </md-field>

            <md-field>
              <md-select v-model="task.content.question.type" name="data_type" id="data_type">
                <md-option value="text">{{ $t('views.tasks.form_text') }}</md-option>
                <md-option value="single_file">{{ $t('views.tasks.form_file') }}</md-option>
                <md-option value="multiple_file">{{ $t('views.tasks.form_files') }}</md-option>
              </md-select>
            </md-field>

            <md-field v-if="task.content.question.type.indexOf('file') !== -1">
              <upload :multiple=true :embedded=true></upload>
            </md-field>


            <md-subheader>Answer</md-subheader>

            <md-field>
              <md-select v-model="task.content.answer.type" name="data_type" id="data_type">
                <md-option value="text">Text</md-option>
                <md-option value="single_file">Single File</md-option>
                <md-option value="multiple_file">Multiple Files</md-option>
                <md-option value="multiple_choice">Multiple Choice</md-option>
              </md-select>
            </md-field>

            <task-multiple-choices :choices="task.content.answer.choices" v-if="task.content.answer.type === 'multiple_choice'"></task-multiple-choices>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="loading">Add</md-button>
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
import { mapState, mapGetters } from "vuex";
import TaskMultipleChoices from "@/components/task-multiple-choices.vue";
import Upload from "@/components/upload.vue";
export default {
  name: "CreateTask",
  components: { TaskMultipleChoices, Upload },
  data() {
    return {
      msg: "Add a new task!",
      project_id: this.$route.params.id,
      task: {
        title: "",
        project_id: this.$route.params.id,
        required: true,
        sequence: 0,
        content: {
          question: {
            text: "",
            type: "text"
          },
          answer: {
            type: "text",
            choices: []
          }
        }
      }
    };
  },
  computed: mapState({
    taskSaved: state => state.task.taskSaved,
    loading: state => state.settings.loading
  }),
  created() {},
  methods: {
    add() {
      this.task.sequence = parseInt(this.task.sequence);
      this.$store.dispatch("task/addTasks", [this.task]).then(t => {
        console.log(t)
        this.$router.push({name:'ViewTasks', params: {id: this.project_id}});
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
.live-switch {
  padding-top: 1%;
}
</style>
