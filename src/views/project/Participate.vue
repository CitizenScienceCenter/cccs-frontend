<template>
  <div>
    <md-card class="md-layout-item md-size-45" v-if="project">
      <md-card-header>
        <span class="md-title">{{project.name}}</span>
        <span class="md-subhead">{{project.description}}</span>
      </md-card-header>
    </md-card>
    <md-card class="md-layout-item md-size-45" v-if="tasks">
      <md-card-header>
        <span class="md-title">This project has </span>
        <span class="md-subhead">{{tasks.length}} Tasks</span>
      </md-card-header>
    </md-card>
    <md-progress-bar md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></md-progress-bar>
    <task-submission :task=activeTask :content=content></task-submission>
    <md-button v-on:click="takePart" class="md-primary md-raised" v-if="tasks.length > 0">{{btnText}}</md-button>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import TaskSubmission from '@/components/task-submission.vue'
  export default {
    name: 'Participate',
    data() {
      return {
        project: undefined,
        userID: undefined,
        content: undefined,
        activeTaskIndex: undefined,
        activeTask: undefined,
        btnText: 'Let\'s Go'
      }
    },
    components: {TaskSubmission: TaskSubmission},
    computed: mapState({
      tasks: state => state.task.tasks,
      loading: state => state.task.loading
    }),
    mounted() {
      console.log(this.$route.params.id)
      const id = this.$route.params.id
      this.$store.dispatch('project/getProject', id)
      this.$store.dispatch('task/projectTasks', id)
      this.activeTaskIndex = 0
    },
    methods: {
      takePart() {
        if (this.activeTaskIndex !== this.tasks.length -1) {
          this.activeTask = this.tasks[this.activeTaskIndex]
          const submission = {
            user_id: this.$store.getters['user/id'],
            task_id: this.activeTask.id,
            content: {}
          }
          this.$store.commit('submission/SET_SUBMISSION', submission)
          console.log(this.content)
          this.activeTaskIndex += 1
          this.btnText = 'Next'
        } else {
          console.log('FINISHED')
          this.btnText = 'Finished'
          this.activeTaskIndex = 100
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
  .banner {
    height: 10%
  }
</style>
