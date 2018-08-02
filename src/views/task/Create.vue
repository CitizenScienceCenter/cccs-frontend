<template>
  <div>
  <form novalidate class="md-layout" @submit.prevent="save">
    <md-card class="md-layout-item md-size-100 md-small-size-100">
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
            </div>
        </md-card-content>
      </md-card>

      <md-card v-for="(answer, i) in task.content.answers" v-bind:key="i">
        <md-card-content>
          <md-subheader>Answer</md-subheader>

            <md-field>
              <md-select v-model="answer.type" name="data_type" id="data_type">
                <md-option value="text">Text</md-option>
                <md-option value="single_file">Single File</md-option>
                <md-option value="multiple_file">Multiple Files</md-option>
                <md-option value="multiple_choice">Multiple Choice</md-option>
              </md-select>
            </md-field>

            <task-multiple-choices :choices="answer.choices" v-if="answer.type === 'multiple_choice'"></task-multiple-choices>
        </md-card-content>

        <md-card-actions>
          <md-button v-if="i!==0" v-on:click="removeAnswer(i)" class="md-primary" :disabled="loading">Remove</md-button>
          <md-button  v-on:click="addAnswer" class="md-primary" :disabled="loading">Add</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="taskSaved" :md-duration="8000">
        <span>Your task has been created</span>
        <md-button class="md-primary" :to="{name:'CreateTask', params: {id: project_id}}">Add Another?</md-button>
        <md-button class="md-primary" :to="{ path: $store.state.route.from.fullPath }">Back</md-button>
      </md-snackbar>
           <md-card-actions>
            <md-button  type="submit" class="md-primary" :disabled="loading">Save</md-button>
        </md-card-actions> 
    </md-card> 
  </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TaskMultipleChoices from '@/components/task-multiple-choices.vue'
import Upload from '@/components/upload.vue'
export default {
  name: 'CreateTask',
  components: { TaskMultipleChoices, Upload },
  data () {
    return {
      msg: 'Add a new task!',
      project_id: this.$route.params.id,
      task: {
        title: '',
        project_id: this.$route.params.id,
        required: true,
        sequence: 0,
        content: {
          question: {
            text: '',
            type: 'text'
          },
          answers: [{
            type: 'text',
            choices: []
          }]
        }
      }
    }
  },
  computed: mapState({
    taskSaved: state => state.task.taskSaved,
    loading: state => state.settings.loading
  }),
  created () {},
  methods: {
    addAnswer () {
      this.task.content.answers.push({
        type: 'text',
        choices: []
      })
    },
    removeAnswer(i) {
      this.task.content.answers.splice(i, 1);
    },
    save () {
      this.task.sequence = parseInt(this.task.sequence)
      this.$store.dispatch('task/addTasks', [this.task]).then(t => {
        console.log(t)
        this.$router.push({name: 'ViewTasks', params: {id: this.project_id}})
      })
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

.active {
  opacity: 0.8;
  pointer-events: none;
}
.live-switch {
  padding-top: 1%;
}
</style>
