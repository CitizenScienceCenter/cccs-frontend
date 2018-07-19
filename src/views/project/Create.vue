<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="create">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">{{ $t("views.projects.create_title") }}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="name">{{$t("views.projects.form_name")}}</label>
            <md-input type="text" v-model="project.name" name="name" id="name" :disabled="loading" />
          </md-field>

          <md-field>
            <label for="platform">{{$t("views.projects.form_platform")}}</label>
            <md-select v-model="project.platform" name="platform" id="platform">
              <md-option :value="t" :key="t" v-for="t in getModel()">{{t}}</md-option>
            </md-select>
          </md-field>

            <md-field>
              <label>{{$t("views.projects.form_desc")}}</label>
              <md-textarea type="text" v-model="project.description" md-autogrow></md-textarea>
            </md-field>

            <md-field>
              <label>{{$t("views.projects.form_live")}}</label>
              <br>
              <md-switch v-model="project.active" class="live-switch md-primary"></md-switch>
            </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="loading" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="loading">{{$t("views.projects.form_submit")}}</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="projectSaved">
        <span>Your project has been created</span>
        <md-button class="md-primary" :to="{name:'CreateTask', params: {id: project_id}}">Add Some Tasks?</md-button>
      </md-snackbar>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CreateProject",
  data() {
    return {
      msg: "Please create a project",
      project: {
        name: "",
        description: "",
        platform: "Desktop",
        owned_by: ""
      },
      project_id: undefined,
      model: {
        types: ["Desktop", "Mobile", "Both"]
      },
      projectSaved: false
    };
  },
  computed: mapState({
    loading: state => state.settings.loading
  }),
  created() {
    console.log(this.project);
  },
  methods: {
    getModel() {
      return this.model.types;
    },
    create() {
      console.log(this.project);
      this.$ac.apis.Projects.create_project({ project: this.project })
        .then(req => {
          console.log(req);
          this.project_id = req.body.id;
          // this.$router.push({name: 'CreateTask', params: {id: req.body.id}})
          // this.$router.push({name: 'Dashboard'})
        })
        .catch(e => console.error(e));
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
.live-switch {
  padding-top: 1%;
}
</style>
