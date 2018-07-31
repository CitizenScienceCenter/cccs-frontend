<template>
  <div>
  <div class="md-layout md-gutter md-alignment-center-space-around">
    <md-card class="title-card md-layout-item md-size-80" v-if="project">
      <md-card-header>
        <span class="md-title">{{project.name}}</span>
      </md-card-header>
      <md-card-content>
        <span class="md-subhead">{{project.description}}</span>
      </md-card-content>
    </md-card>
    </div>
    <br><br>
    <div class="md-layout md-gutter md-alignment-center-space-around" v-if="stats">
    <md-card class="stats md-layout-item md-size-30">
      <md-card-header>
        <span class="md-title">{{stats.task_count}} Tasks </span>
        <!-- <span class="md-subhead"> Tasks</span> -->
      </md-card-header>
    </md-card>
    <md-card class="stats md-layout-item md-size-30" v-if="tasks">
      <md-card-header>
        <span class="md-title">{{stats.contributor_count}} Contributors </span>
        <!-- <span class="md-subhead">Contributions</span> -->
      </md-card-header>
    </md-card>
    <md-card class="stats md-layout-item md-size-30" v-if="tasks">
      <md-card-header>
        <span class="md-title">{{ stats.submission_count }} Submissions </span>
        <!-- <span class="md-subhead">Volunteers</span> -->
      </md-card-header>
    </md-card>
    <md-progress-bar md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></md-progress-bar>
    <task-submission :task=activeTask :content=content></task-submission>
    </div>
    <div class="btn-wrapper md-layout">
      <md-button v-on:click="takePart" class="md-alignment-center-center md-primary md-raised" v-if="tasks.length > 0">{{msgText}}</md-button>
    </div>
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
      msgText: "Let's Go"
    };
  },
  components: { TaskSubmission: TaskSubmission },
  computed: mapState({
    project: state => state.project.selectedProject,
    stats: state => state.project.selectedStats,
    tasks: state => state.task.tasks,
    submission: state => state.submission.submission,
    loading: state => state.settings.loading
  }),
  watch: {
    "$route.params.tid": function(tid) {
      this.handleTask();
    }
  },
  mounted() {
    console.log(this.project.name)
    this.pid = this.$route.params.id;
    this.activeTaskIndex = 0;
    this.$store.dispatch("project/getProject", this.pid);
    this.$store.dispatch("task/projectTasks", this.pid);
    this.handleTask();
  },
  updated() {
    if (this.activeTaskIndex >= this.tasks.length -1) {
      this.msgText = "Finished";
      this.activeTaskIndex = this.tasks.length;
    } else if (this.activeTaskIndex === 0) {
      this.msgText = `Let's Go`;
    } else {
      this.msgText = `Next Task`;
    }
  },
  methods: {
    handleTask(index) {
      const id = this.$route.params.id;
      const tid = this.$route.params.tid;
      this.$store.dispatch("project/getProject", this.pid);
      this.$store.dispatch("task/projectTasks", this.pid);
      this.activeTask = this.tasks.find(task => {
        return task.id === tid;
      });
      this.activeTaskIndex = this.tasks.findIndex(task => {
        return task.id === tid;
      })
      if (this.activeTask) {
        this.createSubmission();
      }
    },
    takePart() {
      const id = this.$route.params.id;
      const tid = this.tasks[0].id;
      if (this.$route.params.tid === undefined) {
        this.$router.push({
          name: "Submission",
          params: { id: id, tid: tid }
        });
      } else if (this.activeTaskIndex + 1 < this.tasks.length) {
        console.log(this.activeTaskIndex, this.tasks)
        const tid = this.tasks[this.activeTaskIndex + 1].id;
        // TODO handle validation here or in store actions
        this.$store.dispatch("submission/postSubmission", this.submission);
        this.$router.push(`/projects/${id}/participate/${tid}`);
      } else {
        // TODO load finished page
        this.$store.dispatch("submission/postSubmission", this.submission);
        this.$store.commit("upload/SET_ID", null);
        this.$router.push(`/projects/${id}`);
      }
    },
    createSubmission() {
      // if (this.activeTaskIndex !== this.tasks.length) {
      //   console.log(this.submisson.content)
      const submission = {
        user_id: this.$store.getters["user/id"],
        task_id: this.activeTask.id,
        content: {}
      };
      this.$store.commit("submission/SET_SUBMISSION", submission);
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 10%;
}
.stats {
  background-color: red;
  color: white;
}
.title-card {
  text-align: center;
}
.btn-wrapper {
  text-align: center;
  .md-button {
    position: relative;
    left: 50%;
  }
}
</style>
