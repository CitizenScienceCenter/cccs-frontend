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
import { mapState } from "vuex";
import TaskSubmission from "@/components/task-submission.vue";
export default {
  name: "Participate",
  data() {
    return {
      pid: undefined,
      userID: undefined,
      content: undefined,
      activeTaskIndex: undefined,
      activeTask: undefined,
      btnText: "Let's Go"
    };
  },
  components: { TaskSubmission: TaskSubmission },
  computed: mapState({
    project: state => state.project.project,
    tasks: state => state.task.tasks,
    submisson: state => state.submission.submission,
    loading: state => state.task.loading
  }),
  watch: {
    "$route.params.tid": function(tid) {
      console.log(this.$route.params)
      this.handleTask();

    }
  },
  mounted() {
    this.pid = this.$route.params.id
    this.activeTaskIndex = 0
    this.$store.dispatch("project/getProject", this.pid)
    this.$store.dispatch("task/projectTasks", this.pid)
    this.handleTask()
  },
  updated() {
    console.log('updated')
  },
  methods: {
    handleTask(index) {
      const id = this.$route.params.id;
      const tid = this.$route.params.tid;
      console.log(tid)
        this.activeTask = this.tasks.find(task => {
          return task.id === tid;
        });
        this.activeTaskIndex = this.tasks.findIndex(task => {
          return task.id === tid;
        })

    },
    takePart() {
      const tid = this.$route.params.tid;
      if (!tid) {
        this.$router.push({
          name: "Submission",
          params: { id: this.$route.params.id, tid: this.tasks[0].id }
        });
      } else if (this.activeTaskIndex + 1 !== this.tasks.length) { 
        this.$router.push({
          name: "Submission",
          params: { id: this.$route.params.id, tid: this.tasks[this.activeTaskIndex + 1].id }
        });
      } else {
        // TODO load finished page
        this.btnText = 'Finished'
      }

      // if (this.activeTaskIndex !== this.tasks.length) {
      //   console.log(this.submisson.content)
      //   const submission = {
      //     user_id: this.$store.getters['user/id'],
      //     task_id: this.activeTask.id,
      //     content: {}
      //   }
      //   this.$store.commit('submission/SET_SUBMISSION', submission)
      //   this.activeTaskIndex += 1
      //   this.btnText = 'Next'
      // } else {
      //   console.log(this.submisson.content)
      //   console.log('FINISHED')
      //   this.btnText = 'Finished'
      //   this.activeTaskIndex = 100
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 10%;
}
</style>
