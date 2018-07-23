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
                <label for="desc">{{ $t("views.projects.form_desc") }}</label>
                <md-input v-model="project.description" type="text" name="desc" id="desc" disabled/>
            </md-field>

            <md-field>
              <label for="live">{{ $t("views.projects.form_live") }}</label>
              <md-switch v-model="project.active" class="live-switch md-primary" name="live"></md-switch>
            </md-field>

          </div>
          <br><br>
        </md-card-content>

         <md-button v-on:click="deleteProject()" v-if="user.id === project.owned_by" class="md-fab md-plain md-fab-bottom-right">
            <md-icon>delete</md-icon>
        </md-button>
      </md-card>

    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  name: "ViewProject",
  props: ["projectID"],
  data() {
    return {

    }
  },
  watch: {
    'project'(to, from) {
      if (to === null) {
        this.$router.push('/projects')
      }
    }
  },
  computed: mapState({
    project: state => state.project.selectedProject,
    loading: state => state.settings.loading,
    user: state => state.user.currentUser
  }),
  mounted() {
    this.$store.dispatch('project/getProject', this.$route.params.id || this.projectID)
  },
  methods: {
    deleteProject() {
      this.$store.dispatch('project/deleteProject', this.project.id)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>
