<template>
    <div>
    <md-progress-spinner class="center" md-mode="indeterminate" v-if="project === undefined"></md-progress-spinner>
    <form novalidate class="md-layout" v-if="project" @submit.prevent="">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">{{project.name}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <md-field>
                <label for="email">Description</label>
                <md-input v-model="project.description" type="text" name="desc" id="desc" disabled/>
            </md-field>

            <md-field>
              <label>Live?</label>
              
              <md-switch v-model="project.active" class="live-switch md-primary"></md-switch>
            </md-field>

          </div>
          <br><br>
        </md-card-content>

         <md-button v-on:click="deleteProject()" v-if="userID === project.owned_by" class="md-fab md-plain md-fab-bottom-right">
            <md-icon>delete</md-icon>
        </md-button>
      </md-card>

    </form>
  </div>
</template>

<script>
export default {
  name: "ViewProject",
  props: ["projectID"],
  data() {
    return {
      project: undefined,
      userID: localStorage.getItem("user_id")
    };
  },
  mounted() {
    this.fetchProject();
  },
  methods: {
    fetchProject() {
      this.$ac.apis.Projects.get_project({
        id: this.$route.params.id || this.projectID
      })
        .then(req => {
          this.project = req.body;
        })
        .catch(err => {
          if (err.response.status === 404) {
            // TODO load 404 page
          } else {
            // TODO show errror
          }
        });
    },
    deleteProject() {
      this.loading = true;
      this.$ac.apis.Projects.delete_project({ id: this.project.id })
        .then(req => {
          this.success = true;
          this.$router.push({ name: "Dashboard" });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>
