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
    <md-button v-on:click="takePart" class="md-primary md-raised" v-if="tasks.length > 0">Let's Go!</md-button>
  </div>
</template>

<script>
  export default {
    name: 'Participate',
    data() {
      return {
        project: undefined,
        tasks: [1, 2, 3],
        userID: undefined
      }
    },
    mounted() {
      this.fetchProjects()
      this.userID = localStorage.getItem('user_id')
    },
    methods: {
      fetchProjects() {
        this.$ac.apis.Projects.get_project({
            id: this.$route.params.id || undefined
          })
          .then(req => {
            this.project = req.body
          })
          .catch(err => {
            if (err.response.status === 404) {
              // TODO load 404 page
            } else {
              // TODO show errror
            }
          })
      },
      fetchTasks() {
        this.$ac.apis.Tasks.get({search_term: this.$route.params.id})
          .then( req => {

          }).catch(err => {
            console.error(err);
          })
      },
      takePart() {
        
      }
    }
  }
</script>
<style lang="scss" scoped>
  .banner {
    height: 10%
  }
</style>
